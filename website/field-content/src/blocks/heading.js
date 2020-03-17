import { importView } from '@keystonejs/build-field-types';
import { Block } from '../Block';
import { paragraph } from '.';

export default class HeadingBlock extends Block {
	get type() {
		return 'heading';
	}
	getAdminViews() {
		return [importView('../views/editor/blocks/heading'), ...new paragraph().getAdminViews()];
	}
}
