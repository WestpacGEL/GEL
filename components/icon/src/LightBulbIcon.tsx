import { Fragment } from 'react';
import { Icon, IconProps } from './Icon';

export const LightBulbIcon = ({
	assistiveText = 'LightBulb',
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
					d="M16 18V16.0019C18.6779 14.5711 20.5 11.7483 20.5 8.5C20.5 3.80558 16.6944 0 12 0C7.30558 0 3.5 3.80558 3.5 8.5C3.5 11.7483 5.32211 14.5711 8 16.0019V18C8 19.1046 8.89543 20 10 20H14C15.1046 20 16 19.1046 16 18Z"
					fill="currentColor"
				/>
				<path
					d="M15 23V22H9V23C9 23.5523 9.44772 24 10 24H14C14.5523 24 15 23.5523 15 23Z"
					fill="currentColor"
				/>
			</Fragment>
		) : (
			<Fragment>
				<path
					fill-rule="evenodd"
					clip-rule="evenodd"
					d="M16 16.0019V18C16 19.1046 15.1046 20 14 20H10C8.89543 20 8 19.1046 8 18V16.0019C5.32211 14.5711 3.5 11.7483 3.5 8.5C3.5 3.80558 7.30558 0 12 0C16.6944 0 20.5 3.80558 20.5 8.5C20.5 11.7483 18.6779 14.5711 16 16.0019ZM14 18V14.6865C16.6113 13.8429 18.5 11.392 18.5 8.5C18.5 4.91015 15.5899 2 12 2C8.41015 2 5.5 4.91015 5.5 8.5C5.5 11.392 7.38874 13.8429 10 14.6865V18H14Z"
					fill="currentColor"
				/>
				<path
					d="M15 22V23C15 23.5523 14.5523 24 14 24H10C9.44772 24 9 23.5523 9 23V22H15Z"
					fill="currentColor"
				/>
			</Fragment>
		)}
	</Icon>
);
