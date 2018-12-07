import PropTypes from 'prop-types';
import React from 'react';

import { AccordionLabel, Pane } from './styled';

export const Tab = forwardRef(({ index, isSelected, mode, prefix, onClick, ...props }, ref) => {
	return (
		<div ref={ref}>
			{mode === 'accordion' ? (
				<AccordionLabel onClick={onClick} id={`tab-${prefix}-${index}`} isSelected={isSelected}>
					{props.label}
				</AccordionLabel>
			) : null}
			<Pane hidden={!isSelected} aria-labelledby={`tab-${prefix}-${index}`} isSelected={isSelected}>
				{props.children}
			</Pane>
		</div>
	);
});
