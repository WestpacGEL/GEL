import React from 'react';
import { propTypes, Icon } from './Icon';

export const DownloadFileIcon = ({
	assistiveText = 'Download File',
	copyrightYear = '2020',
	size = 'medium',
	...props
}) => (
	<Icon
		icon="DownloadFileIcon"
		assistiveText={assistiveText}
		copyrightYear={copyrightYear}
		size={size}
		{...props}
	>
		<path
			fill="currentColor"
			fillRule="evenodd"
			d="M4,0 L16,0 L22,6 L22,22 C22,23.1045695 21.1045695,24 20,24 L4,24 C2.8954305,24 2,23.1045695 2,22 L2,2 L2,2 C2,0.8954305 2.8954305,2.02906125e-16 4,0 L4,0 Z M4,2 L4,22 L20,22 L20,6 L16,6 L16,2 L4,2 Z M10,10 L10,14 L7,14 L12,20 L17,14 L14,14 L14,10 L10,10 Z"
		/>
	</Icon>
);

DownloadFileIcon.propTypes = propTypes;
