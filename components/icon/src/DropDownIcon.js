import React from 'react';
import { propTypes, Icon } from './Icon';

export const DropDownIcon = ({
	assistiveText = 'Drop Down',
	copyrightYear = '2020',
	size = 'medium',
	...props
}) => (
	<Icon
		icon="DropDownIcon"
		assistiveText={assistiveText}
		copyrightYear={copyrightYear}
		size={size}
		{...props}
	>
		<polygon fill="currentColor" fillRule="evenodd" points="5 8 12 16 19 8" />
	</Icon>
);

DropDownIcon.propTypes = propTypes;
