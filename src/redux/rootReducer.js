import { combineReducers } from 'redux';
import { ProductReducer } from './SelectedProduct/SelectedProductReduser';
import { reducer } from './product/productReduser';
import { categoryReducer } from './category/categoryReduser';
import { userReduse } from './User/userReduse';
import { RealTimeBuyProductReduser } from './RealTimeBuyProduct/RealTimeBuyProductReduser';
export const rootReducer = combineReducers({
  listPro: reducer,
  currentCategory: categoryReducer,
  selectedProduct: ProductReducer,
  user: userReduse,
  realTimeList: RealTimeBuyProductReduser,
});
