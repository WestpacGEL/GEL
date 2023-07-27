import { Fragment } from 'react';
import { Icon, IconProps } from './Icon';

export const StopwatchIcon = ({
	assistiveText = 'Stopwatch',
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
				<path d="M16 0H8V2H16V0Z" fill="currentColor" />
				<path
					fill-rule="evenodd"
					clip-rule="evenodd"
					d="M18.6182 6.50317L20.1213 5L21.5355 6.41421L19.9788 7.97093C21.2474 9.64721 22 11.7357 22 14C22 19.5228 17.5228 24 12 24C6.47715 24 2 19.5228 2 14C2 8.47715 6.47715 4 12 4C14.5378 4 16.8549 4.94537 18.6182 6.50317ZM13 8V16H11V8H13Z"
					fill="currentColor"
				/>
			</Fragment>
		) : (
			<Fragment>
				<path d="M8 0H16V2H8V0Z" fill="currentColor" />
				<path d="M13 16V8H11V16H13Z" fill="currentColor" />
				<path
					fill-rule="evenodd"
					clip-rule="evenodd"
					d="M20.1213 5L18.6182 6.50317C16.8549 4.94537 14.5378 4 12 4C6.47715 4 2 8.47715 2 14C2 19.5228 6.47715 24 12 24C17.5228 24 22 19.5228 22 14C22 11.7357 21.2474 9.64721 19.9788 7.97093L21.5355 6.41421L20.1213 5ZM20 14C20 18.4183 16.4183 22 12 22C7.58172 22 4 18.4183 4 14C4 9.58172 7.58172 6 12 6C16.4183 6 20 9.58172 20 14Z"
					fill="currentColor"
				/>
			</Fragment>
		)}
	</Icon>
);
