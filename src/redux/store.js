
import { configureStore } from "@reduxjs/toolkit";
import { mailboxReducer } from "./mailbox/mailboxReducer";
import { timerReducer } from "./timer/timerSlice";

import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
  } from "redux-persist";
  import storage from "redux-persist/lib/storage";
import { productDetailsReducer } from "./productDetails/productDetailsSlice";

const mailboxPersistConfig = {
    key: "mailbox",
    storage,
    Whitelist: ["users"],
    // blacklist: ['timer'],
  };

export const store = configureStore({
    reducer: {
        mailbox: persistReducer(mailboxPersistConfig, mailboxReducer),
        timer: timerReducer,
        productDetails : productDetailsReducer
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoreActions: [FLUSH, REHYDRATE, PAUSE, REGISTER, PURGE, PERSIST],
      },
    }),
  });

  export const persistor = persistStore(store);