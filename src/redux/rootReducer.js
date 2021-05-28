import { combineReducers } from 'redux';

import { reducer } from './product/productReduser'
export const rootReducer = combineReducers({
  listPro: reducer,
  
});