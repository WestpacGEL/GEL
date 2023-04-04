import React from 'react';
import { propTypes, Icon } from './Icon';

export const DragIcon = ({
	assistiveText = 'Drag',
	copyrightYear = '2020',
	size = 'medium',
	...props
}) => (
	<Icon
		icon="DragIcon"
		assistiveText={assistiveText}
		copyrightYear={copyrightYear}
		size={size}
		{...props}
	>
		<path
			fill="currentColor"
			fillRule="evenodd"
			d="M20,9 L4,9 L4,11 L20,11 L20,9 Z M4,15 L20,15 L20,13 L4,13 L4,15 Z"
		/>
	</Icon>
);

DragIcon.propTypes = propTypes;
