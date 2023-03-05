import { GEL, jsx } from '@westpac/core';
import { TickIcon, InfoIcon, AlertIcon, HouseIcon } from '@westpac/icon';
import { Alert } from '@westpac/alert';

const CloseBtnOverride = ({ onClose, state: _, ...rest }) => (
	<button onClick={() => onClose()} {...rest}>
		Close <HouseIcon />
	</button>
);

const HeadingOverride = ({ children }) => (
	<h3
		css={{
			margin: '0 0 0.5rem 0',
			color: 'red',
		}}
	>
		{children}
	</h3>
);

const IconOverride = ({ state: { look, icon }, ...rest }) => {
	const iconMap = {
		success: TickIcon,
		info: InfoIcon,
		warning: AlertIcon,
		danger: AlertIcon,
		system: HouseIcon,
	};
	const Tag = icon ? icon : iconMap[look];

	if (icon === null) {
		return null;
	}

	return <Tag {...rest} />;
};

function Example({ brand }) {
	const overridesWithTokens = { ...brand };
	overridesWithTokens['@westpac/alert'] = {
		Alert: {
			styles: (styles) => ({
				...styles,
				outline: '1px solid red',
			}),
		},
		Icon: {
			component: IconOverride,
			styles: (styles, { look }) => ({
				...styles,
				outline: `2px solid ${look === 'info' ? 'red' : 'black'}`,
			}),
		},
		CloseBtn: {
			component: CloseBtnOverride,
		},
		Heading: {
			component: HeadingOverride,
		},
	};

	return (
		<GEL brand={overridesWithTokens}>
			<h2>With overrides applied</h2>
			<Alert>
				This is a default alert. <a href="#">Link</a>
			</Alert>

			<Alert look="system" heading="System Error 8942" dismissible>
				The server is no responding. Please try again later. Sorry for the inconvenience. Hey neato,
				I can be closed. <a href="#">Link</a>
			</Alert>

			<hr />

			<h3>Alert heading</h3>
			<Alert heading="This is a Heading">
				This alert needs your attention, but it’s not super important. Lorem ipsum dolor sit amet,
				consectetur adipisicing elit. Quo dolor provident quasi nisi officia tempore fuga autem,
				animi iste molestiae, qui omnis doloribus aliquid ipsam rem fugiat veniam voluptatem
				accusamus! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est, unde quis,
				molestias nisi quae voluptates nemo quaerat nihil, consequuntur nobis ratione rerum
				asperiores eveniet dicta maiores quia nostrum. Pariatur, natus. Lorem ipsum dolor sit amet,
				consectetur adipisicing elit. Fuga, magnam illum harum consequatur, quo sunt impedit quam
				minus eaque saepe voluptas corrupti voluptatum, sapiente dolor sequi tempore maxime? Neque,
				obcaecati. <a href="#">Link</a>
			</Alert>

			<hr />

			<h3>Alert heading</h3>
			<Alert look="success" dismissible>
				<strong>Well done!</strong> You successfully read this important alert message. Hey neato, I
				can be closed. <a href="#">Link</a>
			</Alert>

			<hr />

			<h2>With overrides and component overrides</h2>
			<Alert
				overrides={{
					Icon: {
						styles: (styles) => ({
							...styles,
							outline: '3px dotted green',
						}),
					},
				}}
			>
				This is a default alert. <a href="#">Link</a>
			</Alert>
		</GEL>
	);
}

export default Example;
