const createEmotionServer = require('@emotion/server/create-instance').default;
const { createElement, cloneElement, Fragment } = require('react');
const { renderToStaticMarkup } = require('react-dom/server');
const createCache = require('@emotion/cache').default;
const { CacheProvider } = require('@emotion/react');
const { GEL } = require('@westpac/core');
const archiver = require('archiver');
const pkgs = {
	'@westpac/icon': require('@westpac/icon'),
	'@westpac/symbol': require('@westpac/symbol'),
	'@westpac/pictogram': require('@westpac/pictogram'),
};
// I tried to automate this but it would be much harder and since this is already sprinkled around the repo
// I just see this as another area you have to edit a brand (For when you add or remove one)
// Other files I found where this has been hard-coded:
// - /helpers/example/components/brands.js
// - /website/src/components/providers/brand-switcher/index.js
const brands = {
	BOM: require('@westpac/bom'),
	BSA: require('@westpac/bsa'),
	BTFG: require('@westpac/btfg'),
	STG: require('@westpac/stg'),
	WBC: require('@westpac/wbc'),
	WBG: require('@westpac/wbg'),
};

/**
 * Our POST handler
 */
export default async function handler(request, response) {
	if (request.method === 'POST') {
		const { brand, pkg, assets, mode } = sanitize(request.body);
		const thisPkg = pkgs[pkg];

		// prepare ZIP file in memory
		const archive = archiver('zip');
		archive
			.on('warning', (error) => {
				if (error.code === 'ENOENT') {
					response.status(500).send({
						error: `We failed to create the download with an error: ${JSON.stringify(
							error,
							null,
							2
						)}`,
					});
				} else {
					response.status(500).send({
						error: `We failed to create the download with an error: ${JSON.stringify(
							error,
							null,
							2
						)}`,
					});
				}
			})
			.on('error', (error) => {
				response.status(500).send({
					error: `We failed to create the download with an error: ${JSON.stringify(
						error,
						null,
						2
					)}`,
				});
			})
			.pipe(response);

		// we need to create a divider to be able to remove the GEL core wrapper from the output later
		const wrapper = { start: '', end: '' };
		try {
			const { html } = await extractMarkup({
				Component: () => createElement('divider', {}, '==='),
				componentName: '-divider-',
				GEL,
				brand: brands[brand],
			});
			const splitHtml = html.split('<divider>===</divider>');
			wrapper.start = splitHtml[0];
			wrapper.end = splitHtml[1];
		} catch (error) {
			console.error(error);
			response.status(500).send(error);
		}

		// iterate over all assets and compile them and add them into archive
		await Promise.all(
			assets.map(async (asset) => {
				let contents = '';
				try {
					const { html } = await extractMarkup({
						Component: thisPkg[asset],
						componentName: asset,
						GEL,
						brand: brands[brand],
						mode,
					});
					contents = html.replace(wrapper.start, '').replace(wrapper.end, '');
				} catch (error) {
					console.error(error);
					response.status(500).send(error);
				}
				archive.append(contents, { name: `${pkg.replace('@westpac/', '')}/${asset}.svg` }, 'utf-8');
			})
		);

		response.writeHead(200, {
			'Content-Type': 'application/zip',
			'Content-disposition': `attachment; filename=GEL-${brand}-svgs.zip`,
		});

		archive.finalize();
	}
}

/**
 * Sanitize user input by whitelisting
 */
function sanitize({ pkg, brand, assets = [], mode }) {
	const allBrands = Object.keys(brands);
	const allPkgs = ['@westpac/icon', '@westpac/symbol', '@westpac/pictogram'];
	const allModes = ['duo', 'dark', 'light'];
	const cleanPkg = allPkgs.includes(pkg) ? pkg : '@westpac/icon';

	assets = Array.isArray(assets) ? assets : [assets];

	return {
		pkg: cleanPkg,
		brand: allBrands.includes(brand) ? brand : 'wbc',
		assets: assets.filter((asset) => Object.keys(pkgs[cleanPkg]).includes(asset)),
		mode: allModes.includes(mode) ? mode : 'duo',
	};
}

/**
 * Extract markup from a GEL react component
 */
function extractMarkup({ Component, componentName, GEL, brand, mode }) {
	return new Promise((resolve, reject) => {
		const cache = createCache({ key: 'svg-download' });
		const { extractCritical } = createEmotionServer(cache);

		// We use overrides to remove the outer span that would otherwise render in react
		const fragmentComponent = ({ children }) => createElement(Fragment, null, children);
		brand['@westpac/icon'] = {
			Icon: {
				component: fragmentComponent,
			},
		};
		brand['@westpac/symbol'] = {
			Symbol: {
				component: fragmentComponent,
			},
		};
		brand['@westpac/pictogram'] = {
			Pictogram: {
				component: fragmentComponent,
			},
		};
		let staticMarkup;

		// we allow some garbage collection here as the next task can take up some memory
		process.nextTick(() => {
			try {
				staticMarkup = extractCritical(
					renderToStaticMarkup(
						createElement(
							CacheProvider,
							{ value: cache },
							createElement(GEL, { brand, children: createElement(Component, { mode }) })
						)
					)
				);
			} catch (error) {
				console.error(error);
				reject(`An error occurred when trying to parse ${componentName}`);
			}

			return resolve(staticMarkup);
		});
	});
}
