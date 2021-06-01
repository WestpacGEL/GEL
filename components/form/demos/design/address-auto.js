/** @jsx jsx */

import { jsx, useBrand } from '@westpac/core';
import { Fragment } from 'react';
import { Autocomplete } from '@westpac/autocomplete';
import { Field } from '@westpac/form';
import { TextInput } from '@westpac/text-input';
import { Playground } from '../../../../website/src/components/playground/macro';

const Link = (props) => {
	const { COLORS } = useBrand();
	return <a href="#" css={{ color: COLORS.primary }} {...props} />;
};

const Hint = () => {
	const { COLORS } = useBrand();
	return (
		<Fragment>
			Not a PO Box
			<br />
			Start typing your address and select from the list or you can{' '}
			<Link>enter your adress maually</Link>
		</Fragment>
	);
};

const Footer = (props) => (
	<Fragment {...props}>
		Can't find your address? <Link>Enter it manually</Link>
	</Fragment>
);

const Demo = ({ context, showCode, showDemo }) => {
	return (
		<Playground context={context} showCode={showCode} showDemo={showDemo}>
			<Field label="Text input example" hint={Hint}>
				<Autocomplete footer={Footer} />
			</Field>
			{/* FORK GOES HERE */}
		</Playground>
	);
};

export default Demo;
