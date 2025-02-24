import { configureStore } from "@reduxjs/toolkit";
// REDUCERS
import myTasksReducer from "./features/my-tasks-slice";

export const store = configureStore({
	reducer: {
		myTasks: myTasksReducer,
	},
});
