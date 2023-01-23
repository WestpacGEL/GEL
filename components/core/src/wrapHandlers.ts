type IHandler = (event: Event) => any;
export const wrapHandlers = (consumerHandler: IHandler, ourHandler: IHandler) => (event: Event) => {
	if (typeof consumerHandler === 'function') {
		consumerHandler(event);
	}

	if (!event.defaultPrevented) {
		ourHandler(event);
	}
};
