import { _ as __nuxt_component_0 } from './nuxt-link-CD2sUYba.mjs';
import { useSSRContext, defineComponent, mergeProps, withCtx, createVNode, toDisplayString } from 'vue';
import { ssrRenderComponent, ssrInterpolate, ssrRenderAttr } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';
import '../runtime.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import 'unified';
import 'mdast-util-to-string';
import 'micromark';
import 'unist-util-stringify-position';
import 'micromark-util-character';
import 'micromark-util-chunked';
import 'micromark-util-resolve-all';
import 'micromark-util-sanitize-uri';
import 'slugify';
import 'remark-parse';
import 'remark-rehype';
import 'remark-mdc';
import 'hast-util-to-string';
import 'github-slugger';
import 'detab';
import 'remark-emoji';
import 'remark-gfm';
import 'rehype-external-links';
import 'rehype-sort-attribute-values';
import 'rehype-sort-attributes';
import 'rehype-raw';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "BlogCard",
  __ssrInlineRender: true,
  props: {
    title: {},
    description: {},
    date: {},
    imgUrl: {},
    alt: {},
    slug: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(ssrRenderComponent(_component_NuxtLink, mergeProps({
        class: "card",
        to: `/blogs/${_ctx.slug}`
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<article class="card" data-v-915e36e0${_scopeId}><header class="card__header" data-v-915e36e0${_scopeId}><time data-v-915e36e0${_scopeId}>${ssrInterpolate(_ctx.date)}</time></header><div class="card__div" data-v-915e36e0${_scopeId}><img class="card__img"${ssrRenderAttr("src", _ctx.imgUrl)}${ssrRenderAttr("alt", _ctx.alt)} data-v-915e36e0${_scopeId}></div><footer class="card__footer" data-v-915e36e0${_scopeId}><h2 class="card__title" data-v-915e36e0${_scopeId}>${ssrInterpolate(_ctx.title)}</h2><p class="card__description" data-v-915e36e0${_scopeId}>${ssrInterpolate(_ctx.description)}</p></footer></article>`);
          } else {
            return [
              createVNode("article", { class: "card" }, [
                createVNode("header", { class: "card__header" }, [
                  createVNode("time", null, toDisplayString(_ctx.date), 1)
                ]),
                createVNode("div", { class: "card__div" }, [
                  createVNode("img", {
                    class: "card__img",
                    src: _ctx.imgUrl,
                    alt: _ctx.alt
                  }, null, 8, ["src", "alt"])
                ]),
                createVNode("footer", { class: "card__footer" }, [
                  createVNode("h2", { class: "card__title" }, toDisplayString(_ctx.title), 1),
                  createVNode("p", { class: "card__description" }, toDisplayString(_ctx.description), 1)
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/BlogCard.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const BlogCard = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-915e36e0"]]);

export { BlogCard as default };
//# sourceMappingURL=BlogCard-P7La-_Au.mjs.map
