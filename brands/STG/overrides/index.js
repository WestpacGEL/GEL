module.exports = TOKENS => ({
	'@westpac/badge': require('./badge')(TOKENS),
	'@westpac/label': require('./label')(TOKENS),
	'@westpac/button': require('./button')(TOKENS),
	'@westpac/pagination': require('./pagination')(TOKENS),
	'@westpac/panel': require('./panel')(TOKENS),
});
