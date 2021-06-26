import { SET_USER } from './userActions';

const initialState = {
  user: {},
};
export const userReduse = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        user: action.payload,
      };

    default: {
      return state;
    }
  }
};
