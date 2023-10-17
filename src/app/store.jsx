import { configureStore } from "@reduxjs/toolkit";
import dataMarkdown from "../features/data-markdown/dataMarkdown";

export const store = configureStore({
  reducer: {
    dataMarkdown: dataMarkdown,
  },
})