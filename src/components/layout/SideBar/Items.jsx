import { NavLink } from "react-router";
import classes from "./Items.module.scss";

export default function SidebarItems({ items }) {
	return (
		<ul className={classes.Items}>
			{items.map((item, index) => (
				<NavLink
					key={"sidebar" + index}
					to={item.to}
					onClick={item.onClick}
					style={{ textDecoration: "none" }}
				>
					{({ isActive }) => (
						<li
							className={[
								classes.Item,
								isActive ? classes.ActiveItem : "",
							].join(" ")}
						>
							{item.icon}
							{item.name}
						</li>
					)}
				</NavLink>
			))}
		</ul>
	);
}
