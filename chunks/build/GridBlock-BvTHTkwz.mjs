import { useSSRContext, defineComponent, defineAsyncComponent, mergeProps, unref } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrRenderComponent } from 'vue/server-renderer';
import { C as CamisetaAzul, B as BolsoAzul, L as LegginAzul, P as PantalonCorto, S as SudaderaAmarilla, T as TopGris } from './top-gris-B-91kZuO.mjs';
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
import 'vue-router';

const gridItems = [
  {
    id: 0,
    title: "Camisetas",
    imgUrl: CamisetaAzul,
    alt: "Camisetas Sportivat",
    route: "/tienda-camisetas"
  },
  {
    id: 1,
    title: "Complementos",
    imgUrl: BolsoAzul,
    alt: "Complementos Sportivat",
    route: "/tienda-complementos"
  },
  {
    id: 2,
    title: "Leggins",
    imgUrl: LegginAzul,
    alt: "Leggins Sportivat",
    route: "/tienda-leggins"
  },
  {
    id: 3,
    title: "Pantalones",
    imgUrl: PantalonCorto,
    alt: "Pantalones Sportivat",
    route: "/tienda-pantalones"
  },
  {
    id: 4,
    title: "Sudaderas",
    imgUrl: SudaderaAmarilla,
    alt: "Sudaderas Sportivat",
    route: "/tienda-sudaderas"
  },
  {
    id: 5,
    title: "Tops",
    imgUrl: TopGris,
    alt: "Tops Sportivat",
    route: "/tienda-tops"
  }
];
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "GridBlock",
  __ssrInlineRender: true,
  setup(__props) {
    const GridItem = defineAsyncComponent(() => import('./GridItem-DVx9RTWZ.mjs'));
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "grid" }, _attrs))} data-v-b0610314><!--[-->`);
      ssrRenderList(unref(gridItems), (item) => {
        _push(ssrRenderComponent(unref(GridItem), mergeProps({
          class: `grid__item-${item.id}`,
          key: item.id,
          ref_for: true
        }, item), null, _parent));
      });
      _push(`<!--]--></section>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/GridBlock.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const GridBlock = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-b0610314"]]);

export { GridBlock as default };
//# sourceMappingURL=GridBlock-BvTHTkwz.mjs.map
