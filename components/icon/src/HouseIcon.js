import React from 'react';
import { propTypes, Icon } from './Icon';

export const HouseIcon = ({
	assistiveText = 'House',
	copyrightYear = '2020',
	size = 'medium',
	...props
}) => (
	<Icon
		icon="HouseIcon"
		assistiveText={assistiveText}
		copyrightYear={copyrightYear}
		size={size}
		{...props}
	>
		<polygon
			fill="currentColor"
			fillRule="evenodd"
			points="12 0 0 12 4 12 4 24 10 24 10 17 14 17 14 24 20 24 20 12 24 12"
		/>
	</Icon>
);

HouseIcon.propTypes = propTypes;
