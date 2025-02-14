import React, { useState } from "react";

import _layout from "../layouts/main/_layout";
import Tabs from "../components/pages/MyTasks/Tabs/Tabs";
import { BoardIcon, CalendarIcon } from "../Icons/layoutIcons";

export default function Home() {
	const [activeTab, setActiveTab] = useState(0);

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
		</_layout>
	);
}
