import { _ as __nuxt_component_1 } from './Logo-CDEEviD1.mjs';
import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr } from 'vue/server-renderer';
import { p as publicAssetsURL } from '../routes/renderer.mjs';
import { _ as _export_sfc } from './server.mjs';
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
import 'vue-router';

const _imports_0 = publicAssetsURL("/video/tienda-ropa.webm");
const _imports_1 = publicAssetsURL("/video/tienda-ropa.mp4");
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_Logo = __nuxt_component_1;
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "hero" }, _attrs))} data-v-43569977><article class="hero__content" data-v-43569977><h1 class="hero__title" data-v-43569977>`);
  _push(ssrRenderComponent(_component_Logo, null, null, _parent));
  _push(`</h1><p data-v-43569977>La mejor tienda de ropa deportiva</p><p class="hero__subtext" data-v-43569977>\xA1Env\xEDos a todo el pa\xEDs!</p></article><video class="hero__video" muted autoplay loop playsinline data-v-43569977><source${ssrRenderAttr("src", _imports_0)} type="video/webm" data-v-43569977><source${ssrRenderAttr("src", _imports_1)} type="video/mp4" data-v-43569977></video></section>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/HeroBlock.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const HeroBlock = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-43569977"]]);

export { HeroBlock as default };
//# sourceMappingURL=HeroBlock-BCKueeXy.mjs.map
