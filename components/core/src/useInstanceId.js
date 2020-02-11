export const useInstanceId = () => {
	let instanceId = 0;

	if (typeof window === 'undefined') {
		// for SSR
		if ('instanceId' in global) {
			instanceId = ++global.GELinstanceId;
		} else {
			global.GELinstanceId = 0;
		}
	} else {
		// for browser
		if ('instanceId' in window) {
			instanceId = ++window.GELinstanceId;
		} else {
			window.GELinstanceId = 0;
		}
	}

	return instanceId;
};
