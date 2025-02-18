// src/components/TaskList/Task.jsx

import React, { memo } from "react";
import { Draggable } from "react-beautiful-dnd";
import styles from "./Task.module.scss";

const Task = memo(({ task, index, onClick = () => {} }) => {
	return (
		<Draggable draggableId={task.id} index={index}>
			{(provided, snapshot) => (
				<div
					onClick={onClick}
					className={`${styles.taskContainer} ${
						snapshot.isDragging ? styles.dragging : ""
					}`}
					{...provided.draggableProps}
					{...provided.dragHandleProps}
					ref={provided.innerRef}
				>
					{/* HEADER */}
					<div className={styles.header}>
						<div className={styles.icon}>
							{task.icon ? (
								task.icon
							) : (
								<div className={styles.iconEmpty} />
							)}
						</div>
						<div className={styles.title}>{task.content}</div>
					</div>

					{/* DATE */}
					{task.date && (
						<div className={styles.date}>{task.date}</div>
					)}

					{/* FOOTER */}
					{task.footer && (
						<div className={styles.footer}>{task.footer}</div>
					)}
				</div>
			)}
		</Draggable>
	);
});

Task.displayName = "Task";

export default Task;
