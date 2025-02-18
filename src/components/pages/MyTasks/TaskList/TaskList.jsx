// src/components/TaskList/TaskList.jsx
import React, { useState, useCallback, memo, useMemo } from "react";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import Section from "./Section";
import styles from "./TaskList.module.scss";
import AddSectionButton from "./SkeletonSection";

const TaskList = memo(() => {
	const [sections, setSections] = useState({
		"section-1": {
			id: "section-1",
			title: "Do today",
			taskIds: [
				"task-1",
				"task-2",
				"task-4",
				"task-5",
				"task-6",
				"task-7",
				"task-8",
				"task-9",
				"task-10",
				"task-11",
				"task-12",
				"task-13",
				"task-14",
				"task-15",
			],
		},
		"section-2": {
			id: "section-2",
			title: "Recently assigned",
			taskIds: [],
		},
		"section-3": {
			id: "section-3",
			title: "Do later",
			taskIds: ["task-3"],
		},
		"section-4": { id: "section-4", title: "section", taskIds: [] },
	});

	const [tasks, setTasks] = useState({
		"task-1": { id: "task-1", content: "New milestone" },
		"task-2": {
			id: "task-2",
			content: "Draft project brief",
			date: "Feb 11 - 13",
		},
		"task-3": { id: "task-3", content: "I", date: "Jan 27 - Feb 9" },
		"task-4": { id: "task-4", content: "II", date: "Jan 27 - Feb 9" },
		"task-5": { id: "task-5", content: "III", date: "Jan 27 - Feb 9" },
		"task-6": { id: "task-6", content: "IV", date: "Jan 27 - Feb 9" },
		"task-7": { id: "task-7", content: "V", date: "Jan 27 - Feb 9" },
		"task-8": { id: "task-8", content: "VI", date: "Jan 27 - Feb 9" },
		"task-9": { id: "task-9", content: "VII", date: "Jan 27 - Feb 9" },
		"task-10": { id: "task-10", content: "VIII", date: "Jan 27 - Feb 9" },
		"task-11": { id: "task-11", content: "IX", date: "Jan 27 - Feb 9" },
		"task-12": { id: "task-12", content: "X", date: "Jan 27 - Feb 9" },
		"task-13": { id: "task-13", content: "XI", date: "Jan 27 - Feb 9" },
		"task-14": { id: "task-14", content: "XII", date: "Jan 27 - Feb 9" },
		"task-15": { id: "task-15", content: "XIII", date: "Jan 27 - Feb 9" },
	});

	const [sectionOrder, setSectionOrder] = useState([
		"section-1",
		"section-2",
		"section-3",
		"section-4",
	]);

	// Memoized function to get tasks for a section
	const getTasksForSection = useCallback(
		(sectionTaskIds) => {
			return sectionTaskIds.map((taskId) => tasks[taskId]);
		},
		[tasks]
	);

	// Memoize tasks for each section
	const memoizedTasks = useMemo(() => {
		const cache = {};
		Object.values(sections).forEach((section) => {
			cache[section.id] = getTasksForSection(section.taskIds);
		});
		return cache;
	}, [sections, getTasksForSection]);

	// Handle drag end
	const onDragEnd = useCallback(
		(result) => {
			const { destination, source, draggableId, type } = result;

			// Validate drop result
			if (!destination || !source || !draggableId) return;

			// No change in position
			if (
				destination.droppableId === source.droppableId &&
				destination.index === source.index
			) {
				return;
			}

			if (type === "section") {
				// Handle section reordering
				setSectionOrder((prevOrder) => {
					const newOrder = [...prevOrder];
					const [removed] = newOrder.splice(source.index, 1);
					newOrder.splice(destination.index, 0, removed);
					return newOrder;
				});
				return;
			}

			// Handle task reordering
			setSections((prevSections) => {
				const startSection = prevSections[source.droppableId];
				const finishSection = prevSections[destination.droppableId];

				if (!startSection || !finishSection) return prevSections;

				if (startSection === finishSection) {
					// Same section reordering
					const newTaskIds = [...startSection.taskIds];
					newTaskIds.splice(source.index, 1);
					newTaskIds.splice(destination.index, 0, draggableId);

					return {
						...prevSections,
						[startSection.id]: {
							...startSection,
							taskIds: newTaskIds,
						},
					};
				}

				// Moving between sections
				const startTaskIds = [...startSection.taskIds];
				startTaskIds.splice(source.index, 1);
				const finishTaskIds = [...finishSection.taskIds];
				finishTaskIds.splice(destination.index, 0, draggableId);

				return {
					...prevSections,
					[startSection.id]: {
						...startSection,
						taskIds: startTaskIds,
					},
					[finishSection.id]: {
						...finishSection,
						taskIds: finishTaskIds,
					},
				};
			});
		},
		[sections, sectionOrder]
	);

	// Memoized sections rendering
	const renderedSections = useMemo(() => {
		return sectionOrder.map((sectionId, index) => {
			const section = sections[sectionId];
			return (
				<Section
					key={section.id}
					section={section}
					tasks={memoizedTasks[section.id]} // Use memoized tasks
					index={index}
				/>
			);
		});
	}, [sectionOrder, sections, memoizedTasks]);

	// Add new section
	const addNewSection = useCallback(() => {
		const newSectionId = `section-${Object.keys(sections).length + 1}`;
		const newSection = {
			id: newSectionId,
			title: "New section",
			taskIds: [],
		};

		setSections((prevSections) => ({
			...prevSections,
			[newSectionId]: newSection,
		}));

		setSectionOrder((prevOrder) => [...prevOrder, newSectionId]);
	}, [sections, sectionOrder]);

	return (
		<DragDropContext onDragEnd={onDragEnd}>
			<Droppable
				droppableId="all-sections"
				direction="horizontal"
				type="section"
				isCombineEnabled={false}
				isDropDisabled={false}
				ignoreContainerClipping={false}
			>
				{(provided) => (
					<div
						className={styles.taskListContainer}
						{...provided.droppableProps}
						ref={provided.innerRef}
					>
						{renderedSections}
						{provided.placeholder}
						<AddSectionButton onClick={addNewSection} />
					</div>
				)}
			</Droppable>
		</DragDropContext>
	);
});

TaskList.displayName = "TaskList";

export default TaskList;
