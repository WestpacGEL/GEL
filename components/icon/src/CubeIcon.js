import React from 'react';
import { propTypes, Icon } from './Icon';

export const CubeIcon = ({
	assistiveText = 'Cube',
	copyrightYear = '2020',
	size = 'medium',
	...props
}) => (
	<Icon
		icon="CubeIcon"
		assistiveText={assistiveText}
		copyrightYear={copyrightYear}
		size={size}
		{...props}
	>
		<path
			fill="currentColor"
			fillRule="evenodd"
			d="M12,13 L24,7 L24,18 L12,24 L0,18 L0,7 L12,13 Z M12,0 L24,5 L12,11 L0,5 L12,0 Z"
		/>
	</Icon>
);

CubeIcon.propTypes = propTypes;
