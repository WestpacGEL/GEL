/** @jsx jsx */

import { jsx, useBrand, overrideReconciler } from '@westpac/core';
import PropTypes from 'prop-types';

import { defaultContactListItem } from './overrides/contactListItem';
import { defaultContactList } from './overrides/contactList';
import { defaultItemLink } from './overrides/itemLink';
import { defaultItemIcon } from './overrides/itemIcon';
import { defaultItemText } from './overrides/itemText';
import pkg from '../package.json';

// ==============================
// Component
// ==============================

export const FormPodContactList = ({
	items,
	overrides: componentOverrides,
	...rest
}: typeof FormPodContactList.propTypes & typeof FormPodContactList.defaultProps) => {
	const {
		OVERRIDES: { [pkg.name]: tokenOverrides },
		[pkg.name]: brandOverrides,
	} = useBrand();

	const defaultOverrides = {
		ContactList: defaultContactList,
		ContactListItem: defaultContactListItem,
		ItemLink: defaultItemLink,
		ItemIcon: defaultItemIcon,
		ItemText: defaultItemText,
	};

	const state = {
		items,
		overrides: componentOverrides,
		...rest,
	};

	const {
		ContactList: {
			component: ContactList,
			styles: contactListStyles,
			attributes: contactListAttributes,
		},
		ContactListItem: {
			component: ContactListItem,
			styles: contactListItemStyles,
			attributes: contactListItemAttributes,
		},
		ItemLink: { component: ItemLink, styles: itemLinkStyles, attributes: itemLinkAttributes },
		ItemIcon: { component: ItemIcon, styles: itemIconStyles, attributes: itemIconAttributes },
		ItemText: { component: ItemText, styles: itemTextStyles, attributes: itemTextAttributes },
	} = overrideReconciler(defaultOverrides, tokenOverrides, brandOverrides, componentOverrides);

	return (
		<ContactList
			{...rest}
			state={state}
			{...contactListAttributes(state)}
			css={contactListStyles(state)}
		>
			{items.map((item, i) => (
				<ContactListItem
					key={i}
					state={state}
					{...contactListItemAttributes(state)}
					css={contactListItemStyles(state)}
				>
					<ItemLink
						href={item.url}
						state={state}
						{...itemLinkAttributes(state)}
						css={itemLinkStyles(state)}
					>
						{item.icon && (
							<ItemIcon
								icon={item.icon}
								color={item.color}
								state={state}
								{...itemIconAttributes(state)}
								css={itemIconStyles(state)}
							/>
						)}
						<ItemText state={state} {...itemTextAttributes(state)} css={itemTextStyles(state)}>
							{item.text}
						</ItemText>
					</ItemLink>
				</ContactListItem>
			))}
		</ContactList>
	);
};

// ==============================
// Types
// ==============================

FormPodContactList.propTypes = {
	/**
	 * Array of contact detail data (objects)
	 */
	items: PropTypes.arrayOf(
		PropTypes.shape({
			icon: PropTypes.func.isRequired,
			iconColor: PropTypes.string,
			text: PropTypes.string.isRequired,
			url: PropTypes.string.isRequired,
			onClick: PropTypes.func,
		})
	),

	/**
	 * The override API
	 */
	overrides: PropTypes.shape({
		ContactList: PropTypes.shape({
			styles: PropTypes.func,
			component: PropTypes.elementType,
			attributes: PropTypes.func,
		}),
		ContactListItem: PropTypes.shape({
			styles: PropTypes.func,
			component: PropTypes.elementType,
			attributes: PropTypes.func,
		}),
		ItemLink: PropTypes.shape({
			styles: PropTypes.func,
			component: PropTypes.elementType,
			attributes: PropTypes.func,
		}),
		ItemIcon: PropTypes.shape({
			styles: PropTypes.func,
			component: PropTypes.elementType,
			attributes: PropTypes.func,
		}),
		ItemText: PropTypes.shape({
			styles: PropTypes.func,
			component: PropTypes.elementType,
			attributes: PropTypes.func,
		}),
	}),
};

FormPodContactList.defaultProps = {
	items: [],
};
