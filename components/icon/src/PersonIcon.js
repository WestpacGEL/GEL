import React from 'react';
import { propTypes, Icon } from './Icon';

export const PersonIcon = ({
	assistiveText = 'Person',
	copyrightYear = '2020',
	size = 'medium',
	...props
}) => (
	<Icon
		icon="PersonIcon"
		assistiveText={assistiveText}
		copyrightYear={copyrightYear}
		size={size}
		{...props}
	>
		<path
			fill="currentColor"
			fillRule="evenodd"
			d="M0,21.3333333 L0,24 L24,24 L24,21.3333333 C24,17.7866667 16.005,16 12,16 C7.995,16 0,17.7866667 0,21.3333333 Z M12,12 C15.315,12 18,9.315 18,6 C18,2.685 15.315,0 12,0 C8.685,0 6,2.685 6,6 C6,9.315 8.685,12 12,12"
		/>
	</Icon>
);

PersonIcon.propTypes = propTypes;
