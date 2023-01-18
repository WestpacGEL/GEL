export const wrapHandlers = (consumerHandler: Function, ourHandler: Function) => (event: Event) => {
	if (typeof consumerHandler === 'function') {
		consumerHandler(event);
	}

	if (!event.defaultPrevented) {
		ourHandler(event);
	}
};
