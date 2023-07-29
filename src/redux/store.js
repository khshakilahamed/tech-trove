import { configureStore } from "@reduxjs/toolkit";
import pcBuilderReducer from "./features/pcBuilder/pcBuilderSlice";

const store = configureStore({
  reducer: {
    pcBuild: pcBuilderReducer,
  },
});

export default store;
