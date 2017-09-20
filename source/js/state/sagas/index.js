import { fork } from 'redux-saga/effects'
import userSagas from 'state/sagas/userSagas'

const sagas = [
  ...userSagas,
]

export default function* rootSaga() {
  yield sagas.map(saga => fork(saga))
}
