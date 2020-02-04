/** @jsx jsx */

import { jsx, useBrand, overrideReconciler } from '@westpac/core';
import { Fragment, useState, forwardRef } from 'react';
import PropTypes from 'prop-types';

import { AccordionLabel, accordionLabelStyles } from './overrides/accordionLabel';
import { AccordionIcon, accordionIconStyles } from './overrides/accordionIcon';
import { Panel, panelStyles } from './overrides/panel';
import pkg from '../package.json';

export const Tab = forwardRef(
	(
		{
			look,
			last,
			selected,
			text,
			mode,
			panelId,
			onClick,
			tabId,
			children,
			overrides: componentOverrides,
			...rest
		},
		ref
	) => {
		const [hidden, setHidden] = useState(!selected);
		const {
			OVERRIDES: { [pkg.name]: tokenOverrides },
			[pkg.name]: brandOverrides,
		} = useBrand();

		const defaultOverrides = {
			AccordionLabel: {
				styles: accordionLabelStyles,
				component: AccordionLabel,
				attributes: (_, a) => a,
			},
			AccordionIcon: {
				styles: accordionIconStyles,
				component: AccordionIcon,
				attributes: (_, a) => a,
			},
			Panel: {
				styles: panelStyles,
				component: Panel,
				attributes: (_, a) => a,
			},
		};

		const state = {
			look,
			last,
			selected,
			mode,
			hidden,
			overrides: componentOverrides,
			...rest,
		};

		const overrides = overrideReconciler(
			defaultOverrides,
			tokenOverrides,
			brandOverrides,
			componentOverrides
		);

		const handleAccordionClick = () => {
			setHidden(!hidden);
			onClick();
		};

		return (
			<Fragment>
				{mode === 'accordion' ? (
					<overrides.AccordionLabel.component
						onClick={handleAccordionClick}
						id={tabId}
						aria-controls={panelId}
						aria-expanded={selected}
						{...overrides.AccordionLabel.attributes(state)}
						css={overrides.AccordionLabel.styles(state)}
					>
						<span>{text}</span>
						<overrides.AccordionIcon.component
							aria-hidden="true"
							focusable="false"
							{...overrides.AccordionIcon.attributes(state)}
							css={overrides.AccordionIcon.styles(state)}
						/>
					</overrides.AccordionLabel.component>
				) : null}
				<overrides.Panel.component
					id={panelId}
					ref={ref}
					tabIndex="0"
					{...overrides.Panel.attributes({
						...state,
						hidden: mode === 'accordion' ? hidden : !selected,
					})}
					css={overrides.Panel.styles(state)}
				>
					{children}
				</overrides.Panel.component>
			</Fragment>
		);
	}
);

Tab.propTypes = {
	/**
	 * The panel content for this tab
	 */
	children: PropTypes.node.isRequired,

	/**
	 * Whether this tab/panel is selected/expanded
	 */
	selected: PropTypes.bool,

	/**
	 * The text label for this tab
	 */
	text: PropTypes.string.isRequired,

	/**
	 * Render as either an accordion or tabs
	 */
	mode: PropTypes.oneOf(['accordion', 'tabs']),

	/**
	 * The id for this tab's panel
	 */
	panelId: PropTypes.string,

	/**
	 * The onClick handler for the accordion label
	 */
	onClick: PropTypes.func,

	/**
	 * The id for the tab
	 */
	tabId: PropTypes.string,

	/**
	 * The override API
	 */
	overrides: PropTypes.shape({
		AccordionLabel: PropTypes.shape({
			styles: PropTypes.func,
			component: PropTypes.elementType,
			attributes: PropTypes.func,
		}),
		AccordionIcon: PropTypes.shape({
			styles: PropTypes.func,
			component: PropTypes.elementType,
			attributes: PropTypes.func,
		}),
		Panel: PropTypes.shape({
			styles: PropTypes.func,
			component: PropTypes.elementType,
			attributes: PropTypes.func,
		}),
	}),
};
