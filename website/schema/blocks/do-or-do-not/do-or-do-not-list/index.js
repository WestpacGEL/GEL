const { importView } = require('@keystonejs/build-field-types');
const { Block } = require('@keystonejs/field-content/Block');
const { DoOrDoNotListItem } = require('../do-or-do-not-list-item');

class DoOrDoNotList extends Block {
  get type() {
    return 'do-or-do-not-list';
  }
  getAdminViews() {
    return [importView('./view'), ...new DoOrDoNotListItem().getAdminViews()];
  }
}
module.exports = { DoOrDoNotList };
