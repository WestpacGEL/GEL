import { Fragment } from 'react';
import { Icon, IconProps } from './Icon';

export const FacebookIcon = ({
	assistiveText = 'Facebook',
	copyrightYear = '2023',
	size = 'medium',
	look = 'filled',
	color,
	overrides,
	...props
}: Omit<IconProps, 'icon'>) => (
	<Icon
		icon="TestIcon"
		assistiveText={assistiveText}
		copyrightYear={copyrightYear}
		size={size}
		look={look}
		color={color}
		overrides={overrides}
		{...props}
	>
		{look === 'filled' ? (
			<path
				fill-rule="evenodd"
				clip-rule="evenodd"
				d="M2 0C0.895431 0 0 0.89543 0 2V22C0 23.1046 0.89543 24 2 24H22C23.1046 24 24 23.1046 24 22V2C24 0.895431 23.1046 0 22 0H2ZM16.6429 9.71429H20.0714L19.5 12H16.6429V20H13.2143V12H11.5V9.71429H13.2143V7.71429C13.2143 5.14286 14.2109 4 16.9263 4H20.0714V6.85714H17.5C16.7411 6.856 16.6429 7.26114 16.6429 8V9.71429Z"
				fill="currentColor"
			/>
		) : (
			<Fragment>
				<path
					d="M16.6429 9.71429H20.0714L19.5 12H16.6429V20H13.2143V12H11.5V9.71429H13.2143V7.71429C13.2143 5.14286 14.2109 4 16.9263 4H20.0714V6.85714H17.5C16.7411 6.856 16.6429 7.26114 16.6429 8V9.71429Z"
					fill="currentColor"
				/>
				<path
					fill-rule="evenodd"
					clip-rule="evenodd"
					d="M0 2C0 0.89543 0.895431 0 2 0H22C23.1046 0 24 0.895431 24 2V22C24 23.1046 23.1046 24 22 24H2C0.89543 24 0 23.1046 0 22V2ZM2 2H22V22H2V2Z"
					fill="currentColor"
				/>
			</Fragment>
		)}
	</Icon>
);
