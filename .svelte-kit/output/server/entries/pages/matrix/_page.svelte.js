import { a as slot, d as ensure_array_like, c as attr, e as escape_html } from "../../../chunks/index.js";
import { o as onDestroy } from "../../../chunks/index-server.js";
import { p as posts } from "../../../chunks/content.js";
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    onDestroy(() => {
      return;
    });
    $$renderer2.push(`<div class="loader svelte-lqcok6"><pre class="svelte-lqcok6"></pre></div> <div class="container svelte-lqcok6" style="color: white;"><div class="hero-title svelte-lqcok6">The Matrix</div></div> <!--[-->`);
    slot($$renderer2, $$props, "default", {});
    $$renderer2.push(`<!--]--> <div class="matrix-container svelte-lqcok6"><!--[-->`);
    const each_array = ensure_array_like(Object.entries(posts));
    for (let index = 0, $$length = each_array.length; index < $$length; index++) {
      let [key, post] = each_array[index];
      $$renderer2.push(`<a${attr("href", `./matrix/post/${post.id}`)} class="svelte-lqcok6"><div class="card svelte-lqcok6"><div class="date-time-container svelte-lqcok6"><time class="date-time svelte-lqcok6"><span class="svelte-lqcok6">${escape_html(post.year)}</span> <span class="separator svelte-lqcok6"></span> <span class="svelte-lqcok6">${escape_html(post.date)}</span></time></div> <div class="content svelte-lqcok6"><div class="infos svelte-lqcok6"><span class="svelte-lqcok6"><span class="title svelte-lqcok6">${escape_html(post.title)}</span></span> <p class="description svelte-lqcok6">${escape_html(post.preview)}</p></div> <div class="post-tags svelte-lqcok6"><!--[-->`);
      const each_array_1 = ensure_array_like(Object.entries(post.tags || {}));
      for (let index2 = 0, $$length2 = each_array_1.length; index2 < $$length2; index2++) {
        let [key2, tag] = each_array_1[index2];
        $$renderer2.push(`<div class="tag svelte-lqcok6">${escape_html(tag.name)}</div>`);
      }
      $$renderer2.push(`<!--]--></div> <span class="action svelte-lqcok6" href="#">Read Blog</span></div></div></a>`);
    }
    $$renderer2.push(`<!--]--></div>`);
  });
}
export {
  _page as default
};
