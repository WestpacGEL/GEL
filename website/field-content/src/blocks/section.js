import { importView } from '@keystonejs/build-field-types';
import { Block } from '../Block';

export default class SectionBlock extends Block {
	get type() {
		return 'section';
	}
	getAdminViews() {
		return [importView('../views/editor/blocks/section')];
	}
}
