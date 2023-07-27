import { Fragment } from 'react';
import { Icon, IconProps } from './Icon';

export const ChatIcon = ({
	assistiveText = 'Chat',
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
				d="M2 0C0.89543 0 0 0.89543 0 2V24L6 18H22C23.1046 18 24 17.1046 24 16V2C24 0.89543 23.1046 0 22 0H2ZM20 4H4V6H20V4ZM4 8H16V10H4V8ZM12 12H4V14H12V12Z"
				fill="currentColor"
			/>
		) : (
			<Fragment>
				<path d="M20 4H4V6H20V4Z" fill="currentColor" />
				<path d="M4 8H16V10H4V8Z" fill="currentColor" />
				<path d="M12 12H4V14H12V12Z" fill="currentColor" />
				<path
					fill-rule="evenodd"
					clip-rule="evenodd"
					d="M0 2V24L6 18H22C23.1046 18 24 17.1046 24 16V2C24 0.89543 23.1046 0 22 0H2C0.89543 0 0 0.89543 0 2ZM22 16H5.17157L2 19.1716V2H22V16Z"
					fill="currentColor"
				/>
			</Fragment>
		)}
	</Icon>
);
