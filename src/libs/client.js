import { createClient } from 'microcms-js-sdk';

export const client = createClient({
  serviceDomain: 'squib02',
  apiKey: process.env.API_KEY,
});