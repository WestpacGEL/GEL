/** @jsx jsx */

import { jsx, useBrand, overrideReconciler } from '@westpac/core';
import { useSpring, animated, config } from 'react-spring';
import { Children, cloneElement, useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { Group as GroupWrapper, groupStyles } from './overrides/group';
import { GroupList, groupListStyles } from './overrides/groupList';
import { GroupButtonWrapper, groupButtonWrapperStyles } from './overrides/groupButtonWrapper';
import { GroupButton, groupButtonStyles } from './overrides/groupButton';
import { useProgressRopeContext } from './ProgressRope';
import { useMeasure } from './_utils';
import pkg from '../package.json';

export const Group = ({
	index,
	text,
	current,
	instanceId,
	headingsTag,
	assistiveText,
	children,
	overrides: componentOverrides,
	...rest
}) => {
	const { openGroup, ropeGraph, handleClick } = useProgressRopeContext();
	const active = ropeGraph[index].includes('visited');
	const complete = ropeGraph[index + 1][0] === 'visited';

	const {
		OVERRIDES: { [pkg.name]: tokenOverrides },
		[pkg.name]: brandOverrides,
	} = useBrand();

	const [hidden, setHidden] = useState(true);
	const [bind, { height }] = useMeasure();
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
		Group: {
			styles: groupStyles,
			component: GroupWrapper,
			attributes: () => null,
		},
		GroupButtonWrapper: {
			styles: groupButtonWrapperStyles,
			component: GroupButtonWrapper,
			attributes: () => null,
		},
		GroupButton: {
			styles: groupButtonStyles,
			component: GroupButton,
			attributes: () => null,
		},
		GroupList: {
			styles: groupListStyles,
			component: GroupList,
			attributes: () => null,
		},
	};

	const getGroupListId = index => `${instanceId}-group-${index + 1}`;

	const state = {
		index,
		groupListId: getGroupListId(index),
		text,
		current,
		complete,
		active,
		hidden,
		instanceId,
		headingsTag,
		assistiveText,
		overrides: componentOverrides,
		...rest,
	};

	const overrides = overrideReconciler(
		defaultOverrides,
		tokenOverrides,
		brandOverrides,
		componentOverrides
	);

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
		<overrides.Group.component
			index={index}
			instanceId={instanceId}
			groupListId={getGroupListId(index)}
			text={text}
			current={current}
			active={active}
			complete={complete}
			hidden={hidden}
			headingsTag={headingsTag}
			assistiveText={assistiveText}
			{...rest}
			{...overrides.Group.attributes(state)}
			css={overrides.Group.styles(state)}
		>
			<overrides.GroupButtonWrapper.component
				index={index}
				groupListId={getGroupListId(index)}
				text={text}
				current={current}
				active={active}
				complete={complete}
				hidden={hidden}
				instanceId={instanceId}
				headingsTag={headingsTag}
				assistiveText={assistiveText}
				{...overrides.GroupButtonWrapper.attributes(state)}
				css={overrides.GroupButtonWrapper.styles(state)}
			>
				<overrides.GroupButton.component
					aria-expanded={openGroup === index}
					aria-controls={getGroupListId(index)}
					index={index}
					text={text}
					onClick={() => handleClick(index)}
					groupListId={getGroupListId(index)}
					current={current}
					active={active}
					complete={complete}
					hidden={hidden}
					instanceId={instanceId}
					headingsTag={headingsTag}
					assistiveText={assistiveText}
					{...overrides.GroupButton.attributes(state)}
					css={overrides.GroupButton.styles(state)}
				>
					{text}
				</overrides.GroupButton.component>
			</overrides.GroupButtonWrapper.component>
			<animated.div style={{ ...animate }}>
				<div ref={bind.ref}>
					<overrides.GroupList.component
						aria-hidden={openGroup === null || index !== openGroup}
						id={getGroupListId(index)}
						index={index}
						text={text}
						current={current}
						active={active}
						complete={complete}
						hidden={hidden}
						instanceId={instanceId}
						headingsTag={headingsTag}
						assistiveText={assistiveText}
						{...overrides.GroupList.attributes(state)}
						css={overrides.GroupList.styles(state)}
					>
						{Children.map(children, (child, idx) =>
							cloneElement(child, {
								index: idx,
								current,
								// groupActive: active,
								complete,
								hidden,
								groupIndex: index,
								instanceId,
								groupListId: getGroupListId(index),
								headingsTag,
								assistiveText,
							})
						)}
					</overrides.GroupList.component>
				</div>
			</animated.div>
		</overrides.Group.component>
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
		GroupButton: PropTypes.shape({
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
