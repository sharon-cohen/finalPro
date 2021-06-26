import { SET_PERSON_DATA, ADD_PURCHASE } from './productActions';

const initialState = {
  list: [],
};
export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PERSON_DATA: {
      if (Array.isArray(action.payload)) {
        return {
          ...state,
          list: action.payload,
        };
      }

      console.log(action.payload);
      const temp = state.list;
      temp.push(action.payload);
      return {
        ...state,
        list: temp,
      };
    }
    case ADD_PURCHASE: {
      let newList = [];
      newList = state.list.map((listItem) => {
        const updatedListItem = { ...listItem };
        // 	(action.payload[0].time, 'omer')

        if (updatedListItem.name === action.payload) {
          updatedListItem.reg++;
          return updatedListItem;
        }

        return updatedListItem;
      });
      return {
        ...state,
        list: newList,
      };
    }
    default: {
      return state;
    }
  }
};
