import { all } from 'redux-saga/effects'
import authSagas from './auth'


export default function* rootSaga() {
  const listSagas = [
    authSagas,
  ]
  yield all(listSagas.map((saga) => saga()))
}