import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

import { AccordionLabel, Panel } from './styled';

export const Tab = forwardRef(({ isSelected, mode, panelId, onClick, tabId, ...props }, ref) => {
	return (
		<>
			{mode === 'accordion' ? (
				<AccordionLabel onClick={onClick} id={tabId} isSelected={isSelected}>
					{props.label}
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
