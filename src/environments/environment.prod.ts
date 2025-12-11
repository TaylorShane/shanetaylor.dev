export const environment = {
  production: true,
  gitHubToken: process.env['GH_PAT'] || 'failed-to-load-token'
};
