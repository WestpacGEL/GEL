import React from 'react';
import { propTypes, defaultProps, Icon } from '../Icon';

export const GeolocationIcon = ({ primaryColor, secondaryColor, ...props }) => (
	<Icon {...props}>
		<polygon fill={primaryColor} fillRule="evenodd" points="0 12 11.143 12.857 12 24 24 0" />
	</Icon>
);

GeolocationIcon.defaultProps = {
	...defaultProps,
	label: 'Geolocation',
};
GeolocationIcon.propTypes = propTypes;
