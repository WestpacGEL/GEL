import React from 'react';
import { propTypes, Icon } from './Icon';

export const ShopIcon = ({
	assistiveText = 'Shop',
	copyrightYear = '2020',
	size = 'medium',
	...props
}) => (
	<Icon
		icon="ShopIcon"
		assistiveText={assistiveText}
		copyrightYear={copyrightYear}
		size={size}
		{...props}
	>
		<path
			fill="currentColor"
			fillRule="evenodd"
			d="M4,2 L20,2 L20,0 L4,0 L4,2 Z M4,4 L0,11.00075 L0,14.00075 L2,14.00075 L2,24 L14,24 L14,14.00075 L20,14.00075 L20,24 L22,24 L22,14.00075 L24,14.00075 L24,11.00075 L20,4 L4,4 Z M4,20 L12,20 L12,14 L4,14 L4,20 Z"
		/>
	</Icon>
);

ShopIcon.propTypes = propTypes;
