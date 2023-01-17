import { useCallback, useEffect, useState } from 'react';

/**
 * @callback KeyboardHandler
 * @param {KeyboardEvent} event - The native event object.
 * @return {void}
 */

/**
 * Takes a target key, when to listen, and optional [up|down] handlers. Returns
 * whether the target key is pressed.
 * @param {Object} options - The options object.
 * @param {string} options.targetKey - The key to watch
 * @param {boolean} options.listenWhen - When to add/remove event listeners
 * @param {KeyboardHandler} options.downHandler - (optional) Handle the key down event
 * @param {KeyboardHandler} options.upHandler - (optional) Handle the key up event
 * @return {boolean} Whether the target key is down.
 */
export const useKeyPress = ({ targetKey, downHandler, upHandler, listenWhen }) => {
	// Keep track of whether the target key is pressed
	const [keyPressed, setKeyPressed] = useState(false);

	// handle key down
	const onDown = useCallback(
		(event) => {
			if (event.key === targetKey) {
				setKeyPressed(true);

				if (typeof downHandler === 'function') {
					downHandler(event);
				}
			}
		},
		[targetKey, downHandler]
	);

	// handle key up
	const onUp = useCallback(
		(event) => {
			if (event.key === targetKey) {
				setKeyPressed(false);

				if (typeof upHandler === 'function') {
					upHandler(event);
				}
			}
		},
		[targetKey, upHandler]
	);

	// add event listeners
	useEffect(() => {
		if (listenWhen) {
			window.addEventListener('keydown', onDown);
			window.addEventListener('keyup', onUp);

			// Remove event listeners on cleanup
			return () => {
				window.removeEventListener('keydown', onDown);
				window.removeEventListener('keyup', onUp);
			};
		}
		// NOTE: only call when the value of `listenWhen` changes
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [listenWhen]);

	return keyPressed;
};
