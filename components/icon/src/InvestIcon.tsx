import { Icon, IconProps } from './Icon';

export const InvestIcon = ({
	assistiveText = 'Invest',
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
				d="M12.25 13.4994L21.731 3.731L24 6V0H18L20.3166 2.31663L12.2288 10.6497L5.63134 4.05229L0 9.68363V12.5121L5.63134 6.88071L12.25 13.4994ZM22 24H18V10H22V24ZM14 24H10V16H14V24ZM2 24H6V14H2V24Z"
				fill="currentColor"
			/>
		) : (
			<path
				fill-rule="evenodd"
				clip-rule="evenodd"
				d="M12.25 13.4994L21.731 3.731L24 6V0H18L20.3166 2.31663L12.2288 10.6497L5.63134 4.05229L0 9.68363V12.5121L5.63134 6.88071L12.25 13.4994ZM22 24H20V10H22V24ZM13 24H11V16H13V24ZM2 24H4V14H2V24Z"
				fill="currentColor"
			/>
		)}
	</Icon>
);
