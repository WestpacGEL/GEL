/** @jsx jsx */

import { jsx, useBrand, overrideReconciler } from '@westpac/core';
import { Children, cloneElement, useState, useEffect } from 'react';
import ResizeObserver from 'resize-observer-polyfill';
import { useSpring, animated } from 'react-spring';
import useMeasure from 'react-use-measure';
import PropTypes from 'prop-types';

import { defaultGroup } from './overrides/group';
import { defaultGroupBtnWrapper } from './overrides/groupButtonWrapper';
import { defaultGroupBtn } from './overrides/groupButton';
import { defaultGroupList } from './overrides/groupList';

import { useProgressRopeContext } from './ProgressRope';
import pkg from '../package.json';

// ==============================
// Component
// ==============================

export const Group = ({ index, text, children, overrides, ...rest }) => {
	const {
		OVERRIDES: { [pkg.name]: tokenOverrides },
		[pkg.name]: brandOverrides,
	} = useBrand();

	const context = useProgressRopeContext();
	const { openGroup, ropeGraph, handleClick, instancePrefix } = context;

	const groupListId = `${instancePrefix}-group-${index + 1}`;

	const active = ropeGraph[index].includes('visited');
	const complete = ropeGraph[index + 1][0] === 'visited';

	const [hidden, setHidden] = useState(true);
	const [measureRef, { height }] = useMeasure({ polyfill: ResizeObserver });
	const [initial, setInitial] = useState(true);

	const animate = useSpring({
		config: { duration: 300 },
		to: async (next, cancel) => {
			await next({
				overflow: 'hidden',
				height: hidden ? 0 : height,
			});
			await next({
				overflow: hidden ? 'hidden' : 'visible',
			});
		},
		immediate: initial,
	});

	const defaultOverrides = {
		Group: defaultGroup,
		GroupBtnWrapper: defaultGroupBtnWrapper,
		GroupBtn: defaultGroupBtn,
		GroupList: defaultGroupList,
	};

	const componentOverrides = overrides || context.state.overrides;

	const state = {
		index,
		text,
		groupListId,
		active,
		complete,
		hidden,
		context: context.state,
		overrides: componentOverrides,
		...rest,
	};

	const {
		Group: { component: Group, styles: groupStyles, attributes: groupAttributes },
		GroupBtnWrapper: {
			component: GroupBtnWrapper,
			styles: groupButtonWrapperStyles,
			attributes: groupButtonWrapperAttributes,
		},
		GroupBtn: { component: GroupBtn, styles: groupButtonStyles, attributes: groupButtonAttributes },
		GroupList: { component: GroupList, styles: groupListStyles, attributes: groupListAttributes },
	} = overrideReconciler(defaultOverrides, tokenOverrides, brandOverrides, componentOverrides);

	useEffect(() => {
		if (openGroup === null || index !== openGroup) {
			if (initial) {
				setInitial(false);
			}
			setHidden(true);
		} else {
			setHidden(false);
		}
	}, [openGroup]);

	const handleGroupClick = () => {
		if (initial) {
			setInitial(false);
		}

		handleClick(index);
	};

	return (
		<Group {...rest} state={state} {...groupAttributes(state)} css={groupStyles(state)}>
			<GroupBtnWrapper
				state={state}
				{...groupButtonWrapperAttributes(state)}
				css={groupButtonWrapperStyles(state)}
			>
				<GroupBtn
					onClick={handleGroupClick}
					state={state}
					{...groupButtonAttributes(state)}
					css={groupButtonStyles(state)}
				>
					{text}
				</GroupBtn>
			</GroupBtnWrapper>
			<animated.div style={animate}>
				<div ref={measureRef}>
					<GroupList state={state} {...groupListAttributes(state)} css={groupListStyles(state)}>
						{Children.map(children, (child, idx) =>
							cloneElement(child, { index: idx, groupIndex: index })
						)}
					</GroupList>
				</div>
			</animated.div>
		</Group>
	);
};

// ==============================
// Types
// ==============================

Group.propTypes = {
	/**
	 * The index of this step
	 */
	index: PropTypes.number,

	/**
	 * Group text
	 */
	text: PropTypes.string.isRequired,

	/**
	 * The override API
	 */
	overrides: PropTypes.shape({
		Group: PropTypes.shape({
			styles: PropTypes.func,
			component: PropTypes.elementType,
			attributes: PropTypes.func,
		}),
		GroupBtn: PropTypes.shape({
			styles: PropTypes.func,
			component: PropTypes.elementType,
			attributes: PropTypes.func,
		}),
		GroupList: PropTypes.shape({
			styles: PropTypes.func,
			component: PropTypes.elementType,
			attributes: PropTypes.func,
		}),
	}),
};
