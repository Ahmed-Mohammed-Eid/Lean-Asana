// src/components/TaskList/Task.jsx

import React, { memo } from "react";
import { Draggable } from "react-beautiful-dnd";
import styles from "./Task.module.scss";

// REDUX
import { useDispatch, useSelector } from "react-redux";
import { setKeysAndValues } from "../../../../Redux/features/my-tasks-slice";

const Task = memo(({ task, index, onClick = () => {} }) => {
	// MAKE THE TASK ID A STRING
	const taskId = JSON.stringify(task.id);
	// DISPATCH
	const dispatch = useDispatch();
	// REDUX STATE
	const { ui } = useSelector((state) => state.myTasks);

	const handleEditTask = (event) => {
		const isItOpen = ui?.isEditing;

		dispatch(
			setKeysAndValues([
				{
					key: "ui",
					value: {
						isEditing: isItOpen ? false : true,
						taskToEdit: isItOpen ? null : task,
					},
				},
			])
		);
		onClick(event);
	};

	return (
		<Draggable draggableId={taskId} index={index}>
			{(provided, snapshot) => (
				<div
					onClick={handleEditTask}
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
