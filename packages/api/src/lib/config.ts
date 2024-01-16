import {definePackage} from '@alwatr/logger';

import type {} from '@alwatr/nano-build'

export const logger = definePackage('@alwatr/soffit-order-admin-api', __package_version__);

if (process.env.NODE_ENV === 'production') {
  if (process.env.STORAGE_TOKEN == null) {
    throw new Error('STORAGE_TOKEN is required in production');
  }
}

export const config = {
  storageClient: {
    host: process.env.STORAGE_HOST ?? '127.0.0.1',
    port: process.env.STORAGE_PORT != null ? +process.env.STORAGE_PORT : 9000,
    token: process.env.STORAGE_TOKEN ?? 'YOUR_SECRET_TOKEN',
  },

  nanoServer: {
    host: process.env.HOST ?? '0.0.0.0',
    port: process.env.PORT != null ? +process.env.PORT : 8000,
    // allowAllOrigin: true,
  },
} as const;

logger.logProperty?.('config', config);
