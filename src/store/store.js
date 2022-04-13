import { configureStore } from "@reduxjs/toolkit";
import storage from 'redux-persist/lib/storage';
import {
    persistReducer,

  } from 'redux-persist'
import {combineReducers} from "redux";
import cartReducer from './cartSlice';
    
const reducers = combineReducers({
       cart :cartReducer ,           
   });
   
   const persistConfig = {
       key: 'root',
       storage,
       whitelist:['cart'] 
   };
   
   
    const persistedReducer = persistReducer(persistConfig, reducers);
   
   const store = configureStore({
    reducer: persistedReducer,
  })
   

export default store;