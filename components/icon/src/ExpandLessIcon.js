import React from 'react';
import { propTypes, Icon } from './Icon';

export const ExpandLessIcon = ({
	assistiveText = 'Expand Less',
	copyrightYear = '2020',
	size = 'medium',
	...props
}) => (
	<Icon
		icon="ExpandLessIcon"
		assistiveText={assistiveText}
		copyrightYear={copyrightYear}
		size={size}
		{...props}
	>
		<polygon
			fill="currentColor"
			fillRule="evenodd"
			points="12 9.824 18.588 16.412 20 15 12 7 4 15 5.412 16.412"
		/>
	</Icon>
);

ExpandLessIcon.propTypes = propTypes;
