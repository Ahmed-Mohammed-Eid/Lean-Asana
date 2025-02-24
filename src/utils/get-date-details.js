// GET DATE INFO
export function getDateDetails(date) {
	const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
	const fullMonths = [
		"January",
		"February",
		"March",
		"April",
		"May",
		"June",
		"July",
		"August",
		"September",
		"October",
		"November",
		"December",
	];
	return {
		day: days[date.getDay()],
		month: fullMonths[date.getMonth()],
		year: date.getFullYear(),
	};
}
