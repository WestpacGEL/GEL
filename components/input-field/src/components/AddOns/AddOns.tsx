import { useBrand } from '@westpac/core';
import { AddOnProps, InputAddOnProps } from './AddOns.types';
import { useInputFieldContext } from '../InputField';

const DefaultAddOn = ({ position, children, ...props }: AddOnProps) => {
	return (
		<div
			css={{
				display: 'flex',
				flexShrink: 0,
				overflow: 'hidden',
				'> button, select': {
					...(position === 'before' ? { borderTopRightRadius: 0, borderBottomRightRadius: 0 } : {}),
					...(position === 'after' ? { borderTopLeftRadius: 0, borderBottomLeftRadius: 0 } : {}),
				},
			}}
			{...props}
		>
			{children}
		</div>
	);
};

const TextAddOn = ({ position, children, ...props }: AddOnProps) => {
	const { COLORS } = useBrand();
	const { size } = useInputFieldContext();
	const sizeMap = {
		small: {
			padding: '0.1875rem 0.5625rem 0.25rem',
			fontSize: '0.875rem',
			height: '1.875rem',
		},
		medium: {
			padding: '0.3125rem 0.75rem',
			fontSize: '1rem',
			height: '2.25rem',
		},
		large: {
			padding: '0.5rem 0.9375rem',
			fontSize: '1rem',
			height: '2.625rem',
		},
		xlarge: {
			padding: '0.5625rem 1.125rem 0.625rem',
			fontSize: '1.125rem',
			height: '3rem',
		},
	};
	return (
		<div
			css={{
				boxSizing: 'border-box',
				position: 'relative',
				...sizeMap[size],
				lineHeight: 1.5,
				backgroundColor: COLORS.light,
				border: `1px solid ${COLORS.borderDark}`,
				borderRadius:
					position === 'before' ? '0.1875rem 0rem 0rem 0.1875rem' : '0rem 0.1875rem 0.1875rem 0rem',
				whiteSpace: 'nowrap',
			}}
			{...props}
		>
			{children}
		</div>
	);
};

const IconAddOn = ({ position, children, ...props }: AddOnProps) => {
	const { size } = useInputFieldContext();
	const paddingMap = {
		small: '0.5625rem',
		medium: '0.75rem',
		large: '0.9375rem',
		xlarge: '1.125rem',
	};

	return (
		<div
			css={{
				height: '100%',
				display: 'flex',
				alignItems: 'center',
				...(position === 'before' && { paddingLeft: paddingMap[size] }),
				...(position === 'after' && { paddingRight: paddingMap[size] }),
			}}
			{...props}
		>
			{children}
		</div>
	);
};

export const InputAddOn = ({
	position,
	icon: Icon,
	inset = false,
	children,
	...props
}: InputAddOnProps) => {
	const isInset = Icon ? true : inset;

	let addOnType = 'default';
	if (Icon) {
		addOnType = 'icon';
	} else if (typeof children === 'string') {
		addOnType = 'text';
	}

	const wrapperMap = {
		default: DefaultAddOn,
		text: TextAddOn,
		icon: IconAddOn,
	};

	const Wrapper = wrapperMap[addOnType as keyof typeof wrapperMap];

	return (
		<Wrapper
			position={position}
			css={{
				...(isInset && { position: 'absolute', [position === 'before' ? 'left' : 'right']: 0 }),
			}}
			{...props}
		>
			{Icon ? <Icon size="small" /> : children}
		</Wrapper>
	);
};
