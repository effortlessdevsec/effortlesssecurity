"use strict";(self.webpackChunkeffortlessdevsec=self.webpackChunkeffortlessdevsec||[]).push([[4212],{3250:(e,t,s)=>{s.r(t),s.d(t,{default:()=>m});s(6540);var a=s(4164),o=s(1213),r=s(7559),l=s(6461),n=s(8027),u=s(1463),i=s(1107),h=s(6913);const c={authorListItem:"authorListItem_n3yI"};var g=s(4848);function p(e){let{author:t}=e;return(0,g.jsx)("li",{className:c.authorListItem,children:(0,g.jsx)(h.A,{as:"h2",author:t,count:t.count})})}function d(e){let{authors:t}=e;return(0,g.jsx)("section",{className:(0,a.A)("margin-vert--lg",c.authorsListSection),children:(0,g.jsx)("ul",{children:t.map((e=>(0,g.jsx)(p,{author:e},e.key)))})})}function m(e){let{authors:t,sidebar:s}=e;const h=(0,l.uz)();return(0,g.jsxs)(o.e3,{className:(0,a.A)(r.G.wrapper.blogPages,r.G.page.blogAuthorsListPage),children:[(0,g.jsx)(o.be,{title:h}),(0,g.jsx)(u.A,{tag:"blog_authors_list"}),(0,g.jsxs)(n.A,{sidebar:s,children:[(0,g.jsx)(i.A,{as:"h1",children:h}),(0,g.jsx)(d,{authors:t})]})]})}},6461:(e,t,s)=>{s.d(t,{ZD:()=>n,np:()=>h,uz:()=>i,wI:()=>u});s(6540);var a=s(1312),o=s(5846),r=s(4848);function l(){const{selectMessage:e}=(0,o.W)();return t=>e(t,(0,a.T)({id:"theme.blog.post.plurals",description:'Pluralized label for "{count} posts". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One post|{count} posts"},{count:t}))}function n(e){const t=l();return(0,a.T)({id:"theme.blog.tagTitle",description:"The title of the page for a blog tag",message:'{nPosts} tagged with "{tagName}"'},{nPosts:t(e.count),tagName:e.label})}function u(e){const t=l();return(0,a.T)({id:"theme.blog.author.pageTitle",description:"The title of the page for a blog author",message:"{authorName} - {nPosts}"},{nPosts:t(e.count),authorName:e.name||e.key})}const i=()=>(0,a.T)({id:"theme.blog.authorsList.pageTitle",message:"Authors",description:"The title of the authors page"});function h(){return(0,r.jsx)(a.A,{id:"theme.blog.authorsList.viewAll",description:"The label of the link targeting the blog authors page",children:"View all authors"})}}}]);