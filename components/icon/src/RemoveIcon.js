import React from 'react';
import { propTypes, Icon } from './Icon';

export const RemoveIcon = ({
	assistiveText = 'Remove',
	copyrightYear = '2020',
	size = 'medium',
	...props
}) => (
	<Icon
		icon="RemoveIcon"
		assistiveText={assistiveText}
		copyrightYear={copyrightYear}
		size={size}
		{...props}
	>
		<polygon fill="currentColor" fillRule="evenodd" points="4 11 4 13 20 13 20 11" />
	</Icon>
);

RemoveIcon.propTypes = propTypes;
