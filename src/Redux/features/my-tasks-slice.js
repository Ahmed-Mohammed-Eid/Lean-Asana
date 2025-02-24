import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	tasks: [],
	calendarView: {
		date: {
			today: "",
			activeDay: "",
			activeMonth: "",
			activeYear: "",
		},
		sections: {},
	},
	boardView: {
		sections: {},
		tasks: {},
	},
	ui: {
		isEditing: false,
		taskToEdit: null,
	},
};

const myTasksSlice = createSlice({
	name: "myTasks",
	initialState,
	reducers: {
		setKeysAndValues: (state, action) => {
			action.payload.forEach((item) => {
				state[item.key] = item.value;
			});
		},
	},
});

export const { setKeysAndValues } = myTasksSlice.actions;
export default myTasksSlice.reducer;
