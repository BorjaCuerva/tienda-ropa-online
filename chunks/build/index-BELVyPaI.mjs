import { useSSRContext, defineComponent, defineAsyncComponent, unref, mergeProps } from 'vue';
import { _ as _export_sfc, u as useRoute } from './server.mjs';
import { p as products } from './products-BgPabeA8.mjs';
import { ssrRenderComponent, ssrInterpolate, ssrRenderList } from 'vue/server-renderer';
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
import './top-gris-B-91kZuO.mjs';

function filterProductsByCategory(category) {
  return products.filter((product) => product.category === category);
}
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const Card = defineAsyncComponent(() => import('./Card-okxv_IVS.mjs'));
    const CategoryNavegation = defineAsyncComponent(
      () => import('./CategoryNavegation-C9k5RbRD.mjs')
    );
    const { category } = useRoute().params;
    const products2 = filterProductsByCategory(category);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(CategoryNavegation), null, null, _parent));
      _push(`<h1 class="title" data-v-27bf1d91>${ssrInterpolate(unref(category))}</h1><section class="grid" data-v-27bf1d91><!--[-->`);
      ssrRenderList(unref(products2), (product) => {
        _push(ssrRenderComponent(unref(Card), mergeProps({
          key: product.id,
          ref_for: true
        }, product), null, _parent));
      });
      _push(`<!--]--></section><!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/tienda-[category]/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-27bf1d91"]]);

export { index as default };
//# sourceMappingURL=index-BELVyPaI.mjs.map
