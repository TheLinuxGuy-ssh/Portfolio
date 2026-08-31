import { ai as store_get, a7 as head, a4 as escape_html, a8 as attr, ac as attr_style, aj as unsubscribe_stores, ab as stringify, a5 as getContext } from '../../../../../chunks/index.js-CDHmKEcc.js';
import '@sveltejs/kit/internal';
import '../../../../../chunks/exports.js-BZBK1HC9.js';
import '../../../../../chunks/utils2.js-BQzn9ikS.js';
import '@sveltejs/kit/internal/server';
import '../../../../../chunks/root.js-DCvEOIhH.js';
import '../../../../../chunks/state.svelte.js-D5PTkhEz.js';
import { p as posts } from '../../../../../chunks/content.js-Dt5z75Kd.js';
import '../../../../../chunks/false.js-DaZuhRgw.js';
import '../../../../../chunks/utils.js-DF0O8cBk.js';
import '@sveltejs/kit';

const getStores = () => {
  const stores$1 = getContext("__svelte__");
  return {
    /** @type {typeof page} */
    page: {
      subscribe: stores$1.page.subscribe
    },
    /** @type {typeof navigating} */
    navigating: {
      subscribe: stores$1.navigating.subscribe
    },
    /** @type {typeof updated} */
    updated: stores$1.updated
  };
};
const page = {
  subscribe(fn) {
    const store = getStores().page;
    return store.subscribe(fn);
  }
};
const leftArrow = "data:image/webp;base64,UklGRhwEAABXRUJQVlA4WAoAAAAQAAAA/wAA/wAAQUxQSFYDAAABkEPbtqk9J7Zt27Zt27Zt20llVLZt2/n9/7Ftnir47ilW/EUEJLdtBEm2CdRtrjO7VR8Q/Hr9j5e0xCjTsPOQvq1r5mZOmsGH9Ov6jkiDm0TzP+p3ujo9a0brj3R+PM5E3aU/1htZKZPsmv5oX1dmTIa76kEbInqonuRdNr5k8Yzq9dh0yfFYPe1KuOR8op43B5vn6iA7yFLghTppXq7ke6luMhkrhV3Ry1Qp+UadNSmUd+ou1ZFSziVtg+SDuswgoFRTt53KkyofHWcETmq5pm1wfFLXqQiTpuq+yVjS8Iv7XGDR3ICORkl7tWh2krQzsZVEVxNfMsPTRSD62giKDu9leg6jbHypwGGKkea/jObY+NSQwzwbH2sJRUJZqcJhqY0P9N6V47DMxpuSGMJYKcxhrdGXbQ5hjTzPhyHcZiM5Oey08YRDBCMPs3DYZ+NeBgyRrKTmcMTGLQ5RjYSk4HDSRmASDNGtJMAQ65wNHxCXbVyOiyGukXOxOPgYiY4hgZGTIAJtHImKIYmRfZE4hBiJgCGFkZ0gbtnYHA5DaiNrw3K8nrxnJAzI41EbyzhkMbI0FIcn8HIamQfiuY05IK8njUwheTwKr7CRYSSPR230JXk8aqMryONRI+1IHo/aXCYFUcVIc5LHo/B3aWsZqUXyeJT9KrE0tPGhCvrrSdV35eiV5NBWTfq6FIeqn9nv0kr2NzbycYh9z8SLvML+guxJThBJPhjdpQXJfAv3M5EI89rmKjFJytrcpUXJDJO7tCy5ZHGXFiYv6UU2uEtLk3Tu79LiJK3jXIzNkyiKv5f481Hni0OTuarwxypKv/Cv8TdfDXqBZUk/KP1xmtIvzj38ZX+Dv6qf8ddWlf5zWn+xOf5unuKvk5fokaynl+iRbKC34Y3k32j+TbDZgTD4my4kHWOz+kJ/vBsRfwOEfs9i4K+90G+90O9VGJqNd7/iQn9sKvTrK/SbKvSbRhSZ4TT9hH7NmSKTHaaMCPvxU2SB324R+PUCi0xxk8Qi7McZIux7FRsuMt3jDBQR9OOuUMK+6zGEsOM8yOMcwtgm738015IJZfM9+rFsiSqcjTP93ffj1yCUoDb54lffjk87AW7ZaYd87uurG+c3dEst+PX6Hy8UEVZQOCCgAAAA8BAAnQEqAAEAAT6RSKFNJaQjIiAoALASCWlu4XaxG0AJ7APfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOFAAP7/vBF8QAAAAAAAAAAAAA==";
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    let params, post, content;
    let top = 0;
    let bottom = 0;
    params = store_get($$store_subs ??= {}, "$page", page).params;
    post = posts.find((item) => `${item.id}` === `${params.page}`);
    content = post?.content || "";
    head("1ki1qr1", $$renderer2, ($$renderer3) => {
      $$renderer3.title(($$renderer4) => {
        $$renderer4.push(`<title>TheLinuxGuy | Tech Enthusiast</title>`);
      });
      $$renderer3.push(`<meta charset="UTF-8" class="svelte-1ki1qr1"/> <link rel="icon" type="image/svg+xml" href="/images/general/logo.webp" class="svelte-1ki1qr1"/> <meta name="viewport" content="width=device-width, initial-scale=1.0" class="svelte-1ki1qr1"/> <meta name="title"${attr("content", post.title)} class="svelte-1ki1qr1"/> <meta name="description"${attr("content", post.preview)} class="svelte-1ki1qr1"/> <meta name="keywords" content="Artificial Intelligence, Ai, AI, humans, history" class="svelte-1ki1qr1"/> <meta name="robots" content="index, follow" class="svelte-1ki1qr1"/> <meta http-equiv="Content-Type" content="text/html; charset=utf-8" class="svelte-1ki1qr1"/> <meta name="language" content="English" class="svelte-1ki1qr1"/> <meta name="revisit-after" content="14 days" class="svelte-1ki1qr1"/> <meta name="author" content="TheLinuxGuy" class="svelte-1ki1qr1"/> <link rel="preconnect" href="https://fonts.googleapis.com" class="svelte-1ki1qr1"/> <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="" class="svelte-1ki1qr1"/> <link href="https://fonts.googleapis.com/css2?family=Jura:wght@400&amp;display=swap" rel="stylesheet" class="svelte-1ki1qr1"/>`);
    });
    $$renderer2.push(`<div class="container svelte-1ki1qr1"><div class="ruler svelte-1ki1qr1"><div class="mask one svelte-1ki1qr1">${escape_html(top)}%</div> <div class="mask two svelte-1ki1qr1">${escape_html(bottom)}%</div> <div class="lines svelte-1ki1qr1"><span class="svelte-1ki1qr1"></span> <span class="svelte-1ki1qr1"></span> <span class="svelte-1ki1qr1"></span> <span class="svelte-1ki1qr1"></span> <span class="svelte-1ki1qr1"></span> <span class="svelte-1ki1qr1"></span> <span class="svelte-1ki1qr1"></span> <span class="svelte-1ki1qr1"></span> <span class="svelte-1ki1qr1"></span> <span class="svelte-1ki1qr1"></span> <span class="svelte-1ki1qr1"></span> <span class="svelte-1ki1qr1"></span> <span class="svelte-1ki1qr1"></span> <span class="svelte-1ki1qr1"></span> <span class="svelte-1ki1qr1"></span> <span class="svelte-1ki1qr1"></span> <span class="svelte-1ki1qr1"></span> <span class="svelte-1ki1qr1"></span> <span class="svelte-1ki1qr1"></span> <span class="svelte-1ki1qr1"></span> <span class="svelte-1ki1qr1"></span> <span class="svelte-1ki1qr1"></span> <span class="svelte-1ki1qr1"></span> <span class="svelte-1ki1qr1"></span> <span class="svelte-1ki1qr1"></span></div></div> <a href="../" class="back-btn svelte-1ki1qr1">`);
    {
      $$renderer2.push("<!--[0-->");
      {
        $$renderer2.push("<!--[-1-->");
        $$renderer2.push(`<img${attr("src", leftArrow)} class="back-img svelte-1ki1qr1" alt=""/>`);
      }
      $$renderer2.push(`<!--]-->`);
    }
    $$renderer2.push(`<!--]-->Back</a> <main id="main" class="svelte-1ki1qr1"><div class="line top svelte-1ki1qr1"></div> <article class="svelte-1ki1qr1"><h1 class="svelte-1ki1qr1">${escape_html(post.title)}</h1> <p contenteditable="false" class="svelte-1ki1qr1">`);
    if (content) {
      $$renderer2.push(`${content}`);
    }
    $$renderer2.push(`</p></article> <div class="line bottom svelte-1ki1qr1"></div></main> <a class="scroll svelte-1ki1qr1"${attr_style(`opacity: ${stringify(0)}`)} href="#main"><div class="container svelte-1ki1qr1"><div class="rectangle svelte-1ki1qr1"></div> <div class="rectangle svelte-1ki1qr1"></div> <div class="rectangle svelte-1ki1qr1"></div> <div class="rectangle svelte-1ki1qr1"></div> <div class="rectangle svelte-1ki1qr1"></div> <div class="rectangle svelte-1ki1qr1"></div> <div class="rectangle svelte-1ki1qr1"></div> <div class="rectangle svelte-1ki1qr1"></div></div> <span class="text svelte-1ki1qr1">Throttle up</span></a></div>`);
    if ($$store_subs) unsubscribe_stores($$store_subs);
  });
}

export { _page as default };
//# sourceMappingURL=_page.svelte.js-D1b0_LsF.js.map
