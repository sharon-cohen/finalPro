import  {SET_PERSON_DATA} from "./productActions";
import { firebase } from '../../firebase/config'

const initialState = {
    list: [
		
	],
};
export const reducer = (state = initialState, action) => {
    switch(action.type) {
      
        case SET_PERSON_DATA:
		// og(typeof(action.payload))
	
		let updatedList=[]
		if (state.list.length === 0){
			updatedList = action.payload
		}	
		else{
			updatedList = state.list.map((listItem) => {
				
			let updatedListItem = { ...listItem };
				// console.log(action.payload[0].time, 'omer')
				
			if (JSON.stringify(updatedListItem.time) === JSON.stringify(action.payload[0].time) ) {
				
				updatedListItem = action.payload[0];
			  return updatedListItem;
			}
			
			return updatedListItem;
		  });
		}
		

		// const updatedList = state.list.map(listItem=>{
			// 	const updatedListItem = {...listItem}
			// 	if(updatedListItem.id === action.payload.id){
			// 		updatedListItem = action.payload
			// 		return updatedListItem
	
			// 	}
			// 		updatedListItem.isOn=false
			// 		return updatedListItem
			// })


	
		return {
				...state,
				list: updatedList,
			  };

        default:{
			
            return state;
		} 
			
    }
};