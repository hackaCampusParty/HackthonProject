import { combineReducers } from 'redux';

import AuthReducer from './AuthReducer';
import InternalReducer from './InternalReducer';

export default combineReducers({
  auth: AuthReducer,
  internal: InternalReducer,
});
