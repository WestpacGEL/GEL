import express from 'express';
import fs from 'fs-extra';
import nodePath from 'path';
import crypto from 'crypto';
import FormData from 'form-data';
import mimeTypes from 'mime-types';
import uuid from 'uuid/v4';
var concat = require('concat-stream');
import fetch from 'node-fetch';

export class RemoteImageService {
	constructor({ url }) {
		this.url = url;
	}
	getSrc(id, { format, resize = {} }) {
		let url = `${this.url}/image/${id}.${format}`;

		const searchParams = new URLSearchParams();
		for (let key in resize) {
			searchParams.set(key, resize[key]);
		}

		const stringifiedSearchParams = searchParams.toString();
		if (stringifiedSearchParams) {
			url += `?${stringifiedSearchParams}`;
		}
		return url;
	}
	async getImage(id) {
		return fetch(`${this.url}/image/${id}/meta`).then(x => x.json());
	}
	async uploadImage({ stream, originalname }) {
		let filepath = nodePath.join(require('os').tmpdir(), originalname);
		let fsStream = fs.createWriteStream(filepath);
		stream.pipe(fsStream);

		return new Promise((resolve, reject) => {
			stream.on('end', () => {
				let form = new FormData();
				form.append('image', fs.createReadStream(filepath));
				return fetch(`${this.url}/upload`, {
					method: 'POST',
					body: form,
				})
					.then(x => x.json())
					.then(resolve)
					.catch(e => {
						console.error(e);
						reject(e);
					});
			});

			stream.on('error', reject);
		});
	}
}
