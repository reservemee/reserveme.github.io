import{r as m,bp as b,n as e,j as t,a0 as s,a1 as c,bw as v,bx as i,by as o,aP as N,L as l,cl as x,aQ as C,a2 as k,a3 as y,B as D,i as B}from"./index.3706b7ab.js";import{B as w}from"./BlogSidebar.595b6e6a.js";import{A as L}from"./App.15c12863.js";import{B as P}from"./index.63f1591f.js";/* empty css                  */import{M as j}from"./message-square.efe7921c.js";import"./index.3d98e4ca.js";import"./truck.0ec2fc87.js";import"./square.15178c89.js";import"./rss.b409590a.js";import"./archive.27252747.js";import"./save.672ea441.js";import"./arrow-down.f67b24e2.js";import"./arrow-left.1f99fca5.js";import"./arrow-right.21b6ecd6.js";import"./award.fcfa2c04.js";import"./gift.cf092f36.js";import"./wifi.eb406bd2.js";import"./book.dd758e88.js";import"./bookmark.357366a5.js";import"./box.9ed5e450.js";import"./briefcase.6fc63e21.js";import"./calendar.04311c29.js";import"./inbox.93d26355.js";import"./check-circle.b6a85831.js";import"./video.06add2d7.js";import"./chevron-down.866dd6eb.js";import"./chevron-left.09aa871d.js";import"./chevron-right.ff0d2e79.js";import"./globe.e00d906d.js";import"./clipboard.f16f38b5.js";import"./clock.a0d1c446.js";import"./sun.2a145705.js";import"./code.c10c1b08.js";import"./copy.2f702d7d.js";import"./maximize-2.bb79d460.js";import"./credit-card.d4be9c94.js";import"./database.63605585.js";import"./dollar-sign.8c5894b3.js";import"./download-cloud.2afbf9bf.js";import"./download.099e5178.js";import"./edit-2.73ce6e5d.js";import"./edit.fd7b8c59.js";import"./external-link.d1c4db67.js";import"./eye-off.c0f15933.js";import"./eye.8cba672e.js";import"./facebook.91d4cea7.js";import"./file.16fa070b.js";import"./github.5d0f96ce.js";import"./grid.c3eeda5a.js";import"./hash.eb380048.js";import"./help-circle.ac1f36c6.js";import"./image.e3026ad6.js";import"./info.ba73233f.js";import"./instagram.3c21c9bb.js";import"./link.2a318152.js";import"./linkedin.e9706adc.js";import"./list.021cb8fa.js";import"./lock.73e2c3be.js";import"./mail.974718ba.js";import"./map-pin.5c745919.js";import"./minus.4996aad4.js";import"./monitor.63ff9234.js";import"./more-vertical.4dbe3945.js";import"./package.80657743.js";import"./paperclip.178e8365.js";import"./pen-tool.222d2af0.js";import"./phone-call.a8ec1498.js";import"./play.5377f5f2.js";import"./plus-circle.5f71d28e.js";import"./plus.3e919054.js";import"./pocket.2723bdfc.js";import"./printer.52a3814c.js";import"./rotate-cw.9bdb061c.js";import"./search.7d86859f.js";import"./shopping-bag.4232bc32.js";import"./share-2.9a2bc849.js";import"./share.8f8f8af5.js";import"./shield.5ce0b6a0.js";import"./shopping-cart.47e5a875.js";import"./slack.b6820225.js";import"./smartphone.3ad53087.js";import"./star.d24c0117.js";import"./tablet.8f984ed6.js";import"./tag.28af5b63.js";import"./thumbs-up.8343ed76.js";import"./trash-2.f197bb33.js";import"./trash.8426a05a.js";import"./watch.e739df9b.js";import"./trending-up.fc8ac5a8.js";import"./twitter.56f3c8e7.js";import"./user-check.b8784ca5.js";import"./user-plus.9d948971.js";import"./user-x.4a7290a5.js";import"./x-circle.cf15fb69.js";import"./youtube.5033d5cb.js";const vr=()=>{const[p,d]=m.exports.useState(null);m.exports.useEffect(()=>{b.get("/blog/list/data").then(r=>d(r.data))},[]);const h={Quote:"light-info",Fashion:"light-primary",Gaming:"light-danger",Video:"light-warning",Food:"light-success"},g=()=>p.map(r=>{const f=()=>r.tags.map((a,n)=>t("a",{href:"/",onClick:u=>u.preventDefault(),children:t(D,{className:B({"me-50":n!==r.tags.length-1}),color:h[a],pill:!0,children:a})},n));return t(c,{md:"6",children:e(N,{children:[t(l,{to:`/pages/blog/detail/${r.id}`,children:t(x,{className:"img-fluid",src:r.img,alt:r.title,top:!0})}),e(C,{children:[t(k,{tag:"h4",children:t(l,{className:"blog-title-truncate text-body-heading",to:`/pages/blog/detail/${r.id}`,children:r.title})}),e("div",{className:"d-flex",children:[t(L,{className:"me-50",img:r.avatar,imgHeight:"24",imgWidth:"24"}),e("div",{children:[t("small",{className:"text-muted me-25",children:"by"}),t("small",{children:t("a",{className:"text-body",href:"/",onClick:a=>a.preventDefault(),children:r.userFullName})}),t("span",{className:"text-muted ms-50 me-25",children:"|"}),t("small",{className:"text-muted",children:r.blogPosted})]})]}),t("div",{className:"my-1 py-25",children:f()}),t(y,{className:"blog-content-truncate",children:r.excerpt}),t("hr",{}),e("div",{className:"d-flex justify-content-between align-items-center",children:[e(l,{to:`/pages/blog/detail/${r.id}`,children:[t(j,{size:15,className:"text-body me-50"}),e("span",{className:"text-body fw-bold",children:[r.comment," Comments"]})]}),t(l,{className:"fw-bold",to:`/pages/blog/detail/${r.id}`,children:"Read More"})]})]})]})},r.title)});return e(m.exports.Fragment,{children:[t(P,{title:"Blog List",data:[{title:"Pages"},{title:"Blog"},{title:"List"}]}),e("div",{className:"blog-wrapper",children:[t("div",{className:"content-detached content-left",children:t("div",{className:"content-body",children:p!==null?e("div",{className:"blog-list-wrapper",children:[t(s,{children:g()}),t(s,{children:t(c,{sm:"12",children:e(v,{className:"d-flex justify-content-center mt-2",children:[t(i,{className:"prev-item",children:t(o,{href:"#",onClick:r=>r.preventDefault()})}),t(i,{children:t(o,{href:"#",onClick:r=>r.preventDefault(),children:"1"})}),t(i,{children:t(o,{href:"#",onClick:r=>r.preventDefault(),children:"2"})}),t(i,{children:t(o,{href:"#",onClick:r=>r.preventDefault(),children:"3"})}),t(i,{active:!0,children:t(o,{href:"#",onClick:r=>r.preventDefault(),children:"4"})}),t(i,{children:t(o,{href:"#",onClick:r=>r.preventDefault(),children:"5"})}),t(i,{children:t(o,{href:"#",onClick:r=>r.preventDefault(),children:"6"})}),t(i,{children:t(o,{href:"#",onClick:r=>r.preventDefault(),children:"7"})}),t(i,{className:"next-item",children:t(o,{href:"#",onClick:r=>r.preventDefault()})})]})})})]}):null})}),t(w,{})]})]})};export{vr as default};
