const { importView } = require('@keystonejs/build-field-types');
const { Block } = require('@keystonejs/field-content/Block');

class Example extends Block {
  get type() {
    return 'example';
  }
  getAdminViews() {
    return [importView('./view')];
  }
}

module.exports = { Example };
