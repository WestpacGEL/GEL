import { GEL, jsx } from '@westpac/core';
import { Button } from '@westpac/button';
import {
	HouseIcon,
	AlertIcon,
	ChatIcon,
	AccessibilityIcon,
	ArrowLeftIcon,
	ArrowRightIcon,
	StarRateIcon,
	CloseIcon,
} from '@westpac/icon';

function Example({ brand }) {
	return (
		<GEL brand={brand}>
			<h2>Icon after</h2>
			<h3>Look</h3>
			<Button iconAfter={HouseIcon}>Default</Button>{' '}
			<Button look="primary" iconAfter={HouseIcon}>
				Primary
			</Button>{' '}
			<Button look="hero" iconAfter={HouseIcon}>
				Hero
			</Button>{' '}
			<Button look="faint" iconAfter={HouseIcon}>
				Faint
			</Button>{' '}
			<Button look="link" iconAfter={HouseIcon}>
				Link
			</Button>{' '}
			<Button look="unstyled" iconAfter={HouseIcon}>
				Unstyled
			</Button>
			<br />
			<br />
			<Button soft iconAfter={HouseIcon}>
				Default
			</Button>{' '}
			<Button look="primary" soft iconAfter={HouseIcon}>
				Primary
			</Button>{' '}
			<Button look="hero" soft iconAfter={HouseIcon}>
				Hero
			</Button>{' '}
			<Button look="faint" soft iconAfter={HouseIcon}>
				Faint
			</Button>{' '}
			<h3>Size</h3>
			<Button size="small" iconAfter={HouseIcon}>
				Small
			</Button>{' '}
			<Button size="medium" iconAfter={AlertIcon}>
				Medium
			</Button>{' '}
			<Button size="large" iconAfter={ChatIcon}>
				Large
			</Button>{' '}
			<Button size="xlarge" iconAfter={AccessibilityIcon}>
				Extra large
			</Button>
			<br />
			<br />
			<Button soft size="small" iconAfter={HouseIcon}>
				Small
			</Button>{' '}
			<Button soft size="medium" iconAfter={AlertIcon}>
				Medium
			</Button>{' '}
			<Button soft size="large" iconAfter={ChatIcon}>
				Large
			</Button>{' '}
			<Button soft size="xlarge" iconAfter={AccessibilityIcon}>
				Extra large
			</Button>
			<h3>Block</h3>
			<Button size="xlarge" iconAfter={ArrowRightIcon} block>
				Extra large block
			</Button>
			<br />
			<Button size="small" iconAfter={ArrowRightIcon} block justify>
				Small block justify
			</Button>
			<br />
			<Button size="medium" iconAfter={ArrowRightIcon} block justify>
				Medium block justify
			</Button>
			<br />
			<Button size="large" iconAfter={ArrowRightIcon} block justify>
				Large block justify
			</Button>
			<br />
			<Button size="xlarge" iconAfter={ArrowRightIcon} block justify>
				Extra large block justify
			</Button>
			<br />
			<br />
			<Button soft size="xlarge" iconAfter={ArrowRightIcon} block>
				Extra large block
			</Button>
			<br />
			<Button soft size="small" iconAfter={ArrowRightIcon} block justify>
				Small block justify
			</Button>
			<br />
			<Button soft size="medium" iconAfter={ArrowRightIcon} block justify>
				Medium block justify
			</Button>
			<br />
			<Button soft size="large" iconAfter={ArrowRightIcon} block justify>
				Large block justify
			</Button>
			<br />
			<Button soft size="xlarge" iconAfter={ArrowRightIcon} block justify>
				Extra large block justify
			</Button>
			<hr />
			<h2>Icon before</h2>
			<h3>Look</h3>
			<Button iconBefore={HouseIcon}>Default</Button>{' '}
			<Button look="primary" iconBefore={HouseIcon}>
				Default
			</Button>{' '}
			<Button look="hero" iconBefore={HouseIcon}>
				Hero
			</Button>{' '}
			<Button look="faint" iconBefore={HouseIcon}>
				Faint
			</Button>{' '}
			<Button look="link" iconBefore={HouseIcon}>
				Link
			</Button>{' '}
			<Button look="unstyled" iconBefore={HouseIcon}>
				Unstyled
			</Button>{' '}
			<br />
			<br />
			<Button soft iconBefore={HouseIcon}>
				Default
			</Button>{' '}
			<Button look="primary" soft iconBefore={HouseIcon}>
				Default
			</Button>{' '}
			<Button look="hero" soft iconBefore={HouseIcon}>
				Hero
			</Button>{' '}
			<Button look="faint" soft iconBefore={HouseIcon}>
				Faint
			</Button>{' '}
			<h3>Size</h3>
			<Button size="small" iconBefore={HouseIcon}>
				Small
			</Button>{' '}
			<Button size="medium" iconBefore={AlertIcon}>
				Medium
			</Button>{' '}
			<Button size="large" iconBefore={ChatIcon}>
				Large
			</Button>{' '}
			<Button size="xlarge" iconBefore={AccessibilityIcon}>
				Extra large
			</Button>
			<br />
			<br />
			<Button soft size="small" iconBefore={HouseIcon}>
				Small
			</Button>{' '}
			<Button soft size="medium" iconBefore={AlertIcon}>
				Medium
			</Button>{' '}
			<Button soft size="large" iconBefore={ChatIcon}>
				Large
			</Button>{' '}
			<Button soft size="xlarge" iconBefore={AccessibilityIcon}>
				Extra large
			</Button>
			<h3>Block</h3>
			<Button size="xlarge" iconBefore={ArrowLeftIcon} block>
				Extra large block
			</Button>
			<br />
			<Button size="small" iconBefore={ArrowLeftIcon} block justify>
				Small block justify
			</Button>
			<br />
			<Button size="medium" iconBefore={ArrowLeftIcon} block justify>
				Medium block justify
			</Button>
			<br />
			<Button size="large" iconBefore={ArrowLeftIcon} block justify>
				Large block justify
			</Button>
			<br />
			<Button size="xlarge" iconBefore={ArrowLeftIcon} block justify>
				Extra large block justify
			</Button>
			<br />
			<br />
			<Button soft size="xlarge" iconBefore={ArrowLeftIcon} block>
				Extra large block
			</Button>
			<br />
			<Button soft size="small" iconBefore={ArrowLeftIcon} block justify>
				Small block justify
			</Button>
			<br />
			<Button soft size="medium" iconBefore={ArrowLeftIcon} block justify>
				Medium block justify
			</Button>
			<br />
			<Button soft size="large" iconBefore={ArrowLeftIcon} block justify>
				Large block justify
			</Button>
			<br />
			<Button soft size="xlarge" iconBefore={ArrowLeftIcon} block justify>
				Extra large block justify
			</Button>
			<hr />
			<h2>Icon only (no text)</h2>
			<h3>Look</h3>
			<Button look="primary" iconAfter={CloseIcon} assistiveText="Close" />{' '}
			<Button look="hero" iconAfter={CloseIcon} assistiveText="Close" />{' '}
			<Button look="faint" iconAfter={CloseIcon} assistiveText="Close" />{' '}
			<Button look="link" iconAfter={CloseIcon} assistiveText="Close" />{' '}
			<Button look="unstyled" iconAfter={CloseIcon} assistiveText="Close" />
			<br />
			<br />
			<Button look="primary" soft iconAfter={CloseIcon} assistiveText="Close" />{' '}
			<Button look="hero" soft iconAfter={CloseIcon} assistiveText="Close" />{' '}
			<Button look="faint" soft iconAfter={CloseIcon} assistiveText="Close" /> <h3>Size</h3>
			<Button size="small" iconBefore={StarRateIcon} assistiveText="Star" />{' '}
			<Button size="medium" iconBefore={StarRateIcon} assistiveText="Star" />{' '}
			<Button size="large" iconBefore={StarRateIcon} assistiveText="Star" />{' '}
			<Button size="xlarge" iconBefore={StarRateIcon} assistiveText="Star" /> <br />
			<br />
			<Button soft size="small" iconBefore={StarRateIcon} assistiveText="Star" />{' '}
			<Button soft size="medium" iconBefore={StarRateIcon} assistiveText="Star" />{' '}
			<Button soft size="large" iconBefore={StarRateIcon} assistiveText="Star" />{' '}
			<Button soft size="xlarge" iconBefore={StarRateIcon} assistiveText="Star" /> <h3>Block</h3>
			<Button size="xlarge" iconBefore={StarRateIcon} block assistiveText="Star" />
			<br />
			<Button soft size="xlarge" iconBefore={StarRateIcon} block assistiveText="Star" />
		</GEL>
	);
}

export default Example;
