import { containerMap } from '../../src/_utils';
import { makeContainer } from './mixins/container';

const { paddingHorizontal, fluidMaxWidth, fixedWidth } = containerMap;

export const containers = {
	// Container
	'.container, .container-fixed': {
		...makeContainer(paddingHorizontal),
	},
	'.container': {
		maxWidth: fluidMaxWidth,
	},
	'.container-fixed': {
		width: fixedWidth,
	},

	// Responsive containers that are 100% wide until a breakpoint
	// TODO
};
