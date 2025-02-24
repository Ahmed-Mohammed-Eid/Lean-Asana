import React, { useState } from "react";
import _layout from "../layouts/main/_layout";
import Tabs from "../components/pages/MyTasks/Tabs/Tabs";
import { BoardIcon, CalendarIcon } from "../Icons/layoutIcons";
import MenuButton from "../components/shared/Buttons/MenuButton/MenuButton";
import CalendarButton from "../components/shared/Calendars/CalendarButton/CalendarButton";
import TaskList from "../components/pages/MyTasks/TaskList/TaskList";
import CalendarList from "../components/pages/MyTasks/CalendarList/CalendarList";

export default function Home() {
	const [activeTab, setActiveTab] = useState(0);
	const [selectedDate, setSelectedDate] = useState(null);
	const [dateRange, setDateRange] = useState(null);

	const tabs = [
		{
			name: "Board",
			icon: <BoardIcon />,
		},
		{
			name: "Calendar",
			icon: <CalendarIcon />,
		},
	];

	// SET ACTIVE TAB FUNCTION
	const setActiveTabHandler = (index) => {
		setActiveTab(index);
	};

	return (
		<_layout>
			<Tabs
				tabs={tabs}
				activeTab={activeTab}
				setActiveTab={setActiveTabHandler}
			/>
			{activeTab === 0 && (
				<div
					style={{
						display: "flex",
						gap: "20px",
						alignItems: "flex-start",
						flexDirection: "column",
					}}
				>
					<div
						style={{
							display: "flex",
							gap: "20px",
							alignItems: "center",
							justifyContent: "center",
							padding: "20px 50px",
							width: "100%",
						}}
					>
						<MenuButton
							listItems={[
								{
									label: "New Task",
									icon: <BoardIcon size={16} />,
									hint: "T + Shift + N",
									onClick: () => console.log("New Task"),
								},
								{
									label: "New Event",
									icon: <CalendarIcon size={16} />,
									hint: "E + Shift",
									onClick: () => console.log("New Event"),
								},
							]}
							label="Create"
							onClick={() => console.log("Create")}
						/>
						<CalendarButton
							value={selectedDate}
							onSelect={(date) => setSelectedDate(date)}
						/>
						<CalendarButton
							value={
								dateRange
									? [dateRange.startDate, dateRange.endDate]
									: null
							}
							label="Date Range"
							allowRange={true}
							onRangeSelect={(range) => setDateRange(range)}
						/>
					</div>
					<TaskList />
				</div>
			)}
			{activeTab === 1 && <CalendarList />}
		</_layout>
	);
}
