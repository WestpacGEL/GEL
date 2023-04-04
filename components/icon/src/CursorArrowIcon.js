import React from 'react';
import { propTypes, Icon } from './Icon';

export const CursorArrowIcon = ({
	assistiveText = 'Cursor arrow',
	copyrightYear = '2021',
	size = 'medium',
	...props
}) => (
	<Icon
		icon="CursorArrowIcon"
		assistiveText={assistiveText}
		copyrightYear={copyrightYear}
		size={size}
		{...props}
	>
		<path
			fill="currentColor"
			fillRule="evenodd"
			d="m6 1 12.67 11.823-5.701.169 3.801 8.741L13.856 23l-3.801-8.741L6 18.313z"
		/>
	</Icon>
);

CursorArrowIcon.propTypes = propTypes;
