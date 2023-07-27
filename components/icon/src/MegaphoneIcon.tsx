import { Fragment } from 'react';
import { Icon, IconProps } from './Icon';

export const MegaphoneIcon = ({
	assistiveText = 'Megaphone',
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
					d="M6 7.52395L19.6286 2.07251C20.2855 1.80976 21 2.29352 21 3.00099V20.0469C21 20.7544 20.2855 21.2381 19.6286 20.9754L8 16.324V21.524C8 22.0762 7.55228 22.524 7 22.524C6.44772 22.524 6 22.0762 6 21.524V7.52395Z"
					fill="currentColor"
				/>
				<path
					d="M2 7.52395C0.895431 7.52395 0 8.41938 0 9.52395V13.524C0 14.6285 0.895431 15.524 2 15.524H4V7.52395H2Z"
					fill="currentColor"
				/>
				<path
					d="M23 9.52395H22V13.524H23C23.5523 13.524 24 13.0762 24 12.524V10.524C24 9.97167 23.5523 9.52395 23 9.52395Z"
					fill="currentColor"
				/>
			</Fragment>
		) : (
			<path
				fill-rule="evenodd"
				clip-rule="evenodd"
				d="M8 14.1699L19 18.5699V4.47802L8 8.87802V14.1699ZM8 21.524C8 22.0762 7.55228 22.524 7 22.524C6.44772 22.524 6 22.0762 6 21.524V7.52395L19.6286 2.07251C20.2855 1.80976 21 2.29352 21 3.00099V20.0469C21 20.7544 20.2855 21.2381 19.6286 20.9754L8 16.324V21.524ZM2 7.52393C0.895431 7.52393 0 8.41936 0 9.52393V13.5239C0 14.6285 0.895431 15.5239 2 15.5239H4V7.52393H2ZM22 9.52393H23C23.5523 9.52393 24 9.97164 24 10.5239V12.5239C24 13.0762 23.5523 13.5239 23 13.5239H22V9.52393Z"
				fill="currentColor"
			/>
		)}
	</Icon>
);
