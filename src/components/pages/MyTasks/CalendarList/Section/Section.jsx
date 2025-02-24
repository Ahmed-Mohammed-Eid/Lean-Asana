// src/components/TaskList/Section.jsx

import React, { memo } from "react";
import { Droppable } from "react-beautiful-dnd";
import Task from "../Task";
import styles from "./Section.module.scss";
import SectionHeader from "./SectionHeader";

const Section = memo(({ section, tasks, index }) => {
	return (
		<div className={styles.sectionContainer}>
			<SectionHeader section={section} index={index} />
			<Droppable
				droppableId={section}
				type="calendar_task"
				isDropDisabled={false}
				isCombineEnabled={false}
				ignoreContainerClipping={false}
				direction="vertical"
			>
				{(provided, snapshot) => (
					<div
						className={`${styles.taskList} ${
							snapshot.isDraggingOver ? styles.draggingOver : ""
						}`}
						ref={provided.innerRef}
						{...provided.droppableProps}
					>
						{tasks.map((task, index) => (
							<Task key={task.id} task={task} index={index} />
						))}
						{provided.placeholder}
						<button className={styles.addButton}>+ Add task</button>
					</div>
				)}
			</Droppable>
		</div>
	);
});

Section.displayName = "Section";

export default Section;
