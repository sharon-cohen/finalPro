import { SELECTED_CATEGORY } from "./categoryActions";

const initialState = {
  category:"מומלצים"
};
export const categoryReducer = (state = initialState, action) => {
	switch (action.type) {
	  
		case SELECTED_CATEGORY:

		return {
		  ...state,
		  category: action.payload,
		};
		default:{
			
            return state;
		} 
	}
	};