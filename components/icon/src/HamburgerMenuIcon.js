import React from 'react';
import { propTypes, Icon } from './Icon';

export const HamburgerMenuIcon = ({
	assistiveText = 'Hamburger Menu',
	copyrightYear = '2020',
	size = 'medium',
	...props
}) => (
	<Icon
		icon="HamburgerMenuIcon"
		assistiveText={assistiveText}
		copyrightYear={copyrightYear}
		size={size}
		{...props}
	>
		<path
			fill="currentColor"
			fillRule="evenodd"
			d="M2,7 L22,7 L22,5 L2,5 L2,7 Z M2,19 L2,17 L22,17 L22,19 L2,19 Z M2,13 L2,11 L22,11 L22,13 L2,13 Z"
		/>
	</Icon>
);

HamburgerMenuIcon.propTypes = propTypes;
