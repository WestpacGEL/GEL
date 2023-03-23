import PropTypes from 'prop-types';
import type { AriaListBoxOptions } from '@react-aria/listbox';
import type { ListState } from 'react-stately';
import type { Node } from '@react-types/shared';
import { useListBox, useListBoxSection, useOption } from 'react-aria';
import { useRef } from 'react';

interface ListBoxProps extends AriaListBoxOptions<unknown> {
	listBoxRef?: React.RefObject<HTMLUListElement>;
	state: ListState<unknown>;
}

interface SectionProps {
	section: Node<unknown>;
	state: ListState<unknown>;
}

interface OptionProps {
	item: Node<unknown>;
	state: ListState<unknown>;
}

export function ListBox(props: ListBoxProps) {
	let ref = useRef<HTMLUListElement>(null);
	let { listBoxRef = ref, state } = props;
	let { listBoxProps } = useListBox(props, state, listBoxRef);

	return (
		<ul {...listBoxProps} ref={listBoxRef} className="w-full max-h-72 overflow-auto outline-none">
			{[...state.collection].map((item) =>
				item.type === 'section' ? (
					<ListBoxSection key={item.key} section={item} state={state} />
				) : (
					<Option key={item.key} item={item} state={state} />
				)
			)}
		</ul>
	);
}

function ListBoxSection({ section, state }: SectionProps) {
	let { itemProps, headingProps, groupProps } = useListBoxSection({
		heading: section.rendered,
		'aria-label': section['aria-label'],
	});

	return (
		<>
			<li {...itemProps} className="pt-2">
				{section.rendered && (
					<span {...headingProps} className="text-xs font-bold uppercase text-gray-500 mx-3">
						{section.rendered}
					</span>
				)}
				<ul {...groupProps}>
					{[...section.childNodes].map((node) => (
						<Option key={node.key} item={node} state={state} />
					))}
				</ul>
			</li>
		</>
	);
}

function Option({ item, state }: OptionProps) {
	let ref = useRef<HTMLLIElement>(null);
	let { optionProps, isDisabled, isSelected, isFocused } = useOption(
		{
			key: item.key,
		},
		state,
		ref
	);

	let text = 'text-gray-700';
	if (isFocused || isSelected) {
		text = 'text-pink-600';
	} else if (isDisabled) {
		text = 'text-gray-200';
	}

	return (
		<li
			{...optionProps}
			ref={ref}
			className={`m-1 rounded-md py-2 px-2 text-sm outline-none cursor-default flex items-center justify-between ${text} ${
				isFocused ? 'bg-pink-100' : ''
			} ${isSelected ? 'font-bold' : ''}`}
		>
			{item.rendered}
			{isSelected && <h4>Check icon</h4>}
		</li>
	);
}

