import { Fragment } from 'react';
import { Icon, IconProps } from './Icon';

export const SimCardIcon = ({
	assistiveText = 'SimCard',
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
				d="M18 0H8L2 7V22C2 23.1 2.9 24 4 24H18C19.1 24 20 23.1 20 22V2C20 0.9 19.1 0 18 0ZM8 14H6V8H8V14ZM10 20H12V12H10V20ZM12 10H10V8H12V10ZM14 20H16V14H14V20ZM8 20H6V16H8V20ZM14 12H16V8H14V12Z"
				fill="currentColor"
			/>
		) : (
			<Fragment>
				<path d="M8 14H6V8H8V14Z" fill="currentColor" />
				<path d="M10 20H12V12H10V20Z" fill="currentColor" />
				<path d="M12 10H10V8H12V10Z" fill="currentColor" />
				<path d="M14 20H16V14H14V20Z" fill="currentColor" />
				<path d="M8 20H6V16H8V20Z" fill="currentColor" />
				<path d="M14 12H16V8H14V12Z" fill="currentColor" />
				<path
					fill-rule="evenodd"
					clip-rule="evenodd"
					d="M2 7L8 0H18C19.1 0 20 0.9 20 2V22C20 23.1 19.1 24 18 24H4C2.9 24 2 23.1 2 22V7ZM8.91987 2L4 7.73985V22H18V2H8.91987Z"
					fill="currentColor"
				/>
			</Fragment>
		)}
	</Icon>
);
