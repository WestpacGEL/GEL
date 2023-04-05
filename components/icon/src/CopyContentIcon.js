import React from 'react';
import { propTypes, Icon } from './Icon';

export const CopyContentIcon = ({
	assistiveText = 'Copy',
	copyrightYear = '2020',
	size = 'medium',
	...props
}) => (
	<Icon
		icon="CopyContentIcon"
		assistiveText={assistiveText}
		copyrightYear={copyrightYear}
		size={size}
		{...props}
	>
		<path
			fill="currentColor"
			fillRule="evenodd"
			d="M16 0H4C2.9 0 2 .9 2 2v16h2V2h12V0zm3.867 4H8.133C6.96 4 6 5 6 6.222v15.556C6 23 6.96 24 8.133 24h11.734C21.04 24 22 23 22 21.778V6.222C22 5 21.04 4 19.867 4zM20 22H8V6h12v16z"
		/>
	</Icon>
);

CopyContentIcon.propTypes = propTypes;
