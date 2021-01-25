import { button } from './button';
import { buttonGroup } from './buttonGroup';
import { popover } from './popover';
import { modal } from './modal';
import { tabcordion } from './tabcordion';

export const OVERRIDES = (TOKENS) => ({
	'@westpac/button': button(TOKENS),
	'@westpac/button-group': buttonGroup(TOKENS),
	'@westpac/popover': popover(TOKENS),
	'@westpac/modal': modal(TOKENS),
	'@westpac/tabcordion': tabcordion(TOKENS),
});
