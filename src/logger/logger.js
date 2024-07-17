export function logInfo(message, level = "[WARN]"){
    console.info(level, message)
}

export function logError(error, level = "[ERR]"){
    console.error(level, error)
}