ListBox.propTypes = {
	// ----------------------------- Warning --------------------------------
	// | These PropTypes are generated from the TypeScript type definitions |
	// |     To update them edit TypeScript types and run "yarn prop-types"  |
	// ----------------------------------------------------------------------
	listBoxRef: PropTypes.shape({
		current: PropTypes.oneOfType([PropTypes.oneOf([null]), PropTypes.object]).isRequired,
	}),
	state: PropTypes.shape({
		/**
		 * A collection of items in the list.
		 */
		collection: PropTypes.shape({
			'__@iterator': PropTypes.func.isRequired,
			/**
			 * Get an item by the index of its key.
			 */
			at: PropTypes.func.isRequired,
			/**
			 * Get the first key in the collection.
			 */
			getFirstKey: PropTypes.func.isRequired,
			/**
			 * Get an item by its key.
			 */
			getItem: PropTypes.func.isRequired,
			/**
			 * Get the key that comes after the given key in the collection.
			 */
			getKeyAfter: PropTypes.func.isRequired,
			/**
			 * Get the key that comes before the given key in the collection.
			 */
			getKeyBefore: PropTypes.func.isRequired,
			/**
			 * Iterate over all keys in the collection.
			 */
			getKeys: PropTypes.func.isRequired,
			/**
			 * Get the last key in the collection.
			 */
			getLastKey: PropTypes.func.isRequired,
			/**
			 * The number of items in the collection.
			 */
			size: PropTypes.number.isRequired,
		}).isRequired,
		/**
		 * A set of items that are disabled.
		 */
		disabledKeys: PropTypes.shape({
			/**
			 * Iterates over values in the set.
			 */
			'__@iterator': PropTypes.func.isRequired,
			'__@toStringTag': PropTypes.string.isRequired,
			add: PropTypes.func.isRequired,
			clear: PropTypes.func.isRequired,
			delete: PropTypes.func.isRequired,
			/**
			 * Returns an iterable of [v,v] pairs for every value `v` in the set.
			 */
			entries: PropTypes.func.isRequired,
			forEach: PropTypes.func.isRequired,
			has: PropTypes.func.isRequired,
			/**
			 * Despite its name, returns an iterable of the values in the set,
			 */
			keys: PropTypes.func.isRequired,
			size: PropTypes.number.isRequired,
			/**
			 * Returns an iterable of values in the set.
			 */
			values: PropTypes.func.isRequired,
		}).isRequired,
		/**
		 * A selection manager to read and update multiple selection state.
		 */
		selectionManager: PropTypes.shape({
			/**
			 * Returns whether the given key can be selected.
			 */
			canSelectItem: PropTypes.func.isRequired,
			/**
			 * Whether the first or last child of the focused key should receive focus.
			 */
			childFocusStrategy: PropTypes.oneOf(['first', 'last']).isRequired,
			/**
			 * Removes all keys from the selection.
			 */
			clearSelection: PropTypes.func.isRequired,
			/**
			 * Whether `disabledKeys` applies to selection, actions, or both.
			 */
			disabledBehavior: PropTypes.oneOf(['all', 'selection']).isRequired,
			/**
			 * The currently disabled keys in the collection.
			 */
			disabledKeys: PropTypes.shape({
				/**
				 * Iterates over values in the set.
				 */
				'__@iterator': PropTypes.func.isRequired,
				'__@toStringTag': PropTypes.string.isRequired,
				add: PropTypes.func.isRequired,
				clear: PropTypes.func.isRequired,
				delete: PropTypes.func.isRequired,
				/**
				 * Returns an iterable of [v,v] pairs for every value `v` in the set.
				 */
				entries: PropTypes.func.isRequired,
				forEach: PropTypes.func.isRequired,
				has: PropTypes.func.isRequired,
				/**
				 * Despite its name, returns an iterable of the values in the set,
				 */
				keys: PropTypes.func.isRequired,
				size: PropTypes.number.isRequired,
				/**
				 * Returns an iterable of values in the set.
				 */
				values: PropTypes.func.isRequired,
			}).isRequired,
			/**
			 * Whether the collection allows empty selection.
			 */
			disallowEmptySelection: PropTypes.bool.isRequired,
			/**
			 * Extends the selection to the given key.
			 */
			extendSelection: PropTypes.func.isRequired,
			/**
			 * The first selected key in the collection.
			 */
			firstSelectedKey: PropTypes.oneOfType([
				PropTypes.oneOf([null]),
				PropTypes.number,
				PropTypes.string,
			]).isRequired,
			/**
			 * The current focused key in the collection.
			 */
			focusedKey: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
			/**
			 * Returns whether the given key is non-interactive, i.e. both selection and actions are disabled.
			 */
			isDisabled: PropTypes.func.isRequired,
			/**
			 * Whether the selection is empty.
			 */
			isEmpty: PropTypes.bool.isRequired,
			/**
			 * Whether the collection is currently focused.
			 */
			isFocused: PropTypes.bool.isRequired,
			/**
			 * Whether all items in the collection are selected.
			 */
			isSelectAll: PropTypes.bool.isRequired,
			/**
			 * Returns whether a key is selected.
			 */
			isSelected: PropTypes.func.isRequired,
			/**
			 * Returns whether the current selection is equal to the given selection.
			 */
			isSelectionEqual: PropTypes.func.isRequired,
			/**
			 * The last selected key in the collection.
			 */
			lastSelectedKey: PropTypes.oneOfType([
				PropTypes.oneOf([null]),
				PropTypes.number,
				PropTypes.string,
			]).isRequired,
			/**
			 * The raw selection value for the collection.
			 * Either 'all' for select all, or a set of keys.
			 */
			rawSelection: PropTypes.oneOfType([
				PropTypes.oneOf(['all']),
				PropTypes.shape({
					/**
					 * Iterates over values in the set.
					 */
					'__@iterator': PropTypes.func.isRequired,
					'__@toStringTag': PropTypes.string.isRequired,
					add: PropTypes.func.isRequired,
					clear: PropTypes.func.isRequired,
					delete: PropTypes.func.isRequired,
					/**
					 * Returns an iterable of [v,v] pairs for every value `v` in the set.
					 */
					entries: PropTypes.func.isRequired,
					forEach: PropTypes.func.isRequired,
					has: PropTypes.func.isRequired,
					/**
					 * Despite its name, returns an iterable of the values in the set,
					 */
					keys: PropTypes.func.isRequired,
					size: PropTypes.number.isRequired,
					/**
					 * Returns an iterable of values in the set.
					 */
					values: PropTypes.func.isRequired,
				}),
			]).isRequired,
			/**
			 * Replaces the selection with only the given key.
			 */
			replaceSelection: PropTypes.func.isRequired,
			/**
			 * Toggles, replaces, or extends selection to the given key depending
			 * on the pointer event and collection's selection mode.
			 */
			select: PropTypes.func.isRequired,
			/**
			 * Selects all items in the collection.
			 */
			selectAll: PropTypes.func.isRequired,
			/**
			 * The currently selected keys in the collection.
			 */
			selectedKeys: PropTypes.shape({
				/**
				 * Iterates over values in the set.
				 */
				'__@iterator': PropTypes.func.isRequired,
				'__@toStringTag': PropTypes.string.isRequired,
				add: PropTypes.func.isRequired,
				clear: PropTypes.func.isRequired,
				delete: PropTypes.func.isRequired,
				/**
				 * Returns an iterable of [v,v] pairs for every value `v` in the set.
				 */
				entries: PropTypes.func.isRequired,
				forEach: PropTypes.func.isRequired,
				has: PropTypes.func.isRequired,
				/**
				 * Despite its name, returns an iterable of the values in the set,
				 */
				keys: PropTypes.func.isRequired,
				size: PropTypes.number.isRequired,
				/**
				 * Returns an iterable of values in the set.
				 */
				values: PropTypes.func.isRequired,
			}).isRequired,
			/**
			 * The selection behavior for the collection.
			 */
			selectionBehavior: PropTypes.oneOf(['replace', 'toggle']).isRequired,
			/**
			 * The type of selection that is allowed in the collection.
			 */
			selectionMode: PropTypes.oneOf(['multiple', 'none', 'single']).isRequired,
			/**
			 * Sets whether the collection is focused.
			 */
			setFocused: PropTypes.func.isRequired,
			/**
			 * Sets the focused key.
			 */
			setFocusedKey: PropTypes.func.isRequired,
			/**
			 * Replaces the selection with the given keys.
			 */
			setSelectedKeys: PropTypes.func.isRequired,
			/**
			 * Sets the selection behavior for the collection.
			 */
			setSelectionBehavior: PropTypes.func.isRequired,
			/**
			 * Toggles between select all and an empty selection.
			 */
			toggleSelectAll: PropTypes.func.isRequired,
			/**
			 * Toggles whether the given key is selected.
			 */
			toggleSelection: PropTypes.func.isRequired,
		}).isRequired,
	}).isRequired,
};

