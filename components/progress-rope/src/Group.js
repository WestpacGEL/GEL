/** @jsx jsx */

import { jsx, useBrand, overrideReconciler } from '@westpac/core';
import { useSpring, animated } from 'react-spring';
import { Children, cloneElement, useState, useEffect } from 'react';
import PropTypes from 'prop-types';

// import { Group as GroupWrapper, groupStyles } from './overrides/group';
// import { GroupItems, groupItemsStyles } from './overrides/groupItems';
// import { GroupButton, groupButtonStyles } from './overrides/groupButton';

import { defaultGroupRoot } from './overrides/group';
import { defaultGroupButton } from './overrides/groupButton';
import { defaultGroupItems } from './overrides/groupItems';
import { useProgressRopeContext } from './ProgressRope';
import { useMeasure } from './_utils';
import pkg from '../package.json';

export const Group = ({ index, text, children, overrides: componentOverrides, ...rest }) => {
	const { openGroup, ropeGraph, handleClick, instancePrefix } = useProgressRopeContext();
	const active = ropeGraph[index].includes('visited');
	const complete = ropeGraph[index + 1][0] === 'visited';
	const groupItemsId = `${instancePrefix}-group-${index + 1}`;
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
		GroupRoot: defaultGroupRoot,
		GroupButton: defaultGroupButton,
		GroupItems: defaultGroupItems,
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

	const {
		GroupRoot: { component: GroupRoot, styles: groupRootStyles, attributes: groupRootAttributes },
		GroupButton: {
			component: GroupButton,
			styles: groupButtonStyles,
			attributes: groupButtonAttributes,
		},
		GroupItems: {
			component: GroupItems,
			styles: groupItemsStyles,
			attributes: groupItemsAttributes,
		},
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
		<GroupRoot state={state} {...rest} {...groupRootAttributes(state)} css={groupRootStyles(state)}>
			<GroupButton
				onClick={handleGroupClick}
				aria-expanded={!hidden}
				aria-controls={groupItemsId}
				state={state}
				{...groupButtonAttributes(state)}
				css={groupButtonStyles(state)}
			>
				{text}
			</GroupButton>
			<animated.div style={animate}>
				<div ref={bind.ref}>
					<GroupItems
						aria-hidden={hidden}
						id={groupItemsId}
						state={state}
						{...groupItemsAttributes(state)}
						css={groupItemsStyles(state)}
					>
						{Children.map(children, (child, i) =>
							cloneElement(child, { index: i, groupIndex: index })
						)}
					</GroupItems>
				</div>
			</animated.div>
		</GroupRoot>
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
