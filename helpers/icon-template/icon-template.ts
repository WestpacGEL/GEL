export const iconTemplate = (
	name: string,
	filledSVG: string,
	outlinedSVG: string,
	addFragment: boolean
) => `import React${addFragment ? ', { Fragment }' : ''} from 'react';
import { propTypes, Icon } from './Icon';

export const ${name}Icon = ({
	assistiveText = '${name}',
	copyrightYear = '2023',
	size = 'medium',
	look = 'filled',
	...props
}) => (
	<Icon
		icon="TestIcon"
		assistiveText={assistiveText}
		copyrightYear={copyrightYear}
		size={size}
		{...props}
	>
		{look === 'filled' ? ${filledSVG} : ${outlinedSVG}}
	</Icon>
);

${name}Icon.propTypes = propTypes;`;
