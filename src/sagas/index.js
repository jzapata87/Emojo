import { put, takeEvery, call, select } from 'redux-saga/effects'
import fetchBoundingBox, { s3Upload, getUserData } from '../api/index'


function* fetchData(action) {

   try {
      const data = yield fetchBoundingBox(action.uri)
      yield put({type: "FETCH_SUCCEEDED", data: data.BoundingBox})

   } catch (error) {
      yield put({type: "FETCH_FAILED", error})
   }
}

function* uploadToS3(action) {

   try {
      const data = yield s3Upload(action.uri, action.fileName, action.type)
      yield put({type: "SHARE_SUCCEEDED", data: data.Location})

   } catch (error) {
      yield put({type: "SHARE_FAILED", error})
   }
}

function* getUserInfo(action) {

   try {
      const data = yield getUserData(action.token)
      yield put({type: "GET_USER_INFO_SUCCEEDED", data: data})

   } catch (error) {
      yield put({type: "GET_USER_INFO_FAILED", error})
   }
}

function* emojiMounted(action) {
  try {
    yield put({type: "CAPTURE", capture: true})
  } catch (error) {

  }
}

export default function* watchFetchData() {
  yield takeEvery('FETCH_REQUESTED', fetchData)
  yield takeEvery('EMOJI_MOUNTED', emojiMounted)
  yield takeEvery('SHARE_STARTED', uploadToS3)
  yield takeEvery('GET_USER_INFO', getUserInfo)
}
