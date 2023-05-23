import { AddOnType } from '../AddOns';
import { Composition } from '../InputField';

export const round = (f: number) => Math.round(f * 100) / 100; //2DP

export const sizeMap = {
	small: {
		padding: ['0.1875rem', '0.5625rem', '0.25rem'],
		fontSize: '0.875rem',
		lineHeight: 1.5,
		borderWidth: 1,
		textarea: {
			minHeight: '3.375rem',
		},
	},
	medium: {
		padding: ['0.3125rem', '0.75rem'],
		fontSize: '1rem',
		lineHeight: 1.5,
		borderWidth: 1,
		textarea: {
			minHeight: '3.75rem',
		},
	},
	large: {
		padding: ['0.5rem', '0.9375rem'],
		fontSize: '1rem',
		lineHeight: 1.5,
		borderWidth: 1,
		textarea: {
			minHeight: '4.125rem',
		},
	},
	xlarge: {
		padding: ['0.5625rem', '1.125rem', '0.625rem'],
		fontSize: '1.125rem',
		lineHeight: 1.5,
		borderWidth: 1,
		textarea: {
			minHeight: '4.5rem',
		},
	},
};

export const getHeight = (size: string) => {
	const s = sizeMap[size as keyof typeof sizeMap];

	return `calc(${s.lineHeight}em + ${s.padding[0]} + ${s.padding[2] || s.padding[0]} + ${
		2 * s.borderWidth
	}px)`;
};

export const getMaxWidth = (size: string, width: number, extra = '') => {
	const s = sizeMap[size as keyof typeof sizeMap];

	return `calc(${s.padding[3] || s.padding[1]} + ${s.padding[1]} + ${2 * s.borderWidth}px + ${round(
		width * 1.81
	)}ex ${extra && `+ ${extra}`})`;
};

export const getAddOnStyles = (size: string, composition: Composition) => {
	const insetMap: Record<string, string> = {
		small: '2.25rem',
		medium: '2.625rem',
		large: '3rem',
		xlarge: '3.375rem',
	};

	const addOnMap: Record<string, any> = {
		before: {
			default: {
				borderTopLeftRadius: 0,
				borderBottomLeftRadius: 0,
				borderLeft: 'none',
			},
			inset: {
				paddingLeft: insetMap[size],
			},
		},
		after: {
			default: {
				borderTopRightRadius: 0,
				borderBottomRightRadius: 0,
				borderRight: 'none',
			},
			inset: { paddingRight: insetMap[size] },
		},
	};

	const addOnStyles = ['before', 'after'].reduce((styles, placement) => {
		if (composition[placement as keyof Composition] === AddOnType.Default) {
			return { ...styles, ...addOnMap[placement].default };
		} else if (composition[placement as keyof Composition] === AddOnType.Inset) {
			return { ...styles, ...addOnMap[placement].inset };
		} else {
			return styles;
		}
	}, {});

	return addOnStyles;
};
