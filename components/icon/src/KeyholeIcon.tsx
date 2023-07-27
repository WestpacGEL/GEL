import { Fragment } from 'react';
import { Icon, IconProps } from './Icon';

export const KeyholeIcon = ({
	assistiveText = 'Keyhole',
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
				d="M0 11.9998C0 5.37216 5.37216 0 11.9998 0C18.6267 0 23.9996 5.37216 23.9996 11.9998C23.9996 18.6267 18.6267 23.9996 11.9998 23.9996C5.37216 23.9996 0 18.6267 0 11.9998ZM14.9996 8.99902C14.9996 10.2243 14.2651 11.2779 13.2124 11.7438L14.9996 17.999H8.9996L10.7868 11.7438C9.73411 11.2779 8.9996 10.2243 8.9996 8.99902C8.9996 7.34217 10.3427 5.99902 11.9996 5.99902C13.6565 5.99902 14.9996 7.34217 14.9996 8.99902Z"
				fill="currentColor"
			/>
		) : (
			<Fragment>
				<path
					d="M14.9996 8.99902C14.9996 10.2243 14.2651 11.2779 13.2124 11.7438L14.9996 17.999H8.99963L10.7868 11.7438C9.73414 11.2779 8.99963 10.2243 8.99963 8.99902C8.99963 7.34217 10.3428 5.99902 11.9996 5.99902C13.6565 5.99902 14.9996 7.34217 14.9996 8.99902Z"
					fill="currentColor"
				/>
				<path
					fill-rule="evenodd"
					clip-rule="evenodd"
					d="M11.9998 0C5.37216 0 0 5.37216 0 11.9998C0 18.6267 5.37216 23.9996 11.9998 23.9996C18.6267 23.9996 23.9996 18.6267 23.9996 11.9998C23.9996 5.37216 18.6267 0 11.9998 0ZM2 11.9998C2 6.47673 6.47673 2 11.9998 2C17.5222 2 21.9996 6.47681 21.9996 11.9998C21.9996 17.5221 17.5221 21.9996 11.9998 21.9996C6.47681 21.9996 2 17.5222 2 11.9998Z"
					fill="currentColor"
				/>
			</Fragment>
		)}
	</Icon>
);
