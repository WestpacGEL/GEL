import { Icon, IconProps } from './Icon';

export const SearchIcon = ({
	assistiveText = 'Search',
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
				d="M16.4632 14.0317L22.5907 20.1593C23.4697 21.0375 23.4697 22.4625 22.5907 23.3407C22.1512 23.7803 21.576 24 21 24C20.424 24 19.8488 23.7803 19.4093 23.3407L13.0822 17.0138C11.856 17.64 10.4715 18 9 18C4.02975 18 0 13.9703 0 9C0 4.02975 4.02975 0 9 0C13.9703 0 18 4.02975 18 9C18 10.8638 17.433 12.5955 16.4632 14.0317ZM9 2C5.13425 2 2 5.13425 2 9C2 12.8658 5.13425 16 9 16C12.8658 16 16 12.8658 16 9C16 5.13425 12.8658 2 9 2Z"
				fill="currentColor"
			/>
		) : (
			<path
				fill-rule="evenodd"
				clip-rule="evenodd"
				d="M16.4632 14.0317L22.5907 20.1593C23.4697 21.0375 23.4697 22.4625 22.5907 23.3407C22.1512 23.7803 21.576 24 21 24C20.424 24 19.8488 23.7803 19.4093 23.3407L13.0822 17.0138C11.856 17.64 10.4715 18 9 18C4.02975 18 0 13.9703 0 9C0 4.02975 4.02975 0 9 0C13.9703 0 18 4.02975 18 9C18 10.8638 17.433 12.5955 16.4632 14.0317ZM9 2C5.13425 2 2 5.13425 2 9C2 12.8658 5.13425 16 9 16C12.8658 16 16 12.8658 16 9C16 5.13425 12.8658 2 9 2Z"
				fill="currentColor"
			/>
		)}
	</Icon>
);
