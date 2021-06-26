import { ADD_PRODUCT } from './RealTimeBuyProductAction';
const initialState = {
  list: [],
  countReady: 0,
  countJoin: 0,
};
export const RealTimeBuyProductReduser = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCT:
      let join = 0;
      let redy = 0;
      if (Array.isArray(action.payload)) {
        for (let i = 0; i < action.payload.length; i++) {
          if (Number(action.payload[i].reg) >= Number(action.payload[i].goal)) {
            redy++;
          } else {
            join++;
          }
        }
      } else if (Number(action.payload.reg) >= Number(action.payload.goal)) {
        redy = state.countReady + 1;
      } else {
        join = state.countJoin + 1;
      }
      return {
        ...state,
        list: state.list.concat(action.payload),
        countJoin: join,
        countReady: redy,
      };
    default: {
      return state;
    }
  }
};
