import { DriversList } from './types.js'

/**
 * Expected shape of the config accepted by the "driveConfig"
 * method
 */
type DriveConfig = DriversList['s3']['config']

/**
 * Define config for AdonisJS drive
 */
export function defineConfig<T extends Omit<DriveConfig, 'driver'>>(config: T): DriveConfig {
  return {
    ...config,
    driver: 's3',
  }
}
