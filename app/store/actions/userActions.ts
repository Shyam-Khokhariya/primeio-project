/*
 * Reducer actions related with login
 */
import * as types from './types';

export function requestUser() {
  return {
    type: types.USER_REQUEST
  };
}

export function onUserResponse(response: any) {
  return {
    type: types.USER_RESPONSE,
    response,
  };
}

