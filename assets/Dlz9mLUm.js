import{_ as l}from"./BTdNY2vH.js";import{d as i,o as d,c as p,g as e,t as a,a as r,w as s,h as n,_}from"./Bboc9OG6.js";const u=i({__name:"Card",props:{title:{},price:{},category:{},size:{},imgUrl:{},slug:{}},setup(m){const c=()=>{alert("Added to cart")};return(t,g)=>{const o=l;return d(),p("article",null,[e("h2",null,a(t.title),1),e("p",null,a(t.price),1),e("p",null,a(t.category),1),r(o,{class:"button",onClick:c},{default:s(()=>[n("Añadir al carrito")]),_:1}),r(o,{class:"button",to:{name:"tienda-category-title",params:{title:t.slug,category:t.category}}},{default:s(()=>[n("Más información")]),_:1},8,["to"])])}}}),C=_(u,[["__scopeId","data-v-c66897cd"]]);export{C as default};