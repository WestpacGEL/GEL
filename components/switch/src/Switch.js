/** @jsx jsx */

import { useState, useEffect, Fragment } from 'react';
import PropTypes from 'prop-types';
import { jsx, useBrand, useMediaQuery, merge, wrapHandlers, asArray } from '@westpac/core';
import pkg from '../package.json';

// ==============================
// Utils
// ==============================
const sizeMap = {
	small: {
		width: '4.375rem',
		height: '1.875rem',
		borderRadius: '1.875rem',
		borderWidth: '2px',
		fontSize: '0.875rem',
	},
	medium: {
		width: '5rem',
		height: '2.25rem',
		borderRadius: '2.25rem',
		borderWidth: '2px',
		fontSize: '1rem',
	},
	large: {
		width: '5.5625rem',
		height: '2.625rem',
		borderRadius: '2.625rem',
		borderWidth: '2px',
		fontSize: '1rem',
	},
	xlarge: {
		width: '6rem',
		height: '3rem',
		borderRadius: '3rem',
		borderWidth: '2px',
		fontSize: '1.125rem',
	},
};

const responsiveMap = size => ({
	width: size.map(s => s && sizeMap[s].width),
	height: size.map(s => s && sizeMap[s].height),
	borderRadius: size.map(s => s && sizeMap[s].borderRadius),
	borderWidth: size.map(s => s && sizeMap[s].borderWidth),
	fontSize: size.map(s => s && sizeMap[s].fontSize),
});

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
	disabled,
	assistiveText,
	...props
}) => {
	const { COLORS, PACKS, [pkg.name]: overridesWithTokens } = useBrand();
	const mq = useMediaQuery();
	const [checked, setChecked] = useState(isChecked);
	const sizeArr = responsiveMap(asArray(size));

	const overrides = {
		toggleCSS: {},
		toggleTextCSS: {},
		CSS: {},
		Label,
		ToggleTextWrapper,
	};

	merge(overrides, overridesWithTokens);

	useEffect(() => {
		setChecked(isChecked);
	}, [isChecked]);

	const handleChange = () => wrapHandlers(onChange, () => setChecked(!checked));

	return (
		<label
			css={mq({
				display: block ? 'flex' : 'inline-flex',
				verticalAlign: 'top',
				opacity: disabled && 0.5,
				width: block && '100%',
				flexWrap: 'wrap',
				alignItems: 'center',
				position: 'relative',
				marginRight: !block && '1.125rem',
				height: !block && sizeArr.height,
				marginBottom: '0.375rem',
				flexDirection: flipped && 'row-reverse',
				cursor: disabled ? 'not-allowed' : 'pointer',
				...overrides.CSS,
			})}
			{...props}
		>
			<input
				type="checkbox"
				name={name}
				checked={checked}
				aria-label={assistiveText}
				onChange={handleChange(name)}
				disabled={disabled}
				css={{
					position: 'absolute',
					zIndex: '-1',
					opacity: 0,
				}}
			/>
			{label && (
				<overrides.Label block={block} flipped={flipped}>
					{label}
				</overrides.Label>
			)}
			<span
				css={mq({
					boxSizing: 'border-box',
					display: 'block',
					position: 'relative',
					border: `${sizeArr.borderWidth} solid ${checked ? COLORS.hero : COLORS.border}`,
					borderRadius: sizeArr.borderRadius,
					backgroundColor: checked ? COLORS.hero : '#fff',
					height: sizeArr.height,
					width: sizeArr.width,
					overflow: 'hidden',
					lineHeight: 1.5,
					transition: 'border .3s ease,background .3s ease',
					userSelect: 'none',

					// the thumb/dot
					'::after': {
						content: '""',
						height: `calc(${sizeArr.height} - ${sizeArr.borderWidth} - ${sizeArr.borderWidth})`,
						width: `calc(${sizeArr.height} - ${sizeArr.borderWidth} - ${sizeArr.borderWidth})`,
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
					'body:not(.isMouseMode) input:focus ~ &': {
						...PACKS.focus,
					},
					...overrides.toggleCSS,
				})}
			>
				{!!toggleText && (
					<overrides.ToggleTextWrapper>
						<ToggleText
							position={'left'}
							checked={checked}
							size={sizeArr}
							css={overrides.toggleTextCSS}
						>
							{toggleText[0]}
						</ToggleText>
						<ToggleText
							position={'right'}
							checked={!checked}
							size={sizeArr}
							css={overrides.toggleTextCSS}
						>
							{toggleText[1]}
						</ToggleText>
					</overrides.ToggleTextWrapper>
				)}
			</span>
		</label>
	);
};

// ==============================
// Types
// ==============================

const options = {
	size: ['small', 'medium', 'large', 'xlarge'],
};

Switch.propTypes = {
	/**
	 * Switch input element name
	 */
	name: PropTypes.string,

	/**
	 * Switch label text
	 */
	label: PropTypes.string,

	/**
	 * On/off text.
	 *
	 * This prop takes an array where the first index is the "on" text and second index is the "off" text e.g. "['Yes', 'No']"
	 */
	toggleText: PropTypes.arrayOf(PropTypes.string),

	/**
	 * Switch size
	 */
	size: PropTypes.oneOfType([
		PropTypes.oneOf(options.size),
		PropTypes.arrayOf(PropTypes.oneOf(options.size)),
	]),

	/**
	 * Block mode
	 */
	block: PropTypes.bool,

	/**
	 * Reverse the horizontal orientation. Renders the toggle on the left of the label text.
	 */
	flipped: PropTypes.bool,

	/**
	 * Text to use as the `aria-label` for the switch input
	 */
	assistiveText: PropTypes.string,

	/**
	 * Switch on/off state
	 */
	checked: PropTypes.bool,

	/**
	 * Disable the switch
	 */
	disabled: PropTypes.bool,

	/**
	 * The onChange handler for this switch
	 */
	onChange: PropTypes.func,
};

Switch.defaultProps = {
	size: 'medium',
	checked: false,
	toggleText: ['On', 'Off'],
};

// ==============================
// Styled/Token Components
// ==============================
const Label = ({ block, flipped, ...props }) => (
	<span
		css={{
			flex: block && 1,
			display: 'flex',
			alignItems: 'center',
			whiteSpace: 'normal',
			position: 'relative',
			[flipped ? 'paddingLeft' : 'paddingRight']: '0.375rem',
		}}
		{...props}
	/>
);

const ToggleText = ({ position, checked, size, ...props }) => {
	const { BRAND, COLORS } = useBrand();
	const mq = useMediaQuery();

	let color = '#fff';
	if (BRAND === 'STG') {
		color = COLORS.text;
	}

	// Internal height CSS
	const height = `calc(${size.height} - ${size.borderWidth} - ${size.borderWidth})`;

	return (
		<span
			css={mq({
				boxSizing: 'border-box',
				position: 'absolute',
				width: '100%',
				lineHeight: height,
				fontSize: size.fontSize,
				paddingLeft: position === 'right' ? height : '6%',
				paddingRight: position === 'left' ? height : '6%',
				color: position === 'right' ? COLORS.text : color,
				textAlign: 'center',
				opacity: checked ? 1 : 0,
				transition: 'opacity .3s ease',
			})}
			{...props}
		/>
	);
};

const ToggleTextWrapper = ({ children }) => <Fragment>{children}</Fragment>;
