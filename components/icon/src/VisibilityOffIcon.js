import React from 'react';
import { propTypes, Icon } from './Icon';

export const VisibilityOffIcon = ({
	assistiveText = 'Visibility off',
	copyrightYear = '2021',
	size = 'medium',
	...props
}) => (
	<Icon
		icon="VisibilityOffIcon"
		assistiveText={assistiveText}
		copyrightYear={copyrightYear}
		size={size}
		{...props}
	>
		<path
			fill="currentColor"
			fillRule="evenodd"
			d="M2.21 1.936L18.534 18.26l3.475 3.475-1.414 1.414-3.982-3.982A13.097 13.097 0 0112 20c-5.455 0-10.113-3.317-12-8a12.708 12.708 0 014.097-5.35l-3.3-3.3L2.21 1.936zM12 4c5.455 0 10.113 3.317 12 8a12.693 12.693 0 01-3.79 5.108l-3.481-3.48a5.002 5.002 0 00-6.356-6.356L7.79 4.688A13.115 13.115 0 0112 4zM7.425 9.98a5.002 5.002 0 006.595 6.595l-1.604-1.603a2.996 2.996 0 01-3.387-3.388zm4.68-.978A2.996 2.996 0 0115 12l-.004-.106z"
		/>
	</Icon>
);

VisibilityOffIcon.propTypes = propTypes;
