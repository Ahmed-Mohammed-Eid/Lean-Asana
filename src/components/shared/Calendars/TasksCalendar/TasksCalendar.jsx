import React, { useState, useCallback, useMemo } from "react";
import styles from "./TasksCalendar.module.scss";

const TasksCalendar = ({
	onDateSelect = () => {},
	onDateRangeSelect,
	allowRange = true,
}) => {
	const today = useMemo(() => new Date(), []);
	const [currentDate, setCurrentDate] = useState(today);
	const [startDate, setStartDate] = useState(null);
	const [endDate, setEndDate] = useState(null);
	const [hoverDate, setHoverDate] = useState(null);

	// Memoized date calculations
	const daysInMonth = useCallback(
		(month, year) => new Date(year, month + 1, 0).getDate(),
		[]
	);

	const firstDayOfMonth = useCallback(
		(month, year) => new Date(year, month, 1).getDay(),
		[]
	);

	const isSameDay = useCallback((date1, date2) => {
		return (
			date1 &&
			date2 &&
			date1.getFullYear() === date2.getFullYear() &&
			date1.getMonth() === date2.getMonth() &&
			date1.getDate() === date2.getDate()
		);
	}, []);

	const isToday = useCallback(
		(day) => {
			const date = new Date(
				currentDate.getFullYear(),
				currentDate.getMonth(),
				day
			);
			return isSameDay(date, today);
		},
		[currentDate, today, isSameDay]
	);

	const handleDayClick = (day) => {
		const selectedDate = new Date(
			currentDate.getFullYear(),
			currentDate.getMonth(),
			day
		);

		if (!allowRange) {
			setStartDate(selectedDate);
			setEndDate(null);
			onDateSelect(selectedDate);
			return;
		}

		if (!startDate || (startDate && endDate)) {
			setStartDate(selectedDate);
			setEndDate(null);
		} else {
			const start = startDate.getTime();
			const selected = selectedDate.getTime();

			if (selected > start) {
				setEndDate(selectedDate);
				onDateRangeSelect?.({ startDate, endDate: selectedDate });
			} else {
				setEndDate(startDate);
				setStartDate(selectedDate);
				onDateRangeSelect?.({
					startDate: selectedDate,
					endDate: startDate,
				});
			}
		}
	};

	const handleDayHover = (day) => {
		if (allowRange && startDate && !endDate) {
			const hoverDate = new Date(
				currentDate.getFullYear(),
				currentDate.getMonth(),
				day
			);
			setHoverDate(hoverDate);
		}
	};

	const isDayInRange = useCallback(
		(day) => {
			if (!startDate) return false;

			const currentDay = new Date(
				currentDate.getFullYear(),
				currentDate.getMonth(),
				day
			).getTime();

			const startTime = startDate.getTime();
			const endTime = endDate?.getTime();
			const hoverTime = hoverDate?.getTime();

			if (endTime) {
				return currentDay >= startTime && currentDay <= endTime;
			}

			if (hoverTime) {
				return (
					(currentDay >= startTime && currentDay <= hoverTime) ||
					(currentDay <= startTime && currentDay >= hoverTime)
				);
			}

			return startTime === currentDay;
		},
		[currentDate, startDate, endDate, hoverDate]
	);

	const renderDays = () => {
		const days = [];
		const totalDays = daysInMonth(
			currentDate.getMonth(),
			currentDate.getFullYear()
		);
		const firstDay = firstDayOfMonth(
			currentDate.getMonth(),
			currentDate.getFullYear()
		);

		// Empty cells for days before the first day of month
		for (let i = 0; i < firstDay; i++) {
			days.push(<div key={`empty-${i}`} className={styles.empty}></div>);
		}

		// Render actual days
		for (let i = 1; i <= totalDays; i++) {
			const currentDayDate = new Date(
				currentDate.getFullYear(),
				currentDate.getMonth(),
				i
			);
			const dayIsToday = isToday(i);
			const isInRange = isDayInRange(i);
			const isRangeStart =
				startDate && isSameDay(currentDayDate, startDate);
			const isRangeEnd = endDate && isSameDay(currentDayDate, endDate);

			days.push(
				<div
					key={i}
					className={`${styles.day}
            ${isInRange ? styles.inRange : ""}
            ${isRangeStart ? styles.rangeStart : ""}
            ${isRangeEnd ? styles.rangeEnd : ""}
            ${dayIsToday ? styles.today : ""}`}
					onClick={() => handleDayClick(i)}
					onMouseEnter={() => handleDayHover(i)}
					onMouseLeave={() => setHoverDate(null)}
					role="button"
					tabIndex={0}
					aria-label={`${i} ${currentDate.toLocaleString("default", {
						month: "long",
					})} ${currentDate.getFullYear()}`}
				>
					{i}
				</div>
			);
		}

		return days;
	};

	const goToToday = () => {
		setCurrentDate(new Date());
	};

	const changeMonth = (offset) => {
		setCurrentDate(
			new Date(
				currentDate.getFullYear(),
				currentDate.getMonth() + offset,
				1
			)
		);
	};

	const changeYear = (offset) => {
		setCurrentDate(
			new Date(
				currentDate.getFullYear() + offset,
				currentDate.getMonth(),
				1
			)
		);
	};

	const handleKeyDown = useCallback((e) => {
		switch (e.key) {
			case "ArrowLeft":
				changeMonth(-1);
				break;
			case "ArrowRight":
				changeMonth(1);
				break;
			case "ArrowUp":
				changeYear(-1);
				break;
			case "ArrowDown":
				changeYear(1);
				break;
			default:
				break;
		}
	}, []);

	return (
		<div
			className={styles.calendar}
			onKeyDown={handleKeyDown}
			role="region"
			aria-label="Calendar"
		>
			<div className={styles.header}>
				<div className={styles.currentPeriod}>
					<span>
						{currentDate.toLocaleString("default", {
							month: "long",
							year: "numeric",
						})}
					</span>
					<button
						onClick={goToToday}
						className={styles.todayButton}
						aria-label="Go to today"
					>
						Today
					</button>
				</div>
				<div className={styles.navigation}>
					<button
						onClick={() => changeMonth(-1)}
						aria-label="Previous month"
					>
						←
					</button>
					<button
						onClick={() => changeMonth(1)}
						aria-label="Next month"
					>
						→
					</button>
				</div>
			</div>

			<div className={styles.days} role="grid">
				{["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map(
					(day) => (
						<div
							key={day}
							className={styles.dayName}
							role="columnheader"
						>
							{day}
						</div>
					)
				)}
				{renderDays()}
			</div>
		</div>
	);
};

export default TasksCalendar;
