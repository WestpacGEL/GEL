import React from 'react';
import { propTypes, defaultProps, Icon } from './Icon';

export const PlayIcon = (props) => (
	<Icon icon="PlayIcon" {...props}>
		<polygon fill="currentColor" fillRule="evenodd" points="8 5 8 19 19 12" />
	</Icon>
);

PlayIcon.defaultProps = {
	...defaultProps,
	assistiveText: 'Play',
	copyrightYear: '2020',
};
PlayIcon.propTypes = propTypes;
