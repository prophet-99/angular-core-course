import { InjectionToken } from '@angular/core';

export interface ApiConfig {
  apiUrl: string;
  mode: 'local' | 'remote';
}

export const apiConfig: ApiConfig = {
  apiUrl: 'https://jsonplaceholder.typicode.com',
  mode: 'remote',
};

export const API_CONFIG_TOKEN = new InjectionToken<ApiConfig>('API_CONFIG', {
  providedIn: 'root',
  factory: () => apiConfig,
});
