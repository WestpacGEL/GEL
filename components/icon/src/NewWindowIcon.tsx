import { Fragment } from 'react';
import { Icon, IconProps } from './Icon';

export const NewWindowIcon = ({
	assistiveText = 'NewWindow',
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
					d="M2 0H12V2H2V22H22V12H24V22C24 23.1046 23.1046 24 22 24H2C0.89543 24 0 23.1046 0 22V2C0 0.89543 0.89543 0 2 0Z"
					fill="currentColor"
				/>
				<path
					d="M22 8V3.41682L12.3998 13.017L10.9856 11.6028L20.5884 2H16V0H24V8H22Z"
					fill="currentColor"
				/>
			</Fragment>
		) : (
			<Fragment>
				<path
					d="M2 0H12V2H2V22H22V12H24V22C24 23.1046 23.1046 24 22 24H2C0.89543 24 0 23.1046 0 22V2C0 0.89543 0.89543 0 2 0Z"
					fill="currentColor"
				/>
				<path
					d="M22 8V3.41682L12.3998 13.017L10.9856 11.6028L20.5884 2H16V0H24V8H22Z"
					fill="currentColor"
				/>
			</Fragment>
		)}
	</Icon>
);
