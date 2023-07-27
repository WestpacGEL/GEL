import { Fragment } from 'react';
import { Icon, IconProps } from './Icon';

export const ContentCopyIcon = ({
	assistiveText = 'ContentCopy',
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
					d="M5 0C3.34315 0 2 1.34315 2 3V18H4V3C4 2.44772 4.44772 2 5 2H16V0H5Z"
					fill="currentColor"
				/>
				<path
					d="M8 4C6.89543 4 6 4.89543 6 6V22C6 23.1046 6.89543 24 8 24H20C21.1046 24 22 23.1046 22 22V6C22 4.89543 21.1046 4 20 4H8Z"
					fill="currentColor"
				/>
			</Fragment>
		) : (
			<path
				fill-rule="evenodd"
				clip-rule="evenodd"
				d="M16 0H4C2.9 0 2 0.9 2 2V18H4V2H16V0ZM19.8667 4H8.13333C6.96 4 6 5 6 6.22222V21.7778C6 23 6.96 24 8.13333 24H19.8667C21.04 24 22 23 22 21.7778V6.22222C22 5 21.04 4 19.8667 4ZM8 22H20V6H8V22Z"
				fill="currentColor"
			/>
		)}
	</Icon>
);
