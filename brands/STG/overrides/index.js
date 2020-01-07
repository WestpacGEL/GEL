module.exports = TOKENS => ({
	'@westpac/badge': require('./badge')(TOKENS),
	'@westpac/button': require('./button')(TOKENS),
	'@westpac/form-check': require('./formCheck')(TOKENS),
	'@westpac/label': require('./label')(TOKENS),
	'@westpac/pagination': require('./pagination')(TOKENS),
	'@westpac/panel': require('./panel')(TOKENS),
	'@westpac/progress-bar': require('./progress-bar')(TOKENS),
});
