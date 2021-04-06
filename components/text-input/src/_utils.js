export const round = (f) => Math.round(f * 100) / 100; //2DP

export const sizeMap = {
	small: {
		padding: ['0.1875rem', '0.5625rem', '0.25rem'], //[Top, Right, Bottom, Left]
		fontSize: '0.875rem',
		lineHeight: 1.5,
		borderWidth: 1, //px
		textarea: {
			minHeight: '3.375rem',
		},
	},
	medium: {
		padding: ['0.3125rem', '0.75rem'], //[Top, Right, Bottom, Left]
		fontSize: '1rem',
		lineHeight: 1.5,
		borderWidth: 1, //px
		textarea: {
			minHeight: '3.75rem',
		},
	},
	large: {
		padding: ['0.5rem', '0.9375rem'], //[Top, Right, Bottom, Left]
		fontSize: '1rem',
		lineHeight: 1.5,
		borderWidth: 1, //px
		textarea: {
			minHeight: '4.125rem',
		},
	},
	xlarge: {
		padding: ['0.5625rem', '1.125rem', '0.625rem'], //[Top, Right, Bottom, Left]
		fontSize: '1.125rem',
		lineHeight: 1.5,
		borderWidth: 1, //px
		textarea: {
			minHeight: '4.5rem',
		},
	},
};

export const textInputWithButtonBtnWidth = '2.75rem'; //44px

export const getHeight = (size) => {
	const s = sizeMap[size];

	return `calc(${s.lineHeight}em + ${s.padding[0]} + ${s.padding[2] || s.padding[0]} + ${
		2 * s.borderWidth
	}px)`;
};

export const getMaxWidth = (size, width, extra = '') => {
	const s = sizeMap[size];

	return `calc(${s.padding[3] || s.padding[1]} + ${s.padding[1]} + ${2 * s.borderWidth}px + ${round(
		width * 1.81
	)}ex ${extra && `+ ${extra}`})`;
};
