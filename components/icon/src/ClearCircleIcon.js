import React from 'react';
import { propTypes, defaultProps, Icon } from './Icon';

export const ClearCircleIcon = (props) => (
	<Icon icon="ClearCircleIcon" {...props}>
		<path
			fill="currentColor"
			fillRule="evenodd"
			d="M12 0c6.628 0 12 5.373 12 12s-5.372 12-12 12S0 18.627 0 12 5.372 0 12 0zm0 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm4.95 3.636l1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636l4.95 4.95 4.95-4.95z"
		/>
	</Icon>
);

ClearCircleIcon.defaultProps = {
	...defaultProps,
	assistiveText: 'Clear',
	copyrightYear: '2020',
};
ClearCircleIcon.propTypes = propTypes;
