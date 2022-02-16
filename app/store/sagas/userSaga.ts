
import { call, put } from 'redux-saga/effects';

import { Alert } from 'react-native';
import * as userAction from 'app/store/actions/userActions';
import User from 'app/services/user';

export default function* userAsync() {
  const response = yield call(User);
  if (response) {
    yield put(userAction.onUserResponse(response));
  } else {
    setTimeout(() => {
      Alert.alert('API Failed', response.message);
    }, 200);
  }
}
