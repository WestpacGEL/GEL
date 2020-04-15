/** @jsx jsx */

import { jsx, useBrand } from '@westpac/core';

const Link = ({ state: { disabled }, ...rest }) => (
	<button type="button" disabled={disabled} {...rest} />
);

const linkStyles = (_, { active, first, last, disabled }) => {
	const { COLORS } = useBrand();

	return {
		appearance: 'none',
		marginLeft: -1,
		lineHeight: 1.15,
		display: 'inline-block',
		border: `1px solid ${active ? COLORS.hero : COLORS.border}`,
		backgroundColor: active ? COLORS.hero : '#fff',
		padding: '0.4375rem 0.75rem',
		fontSize: '0.875rem',
		color: active ? '#fff' : COLORS.neutral,
		textDecoration: 'none',
		cursor: 'pointer',
		transition: 'background .2s ease, border .2s ease',

		':hover': {
			backgroundColor: !active && COLORS.background,
		},

		...(first && {
			marginLeft: 0,
			borderTopLeftRadius: '0.1875rem',
			borderBottomLeftRadius: '0.1875rem',
		}),
		...(last && {
			borderTopRightRadius: '0.1875rem',
			borderBottomRightRadius: '0.1875rem',
		}),
		...(disabled && {
			color: COLORS.muted,
			backgroundColor: COLORS.light,
			cursor: 'not-allowed',
			opacity: '0.5',
		}),
	};
};

const linkAttributes = (_, { active, assistiveText, disabled }) => ({
	'aria-current': active ? 'page' : undefined,
	'aria-label': disabled ? undefined : assistiveText,
	'aria-disabled': disabled, //a11y: required to aid VoiceOver/Talkback UX
});

export const defaultLink = {
	component: Link,
	styles: linkStyles,
	attributes: linkAttributes,
};
