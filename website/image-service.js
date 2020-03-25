const { LocalImageService } = require('@keystonejs/images');

new LocalImageService({
	path: process.env.LOCAL_DATA_PATH,
	port: process.env.PORT,
	url: process.env.PUBLIC_IMAGE_SERVER,
});
