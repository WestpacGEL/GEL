import { GEL, jsx } from '@westpac/core';
import {
	AddIcon,
	BankIcon,
	CalendarIcon,
	DeleteIcon,
	GridIcon,
	HelpIcon,
	MessageIcon,
	StarIcon,
	WriteIcon,
} from '@westpac/icon';
import { Fragment } from 'react';

const Wrapper = ({ state: { icon }, children, ...rest }) => (
	<Fragment>
		<div {...rest}>{children}</div>
		<div css={{ marginBottom: '1rem' }}>
			name: <span css={{ fontWeight: 900 }}>{icon}</span>
		</div>
	</Fragment>
);

const Svg = ({ children, state: { icon, assistiveText }, ...rest }) => (
	<svg
		aria-label={assistiveText}
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 24 24"
		role="img"
		focusable="false"
		{...rest}
	>
		{icon === 'BankIcon' ? <circle fill="currentColor" cx="12" cy="12" r="12"></circle> : children}
	</svg>
);

function Example({ brand }) {
	const overridesWithTokens = { ...brand };
	overridesWithTokens['@westpac/icon'] = {
		Icon: {
			styles: (styles) => ({
				...styles,
				outline: '1px solid red',
			}),
			component: Wrapper,
		},
		Svg: {
			component: Svg,
		},
	};

	return (
		<GEL brand={overridesWithTokens}>
			<h2>With overrides applied</h2>
			<AddIcon />
			<CalendarIcon />
			<DeleteIcon />
			<GridIcon />
			<HelpIcon />
			<MessageIcon />
			<StarIcon />
			<WriteIcon />

			<h2>Overriding the icon itself</h2>
			<BankIcon />

			<h2>With overrides and component overrides</h2>
			<AddIcon
				overrides={{
					Svg: {
						styles: (styles) => ({
							...styles,
							outline: '3px dotted green',
						}),
					},
				}}
			/>
		</GEL>
	);
}

export default Example;
