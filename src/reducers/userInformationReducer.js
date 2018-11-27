import { CREATE_ACCOUNT, SIGN_IN, SIGN_OUT } from '../actions/types';

const initialState = {
  userId: "",
  error: "",
  fname: "",
  lname: "",
  username: "" ,
  maximumRent: "",
  email: "",
  accountType: "",
  viewingList: []
}

export default function(state = initialState, action) {
  switch (action.type) {
    case CREATE_ACCOUNT:
      return {
        ...state,
        ...action.payload
      }
    case SIGN_IN:
      return {
        ...state,
        ...action.payload
      }
    case SIGN_OUT:
      return {
        ...state,
        ...action.payload
      }

    default:
      return state;
  }
}
