import { a as buildAssetsURL } from '../routes/renderer.mjs';
import { useSSRContext, defineComponent, resolveComponent, mergeProps, withCtx, unref, createVNode, openBlock, createBlock, Fragment, renderList } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderAttr } from 'vue/server-renderer';
import { register } from 'swiper/element/bundle';
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

const BannerPromoSecond = "" + buildAssetsURL("banner-promo-sportivat-second.D9lzUxj_.jpg");
const BannerPromo = "" + buildAssetsURL("banner-promo-sportivat.DtWeIIrd.jpg");
const carouselItems = [
  {
    id: 1,
    imageUrl: BannerPromo,
    alt: "Banner promo sportivat Fashion Week"
  },
  {
    id: 2,
    imageUrl: BannerPromoSecond,
    alt: "Banner promo sportivat"
  }
];
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "CarouselBlock",
  __ssrInlineRender: true,
  setup(__props) {
    register();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_swiper_container = resolveComponent("swiper-container");
      const _component_swiper_slide = resolveComponent("swiper-slide");
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "container" }, _attrs))} data-v-0deef0c1>`);
      _push(ssrRenderComponent(_component_swiper_container, {
        class: "container__carousel",
        navigation: "true"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(unref(carouselItems), (items) => {
              _push2(ssrRenderComponent(_component_swiper_slide, {
                key: items.id
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<img class="container__img"${ssrRenderAttr("src", items.imageUrl)}${ssrRenderAttr("alt", items.alt)} data-v-0deef0c1${_scopeId2}>`);
                  } else {
                    return [
                      createVNode("img", {
                        class: "container__img",
                        src: items.imageUrl,
                        alt: items.alt
                      }, null, 8, ["src", "alt"])
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]-->`);
          } else {
            return [
              (openBlock(true), createBlock(Fragment, null, renderList(unref(carouselItems), (items) => {
                return openBlock(), createBlock(_component_swiper_slide, {
                  key: items.id
                }, {
                  default: withCtx(() => [
                    createVNode("img", {
                      class: "container__img",
                      src: items.imageUrl,
                      alt: items.alt
                    }, null, 8, ["src", "alt"])
                  ]),
                  _: 2
                }, 1024);
              }), 128))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</section>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/CarouselBlock.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const CarouselBlock = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-0deef0c1"]]);

export { CarouselBlock as default };
//# sourceMappingURL=CarouselBlock-BnNzxrPL.mjs.map
