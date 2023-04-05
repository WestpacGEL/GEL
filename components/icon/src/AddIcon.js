import React from 'react';
import { propTypes, Icon } from './Icon';

export const AddIcon = ({
	assistiveText = 'Add',
	copyrightYear = '2020',
	size = 'medium',
	...props
}) => (
	<Icon
		icon="AddIcon"
		assistiveText={assistiveText}
		copyrightYear={copyrightYear}
		size={size}
		{...props}
	>
		<polygon
			fill="currentColor"
			fillRule="evenodd"
			points="11 11 4 11 4 13 11 13 11 20 13 20 13 13 20 13 20 11 13 11 13 4 11 4"
		/>
	</Icon>
);

AddIcon.propTypes = propTypes;
