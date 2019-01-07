import React from 'react';
import { propTypes, defaultProps, Icon } from '../Icon';

export const PlayIcon = ({ primaryColor, secondaryColor, ...props }) => (
	<Icon {...props}>
		<polygon fill={primaryColor} fillRule="evenodd" points="8 5 8 19 19 12" />
	</Icon>
);

PlayIcon.defaultProps = {
	...defaultProps,
	label: 'Play',
};
PlayIcon.propTypes = propTypes;
