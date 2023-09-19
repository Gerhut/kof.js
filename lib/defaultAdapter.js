import { fetch } from "./fetch/index.js";

/** @type {import('./types.js').Adapter} */
export function defaultAdapter(request) {
  return fetch(request);
}
