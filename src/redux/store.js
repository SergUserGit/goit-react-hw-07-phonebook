import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './slice';

//import { contactsReducer } from './slice';

//const persistConfig = {
// key: 'phonebook',
// storage,
// whitelist: ['contacts'],
//};

//const persistedContactsReducer = persistReducer(persistConfig, contactsReducer);

export const store = configureStore({
  reducer: {
    phonebook: contactsReducer,
  },
  //  middleware: getDefaultMiddleware =>
  //   getDefaultMiddleware({
  //     serializableCheck: {
  //      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
  //    },
  //   }),
});

//export const persistor = persistStore(store);
