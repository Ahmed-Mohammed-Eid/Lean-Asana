import React, { useState, useEffect, useRef } from "react";
import styles from "./CalendarButton.module.scss";
import TasksCalendar from "../TasksCalendar/TasksCalendar";
import { CalendarIcon } from "../../../../Icons/layoutIcons";

const CalendarButton = ({
	value,
	onSelect,
	onRangeSelect,
	allowRange = false,
	icon = <CalendarIcon size={16} />,
	label = "Set Date",
}) => {
	const [isOpen, setIsOpen] = useState(false);
	const buttonRef = useRef(null);

	useEffect(() => {
		const handleClickOutside = (event) => {
			if (
				buttonRef.current &&
				!buttonRef.current.contains(event.target)
			) {
				setIsOpen(false);
			}
		};

		document.addEventListener("mousedown", handleClickOutside);
		return () =>
			document.removeEventListener("mousedown", handleClickOutside);
	}, []);

	const formatDate = (date) => {
		if (!date) return "";
		return new Date(date).toLocaleDateString("en-US", {
			month: "short",
			day: "numeric",
		});
	};

	const handleSelect = (date) => {
		onSelect?.(date);
		setIsOpen(false);
	};

	const handleRangeSelect = (range) => {
		onRangeSelect?.(range);
		setIsOpen(false);
	};

	const getButtonText = () => {
		if (!value) return label;
		if (Array.isArray(value)) {
			const [start, end] = value;
			return `${formatDate(start)} - ${formatDate(end)}`;
		}
		return formatDate(value);
	};

	return (
		<div className={styles.CalendarButton} ref={buttonRef}>
			<button
				onClick={() => setIsOpen(!isOpen)}
				className={`${styles.button} ${isOpen ? styles.active : ""}`}
			>
				{icon}
				<span>{getButtonText()}</span>
			</button>
			<div
				className={`${styles.calendarWrapper} ${
					isOpen ? styles.open : ""
				}`}
			>
				<TasksCalendar
					onDateSelect={handleSelect}
					onDateRangeSelect={handleRangeSelect}
					allowRange={allowRange}
				/>
			</div>
		</div>
	);
};

export default CalendarButton;
