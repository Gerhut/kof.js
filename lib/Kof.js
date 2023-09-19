import { userAgent as userAgentMiddleware } from "./middlewares/userAgent.js";
import { Request } from "./fetch/index.js";
import { defaultAdapter } from "./defaultAdapter.js";

/**
 * @param {string} [userAgent]
 * @param {import("./types.js").Adapter} [adapter=defaultAdapter]
 * @returns {import("./types.js").Kof}
 */
export function Kof(userAgent, adapter = defaultAdapter) {
  /** @type {import("./types.js").Middleware[]} */
  const middlewares = [];

  /** @type {typeof fetch} */
  async function kof(input, init) {
    let index = -1;

    /**
     * @param {Request} request
     * @returns {Promise<Response>}
     */
    async function next(request) {
      index += 1;
      if (index < middlewares.length) {
        const middleware = middlewares[index];
        return middleware(request, next);
      } else {
        return adapter(request);
      }
    }

    return next(new Request(input, init));
  }

  /**
   * @param {import("./types.js").Middleware} middleware
   */
  kof.use = function use(middleware) {
    middlewares.unshift(middleware);
    return this;
  };

  if (userAgent != null) {
    kof.use(userAgentMiddleware(userAgent));
  }

  return kof;
}
