import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import { ExpandLessIcon, ExpandMoreIcon } from '@westpac/icon';
import { styled } from '@westpac/core';

import { AccordionLabel, Panel } from './styled';

const IconWrapper = styled.div(({ theme }) => ({
	color: theme.colors.gray,
}));

export const Tab = forwardRef(({ isSelected, mode, panelId, onClick, tabId, ...props }, ref) => {
	const Icon = isSelected ? ExpandLessIcon : ExpandMoreIcon;
	const iconLabel = isSelected ? 'Show Less' : 'Show More';

	return (
		<>
			{mode === 'accordion' ? (
				<AccordionLabel
					onClick={onClick}
					id={tabId}
					isSelected={isSelected}
					aria-controls={panelId}
					aria-expanded={isSelected}
				>
					<span>{props.label}</span>
					<IconWrapper>
						<Icon label={iconLabel} size="small" />
					</IconWrapper>
				</AccordionLabel>
			) : null}
			<Panel
				hidden={!isSelected}
				aria-labelledby={tabId}
				id={panelId}
				aria-selected={isSelected}
				isSelected={isSelected}
				role="tabpanel"
				ref={ref}
				tabIndex="0"
			>
				{props.children}
			</Panel>
		</>
	);
});
