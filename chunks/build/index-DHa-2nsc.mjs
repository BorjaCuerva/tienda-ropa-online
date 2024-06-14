import { a as buildAssetsURL } from '../routes/renderer.mjs';
import { _ as __nuxt_component_0 } from './nuxt-link-CD2sUYba.mjs';
import { useSSRContext, defineComponent, defineAsyncComponent, mergeProps, unref, withCtx, createTextVNode, toDisplayString, createVNode } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
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

const SportBlog = "" + buildAssetsURL("deporte-blog.ap7beQj9.jpg");
const ClothesBlog = "" + buildAssetsURL("ropa-blog.Cq2ElwZx.jpg");
const RoutineBlog = "" + buildAssetsURL("rutina-blog.zI9j-Smu.jpg");
const RunningBlog = "" + buildAssetsURL("equipacion-correr.B--PZedc.jpg");
const blogs = [
  {
    title: "Cuidado y Mantenimiento de tu Ropa Deportiva",
    description: "Descubre c\xF3mo mantener tu ropa deportiva en perfectas condiciones con nuestros consejos pr\xE1cticos",
    slug: "cuidado-ropa-deportiva",
    date: "06-01-2024",
    alt: "Camisetas Sportivat",
    imgUrl: ClothesBlog
  },
  {
    title: "\xA1Prep\xE1rate para el Gran Evento Deportivo en Madrid!",
    description: "Madrid est\xE1 lista para recibir a los aficionados en un a\xF1o repleto de eventos deportivos de gran calibre",
    slug: "evento-deportivo-madrid",
    date: "16-03-2024",
    alt: "Camisetas Sportivat",
    imgUrl: SportBlog
  },
  {
    title: "Equipamiento Esencial para Correr",
    description: "Para prepararte para correr, es crucial tener el equipo adecuado que te permita disfrutar de tus sesiones de manera c\xF3moda y segura",
    slug: "equipamiento-para-correr",
    date: "22-04-2024",
    alt: "Camisetas Sportivat",
    imgUrl: RunningBlog
  },
  {
    title: "Rutinas de Entrenamiento para Mejorar tu Rendimiento",
    description: "Para mejorar tu rendimiento deportivo, es fundamental implementar rutinas de entrenamiento bien estructuradas y personalizadas a tus necesidades espec\xEDficas",
    slug: "rutinas-entrenamiento-rendimiento",
    date: "11-5-2024",
    alt: "Camisetas Sportivat",
    imgUrl: RoutineBlog
  }
];
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const BlogCard = defineAsyncComponent(() => import('./BlogCard-P7La-_Au.mjs'));
    return (_ctx, _push, _parent, _attrs) => {
      const _component_nuxt_link = __nuxt_component_0;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "grid" }, _attrs))} data-v-06df565a><!--[-->`);
      ssrRenderList(unref(blogs), ({ slug, title, alt, date, description, imgUrl }) => {
        _push(ssrRenderComponent(unref(BlogCard), {
          key: slug,
          title,
          description,
          date,
          imgUrl,
          slug,
          alt
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_nuxt_link, {
                to: `/blogs/${slug}`
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(title)}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(title), 1)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_nuxt_link, {
                  to: `/blogs/${slug}`
                }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(title), 1)
                  ]),
                  _: 2
                }, 1032, ["to"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/blogs/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-06df565a"]]);

export { index as default };
//# sourceMappingURL=index-DHa-2nsc.mjs.map
