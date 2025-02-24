import { useCallback, useEffect, useRef } from "react";

export function useResizableSidebar(
	minWidth = 240,
	maxWidth = 400,
	direction = "left"
) {
	const sidebarRef = useRef(null);
	const startResizeRef = useRef({ x: 0, width: 0 });
	const isResizingRef = useRef(false);

	const onMouseDown = useCallback((e) => {
		if (sidebarRef.current) {
			isResizingRef.current = true;
			startResizeRef.current = {
				x: e.clientX,
				width: sidebarRef.current.offsetWidth,
			};
		}
	}, []);

	const onMouseUp = useCallback(() => {
		isResizingRef.current = false;
	}, []);

	const onMouseMove = useCallback(
		(e) => {
			if (!isResizingRef.current || !sidebarRef.current) return;

			const delta = e.clientX - startResizeRef.current.x;
			let newWidth;

			if (direction === "left") {
				// For left sidebar, increase width when dragging to the right
				newWidth = startResizeRef.current.width + delta;
			} else if (direction === "right") {
				// For right sidebar, decrease width when dragging to the left
				newWidth = startResizeRef.current.width - delta;
			}

			// Clamp the width within the min and max bounds
			if (newWidth >= minWidth && newWidth <= maxWidth) {
				sidebarRef.current.style.width = `${newWidth}px`;
			}
		},
		[minWidth, maxWidth, direction]
	);

	useEffect(() => {
		document.addEventListener("mousemove", onMouseMove);
		document.addEventListener("mouseup", onMouseUp);

		return () => {
			document.removeEventListener("mousemove", onMouseMove);
			document.removeEventListener("mouseup", onMouseUp);
		};
	}, [onMouseMove, onMouseUp]);

	return { sidebarRef, onMouseDown };
}
