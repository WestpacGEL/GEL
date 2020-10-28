export const sizeMap = {
	medium: {
		option: {
			marginRight: '1.125rem',
			marginBottom: '0.375rem',
			width: '1.5rem',
			height: '1.5rem',
		},
		label: {
			paddingTop: '2px',
			paddingBottom: '2px',
			gap: '0.375rem',
			width: '1.5rem',
			height: '1.5rem',
			checkbox: {
				width: '0.875rem',
				height: '0.5rem',
				stroke: '0.1875rem',
				tweak: '-0.125rem',
			},
			radio: {
				width: '0.75rem',
				height: '0.75rem',
				tweak: '0rem', //must state 'rem', used in calc()
			},
		},
	},
	large: {
		option: {
			marginRight: '1.125rem',
			marginBottom: '0.75rem',
			width: '1.875rem',
			height: '1.875rem',
		},
		label: {
			paddingTop: '0.3125rem',
			paddingBottom: '0.3125rem',
			gap: '0.625rem',
			width: '1.875rem',
			height: '1.875rem',
			checkbox: {
				width: '1.125rem',
				height: '0.625rem',
				stroke: '0.25rem',
				tweak: '-0.125rem',
			},
			radio: {
				width: '1rem',
				height: '1rem',
				tweak: '0rem', //must state 'rem', used in calc()
			},
		},
	},
};
