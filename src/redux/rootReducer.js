import { combineReducers } from 'redux';

import { reducer } from './product/productReduser'
import { categoryReducer } from './category/categoryReduser';
export const rootReducer = combineReducers({
  listPro: reducer,
  currentCategory: categoryReducer,
});