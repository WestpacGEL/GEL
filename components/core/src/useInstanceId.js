export const useInstanceId = () => {
	let instanceId = 0;

	if (typeof window === 'undefined') {
		// for SSR
		if ('instanceId' in global.window) {
			instanceId = ++global.window.instanceId;
		} else {
			global.window.instanceId = 0;
		}
	} else {
		// for browser
		if ('instanceId' in window) {
			instanceId = ++window.instanceId;
		} else {
			window.instanceId = 0;
		}
	}

	return instanceId;
};
