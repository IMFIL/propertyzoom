import { combineReducers } from 'redux';
import userInformationReducer from './userInformationReducer';

export default combineReducers({
  userInfo: userInformationReducer
});
