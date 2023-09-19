/**
 * @callback Middleware
 * @param {Request} request
 * @param {(request: Request) => Promise<Response>} next
 * @returns {Response | Promise<Response>}
 */

/**
 * @callback Adapter
 * @param {Request} request
 * @returns {Response | Promise<Response>}
 */

/**
 * @typedef {typeof fetch & { use(middleware: Middleware): Kof }} Kof
 */

export {};
