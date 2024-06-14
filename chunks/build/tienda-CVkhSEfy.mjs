import { useSSRContext, defineComponent, defineAsyncComponent, unref, mergeProps } from 'vue';
import { ssrRenderComponent, ssrRenderList } from 'vue/server-renderer';
import { p as products } from './products-BgPabeA8.mjs';
import { _ as _export_sfc } from './server.mjs';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
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
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import './top-gris-B-91kZuO.mjs';
import 'vue-router';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "tienda",
  __ssrInlineRender: true,
  setup(__props) {
    const Card = defineAsyncComponent(() => import('./Card-okxv_IVS.mjs'));
    const CategoryNavegation = defineAsyncComponent(
      () => import('./CategoryNavegation-C9k5RbRD.mjs')
    );
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(CategoryNavegation), null, null, _parent));
      _push(`<h1 class="title" data-v-8d83a7e8>Toda nuestra colecci\xF3n</h1><section class="grid" data-v-8d83a7e8><!--[-->`);
      ssrRenderList(unref(products), (product) => {
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/tienda.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const tienda = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-8d83a7e8"]]);

export { tienda as default };
//# sourceMappingURL=tienda-CVkhSEfy.mjs.map
