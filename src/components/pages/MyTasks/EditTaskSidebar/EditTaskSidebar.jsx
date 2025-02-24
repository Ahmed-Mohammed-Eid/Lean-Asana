import React from "react";
import classes from "./EditTaskSidebar.module.scss";
import { useResizableSidebar } from "../../../../hooks/useResizableSidebar";
import { useClickOutside } from "../../../../hooks/useClickOutside";
import { useSelector } from "react-redux";

// REDUX
import { useDispatch } from "react-redux";
import { setKeysAndValues } from "../../../../Redux/features/my-tasks-slice";

// ICONS
import {
	CheckIcon,
	LikeIcon,
	AttachmentIcon,
	SubTaskIcon,
	LinkIcon,
	FullScreenIcon,
	ThreeDotsIcon,
	CloseArrowIcon,
} from "../../../../Icons/layoutIcons";

function EditTaskSidebar() {
	// Make the sidebar resizable
	const { sidebarRef, onMouseDown } = useResizableSidebar(450, 650, "right");

	// DISPATCH
	const dispatch = useDispatch();

	// Get the showSidebar state from Redux
	const { ui } = useSelector((state) => state.myTasks);

	// Close the sidebar when clicking outside
	useClickOutside(sidebarRef, () => {
		if (ui.isEditing) {
			dispatch(
				setKeysAndValues([
					{
						key: "ui",
						value: {
							isEditing: false,
							taskToEdit: null,
						},
					},
				])
			);
		}
	});

	return (
		<aside
			ref={sidebarRef}
			className={[classes.sidebar, ui.isEditing ? classes.show : ""].join(
				" "
			)}
		>
			{/* HEADER */}
			<header className={classes.header}>
				{/* MARK AS COMPLETED */}
				<button className={classes.markAsCompleted}>
					<CheckIcon size={16} />
					<span>Mark as completed</span>
				</button>

				{/* ACTION BUTTONS */}
				<div className={classes.actionButtons}>
					<button className={classes.actionButton}>
						<LikeIcon size={16} />
					</button>
					<button className={classes.actionButton}>
						<AttachmentIcon size={16} />
					</button>
					<button className={classes.actionButton}>
						<SubTaskIcon size={16} />
					</button>
					<button className={classes.actionButton}>
						<LinkIcon size={16} />
					</button>
					<button className={classes.actionButton}>
						<FullScreenIcon size={16} />
					</button>
					<button className={classes.actionButton}>
						<ThreeDotsIcon size={16} />
					</button>
				</div>
				{/* CLOSE ICON */}
				<button
					className={classes.actionButton}
					onClick={() => {
						dispatch(
							setKeysAndValues([
								{
									key: "ui",
									value: {
										isEditing: false,
										taskToEdit: null,
									},
								},
							])
						);
					}}
				>
					<CloseArrowIcon size={16} />
				</button>
			</header>

			{/* CONTENT */}
			<div className={classes.content}></div>

			{/* COMMENT AND FOOTER */}

			{/* RESIZER */}
			<div className={classes.resizer} onMouseDown={onMouseDown}></div>
		</aside>
	);
}

export default EditTaskSidebar;
