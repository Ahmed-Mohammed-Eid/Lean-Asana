export const BurgerIcon = ({ size = 24 }) => {
	return (
		<svg
			width={size}
			height={size}
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<g clipPath="url(#clip0_201_46623)">
				<path
					d="M3.97488 5.97485H19.9749"
					stroke="#333333"
					strokeWidth={2}
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
				<path
					d="M3.97488 11.9749H19.9749"
					stroke="#333333"
					strokeWidth={2}
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
				<path
					d="M3.97488 17.9749H19.9749"
					stroke="#333333"
					strokeWidth={2}
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
			</g>
			<defs>
				<clipPath id="clip0_201_46623">
					<rect width={24} height={24} fill="white" />
				</clipPath>
			</defs>
		</svg>
	);
};

export const SearchIcon = () => {
	return (
		<svg
			width={10}
			height={11}
			viewBox="0 0 10 11"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M4.31845 1.78088C3.72625 1.78088 3.14734 1.95649 2.65494 2.2855C2.16255 2.61451 1.77877 3.08215 1.55214 3.62927C1.32552 4.17639 1.26622 4.77843 1.38175 5.35926C1.49729 5.94008 1.78246 6.4736 2.20121 6.89235C2.61996 7.3111 3.15348 7.59627 3.7343 7.71181C4.31513 7.82734 4.91717 7.76804 5.46429 7.54142C6.01141 7.31479 6.47905 6.93101 6.80806 6.43862C7.13707 5.94622 7.31268 5.36731 7.31268 4.77511C7.31263 3.98101 6.99715 3.21944 6.43563 2.65793C5.87412 2.09641 5.11255 1.78093 4.31845 1.78088V1.78088Z"
				stroke="black"
				strokeWidth="0.609939"
				strokeMiterlimit={10}
			/>
			<path
				d="M6.55225 7.00903L8.64338 9.10017"
				stroke="black"
				strokeWidth="0.609939"
				strokeMiterlimit={10}
				strokeLinecap="round"
			/>
		</svg>
	);
};

export const HomeIcon = ({ size = 24 }) => {
	return (
		<svg
			width={size}
			height={size}
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M5 9.91987C5 9.33602 5.25513 8.78132 5.69842 8.40136L10.6984 4.11564C11.4474 3.47366 12.5526 3.47366 13.3016 4.11564L18.3016 8.40136C18.7449 8.78132 19 9.33602 19 9.91987V19C19 20.1046 18.1046 21 17 21H15H9H7C5.89543 21 5 20.1046 5 19V9.91987Z"
				stroke="black"
				strokeLinejoin="round"
			/>
			<path
				d="M2.5 11L10.7117 4.08486C11.4562 3.45796 12.5438 3.45796 13.2883 4.08486L21.5 11"
				stroke="black"
				strokeLinejoin="round"
			/>
			<path
				d="M9.5 19V15C9.5 13.8954 10.3954 13 11.5 13H12.5C13.6046 13 14.5 13.8954 14.5 15V19"
				stroke="black"
				strokeLinejoin="round"
			/>
		</svg>
	);
};

export const TaskIcon = ({ size = 24 }) => {
	return (
		<svg
			width={size}
			height={size}
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<circle cx={12} cy={12} r={10} stroke="black" />
			<path
				d="M6.5 12.5L10 16L18 8"
				stroke="black"
				strokeLinejoin="round"
			/>
		</svg>
	);
};

export const InboxIcon = () => {
	return (
		<svg
			width={10}
			height={11}
			viewBox="0 0 10 11"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M8.26385 7.21214C7.77437 6.61307 7.4288 6.3081 7.4288 4.6565C7.4288 3.14404 6.65647 2.6052 6.0208 2.3435C5.93636 2.30881 5.85687 2.22913 5.83114 2.14241C5.71964 1.76291 5.40705 1.42859 4.99152 1.42859C4.576 1.42859 4.26322 1.7631 4.15286 2.14279C4.12713 2.23047 4.04764 2.30881 3.96321 2.3435C3.32677 2.60558 2.5552 3.14252 2.5552 4.6565C2.55425 6.3081 2.20868 6.61307 1.7192 7.21214C1.5164 7.46031 1.69404 7.83295 2.04876 7.83295H7.93619C8.28901 7.83295 8.46551 7.45917 8.26385 7.21214Z"
				stroke="black"
				strokeWidth="0.609939"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M6.21124 7.83301V8.13798C6.21124 8.46151 6.08272 8.77179 5.85395 9.00056C5.62517 9.22933 5.31489 9.35785 4.99136 9.35785C4.66783 9.35785 4.35755 9.22933 4.12878 9.00056C3.90001 8.77179 3.77148 8.46151 3.77148 8.13798V7.83301"
				stroke="black"
				strokeWidth="0.609939"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
};

export const BoardIcon = ({ size = 24 }) => {
	return (
		<svg
			width={size}
			height={size}
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M2 5C2 3.89543 2.89543 3 4 3H20C21.1046 3 22 3.89543 22 5V19C22 20.1046 21.1046 21 20 21H4C2.89543 21 2 20.1046 2 19V5ZM8 5H4V19H8V5ZM10 5V19H14V5H10ZM16 5V19H20V5H16Z"
				fill="#0D0D0D"
			/>
		</svg>
	);
};

export const CalendarIcon = ({ size = 24 }) => {
	return (
		<svg
			width={size}
			height={size}
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M8 2V5"
				stroke="#292D32"
				strokeWidth="1.5"
				strokeMiterlimit={10}
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M16 2V5"
				stroke="#292D32"
				strokeWidth="1.5"
				strokeMiterlimit={10}
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M3.5 9.09H20.5"
				stroke="#292D32"
				strokeWidth="1.5"
				strokeMiterlimit={10}
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M21 8.5V17C21 20 19.5 22 16 22H8C4.5 22 3 20 3 17V8.5C3 5.5 4.5 3.5 8 3.5H16C19.5 3.5 21 5.5 21 8.5Z"
				stroke="#292D32"
				strokeWidth="1.5"
				strokeMiterlimit={10}
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M11.9955 13.7H12.0045"
				stroke="#292D32"
				strokeWidth={2}
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M8.29431 13.7H8.30329"
				stroke="#292D32"
				strokeWidth={2}
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M8.29431 16.7H8.30329"
				stroke="#292D32"
				strokeWidth={2}
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
};

export const ArrowDownIcon = ({ size = 24 }) => {
	return (
		<svg
			width={size}
			height={size}
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M19.9201 8.95L13.4001 15.47C12.6301 16.24 11.3701 16.24 10.6001 15.47L4.08008 8.95"
				stroke="#292D32"
				strokeWidth="1.5"
				strokeMiterlimit={10}
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
};

export const PlusIcon = ({ size = 24 }) => {
	return (
		<svg
			width={size}
			height={size}
			viewBox="0 0 32 32"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M16 5C16.5128 5 16.9355 5.38604 16.9933 5.88338L17 6V26C17 26.5523 16.5523 27 16 27C15.4872 27 15.0645 26.614 15.0067 26.1166L15 26V6C15 5.44772 15.4477 5 16 5Z"
				fill="white"
			/>
			<path
				d="M26 15C26.5523 15 27 15.4477 27 16C27 16.5128 26.614 16.9355 26.1166 16.9933L26 17H6C5.44772 17 5 16.5523 5 16C5 15.4872 5.38604 15.0645 5.88338 15.0067L6 15H26Z"
				fill="white"
			/>
		</svg>
	);
};
