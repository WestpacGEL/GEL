import fs from 'fs';
import path from 'path';
import dotenv from 'dotenv';

// Locate our env vars
// If the app is running in NODE_ENV=production we're probably deployed
// Check for a config.env a few dirs above the CWD, just outside the repo root
const isProd = process.env.NODE_ENV === 'production';
const prodConfigPath = path.resolve(process.cwd(), '../../website-backend.env');
const configPath =
	isProd && fs.existsSync(prodConfigPath) ? prodConfigPath : path.resolve(process.cwd(), '.env');

// Import our config; this should happen before (most of) the other requires
console.log(`Loading env vars from ${configPath}`);
dotenv.config({ path: configPath });

if (
	!process.env.CLOUDINARY_CLOUD_NAME ||
	!process.env.CLOUDINARY_API_KEY ||
	!process.env.CLOUDINARY_API_SECRET
) {
	throw new Error('The Cloudinary environment variables are required. See example.env');
}
export const CLOUDINARY_CLOUD_NAME = process.env.CLOUDINARY_CLOUD_NAME;
export const CLOUDINARY_API_KEY = process.env.CLOUDINARY_API_KEY;
export const CLOUDINARY_API_SECRET = process.env.CLOUDINARY_API_SECRET;

// This apps uses 3001 as a defaul port
export const PORT = parseInt(process.env.PORT || '') || 3001;

// Postgres DB URL
export const DATABASE_URL =
	process.env.DATABASE_URL || `postgres://${process.env.USER}@localhost/gel3_website_dev`;

// Default to 30 days
export const SESSION_MAX_AGE = parseInt(process.env.SESSION_MAX_AGE || '') || 60 * 60 * 24 * 30;

// If the environment doesn't supply a value, default the secret to a secure random string
// This will cause all cookies to be invalidated with each app restart (annoying but better than having a hardcoded default)
export const SESSION_SECRET =
	process.env.SESSION_SECRET ||
	require('crypto')
		.randomBytes(32)
		.toString('base64')
		.replace(/[^a-zA-Z0-9]+/g, '');
