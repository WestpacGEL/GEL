import React from 'react';
import { propTypes, Icon } from './Icon';

export const ArrowLeftIcon = ({
	assistiveText = 'Arrow Left',
	copyrightYear = '2020',
	size = 'medium',
	...props
}) => (
	<Icon
		icon="ArrowLeftIcon"
		assistiveText={assistiveText}
		copyrightYear={copyrightYear}
		size={size}
		{...props}
	>
		<polygon
			fill="currentColor"
			fillRule="evenodd"
			points="9.824 12 16.412 18.588 15 20 7 12 15 4 16.412 5.412"
		/>
	</Icon>
);

ArrowLeftIcon.propTypes = propTypes;
