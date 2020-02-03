let { renderToStaticMarkup } = require('react-dom/server');
let h = require('react').createElement;
const { Badge } = require('@westpac/badge');
const BOM = require('@westpac/bom');
const { GEL } = require('@westpac/core');
const createEmotionServer = require('create-emotion-server').default;
const createCache = require('@emotion/cache').default;
const { CacheProvider } = require('@emotion/core');
let cache = createCache();
let { extractCritical } = createEmotionServer(cache);

console.log(
	extractCritical(
		renderToStaticMarkup(
			h(
				CacheProvider,
				{ value: cache },
				h(
					GEL,
					{ brand: BOM },
					h(Badge, {
						value: 'thing',
					})
				)
			)
		)
	)
);
