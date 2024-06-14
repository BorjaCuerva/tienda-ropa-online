import { useSSRContext, defineComponent, defineAsyncComponent, mergeProps, unref, withCtx, createTextVNode, toDisplayString } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import { S as STORE_SLUGS } from './slugs-CBLxDzWG.mjs';
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
  __name: "CategoryNavegation",
  __ssrInlineRender: true,
  setup(__props) {
    const CategoryButton = defineAsyncComponent(
      () => import('./CategoryButton-B10YmqHn.mjs')
    );
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "navigation" }, _attrs))} data-v-5a049d9e><!--[-->`);
      ssrRenderList(unref(STORE_SLUGS), (slugs) => {
        _push(ssrRenderComponent(unref(CategoryButton), {
          slug: slugs.slug
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(slugs.name)}`);
            } else {
              return [
                createTextVNode(toDisplayString(slugs.name), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></section>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/common/CategoryNavegation.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const CategoryNavegation = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-5a049d9e"]]);

export { CategoryNavegation as default };
//# sourceMappingURL=CategoryNavegation-C9k5RbRD.mjs.map
