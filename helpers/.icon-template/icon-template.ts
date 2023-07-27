export const iconTemplate = (
	name: string,
	assistiveText: string,
	filledSVG: string,
	outlinedSVG: string,
	addFragment: boolean
) => `${addFragment ? `import { Fragment } from 'react';` : ''}
import { Icon, IconProps } from './Icon';

export const ${name}Icon = ({
	assistiveText = '${assistiveText}',
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
		{look === 'filled' ? ${filledSVG} : ${outlinedSVG}}
	</Icon>
);`;
