/** @jsx jsx */

import { jsx, useBrand, useInstanceId } from '@westpac/core';
import { AddIcon, RemoveIcon } from '@westpac/icon';
import { useState, useEffect } from 'react';
import ResizeObserver from 'resize-observer-polyfill';
import { useSpring, animated } from 'react-spring';
import useMeasure from 'react-use-measure';
import { NavigationItem, StyledItem } from './navigation-item';

export const NavigationGroup = ({ title, isBlockOpen, level, children }) => {
	const { COLORS, PACKS } = useBrand();
	const [open, setOpen] = useState(isBlockOpen);
	const [closed, setClosed] = useState(true);
	const [measureRef, { height }] = useMeasure({ polyfill: ResizeObserver });
	const [initial, setInitial] = useState(true);
	const [instanceId, setInstanceId] = useState();

	const handleButtonClick = () => {
		if (initial) {
			setInitial(false);
		}
		setOpen((currentState) => !currentState);
	};

	useEffect(() => {
		setInstanceId(`nav-group-${useInstanceId()}`);
	}, []);

	const animate = useSpring({
		to: {
			height: !open ? 0 : height,
			overflow: 'hidden',
		},
		immediate: initial,
		onStart: () => {
			setClosed(open);
		},
		onRest: () => {
			setClosed(!open);
		},
	});

	return (
		<NavigationItem>
			<StyledItem
				tag="button"
				level={level}
				onClick={handleButtonClick}
				aria-expanded={open}
				aria-controls={instanceId}
				css={{
					display: 'flex',
					width: '100%',
					justifyContent: 'space-between',
					cursor: 'pointer',
					border: 0,
					background: 'transparent',
					':focus': {
						outlineOffset: `-${PACKS.focus.outlineWidth}`,
					},
				}}
			>
				<span>{title}</span>
				{open ? (
					<RemoveIcon size="small" color={COLORS.muted} aria-hidden="true" />
				) : (
					<AddIcon size="small" color={COLORS.muted} aria-hidden="true" />
				)}
			</StyledItem>
			<animated.div
				style={animate}
				id={instanceId}
				aria-hidden={!open}
				css={{ display: open ? 'block' : closed ? 'none' : 'block' }}
			>
				<div ref={measureRef}>{children}</div>
			</animated.div>
		</NavigationItem>
	);
};
