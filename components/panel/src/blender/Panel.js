/** @jsx jsx */

import { jsx } from '@westpac/core';
import PropTypes from 'prop-types';

import { blenderPanel } from '../overrides/panel';
import { blenderHeading } from '../overrides/heading';
import { blenderHeader } from '../overrides/header';
// ==============================
// Component
// ==============================
export const Panel = ({ look, heading, headingTag, children, ...rest }) => {
	const { component: Panel, styles: panelStyles, attributes: panelAttributes } = blenderPanel;
	const {
		component: Heading,
		styles: headingStyles,
		attributes: headingAttributes,
	} = blenderHeading;
	const { component: Header, styles: headerStyles, attributes: headerAttributes } = blenderHeader;

	// maybe I introduce state here so I can reuse the html component and attributes easily
	const state = {
		look,
		heading,
		headingTag,
	};

	// styles arent dependent on state since it will generate all styles for that particular component

	return (
		<Panel
			className={`GEL-panel-${look}`}
			{...panelAttributes(state)}
			css={panelStyles()}
			{...rest}
		>
			<Header state={state} {...headerAttributes(state)} css={headerStyles()}>
				<Heading state={state} {...headingAttributes(state)} css={headingStyles()}>
					{heading}
				</Heading>
			</Header>
			{children}
		</Panel>
	);
};

// ==============================
// Types
// ==============================

// Ideally these take the same props as the original minus the overrides
// we can probably omit the tag prop? since they can change it to whatever they want
Panel.propTypes = {
	/**
	 * Panel look
	 */
	look: PropTypes.oneOf(['hero', 'faint']).isRequired,

	/**
	 * Panel heading text
	 */
	heading: PropTypes.string.isRequired,

	/**
	 * Panel heading tag
	 */
	headingTag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]).isRequired,
};

Panel.defaultProps = {
	look: 'hero',
	headingTag: 'h1',
};
