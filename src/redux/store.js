// import { combineReducers} from "redux";
// import { devToolsEnhancer } from "@redux-devtools/extension";

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



// const rootReduser = combineReducers({
//     mailbox: mailboxReduser
// })

// const enhancer = devToolsEnhancer()
// export const store = createStore(rootReduser, enhancer)

const mailboxPersistConfig = {
    key: "mailbox",
    storage,
    Whitelist: ["users"],
    // blacklist: ['timer'],
  };

export const store = configureStore({
    reducer: {
        mailbox: persistReducer(mailboxPersistConfig, mailboxReducer),
        timer: timerReducer
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoreActions: [FLUSH, REHYDRATE, PAUSE, REGISTER, PURGE, PERSIST],
      },
    }),
  });

  export const persistor = persistStore(store);