import { importView } from '@keystonejs/build-field-types';
import { Block } from '../Block';
import { paragraph } from '.';

export default class HeadingBlock extends Block {
	get type() {
		return 'heading-4';
	}
	getAdminViews() {
		return [importView('../views/editor/blocks/heading-4'), ...new paragraph().getAdminViews()];
	}
}
