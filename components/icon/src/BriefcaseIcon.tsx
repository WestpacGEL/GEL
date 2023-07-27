import { Fragment } from 'react';
import { Icon, IconProps } from './Icon';

export const BriefcaseIcon = ({
	assistiveText = 'Briefcase',
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
			<Fragment>
				<path
					fill-rule="evenodd"
					clip-rule="evenodd"
					d="M6 4C6 2.89543 6.89543 2 8 2H16C17.1046 2 18 2.89543 18 4V6H22C23.1046 6 24 6.89543 24 8V10H0V8C0 6.89543 0.895431 6 2 6H6V4ZM8 6H16V4H8V6Z"
					fill="currentColor"
				/>
				<path
					d="M14 12H24V20C24 21.1046 23.1046 22 22 22H2C0.89543 22 0 21.1046 0 20V12H10V14H14V12Z"
					fill="currentColor"
				/>
			</Fragment>
		) : (
			<path
				fill-rule="evenodd"
				clip-rule="evenodd"
				d="M6 4C6 2.89543 6.89543 2 8 2H16C17.1046 2 18 2.89543 18 4V6H22C23.1046 6 24 6.89543 24 8V20C24 21.1046 23.1046 22 22 22H2C0.89543 22 0 21.1046 0 20V8C0 6.89543 0.895431 6 2 6H6V4ZM22 8V10H2L2 8H22ZM2 20L2 12H10V14H14V12H22V20H2ZM8 6H16V4H8V6Z"
				fill="currentColor"
			/>
		)}
	</Icon>
);
