/** @jsx jsx */
import { Fragment } from 'react';
import { useRouter } from 'next/router';
import { jsx } from '@westpac/core';

const Example = () => {
	const router = useRouter();
	const codeParam = router.query.code;
	return (
		<Fragment>
			<pre>{codeParam}</pre>
		</Fragment>
	);
};
export default Example;
