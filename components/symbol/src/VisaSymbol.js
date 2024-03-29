import React from 'react';
import { propTypes, Symbol } from './Symbol';

export const VisaSymbol = ({
	align = 'left',
	assistiveText = 'Visa',
	copyrightYear = '',
	viewBoxWidth = 80,
	viewBoxHeight = 26,
	...props
}) => (
	<Symbol
		symbol="VisaSymbol"
		align={align}
		assistiveText={assistiveText}
		copyrightYear={copyrightYear}
		viewBoxWidth={viewBoxWidth}
		viewBoxHeight={viewBoxHeight}
		{...props}
	>
		<path
			d="M39.617.453l-5.35 24.99h-6.463L33.146.453h6.47zm27.19 16.132L70.21 7.2l1.964 9.385h-5.366zm7.22 8.858H80L74.778.453h-5.513c-1.24 0-2.29.718-2.754 1.832l-9.693 23.158h6.785l1.346-3.732h8.292l.787 3.733zm-16.877-8.16c.03-6.597-9.115-6.963-9.057-9.908.022-.896.88-1.85 2.738-2.093.93-.123 3.488-.214 6.382 1.123L58.345 1.1C56.785.54 54.788 0 52.295 0c-6.39 0-10.88 3.387-10.922 8.256-.038 3.592 3.213 5.605 5.657 6.798 2.52 1.228 3.366 2.015 3.357 3.108-.017 1.672-2.015 2.412-3.866 2.448-3.254.05-5.135-.88-6.64-1.58l-1.17 5.477c1.51.693 4.298 1.298 7.183 1.33 6.79 0 11.234-3.36 11.257-8.554zM30.373.453l-10.468 24.99H13.07L7.915 5.5c-.31-1.228-.584-1.676-1.532-2.196C4.823 2.46 2.256 1.668 0 1.174l.156-.72h11c1.398 0 2.663.93 2.98 2.547l2.726 14.457L23.586.453h6.787z"
			fill="#1A1F71"
		/>
	</Symbol>
);

VisaSymbol.propTypes = propTypes;
