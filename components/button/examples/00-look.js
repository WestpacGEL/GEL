/** @jsx jsx */

import { GEL, jsx } from '@westpac/core';
import { Button } from '@westpac/button';

import {
	HouseIcon,
	AlertIcon,
	ChatIcon,
	AccessibilityIcon,
	ArrowLeftIcon,
	ArrowRightIcon,
	StarIcon,
} from '@westpac/icon';

function Example({ brand }) {
	return (
		<GEL brand={brand}>
			<h2>Default</h2>
			<Button>Default standard</Button> <Button soft>Default soft</Button>
			<hr />
			<h2>Standard</h2>
			<Button look="primary">Primary standard</Button>{' '}
			<Button look="primary" soft>
				Primary soft
			</Button>{' '}
			<Button look="primary" size="small">
				Primary small
			</Button>{' '}
			<Button look="primary" size="medium">
				Primary medium
			</Button>{' '}
			<Button look="primary" size="large">
				Primary large
			</Button>{' '}
			<div css={{ marginTop: '0.5rem' }}>
				<Button look="primary" block iconAfter={ArrowRightIcon} justify>
					Primary block
				</Button>
			</div>{' '}
			<br />
			<br />
			<Button look="hero">Primary standard</Button>{' '}
			<Button look="hero" soft>
				Primary soft
			</Button>{' '}
			<Button look="hero" size="small">
				Primary small
			</Button>{' '}
			<Button look="hero" size="medium">
				Primary medium
			</Button>{' '}
			<Button look="hero" size="large">
				Primary large
			</Button>{' '}
			<div css={{ marginTop: '0.5rem' }}>
				<Button look="hero" block iconAfter={ArrowRightIcon} justify>
					Primary block
				</Button>
			</div>{' '}
			<br />
			<br />
			<Button look="faint">Primary standard</Button>{' '}
			<Button look="faint" soft>
				Primary soft
			</Button>{' '}
			<Button look="faint" size="small">
				Primary small
			</Button>{' '}
			<Button look="faint" size="medium">
				Primary medium
			</Button>{' '}
			<Button look="faint" size="large">
				Primary large
			</Button>{' '}
			<div css={{ marginTop: '0.5rem' }}>
				<Button look="faint" block iconAfter={ArrowRightIcon} justify>
					Primary block
				</Button>
			</div>{' '}
			<br />
			<br />
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
