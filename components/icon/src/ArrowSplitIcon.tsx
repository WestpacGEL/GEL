import { Icon, IconProps } from './Icon';

export const ArrowSplitIcon = ({
	assistiveText = 'ArrowSplit',
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
				d="M8 2H0V10L2.58411 7.41589L10 14.8255V24H14V14.8255L21.4159 7.41589L24 10V2H16L18.5875 4.58747L12 11.1693L5.41253 4.58747L8 2Z"
				fill="currentColor"
			/>
		) : (
			<path
				d="M8 2H0V10L2.58411 7.41589L10 14.8255V24H14V14.8255L21.4159 7.41589L24 10V2H16L18.5875 4.58747L12 11.1693L5.41253 4.58747L8 2Z"
				fill="currentColor"
			/>
		)}
	</Icon>
);
