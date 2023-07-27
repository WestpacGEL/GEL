import { Fragment } from 'react';
import { Icon, IconProps } from './Icon';

export const AtmIcon = ({
	assistiveText = 'Atm',
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
					d="M0 1C0 0.447716 0.447715 0 1 0H23C23.5523 0 24 0.447715 24 1V9C24 9.55228 23.5523 10 23 10H20.0349L21.9099 20H2.09015L3.96515 10H1C0.447716 10 0 9.55228 0 9V1ZM6.75 6L4.5 18H19.5L17.25 6H6.75Z"
					fill="currentColor"
				/>
				<path d="M2 22V24H22V22H2Z" fill="currentColor" />
			</Fragment>
		) : (
			<Fragment>
				<path
					fill-rule="evenodd"
					clip-rule="evenodd"
					d="M20.0349 10H23C23.5523 10 24 9.55228 24 9V1C24 0.447715 23.5523 0 23 0H1C0.447715 0 0 0.447716 0 1V9C0 9.55229 0.447716 10 1 10H3.96515L2.09015 20H21.9099L20.0349 10ZM2 8V2H22V8H19.6599L18.9099 4H5.09015L4.34015 8H2ZM4.5 18H19.5L17.25 6H6.75L4.5 18Z"
					fill="currentColor"
				/>
				<path d="M2 24V22H22V24H2Z" fill="currentColor" />
			</Fragment>
		)}
	</Icon>
);
