import { S3ClientConfig } from '@aws-sdk/client-s3'

/**
 * Configuration accepted by the s3 driver
 */
export type S3DriverConfig = S3ClientConfig & {
  driver: 's3'
  visibility?: Visibility
  bucket: string
  cdnUrl?: string
  key?: string
  secret?: string
}

/**
 * Content options for files
 */
export type ContentHeaders = {
  contentType?: string
  contentLanguage?: string
  contentEncoding?: string
  contentDisposition?: string
  cacheControl?: string
  contentLength?: string | number
}

/**
 * Options for writing, moving and copying
 * files
 */
export type WriteOptions = {
  visibility?: string
} & ContentHeaders &
  Record<string, any>

/**
 * Available visibilities
 */
export type Visibility = 'public' | 'private'

/**
 * Stats returned by the drive drivers
 */
export type DriveFileStats = {
  size: number
  modified: Date
  isFile: boolean
  etag?: string
}

export interface DriversList {
  s3: {
    config: S3DriverConfig
  }
}
