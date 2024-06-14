import { useSSRContext, defineComponent, defineAsyncComponent, ref, mergeProps, unref, withCtx, createTextVNode } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent } from 'vue/server-renderer';
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
  __name: "Card",
  __ssrInlineRender: true,
  props: {
    title: {},
    price: {},
    category: {},
    size: {},
    imgUrl: {},
    slug: {}
  },
  setup(__props) {
    const MainButton = defineAsyncComponent(
      () => import('./MainButton-DhgqQRuf.mjs')
    );
    const props = __props;
    const styleCard = ref({
      backgroundImage: `url(${props.imgUrl})`
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<article${ssrRenderAttrs(mergeProps({
        class: "card",
        style: unref(styleCard)
      }, _attrs))} data-v-d63e90f9><div class="card__container" data-v-d63e90f9><article class="card__info" data-v-d63e90f9><h2 class="card__title" data-v-d63e90f9>${ssrInterpolate(_ctx.title)}</h2><span data-v-d63e90f9>${ssrInterpolate(_ctx.size)}</span><span class="card__price" data-v-d63e90f9>${ssrInterpolate(_ctx.price)}\u20AC</span></article><article class="card__buttons" data-v-d63e90f9>`);
      _push(ssrRenderComponent(unref(MainButton), null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`A\xF1adir al carrito`);
          } else {
            return [
              createTextVNode("A\xF1adir al carrito")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</article></div></article>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Card.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Card = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-d63e90f9"]]);

export { Card as default };
//# sourceMappingURL=Card-okxv_IVS.mjs.map
