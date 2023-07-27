import { Icon, IconProps } from './Icon';

export const MapIcon = ({
	assistiveText = 'Map',
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
				d="M23.52 19.4667C23.8 19.3733 24 19.1333 24 18.8267V2.66667C24 2.29333 23.7067 2 23.3333 2L23.12 2.04L16 5L8 2L0.48 4.53333C0.2 4.62667 0 4.86667 0 5.17333V21.3333C0 21.7067 0.293333 22 0.666667 22L0.88 21.96L8 19L16 22L23.52 19.4667ZM16 19.864L8 16.864V4.136L16 7.136V19.864Z"
				fill="currentColor"
			/>
		) : (
			<path
				fill-rule="evenodd"
				clip-rule="evenodd"
				d="M23.52 19.4667C23.8 19.3733 24 19.1333 24 18.8267V2.66667C24 2.29333 23.7067 2 23.3333 2L23.12 2.04L16 5L8 2L0.48 4.53333C0.2 4.62667 0 4.86667 0 5.17333V21.3333C0 21.7067 0.293333 22 0.666667 22L0.88 21.96L8 19L16 22L23.52 19.4667ZM18 19.2158L22 17.8683V4.67157L18 6.33449V19.2158ZM16 7.136V19.864L8 16.864V4.136L16 7.136ZM2 6.13172L6 4.7842V17.6655L2 19.3284V6.13172Z"
				fill="currentColor"
			/>
		)}
	</Icon>
);
