import express from 'express';
import fs from 'fs-extra';
import nodePath from 'path';
import crypto from 'crypto';
import FormData from 'form-data';
import fetch from 'node-fetch';
import mimeTypes from 'mime-types';
import uuid from 'uuid/v4';

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
		// let result = await streamToPromise(stream);
		// console.log(result);
		let form = new FormData();

		form.append('image', stream, { contentType: 'image/jpeg', filename: originalname });

		return fetch(`${this.url}/upload`, {
			method: 'POST',
			body: form,
			headers: form.getHeaders(),
		}).then(x => x.json());
	}
}
