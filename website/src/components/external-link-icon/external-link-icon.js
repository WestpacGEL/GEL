import { jsx } from '@westpac/core';
import { NewWindowIcon } from '@westpac/icon/NewWindowIcon';

export const ExternalLinkIcon = (props) => (
	<NewWindowIcon
		size="xsmall"
		color="inherit"
		assistiveText=", opens in a new tab"
		css={{ position: 'relative', marginLeft: '0.3em', top: '-0.125rem' }}
		{...props}
	/>
);
