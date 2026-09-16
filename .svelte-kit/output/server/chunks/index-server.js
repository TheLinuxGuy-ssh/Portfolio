import { p as ssr_context, n as noop } from "./index.js";
import "clsx";
function onDestroy(fn) {
  /** @type {SSRContext} */
  ssr_context.r.on_destroy(fn);
}
function createEventDispatcher() {
  return noop;
}
export {
  createEventDispatcher as c,
  onDestroy as o
};
