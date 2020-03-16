const { Block } = require('../../field-content');

class DynamicComponentsBlock extends Block {
	constructor(options, stuff) {
		super(options, stuff);
		if (!options.components) {
			throw new Error('Please provide a components file path to the dynamicComponents block');
		}
		this.components = options.components;
	}
	get type() {
		return 'dynamic-components';
	}
	getAdminViews() {
		return [require.resolve('./dynamic-components-view'), this.components];
	}
	getViewOptions() {
		return { components: this.components };
	}
}

module.exports = { DynamicComponentsBlock };
