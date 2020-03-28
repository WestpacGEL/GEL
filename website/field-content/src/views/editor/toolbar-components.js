/** @jsx jsx */
import { jsx } from '@emotion/core';
import { colors, gridSize } from '@arch-ui/theme';
import { lighten, darken } from '@arch-ui/color-utils';
import Tooltip from '@arch-ui/tooltip';
import { A11yText } from '@arch-ui/typography';

export let ToolbarButton = ({
	isActive,
	label,
	icon,
	as: Tag = 'button',
	tooltipPlacement = 'top',
	...props
}) => {
	return (
		<Tooltip placement={tooltipPlacement} css={{ margin: gridSize * 2 }} content={label}>
			{ref => (
				<Tag
					data-state-active={isActive}
					{...(Tag === 'button' ? { type: 'button' } : null)}
					css={{
						alignItems: 'center',
						background: 0,
						border: 0,
						borderRadius: 3,
						color: colors.N60,
						cursor: 'pointer',
						display: 'flex',
						fontSize: 16, // fixes some weirdness with CSS reset on buttons
						justifyContent: 'center',
						marginRight: 2,
						outline: 0,

						':hover,:focus': {
							background: colors.N05,
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
