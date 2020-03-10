/** @jsx jsx */

import { jsx, useBrand, overrideReconciler } from '@westpac/core';
import { Fragment, useState, forwardRef, useEffect } from 'react';
import { useSpring, animated } from 'react-spring';
import PropTypes from 'prop-types';

import { defaultAccordionButton } from './overrides/accordionButton';
import { defaultAccordionIcon } from './overrides/accordionIcon';
import { defaultPanel } from './overrides/panel';
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
			AccordionButton: defaultAccordionButton,
			AccordionIcon: defaultAccordionIcon,
			Panel: defaultPanel,
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

		const {
			AccordionButton: {
				component: AccordionButton,
				styles: accordionButtonStyles,
				attributes: accordionButtonAttributes,
			},
			AccordionIcon: {
				component: AccordionIcon,
				styles: accordionIconStyles,
				attributes: accordionIconAttributes,
			},
			Panel: { component: Panel, styles: panelStyles, attributes: panelAttributes },
		} = overrideReconciler(defaultOverrides, tokenOverrides, brandOverrides, componentOverrides);

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
					<AccordionButton
						onClick={handleAccordionClick}
						state={state}
						{...accordionButtonAttributes(state)}
						css={accordionButtonStyles(state)}
					>
						<span>{text}</span>
						<AccordionIcon
							state={state}
							{...accordionIconAttributes(state)}
							css={accordionIconStyles(state)}
						/>
					</AccordionButton>
				) : null}

				<animated.div style={animate}>
					<div ref={bind.ref}>
						<Panel ref={ref} state={state} {...panelAttributes(state)} css={panelStyles(state)}>
							{children}
						</Panel>
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
		AccordionButton: PropTypes.shape({
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
