/** @jsx jsx */

import { jsx } from '@westpac/core';
import PropTypes from 'prop-types';

import { blenderGroup } from '../overrides/group';
import { blenderGroupButtonWrapper } from '../overrides/groupButtonWrapper';
import { blenderGroupButton } from '../overrides/groupButton';
import { blenderGroupList } from '../overrides/groupList';

// ==============================
// Component
// ==============================

export const Group = ({ id, text, active, visited, children, ...rest }) => {
	const { component: Group, styles: groupStyles, attributes: groupAttributes } = blenderGroup;
	const {
		component: GroupButtonWrapper,
		styles: groupButtonWrapperStyles,
		attributes: groupButtonWrapperAttributes,
	} = blenderGroupButtonWrapper;
	const {
		component: GroupButton,
		styles: groupButtonStyles,
		attributes: groupButtonAttributes,
	} = blenderGroupButton;
	const {
		component: GroupList,
		styles: groupListStyles,
		attributes: groupListAttributes,
	} = blenderGroupList;

	const state = {
		id,
		text,
		active,
		visited,
	};

	return (
		<Group {...rest} state={state} {...groupAttributes(null, state)} css={groupStyles()}>
			<GroupButtonWrapper
				state={state}
				{...groupButtonWrapperAttributes(null, state)}
				css={groupButtonWrapperStyles(state)}
			>
				<GroupButton
					state={state}
					{...groupButtonAttributes(null, state)}
					css={groupButtonStyles(state)}
				>
					{text}
				</GroupButton>
			</GroupButtonWrapper>
			<GroupList state={state} {...groupListAttributes(null, state)} css={groupListStyles(state)}>
				{children}
			</GroupList>
		</Group>
	);
};

// ==============================
// Types
// ==============================

Group.propTypes = {
	/**
	 * Group id
	 */
	id: PropTypes.string,

	/**
	 * Group text
	 */
	text: PropTypes.string,

	/**
	 * Is an active group
	 */
	active: PropTypes.bool.isRequired,

	/**
	 * If group is visited
	 */
	visited: PropTypes.bool.isRequired,

	/**
	 * Panel body content
	 */
	children: PropTypes.node,
};

Group.defaultProps = {
	active: false,
	visited: false,
};
