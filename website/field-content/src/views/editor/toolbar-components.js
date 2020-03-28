/** @jsx jsx */

import { jsx } from '@emotion/core';
import { colors, gridSize } from '@arch-ui/theme';
import Tooltip from '@arch-ui/tooltip';
import { A11yText } from '@arch-ui/typography';

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

export const ToolbarButton = ({
	isActive,
	isDisabled,
	label,
	icon,
	as: Tag = 'button',
	tooltipPlacement = 'top',
	...props
}) => {
	return (
		<Tooltip placement={tooltipPlacement} css={{ margin: gridSize }} content={label}>
			{ref => (
				<Tag
					data-state-active={isActive}
					{...(Tag === 'button' ? { type: 'button' } : null)}
					css={{
						alignItems: 'center',
						background: 0,
						border: 0,
						borderRadius: 3,
						color: isDisabled ? colors.N40 : colors.N80,
						cursor: 'pointer',
						display: 'flex',
						justifyContent: 'center',
						outline: 0,
						padding: 0,

						// might not work in the future with alternative icons etc.
						height: ITEM_HEIGHT,
						width: ITEM_WIDTH,

						// fix some weirdness with content-field "reset", by increasing specificity to avoid `!important`
						'button&': {
							fontSize: 16,
							marginRight: 2,
						},

						':hover,:focus': {
							background: colors.N10,
							color: colors.N80,
						},
						':active': {
							background: colors.B.L90,
							color: colors.B.base,
						},

						'[data-state-active="true"]&': {
							background: colors.N80,
							color: 'white',
						},
					}}
					ref={ref}
					{...props}
				>
					{icon}
					<A11yText>{label}</A11yText>
				</Tag>
			)}
		</Tooltip>
	);
};
