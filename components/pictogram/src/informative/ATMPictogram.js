import React from 'react';
import { getColors } from '../_utils';
import { Pictogram } from '../Pictogram';

export const ATMPictogram = ({ mode, ...rest }) => {
	const { outline, highlight } = getColors(mode);

	return (
		<Pictogram pictogram="ATMPictogram" mode={mode} {...rest}>
			<g fill="none" fillRule="evenodd">
				<path
					fill={highlight}
					d="M40.6362,46.5039 C40.2872,46.9159 39.8512,47.1999 39.3372,47.3669 L39.3372,42.1589 C39.9622,42.3899 40.4362,42.6889 40.7412,43.0619 C41.1092,43.5149 41.2942,44.0529 41.2942,44.6779 C41.2942,45.3769 41.0742,45.9849 40.6362,46.5039 M35.5422,36.3999 C35.2442,35.9769 35.0942,35.5169 35.0942,35.0219 C35.0942,34.4809 35.2582,33.9859 35.5842,33.5379 C35.8752,33.1399 36.2612,32.8499 36.7292,32.6579 L36.7292,37.3449 C36.2112,37.0949 35.8112,36.7819 35.5422,36.3999 M43.5052,40.4589 C42.7442,39.5539 41.3492,38.8099 39.3372,38.2199 L39.3372,32.8679 C39.9962,33.2929 40.4292,33.9499 40.6082,34.8679 L44.1492,34.4059 C43.9062,33.0069 43.3462,31.8899 42.4692,31.0549 C41.6772,30.3009 40.6242,29.8289 39.3372,29.6109 L39.3372,28.1509 L38.9292,28.1509 L36.9002,28.1509 L36.7292,28.1509 L36.7292,29.5669 C35.2072,29.7509 33.9742,30.3329 33.0442,31.3349 C32.0782,32.3749 31.5962,33.6599 31.5962,35.1899 C31.5962,36.7009 32.0232,37.9859 32.8762,39.0449 C33.7022,40.0699 34.9902,40.8409 36.7292,41.3629 L36.7292,47.1839 C36.2932,46.9389 35.8912,46.5839 35.5292,46.1059 C35.1182,45.5639 34.8382,44.9199 34.6892,44.1739 L31.0362,44.5659 C31.3162,46.4029 31.9602,47.8259 32.9682,48.8339 C33.9382,49.8049 35.1972,50.3889 36.7292,50.6069 L36.7292,53.1859 L36.9002,53.1859 L38.9292,53.1859 L39.3372,53.1859 L39.3372,50.4959 C40.9592,50.1919 42.2462,49.5099 43.1902,48.4419 C44.2112,47.2849 44.7222,45.8619 44.7222,44.1739 C44.7222,42.6619 44.3172,41.4239 43.5052,40.4589"
				/>
				<path
					fill={outline}
					d="M67.2153,27.8174 C67.2153,28.3754 66.7623,28.8284 66.2053,28.8284 L59.3163,28.8284 L58.7013,24.7324 L62.0753,24.7324 C62.7653,24.7324 63.3253,24.1724 63.3253,23.4824 L63.3253,15.5034 C63.3253,14.8124 62.7653,14.2534 62.0753,14.2534 L14.4613,14.2534 C13.7713,14.2534 13.2113,14.8124 13.2113,15.5034 L13.2113,23.4824 C13.2113,24.1724 13.7713,24.7324 14.4613,24.7324 L17.0573,24.7324 L16.4433,28.8284 L10.5103,28.8284 C9.9533,28.8284 9.5003,28.3754 9.5003,27.8174 L9.5003,11.5094 C9.5003,10.9534 9.9533,10.5004 10.5103,10.5004 L66.2053,10.5004 C66.7623,10.5004 67.2153,10.9534 67.2153,11.5094 L67.2153,27.8174 Z M61.5103,60.2694 L14.2493,60.2694 L20.5613,18.2374 L55.1973,18.2374 L61.5103,60.2694 Z M16.1323,66.3384 L16.6683,62.7694 L59.0903,62.7694 L59.6263,66.3384 L16.1323,66.3384 Z M66.4733,8.0004 L66.4883,8.0284 C66.3933,8.0204 66.3023,8.0004 66.2053,8.0004 L10.5103,8.0004 C8.5743,8.0004 7.0003,9.5744 7.0003,11.5094 L7.0003,27.8174 C7.0003,27.8194 7.0163,33.8944 11.5473,33.9204 C11.7153,33.9214 11.8633,33.9154 12.0013,33.9054 C12.0503,33.9074 12.0963,33.9204 12.1463,33.9204 L15.6783,33.9204 L11.5613,61.3344 C11.5073,61.6934 11.6123,62.0594 11.8503,62.3354 C12.0873,62.6114 12.4333,62.7694 12.7973,62.7694 L14.1403,62.7694 L13.4443,67.4024 C13.3903,67.7614 13.4963,68.1284 13.7333,68.4034 C13.9703,68.6794 14.3173,68.8384 14.6803,68.8384 L61.0783,68.8384 C61.4423,68.8384 61.7883,68.6794 62.0253,68.4034 C62.2623,68.1284 62.3683,67.7614 62.3143,67.4024 L61.6193,62.7694 L62.9623,62.7694 C63.3253,62.7694 63.6723,62.6114 63.9093,62.3354 C64.1463,62.0594 64.2523,61.6934 64.1983,61.3344 L60.0813,33.9204 L67.8413,33.9204 C69.7773,33.9204 71.3513,32.3454 71.3513,30.4104 L71.3513,14.1024 C71.3513,8.0004 66.4733,8.0004 66.4733,8.0004 L66.4733,8.0004 Z"
				/>
			</g>
		</Pictogram>
	);
};

ATMPictogram.defaultProps = {
	...Pictogram?.defaultProps,
	viewBoxWidth: 78,
	viewBoxHeight: 78,
	assistiveText: 'ATM',
	copyrightYear: '2020',
};
ATMPictogram.propTypes = Pictogram.propTypes;
