import React from 'react';
import { propTypes, defaultProps, Symbol } from './Symbol';

export const WBGMultibrandLargeLogo = (props) => (
	<Symbol symbol="WBGMultibrandLargeLogo" {...props}>
		<path
			fill="#000"
			d="M145.826 33.658V23.84h5.664c3.606 0 6.07 1.66 6.07 4.838v.058c0 2.977-2.52 4.922-6.24 4.922h-5.494zm-1.487 8.84h1.487V35.03h5.408c4.18 0 7.813-2.175 7.813-6.38v-.058c0-3.862-3.032-6.124-7.442-6.124h-7.266v20.03zm-13.477.319c4.863 0 8.211-3.066 8.211-8.816V22.468h-1.487v11.707c0 4.834-2.603 7.295-6.669 7.295-4.235 0-6.784-2.719-6.784-7.44V22.467h-1.486v11.707c0 5.607 3.407 8.642 8.215 8.642zm-22.399-1.321c-4.953 0-8.559-4.062-8.559-9.015v-.054c0-4.952 3.551-8.958 8.502-8.958 4.949 0 8.555 4.063 8.555 9.012v.06c0 4.953-3.547 8.955-8.498 8.955zm-.057 1.347c6.063 0 10.101-4.892 10.101-10.362v-.054c0-5.467-3.981-10.303-10.044-10.303-6.066 0-10.103 4.894-10.103 10.357v.06c0 5.467 3.98 10.302 10.046 10.302zm-27.357-9.988V23.84h6.834c3.635 0 5.754 1.691 5.754 4.379v.06c0 2.888-2.49 4.576-5.837 4.576H81.05zm-1.49 9.643h1.49v-8.297h6.55l6.382 8.297h1.888l-6.61-8.555c3.377-.457 5.866-2.374 5.866-5.724v-.055a5.278 5.278 0 00-1.52-3.724c-1.2-1.2-3.175-1.972-5.632-1.972h-8.415v20.03zm-12.796.345c3.261 0 6.066-1.402 7.868-3.003v-7.727h-8.124v1.373h6.695v5.75c-1.461 1.233-3.836 2.289-6.382 2.289-5.354 0-8.586-3.861-8.586-9.044v-.054c0-4.837 3.407-8.958 8.273-8.958 3.032 0 4.86 1.029 6.44 2.403l.97-1.113c-2.004-1.663-4.063-2.635-7.327-2.635-5.98 0-9.902 4.949-9.902 10.357v.06c0 5.64 3.75 10.302 10.075 10.302z"
		/>
		<path
			fill="#DA1710"
			d="M52 22c-.749.301-1.244 2.206-1.244 2.206l-4.598 15.771C45.628 41.957 43.97 43 42.092 43H32c.723-.13 1.516-2.222 1.516-2.222l5.128-15.703C39.368 22.677 40.598 22 42.478 22H52zM9.52 22c1.879 0 3.108.677 3.836 3.075l5.126 15.703S19.275 42.87 20 43H9.908c-1.881 0-3.538-1.043-4.068-3.023L1.244 24.206S.748 22.301 0 22h9.52zm21.98 0v21h-11V22h11z"
		/>
	</Symbol>
);

WBGMultibrandLargeLogo.defaultProps = {
	...defaultProps,
	viewBoxWidth: 180,
	viewBoxHeight: 65,
	offset: [null, 10.475, 20.95],
	assistiveText: 'Westpac Group',
	copyrightYear: '2020',
};
WBGMultibrandLargeLogo.propTypes = propTypes;