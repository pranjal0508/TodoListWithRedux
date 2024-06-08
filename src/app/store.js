// Flow of Redux : store -> Reducer -> useSelector -> useDispatch
// 1 Creating a store using configureStore method and exporting it
import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../features/todo/todoSlice";

export const store = configureStore({
    // 6 Configure all the reducers related to store
    reducer: todoReducer
});