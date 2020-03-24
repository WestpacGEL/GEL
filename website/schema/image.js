const { Text } = require('@keystonejs/fields');
const { LocalImageService, RemoteImageService, Image } = require('@keystonejs/images');

let remoteImageService = new RemoteImageService({ url: 'http://localhost:4008' });
let localImageService = new LocalImageService({ path: './image-storage' });

const imageSchema = {
	fields: {
		image: {
			type: Image,
			service: remoteImageService,
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
