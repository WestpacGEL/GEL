import { Fragment } from 'react';
import { Icon, IconProps } from './Icon';

export const VerifiedIcon = ({
	assistiveText = 'Verified',
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
				d="M2 4.5L12 0L22 4.5V11C22 17.0545 17.7333 22.6255 12 24C6.26667 22.6255 2 17.0545 2 11V4.5ZM9.99519 14.5891L17.2923 7.29199L18.7023 8.71199L9.99519 17.4191L5.28809 12.712L6.69809 11.302L9.99519 14.5891Z"
				fill="currentColor"
			/>
		) : (
			<Fragment>
				<path
					d="M9.99519 14.5891L17.2923 7.29199L18.7023 8.71199L9.99519 17.4191L5.28809 12.712L6.69809 11.302L9.99519 14.5891Z"
					fill="currentColor"
				/>
				<path
					fill-rule="evenodd"
					clip-rule="evenodd"
					d="M2 4.5L12 0L22 4.5V11C22 17.0545 17.7333 22.6255 12 24C6.26667 22.6255 2 17.0545 2 11V4.5ZM4 11V5.79317L12 2.19317L20 5.79317V11C20 16.0039 16.5623 20.5963 12 21.9311C7.43769 20.5963 4 16.0039 4 11Z"
					fill="currentColor"
				/>
			</Fragment>
		)}
	</Icon>
);
