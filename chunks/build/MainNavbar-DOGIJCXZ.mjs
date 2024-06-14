import { _ as __nuxt_component_0 } from './nuxt-link-CD2sUYba.mjs';
import { _ as __nuxt_component_1 } from './Logo-CDEEviD1.mjs';
import { useSSRContext, mergeProps, withCtx, createTextVNode, createVNode } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
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

const _sfc_main$1 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    xmlns: "http://www.w3.org/2000/svg",
    width: "30",
    height: "30",
    fill: "currentColor",
    class: "bi bi-cart2",
    viewBox: "0 0 16 16"
  }, _attrs))}><path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5M3.14 5l1.25 5h8.22l1.25-5zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0m9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0"></path></svg>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/svg/Cart.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_NuxtLink = __nuxt_component_0;
  const _component_Logo = __nuxt_component_1;
  const _component_Cart = __nuxt_component_2;
  _push(`<nav${ssrRenderAttrs(mergeProps({ class: "navbar" }, _attrs))} data-v-b9a31c54><ul class="navbar__ul" data-v-b9a31c54><li class="navbar__li" data-v-b9a31c54>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: { name: "index" },
    "active-class": "active"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Home`);
      } else {
        return [
          createTextVNode("Home")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li class="navbar__li" data-v-b9a31c54>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: { name: "tienda" },
    "active-class": "active"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Tienda`);
      } else {
        return [
          createTextVNode("Tienda")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li class="navbar__li" data-v-b9a31c54>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: { name: "blogs" },
    "active-class": "active"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Blog`);
      } else {
        return [
          createTextVNode("Blog")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li class="navbar__li" data-v-b9a31c54>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: { name: "contacto" },
    "active-class": "active"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Contacto`);
      } else {
        return [
          createTextVNode("Contacto")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li></ul>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    class: "navbar__logo",
    to: { name: "index" }
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_Logo, null, null, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_Logo)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<ul class="navbar__ul navbar__ul--icons" data-v-b9a31c54><li class="navbar__li" data-v-b9a31c54>`);
  _push(ssrRenderComponent(_component_Cart, null, null, _parent));
  _push(`</li></ul></nav>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/MainNavbar.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const MainNavbar = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-b9a31c54"]]);

export { MainNavbar as default };
//# sourceMappingURL=MainNavbar-DOGIJCXZ.mjs.map
