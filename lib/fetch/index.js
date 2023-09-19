import { fetch as _fetch, Request as _Request, Response as _Response } from "./undici.js";

/** @type {typeof globalThis.fetch} */
export const fetch = /** @type {any} */ (_fetch);

/** @type {typeof globalThis.Request} */
export const Request = /** @type {any} */ (_Request);

/** @type {typeof globalThis.Response} */
export const Response = /** @type {any} */ (_Response);
