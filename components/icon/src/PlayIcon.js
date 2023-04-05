import React from 'react';
import { propTypes, Icon } from './Icon';

export const PlayIcon = ({
	assistiveText = 'Play',
	copyrightYear = '2020',
	size = 'medium',
	...props
}) => (
	<Icon
		icon="PlayIcon"
		assistiveText={assistiveText}
		copyrightYear={copyrightYear}
		size={size}
		{...props}
	>
		<polygon fill="currentColor" fillRule="evenodd" points="8 5 8 19 19 12" />
	</Icon>
);

PlayIcon.propTypes = propTypes;
