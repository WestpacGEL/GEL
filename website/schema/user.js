const { Text, Password } = require('@keystonejs/fields');

const userSchema = {
	adminDoc: 'This is a list of users who can log into the AdminUI of Keystone and change things',
	fields: {
		email: { type: Text },
		password: { type: Password },
	},
	adminConfig: {
		defaultColumns: '',
		defaultSort: 'email',
	},
	labelField: 'email',
};

module.exports = { userSchema };
