/** @jsx jsx */

import { colors, gridSize } from '@arch-ui/theme';
import { A11yText } from '@arch-ui/typography';
import Tooltip from '@arch-ui/tooltip';
import { applyRefs } from 'apply-ref';
import { jsx } from '@emotion/react';
import { forwardRef } from 'react';

const ITEM_HEIGHT = gridSize * 3;
const ITEM_WIDTH = gridSize * 4;

export const ToolbarDivider = () => (
	<div
		css={{
			backgroundColor: colors.N10,
			height: ITEM_HEIGHT,
			marginLeft: gridSize,
			marginRight: gridSize,
			width: 1,
		}}
	/>
);

export const ToolbarButton = forwardRef(
	(
		{ isActive, isDisabled, label, icon, as: Tag = 'button', tooltipPlacement = 'top', ...props },
		consumerRef
	) => {
		return (
			<Tooltip
				placement={tooltipPlacement}
				css={{ margin: gridSize }}
				content={label}
				hideOnMouseDown
			>
				{(tooltipRef) => (
					<Tag
						data-state-active={isActive}
						{...(Tag === 'button' ? { type: 'button' } : null)}
						disabled={isDisabled}
						css={{
							alignItems: 'center',
							background: 0,
							border: 0,
							borderRadius: 3,
							boxSizing: 'border-box',
							color: colors.N70,
							cursor: 'pointer',
							display: 'flex',
							justifyContent: 'center',
							outline: 0,
							padding: `0 ${gridSize / 2}px`,

							// might not work in the future with alternative icons etc.
							height: ITEM_HEIGHT,
							minWidth: ITEM_WIDTH,

							// fix some weirdness with content-field "reset", by increasing specificity to avoid `!important`
							'button&': {
								fontSize: 16,
								marginRight: 2,
							},

							':hover,:focus': {
								background: colors.N10,
							},
							':active': {
								background: colors.N15,
							},

							':disabled': {
								background: 0,
								color: colors.N40,
								cursor: 'default',
							},

							'[data-state-active="true"]&': {
								background: colors.N70,
								color: 'white',
							},
						}}
						ref={applyRefs(consumerRef, tooltipRef)}
						{...props}
					>
						{icon}
						<A11yText>{label}</A11yText>
					</Tag>
				)}
			</Tooltip>
		);
	}
);
