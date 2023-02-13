import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { filterSlice } from './myContacts/filterSlice';
import { contactsSlice } from './myContacts/contactsSlice';
import { authSlice } from './auth/slice';

const persistConfig = {
  key: 'userToken',
  storage,
  whitelist: ['token'],
};

const persistedAuthReduser = persistReducer(persistConfig, authSlice.reducer);

export const store = configureStore({
  reducer: {
    contacts: contactsSlice.reducer,
    filter: filterSlice.reducer,
    auth: persistedAuthReduser,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistedStore = persistStore(store);
