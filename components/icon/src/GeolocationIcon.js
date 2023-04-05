import React from 'react';
import { propTypes, Icon } from './Icon';

export const GeolocationIcon = ({
	assistiveText = 'Geolocation',
	copyrightYear = '2020',
	size = 'medium',
	...props
}) => (
	<Icon
		icon="GeolocationIcon"
		assistiveText={assistiveText}
		copyrightYear={copyrightYear}
		size={size}
		{...props}
	>
		<polygon fill="currentColor" fillRule="evenodd" points="0 12 11.143 12.857 12 24 24 0" />
	</Icon>
);

GeolocationIcon.propTypes = propTypes;
