import { Fragment } from 'react';
import { Icon, IconProps } from './Icon';

export const UploadIcon = ({
	assistiveText = 'Upload',
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
				d="M18.9188 10.0699C18.9722 9.72108 19 9.36378 19 9C19 5.13401 15.866 2 12 2C8.37742 2 5.39755 4.75178 5.03667 8.27907C2.12636 9.12781 0 11.8156 0 15C0 18.866 3.13401 22 7 22H18C21.3137 22 24 19.3137 24 16C24 12.9987 21.7963 10.5121 18.9188 10.0699ZM14 18V14H17L12 9L7 14H10V18H14Z"
				fill="currentColor"
			/>
		) : (
			<Fragment>
				<path d="M14 18V14H17L12 9L7 14H10V18H14Z" fill="currentColor" />
				<path
					fill-rule="evenodd"
					clip-rule="evenodd"
					d="M0 15C0 11.8156 2.12636 9.12781 5.03667 8.27907C5.39755 4.75178 8.37742 2 12 2C15.866 2 19 5.13401 19 9C19 9.36378 18.9722 9.72108 18.9188 10.0699C21.7963 10.5121 24 12.9987 24 16C24 19.3137 21.3137 22 18 22H7C3.13401 22 0 18.866 0 15ZM16.9419 9.7667L16.6388 11.743L18.615 12.0467C20.5316 12.3412 22 14.001 22 16C22 18.2091 20.2091 20 18 20H7C4.23858 20 2 17.7614 2 15C2 12.7284 3.51654 10.8057 5.59661 10.1991L6.88924 9.82212L7.02629 8.48263C7.28384 5.96527 9.41368 4 12 4C14.7614 4 17 6.23858 17 9C17 9.26193 16.98 9.51787 16.9419 9.7667Z"
					fill="currentColor"
				/>
			</Fragment>
		)}
	</Icon>
);
