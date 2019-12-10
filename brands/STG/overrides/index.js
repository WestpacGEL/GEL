const pagination = require('./pagination');

module.exports = {
	'@westpac/pagination': pagination,
	'@westpac/alert': {
		styles: styles => ({
			...styles,
			background: 'red',
		}),
	},
};
