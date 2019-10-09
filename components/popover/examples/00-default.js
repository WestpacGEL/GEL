import React from 'react';
import { Popover } from '../src';
import { Box } from './_utils';

const content =
	'Hello vivamus sagittis lacus vel augue laoreet rutrum faucibus. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt laboriosam, mollitia magnam ad magni consequuntur hic et quos optio corrupti praesentium veniam aspernatur minima aperiam ut quas, possimus non architecto. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut animi velit in? Suscipit nostrum itaque voluptatibus dolorem qui soluta nobis modi officia incidunt eos dolores atque, unde error delectus officiis.';
export default () => (
	<>
		<Popover title="Popover Title" content={content} />
		<div style={{ height: '100vh' }} />
	</>
);
