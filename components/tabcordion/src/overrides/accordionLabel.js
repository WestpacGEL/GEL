/** @jsx jsx */

import { jsx, useBrand } from '@westpac/core';

export const AccordionLabel = ({
	hidden,
	look,
	last,
	selected,
	text,
	mode,
	panelId,
	tabId,
	...rest
}) => <button type="button" {...rest} />;

export const accordionLabelStyles = (_, { look, last, hidden }) => {
	const { COLORS } = useBrand();
	const styles = {
		soft: {
			borderBottom: `1px solid ${COLORS.border}`,
			...(last &&
				hidden && {
					borderBottom: `1px solid ${COLORS.border}`,
					borderBottomLeftRadius: '0.1875rem',
					borderBottomRightRadius: '0.1875rem',
				}),
			':first-of-type': {
				borderTop: `1px solid ${COLORS.border}`,
				borderTopLeftRadius: '0.1875rem',
				borderTopRightRadius: '0.1875rem',
			},
		},
		lego: {
			borderBottom: !hidden && `1px solid ${COLORS.border}`,
			borderLeftWidth: '6px',
			borderLeftColor: !hidden ? COLORS.border : COLORS.hero,
			':last-of-type': {
				borderBottom: `1px solid ${COLORS.border}`,
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
		...styles[look],
	};
};
