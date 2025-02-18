// src/components/TaskList/Section.jsx

import React, { memo } from "react";
import { Droppable, Draggable } from "react-beautiful-dnd";
import Task from "./Task";
import styles from "./Section.module.scss";

const Section = memo(({ section, tasks, index }) => {
	const showBackground = tasks.length === 0;

	return (
		<Draggable draggableId={section.id} index={index}>
			{(provided) => (
				<div
					className={styles.sectionContainer}
					{...provided.draggableProps}
					ref={provided.innerRef}
				>
					<h3
						className={styles.sectionTitle}
						{...provided.dragHandleProps}
					>
						{section.title}
					</h3>
					<Droppable
						droppableId={section.id}
						type="task"
						isDropDisabled={false}
						isCombineEnabled={false}
						ignoreContainerClipping={false}
						direction="vertical"
					>
						{(provided, snapshot) => (
							<div
								className={`${styles.taskList} ${
									snapshot.isDraggingOver
										? styles.draggingOver
										: ""
								} ${showBackground ? styles.background : ""}`}
								ref={provided.innerRef}
								{...provided.droppableProps}
							>
								{tasks.map((task, index) => (
									<Task
										key={task.id}
										task={task}
										index={index}
									/>
								))}
								{provided.placeholder}
								<button className={styles.addButton}>
									+ Add task
								</button>
							</div>
						)}
					</Droppable>
				</div>
			)}
		</Draggable>
	);
});

Section.displayName = "Section";

export default Section;
