import { Icon, IconProps } from './Icon';

export const GridIcon = ({
	assistiveText = 'Grid',
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
				d="M4 2H20C21.1 2 22 2.9 22 4V20C22 21.1 21.1 22 20 22H4C2.9 22 2 21.1 2 20V4C2 2.9 2.9 2 4 2ZM4 20H8V16H4V20ZM8 14H4V10H8V14ZM4 8H8V4H4V8ZM14 20H10V16H14V20ZM10 14H14V10H10V14ZM14 8H10V4H14V8ZM16 20H20V16H16V20ZM20 14H16V10H20V14ZM16 8H20V4H16V8Z"
				fill="currentColor"
			/>
		) : (
			<path
				fill-rule="evenodd"
				clip-rule="evenodd"
				d="M4 2H20C21.1 2 22 2.9 22 4V20C22 21.1 21.1 22 20 22H4C2.9 22 2 21.1 2 20V4C2 2.9 2.9 2 4 2ZM4 20H8V16H4V20ZM8 14H4V10H8V14ZM4 8H8V4H4V8ZM14 20H10V16H14V20ZM10 14H14V10H10V14ZM14 8H10V4H14V8ZM16 20H20V16H16V20ZM20 14H16V10H20V14ZM16 8H20V4H16V8Z"
				fill="currentColor"
			/>
		)}
	</Icon>
);
