import { Fragment } from 'react';
import { Icon, IconProps } from './Icon';

export const ArchiveBoxIcon = ({
	assistiveText = 'ArchiveBox',
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
					d="M3 0C1.89543 0 1 0.89543 1 2V6H23V2C23 0.895431 22.1046 0 21 0H3Z"
					fill="currentColor"
				/>
				<path
					fill-rule="evenodd"
					clip-rule="evenodd"
					d="M2 8H22V22C22 23.1046 21.1046 24 20 24H4C2.89543 24 2 23.1046 2 22V8ZM8 12H16V15H8V12Z"
					fill="currentColor"
				/>
			</Fragment>
		) : (
			<Fragment>
				<path d="M16 12H8V15H16V12Z" fill="currentColor" />
				<path
					fill-rule="evenodd"
					clip-rule="evenodd"
					d="M1 8H2V22C2 23.1046 2.89543 24 4 24H20C21.1046 24 22 23.1046 22 22V8H23V2C23 0.895431 22.1046 0 21 0H3C1.89543 0 1 0.895431 1 2V8ZM21 2H3V6H21L21 2ZM4 8H20V22H4V8Z"
					fill="currentColor"
				/>
			</Fragment>
		)}
	</Icon>
);
