import { Fragment } from 'react';
import { Icon, IconProps } from './Icon';

export const ErrorIcon = ({
	assistiveText = 'Error',
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
				d="M24 12C24 18.627 18.6278 24 12 24C5.37225 24 0 18.627 0 12C0 5.373 5.37225 0 12 0C18.6278 0 24 5.373 24 12ZM13 14V6H11V14H13ZM13 16V18H11V16H13Z"
				fill="currentColor"
			/>
		) : (
			<Fragment>
				<path d="M13 14V6H11V14H13Z" fill="currentColor" />
				<path d="M13 16V18H11V16H13Z" fill="currentColor" />
				<path
					fill-rule="evenodd"
					clip-rule="evenodd"
					d="M12 24C18.6278 24 24 18.627 24 12C24 5.373 18.6278 0 12 0C5.37225 0 0 5.373 0 12C0 18.627 5.37225 24 12 24ZM2 12C2 6.47714 6.47714 2 12 2C17.5229 2 22 6.47714 22 12C22 17.5229 17.5229 22 12 22C6.47714 22 2 17.5229 2 12Z"
					fill="currentColor"
				/>
			</Fragment>
		)}
	</Icon>
);
