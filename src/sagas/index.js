import { put, takeEvery, call, select, fork } from 'redux-saga/effects'
import fetchBoundingBox, { s3Upload, getUserData, fetchFeed } from '../api/index'


function* fetchData(action) {

   try {
      const data = yield fetchBoundingBox(action.uri)
      console.log("fetch bounding box data", data)
      yield put({type: "FETCH_SUCCEEDED", data: data})

   } catch (error) {
      yield put({type: "FETCH_FAILED", error})

   }
}

function* uploadToS3(action) {

   try {
     // make sure the correct payload is being pass through....imageType/Type
      const data = yield s3Upload(action.uri, action.fileName, action.imageType, action.id)
      yield put({type: "SHARE_SUCCEEDED", data: data})

   } catch (error) {
      yield put({type: "SHARE_FAILED", error})
   }
}

function* getUserInfo(action) {

   try {
      const data = yield getUserData(action.token)
      yield put({type: "GET_USER_INFO_SUCCEEDED", data: data})
      yield put({type: "GET_USER_FEED", id: data.user.id})

   } catch (error) {
      yield put({type: "GET_USER_INFO_FAILED", error})

   }
}

function* fetchUserFeed(action) {

   try {
      const data = yield fetchFeed(action.id)
      yield put({type: "GET_USER_FEED_SUCCEEDED", data: data})

   } catch (error) {
      yield put({type: "GET_USER_FEED_FAILED", error})

   }
}


export default function* watchFetchData() {
  yield takeEvery('FETCH_REQUESTED', fetchData)
  yield takeEvery('SHARE_STARTED', uploadToS3)
  yield takeEvery('GET_USER_INFO', getUserInfo)
  yield takeEvery('GET_USER_FEED', fetchUserFeed)

}
