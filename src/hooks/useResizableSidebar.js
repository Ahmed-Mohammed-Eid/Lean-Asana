import { useCallback, useEffect, useRef } from "react";

export function useResizableSidebar(minWidth = 240, maxWidth = 400) {
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
			if (!isResizingRef.current) return;

			const delta = e.clientX - startResizeRef.current.x;
			const newWidth = startResizeRef.current.width + delta;

			if (
				sidebarRef.current &&
				newWidth >= minWidth &&
				newWidth <= maxWidth
			) {
				sidebarRef.current.style.width = `${newWidth}px`;
			}
		},
		[minWidth, maxWidth]
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
