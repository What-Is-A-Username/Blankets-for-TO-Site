(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{"1bYO":function(e,t,a){e.exports={title:"index-module--title--286qy",backgroundImage:"index-module--backgroundImage--1kN2-",logoImage:"index-module--logoImage--242NR",description:"index-module--description--2FQj_",updates:"index-module--updates--2S-yv",whiteBtn:"index-module--whiteBtn--oc1xd",btn:"index-module--btn--2q5In",links:"index-module--links--2x29L",btnRow:"index-module--btnRow--27pa3"}},"3mak":function(e,t,a){e.exports={slideTextBoxFadeOut:"slideshow-slide-module--slideTextBoxFadeOut--3jNZ1",imageFadeOut:"slideshow-slide-module--imageFadeOut--1VzrN",fadeOut:"slideshow-slide-module--fadeOut--2UGXf",slideTextBox:"slideshow-slide-module--slideTextBox--18PNR",fadeIn:"slideshow-slide-module--fadeIn--3LQ17",slideTitle:"slideshow-slide-module--slideTitle--neuCH",slideDescription:"slideshow-slide-module--slideDescription--2haF3",buttonFadeIn:"slideshow-slide-module--buttonFadeIn--1ir5F",imageFadeIn:"slideshow-slide-module--imageFadeIn--19Tyw",aButton:"slideshow-slide-module--aButton--3foXu"}},"D1b+":function(e,t,a){e.exports={previewParent:"article-preview-module--previewParent--zTD6v",alink:"article-preview-module--alink--3Zy_j",previewTitle:"article-preview-module--previewTitle--dtVfR",previewDescription:"article-preview-module--previewDescription--andbH",previewPublishDate:"article-preview-module--previewPublishDate--1_Kqg",preview:"article-preview-module--preview--35oKv",tag:"article-preview-module--tag--1jiS7"}},JM9Q:function(e,t,a){"use strict";var n=a("ZS3K"),o=a("KaJK");n({target:"String",proto:!0,forced:a("Wvaq")("link")},{link:function(e){return o(this,"a","href",e)}})},KaJK:function(e,t,a){var n=a("4jnk"),o=/"/g;e.exports=function(e,t,a,i){var s=String(n(e)),l="<"+t;return""!==a&&(l+=" "+a+'="'+String(i).replace(o,"&quot;")+'"'),l+">"+s+"</"+t+">"}},LPZa:function(e,t,a){e.exports=a.p+"static/blanketsLogoTransparent-8d10f877da05364c42c8e5c557b2ee1d.png"},"M/DS":function(e,t,a){e.exports={contactBox:"contact-box-module--contactBox--1tY7j",imageCover:"contact-box-module--imageCover--7AIKf",slideshow:"contact-box-module--slideshow--1vvFJ",contactBoxSide:"contact-box-module--contactBoxSide--2k_3W",contactBoxDescription:"contact-box-module--contactBoxDescription--3Jf2I",contactBoxSideText:"contact-box-module--contactBoxSideText--2ynWM",contactBoxTitle:"contact-box-module--contactBoxTitle--1MY-9",imageLayer:"contact-box-module--imageLayer--2XgI9",btn:"contact-box-module--btn--21nWb",links:"contact-box-module--links--3JDEq"}},NoSM:function(e,t,a){e.exports={slideshow:"slideshow-module--slideshow--ioNQT",imageCover:"slideshow-module--imageCover--sw38h",imageLayer:"slideshow-module--imageLayer--GqtuV",dots:"slideshow-module--dots--3m9gg",slideshowHighlightedDot:"slideshow-module--slideshowHighlightedDot--1rliB",slideshowDot:"slideshow-module--slideshowDot--2_Lhu",next:"slideshow-module--next--34onE",prev:"slideshow-module--prev--3-AEn"}},RXBc:function(e,t,a){"use strict";a.r(t);var n=a("VbXa"),o=a.n(n),i=a("q1tI"),s=a.n(i),l=a("9eSz"),r=a.n(l),c=a("LPZa"),d=a.n(c),m=a("Wbzz"),u=a("mwIZ"),p=a.n(u),h=a("Bl7J"),g=a("aWpR"),f=a("1bYO"),v=a.n(f),b=a("NoSM"),w=a.n(b),x=a("3mak"),E=a.n(x),y=a("R8uD"),N=function(e){function t(){for(var t,a=arguments.length,n=new Array(a),o=0;o<a;o++)n[o]=arguments[o];return(t=e.call.apply(e,[this].concat(n))||this).state={slide:0,cycle:!0,starting:!1,timers:[]},t.interruptDelay=5e3,t.slideDelay=8e3,t.slideTransition=500,t.interrupt=function(e){(e<0||e>=t.props.menuItems.length)&&(e=0),t.setState({cycle:!1,slide:e}),t.interruptTimer=setTimeout((function(){t.state.cycle||(t.setState({slide:t.state.slide,cycle:!1}),t.state.timers.pop(t.interruptTimer))}),t.interruptDelay)},t.startCycle=function(){t.state.cycle&&t.state.starting&&(t.setState({slide:(t.state.slide+1)%t.props.menuItems.length,starting:!1}),t.startCycleTimer=setTimeout((function(){t.state.cycle&&t.cycleAround(),t.state.timers.pop(t.startCycleTimer)}),t.slideDelay))},t.cycleAround=function(){t.state.cycle&&(t.setState({starting:!0}),t.cycleAroundTimer=setTimeout((function(){t.state.cycle&&t.startCycle(),t.state.timers.pop(t.cycleAroundTimer)}),t.slideTransition),t.state.timers.push(t.cycleAroundTimer))},t}o()(t,e);var a=t.prototype;return a.componentDidMount=function(){this.cycleAround()},a.render=function(){var e=this;return s.a.createElement("div",{className:w.a.slideshow},s.a.createElement("div",{className:w.a.imageCover+" "+(this.state.starting?E.a.imageFadeOut:E.a.imageFadeIn)},s.a.createElement(r.a,{style:{position:"absolute"},fluid:this.props.menuItems[this.state.slide].node.backgroundImage.fluid}),s.a.createElement("div",{className:w.a.imageLayer})),s.a.createElement("div",{className:this.state.starting?E.a.slideTextBoxFadeOut:E.a.slideTextBox},s.a.createElement("h2",{className:E.a.slideTitle},this.props.menuItems[this.state.slide].node.title),s.a.createElement("div",{className:E.a.slideDescription},null!=this.props.menuItems[this.state.slide].node.childContentfulHomeSlideDescriptionRichTextNode?Object(y.documentToReactComponents)(this.props.menuItems[this.state.slide].node.childContentfulHomeSlideDescriptionRichTextNode.json):s.a.createElement("p",null,"Error: Article not found."))),this.state.starting||null==this.props.menuItems[this.state.slide].node.buttonLink?s.a.createElement("div",null):s.a.createElement("a",{className:this.state.starting?E.a.aButton:E.a.aButton+" "+E.a.buttonFadeIn,href:this.props.menuItems[this.state.slide].node.buttonLink},s.a.createElement("button",{className:v.a.btn,type:"submit"},this.props.menuItems[this.state.slide].node.buttonText)),s.a.createElement("div",{className:w.a.dots},this.props.menuItems.map((function(t,a){return a==e.state.slide?s.a.createElement("span",{className:w.a.slideshowHighlightedDot,onClick:function(){return e.interrupt(a)},key:a}):s.a.createElement("span",{className:w.a.slideshowDot,onClick:function(){return e.interrupt(a)},key:a})}))))},a.componentWillUnmount=function(){this.state.timers.map((function(e){return clearTimeout(clearTimeout(e))})),this.setState=function(e,t){}},t}(s.a.Component),T=a("EYWl"),k=(a("JM9Q"),a("M/DS")),B=a.n(k),S=function(e){return s.a.createElement("div",{className:B.a.slideshow},s.a.createElement("div",{className:B.a.imageCover},s.a.createElement(r.a,{style:{position:"absolute"},fluid:e.left}),s.a.createElement("div",{className:B.a.imageLayer})),s.a.createElement("div",{className:B.a.contactBox},[{title:"Join Us",description:"Become part of the Blankets For T.O. community and be part of the change! Looking to join as a member? Interested in volunteering at events? Click below.",link:"/positions",buttonText:"Become a Volunteer or Member"},{title:"Contact Us",description:"Keep in touch with our organization to join the community and stay updated! Got an idea for an initiative? Want to collaborate with BTO? Send us a message via email or message us over social media!",link:"/contact",buttonText:"Contact Us"}].map((function(e){return s.a.createElement("div",{className:B.a.contactBoxSide},s.a.createElement("div",{className:B.a.contactBoxSideText},s.a.createElement("h2",{className:B.a.contactBoxTitle},e.title),s.a.createElement("p",{className:B.a.contactBoxDescription},e.description),s.a.createElement(m.a,{to:e.link,className:B.a.links},s.a.createElement("button",{className:B.a.btn,type:"submit"},e.buttonText))))}))))},I=(a("VSsl"),a("lEL6")),D=a.n(I),C=function(e){return s.a.createElement("div",{className:D.a.logoContainer},e.map((function(e){return s.a.createElement("a",{href:e.linkUrl,target:"_blank",rel:"noopener noreferrer"},s.a.createElement("div",{className:D.a.logo},s.a.createElement("img",{alt:e.name,src:e.logo.resize.src})))})))},O=function(){var e=Object(m.e)(L).allContentfulSponsor.edges.map((function(e){return e.node})),t=e.filter((function(e){return"Preferred"===e.sponsorType})),a=e.filter((function(e){return"Preferred"!==e.sponsorType}));return s.a.createElement("div",{className:D.a.sponsorBox},t.length>0&&s.a.createElement("h2",{className:D.a.preferredSponsorsTitle},"Preferred Sponsors"),t.length>0&&C(t),a.length>0&&s.a.createElement("h2",{className:D.a.secondarySponsorsTitle},"Sponsors"),a.length>0&&C(a))},L="1387491454",F=function(e){function t(){return e.apply(this,arguments)||this}return o()(t,e),t.prototype.render=function(){var e=p()(this,"props.data.allContentfulBlogPost.edges"),t=p()(this,"props.data.allContentfulOrganizationInformation.edges"),a=p()(this,"props.data.allContentfulHomeSlide.edges");return s.a.createElement(h.a,{location:this.props.location},s.a.createElement(T.a,{title:"Home",useMailChimp:!0}),s.a.createElement("div",{className:"white-background"},s.a.createElement("div",{className:v.a.title},s.a.createElement(r.a,{className:v.a.backgroundImage,fluid:t[0].node.frontPageImage.fluid,alt:"Background image behind Blankets for T.O. organization logo."}),s.a.createElement("img",{className:v.a.logoImage,src:d.a,alt:"Blankets for T.O. organization logo image."})),s.a.createElement("div",{className:v.a.description},s.a.createElement("h2",null,"Our Organization"),s.a.createElement("p",null,t[0].node.childContentfulOrganizationInformationOrganizationFrontBlurbTextNode.organizationFrontBlurb),s.a.createElement("div",{className:v.a.btnRow},s.a.createElement(m.a,{to:"/about",className:v.a.links},s.a.createElement("button",{className:v.a.whiteBtn,type:"submit"},"Read Our Mission")),s.a.createElement(m.a,{to:"/team",className:v.a.links},s.a.createElement("button",{className:v.a.whiteBtn,type:"submit"},"Meet The Team")))),s.a.createElement(N,{menuItems:a}),s.a.createElement("div",{className:v.a.updates},s.a.createElement("h2",null,"News and Updates"),s.a.createElement(g.a,{articles:e}),s.a.createElement(m.a,{to:"/blog",className:v.a.links},s.a.createElement("button",{className:v.a.btn,type:"submit"},"Browse all updates"))),s.a.createElement(S,{left:t[0].node.leftBackgroundImage.fluid,right:t[0].node.leftBackgroundImage.fluid}),s.a.createElement(O,null)))},t}(s.a.Component);t.default=F},VSsl:function(e,t,a){var n=a("IvzW"),o=a("jekk").f,i=Function.prototype,s=i.toString,l=/^\s*function ([^ (]*)/;n&&!("name"in i)&&o(i,"name",{configurable:!0,get:function(){try{return s.call(this).match(l)[1]}catch(e){return""}}})},Wvaq:function(e,t,a){var n=a("JhOX");e.exports=function(e){return n((function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3}))}},aWpR:function(e,t,a){"use strict";var n=a("q1tI"),o=a.n(n),i=a("Wbzz"),s=(a("9eSz"),a("D1b+")),l=a.n(s);t.a=function(e){var t=e.articles;return o.a.createElement("div",{className:l.a.previewParent},t.map((function(e){return o.a.createElement("a",{onClick:function(){return Object(i.d)("/blog/"+e.node.slug)},className:l.a.alink,key:e.node.title},o.a.createElement("div",{className:l.a.preview},o.a.createElement("h3",{className:l.a.previewTitle},e.node.title),o.a.createElement("small",{className:l.a.previewPublishDate},e.node.publishDate),o.a.createElement("div",{className:l.a.previewDescription,dangerouslySetInnerHTML:{__html:e.node.description.childMarkdownRemark.html}})))})))}},lEL6:function(e,t,a){e.exports={sponsorBox:"sponsors-module--sponsorBox--2_6SP",preferredSponsorsTitle:"sponsors-module--preferredSponsorsTitle--2UzWU",logo:"sponsors-module--logo--GEvuP",logoContainer:"sponsors-module--logoContainer--2GOwX",preferredSponsorLogo:"sponsors-module--preferredSponsorLogo--2ySNR",secondarySponsorsTitle:"sponsors-module--secondarySponsorsTitle--2bs6r",secondarySponsorLogo:"sponsors-module--secondarySponsorLogo--yr72N"}}}]);
//# sourceMappingURL=component---src-pages-index-js-20ae6d6cb6dd3a343e12.js.map