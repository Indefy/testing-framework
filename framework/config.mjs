const env = process.env.NODE_ENV || 'development';

const config = {
  development: {
    baseUrl: 'http://localhost:3000',
    apiKey: 'your-dev-api-key',
    env: 'development',
  },
  production: {
    baseUrl: 'https://your-production-url.com',
    apiKey: 'your-prod-api-key',
    env: 'production',
  },
  testing: {
    baseUrl: 'http://localhost:4000',
    apiKey: 'your-test-api-key',
    env: 'testing',
  },
};

export default config[env];
