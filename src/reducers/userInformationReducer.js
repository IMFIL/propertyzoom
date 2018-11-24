import { SIGNIN } from '../actions/types';

const initialState = {

}

export default function(state = initialState, action) {
  switch (action.type) {
    case SIGNIN:
      return {
        ...state,
        ...action.payload
      }
    default:
    return state;
  }
}
