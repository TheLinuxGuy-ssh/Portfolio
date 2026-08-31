import { n as noop } from './index.js-CDHmKEcc.js';
import './exports.js-BZBK1HC9.js';
import '@sveltejs/kit/internal/server';
import './root.js-DCvEOIhH.js';

const is_legacy = noop.toString().includes("$$") || /function \w+\(\) \{\}/.test(noop.toString());
const placeholder_url = "a:";
if (is_legacy) {
  ({
    url: new URL(placeholder_url)
  });
}
//# sourceMappingURL=state.svelte.js-D5PTkhEz.js.map
