import React from 'react';
import { propTypes, Icon } from './Icon';

export const ExpandMoreIcon = ({
	assistiveText = 'Expand More',
	copyrightYear = '2020',
	size = 'medium',
	...props
}) => (
	<Icon
		icon="ExpandMoreIcon"
		assistiveText={assistiveText}
		copyrightYear={copyrightYear}
		size={size}
		{...props}
	>
		<polygon
			fill="currentColor"
			fillRule="evenodd"
			points="12 13.588 5.412 7 4 8.412 12 16.412 20 8.412 18.588 7"
		/>
	</Icon>
);

ExpandMoreIcon.propTypes = propTypes;
