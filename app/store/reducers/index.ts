/*
 * combines all th existing reducers
 */
import * as loadingReducer from './loadingReducer';
import * as userReducer from './userReducer';
import * as themeReducer from './themeReducer';
export default Object.assign(userReducer, loadingReducer, themeReducer);