ListBoxSection.propTypes = {
	// ----------------------------- Warning --------------------------------
	// | These PropTypes are generated from the TypeScript type definitions |
	// |     To update them edit TypeScript types and run "yarn prop-types"  |
	// ----------------------------------------------------------------------
	section: PropTypes.shape({
		/**
		 * An accessibility label for this node.
		 */
		'aria-label': PropTypes.string,
		/**
		 * The loaded children of this node.
		 */
		childNodes: PropTypes.shape({
			'__@iterator': PropTypes.func.isRequired,
		}).isRequired,
		/**
		 * Whether this item has children, even if not loaded yet.
		 */
		hasChildNodes: PropTypes.bool.isRequired,
		/**
		 * The index of this node within its parent.
		 */
		index: PropTypes.number,
		/**
		 * A unique key for the node.
		 */
		key: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
		/**
		 * The level of depth this node is at in the heirarchy.
		 */
		level: PropTypes.number.isRequired,
		/**
		 * The key of the node after this node.
		 */
		nextKey: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
		/**
		 * The key of the parent node.
		 */
		parentKey: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
		/**
		 * The key of the node before this node.
		 */
		prevKey: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
		/**
		 * Additional properties specific to a particular node type.
		 */
		props: PropTypes.any,
		/**
		 * The rendered contents of this node (e.g. JSX).
		 */
		rendered: PropTypes.node,
		/**
		 * @private
		 */
		shouldInvalidate: PropTypes.func,
		/**
		 * A string value for this node, used for features like typeahead.
		 */
		textValue: PropTypes.string.isRequired,
		/**
		 * The type of item this node represents.
		 */
		type: PropTypes.string.isRequired,
		/**
		 * The object value the node was created from.
		 */
		value: PropTypes.any.isRequired,
		/**
		 * A function that should be called to wrap the rendered node.
		 */
		wrapper: PropTypes.func,
	}).isRequired,
	state: PropTypes.shape({
		/**
		 * A collection of items in the list.
		 */
		collection: PropTypes.shape({
			'__@iterator': PropTypes.func.isRequired,
			/**
			 * Get an item by the index of its key.
			 */
			at: PropTypes.func.isRequired,
			/**
			 * Get the first key in the collection.
			 */
			getFirstKey: PropTypes.func.isRequired,
			/**
			 * Get an item by its key.
			 */
			getItem: PropTypes.func.isRequired,
			/**
			 * Get the key that comes after the given key in the collection.
			 */
			getKeyAfter: PropTypes.func.isRequired,
			/**
			 * Get the key that comes before the given key in the collection.
			 */
			getKeyBefore: PropTypes.func.isRequired,
			/**
			 * Iterate over all keys in the collection.
			 */
			getKeys: PropTypes.func.isRequired,
			/**
			 * Get the last key in the collection.
			 */
			getLastKey: PropTypes.func.isRequired,
			/**
			 * The number of items in the collection.
			 */
			size: PropTypes.number.isRequired,
		}).isRequired,
		/**
		 * A set of items that are disabled.
		 */
		disabledKeys: PropTypes.shape({
			/**
			 * Iterates over values in the set.
			 */
			'__@iterator': PropTypes.func.isRequired,
			'__@toStringTag': PropTypes.string.isRequired,
			add: PropTypes.func.isRequired,
			clear: PropTypes.func.isRequired,
			delete: PropTypes.func.isRequired,
			/**
			 * Returns an iterable of [v,v] pairs for every value `v` in the set.
			 */
			entries: PropTypes.func.isRequired,
			forEach: PropTypes.func.isRequired,
			has: PropTypes.func.isRequired,
			/**
			 * Despite its name, returns an iterable of the values in the set,
			 */
			keys: PropTypes.func.isRequired,
			size: PropTypes.number.isRequired,
			/**
			 * Returns an iterable of values in the set.
			 */
			values: PropTypes.func.isRequired,
		}).isRequired,
		/**
		 * A selection manager to read and update multiple selection state.
		 */
		selectionManager: PropTypes.shape({
			/**
			 * Returns whether the given key can be selected.
			 */
			canSelectItem: PropTypes.func.isRequired,
			/**
			 * Whether the first or last child of the focused key should receive focus.
			 */
			childFocusStrategy: PropTypes.oneOf(['first', 'last']).isRequired,
			/**
			 * Removes all keys from the selection.
			 */
			clearSelection: PropTypes.func.isRequired,
			/**
			 * Whether `disabledKeys` applies to selection, actions, or both.
			 */
			disabledBehavior: PropTypes.oneOf(['all', 'selection']).isRequired,
			/**
			 * The currently disabled keys in the collection.
			 */
			disabledKeys: PropTypes.shape({
				/**
				 * Iterates over values in the set.
				 */
				'__@iterator': PropTypes.func.isRequired,
				'__@toStringTag': PropTypes.string.isRequired,
				add: PropTypes.func.isRequired,
				clear: PropTypes.func.isRequired,
				delete: PropTypes.func.isRequired,
				/**
				 * Returns an iterable of [v,v] pairs for every value `v` in the set.
				 */
				entries: PropTypes.func.isRequired,
				forEach: PropTypes.func.isRequired,
				has: PropTypes.func.isRequired,
				/**
				 * Despite its name, returns an iterable of the values in the set,
				 */
				keys: PropTypes.func.isRequired,
				size: PropTypes.number.isRequired,
				/**
				 * Returns an iterable of values in the set.
				 */
				values: PropTypes.func.isRequired,
			}).isRequired,
			/**
			 * Whether the collection allows empty selection.
			 */
			disallowEmptySelection: PropTypes.bool.isRequired,
			/**
			 * Extends the selection to the given key.
			 */
			extendSelection: PropTypes.func.isRequired,
			/**
			 * The first selected key in the collection.
			 */
			firstSelectedKey: PropTypes.oneOfType([
				PropTypes.oneOf([null]),
				PropTypes.number,
				PropTypes.string,
			]).isRequired,
			/**
			 * The current focused key in the collection.
			 */
			focusedKey: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
			/**
			 * Returns whether the given key is non-interactive, i.e. both selection and actions are disabled.
			 */
			isDisabled: PropTypes.func.isRequired,
			/**
			 * Whether the selection is empty.
			 */
			isEmpty: PropTypes.bool.isRequired,
			/**
			 * Whether the collection is currently focused.
			 */
			isFocused: PropTypes.bool.isRequired,
			/**
			 * Whether all items in the collection are selected.
			 */
			isSelectAll: PropTypes.bool.isRequired,
			/**
			 * Returns whether a key is selected.
			 */
			isSelected: PropTypes.func.isRequired,
			/**
			 * Returns whether the current selection is equal to the given selection.
			 */
			isSelectionEqual: PropTypes.func.isRequired,
			/**
			 * The last selected key in the collection.
			 */
			lastSelectedKey: PropTypes.oneOfType([
				PropTypes.oneOf([null]),
				PropTypes.number,
				PropTypes.string,
			]).isRequired,
			/**
			 * The raw selection value for the collection.
			 * Either 'all' for select all, or a set of keys.
			 */
			rawSelection: PropTypes.oneOfType([
				PropTypes.oneOf(['all']),
				PropTypes.shape({
					/**
					 * Iterates over values in the set.
					 */
					'__@iterator': PropTypes.func.isRequired,
					'__@toStringTag': PropTypes.string.isRequired,
					add: PropTypes.func.isRequired,
					clear: PropTypes.func.isRequired,
					delete: PropTypes.func.isRequired,
					/**
					 * Returns an iterable of [v,v] pairs for every value `v` in the set.
					 */
					entries: PropTypes.func.isRequired,
					forEach: PropTypes.func.isRequired,
					has: PropTypes.func.isRequired,
					/**
					 * Despite its name, returns an iterable of the values in the set,
					 */
					keys: PropTypes.func.isRequired,
					size: PropTypes.number.isRequired,
					/**
					 * Returns an iterable of values in the set.
					 */
					values: PropTypes.func.isRequired,
				}),
			]).isRequired,
			/**
			 * Replaces the selection with only the given key.
			 */
			replaceSelection: PropTypes.func.isRequired,
			/**
			 * Toggles, replaces, or extends selection to the given key depending
			 * on the pointer event and collection's selection mode.
			 */
			select: PropTypes.func.isRequired,
			/**
			 * Selects all items in the collection.
			 */
			selectAll: PropTypes.func.isRequired,
			/**
			 * The currently selected keys in the collection.
			 */
			selectedKeys: PropTypes.shape({
				/**
				 * Iterates over values in the set.
				 */
				'__@iterator': PropTypes.func.isRequired,
				'__@toStringTag': PropTypes.string.isRequired,
				add: PropTypes.func.isRequired,
				clear: PropTypes.func.isRequired,
				delete: PropTypes.func.isRequired,
				/**
				 * Returns an iterable of [v,v] pairs for every value `v` in the set.
				 */
				entries: PropTypes.func.isRequired,
				forEach: PropTypes.func.isRequired,
				has: PropTypes.func.isRequired,
				/**
				 * Despite its name, returns an iterable of the values in the set,
				 */
				keys: PropTypes.func.isRequired,
				size: PropTypes.number.isRequired,
				/**
				 * Returns an iterable of values in the set.
				 */
				values: PropTypes.func.isRequired,
			}).isRequired,
			/**
			 * The selection behavior for the collection.
			 */
			selectionBehavior: PropTypes.oneOf(['replace', 'toggle']).isRequired,
			/**
			 * The type of selection that is allowed in the collection.
			 */
			selectionMode: PropTypes.oneOf(['multiple', 'none', 'single']).isRequired,
			/**
			 * Sets whether the collection is focused.
			 */
			setFocused: PropTypes.func.isRequired,
			/**
			 * Sets the focused key.
			 */
			setFocusedKey: PropTypes.func.isRequired,
			/**
			 * Replaces the selection with the given keys.
			 */
			setSelectedKeys: PropTypes.func.isRequired,
			/**
			 * Sets the selection behavior for the collection.
			 */
			setSelectionBehavior: PropTypes.func.isRequired,
			/**
			 * Toggles between select all and an empty selection.
			 */
			toggleSelectAll: PropTypes.func.isRequired,
			/**
			 * Toggles whether the given key is selected.
			 */
			toggleSelection: PropTypes.func.isRequired,
		}).isRequired,
	}).isRequired,
};

