import { importView } from '@keystonejs/build-field-types';
import { Block } from '@keystonejs/field-content/Block';

export default class DynamicComponentsBlock extends Block {
	constructor({ components }) {
		super(...arguments);
		if (!components) {
			throw new Error('Please provide a components file path to the dynamicComponents block');
		}
		this.components = components;
	}
	get type() {
		return 'dynamic-components';
	}
	getAdminViews() {
		return [importView('../view'), this.components];
	}
	getViewOptions() {
		return { components: this.components };
	}
}
