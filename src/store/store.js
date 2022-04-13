import { configureStore } from "@reduxjs/toolkit";
import storage from 'redux-persist/lib/storage';
//import { persistReducer } from 'redux-persist';
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
  } from 'redux-persist'
import {combineReducers} from "redux";
import cartReducer from './cartSlice';
    
// const reducers = combineReducers({
//        cartReducer,           
//    });
   
//    const persistConfig = {
//        key: 'root',
//        storage
//    };
   
   
//    const persistedReducer = persistReducer(persistConfig, cartReducer);
   
//    const store = configureStore({
//     reducer: persistedReducer,
//     middleware: (getDefaultMiddleware) =>
//       getDefaultMiddleware({
//         serializableCheck: {
//           ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//         },
//       }),
//   })
   
//    const store = configureStore({
//        reducer: persistedReducer,
//     //    devTools: process.env.NODE_ENV !== 'production',
//     //    middleware: [thunk]
//    });
 const store = configureStore({
    reducer :{
        cart : cartReducer,
    }
}
);

export default store;