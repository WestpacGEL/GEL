import { Fragment } from 'react';
import { Icon, IconProps } from './Icon';

export const OpenBrowserIcon = ({
	assistiveText = 'OpenBrowser',
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
				d="M2 0H22C23.11 0 24 0.9 24 2V18C24 19.1 23.1 20 22 20H17V18H22V6H2V18H7V20H2C0.89 20 0 19.1 0 18V2C0 0.9 0.89 0 2 0ZM6 15L12 9L18 15H14V24H10V15H6Z"
				fill="currentColor"
			/>
		) : (
			<Fragment>
				<path
					fill-rule="evenodd"
					clip-rule="evenodd"
					d="M22 0H2C0.89 0 0 0.9 0 2V18C0 19.1 0.89 20 2 20H7V18H2V6H22V18H17V20H22C23.1 20 24 19.1 24 18V2C24 0.9 23.11 0 22 0ZM2 2H22V4H2V2Z"
					fill="currentColor"
				/>
				<path d="M6 15L12 9L18 15H14V24H10V15H6Z" fill="currentColor" />
			</Fragment>
		)}
	</Icon>
);
