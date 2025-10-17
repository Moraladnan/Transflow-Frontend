import createClient from 'openapi-fetch';
// import type { paths } from './generated/api'; // Uncomment when OpenAPI schema is generated

// For now, create a basic client configuration
// Replace 'any' with 'paths' when schema is generated
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const client = createClient<any>({ 
  baseUrl: import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000/api' 
});

export default client;

// Example usage:
// const { data, error } = await client.GET('/users/{id}', {
//   params: { path: { id: '123' } }
// });
