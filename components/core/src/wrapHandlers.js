export const wrapHandlers = (consumerHandler, ourHandler) => event => {
	if (consumerHandler) {
		consumerHandler(event);
	}

	if (!event.defaultPrevented) {
		ourHandler(event);
	}
};
