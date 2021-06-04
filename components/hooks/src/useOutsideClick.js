import { RefObject, useCallback, useLayoutEffect } from 'react';

/**
 * @callback MouseHandler
 * @param {MouseEvent} event - The native event object.
 * @return {void}
 */

/**
 * Watch for click events outside your target refs and handle them.
 * @param {Object} options - The options object.
 * @param {MouseHandler} options.handler - Handle a click outside the target refs
 * @param {RefObject<HTMLElement>[]} options.refs - An array of refs to ignore click events on
 * @param {boolean} options.listenWhen - When to add/remove event listeners
 */
export const useOutsideClick = ({ handler, refs, listenWhen }) => {
	const handleMouseDown = useCallback(
		(event) => {
			// bail on mouse down "inside" any of the provided refs
			if (refs.some((ref) => ref.current && ref.current.contains(event.target))) {
				return;
			}

			handler(event);
		},
		[handler, refs]
	);

	// layout effect is not run on the server
	useLayoutEffect(() => {
		if (listenWhen) {
			document.addEventListener('mousedown', handleMouseDown);

			return () => {
				document.removeEventListener('mousedown', handleMouseDown);
			};
		}
		// NOTE: only call when the value of `listenWhen` changes
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [listenWhen]);
};
