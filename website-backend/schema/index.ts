import { list } from '@keystone-6/core';
import { cloudinaryImage } from '@keystone-6/cloudinary';
import { Lists } from '.keystone/types';
import { text, password, timestamp, integer, select, image } from '@keystone-6/core/fields';

/* TODO test descriptions render */
const lists = {
	User: list({
		fields: {
			email: text({
				validation: { isRequired: true },
				isIndexed: 'unique',
				isFilterable: true,
			}),
			password: password({ validation: { isRequired: true } }),
		},
		ui: {
			description:
				'This is a list of users who can log into the AdminUI of Keystone and change things',
			labelField: 'email',
			listView: {
				initialColumns: ['email'],
				initialSort: {
					field: 'email',
					direction: 'ASC',
				},
			},
		},
	}),
	Setting: list({
		fields: {
			name: text(),
			value: text(),
		},
	}),
	Image: list({
		fields: {
			image: cloudinaryImage(),
			caption: text(),
		},
		ui: {
			description: 'See below all images uploaded and hosted for you.',
			listView: {
				initialColumns: ['image', 'caption'],
				// initialSort: {
				// 	field: 'image',
				// 	direction: 'ASC',
				// },
			},
		},
	}),
    Page: list({
        fields: {
            pageTitle: text(),
            // TODO needs a hook 
            url: text()
            packageName: select(),
            version: virtual(),
            description: virtual(),
            isOrphaned: virtual()
        }
    })
};

export { lists };
