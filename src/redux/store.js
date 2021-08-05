import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import storage from 'redux-persist/lib/storage';
import authReducers from "./auth/auth-reducers";
import contactsReducer from "./contacts/contacts-reducer";
import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
 

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
  
];

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};


const store = configureStore({
    reducer: {
        auth: persistReducer(authPersistConfig, authReducers),
        contacts: contactsReducer,
  },
  middleware,
  devTools: process.env.NODE_ENV === 'development',

});

const persistor = persistStore(store);

export default { store, persistor };