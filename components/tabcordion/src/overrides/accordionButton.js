/** @jsx jsx */

import { jsx, useBrand } from '@westpac/core';

const AccordionButton = ({ state: _, ...rest }) => <button type="button" {...rest} />;

const accordionButtonStyles = (_, { look, last, hidden }) => {
	const { COLORS } = useBrand();
	const styleMap = {
		soft: {
			borderBottomLeftRadius: last && hidden && '0.1875rem',
			borderBottomRightRadius: last && hidden && '0.1875rem',

			':first-of-type': {
				borderTop: `1px solid ${COLORS.border}`,
				borderTopLeftRadius: '0.1875rem',
				borderTopRightRadius: '0.1875rem',
			},
		},
		lego: {
			borderLeft: `0.375rem solid ${!hidden ? COLORS.border : COLORS.hero}`,

			':first-of-type': {
				borderTop: `1px solid ${COLORS.border}`,
			},
		},
	};

	return {
		display: 'flex',
		position: 'relative',
		width: '100%',
		alignItems: 'center',
		justifyContent: 'space-between',
		backgroundColor: COLORS.background,
		padding: '0.75rem 1.125rem',
		border: 0,
		borderBottom: `1px solid ${COLORS.border}`,
		borderLeft: `1px solid ${COLORS.border}`,
		borderRight: `1px solid ${COLORS.border}`,
		fontSize: '1rem',
		textAlign: 'left',
		cursor: 'pointer',
		...styleMap[look],
	};
};

const accordionButtonAttributes = (_, { tabId, panelId, hidden }) => ({
	id: tabId,
	'aria-controls': panelId,
	'aria-expanded': !hidden,
});

export const defaultAccordionButton = {
	component: AccordionButton,
	styles: accordionButtonStyles,
	attributes: accordionButtonAttributes,
};
