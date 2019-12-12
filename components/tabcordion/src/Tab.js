/** @jsx jsx */

import React, { useState, forwardRef } from 'react';
import { jsx, useBrand, merge } from '@westpac/core';
import PropTypes from 'prop-types';
import { ExpandLessIcon, ExpandMoreIcon } from '@westpac/icon';
import pkg from '../package.json';

export const Tab = forwardRef(
	({ look, children, last, selected, text, mode, panelId, onClick, tabId, ...props }, ref) => {
		const { COLORS, [pkg.name]: overridesWithTokens } = useBrand();
		const [hidden, setHidden] = useState(!selected);
		const Icon = hidden ? ExpandMoreIcon : ExpandLessIcon;
		const iconAssistiveText = hidden ? 'Show More' : 'Show Less';

		const overrides = {
			Panel,
			AccordionLabel,
		};

		merge(overrides, overridesWithTokens);

		const handleAccordionClick = () => {
			onClick();
			setHidden(!hidden);
		};

		return (
			<>
				{mode === 'accordion' ? (
					<overrides.AccordionLabel
						look={look}
						onClick={handleAccordionClick}
						id={tabId}
						last={last}
						hidden={hidden}
						aria-controls={panelId}
						aria-expanded={selected}
					>
						<span>{text}</span>
						<Icon color={COLORS.muted} assistiveText={iconAssistiveText} size="small" />
					</overrides.AccordionLabel>
				) : null}
				<overrides.Panel
					hidden={mode === 'accordion' ? hidden : !selected}
					look={look}
					aria-labelledby={tabId}
					id={panelId}
					aria-selected={selected}
					last={last}
					selected={selected}
					mode={mode}
					role="tabpanel"
					ref={ref}
					tabIndex="0"
				>
					{children}
				</overrides.Panel>
			</>
		);
	}
);

Tab.propTypes = {
	/** The panel content for this tab */
	children: PropTypes.node.isRequired,
	// Whether this tab/panel is selected/expanded
	selected: PropTypes.bool,
	/** The text label for this tab */
	text: PropTypes.string.isRequired,
	// Render as either an accordion or tabs
	mode: PropTypes.oneOf(['accordion', 'tabs']),
	// The id for this tab's panel
	panelId: PropTypes.string,
	// The onClick handler for the accordion label
	onClick: PropTypes.func,
	// The id for the tab
	tabId: PropTypes.string,
};

// ==============================
// Overrides & Styled Components
// ==============================
const Panel = forwardRef(({ look, last, selected, mode, ...props }, ref) => {
	const { COLORS: colors, PACKS: packs } = useBrand();
	const styles =
		mode === 'accordion'
			? {
					lego: {
						borderLeftWidth: '0.375rem',
						borderLeftColor: colors.border,
					},
					soft: last
						? {
								borderBottomLeftRadius: '0.1875rem',
								borderBottomRightRadius: '0.1875rem',
						  }
						: {},
			  }
			: {};
	return (
		<div
			ref={ref}
			css={{
				borderLeft: `1px solid ${colors.border}`,
				borderRight: `1px solid ${colors.border}`,
				borderBottom: (mode === 'tabs' || last) && `1px solid ${colors.border}`,
				borderTop: mode === 'tabs' && `1px solid ${colors.border}`,
				padding: '1.5rem 3.22%',
				':focus': {
					// color: packs.link.color,
				},
				...styles[look],
			}}
			{...props}
		/>
	);
});

const AccordionLabel = ({ look, last, hidden, ...props }) => {
	const { COLORS: colors } = useBrand();
	const styles = {
		soft: {
			borderBottom: !hidden && `1px solid ${colors.border}`,
			...(last &&
				hidden && {
					borderBottom: `1px solid ${colors.border}`,
					borderBottomLeftRadius: '0.1875rem',
					borderBottomRightRadius: '0.1875rem',
				}),
			':first-of-type': {
				borderTopLeftRadius: '0.1875rem',
				borderTopRightRadius: '0.1875rem',
			},
		},
		lego: {
			borderBottom: !hidden && `1px solid ${colors.border}`,
			borderLeftWidth: '6px',
			borderLeftColor: !hidden ? colors.border : colors.hero,
			':last-of-type': {
				borderBottom: `1px solid ${colors.border}`,
			},
		},
	};
	return (
		<button
			css={{
				alignItems: 'center',
				backgroundColor: colors.background,
				border: 0,
				borderTop: `1px solid ${colors.border}`,
				borderLeft: `1px solid ${colors.border}`,
				borderRight: `1px solid ${colors.border}`,
				cursor: 'pointer',
				display: 'flex',
				fontSize: '1rem',
				justifyContent: 'space-between',
				padding: '0.75rem 1.125rem',
				position: 'relative',
				textAlign: 'left',
				width: '100%',
				...styles[look],
			}}
			{...props}
		/>
	);
};
