(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{"3jNO":function(e,t,r){var n=r("ehR5"),a=r("8mzz"),o=r("17+C"),i=r("WD+B"),l=r("86Yh"),c=[].push,s=function(e){var t=1==e,r=2==e,s=3==e,u=4==e,f=6==e,p=7==e,d=5==e||f;return function(h,m,v,y){for(var g,w,k=o(h),b=a(k),O=n(m,v,3),E=i(b.length),j=0,x=y||l,C=t?x(h,E):r||p?x(h,0):void 0;E>j;j++)if((d||j in b)&&(w=O(g=b[j],j,k),e))if(t)C[j]=w;else if(w)switch(e){case 3:return!0;case 5:return g;case 6:return j;case 2:c.call(C,g)}else switch(e){case 4:return!1;case 7:c.call(C,g)}return f?-1:s||u?u:C}};e.exports={forEach:s(0),map:s(1),filter:s(2),some:s(3),every:s(4),find:s(5),findIndex:s(6),filterOut:s(7)}},"48MS":function(e,t,r){var n=r("bmrq");e.exports=Array.isArray||function(e){return"Array"==n(e)}},"5jch":function(e,t,r){"use strict";var n=r("q1tI"),a=r.n(n),o=r("EVdn"),i=r.n(o),l=r("zw02"),c=r.n(l);t.a=function(e){var t=e.fields,r=e.hideCaption,n=void 0!==r&&r,o="undefined"!=typeof window?i()(window).width():760,l=Math.min(o,760),s="https:"+t.file["en-US"].url+"?w="+String(l),u=void 0!==t.description?t.description["en-US"]:"",f=t.title["en-US"];return a.a.createElement("figure",{className:c.a.imgFigure,style:{width:l}},a.a.createElement("img",{src:s,alt:f}),!n&&a.a.createElement("figcaption",null,u))}},"5xdH":function(e,t,r){"use strict";var n=r("q1tI"),a=r.n(n);function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=Object(n.forwardRef)((function(e,t){var r=e.color,n=void 0===r?"currentColor":r,l=e.size,c=void 0===l?24:l,s=i(e,["color","size"]);return a.a.createElement("svg",o({ref:t,xmlns:"http://www.w3.org/2000/svg",width:c,height:c,viewBox:"0 0 24 24",fill:"none",stroke:n,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},s),a.a.createElement("rect",{x:"9",y:"9",width:"13",height:"13",rx:"2",ry:"2"}),a.a.createElement("path",{d:"M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"}))}));l.displayName="Copy",t.a=l},"86Yh":function(e,t,r){var n=r("ckLD"),a=r("48MS"),o=r("QD2z")("species");e.exports=function(e,t){var r;return a(e)&&("function"!=typeof(r=e.constructor)||r!==Array&&!a(r.prototype)?n(r)&&null===(r=r[o])&&(r=void 0):r=void 0),new(void 0===r?Array:r)(0===t?0:t)}},AAQS:function(e,t,r){"use strict";var n=r("48MS"),a=r("WD+B"),o=r("ehR5"),i=function(e,t,r,l,c,s,u,f){for(var p,d=c,h=0,m=!!u&&o(u,f,3);h<l;){if(h in r){if(p=m?m(r[h],h,t):r[h],s>0&&n(p))d=i(e,t,p,a(p.length),d,s-1)-1;else{if(d>=9007199254740991)throw TypeError("Exceed the acceptable array length");e[d]=p}d++}h++}return d};e.exports=i},CwS1:function(e,t,r){"use strict";var n=r("q1tI"),a=r.n(n);function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=Object(n.forwardRef)((function(e,t){var r=e.color,n=void 0===r?"currentColor":r,l=e.size,c=void 0===l?24:l,s=i(e,["color","size"]);return a.a.createElement("svg",o({ref:t,xmlns:"http://www.w3.org/2000/svg",width:c,height:c,viewBox:"0 0 24 24",fill:"none",stroke:n,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},s),a.a.createElement("polyline",{points:"15 18 9 12 15 6"}))}));l.displayName="ChevronLeft",t.a=l},JoNN:function(e,t,r){"use strict";var n=r("q1tI"),a=r.n(n);function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=Object(n.forwardRef)((function(e,t){var r=e.color,n=void 0===r?"currentColor":r,l=e.size,c=void 0===l?24:l,s=i(e,["color","size"]);return a.a.createElement("svg",o({ref:t,xmlns:"http://www.w3.org/2000/svg",width:c,height:c,viewBox:"0 0 24 24",fill:"none",stroke:n,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},s),a.a.createElement("polyline",{points:"20 6 9 17 4 12"}))}));l.displayName="Check",t.a=l},LOWo:function(e,t,r){r("uKph")("flat")},Z7m2:function(e,t,r){"use strict";var n=r("ZS3K"),a=r("3jNO").find,o=r("uKph"),i=r("xvWs"),l=!0,c=i("find");"find"in[]&&Array(1).find((function(){l=!1})),n({target:"Array",proto:!0,forced:l||!c},{find:function(e){return a(this,e,arguments.length>1?arguments[1]:void 0)}}),o("find")},bNlK:function(e,t,r){"use strict";var n=r("ZS3K"),a=r("AAQS"),o=r("17+C"),i=r("WD+B"),l=r("gQbX"),c=r("86Yh");n({target:"Array",proto:!0},{flat:function(){var e=arguments.length?arguments[0]:void 0,t=o(this),r=i(t.length),n=c(t,0);return n.length=a(n,t,t,r,0,void 0===e?1:l(e)),n}})},ef1B:function(e,t,r){"use strict";r("JM9Q");var n=r("VbXa"),a=r.n(n),o=r("q1tI"),i=r.n(o),l=r("17x9"),c=r.n(l),s=r("ldhG"),u=r.n(s);function f(){return(f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var d=Object(o.forwardRef)((function(e,t){var r=e.color,n=void 0===r?"currentColor":r,a=e.size,o=void 0===a?24:a,l=p(e,["color","size"]);return i.a.createElement("svg",f({ref:t,xmlns:"http://www.w3.org/2000/svg",width:o,height:o,viewBox:"0 0 24 24",fill:"none",stroke:n,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},l),i.a.createElement("path",{d:"M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"}))}));d.displayName="Twitter";var h=d;function m(){return(m=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function v(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var y=Object(o.forwardRef)((function(e,t){var r=e.color,n=void 0===r?"currentColor":r,a=e.size,o=void 0===a?24:a,l=v(e,["color","size"]);return i.a.createElement("svg",m({ref:t,xmlns:"http://www.w3.org/2000/svg",width:o,height:o,viewBox:"0 0 24 24",fill:"none",stroke:n,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},l),i.a.createElement("path",{d:"M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"}))}));y.displayName="Facebook";var g=y;function w(){return(w=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function k(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var b=Object(o.forwardRef)((function(e,t){var r=e.color,n=void 0===r?"currentColor":r,a=e.size,o=void 0===a?24:a,l=k(e,["color","size"]);return i.a.createElement("svg",w({ref:t,xmlns:"http://www.w3.org/2000/svg",width:o,height:o,viewBox:"0 0 24 24",fill:"none",stroke:n,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},l),i.a.createElement("path",{d:"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"}),i.a.createElement("path",{d:"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"}))}));b.displayName="Link";var O=b,E=r("JoNN"),j=r("5xdH"),x=function(e){function t(){for(var t,r=arguments.length,n=new Array(r),a=0;a<r;a++)n[a]=arguments[a];return(t=e.call.apply(e,[this].concat(n))||this).state={linkCopied:!1,timer:-1},t.copyLink=function(){if(!t.state.linkCopied){var e=document.getElementById("linkAddress");e.select(),e.setSelectionRange(0,99999),document.execCommand("copy"),t.setState({linkCopied:!0},(function(){var e=setTimeout((function(){t.setState({linkCopied:!1,timer:e})}),3e3)}))}},t}a()(t,e);var r=t.prototype;return r.render=function(){var e=this;return i.a.createElement("div",{className:u.a.linkContainer},i.a.createElement("div",{className:u.a.socials},i.a.createElement("a",{className:u.a.twitterShareButton,href:"https://twitter.com/intent/tweet?url="+encodeURIComponent(this.props.location),target:"_blank",title:"Share on Twitter"},i.a.createElement(h,{size:20}),"Tweet"),i.a.createElement("a",{className:u.a.twitterShareButton,href:"https://www.facebook.com/sharer/sharer.php?u="+encodeURIComponent(this.props.location),target:"_blank",title:"Share on Facebook"},i.a.createElement(g,{size:20}),"Share")),i.a.createElement("div",{className:u.a.link},i.a.createElement("div",{className:u.a.linkField},i.a.createElement("p",{className:u.a.linkIcon,onClick:this.state.linkCopied?function(){}:function(){return e.copyLink()},title:"Copy this page's link"},i.a.createElement(O,{size:20,color:"white"})),i.a.createElement("input",{type:"text",value:this.props.location,id:"linkAddress",readOnly:!0}),i.a.createElement("p",{className:u.a.linkCopyButton,onClick:this.state.linkCopied?function(){}:function(){return e.copyLink()},title:"Copy this page's link"},this.state.linkCopied?i.a.createElement(E.a,{color:"limegreen",size:25}):i.a.createElement(j.a,{size:20,color:"white"})))))},r.componentWillUnmount=function(){clearTimeout(this.state.timer)},t}(i.a.Component);x.propTypes={location:c.a.string.isRequired};t.a=x},h6GW:function(e,t,r){"use strict";r.r(t);r("Z7m2"),r("6bMU");var n=r("VbXa"),a=r.n(n),o=r("q1tI"),i=r.n(o),l=(r("Wbzz"),r("9eSz")),c=r.n(l),s=r("EYWl"),u=r("mwIZ"),f=r.n(u),p=r("Bl7J"),d=r("ef1B"),h=r("vbKG"),m=r("R8uD"),v=r("lYvg"),y=r.n(v),g=r("uAwv"),w=r("ue6a"),k=r("5jch"),b=function(e){function t(){return e.apply(this,arguments)||this}return a()(t,e),t.prototype.render=function(){var e,t=f()(this.props,"data.contentfulBtoChapter"),r=t.slug,n=t.chapterName,a=t.location,o=t.childContentfulBtoChapterDescriptionRichTextNode,l=t.instagramUsername,u=t.emailAddress,v=t.membershipFormLink,b=t.chapterLogo,O=t.chapterLogoFluid,E=w.contactTemplates,j=[{platform:"Email",linkSuffix:u,displayText:u,entry:u},{platform:"Instagram",linkSuffix:l,displayText:"@"+l,entry:l}].filter((function(e){return null!=e.entry})),x={renderNode:(e={},e[h.BLOCKS.EMBEDDED_ASSET]=function(e){var t=e.data.target.fields;if(t.file["en-US"].contentType.startsWith("image/"))return i.a.createElement(k.a,{fields:t})},e)},C=[i.a.createElement("script",{async:!0,src:"https://platform.twitter.com/widgets.js",charset:"utf-8"}),i.a.createElement("div",{id:"fb-root"}),i.a.createElement("script",{async:!0,defer:!0,crossorigin:"anonymous",src:"https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v10.0",nonce:"9bOR49xF"})];return i.a.createElement(p.a,{location:this.props.location},i.a.createElement("div",{className:"white-background"},i.a.createElement(s.a,{title:n,metaType:"article",description:"Connect with "+n+", the official Blankets for T.O. local chapter at "+a,childElements:C,metaImage:b.file.url,doNotCrawl:!0}),i.a.createElement("div",{className:"wrapper"},i.a.createElement("h1",{className:y.a.title},n),i.a.createElement("div",{className:y.a.horizontal},i.a.createElement("div",{className:y.a.logo},i.a.createElement(c.a,{fluid:O.fluid})),i.a.createElement("div",{className:y.a.info},i.a.createElement("h4",{className:y.a.subtitle},"Location"),i.a.createElement("p",{className:y.a.subtitleContent},a),i.a.createElement("h4",{className:y.a.subtitle},"Membership Application Link"),v?i.a.createElement("a",{href:v},"Access the application form here."):i.a.createElement("p",{className:y.a.subtitleContent},"Please contact the chapter via email or social media for how to join and contribute."),i.a.createElement("h4",{className:y.a.subtitle},"Contact Links"),j.map((function(e){var t=E.find((function(t){return t.platform===e.platform}));return i.a.createElement("div",{className:y.a.socialMediaEntry,key:t.platform},i.a.createElement("a",{href:""+t.linkRoot+e.linkSuffix,target:"_blank",rel:"noopener noreferrer"},i.a.createElement("img",{src:t.icon,alt:t.platform+"Icon"}),e.displayText))})))),i.a.createElement("div",{className:"richText"},null!=o?Object(m.documentToReactComponents)(o.json,x):i.a.createElement("p",null,"Error: Description not found.")),i.a.createElement(g.a,{text:"View other chapters",link:"/chapters"}),i.a.createElement(d.a,{location:"https://blanketsforto.ca/chapter/"+r}))))},t}(i.a.Component);t.default=b},jOk4:function(e,t,r){e.exports={arrowStyles:"back-arrow-module--arrowStyles--3Z1dG"}},lYvg:function(e,t,r){e.exports={title:"chapter-module--title--1bfnp",subtitle:"chapter-module--subtitle--3Ys3y",descriptionHeader:"chapter-module--descriptionHeader--jhG3D",subtitleContent:"chapter-module--subtitleContent--1wsRN",info:"chapter-module--info--3fyt5",horizontal:"chapter-module--horizontal--3IuX8",logo:"chapter-module--logo--1-qZX",socialMediaEntry:"chapter-module--socialMediaEntry--3VHgK"}},ldhG:function(e,t,r){e.exports={linkContainer:"link-sharing-module--linkContainer--3k-_h",socials:"link-sharing-module--socials--1eBtp",linkField:"link-sharing-module--linkField--37aoQ",linkFieldButtonNormal:"link-sharing-module--linkFieldButtonNormal---4oGI",linkFieldButtonClicked:"link-sharing-module--linkFieldButtonClicked--3I7vL",link:"link-sharing-module--link--30K-w",facebookShareButton:"link-sharing-module--facebookShareButton--UeduP",twitterShareButton:"link-sharing-module--twitterShareButton--2OlIh",linkIcon:"link-sharing-module--linkIcon--1Cfjy",linkCopyButton:"link-sharing-module--linkCopyButton--2RZSJ"}},uAwv:function(e,t,r){"use strict";r("JM9Q");var n=r("q1tI"),a=r.n(n),o=r("jOk4"),i=r.n(o),l=r("CwS1");t.a=function(e){var t=e.text,r=e.link;return a.a.createElement("a",{href:r,className:i.a.arrowStyles},a.a.createElement(l.a,null),t)}},zw02:function(e,t,r){e.exports={imgFigure:"captioned-figure-module--imgFigure--1vWHd"}}}]);
//# sourceMappingURL=component---src-templates-chapter-js-a27c69bc7d3eeeac9a74.js.map