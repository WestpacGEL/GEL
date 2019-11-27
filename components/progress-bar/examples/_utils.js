/** @jsx jsx */

import { jsx } from '@westpac/core';
import { Button } from '@westpac/button';

export const StyledButton = props => (
	<Button css={{ padding: '0 2rem', margin: '0 0.5rem' }} {...props} />
);
