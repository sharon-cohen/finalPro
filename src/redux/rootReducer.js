import { combineReducers } from 'redux';
import { ProductReducer } from './SelectedProduct/SelectedProductReduser';
import { reducer } from './product/productReduser'
import { categoryReducer } from './category/categoryReduser';
export const rootReducer = combineReducers({
  listPro: reducer,
  currentCategory: categoryReducer,
  selectedProduct:ProductReducer,
});