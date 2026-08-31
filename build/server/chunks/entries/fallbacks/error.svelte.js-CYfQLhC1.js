import { a4 as escape_html, a5 as getContext } from '../../chunks/index.js-CDHmKEcc.js';
import '../../chunks/state.svelte.js-D5PTkhEz.js';
import '@sveltejs/kit/internal';
import '../../chunks/exports.js-BZBK1HC9.js';
import '../../chunks/utils2.js-BQzn9ikS.js';
import { w as writable } from '../../chunks/index2.js-CFw0VsKr.js';
import '@sveltejs/kit/internal/server';
import '../../chunks/root.js-DCvEOIhH.js';
import '../../chunks/false.js-DaZuhRgw.js';
import '../../chunks/utils.js-DF0O8cBk.js';
import '@sveltejs/kit';

function create_updated_store() {
  const { set, subscribe } = writable(false);
  {
    return {
      subscribe,
      // eslint-disable-next-line @typescript-eslint/require-await
      check: async () => false
    };
  }
}
const stores = {
  updated: /* @__PURE__ */ create_updated_store()
};
({
  check: stores.updated.check
});
function context() {
  return getContext("__request__");
}
const page$1 = {
  get error() {
    return context().page.error;
  },
  get status() {
    return context().page.status;
  }
};
const page = page$1;
function Error$1($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    $$renderer2.push(`<h1>${escape_html(page.status)}</h1> <p>${escape_html(page.error?.message)}</p>`);
  });
}

export { Error$1 as default };
//# sourceMappingURL=error.svelte.js-CYfQLhC1.js.map
