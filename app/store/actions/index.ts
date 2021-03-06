// export action creators
import * as loginActions from './loginActions';
import * as userActions from './userActions';
import * as navigationActions from './navigationActions';
import * as themeActions from './themeActions';

export const ActionCreators = Object.assign(
  {},
  userActions,
  loginActions,
  navigationActions,
  themeActions,
);
