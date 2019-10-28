import React from 'react';
import { propTypes, defaultProps, Icon } from '../Icon';

export const QuickBalanceIcon = props => (
	<Icon icon="QuickBalanceIcon" {...props}>
		<path
			fill="currentColor"
			fillRule="evenodd"
			d="M14.235,15.8515 L19.42425,8.575 L12.17775,13.7665 C11.54925,13.717 10.893,13.93075 10.4085,14.40925 C9.52425,15.2815 9.5355,16.7065 10.4085,17.59075 C11.2815,18.47575 12.7065,18.46375 13.59075,17.59075 C14.0745,17.113 14.277,16.48075 14.235,15.8515 L14.235,15.8515 Z M12,7 C7.0365,7 3,11.03725 3,16 C3,17.33875 3.3015,18.60625 3.82875,19.75 L7.323,19.75 C6.49725,18.72175 6,17.41825 6,16 C6,12.69175 8.691,10 12,10 C12.7935,10 13.551,10.15825 14.2455,10.44025 L16.95825,8.49625 C15.53475,7.55275 13.8315,7 12,7 L12,7 Z M19.5045,11.04475 L17.5635,13.7665 C17.8425,14.45725 18,15.21025 18,16 C18,17.41825 17.502,18.72175 16.67625,19.75 L20.1705,19.75 C20.69775,18.60625 21,17.33875 21,16 C21,14.16925 20.44725,12.46675 19.5045,11.04475 L19.5045,11.04475 Z M1.6185,22 C0.59475,20.233 0,18.1885 0,16 C0,9.37225 5.37225,4 12,4 C18.627,4 24,9.37225 24,16 C24,18.1885 23.4045,20.233 22.38075,22 L1.6185,22 Z"
		/>
	</Icon>
);

QuickBalanceIcon.defaultProps = {
	...defaultProps,
	label: 'Quick Balance',
};
QuickBalanceIcon.propTypes = propTypes;
