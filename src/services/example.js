// src/services/example.js
import { request } from '@/utils/request';

export async function fetchExampleData(params) {
  return request('/all', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(params),
  });
}
