import React from 'react';
import { getColors } from '../_utils';
import { propTypes, defaultProps, Pictogram } from '../Pictogram';

export const MovieTicketsPictogram = ({ mode, ...rest }) => {
	const { outline, highlight } = getColors(mode);

	return (
		<Pictogram pictogram="MovieTicketsPictogram" mode={mode} {...rest}>
			<g fill="none" fillRule="evenodd">
				<path
					fill={highlight}
					d="M40.891 24.223l3.598-6.217c.112-.195.407-.137.44.085l1.033 7.108a.239.239 0 0 0 .185.198l7.025 1.5a.237.237 0 0 1 .055.445l-6.44 3.179a.238.238 0 0 0-.132.238l.743 7.144a.236.236 0 0 1-.404.19L41.98 32.95a.236.236 0 0 0-.266-.051l-6.566 2.914a.236.236 0 0 1-.305-.326l3.342-6.36a.235.235 0 0 0-.034-.267l-4.8-5.344a.237.237 0 0 1 .216-.392l7.08 1.214a.236.236 0 0 0 .245-.115"
				/>
				<polygon fill={outline} points="27.249 52.284 33.16 56.902 34.699 54.931 28.788 50.314" />
				<polygon fill={outline} points="18.805 45.689 24.716 50.306 26.255 48.336 20.344 43.719" />
				<path
					fill={outline}
					d="M39.005 58.295l-1.773-1.385-1.54 1.97 1.774 1.386-8.493 10.873-5.142-4.017c2.725-3.54 2.085-8.64-1.441-11.395-3.528-2.756-8.632-2.141-11.406 1.36l-4.979-3.89 8.494-10.872 1.773 1.386 1.539-1.97-1.774-1.385L42.088 7.005l22.968 17.94-26.051 33.35zM51.397 5.024a1.252 1.252 0 0 0-1.735.047l-2.6 2.647-4.42-3.452a1.25 1.25 0 0 0-1.755.215L3.265 52.645a1.25 1.25 0 0 0 .216 1.754l7.036 5.497a1.251 1.251 0 0 0 1.872-.397c.169-.316.342-.587.53-.827a5.655 5.655 0 0 1 7.931-.975 5.659 5.659 0 0 1 .975 7.932c-.188.24-.408.474-.675.715a1.248 1.248 0 0 0 .069 1.912l7.2 5.623a1.246 1.246 0 0 0 1.754-.216l44.637-45.5a1.251 1.251 0 0 0-.049-1.798L51.397 5.024z"
				/>
			</g>
		</Pictogram>
	);
};

MovieTicketsPictogram.defaultProps = {
	...defaultProps,
	viewBoxWidth: 78,
	viewBoxHeight: 78,
	assistiveText: 'Movie tickets',
	copyrightYear: '2021',
};
MovieTicketsPictogram.propTypes = propTypes;
