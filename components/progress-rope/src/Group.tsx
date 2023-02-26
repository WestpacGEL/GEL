import PropTypes from 'prop-types';
import { jsx, useBrand, overrideReconciler } from '@westpac/core';
import React, { Children, cloneElement, useState, useEffect, ReactNode } from 'react';
import ResizeObserver from 'resize-observer-polyfill';
import { useSpring, animated } from '@react-spring/web';
import useMeasure from 'react-use-measure';

import { defaultGroup } from './overrides/group';
import { defaultGroupBtnWrapper } from './overrides/groupButtonWrapper';
import { defaultGroupBtn } from './overrides/groupButton';
import { defaultGroupList } from './overrides/groupList';

import { useProgressRopeContext } from './ProgressRope';
import pkg from '../package.json';

export interface GroupProps {
	/**
	 * Children
	 */
	children?: ReactNode;
	/**
	 * The index of this step
	 */
	index: number;
	/**
	 * Group text
	 */
	text: string;
	/**
	 * The override API
	 */
	overrides?: {
		Group?: {
			styles?: (...args: unknown[]) => unknown;
			component?: React.ElementType;
			attributes?: (...args: unknown[]) => unknown;
		};
		GroupBtn?: {
			styles?: (...args: unknown[]) => unknown;
			component?: React.ElementType;
			attributes?: (...args: unknown[]) => unknown;
		};
		GroupList?: {
			styles?: (...args: unknown[]) => unknown;
			component?: React.ElementType;
			attributes?: (...args: unknown[]) => unknown;
		};
	};
}

// ==============================
// Component
// ==============================

export const Group = ({ index, text, children, overrides, ...rest }: GroupProps) => {
	const {
		OVERRIDES: { [pkg.name]: tokenOverrides },
		[pkg.name]: brandOverrides,
	} = useBrand();

	const context = useProgressRopeContext();
	const {
		openGroup,
		ropeGraph,
		handleClick,
		state: { id, headingsTag },
	} = context;

	const groupListId = `${id}-group-${index + 1}`;

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
		headingsTag,
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
		// eslint-disable-next-line react-hooks/exhaustive-deps
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

Group.propTypes = {
	// ----------------------------- Warning --------------------------------
	// | These PropTypes are generated from the TypeScript type definitions |
	// |     To update them edit TypeScript types and run "yarn prop-types"  |
	// ----------------------------------------------------------------------
	/**
	 * Children
	 */
	children: PropTypes.node,
	/**
	 * The index of this step
	 */
	index: PropTypes.number.isRequired,
	/**
	 * The override API
	 */
	overrides: PropTypes.shape({
		Group: PropTypes.shape({
			attributes: PropTypes.func,
			component: PropTypes.elementType,
			styles: PropTypes.func,
		}),
		GroupBtn: PropTypes.shape({
			attributes: PropTypes.func,
			component: PropTypes.elementType,
			styles: PropTypes.func,
		}),
		GroupList: PropTypes.shape({
			attributes: PropTypes.func,
			component: PropTypes.elementType,
			styles: PropTypes.func,
		}),
	}),
	/**
	 * Group text
	 */
	text: PropTypes.string.isRequired,
};
