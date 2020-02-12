import { importView } from '@keystonejs/build-field-types';
import { Block } from '../Block';

export default class DynamicComponentsBlock extends Block {
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
		return [importView('../views/editor/blocks/dynamic-components'), this.components];
	}
	getViewOptions() {
		return { components: this.components };
	}
}
