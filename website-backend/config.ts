import dotenv from 'dotenv';

// Import our config; this should happen before (most of) the other requires
console.log(`Loading env vars`);
dotenv.config();

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
