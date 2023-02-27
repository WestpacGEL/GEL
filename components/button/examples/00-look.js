import { GEL, jsx } from '@westpac/core';
import { Button } from '@westpac/button';

function Example({ brand }) {
	return (
		<GEL brand={brand}>
			<h2>Default</h2>
			<Button>Default standard</Button> <Button soft>Default soft</Button>
			<hr />
			<h2>Standard</h2>
			<Button look="primary">Primary standard</Button> <Button look="hero">Hero standard</Button>{' '}
			<Button look="faint">Faint standard</Button> <Button look="link">Link</Button>{' '}
			<Button look="unstyled">Unstyled</Button>
			<hr />
			<h2>Soft</h2>
			<Button look="primary" soft>
				Primary soft
			</Button>{' '}
			<Button look="hero" soft>
				Hero soft
			</Button>{' '}
			<Button look="faint" soft>
				Faint soft
			</Button>
		</GEL>
	);
}

export default Example;
