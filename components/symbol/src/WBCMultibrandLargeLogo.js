import React from 'react';
import { propTypes, defaultProps, Symbol } from './Symbol';

export const WBCMultibrandLargeLogo = (props) => (
	<Symbol symbol="WBCMultibrandLargeLogo" {...props}>
		<path
			fill="#DA1710"
			d="M24.385 45.038s1.047 2.79 2.002 2.962H13.072c-2.481 0-4.668-1.39-5.366-4.03L1.643 22.941S.987 20.401 0 20.001h12.561c2.479 0 4.101.901 5.061 4.1l6.763 20.937zm20.227 0l6.767-20.937c.958-3.199 2.579-4.1 5.059-4.1H69c-.99.4-1.642 2.94-1.642 2.94l-6.065 21.03c-.7 2.638-2.886 4.03-5.364 4.03H42.613c.953-.174 1.998-2.963 1.998-2.963zM27 48V20h15v28H27z"
			fillRule="evenodd"
		/>
	</Symbol>
);

WBCMultibrandLargeLogo.defaultProps = {
	...defaultProps,
	viewBoxWidth: 180,
	viewBoxHeight: 65,
	offset: [null, 55.5, 111],
	assistiveText: 'Westpac',
	copyrightYear: '2020',
};
WBCMultibrandLargeLogo.propTypes = propTypes;
