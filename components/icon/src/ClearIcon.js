import React from 'react';
import { propTypes, Icon } from './Icon';

export const ClearIcon = ({
	assistiveText = 'Clear',
	copyrightYear = '2020',
	size = 'medium',
	...props
}) => (
	<Icon
		icon="ClearIcon"
		assistiveText={assistiveText}
		copyrightYear={copyrightYear}
		size={size}
		{...props}
	>
		<path
			fill="currentColor"
			fillRule="evenodd"
			d="M12 0c6.628 0 12 5.373 12 12s-5.372 12-12 12S0 18.627 0 12 5.372 0 12 0zm4.95 5.636L12 10.586l-4.95-4.95L5.636 7.05l4.95 4.95-4.95 4.95 1.414 1.414 4.95-4.95 4.95 4.95 1.414-1.414-4.95-4.95 4.95-4.95-1.414-1.414z"
		/>
	</Icon>
);

ClearIcon.propTypes = propTypes;
