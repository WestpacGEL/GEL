const { Text } = require('@keystonejs/fields');
const { LocalImageService, RemoteImageService, Image } = require('@keystonejs/images');

let imageService =
	process.env.NODE_ENV === 'production'
		? new RemoteImageService({ url: 'http://localhost:4008' })
		: new LocalImageService({ path: './image-storage' });

const imageSchema = {
	fields: {
		image: {
			type: Image,
			service: imageService,
			// hooks: {
			// 	beforeChange: async ({ existingItem }) => {
			// 		if (existingItem && existingItem.image) {
			// 			await fileAdapter.delete(existingItem.image);
			// 		}
			// 	},
			// },
		},
		caption: { type: Text },
	},
	// hooks: {
	// 	// afterDelete: async ({ existingItem }) => {
	// 	// 	if (existingItem.image) {
	// 	// 		await fileAdapter.delete(existingItem.image);
	// 	// 	}
	// 	// },
	// },
};

module.exports = { imageSchema };
