import fs from 'fs';
import path from 'path';

export default async function handler(req, res) {
	try {
		const filePath = path.join(process.cwd(), '/public/design-system/icons/GEL_Icons.zip');
		const exists = fs.existsSync(filePath);

		const publicDir = __dirname.split('.next')[0] + 'public/';
		const filePath2 = publicDir + 'design-system/icons/GEL_Icons.zip';
		const exists2 = fs.existsSync(filePath2);

		res
			.status(200)
			.json({ exists: exists, filePath: filePath, exists2: exists2, filePath2: filePath2 });
		// const buffer = fs.createReadStream(filePath);

		// await new Promise(function (resolve) {
		// 	res.setHeader('Content-Type', 'application/zip');
		// 	buffer.pipe(res);
		// 	buffer.on('end', resolve);
		// 	buffer.on('error', function (err) {
		// 		res.status(500).json({ error: true, message: err });
		// 		res.end();
		// 	});
		// });
	} catch (err) {
		res.status(400).json({ error: true, message: err });
		res.end();
	}
}
