import { Fragment } from 'react';
import { Icon, IconProps } from './Icon';

export const MoveToIcon = ({
	assistiveText = 'MoveTo',
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
					d="M20 0H4C2.9 0 2 0.9 2 2V6H4V2H20V22H4V18H2V22C2 23.1 2.9 24 4 24H20C21.11 24 22 23.1 22 22V2C22 0.9 21.11 0 20 0Z"
					fill="currentColor"
				/>
				<path
					d="M5.29291 7.70712L8.58579 11H0V13H8.58582L5.29291 16.2929L6.70712 17.7071L12.4142 12L6.70712 6.29291L5.29291 7.70712Z"
					fill="currentColor"
				/>
			</Fragment>
		) : (
			<Fragment>
				<path
					d="M20 0H4C2.9 0 2 0.9 2 2V6H4V2H20V22H4V18H2V22C2 23.1 2.9 24 4 24H20C21.11 24 22 23.1 22 22V2C22 0.9 21.11 0 20 0Z"
					fill="currentColor"
				/>
				<path
					d="M5.29291 7.70712L8.58579 11H0V13H8.58582L5.29291 16.2929L6.70712 17.7071L12.4142 12L6.70712 6.29291L5.29291 7.70712Z"
					fill="currentColor"
				/>
			</Fragment>
		)}
	</Icon>
);
