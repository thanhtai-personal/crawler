import apiService from 'root/apis'
import { put, takeLatest, all } from 'redux-saga/effects'
import actionType from 'root/actionTypes'

function* crawlingAll(data) {
  try {
    const dataResponse = yield apiService.crawler?.crawlingAll(data.site).then(response => response)
    yield put({ type: actionType.CRAWLING_ALL.SUCCESS, payload: dataResponse });
  } catch(error) {
    yield put({ type: actionType.CRAWLING_ALL.FAILED, payload: { error: error } })
  } 
}

function* crawlingSingle(data) {
  try {
    const dataResponse = yield apiService.crawler?.crawlingAll({
      site: data?.site,
      name: data?.name
    }).then(response => response)
    yield put({ type: actionType.CRAWLING_SINGLE.SUCCESS,
      payload: dataResponse,
      site: data?.site,
      name: data?.name
    });
  } catch(error) {
    yield put({
      type: actionType.CRAWLING_SINGLE.FAILED,
      payload: { error: error }, 
      site: data?.site,
      name: data?.name
    })
  } 
}

function* crawlerAdminActionWatcher() {
  yield all([
    yield takeLatest(actionType.CRAWLING_ALL.PENDING, crawlingAll),
    yield takeLatest(actionType.CRAWLING_SINGLE.PENDING, crawlingSingle)
  ])
}

export default crawlerAdminActionWatcher