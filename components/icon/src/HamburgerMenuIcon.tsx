import { Fragment } from 'react';
import { Icon, IconProps } from './Icon';

export const HamburgerMenuIcon = ({
	assistiveText = 'HamburgerMenu',
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
				<path d="M2 7H22V5H2V7Z" fill="currentColor" />
				<path d="M2 19H22V17H2V19Z" fill="currentColor" />
				<path d="M22 13H2V11H22V13Z" fill="currentColor" />
			</Fragment>
		) : (
			<Fragment>
				<path d="M2 7H22V5H2V7Z" fill="currentColor" />
				<path d="M2 19H22V17H2V19Z" fill="currentColor" />
				<path d="M22 13H2V11H22V13Z" fill="currentColor" />
			</Fragment>
		)}
	</Icon>
);
