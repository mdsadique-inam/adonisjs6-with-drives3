import { defineConfig } from '../app/drive/define_config.js'
import env from '#start/env'

const driveConfig = defineConfig({
  visibility: 'private',
  key: env.get('S3_KEY'),
  secret: env.get('S3_SECRET'),
  region: env.get('S3_REGION'),
  bucket: env.get('S3_BUCKET'),
  endpoint: env.get('S3_ENDPOINT'),

  // For minio to work
  forcePathStyle: true,
})

export default driveConfig
