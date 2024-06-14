import _sfc_main$1 from './ContentDoc-vEGTlixa.mjs';
import { _ as _export_sfc, u as useRoute } from './server.mjs';
import { useSSRContext, defineComponent, mergeProps, unref } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import '@unhead/shared';
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
import './ContentRenderer-Zk1Nis-1.mjs';
import './ContentRendererMarkdown-BALq5aob.mjs';
import 'property-information';
import './preview-Dmof2BE8.mjs';
import './ContentQuery-pf0ylTi4.mjs';
import './query-DhOk0kxZ.mjs';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import 'vue-router';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "[...blog]",
  __ssrInlineRender: true,
  setup(__props) {
    const { blog } = useRoute().params;
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ContentDoc = _sfc_main$1;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "blog-container" }, _attrs))} data-v-130f50e5><article class="blog-container__content" data-v-130f50e5>`);
      _push(ssrRenderComponent(_component_ContentDoc, {
        path: unref(blog)[0]
      }, null, _parent));
      _push(`</article></section>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/blogs/[...blog].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ____blog_ = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-130f50e5"]]);

export { ____blog_ as default };
//# sourceMappingURL=_...blog_-C2WgKybE.mjs.map
