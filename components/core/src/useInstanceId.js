export const useInstanceId = () => {
	let instanceId = 0;

	if (typeof window === 'undefined') {
		// for SSR
		if (!global.GELinstanceId) {
			global.GELinstanceId = 0;
		}

		instanceId = ++global.GELinstanceId;
	} else {
		// for browser
		if (!window.GELinstanceId) {
			window.GELinstanceId = 0;
		}

		instanceId = ++window.GELinstanceId;
	}

	return instanceId;
};
