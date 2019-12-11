export const useInstanceId = () => {
	let instanceId = 0;

	if (window) {
		// for browser
		if ('instanceId' in window) {
			instanceId = ++window.instanceId;
		} else {
			window.instanceId = 0;
		}
	} else if (global) {
		// for SSR
		if ('instanceId' in global.window) {
			instanceId = ++global.window.instanceId;
		} else {
			global.window.instanceId = 0;
		}
	}

	return instanceId;
};
