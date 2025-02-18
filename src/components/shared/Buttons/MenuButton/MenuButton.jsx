import React, { useState } from "react";
import styles from "./MenuButton.module.scss"; // Import SCSS module
import { ArrowDownIcon, PlusIcon } from "../../../../Icons/layoutIcons"; // Import Icons

const MenuButton = ({
	listItems = [],
	label = "Add New",
	icon = <PlusIcon size={14} />,
	dropdownIcon = <ArrowDownIcon size={16} />,
	onClick = () => {}, // Add onClick prop
}) => {
	const [isMenuOpen, setMenuOpen] = useState(false);

	const toggleMenu = (event) => {
		// IF THE CLIXK IS NOT ON THE DATA-TYPE LIST OR ITS CHILDREN, CLOSE THE MENU
		if (
			!event.target.closest('[data-type="list"]') ||
			event.target.closest('[data-type="list"]')?.tagName === "BUTTON"
		) {
			setMenuOpen(!isMenuOpen);
		}
	};

	return (
		<div className={styles.MenuButton}>
			<button onClick={onClick}>
				{icon}
				{label}
			</button>
			<button onClick={toggleMenu}>
				<span>{dropdownIcon}</span>
				<div
					className={[
						styles.MenuContent,
						isMenuOpen ? styles.Active : "",
					].join(" ")}
					data-type="list"
				>
					{listItems.map((item, index) => (
						<button
							key={index}
							onClick={() => {
								item?.onClick();
								setMenuOpen(false);
							}}
						>
							{item?.icon}
							{item?.label}
							<span className={styles.Hint}>{item?.hint}</span>
						</button>
					))}
				</div>
			</button>
		</div>
	);
};

export default MenuButton;
