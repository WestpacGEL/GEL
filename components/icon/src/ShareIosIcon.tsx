import { Icon, IconProps } from './Icon';

export const ShareIosIcon = ({
	assistiveText = 'ShareIos',
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
				d="M17 5L15.58 6.42L12.99 3.83L13 16H11L11.01 3.83L8.42 6.42L7 5L12 0L17 5ZM22 10V22C22 23.1 21.1 24 20 24H4C3.46957 24 2.96086 23.7893 2.58579 23.4142C2.21071 23.0391 2 22.5304 2 22V10C2 8.89 2.89 8 4 8H8V10H4V22H20V10H16V8H20C20.5304 8 21.0391 8.21071 21.4142 8.58579C21.7893 8.96086 22 9.46957 22 10Z"
				fill="currentColor"
			/>
		) : (
			<path
				fill-rule="evenodd"
				clip-rule="evenodd"
				d="M17 5L15.58 6.42L12.99 3.83L13 16H11L11.01 3.83L8.42 6.42L7 5L12 0L17 5ZM22 10V22C22 23.1 21.1 24 20 24H4C3.46957 24 2.96086 23.7893 2.58579 23.4142C2.21071 23.0391 2 22.5304 2 22V10C2 8.89 2.89 8 4 8H8V10H4V22H20V10H16V8H20C20.5304 8 21.0391 8.21071 21.4142 8.58579C21.7893 8.96086 22 9.46957 22 10Z"
				fill="currentColor"
			/>
		)}
	</Icon>
);
