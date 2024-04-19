import { ApplicationService } from '@adonisjs/core/types'
import { S3Driver } from './s3.js'

export default class DriveProvider {
  constructor(protected app: ApplicationService) {}

  protected registerS3Drive() {
    this.app.container.singleton(S3Driver, async (resolver) => {
      const config = await this.app.config.get<any>('drive')
      const logger = await resolver.make('logger')
      return new S3Driver(config, logger)
    })
  }

  register() {
    this.registerS3Drive()
  }
}
