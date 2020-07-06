import {createStore, applyMiddleware, combineReducers} from "redux";
import  {booksReducer, cartReducer} from "./reducers";
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
   bookState: booksReducer,
   cartState: cartReducer
});

const logMiddleWare  = ({getState, dispatch}) => dispatch => action => {
   console.log(action.type, getState())

   return dispatch(action)
}

const store = createStore(rootReducer, applyMiddleware(thunk, logMiddleWare));

export default store;

