import { Fragment } from 'react';
import { Icon, IconProps } from './Icon';

export const SdStorageIcon = ({
	assistiveText = 'SdStorage',
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
				d="M2.02 6L2 22C2 23.1 2.9 24 4 24H20C21.1 24 22 23.1 22 22V2C22 0.9 21.1 0 20 0H7L2.02 6ZM8 10H10V4H8V10ZM12 10H14V4H12V10ZM18 10H16V4H18V10Z"
				fill="currentColor"
			/>
		) : (
			<Fragment>
				<path d="M8 10H10V4H8V10Z" fill="currentColor" />
				<path d="M12 10H14V4H12V10Z" fill="currentColor" />
				<path d="M18 10H16V4H18V10Z" fill="currentColor" />
				<path
					fill-rule="evenodd"
					clip-rule="evenodd"
					d="M2.02 6L7 0H20C21.1 0 22 0.9 22 2V22C22 23.1 21.1 24 20 24H4C2.9 24 2 23.1 2 22L2.02 6ZM20 2V22H4L4.0191 6.72296L7.93915 2H20Z"
					fill="currentColor"
				/>
			</Fragment>
		)}
	</Icon>
);
