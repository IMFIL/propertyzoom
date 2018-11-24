import { CREATE_ACCOUNT, SIGN_IN } from '../actions/types';

const initialState = {

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
    default:
      return state;
  }
}
