import React, { useEffect } from "react";
import classes from "./CalendarHeader.module.scss";
import {
	ChevronLeftIcon,
	ChevronRightIcon,
} from "../../../../../Icons/layoutIcons";

// UTILS
import { getDateDetails } from "../../../../../utils/get-date-details";

// REDUX
import { useDispatch, useSelector } from "react-redux";
import { setKeysAndValues } from "../../../../../Redux/features/my-tasks-slice";

function CalendarHeader() {
	// REDUX
	const dispatch = useDispatch();
	// REDUX SELECTORS
	const { calendarView, tasks } = useSelector((state) => state.myTasks);
	const activeMonth = calendarView.date.activeMonth;
	const activeYear = calendarView.date.activeYear;
	const activeDay = calendarView.date.activeDay;
	const date_from_active = new Date(activeYear, activeMonth - 1, activeDay);

	// SET THE DATE HANDLER
	const setDate = (date = new Date()) => {
		// GET THE DATE (TODAY, ACTIVE DAY = TODAY, ACTIVE MONTH = THIS MONTH, ACTIVE YEAR = THIS YEAR)
		const today = new Date().getDate();
		const activeDay = date.getDate();
		const activeMonth = date.getMonth() + 1;
		const activeYear = date.getFullYear();

		// FILTER THE TASKS FOR 4 DAYS STARTING FROM THE ACTIVE DAY
		const sections = {};
		// ADD 7 DAYS AS THE KEYS OF SECTIONS OBJECT STARTING FROM THE ACTIVE DATE
		for (let i = 0; i < 7; i++) {
			const date = new Date(activeYear, activeMonth - 1, activeDay + i);
			const dateString = `${date.getDate()}-${
				date.getMonth() + 1
			}-${date.getFullYear()}`;
			sections[dateString] = [];
		}

		// LOOP THROUGH THE ITEMS AND ADD THEM TO THE SECTIONS OBJECT THE ALREADY EXISTING KEYS ONLY AND SKIP WHAT WE DONT NEED
		if (tasks.length > 0) {
			tasks.forEach((task) => {
				const { startDate } = task;
				const date = new Date(startDate);
				const dateString = `${date.getDate()}-${
					date.getMonth() + 1
				}-${date.getFullYear()}`;
				if (sections[dateString]) {
					sections[dateString].push(task);
				}
			});
		}

		// SET THE STATE
		dispatch(
			setKeysAndValues([
				{
					key: "calendarView",
					value: {
						...calendarView,
						date: {
							today,
							activeDay,
							activeMonth,
							activeYear,
						},
						sections,
					},
				},
			])
		);
	};

	// EFFECT TO GET THE TASKS AND SETTING THEM
	useEffect(() => {
		// SET THE DATE
		setDate();
	}, []);

	return (
		<div className={classes.CalendarHeader}>
			<div className={classes.CalendarHeader__Today}>
				<button
					className={classes.CalendarHeader__Today__Button}
					onClick={() => {
						// SET THE DATE TO BE THE ACTIVE DATE - 4 DAYS
						setDate(
							new Date(activeYear, activeMonth - 1, activeDay - 4)
						);
					}}
				>
					<ChevronLeftIcon size={16} />
				</button>
				<button
					className={classes.CalendarHeader__Today__Button}
					onClick={() => setDate()}
				>
					Today
				</button>
				<button
					className={classes.CalendarHeader__Today__Button}
					onClick={() => {
						// SET THE DATE TO BE THE ACTIVE DATE + 4 DAYS
						setDate(
							new Date(activeYear, activeMonth - 1, activeDay + 4)
						);
					}}
				>
					<ChevronRightIcon size={16} />
				</button>
			</div>
			<div className={classes.CalendarHeader__M_Y}>
				{getDateDetails(new Date(date_from_active)).month}{" "}
				{getDateDetails(date_from_active).year}
			</div>
		</div>
	);
}

export default CalendarHeader;
