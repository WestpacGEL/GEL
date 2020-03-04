/** @jsx jsx */

import { jsx, useBrand, overrideReconciler } from '@westpac/core';
import { Fragment, useState, forwardRef, useEffect } from 'react';
import { useSpring, animated } from 'react-spring';
import PropTypes from 'prop-types';

import { AccordionLabel, accordionLabelStyles } from './overrides/accordionLabel';
import { AccordionIcon, accordionIconStyles } from './overrides/accordionIcon';
import { Panel, panelStyles } from './overrides/panel';
import { useMeasure } from './_utils';
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
		const {
			OVERRIDES: { [pkg.name]: tokenOverrides },
			[pkg.name]: brandOverrides,
		} = useBrand();

		const [hidden, setHidden] = useState(!selected);
		const [bind, { height }] = useMeasure();
		const [initial, setInitial] = useState(true);

		const animate = useSpring({
			to: {
				height: mode === 'accordion' ? (hidden ? 0 : height) : 'auto',
				overflow: 'hidden',
			},
			immediate: initial,
		});

		const defaultOverrides = {
			AccordionLabel: {
				styles: accordionLabelStyles,
				component: AccordionLabel,
				attributes: () => null,
			},
			AccordionIcon: {
				styles: accordionIconStyles,
				component: AccordionIcon,
				attributes: () => null,
			},
			Panel: {
				styles: panelStyles,
				component: Panel,
				attributes: () => null,
			},
		};

		const state = {
			hidden,
			look,
			last,
			selected,
			text,
			mode,
			panelId,
			onClick,
			tabId,
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
			setInitial(false);
			setHidden(!hidden);
			onClick();
		};

		useEffect(() => {
			setHidden(!selected);
		}, [mode]);

		return (
			<Fragment>
				{mode === 'accordion' ? (
					<overrides.AccordionLabel.component
						onClick={handleAccordionClick}
						id={tabId}
						aria-controls={panelId}
						aria-expanded={!hidden}
						hidden={hidden}
						look={look}
						last={last}
						selected={selected}
						text={text}
						mode={mode}
						panelId={panelId}
						tabId={tabId}
						{...overrides.AccordionLabel.attributes(state)}
						css={overrides.AccordionLabel.styles(state)}
					>
						<span>{text}</span>
						<overrides.AccordionIcon.component
							assistiveText={null}
							aria-hidden="true"
							hidden={hidden}
							look={look}
							last={last}
							selected={selected}
							text={text}
							mode={mode}
							panelId={panelId}
							tabId={tabId}
							{...overrides.AccordionIcon.attributes(state)}
							css={overrides.AccordionIcon.styles(state)}
						/>
					</overrides.AccordionLabel.component>
				) : null}

				<animated.div style={animate}>
					<div ref={bind.ref}>
						<overrides.Panel.component
							id={panelId}
							ref={ref}
							aria-hidden={mode === 'accordion' ? hidden : !selected}
							hidden={mode === 'tabs' && !selected}
							look={look}
							last={last}
							selected={selected}
							text={text}
							mode={mode}
							panelId={panelId}
							tabId={tabId}
							{...overrides.Panel.attributes({
								...state,
								hidden: mode === 'tabs' && !selected,
							})}
							css={overrides.Panel.styles(state)}
						>
							{children}
						</overrides.Panel.component>
					</div>
				</animated.div>
			</Fragment>
		);
	}
);

Tab.propTypes = {
	/**
	 * The look of the tabs
	 */
	look: PropTypes.oneOf(['soft', 'lego']),

	/**
	 * Indicator if this is the last tab
	 */
	last: PropTypes.bool,

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
	 * The panel content for this tab
	 */
	children: PropTypes.node.isRequired,

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
