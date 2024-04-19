import { S3Driver } from './s3.js'
import app from '@adonisjs/core/services/app'

let drive: S3Driver

await app.booted(async () => {
  drive = await app.container.make(S3Driver)
})

export { drive as default }
