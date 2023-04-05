import React from 'react';
import { propTypes, Icon } from './Icon';

export const TickIcon = ({
	assistiveText = 'Tick',
	copyrightYear = '2020',
	size = 'medium',
	...props
}) => (
	<Icon
		icon="TickIcon"
		assistiveText={assistiveText}
		copyrightYear={copyrightYear}
		size={size}
		{...props}
	>
		<polygon
			fill="currentColor"
			fillRule="evenodd"
			points="8.6 15.6 4.4 11.4 3 12.8 8.6 18.4 20.6 6.4 19.2 5"
		/>
	</Icon>
);

TickIcon.propTypes = propTypes;
