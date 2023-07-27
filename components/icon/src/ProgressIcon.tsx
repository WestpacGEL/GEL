import { Fragment } from 'react';
import { Icon, IconProps } from './Icon';

export const ProgressIcon = ({
	assistiveText = 'Progress',
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
				d="M12 24C5.37225 24 0 18.627 0 12C0 5.373 5.37225 0 12 0C18.6278 0 24 5.373 24 12C24 18.627 18.6278 24 12 24ZM12 2V12L4.23869 18.3062C2.83902 16.5857 2 14.3908 2 12C2 6.47714 6.47714 2 12 2Z"
				fill="currentColor"
			/>
		) : (
			<Fragment>
				<path
					d="M12 20C9.17578 20 6.69338 18.5365 5.26976 16.3266L12 12V4C16.4183 4 20 7.58172 20 12C20 16.4183 16.4183 20 12 20Z"
					fill="currentColor"
				/>
				<path
					fill-rule="evenodd"
					clip-rule="evenodd"
					d="M12 24C5.37225 24 0 18.627 0 12C0 5.373 5.37225 0 12 0C18.6278 0 24 5.373 24 12C24 18.627 18.6278 24 12 24ZM2 12C2 17.5229 6.47714 22 12 22C17.5229 22 22 17.5229 22 12C22 6.47714 17.5229 2 12 2C6.47714 2 2 6.47714 2 12Z"
					fill="currentColor"
				/>
			</Fragment>
		)}
	</Icon>
);
