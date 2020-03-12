/** @jsx jsx */

import { jsx, useBrand } from '@westpac/core';

const AccordionButton = ({ state, ...rest }) => <button type="button" {...rest} />;

const accordionButtonStyles = (_, { look, last, hidden }) => {
	const { COLORS } = useBrand();
	const styles = {
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
			borderLeftWidth: '0.375rem',
			borderLeftColor: !hidden ? COLORS.border : COLORS.hero,

			':first-of-type': {
				borderTop: `1px solid ${COLORS.border}`,
			},
		},
	};

	return {
		alignItems: 'center',
		backgroundColor: COLORS.background,
		border: 0,
		borderLeft: `1px solid ${COLORS.border}`,
		borderRight: `1px solid ${COLORS.border}`,
		cursor: 'pointer',
		display: 'flex',
		fontSize: '1rem',
		justifyContent: 'space-between',
		padding: '0.75rem 1.125rem',
		position: 'relative',
		textAlign: 'left',
		width: '100%',
		borderBottom: `1px solid ${COLORS.border}`,
		...styles[look],
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
