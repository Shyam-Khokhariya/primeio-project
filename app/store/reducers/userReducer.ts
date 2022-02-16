import createReducer from 'app/lib/createReducer';
import * as types from 'app/store/actions/types';

const initialState: any = {};

export const userReducer = createReducer(initialState, {
  [types.USER_REQUEST](state: any) {
    return {
      ...state,
    };
  },
  [types.USER_RESPONSE](state: any, action: any) {
    console.log('state-----', action);
    return {
      ...state,
      data: action.response.data,
    };
  },
});
