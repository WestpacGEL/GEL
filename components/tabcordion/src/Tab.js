import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import { ExpandLessIcon, ExpandMoreIcon } from '@westpac/icon';
import { useBrand } from '@westpac/core';

export const Tab = forwardRef(
	(
		{
			look,
			children,
			last,
			selected,
			label,
			mode,
			panelId,
			onClick,
			tabId,
			Panel,
			AccordionLabel,
			...props
		},
		ref
	) => {
		const { COLORS } = useBrand();
		const Icon = selected ? ExpandLessIcon : ExpandMoreIcon;
		const iconLabel = selected ? 'Show Less' : 'Show More';

		return (
			<>
				{mode === 'accordion' ? (
					<AccordionLabel
						look={look}
						onClick={onClick}
						id={tabId}
						last={last}
						selected={selected}
						aria-controls={panelId}
						aria-expanded={selected}
					>
						<span>{label}</span>
						<Icon color={COLORS.muted} label={iconLabel} size="small" />
					</AccordionLabel>
				) : null}
				<Panel
					hidden={!selected}
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
				</Panel>
			</>
		);
	}
);

Tab.propTypes = {
	/** The panel content for this tab */
	children: PropTypes.node.isRequired,
	// Whether this tab/panel is selected/expanded
	selected: PropTypes.bool,
	/** Provide a label that describes the purpose of the set of tabs. */
	label: PropTypes.string.isRequired,
	// Whether or not to display the accordion label
	mode: PropTypes.oneOf(['accordion', 'tabs']),
	// The id for this tab's panel
	panelId: PropTypes.string,
	// The onClick handler for the accordion label
	onClick: PropTypes.func,
	// The id for the tab
	tabId: PropTypes.string,
};
