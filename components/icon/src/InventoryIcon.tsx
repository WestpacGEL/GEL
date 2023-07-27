import { Fragment } from 'react';
import { Icon, IconProps } from './Icon';

export const InventoryIcon = ({
	assistiveText = 'Inventory',
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
					fill-rule="evenodd"
					clip-rule="evenodd"
					d="M6 4H4V22H12V24H4C2.9 24 2 23.1 2 22V4C2 2.9 2.9 2 4 2H9.18C9.6 0.84 10.7 0 12 0C13.3 0 14.4 0.84 14.82 2H20C21.1 2 22 2.9 22 4V13H20V4H18V8H6V4ZM13 3C13 2.45 12.55 2 12 2C11.45 2 11 2.45 11 3C11 3.55 11.45 4 12 4C12.55 4 13 3.55 13 3Z"
					fill="currentColor"
				/>
				<path
					d="M17 20.5L22.49 15L23.99 16.5L17 23.5L12.49 19L13.99 17.5L17 20.5Z"
					fill="currentColor"
				/>
			</Fragment>
		) : (
			<Fragment>
				<path
					fill-rule="evenodd"
					clip-rule="evenodd"
					d="M6 4H4V22H12V24H4C2.9 24 2 23.1 2 22V4C2 2.9 2.9 2 4 2H9.18C9.6 0.84 10.7 0 12 0C13.3 0 14.4 0.84 14.82 2H20C21.1 2 22 2.9 22 4V13H20V4H18V8H6V4ZM13 3C13 2.45 12.55 2 12 2C11.45 2 11 2.45 11 3C11 3.55 11.45 4 12 4C12.55 4 13 3.55 13 3Z"
					fill="currentColor"
				/>
				<path
					d="M17 20.5L22.49 15L23.99 16.5L17 23.5L12.49 19L13.99 17.5L17 20.5Z"
					fill="currentColor"
				/>
			</Fragment>
		)}
	</Icon>
);
