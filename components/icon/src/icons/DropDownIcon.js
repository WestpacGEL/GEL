import React from 'react';
import { propTypes, defaultProps, Icon } from '../Icon';

export const DropDownIcon = ({ primaryColor, secondaryColor, ...props }) => (
	<Icon {...props}>
		<polygon fill={primaryColor} fillRule="evenodd" points="5 8 12 16 19 8" />
	</Icon>
);

DropDownIcon.defaultProps = {
	...defaultProps,
	label: 'Drop Down',
};
DropDownIcon.propTypes = propTypes;
