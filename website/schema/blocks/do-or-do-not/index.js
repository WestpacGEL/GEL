const { importView } = require('@keystonejs/build-field-types');
const { Block } = require('@keystonejs/field-content/Block');
const { DoOrDoNotList } = require('./do-or-do-not-list');

class DoOrDoNot extends Block {
  get type() {
    return 'do-or-do-not';
  }
  getAdminViews() {
    return [importView('./view'), ...new DoOrDoNotList().getAdminViews()];
  }
}

module.exports = { DoOrDoNot };
