import { Fragment } from 'react';
import { Icon, IconProps } from './Icon';

export const LiveChatIcon = ({
	assistiveText = 'LiveChat',
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
					d="M17 14H5L0 20V1C0 0.447715 0.447715 0 1 0H17C17.5523 0 18 0.447715 18 1V13C18 13.5523 17.5523 14 17 14Z"
					fill="currentColor"
				/>
				<path
					d="M23 6H20V16H6V19C6 19.5523 6.44772 20 7 20H20L24 24V7C24 6.44772 23.5523 6 23 6Z"
					fill="currentColor"
				/>
			</Fragment>
		) : (
			<Fragment>
				<path
					fill-rule="evenodd"
					clip-rule="evenodd"
					d="M0 1V20L5 14H17C17.5523 14 18 13.5523 18 13V1C18 0.447715 17.5523 0 17 0H1C0.447715 0 0 0.447715 0 1ZM16 12H4.06325L2 14.4759V2H16V12Z"
					fill="currentColor"
				/>
				<path
					d="M6 19V16H8V18H19.7016L22 19.8387V8H20V6H23C23.5523 6 24 6.44772 24 7V24L19 20H7C6.44772 20 6 19.5523 6 19Z"
					fill="currentColor"
				/>
			</Fragment>
		)}
	</Icon>
);
