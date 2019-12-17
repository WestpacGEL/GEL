module.exports = TOKENS => ({
	'@westpac/badge': require('./badge')(TOKENS),
	'@westpac/label': require('./label')(TOKENS),
	'@westpac/pagination': require('./pagination')(TOKENS),
});
