import { Exception } from '@poppinss/utils'

/**
 * Unable to write file to the destination
 */
export class CannotWriteFileException extends Exception {
  declare location: string
  declare original: any

  static invoke(location: string, original: any) {
    const error = new this(`Cannot write file at location "${location}"`, {
      status: 500,
      code: 'E_CANNOT_WRITE_FILE',
    })

    error.location = location
    error.original = original

    return error
  }
}

/**
 * Unable to read file from a given location
 */
export class CannotReadFileException extends Exception {
  declare location: string
  declare original: any

  static invoke(location: string, original: any) {
    const error = new this(`Cannot read file from location "${location}"`, {
      status: 500,
      code: 'E_CANNOT_READ_FILE',
    })

    error.location = location
    error.original = original

    return error
  }
}

/**
 * Unable to delete file from a given location
 */
export class CannotDeleteFileException extends Exception {
  declare location: string
  declare original: any

  static invoke(location: string, original: any) {
    const error = new this(`Cannot delete file at location "${location}"`, {
      status: 500,
      code: 'E_CANNOT_DELETE_FILE',
    })

    error.location = location
    error.original = original

    return error
  }
}

/**
 * Unable to copy file from source to destination
 */
export class CannotCopyFileException extends Exception {
  declare source: string
  declare destination: string
  declare original: any

  static invoke(source: string, destination: string, original: any) {
    const error = new this(`Cannot copy file from "${source}" to "${destination}"`, {
      status: 500,
      code: 'E_CANNOT_COPY_FILE',
    })

    error.source = source
    error.destination = destination
    error.original = original

    return error
  }
}

/**
 * Unable to move file from source to destination
 */
export class CannotMoveFileException extends Exception {
  declare source: string
  declare destination: string
  declare original: any

  static invoke(source: string, destination: string, original: any) {
    const error = new this(`Cannot move file from "${source}" to "${destination}"`, {
      status: 500,
      code: 'E_CANNOT_MOVE_FILE',
    })

    error.source = source
    error.destination = destination
    error.original = original

    return error
  }
}

/**
 * Unable to get file metadata
 */
export class CannotGetMetaDataException extends Exception {
  declare location: string
  declare operation: string
  declare original: any

  static invoke(location: string, operation: string, original: any) {
    const error = new this(
      `Unable to retrieve the "${operation}" for file at location "${location}"`,
      {
        status: 500,
        code: 'E_CANNOT_GET_METADATA',
      }
    )

    error.location = location
    error.operation = operation
    error.original = original

    return error
  }
}

/**
 * Unable to set visibility
 */
export class CannotSetVisibilityException extends Exception {
  declare location: string
  declare original: any

  static invoke(location: string, original: any) {
    const error = new this(`Unable to set visibility for file at location "${location}"`, {
      status: 500,
      code: 'E_CANNOT_SET_VISIBILITY',
    })

    error.location = location
    error.original = original

    return error
  }
}

/**
 * Unable to generate url for a file. The assets serving is disabled
 */
export class CannotGenerateUrlException extends Exception {
  declare location: string

  static invoke(location: string, diskName: string) {
    const error = new this(
      `Cannot generate URL for location "${location}". Make sure to set "serveFiles = true" for "${diskName}" disk`,
      {
        status: 500,
        code: 'E_CANNOT_GENERATE_URL',
      }
    )

    error.location = location
    return error
  }
}

/**
 * Unable to list directory contents of given location
 */
export class CannotListDirectoryException extends Exception {
  declare location: string
  declare original: any

  static invoke(location: string, original: any) {
    const error = new this(`Cannot list directory contents of location "${location}"`, {
      status: 500,
      code: 'E_CANNOT_LIST_DIRECTORY',
    })

    error.location = location
    error.original = original

    return error
  }
}

/**
 * Given location is trying to traverse beyond the root path
 */
export class PathTraversalDetectedException extends Exception {
  declare location: string

  static invoke(location: string) {
    const error = new this(`Path traversal detected: "${location}"`, {
      status: 500,
      code: 'E_PATH_TRAVERSAL_DETECTED',
    })

    error.location = location

    return error
  }
}
