import { all } from 'redux-saga/effects'
import authSagas from './auth'
import crawlerAdminSagas from './crawlerAdmin'


export default function* rootSaga() {
  const listSagas = [
    authSagas,
    crawlerAdminSagas,
  ]
  yield all(listSagas.map((saga) => saga()))
}