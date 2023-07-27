import { Fragment } from 'react';
import { Icon, IconProps } from './Icon';

export const ImageSquareIcon = ({
	assistiveText = 'ImageSquare',
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
				d="M24 21.6V2.4C24 1.07452 23.1046 0 22 0H2C0.89543 0 0 1.07452 0 2.4V21.6C0 22.9255 0.89543 24 2 24H22C23.1046 24 24 22.9255 24 21.6ZM18 7.5C18 8.88071 16.8807 10 15.5 10C14.1193 10 13 8.88071 13 7.5C13 6.11929 14.1193 5 15.5 5C16.8807 5 18 6.11929 18 7.5ZM13.9767 18.3256L9.5 11L4 20H20L16.5 14L13.9767 18.3256Z"
				fill="currentColor"
			/>
		) : (
			<Fragment>
				<path d="M13.9767 18.3256L9.5 11L4 20H20L16.5 14L13.9767 18.3256Z" fill="currentColor" />
				<path
					d="M15.5 10C16.8807 10 18 8.88071 18 7.5C18 6.11929 16.8807 5 15.5 5C14.1193 5 13 6.11929 13 7.5C13 8.88071 14.1193 10 15.5 10Z"
					fill="currentColor"
				/>
				<path
					fill-rule="evenodd"
					clip-rule="evenodd"
					d="M24 2.4V21.6C24 22.9255 23.1046 24 22 24H2C0.89543 24 0 22.9255 0 21.6V2.4C0 1.07452 0.89543 0 2 0H22C23.1046 0 24 1.07452 24 2.4ZM22 2H2V22H22V2Z"
					fill="currentColor"
				/>
			</Fragment>
		)}
	</Icon>
);
