/** @jsx jsx */

import { jsx, useBrand, overrideReconciler } from '@westpac/core';
import { useSpring, animated, config } from 'react-spring';
import { Children, cloneElement, useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { Group as GroupWrapper, groupStyles } from './overrides/group';
import { GroupItems, groupItemsStyles } from './overrides/groupItems';
import { GroupButtonWrapper, groupButtonWrapperStyles } from './overrides/groupButtonWrapper';
import { GroupButton, groupButtonStyles } from './overrides/groupButton';
import { useProgressRopeContext } from './ProgressRope';
import { useMeasure } from './_utils';
import pkg from '../package.json';

export const Group = ({
	index,
	groupItemsId,
	text,
	current,
	instanceIdPrefix,
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
		GroupItems: {
			styles: groupItemsStyles,
			component: GroupItems,
			attributes: () => null,
		},
	};

	const state = {
		index,
		groupItemsId,
		text,
		current,
		complete,
		active,
		hidden,
		instanceIdPrefix,
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
			groupItemsId={groupItemsId}
			text={text}
			current={current}
			active={active}
			complete={complete}
			hidden={hidden}
			instanceIdPrefix={instanceIdPrefix}
			headingsTag={headingsTag}
			assistiveText={assistiveText}
			{...rest}
			{...overrides.Group.attributes(state)}
			css={overrides.Group.styles(state)}
		>
			<overrides.GroupButtonWrapper.component
				index={index}
				text={text}
				groupItemsId={groupItemsId}
				current={current}
				active={active}
				complete={complete}
				hidden={hidden}
				instanceIdPrefix={instanceIdPrefix}
				headingsTag={headingsTag}
				assistiveText={assistiveText}
				{...overrides.GroupButtonWrapper.attributes(state)}
				css={overrides.GroupButtonWrapper.styles(state)}
			>
				<overrides.GroupButton.component
					aria-expanded={openGroup === index}
					aria-controls={groupItemsId}
					index={index}
					text={text}
					onClick={() => handleClick(index)}
					groupItemsId={groupItemsId}
					current={current}
					active={active}
					complete={complete}
					hidden={hidden}
					instanceIdPrefix={instanceIdPrefix}
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
					<overrides.GroupItems.component
						aria-hidden={openGroup === null || index !== openGroup}
						id={groupItemsId}
						index={index}
						groupItemsId={groupItemsId}
						text={text}
						current={current}
						active={active}
						complete={complete}
						hidden={hidden}
						instanceIdPrefix={instanceIdPrefix}
						headingsTag={headingsTag}
						assistiveText={assistiveText}
						{...overrides.GroupItems.attributes(state)}
						css={overrides.GroupItems.styles(state)}
					>
						{Children.map(children, (child, idx) =>
							cloneElement(child, {
								index: idx,
								current,
								// groupActive: active,
								complete,
								hidden,
								groupIndex: index,
								groupItemsId,
								instanceIdPrefix,
								headingsTag,
								assistiveText,
							})
						)}
					</overrides.GroupItems.component>
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
	 * The index of this item
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
		GroupItems: PropTypes.shape({
			styles: PropTypes.func,
			component: PropTypes.elementType,
			attributes: PropTypes.func,
		}),
	}),
};
