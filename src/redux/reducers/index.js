import { combineReducers } from 'redux';
import productReducer from './product.reducer';
import userReducer from './user.reducer';
import todoReducer from './todo.reducer';

export default combineReducers({
  productReducer: productReducer,
  userReducer: userReducer,
  todoReducer: todoReducer,
})
