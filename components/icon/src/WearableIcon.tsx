import { Fragment } from 'react';
import { Icon, IconProps } from './Icon';

export const WearableIcon = ({
	assistiveText = 'Wearable',
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
					d="M7 2C6.44772 2 6 2.44772 6 3V6H18V3C18 2.44772 17.5523 2 17 2H7Z"
					fill="currentColor"
				/>
				<path
					d="M17 22H14V19H17C19.2091 19 21 17.2091 21 15C21 12.7909 19.2091 11 17 11H7C4.79086 11 3 12.7909 3 15C3 17.2091 4.79086 19 7 19H10V22H7C3.13401 22 0 18.866 0 15C0 11.134 3.13401 8 7 8H17C20.866 8 24 11.134 24 15C24 18.866 20.866 22 17 22Z"
					fill="currentColor"
				/>
			</Fragment>
		) : (
			<Fragment>
				<path
					d="M7 2C6.44772 2 6 2.44772 6 3V6H18V3C18 2.44772 17.5523 2 17 2H7Z"
					fill="currentColor"
				/>
				<path
					d="M7 20H10V22H7C3.13401 22 0 18.866 0 15C0 11.134 3.13401 8 7 8H17C20.866 8 24 11.134 24 15C24 18.866 20.866 22 17 22H14V20H17C19.7614 20 22 17.7614 22 15C22 12.2386 19.7614 10 17 10H7C4.23858 10 2 12.2386 2 15C2 17.7614 4.23858 20 7 20Z"
					fill="currentColor"
				/>
			</Fragment>
		)}
	</Icon>
);
