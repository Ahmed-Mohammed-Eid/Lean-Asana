import { useState } from "react";
import classes from "./_layout.module.scss";
import { useResizableSidebar } from "../../hooks/useResizableSidebar";
// ICONS
import {
	BurgerIcon,
	SearchIcon,
	HomeIcon,
	TaskIcon,
	InboxIcon,
} from "../../Icons/layoutIcons";
// COMPONENTS
import SidebarItems from "../../components/layout/SideBar/Items";

export default function _layout({ children }) {
	const { sidebarRef, onMouseDown } = useResizableSidebar(240, 400);
	const [showSearchPlaceholder, setShowSearchPlaceholder] = useState(true);

	return (
		<div className={classes.layout}>
			<header className={classes.topbar}>
				{/* Toggle Icon */}
				<button className={classes.toggle}>
					<BurgerIcon />
				</button>
				{/* Search */}
				<div className={classes.search}>
					{showSearchPlaceholder && (
						<div className={classes.placeholder}>
							<SearchIcon />
							<span>Search</span>
						</div>
					)}
					<input
						type="text"
						className={classes.input}
						onFocus={() => setShowSearchPlaceholder(false)}
						onBlur={(e) => {
							if (e.target.value === "")
								setShowSearchPlaceholder(true);
						}}
					/>
				</div>
				{/* Profile */}
				<div className={classes.profile}>
					<img
						src="https://randomuser.me/api/portraits/men/1.jpg"
						alt="Profile"
						className={classes.avatar}
					/>
				</div>
			</header>
			<main className={classes.content}>
				<aside ref={sidebarRef} className={classes.sidebar}>
					<SidebarItems
						items={[
							{
								to: "/Home",
								name: "Home",
								icon: <HomeIcon />,
							},
							{
								to: "/about",
								name: "My tasks",
								icon: <TaskIcon />,
							},
							{
								to: "/contact",
								name: "Inbox",
								icon: <InboxIcon />,
							},
						]}
					/>

					<div
						className={classes.resizer}
						onMouseDown={onMouseDown}
					></div>
				</aside>
				<section className={classes.main}>{children}</section>
			</main>
		</div>
	);
}
