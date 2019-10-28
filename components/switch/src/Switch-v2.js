/** @jsx jsx */

import React, { useState } from 'react';
import { jsx, useBrand, useMediaQuery } from '@westpac/core';
import { VisuallyHidden } from '@westpac/a11y';
import shortid from 'shortid';
// ==============================
// Utils
// ==============================
const sizeMap = {
	small: {
		width: '4.375rem',
		height: '1.875rem',
		borderRadius: '1.875rem',
		fontSize: '0.875rem',
	},
	medium: {
		width: '5rem',
		height: '2.25rem',
		borderRadius: '2.25rem',
		fontSize: '1rem',
	},
	large: {
		width: '5.5625rem',
		height: '2.625rem',
		borderRadius: '2.625rem',
		fontSize: '1rem',
	},
	xlarge: {
		width: '6rem',
		height: '3rem',
		borderRadius: '3rem',
		fontSize: '1.125rem',
	},
};

const responsiveMap = size => ({
	width: size.map(s => s && sizeMap[s].width),
	height: size.map(s => s && sizeMap[s].height),
	borderRadius: size.map(s => s && sizeMap[s].borderRadius),
	fontSize: size.map(s => s && sizeMap[s].fontSize),
});

const asArray = val => (Array.isArray(val) ? val : [val]);

const ToggleText = ({ position, checked, size, ...props }) => {
	const { COLORS } = useBrand();
	const mq = useMediaQuery();

	return (
		<span
			css={mq({
				position: 'absolute',
				[position]: 0,
				transition: 'opacity .3s ease',
				opacity: checked ? 1 : 0,
				width: size.height,
				lineHeight: size.height,
				fontSize: size.fontSize,
				paddingLeft: '0.25rem',
				paddingRight: '0.25rem',
				color: position === 'right' ? COLORS.neutral : '#fff',
				textAlign: 'center',
			})}
			{...props}
		/>
	);
};
// ==============================
// Component
// ==============================
export const Switch = ({
	name,
	label,
	checked: isChecked,
	onChange,
	size,
	block,
	flipped,
	toggleText,
	srOnlyText,
}) => {
	const { COLORS } = useBrand();
	const mq = useMediaQuery();
	const [checked, setChecked] = useState(isChecked);
	const [switchId] = useState(`switch-${shortid.generate()}`);

	// need to generate this once...
	const sizeArr = responsiveMap(asArray(size));

	const switchStyle = {
		display: 'block',
		position: 'relative',
		border: `2px solid ${checked ? COLORS.hero : COLORS.border}`,
		borderRadius: '2.25rem',
		backgroundColor: checked ? COLORS.hero : '#fff',
		height: '2.25rem',
		width: '5rem',
		overflow: 'hidden',
		lineHeight: 1.5,
		transition: 'border .3s ease,background .3s ease',

		// the thumb/dot
		'::after': {
			content: '""',
			height: '2.25rem',
			width: '2.25rem',
			display: 'block',
			position: 'absolute',
			left: checked ? '100%' : 0,
			transform: checked ? 'translateX(-100%)' : null,
			top: 0,
			borderRadius: '50%',
			backgroundColor: '#fff',
			boxShadow: '3px 0 6px 0 rgba(0,0,0,0.3)',
			transition: 'all .3s ease',
		},
	};

	const labelStyle = {
		display: block ? 'flex' : 'inline-flex',
		width: block && '100%',
		flexWrap: 'wrap',
		alignItems: 'center',
		position: 'relative',
		marginRight: !block && '1.125rem',
		height: !block && sizeArr.height,
		marginBottom: '0.375rem',
		flexDirection: flipped && 'row-reverse',
		cursor: 'pointer',
	};

	const textStyle = {
		flex: block && 1,
		display: 'flex',
		alignItems: 'center',
		whiteSpace: 'normal',
		position: 'relative',
		[flipped ? 'paddingLeft' : 'paddingRight']: '0.375rem',
	};

	// need to fix up usage of mq to only run on the stuff that actually uses it
	return (
		<label htmlFor={switchId} css={mq(labelStyle)}>
			<input
				id={switchId}
				type="checkbox"
				name={name}
				checked={checked}
				onChange={() => setChecked(!checked)}
				css={{
					position: 'absolute',
					zIndex: '-1',
					opacity: 0,
				}}
			/>
			<span css={textStyle}>{srOnlyText ? <VisuallyHidden>{label}</VisuallyHidden> : label}</span>
			<span css={switchStyle}>
				{toggleText.length && (
					<>
						<ToggleText position={'left'} checked={checked} size={sizeArr}>
							{toggleText[0]}
						</ToggleText>
						<ToggleText position={'right'} checked={!checked} size={sizeArr}>
							{toggleText[1]}
						</ToggleText>
					</>
				)}
			</span>
		</label>
	);
};

Switch.defaultProps = {
	size: 'medium',
	checked: false,
	toggleText: ['On', 'Off'],
};
