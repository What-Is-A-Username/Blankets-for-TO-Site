(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{"5l6m":function(e,t,n){"use strict";var a=n("+uX7"),r=n("m/aQ"),i=n("17+C"),o=n("WD+B"),l=n("gQbX"),s=n("4jnk"),c=n("5Cvy"),u=n("mh2x"),d=Math.max,p=Math.min,m=Math.floor,f=/\$([$&'`]|\d\d?|<[^>]*>)/g,v=/\$([$&'`]|\d\d?)/g;a("replace",2,(function(e,t,n,a){var h=a.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE,b=a.REPLACE_KEEPS_$0,g=h?"$":"$0";return[function(n,a){var r=s(this),i=null==n?void 0:n[e];return void 0!==i?i.call(n,r,a):t.call(String(r),n,a)},function(e,a){if(!h&&b||"string"==typeof a&&-1===a.indexOf(g)){var i=n(t,e,this,a);if(i.done)return i.value}var s=r(e),m=String(this),f="function"==typeof a;f||(a=String(a));var v=s.global;if(v){var k=s.unicode;s.lastIndex=0}for(var E=[];;){var y=u(s,m);if(null===y)break;if(E.push(y),!v)break;""===String(y[0])&&(s.lastIndex=c(m,o(s.lastIndex),k))}for(var x,N="",B=0,C=0;C<E.length;C++){y=E[C];for(var S=String(y[0]),T=d(p(l(y.index),m.length),0),I=[],_=1;_<y.length;_++)I.push(void 0===(x=y[_])?x:String(x));var D=y.groups;if(f){var P=[S].concat(I,T,m);void 0!==D&&P.push(D);var L=String(a.apply(void 0,P))}else L=w(S,m,T,I,D,a);T>=B&&(N+=m.slice(B,T)+L,B=T+S.length)}return N+m.slice(B)}];function w(e,n,a,r,o,l){var s=a+e.length,c=r.length,u=v;return void 0!==o&&(o=i(o),u=f),t.call(l,u,(function(t,i){var l;switch(i.charAt(0)){case"$":return"$";case"&":return e;case"`":return n.slice(0,a);case"'":return n.slice(s);case"<":l=o[i.slice(1,-1)];break;default:var u=+i;if(0===u)return t;if(u>c){var d=m(u/10);return 0===d?t:d<=c?void 0===r[d-1]?i.charAt(1):r[d-1]+i.charAt(1):t}l=r[u-1]}return void 0===l?"":l}))}}))},"D1b+":function(e,t,n){e.exports={updates:"article-preview-module--updates--2tWvO",previewParent:"article-preview-module--previewParent--zTD6v",preview:"article-preview-module--preview--35oKv",previewText:"article-preview-module--previewText--2t-lu",previewImage:"article-preview-module--previewImage--18UBZ",alink:"article-preview-module--alink--3Zy_j",previewTitle:"article-preview-module--previewTitle--dtVfR",previewDescription:"article-preview-module--previewDescription--andbH",previewPublishDate:"article-preview-module--previewPublishDate--1_Kqg",tag:"article-preview-module--tag--1jiS7"}},IFRj:function(e,t,n){"use strict";function a(e,t){var n={};for(var a in e)t.indexOf(a)>=0||Object.prototype.hasOwnProperty.call(e,a)&&(n[a]=e[a]);return n}function r(e,t){var n=t.left,a=t.right,r=t.up,i=t.down,o=t.top,l=t.bottom,s=t.mirror,c=t.opposite,d=(n?1:0)|(a?2:0)|(o||i?4:0)|(l||r?8:0)|(s?16:0)|(c?32:0)|(e?64:0);if(p.hasOwnProperty(d))return p[d];if(!s!=!(e&&c)){var m=[a,n,l,o,i,r];n=m[0],a=m[1],o=m[2],l=m[3],r=m[4],i=m[5]}var f,v=n||a,h=o||l||r||i,b=void 0,g=void 0,w=void 0,k=void 0,E=void 0,y=void 0,x=void 0,N=void 0,B=void 0,C=void 0,S=void 0,T=void 0,I=void 0;return e?(w=v?(a?"-":"")+"20px":0,k=h?(r||l?"":"-")+"10px":"0",E=(i||o?"":"-")+"20px",T=v?(n?"-":"")+"2000px":"0",I=h?(i||o?"-":"")+"2000px":"0"):(b=v?(n?"-":"")+"3000px":"0",g=h?(i||o?"-":"")+"3000px":"0",y=v?(a?"-":"")+"25px":"0",x=h?(r||l?"-":"")+"25px":"0",N=v?(n?"-":"")+"10px":"0",B=h?(i||o?"-":"")+"10px":"0",C=v?(a?"-":"")+"5px":"0",S=h?(r||l?"-":"")+"5px":"0"),f=v||h?e?"\n        20% {\n          transform: translate3d("+w+", "+k+", 0);\n          }\n        "+(h?"40%, 45% {\n            opacity: 1;\n            transform: translate3d(0, "+E+", 0);\n          }":"")+"\n          to {\n            opacity: 0;\n            transform: translate3d("+T+", "+I+", 0);\n        }\n      ":"from, 60%, 75%, 90%, to {\n        animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);\n      }\n      from {\n        opacity: 0;\n        transform: translate3d("+b+", "+g+", 0);\n      }\n      60% {\n        opacity: 1;\n        transform: translate3d("+y+", "+x+", 0);\n      }\n      75% {\n        transform: translate3d("+N+", "+B+", 0);\n      }\n      90% {\n        transform: translate3d("+C+", "+S+", 0);\n      }\n      to {\n        transform: none;\n      }":e?"20% {\n          transform: scale3d(.9, .9, .9);\n        }\n        50%, 55% {\n          opacity: 1;\n          transform: scale3d(1.1, 1.1, 1.1);\n        }\n        to {\n          opacity: 0;\n          transform: scale3d(.3, .3, .3);\n      }":"from, 20%, 40%, 60%, 80%, to {\n        animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);\n      }\n      0% {\n        opacity: 0;\n        transform: scale3d(.3, .3, .3);\n      }\n      20% {\n        transform: scale3d(1.1, 1.1, 1.1);\n      }\n      40% {\n        transform: scale3d(.9, .9, .9);\n      }\n      60% {\n        opacity: 1;\n        transform: scale3d(1.03, 1.03, 1.03);\n      }\n      80% {\n        transform: scale3d(.97, .97, .97);\n      }\n      to {\n        opacity: 1;\n        transform: scale3d(1, 1, 1);\n      }",p[d]=(0,u.animation)(f),p[d]}function i(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u.defaults,t=e.children,n=(e.out,e.forever),i=e.timeout,o=e.duration,l=void 0===o?u.defaults.duration:o,s=e.delay,d=void 0===s?u.defaults.delay:s,p=e.count,m=void 0===p?u.defaults.count:p,f=a(e,["children","out","forever","timeout","duration","delay","count"]),v={make:r,duration:void 0===i?l:i,delay:d,forever:n,count:m,style:{animationFillMode:"both"},reverse:f.left};return(0,c.default)(f,v,v,t)}Object.defineProperty(t,"__esModule",{value:!0});var o,l=n("17x9"),s=n("eH+L"),c=(o=s)&&o.__esModule?o:{default:o},u=n("ar19"),d={out:l.bool,left:l.bool,right:l.bool,top:l.bool,bottom:l.bool,mirror:l.bool,opposite:l.bool,duration:l.number,timeout:l.number,delay:l.number,count:l.number,forever:l.bool},p={};i.propTypes=d,t.default=i,e.exports=t.default},JM9Q:function(e,t,n){"use strict";var a=n("ZS3K"),r=n("KaJK");a({target:"String",proto:!0,forced:n("Wvaq")("link")},{link:function(e){return r(this,"a","href",e)}})},L2L3:function(e,t,n){e.exports={title:"blog-post-module--title--taf5a",horizontalLine:"blog-post-module--horizontalLine--20qcL",publishDate:"blog-post-module--publishDate--ywUQM",browseAllButton:"blog-post-module--browseAllButton--3YqB5",links:"blog-post-module--links--3hIfu"}},QkGs:function(e,t,n){e.exports={whiteButton:"styled-button-module--whiteButton--LbBn9",primaryButton:"styled-button-module--primaryButton--33jVM",links:"styled-button-module--links--2A7r_"}},aWpR:function(e,t,n){"use strict";var a=n("q1tI"),r=n.n(a),i=n("Wbzz"),o=n("9eSz"),l=n.n(o),s=n("D1b+"),c=n.n(s),u=(n("tANy"),n("17x9")),d=n.n(u),p=n("/eHF"),m=n.n(p),f=n("IFRj"),v=n.n(f),h=n("wBlv"),b=function(e){var t=e.article;return r.a.createElement("a",{onClick:function(){return Object(i.d)("/blog/"+t.slug)},className:c.a.alink,key:t.title},r.a.createElement("div",{className:c.a.preview},r.a.createElement("div",{className:c.a.previewImage},null!=t.imagePreview?r.a.createElement(l.a,{fluid:t.imagePreview.fluid,alt:t.imagePreview.description}):null),r.a.createElement("div",{className:c.a.previewText},r.a.createElement("h3",{className:c.a.previewTitle},t.title),r.a.createElement("small",{className:c.a.previewPublishDate},t.publishDate))))},g=function(e,t){var n=0;return r.a.createElement("div",{className:c.a.updates},r.a.createElement(v.a,{left:!0},r.a.createElement("h2",null,"Keep updated with our latest events")),r.a.createElement(m.a,null,r.a.createElement("div",{className:c.a.previewParent},e.map((function(e,a){return e.node.slug===t||n>=3?null:(i=e,n++,r.a.createElement(b,{article:i.node}));var i})))),r.a.createElement(m.a,{delay:500},r.a.createElement(h.a,{buttonText:"Browse all updates",link:"/blog"})))},w=function(e){var t=e.excludeSlug;return r.a.createElement(i.b,{query:"3882140423",render:function(e){return g(e.allContentfulBlogPost.edges,t)}})};w.propTypes={excludeSlug:d.a.string},w.defaultProps={excludeSlug:""};t.a=w},ef1B:function(e,t,n){"use strict";n("JM9Q");var a=n("VbXa"),r=n.n(a),i=n("q1tI"),o=n.n(i),l=n("17x9"),s=n.n(l),c=n("ldhG"),u=n.n(c),d=function(e){function t(){for(var t,n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))||this).state={linkCopied:!1,timer:-1},t.copyLink=function(){if(!t.state.linkCopied){var e=document.getElementById("linkAddress");e.select(),e.setSelectionRange(0,99999),document.execCommand("copy"),t.setState({linkCopied:!0},(function(){var e=setTimeout((function(){t.setState({linkCopied:!1,timer:e})}),3e3)}))}},t}r()(t,e);var n=t.prototype;return n.render=function(){var e=this;return o.a.createElement("div",{className:u.a.linkContainer},o.a.createElement("div",{className:u.a.socials},o.a.createElement("a",{href:"https://twitter.com/share?ref_src=twsrc%5Etfw",className:"twitter-share-button","data-size":"large","data-related":"blanketsforto","data-show-count":"false"},"Tweet"),o.a.createElement("div",{id:"fb-root"}),",",o.a.createElement("script",{async:!0,defer:!0,crossOrigin:"anonymous",src:"https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v10.0",nonce:"9bOR49xF"}),o.a.createElement("div",{className:"fb-like","data-href":this.props.location,"data-width":"","data-layout":"button","data-action":"like","data-size":"large","data-share":"false"}),o.a.createElement("div",{className:"fb-share-button","data-href":this.props.location,"data-layout":"button","data-size":"large"},o.a.createElement("a",{href:"https://www.facebook.com/sharer/sharer.php?u="+encodeURIComponent(this.props.location),target:"_blank",alt:"Share on Facebook",className:"fb-xfbml-parse-ignore"},"Share"))),o.a.createElement("div",{className:u.a.link},o.a.createElement("div",{className:u.a.linkField},o.a.createElement("input",{style:{width:this.props.location.length+"ch"},type:"text",value:this.props.location,id:"linkAddress",readOnly:!0}),o.a.createElement("button",{className:this.state.linkCopied?u.a.linkFieldButtonClicked:u.a.linkFieldButtonNormal,onClick:function(){return e.copyLink()}},this.state.linkCopied?"Copied!":"Copy URL"))))},n.componentWillUnmount=function(){clearTimeout(this.state.timer)},t}(o.a.Component);d.propTypes={location:s.a.string.isRequired},t.a=d},ldhG:function(e,t,n){e.exports={linkContainer:"link-sharing-module--linkContainer--3k-_h",socials:"link-sharing-module--socials--1eBtp",linkField:"link-sharing-module--linkField--37aoQ",linkFieldButtonNormal:"link-sharing-module--linkFieldButtonNormal---4oGI",linkFieldButtonClicked:"link-sharing-module--linkFieldButtonClicked--3I7vL",link:"link-sharing-module--link--30K-w"}},wBlv:function(e,t,n){"use strict";n("JM9Q");var a=n("q1tI"),r=n.n(a),i=(n("Wbzz"),n("17x9")),o=n.n(i),l=n("QkGs"),s=n.n(l),c=function(e){var t=e.buttonText,n=e.link,a=e.isWhite,i=e.openInNewTab;return r.a.createElement("a",{href:n,className:a?s.a.whiteButton:s.a.primaryButton,target:i?"_blank":"",rel:"noopener noreferrer"},t)};c.propTypes={buttonText:o.a.string.isRequired,link:o.a.string.isRequired,isWhite:o.a.bool,openInNewTab:o.a.bool},c.defaultProps={isWhite:!1,openInNewTab:!1},t.a=c},yZlL:function(e,t,n){"use strict";n.r(t);n("5l6m");var a=n("VbXa"),r=n.n(a),i=n("q1tI"),o=n.n(i),l=(n("Wbzz"),n("EYWl")),s=n("mwIZ"),c=n.n(s),u=n("Bl7J"),d=n("aWpR"),p=n("ef1B"),m=n("vbKG"),f=n("R8uD"),v=n("L2L3"),h=n.n(v),b=n("tANy"),g=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e,t=c()(this.props,"data.contentfulBlogPost"),n=(c()(this,"props.data.allContentfulBlogPost.edges"),{renderNode:(e={},e[m.BLOCKS.EMBEDDED_ASSET]=function(e){var t=e.data.target.fields;return o.a.createElement("img",{src:t.file["en-US"].url,style:{width:t.file["en-US"].details.image.width},alt:t.description})},e[m.BLOCKS.HEADING_3]=function(e,t){return o.a.createElement("h3",{id:t[0].toUpperCase().replace(/ /g,"_")},t)},e[m.BLOCKS.HEADING_2]=function(e,t){return o.a.createElement("h2",{id:t[0].toUpperCase().replace(/ /g,"_")},t)},e[m.BLOCKS.HEADING_4]=function(e,t){return o.a.createElement("h4",{id:t[0].toUpperCase().replace(/ /g,"_")},t)},e)}),a=[o.a.createElement("script",{async:!0,src:"https://platform.twitter.com/widgets.js",charset:"utf-8"}),o.a.createElement("div",{id:"fb-root"}),o.a.createElement("script",{async:!0,defer:!0,crossorigin:"anonymous",src:"https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v10.0",nonce:"9bOR49xF"})];return o.a.createElement(u.a,{location:this.props.location},o.a.createElement("div",{className:"white-background"},o.a.createElement(l.a,{title:t.title,metaType:"article",description:t.publishDate+" - "+t.description.childMarkdownRemark.rawMarkdownBody,childElements:a}),console.log(t.richTextBody.json),o.a.createElement("div",{className:"wrapper"},o.a.createElement("h1",{className:h.a.title},t.title),o.a.createElement(b.a,{tags:t.tags,clickable:!0}),o.a.createElement("p",{className:h.a.publishDate},"by ",t.authorName,", ",t.publishDate),o.a.createElement("p",{className:h.a.publishDate}),o.a.createElement("div",{className:"richText"},null!=t.richTextBody?Object(f.documentToReactComponents)(t.richTextBody.json,n):o.a.createElement("p",null,"Error: Article not found.")),o.a.createElement(p.a,{location:"https://blanketsforto.ca/blog/"+t.slug}),o.a.createElement("hr",{className:h.a.horizontalLine}),o.a.createElement(d.a,{excludeSlug:t.slug}))))},t}(o.a.Component);t.default=g}}]);
//# sourceMappingURL=component---src-templates-blog-post-js-e5b59ecae5d6ff4790c6.js.map