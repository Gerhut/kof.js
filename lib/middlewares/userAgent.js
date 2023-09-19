/**
 * @param {string} userAgent
 * @returns {import("../types.js").Middleware}
 */
export function userAgent(userAgent) {
  return (request, next) => {
    request.headers.set("User-Agent", userAgent);
    return next(request);
  };
}
