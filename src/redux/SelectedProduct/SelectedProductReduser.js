import { SELECTED_PRODUCT } from "./SelectedProductActions";
const initialState = {
  product:{}
};
export const ProductReducer = (state = initialState, action) => {
	switch (action.type) {
		case SELECTED_PRODUCT:
		
		return {
		  ...state,
		  category: action.payload,
		};
		default:
		
		{
			
            return state;
		} 
	}
	};