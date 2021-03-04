/** @jsx jsx */

import { jsx } from '@westpac/core';
import PropTypes from 'prop-types';

import { useProgressRopeContext } from '../ProgressRope';
import { blenderGroup } from '../overrides/group';
import { blenderGroupBtnWrapper } from '../overrides/groupButtonWrapper';
import { blenderGroupBtn } from '../overrides/groupButton';
import { blenderGroupList } from '../overrides/groupList';

// ==============================
// Component
// ==============================

export const Group = ({ index, id, text, active, visited, open, children, ...rest }) => {
	const { component: Group, styles: groupStyles, attributes: groupAttributes } = blenderGroup;
	const {
		component: GroupBtnWrapper,
		styles: groupButtonWrapperStyles,
		attributes: groupButtonWrapperAttributes,
	} = blenderGroupBtnWrapper;
	const {
		component: GroupBtn,
		styles: groupButtonStyles,
		attributes: groupButtonAttributes,
	} = blenderGroupBtn;
	const {
		component: GroupList,
		styles: groupListStyles,
		attributes: groupListAttributes,
	} = blenderGroupList;

	const context = useProgressRopeContext();
	const { instancePrefix } = context;

	const groupListId = `${instancePrefix}-group-${index + 1}`;

	const state = {
		id,
		text,
		active,
		visited,
		open,
		groupListId,
	};

	return (
		<Group {...rest} state={state} {...groupAttributes(null, state)} css={groupStyles(null, state)}>
			<GroupBtnWrapper
				state={state}
				{...groupButtonWrapperAttributes(null, state)}
				css={groupButtonWrapperStyles(state)}
			>
				<GroupBtn
					state={state}
					{...groupButtonAttributes(null, state)}
					css={groupButtonStyles(state)}
				>
					{text}
				</GroupBtn>
			</GroupBtnWrapper>
			<GroupList
				state={state}
				{...groupListAttributes(null, state)}
				css={groupListStyles(null, state)}
			>
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
	 * If group is open
	 */
	open: PropTypes.bool.isRequired,

	/**
	 * Panel body content
	 */
	children: PropTypes.node,
};

export const defaultProps = {
	active: false,
	visited: false,
	open: false,
};

Group.defaultProps = defaultProps;
