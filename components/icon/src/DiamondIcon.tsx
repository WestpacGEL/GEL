import { Fragment } from 'react';
import { Icon, IconProps } from './Icon';

export const DiamondIcon = ({
	assistiveText = 'Diamond',
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
				<path d="M9.74479 2H4.0001L0.571533 8H6.41146L9.74479 2Z" fill="currentColor" />
				<path d="M8.69938 8H15.3003L11.9998 2.05917L8.69938 8Z" fill="currentColor" />
				<path d="M17.5882 8L14.2549 2H20.0001L23.4287 8H17.5882Z" fill="currentColor" />
				<path
					d="M0.857248 10L12.0001 23L23.143 10H13V18.8402L12 20L11 18.8402V10H0.857248Z"
					fill="currentColor"
				/>
			</Fragment>
		) : (
			<path
				fill-rule="evenodd"
				clip-rule="evenodd"
				d="M4 2H20L24 9L12 23L0 9L4 2ZM2.87493 8L5.16065 4H8.63368L6.41146 8H2.87493ZM8.69938 8H15.3003L13.0781 4H10.9216L8.69938 8ZM15.366 4L17.5882 8H21.1251L18.8394 4H15.366ZM3.4913 10L11 18.7602V10H3.4913ZM20.5087 10L13 18.7602V10H20.5087Z"
				fill="currentColor"
			/>
		)}
	</Icon>
);
