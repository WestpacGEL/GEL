import { useEffect } from 'react';
import invariant from 'invariant';

// ==============================
// KEY HANDLING
// ==============================

const isKeyFromGivenList = (keyCode, allowedKeys = []) => {
	if (allowedKeys === null || allowedKeys.includes(keyCode) || allowedKeys.length === 0) {
		return true;
	}
	return false;
};
const onKeyPress = (event, callback, allowedKeys, preventDefault) => {
	const { key } = event;
	if (isKeyFromGivenList(key, allowedKeys)) {
		if (preventDefault) event.preventDefault();
		callback(key);
	}
};

// ==============================
// HOOK IMPLEMENTATION
// ==============================

const VALID_KEY_EVENTS = ['keydown', 'keyup', 'keypress'];

export const useKeyEvent = (
	callback,
	{ detectKeys = [], keyevent = 'keydown', preventDefault = false } = {},
	{ dependencies = [] } = {}
) => {
	const isKeyeventValid = VALID_KEY_EVENTS.indexOf(keyevent) > -1;

	invariant(isKeyeventValid, 'keyevent is not valid: ' + keyevent);
	invariant(callback != null, 'callback needs to be defined');
	invariant(window != null, 'window needs to be defined');
	invariant(window.document != null, 'window.document needs to be defined');
	invariant(Array.isArray(dependencies), 'dependencies need to be an array');
	invariant(Array.isArray(detectKeys), 'detectKeys need to be an array');

	const handleEvent = event => onKeyPress(event, callback, detectKeys, preventDefault);

	useEffect(() => {
		window.document.addEventListener(keyevent, handleEvent);
		return () => {
			window.document.removeEventListener(keyevent, handleEvent);
		};
	}, dependencies);
};
