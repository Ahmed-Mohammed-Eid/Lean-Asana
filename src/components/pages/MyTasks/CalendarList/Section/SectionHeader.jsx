import React from "react";
import classes from "./SectionHeader.module.scss";
import { PlusIcon } from "../../../../../Icons/layoutIcons";
import { getDateDetails } from "../../../../../utils/get-date-details";

function SectionHeader({ section }) {
	const [day, month, year] = section.split("-");
	const sectionDate = new Date(year, month, day);
	const { day: textedDay } = getDateDetails(new Date(sectionDate));
	const isToday =
		new Date().getDate() === parseInt(day) &&
		new Date().getMonth() === parseInt(month) - 1 &&
		new Date().getFullYear() === parseInt(year);

	console.log(isToday);

	return (
		<div className={classes.SectionHeader}>
			<div className={classes.SectionHeader__Top}>
				<span>{textedDay}</span>
				<button className={classes.SectionHeader__Top__Button}>
					<PlusIcon size={13} />
					<span>Add task</span>
				</button>
			</div>
			<div className={classes.SectionHeader__Bottom}>
				<p
					className={
						isToday ? classes.SectionHeader__Bottom__Today : ""
					}
				>
					{day}
				</p>
			</div>
		</div>
	);
}

export default SectionHeader;
