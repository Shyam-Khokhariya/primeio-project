/**
 *  Redux saga class init
 */
import { takeEvery, all } from 'redux-saga/effects';
import * as types from '../actions/types';
import userSaga from './userSaga';

export default function* watch() {
  yield all([takeEvery(types.USER_REQUEST, userSaga)]);
}
