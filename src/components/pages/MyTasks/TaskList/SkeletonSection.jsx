// src/components/TaskList/AddSectionButton.jsx

import React from "react";
import styles from "./SkeletonSection.module.scss";
import { PlusIcon } from "../../../../Icons/layoutIcons";

const AddSectionButton = ({ onClick }) => {
	return (
		<button className={styles.addSectionButton} onClick={onClick}>
			<div className={styles.header_skeleton}></div>
			<div className={styles.body_skeleton}>
				<PlusIcon />
				Add section
			</div>
		</button>
	);
};

export default AddSectionButton;
