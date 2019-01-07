import React from 'react';
import { propTypes, defaultProps, Icon } from '../Icon';

export const DropUpIcon = ({ primaryColor, secondaryColor, ...props }) => (
	<Icon {...props}>
		<polygon
			fill={primaryColor}
			fillRule="evenodd"
			points="5 8 12 16 19 8"
			transform="rotate(-180 12 12)"
		/>
	</Icon>
);

DropUpIcon.defaultProps = {
	...defaultProps,
	label: 'Drop Up',
};
DropUpIcon.propTypes = propTypes;
