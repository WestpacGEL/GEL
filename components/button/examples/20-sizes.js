import { GEL, jsx } from '@westpac/core';
import { Button } from '@westpac/button';

function Example({ brand }) {
	return (
		<GEL brand={brand}>
			<h2>Small</h2>
			<Button look="primary" size="small">
				Primary
			</Button>{' '}
			<Button look="hero" size="small">
				Hero
			</Button>{' '}
			<Button look="faint" size="small">
				Faint
			</Button>{' '}
			<Button look="link" size="small">
				Link
			</Button>
			<br />
			<br />
			<Button look="primary" size="small" soft>
				Primary
			</Button>{' '}
			<Button look="hero" size="small" soft>
				Hero
			</Button>{' '}
			<Button look="faint" size="small" soft>
				Faint
			</Button>{' '}
			<hr />
			<h2>Medium</h2>
			<Button look="primary" size="medium">
				Primary
			</Button>{' '}
			<Button look="hero" size="medium">
				Hero
			</Button>{' '}
			<Button look="faint" size="medium">
				Faint
			</Button>{' '}
			<Button look="link" size="medium">
				Link
			</Button>
			<br />
			<br />
			<Button look="primary" size="medium" soft>
				Primary
			</Button>{' '}
			<Button look="hero" size="medium" soft>
				Hero
			</Button>{' '}
			<Button look="faint" size="medium" soft>
				Faint
			</Button>{' '}
			<hr />
			<h2>Large</h2>
			<Button look="primary" size="large">
				Primary
			</Button>{' '}
			<Button look="hero" size="large">
				Hero
			</Button>{' '}
			<Button look="faint" size="large">
				Faint
			</Button>{' '}
			<Button look="link" size="large">
				Link
			</Button>
			<br />
			<br />
			<Button look="primary" size="large" soft>
				Primary
			</Button>{' '}
			<Button look="hero" size="large" soft>
				Hero
			</Button>{' '}
			<Button look="faint" size="large" soft>
				Faint
			</Button>{' '}
			<hr />
			<h2>Extra large</h2>
			<Button look="primary" size="xlarge">
				Primary
			</Button>{' '}
			<Button look="hero" size="xlarge">
				Hero
			</Button>{' '}
			<Button look="faint" size="xlarge">
				Faint
			</Button>{' '}
			<Button look="link" size="xlarge">
				Link
			</Button>
			<br />
			<br />
			<Button look="primary" size="xlarge" soft>
				Primary
			</Button>{' '}
			<Button look="hero" size="xlarge" soft>
				Hero
			</Button>{' '}
			<Button look="faint" size="xlarge" soft>
				Faint
			</Button>{' '}
		</GEL>
	);
}

export default Example;
