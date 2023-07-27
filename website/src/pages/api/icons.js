import fs from 'fs';

export default async function handler(req, res) {
	try {
		const publicDir = __dirname.split('.next')[0] + 'public/';
		const filePath = publicDir + 'design-system/icons/GEL_icons.zip';
		const buffer = fs.createReadStream(filePath);

		await new Promise(function (resolve) {
			res.setHeader('Content-Type', 'application/zip');
			buffer.pipe(res);
			buffer.on('end', resolve);
			buffer.on('error', function (err) {
				res.status(500).json({ error: true, message: 'Sorry, something went wrong!' });
				res.end();
			});
		});
	} catch (err) {
		res.status(400).json({ error: true, message: err });
		res.end();
	}
}
