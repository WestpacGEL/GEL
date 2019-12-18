const { importView } = require('@keystonejs/build-field-types');
const { Block } = require('@keystonejs/field-content/Block');

class DoOrDoNotListItem extends Block {
  get type() {
    return 'do-or-do-not-list-item';
  }
  getAdminViews() {
    return [importView('./view')];
  }
}
module.exports = { DoOrDoNotListItem };
