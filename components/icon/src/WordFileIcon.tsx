import { Fragment } from 'react';
import { Icon, IconProps } from './Icon';

export const WordFileIcon = ({
	assistiveText = 'WordFile',
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
				d="M2 2C2 0.89543 2.89543 0 4 0H16L22 6V22C22 23.1046 21.1046 24 20 24H4C2.89543 24 2 23.1046 2 22V2ZM16 2L20 6H16V2ZM14.5698 10V11.7941H15.4595L14.4339 16.2124L13.0987 10H10.9548L9.40319 16.2124L8.24111 10H6L8.27459 20H10.4648L11.999 14.087L13.3723 20H15.3919L18 10H14.5698Z"
				fill="currentColor"
			/>
		) : (
			<Fragment>
				<path
					d="M14.5698 11.7941V10H18L15.3919 20H13.3723L11.999 14.087L10.4648 20H8.27459L6 10H8.24111L9.40319 16.2124L10.9548 10H13.0987L14.4339 16.2124L15.4595 11.7941H14.5698Z"
					fill="currentColor"
				/>
				<path
					fill-rule="evenodd"
					clip-rule="evenodd"
					d="M2 2C2 0.89543 2.89543 0 4 0H16L22 6V22C22 23.1046 21.1046 24 20 24H4C2.89543 24 2 23.1046 2 22V2ZM4 2H16V6H20V22H4V2Z"
					fill="currentColor"
				/>
			</Fragment>
		)}
	</Icon>
);
