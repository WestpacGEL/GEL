import React from 'react';
import { propTypes, defaultProps, Icon } from '../Icon';

export const DragIcon = ({ primaryColor, secondaryColor, ...props }) => (
	<Icon {...props}>
		<path
			fill={primaryColor}
			fillRule="evenodd"
			d="M20,9 L4,9 L4,11 L20,11 L20,9 Z M4,15 L20,15 L20,13 L4,13 L4,15 Z"
		/>
	</Icon>
);

DragIcon.defaultProps = {
	...defaultProps,
	label: 'Drag',
};
DragIcon.propTypes = propTypes;
