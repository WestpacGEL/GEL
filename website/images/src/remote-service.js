import express from 'express';
import fs from 'fs-extra';
import nodePath from 'path';
import crypto, { timingSafeEqual } from 'crypto';
import FormData from 'form-data';
import mimeTypes from 'mime-types';
import uuid from 'uuid/v4';
var concat = require('concat-stream');
import fetch from 'node-fetch';
import streamToArray from 'stream-to-array';

export class CloudImageService {
	constructor({ url, apiKey, clientKey }) {
		this.url = url;
		if (clientKey) {
			this.url += `/${clientKey}`;
		}
		this.apiKey = apiKey;
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
				form.append('image', fs.readFileSync(filepath));
				let url = `${this.url}/upload`;
				if (this.apiKey) {
					url += `?api-key=${this.apiKey}`;
				}
				return fetch(url, {
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
