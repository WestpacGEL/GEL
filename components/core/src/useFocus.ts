import { useEffect, useState } from 'react';

export const useFocus = () => {
	const [isMouseMode, setIsMouseMode] = useState(true);

	useEffect(() => {
		const handleKeyDown = (event: KeyboardEvent) => {
			if (event.key === 'Tab') {
				setIsMouseMode(false);
			}
		};
		const handleMouseDown = () => {
			setIsMouseMode(true);
		};
		document.addEventListener('keydown', handleKeyDown);
		document.addEventListener('mousedown', handleMouseDown);
		return () => {
			document.removeEventListener('keydown', handleKeyDown);
			document.removeEventListener('mousedown', handleMouseDown);
		};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return { isMouseMode };
};
