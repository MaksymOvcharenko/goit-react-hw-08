import { configureStore } from "@reduxjs/toolkit";
import { contactReducer } from "./contactsSlice";
import { filterReducer } from "./filtersSlice";

// export const store = configureStore({
//   reducer: {
//     contact: contactReducer,
//     filter: filterReducer,
//   },
// });
///////////

export const store = configureStore({
  reducer: {
    contact: contactReducer,
    filter: filterReducer,
  },
});

// export let store = persistStore(store);
