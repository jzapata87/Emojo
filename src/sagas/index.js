import { put, takeEvery, call, select } from 'redux-saga/effects'
import fetchBoundingBox from '../api/index'


function* fetchData(action) {

   try {
      const data = yield fetchBoundingBox(action.uri)
      yield put({type: "FETCH_SUCCEEDED", data: data.BoundingBox})

   } catch (error) {
      yield put({type: "FETCH_FAILED", error})
   }
}

export default function* watchFetchData() {
  yield takeEvery('FETCH_REQUESTED', fetchData)
}