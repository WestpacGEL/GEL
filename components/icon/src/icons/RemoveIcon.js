import React from 'react';
import { propTypes, defaultProps, Icon } from '../Icon';

export const RemoveIcon = ({ primaryColor, secondaryColor, ...props }) => (
	<Icon {...props}>
		<polygon fill={primaryColor} fillRule="evenodd" points="4 11 4 13 20 13 20 11" />
	</Icon>
);

RemoveIcon.defaultProps = {
	...defaultProps,
	label: 'Remove',
};
RemoveIcon.propTypes = propTypes;
