import React from 'react';
import { propTypes, Icon } from './Icon';

export const DropUpIcon = ({
	assistiveText = 'Drop Up',
	copyrightYear = '2020',
	size = 'medium',
	...props
}) => (
	<Icon
		icon="DropUpIcon"
		assistiveText={assistiveText}
		copyrightYear={copyrightYear}
		size={size}
		{...props}
	>
		<polygon
			fill="currentColor"
			fillRule="evenodd"
			points="5 8 12 16 19 8"
			transform="rotate(-180 12 12)"
		/>
	</Icon>
);

DropUpIcon.propTypes = propTypes;
