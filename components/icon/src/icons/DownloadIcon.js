import React from 'react';
import { propTypes, defaultProps, Icon } from '../Icon';

export const DownloadIcon = (props) => (
	<Icon icon="DownloadIcon" {...props}>
		<path
			fill="currentColor"
			fillRule="evenodd"
			d="M12 2a7 7 0 016.919 8.071A6 6 0 0118 22H7A7 7 0 015.036 8.28 7.002 7.002 0 0112 2zm2 8h-4v4H7l5 5 5-5h-3v-4z"
		/>
	</Icon>
);

DownloadIcon.defaultProps = {
	...defaultProps,
	assistiveText: 'Download',
	copyrightYear: '2021',
};
DownloadIcon.propTypes = propTypes;
