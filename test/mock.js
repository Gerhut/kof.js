import { Response } from "../lib/fetch/index.js";

/**
 * @param {BodyInit} [body]
 * @param {ResponseInit} [init]
 * @returns {import('../lib/types.js').Adapter}
 */
export function mock(body, init) {
  return () => new Response(body, init);
}
