import classes from "./Tabs.module.scss";

export default function Tabs({ tabs = [], activeTab, setActiveTab }) {
	return (
		<div className={classes.Tabs}>
			{tabs.map((tab, index) => (
				<>
					<button
						className={[
							classes.Tab,
							activeTab === index ? classes.Active : "",
						].join(" ")}
						key={index}
						onClick={() => setActiveTab(index)}
					>
						{tab?.icon}
						{tab?.name}
						<span
							className={[
								classes.BorderBottom,
								activeTab === index ? classes.Active : "",
							].join(" ")}
						></span>
					</button>
				</>
			))}
		</div>
	);
}
