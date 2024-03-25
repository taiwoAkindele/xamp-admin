import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";

import authReducer from "./auth/slice";
import { authApi } from "../api/authSlice";
import { userApi } from "../api/userSlice";
import { listingApi } from "../api/listingSlice";
import { transactionApi } from "../api/transactionSlice";
import { profileApi } from "../api/profileSlice";
import { settingsApi } from "../api/settingsSlice";

const reducers = combineReducers({
  [authApi.reducerPath]: authApi.reducer,
  [userApi.reducerPath]: userApi.reducer,
  [listingApi.reducerPath]: listingApi.reducer,
  [transactionApi.reducerPath]: transactionApi.reducer,
  [profileApi.reducerPath]: profileApi.reducer,
  [settingsApi.reducerPath]: settingsApi.reducer,
  auth: authReducer,
});

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(authApi.middleware)
      .concat(userApi.middleware)
      .concat(listingApi.middleware)
      .concat(transactionApi.middleware)
      .concat(profileApi.middleware)
      .concat(settingsApi.middleware),
  devTools:
    import.meta.env.VITE_APP_ENV !== "development" ||
    import.meta.env.VITE_APP_ENV !== "production",
});

export const persistor = persistStore(store);
