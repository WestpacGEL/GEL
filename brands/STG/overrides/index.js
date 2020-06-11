import { badge } from './badge';
import { button } from './button';
import { formCheck } from './formCheck';
import { label } from './label';
import { pagination } from './pagination';
import { panel } from './panel';
import { progressBar } from './progressBar';
import { switchStyle } from './switch';

export const OVERRIDES = (TOKENS) => ({
	'@westpac/badge': badge(TOKENS),
	'@westpac/button': button(TOKENS),
	'@westpac/form-check': formCheck(TOKENS),
	'@westpac/label': label(TOKENS),
	'@westpac/pagination': pagination(TOKENS),
	'@westpac/panel': panel(TOKENS),
	'@westpac/progress-bar': progressBar(TOKENS),
	'@westpac/switch': switchStyle(TOKENS),
});
