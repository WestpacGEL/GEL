const pkg = require('./package.json');
const BRAND = pkg.name.replace('@westpac/', '' ).toUpperCase();

require('../../helpers/transformers/web')( BRAND );
