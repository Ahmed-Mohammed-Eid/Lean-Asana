// src/components/CalendarList/CalendarList.jsx
import React, { memo, useEffect } from "react";
import styles from "./CalendarList.module.scss";

// DUMMY DATA
import DummyTasks from "../../../../DummyData/Tasks.json";

// DND
import { DragDropContext } from "react-beautiful-dnd";

// CUSTOM COMPONENTS
import Section from "./Section/Section";
import CalendarHeader from "./Header/CalendarHeader";
import MenuButton from "../../../shared/Buttons/MenuButton/MenuButton";

// REDUX
import { useDispatch, useSelector } from "react-redux";
import { setKeysAndValues } from "../../../../Redux/features/my-tasks-slice";

const CalendarList = memo(() => {
	// REDUX
	const dispatch = useDispatch();
	const { calendarView, tasks } = useSelector((state) => state.myTasks);

	// Handle drag end
	const onDragEnd = (result) => {
		const { destination, source, draggableId } = result;
		console.log(result);

		// Return if dropped outside or at the same position
		if (
			!destination ||
			(destination.droppableId === source.droppableId &&
				destination.index === source.index)
		) {
			return;
		}

		// Find the task being dragged
		const draggedTask = tasks.find((task) => task.id === draggableId);
		if (!draggedTask) return;

		// Create new sections object with updated task positions
		const newSections = { ...calendarView.sections };

		// Remove from source
		newSections[source.droppableId] = newSections[
			source.droppableId
		].filter((task) => task.id !== draggableId);

		// Add to destination
		const destinationTasks = [...newSections[destination.droppableId]];
		destinationTasks.splice(destination.index, 0, draggedTask);
		newSections[destination.droppableId] = destinationTasks;

		// Update Redux store
		dispatch(
			setKeysAndValues([
				{
					key: "calendarView",
					value: {
						...calendarView,
						sections: newSections,
					},
				},
			])
		);
	};

	// Memoized sections rendering
	const renderedSections = () => {
		const sections_keys = Object.keys(calendarView?.sections);
		const sections = sections_keys.map((key) => {
			return (
				<Section
					key={key}
					section={key}
					tasks={calendarView.sections[key]}
				/>
			);
		});

		return sections;
	};

	// GET THE TASKS HANDLER
	async function getTasks() {
		const timer = setTimeout(async () => {
			// CLEAR THE TIMER
			clearTimeout(timer);
		}, 1000);

		// AWAIT TIMER
		await timer;

		// SET THE TASKS
		dispatch(setKeysAndValues([{ key: "tasks", value: DummyTasks }]));
	}

	// EFFECT TO GET THE TASKS AND SETTING THEM
	useEffect(() => {
		// GET THE TASKS
		getTasks();
	}, []);

	return (
		<DragDropContext onDragEnd={onDragEnd}>
			<>
				<div className={styles.CalendarList__Header}>
					<MenuButton />
					<CalendarHeader />
				</div>
				<div className={styles.taskListContainer}>
					{renderedSections()}
				</div>
			</>
		</DragDropContext>
	);
});

CalendarList.displayName = "CalendarList";

export default CalendarList;
