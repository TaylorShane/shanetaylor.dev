#!/usr/bin/env node

/**
 * Build script to load environment variables from .env file
 * and inject them into the build process via process.env
 *
 * Usage: node scripts/load-env.js
 */

const fs = require('fs');
const path = require('path');

// Load .env file if it exists
const envFilePath = path.join(__dirname, '../.env');
let gitHubToken = 'failed-to-load-token';

if (fs.existsSync(envFilePath)) {
  require('dotenv').config({ path: envFilePath });
  console.log('✓ Loaded environment variables from .env file');
  gitHubToken = process.env.GH_PAT || 'failed-to-load-token';
} else {
  // Try to get from system environment variables
  gitHubToken = process.env.GH_PAT || 'failed-to-load-token';
  if (gitHubToken === 'failed-to-load-token') {
    console.warn('⚠ No .env file found and GH_PAT not set in system environment');
  } else {
    console.log('✓ Using GH_PAT from system environment variables');
  }
}

// Validate that GH_PAT is available
if (gitHubToken === 'failed-to-load-token') {
  console.warn('⚠ GH_PAT environment variable is not set');
} else {
  console.log('✓ GH_PAT loaded successfully');
}

// Generate environment files with the token
const environmentDev = `// This file can be replaced during build by using the \`fileReplacements\` array.
// \`ng build --prod\` replaces \`environment.ts\` with \`environment.prod.ts\`.
// The list of file replacements can be found in \`angular.json\`.

export const environment = {
  production: false,
  gitHubToken: '${gitHubToken.replace(/'/g, "\\'")}'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as \`zone.run\`, \`zoneDelegate.invokeTask\`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
`;

const environmentProd = `export const environment = {
  production: true,
  gitHubToken: '${gitHubToken.replace(/'/g, "\\'")}'
};
`;

const envPath = path.join(__dirname, '../src/environments');
try {
  fs.writeFileSync(path.join(envPath, 'environment.ts'), environmentDev);
  fs.writeFileSync(path.join(envPath, 'environment.prod.ts'), environmentProd);
  console.log('✓ Environment files updated with GitHub token');
} catch (error) {
  console.error('✗ Failed to write environment files:', error.message);
  process.exit(1);
}
