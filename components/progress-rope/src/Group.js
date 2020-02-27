/** @jsx jsx */

import { jsx, useBrand, overrideReconciler } from '@westpac/core';
import { useSpring, animated } from 'react-spring';
import { Children, cloneElement, useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { Group as GroupWrapper, groupStyles } from './overrides/group';
import { GroupItems, groupItemsStyles } from './overrides/groupItems';
import { GroupButton, groupButtonStyles } from './overrides/groupButton';
import { useProgressRopeContext } from './ProgressRope';
import { useMeasure } from './_utils';
import pkg from '../package.json';

export const Group = ({
	groupItemsId,
	index,
	text,
	instanceIdPrefix,
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
		to: {
			height: hidden ? 0 : height,
			overflow: hidden ? 'hidden' : 'visible',
			opacity: hidden ? 0 : 1,
		},
		immediate: initial,
	});

	const defaultOverrides = {
		Group: {
			styles: groupStyles,
			component: GroupWrapper,
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
		groupItemsId,
		index,
		text,
		complete,
		active,
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
			groupItemsId={groupItemsId}
			index={index}
			text={text}
			complete={complete}
			active={active}
			{...rest}
			{...overrides.Group.attributes(state)}
			css={overrides.Group.styles(state)}
		>
			<overrides.GroupButton.component
				onClick={handleGroupClick}
				aria-expanded={!hidden}
				aria-controls={groupItemsId}
				groupItemsId={groupItemsId}
				index={index}
				text={text}
				complete={complete}
				active={active}
				{...overrides.GroupButton.attributes(state)}
				css={overrides.GroupButton.styles(state)}
			>
				{text}
			</overrides.GroupButton.component>
			<animated.div style={animate}>
				<div ref={bind.ref}>
					<overrides.GroupItems.component
						aria-hidden={hidden}
						id={groupItemsId}
						groupItemsId={groupItemsId}
						index={index}
						text={text}
						complete={complete}
						active={active}
						{...overrides.GroupItems.attributes(state)}
						css={overrides.GroupItems.styles(state)}
					>
						{Children.map(children, (child, i) =>
							cloneElement(child, { index: i, groupIndex: index })
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
