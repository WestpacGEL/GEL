const path = require('path');
const fs = require('fs');

// Locate our env vars
// If the app is running in NODE_ENV=production we're probably deployed
// Check for a config.env a few dirs above the CWD, just outside the repo root
const isProd = process.env.NODE_ENV === 'production';
const prodConfigPath = path.resolve(process.cwd(), '../../config.env');
const configPath = isProd && fs.existsSync(prodConfigPath)
		? prodConfigPath
		: path.resolve(process.cwd(), '.env');

// Import our config; this should happen before (most of) the other requires
console.log(`Loading env vars from ${configPath}`);
require('dotenv').config({ path: configPath });
