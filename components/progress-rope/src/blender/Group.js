/** @jsx jsx */

import { jsx } from '@westpac/core';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import { blenderGroup } from '../overrides/group';
import { blenderGroupButtonWrapper } from '../overrides/groupButtonWrapper';
import { blenderGroupButton } from '../overrides/groupButton';
import { blenderGroupList } from '../overrides/groupList';

// ==============================
// Component
// ==============================
// visited or complete, need to look into this naming...
export const Group = ({ text, active, visited, children, ...rest }) => {
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
		text,
		active,
		visited,
	};

	//should really look into classnames package
	const groupClass = classNames({
		'GEL-group-active': active,
		'GEL-group-visited': visited,
	});

	return (
		<Group
			{...rest}
			state={state}
			{...groupAttributes(null, state)}
			css={groupStyles()}
			className={groupClass}
		>
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
	 * Panel body content
	 */
	children: PropTypes.node,
};

Group.defaultProps = {};