Option.propTypes = {
	// ----------------------------- Warning --------------------------------
	// | These PropTypes are generated from the TypeScript type definitions |
	// |     To update them edit TypeScript types and run "yarn prop-types"  |
	// ----------------------------------------------------------------------
	item: PropTypes.shape({
		/**
		 * An accessibility label for this node.
		 */
		'aria-label': PropTypes.string,
		/**
		 * The loaded children of this node.
		 */
		childNodes: PropTypes.shape({
			'__@iterator': PropTypes.func.isRequired,
		}).isRequired,
		/**
		 * Whether this item has children, even if not loaded yet.
		 */
		hasChildNodes: PropTypes.bool.isRequired,
		/**
		 * The index of this node within its parent.
		 */
		index: PropTypes.number,
		/**
		 * A unique key for the node.
		 */
		key: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
		/**
		 * The level of depth this node is at in the heirarchy.
		 */
		level: PropTypes.number.isRequired,
		/**
		 * The key of the node after this node.
		 */
		nextKey: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
		/**
		 * The key of the parent node.
		 */
		parentKey: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
		/**
		 * The key of the node before this node.
		 */
		prevKey: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
		/**
		 * Additional properties specific to a particular node type.
		 */
		props: PropTypes.any,
		/**
		 * The rendered contents of this node (e.g. JSX).
		 */
		rendered: PropTypes.node,
		/**
		 * @private
		 */
		shouldInvalidate: PropTypes.func,
		/**
		 * A string value for this node, used for features like typeahead.
		 */
		textValue: PropTypes.string.isRequired,
		/**
		 * The type of item this node represents.
		 */
		type: PropTypes.string.isRequired,
		/**
		 * The object value the node was created from.
		 */
		value: PropTypes.any.isRequired,
		/**
		 * A function that should be called to wrap the rendered node.
		 */
		wrapper: PropTypes.func,
	}).isRequired,
	state: PropTypes.shape({
		/**
		 * A collection of items in the list.
		 */
		collection: PropTypes.shape({
			'__@iterator': PropTypes.func.isRequired,
			/**
			 * Get an item by the index of its key.
			 */
			at: PropTypes.func.isRequired,
			/**
			 * Get the first key in the collection.
			 */
			getFirstKey: PropTypes.func.isRequired,
			/**
			 * Get an item by its key.
			 */
			getItem: PropTypes.func.isRequired,
			/**
			 * Get the key that comes after the given key in the collection.
			 */
			getKeyAfter: PropTypes.func.isRequired,
			/**
			 * Get the key that comes before the given key in the collection.
			 */
			getKeyBefore: PropTypes.func.isRequired,
			/**
			 * Iterate over all keys in the collection.
			 */
			getKeys: PropTypes.func.isRequired,
			/**
			 * Get the last key in the collection.
			 */
			getLastKey: PropTypes.func.isRequired,
			/**
			 * The number of items in the collection.
			 */
			size: PropTypes.number.isRequired,
		}).isRequired,
		/**
		 * A set of items that are disabled.
		 */
		disabledKeys: PropTypes.shape({
			/**
			 * Iterates over values in the set.
			 */
			'__@iterator': PropTypes.func.isRequired,
			'__@toStringTag': PropTypes.string.isRequired,
			add: PropTypes.func.isRequired,
			clear: PropTypes.func.isRequired,
			delete: PropTypes.func.isRequired,
			/**
			 * Returns an iterable of [v,v] pairs for every value `v` in the set.
			 */
			entries: PropTypes.func.isRequired,
			forEach: PropTypes.func.isRequired,
			has: PropTypes.func.isRequired,
			/**
			 * Despite its name, returns an iterable of the values in the set,
			 */
			keys: PropTypes.func.isRequired,
			size: PropTypes.number.isRequired,
			/**
			 * Returns an iterable of values in the set.
			 */
			values: PropTypes.func.isRequired,
		}).isRequired,
		/**
		 * A selection manager to read and update multiple selection state.
		 */
		selectionManager: PropTypes.shape({
			/**
			 * Returns whether the given key can be selected.
			 */
			canSelectItem: PropTypes.func.isRequired,
			/**
			 * Whether the first or last child of the focused key should receive focus.
			 */
			childFocusStrategy: PropTypes.oneOf(['first', 'last']).isRequired,
			/**
			 * Removes all keys from the selection.
			 */
			clearSelection: PropTypes.func.isRequired,
			/**
			 * Whether `disabledKeys` applies to selection, actions, or both.
			 */
			disabledBehavior: PropTypes.oneOf(['all', 'selection']).isRequired,
			/**
			 * The currently disabled keys in the collection.
			 */
			disabledKeys: PropTypes.shape({
				/**
				 * Iterates over values in the set.
				 */
				'__@iterator': PropTypes.func.isRequired,
				'__@toStringTag': PropTypes.string.isRequired,
				add: PropTypes.func.isRequired,
				clear: PropTypes.func.isRequired,
				delete: PropTypes.func.isRequired,
				/**
				 * Returns an iterable of [v,v] pairs for every value `v` in the set.
				 */
				entries: PropTypes.func.isRequired,
				forEach: PropTypes.func.isRequired,
				has: PropTypes.func.isRequired,
				/**
				 * Despite its name, returns an iterable of the values in the set,
				 */
				keys: PropTypes.func.isRequired,
				size: PropTypes.number.isRequired,
				/**
				 * Returns an iterable of values in the set.
				 */
				values: PropTypes.func.isRequired,
			}).isRequired,
			/**
			 * Whether the collection allows empty selection.
			 */
			disallowEmptySelection: PropTypes.bool.isRequired,
			/**
			 * Extends the selection to the given key.
			 */
			extendSelection: PropTypes.func.isRequired,
			/**
			 * The first selected key in the collection.
			 */
			firstSelectedKey: PropTypes.oneOfType([
				PropTypes.oneOf([null]),
				PropTypes.number,
				PropTypes.string,
			]).isRequired,
			/**
			 * The current focused key in the collection.
			 */
			focusedKey: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
			/**
			 * Returns whether the given key is non-interactive, i.e. both selection and actions are disabled.
			 */
			isDisabled: PropTypes.func.isRequired,
			/**
			 * Whether the selection is empty.
			 */
			isEmpty: PropTypes.bool.isRequired,
			/**
			 * Whether the collection is currently focused.
			 */
			isFocused: PropTypes.bool.isRequired,
			/**
			 * Whether all items in the collection are selected.
			 */
			isSelectAll: PropTypes.bool.isRequired,
			/**
			 * Returns whether a key is selected.
			 */
			isSelected: PropTypes.func.isRequired,
			/**
			 * Returns whether the current selection is equal to the given selection.
			 */
			isSelectionEqual: PropTypes.func.isRequired,
			/**
			 * The last selected key in the collection.
			 */
			lastSelectedKey: PropTypes.oneOfType([
				PropTypes.oneOf([null]),
				PropTypes.number,
				PropTypes.string,
			]).isRequired,
			/**
			 * The raw selection value for the collection.
			 * Either 'all' for select all, or a set of keys.
			 */
			rawSelection: PropTypes.oneOfType([
				PropTypes.oneOf(['all']),
				PropTypes.shape({
					/**
					 * Iterates over values in the set.
					 */
					'__@iterator': PropTypes.func.isRequired,
					'__@toStringTag': PropTypes.string.isRequired,
					add: PropTypes.func.isRequired,
					clear: PropTypes.func.isRequired,
					delete: PropTypes.func.isRequired,
					/**
					 * Returns an iterable of [v,v] pairs for every value `v` in the set.
					 */
					entries: PropTypes.func.isRequired,
					forEach: PropTypes.func.isRequired,
					has: PropTypes.func.isRequired,
					/**
					 * Despite its name, returns an iterable of the values in the set,
					 */
					keys: PropTypes.func.isRequired,
					size: PropTypes.number.isRequired,
					/**
					 * Returns an iterable of values in the set.
					 */
					values: PropTypes.func.isRequired,
				}),
			]).isRequired,
			/**
			 * Replaces the selection with only the given key.
			 */
			replaceSelection: PropTypes.func.isRequired,
			/**
			 * Toggles, replaces, or extends selection to the given key depending
			 * on the pointer event and collection's selection mode.
			 */
			select: PropTypes.func.isRequired,
			/**
			 * Selects all items in the collection.
			 */
			selectAll: PropTypes.func.isRequired,
			/**
			 * The currently selected keys in the collection.
			 */
			selectedKeys: PropTypes.shape({
				/**
				 * Iterates over values in the set.
				 */
				'__@iterator': PropTypes.func.isRequired,
				'__@toStringTag': PropTypes.string.isRequired,
				add: PropTypes.func.isRequired,
				clear: PropTypes.func.isRequired,
				delete: PropTypes.func.isRequired,
				/**
				 * Returns an iterable of [v,v] pairs for every value `v` in the set.
				 */
				entries: PropTypes.func.isRequired,
				forEach: PropTypes.func.isRequired,
				has: PropTypes.func.isRequired,
				/**
				 * Despite its name, returns an iterable of the values in the set,
				 */
				keys: PropTypes.func.isRequired,
				size: PropTypes.number.isRequired,
				/**
				 * Returns an iterable of values in the set.
				 */
				values: PropTypes.func.isRequired,
			}).isRequired,
			/**
			 * The selection behavior for the collection.
			 */
			selectionBehavior: PropTypes.oneOf(['replace', 'toggle']).isRequired,
			/**
			 * The type of selection that is allowed in the collection.
			 */
			selectionMode: PropTypes.oneOf(['multiple', 'none', 'single']).isRequired,
			/**
			 * Sets whether the collection is focused.
			 */
			setFocused: PropTypes.func.isRequired,
			/**
			 * Sets the focused key.
			 */
			setFocusedKey: PropTypes.func.isRequired,
			/**
			 * Replaces the selection with the given keys.
			 */
			setSelectedKeys: PropTypes.func.isRequired,
			/**
			 * Sets the selection behavior for the collection.
			 */
			setSelectionBehavior: PropTypes.func.isRequired,
			/**
			 * Toggles between select all and an empty selection.
			 */
			toggleSelectAll: PropTypes.func.isRequired,
			/**
			 * Toggles whether the given key is selected.
			 */
			toggleSelection: PropTypes.func.isRequired,
		}).isRequired,
	}).isRequired,
};
