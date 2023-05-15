import React, { Fragment } from 'react';
import { propTypes, Icon } from './Icon';

export const PrintIcon = ({
	assistiveText = 'Print',
	copyrightYear = '2023',
	size = 'medium',
	look = 'filled',
	...props
}) => (
	<Icon
		icon="TestIcon"
		assistiveText={assistiveText}
		copyrightYear={copyrightYear}
		size={size}
		{...props}
	>
		{look === 'filled' ? (
			<Fragment>
				<path d="M20 0H4V4H20V0Z" fill="currentColor" />
				<path
					fill-rule="evenodd"
					clip-rule="evenodd"
					d="M0 9C0 7.34315 1.34315 6 3 6H21C22.6569 6 24 7.34315 24 9V18H20V24H4V18H0V9ZM19.5 12C20.3284 12 21 11.3284 21 10.5C21 9.67157 20.3284 9 19.5 9C18.6716 9 18 9.67157 18 10.5C18 11.3284 18.6716 12 19.5 12ZM6 14H18V22H6V14Z"
					fill="currentColor"
				/>
			</Fragment>
		) : (
			<Fragment>
				<path
					d="M19.5 12C20.3284 12 21 11.3284 21 10.5C21 9.67157 20.3284 9 19.5 9C18.6716 9 18 9.67157 18 10.5C18 11.3284 18.6716 12 19.5 12Z"
					fill="currentColor"
				/>
				<path
					fill-rule="evenodd"
					clip-rule="evenodd"
					d="M5 0H19V6H21C22.6569 6 24 7.34315 24 9V18H19V24H5V18H0V9C0 7.34315 1.34315 6 3 6H5V0ZM17 2V6H7V2H17ZM2 9C2 8.44772 2.44772 8 3 8H21C21.5523 8 22 8.44771 22 9V16H19V13H5V16H2V9ZM17 15H7V22H17V15Z"
					fill="currentColor"
				/>
			</Fragment>
		)}
	</Icon>
);

PrintIcon.propTypes = propTypes;
