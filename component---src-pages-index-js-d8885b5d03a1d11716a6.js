(self.webpackChunkblankets_for_to_site=self.webpackChunkblankets_for_to_site||[]).push([[678],{8273:function(e,t,n){"use strict";n.r(t),n.d(t,{CountUp:function(){return a}});var i=function(){return i=Object.assign||function(e){for(var t,n=1,i=arguments.length;n<i;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},i.apply(this,arguments)},a=function(){function e(e,t,n){var a=this;this.endVal=t,this.options=n,this.version="2.6.2",this.defaults={startVal:0,decimalPlaces:0,duration:2,useEasing:!0,useGrouping:!0,useIndianSeparators:!1,smartEasingThreshold:999,smartEasingAmount:333,separator:",",decimal:".",prefix:"",suffix:"",enableScrollSpy:!1,scrollSpyDelay:200,scrollSpyOnce:!1},this.finalEndVal=null,this.useEasing=!0,this.countDown=!1,this.error="",this.startVal=0,this.paused=!0,this.once=!1,this.count=function(e){a.startTime||(a.startTime=e);var t=e-a.startTime;a.remaining=a.duration-t,a.useEasing?a.countDown?a.frameVal=a.startVal-a.easingFn(t,0,a.startVal-a.endVal,a.duration):a.frameVal=a.easingFn(t,a.startVal,a.endVal-a.startVal,a.duration):a.frameVal=a.startVal+(a.endVal-a.startVal)*(t/a.duration);var n=a.countDown?a.frameVal<a.endVal:a.frameVal>a.endVal;a.frameVal=n?a.endVal:a.frameVal,a.frameVal=Number(a.frameVal.toFixed(a.options.decimalPlaces)),a.printValue(a.frameVal),t<a.duration?a.rAF=requestAnimationFrame(a.count):null!==a.finalEndVal?a.update(a.finalEndVal):a.options.onCompleteCallback&&a.options.onCompleteCallback()},this.formatNumber=function(e){var t,n,i,o,r=e<0?"-":"";t=Math.abs(e).toFixed(a.options.decimalPlaces);var s=(t+="").split(".");if(n=s[0],i=s.length>1?a.options.decimal+s[1]:"",a.options.useGrouping){o="";for(var l=3,c=0,u=0,m=n.length;u<m;++u)a.options.useIndianSeparators&&4===u&&(l=2,c=1),0!==u&&c%l==0&&(o=a.options.separator+o),c++,o=n[m-u-1]+o;n=o}return a.options.numerals&&a.options.numerals.length&&(n=n.replace(/[0-9]/g,(function(e){return a.options.numerals[+e]})),i=i.replace(/[0-9]/g,(function(e){return a.options.numerals[+e]}))),r+a.options.prefix+n+i+a.options.suffix},this.easeOutExpo=function(e,t,n,i){return n*(1-Math.pow(2,-10*e/i))*1024/1023+t},this.options=i(i({},this.defaults),n),this.formattingFn=this.options.formattingFn?this.options.formattingFn:this.formatNumber,this.easingFn=this.options.easingFn?this.options.easingFn:this.easeOutExpo,this.startVal=this.validateValue(this.options.startVal),this.frameVal=this.startVal,this.endVal=this.validateValue(t),this.options.decimalPlaces=Math.max(this.options.decimalPlaces),this.resetDuration(),this.options.separator=String(this.options.separator),this.useEasing=this.options.useEasing,""===this.options.separator&&(this.options.useGrouping=!1),this.el="string"==typeof e?document.getElementById(e):e,this.el?this.printValue(this.startVal):this.error="[CountUp] target is null or undefined","undefined"!=typeof window&&this.options.enableScrollSpy&&(this.error?console.error(this.error,e):(window.onScrollFns=window.onScrollFns||[],window.onScrollFns.push((function(){return a.handleScroll(a)})),window.onscroll=function(){window.onScrollFns.forEach((function(e){return e()}))},this.handleScroll(this)))}return e.prototype.handleScroll=function(e){if(e&&window&&!e.once){var t=window.innerHeight+window.scrollY,n=e.el.getBoundingClientRect(),i=n.top+window.pageYOffset,a=n.top+n.height+window.pageYOffset;a<t&&a>window.scrollY&&e.paused?(e.paused=!1,setTimeout((function(){return e.start()}),e.options.scrollSpyDelay),e.options.scrollSpyOnce&&(e.once=!0)):(window.scrollY>a||i>t)&&!e.paused&&e.reset()}},e.prototype.determineDirectionAndSmartEasing=function(){var e=this.finalEndVal?this.finalEndVal:this.endVal;this.countDown=this.startVal>e;var t=e-this.startVal;if(Math.abs(t)>this.options.smartEasingThreshold&&this.options.useEasing){this.finalEndVal=e;var n=this.countDown?1:-1;this.endVal=e+n*this.options.smartEasingAmount,this.duration=this.duration/2}else this.endVal=e,this.finalEndVal=null;null!==this.finalEndVal?this.useEasing=!1:this.useEasing=this.options.useEasing},e.prototype.start=function(e){this.error||(e&&(this.options.onCompleteCallback=e),this.duration>0?(this.determineDirectionAndSmartEasing(),this.paused=!1,this.rAF=requestAnimationFrame(this.count)):this.printValue(this.endVal))},e.prototype.pauseResume=function(){this.paused?(this.startTime=null,this.duration=this.remaining,this.startVal=this.frameVal,this.determineDirectionAndSmartEasing(),this.rAF=requestAnimationFrame(this.count)):cancelAnimationFrame(this.rAF),this.paused=!this.paused},e.prototype.reset=function(){cancelAnimationFrame(this.rAF),this.paused=!0,this.resetDuration(),this.startVal=this.validateValue(this.options.startVal),this.frameVal=this.startVal,this.printValue(this.startVal)},e.prototype.update=function(e){cancelAnimationFrame(this.rAF),this.startTime=null,this.endVal=this.validateValue(e),this.endVal!==this.frameVal&&(this.startVal=this.frameVal,null==this.finalEndVal&&this.resetDuration(),this.finalEndVal=null,this.determineDirectionAndSmartEasing(),this.rAF=requestAnimationFrame(this.count))},e.prototype.printValue=function(e){var t;if(this.el){var n=this.formattingFn(e);(null===(t=this.options.plugin)||void 0===t?void 0:t.render)?this.options.plugin.render(this.el,n):"INPUT"===this.el.tagName?this.el.value=n:"text"===this.el.tagName||"tspan"===this.el.tagName?this.el.textContent=n:this.el.innerHTML=n}},e.prototype.ensureNumber=function(e){return"number"==typeof e&&!isNaN(e)},e.prototype.validateValue=function(e){var t=Number(e);return this.ensureNumber(t)?t:(this.error="[CountUp] invalid start or end value: ".concat(e),null)},e.prototype.resetDuration=function(){this.startTime=null,this.duration=1e3*Number(this.options.duration),this.remaining=this.duration},e}()},8692:function(e,t,n){"use strict";n.d(t,{Z:function(){return p}});var i=n(7294),a=n(4160),o=n(177),r=n(8032),s="article-preview-module--alink--87948";var l=e=>{let{article:t,index:n}=e;return i.createElement("div",{className:"article-preview-module--cardParent--37f61"},i.createElement("a",{href:"/blog/"+t.slug,className:s,key:t.title},i.createElement(o.Z,{fade:!0,animationDelay:700*n,className:s},i.createElement("div",{className:"article-preview-module--preview--fc0e3"},i.createElement("div",{className:"article-preview-module--previewImage--3be7c"},null!=t.imagePreview?i.createElement(r.G,{image:t.imagePreview.gatsbyImageData,alt:t.imagePreview.description}):null),i.createElement("div",{className:"article-preview-module--previewText--47033"},i.createElement("small",{className:"article-preview-module--previewArticleType--a813d"},t.articleType),i.createElement("h3",{className:"article-preview-module--previewTitle--18423"},t.title),i.createElement("small",{className:"article-preview-module--previewPublishDate--91bcd"},t.publishDate))))))},c=n(5158);const u=(e,t)=>{let n=0;return i.createElement("div",{className:"article-preview-module--updates--fa088"},i.createElement(o.Z,{bounce:!0,left:!0},i.createElement("h2",{className:"article-preview-module--title--bc587"},"Keep updated with our latest articles")),i.createElement("div",{className:"article-preview-module--previewParent--40fc5"},e.map(((e,a)=>e.node.slug===t||n>=3?null:((e,t)=>(n++,i.createElement(l,{article:e.node,key:e.node.title,index:t})))(e,a)))),i.createElement(o.Z,{fade:!0,animationDelay:500},i.createElement(c.Z,{buttonText:"Browse all updates",link:"/blog"})))},m=e=>{let{excludeSlug:t}=e;return i.createElement(a.i1,{query:"3167026518",render:e=>u(e.allContentfulBlogPost.edges,t)})};m.defaultProps={excludeSlug:""};var p=m},5158:function(e,t,n){"use strict";var i=n(7294),a=n(3936);const o=e=>{let{buttonText:t,link:n,isWhite:o,openInNewTab:r,children:s}=e;return i.createElement("a",{href:n,className:o?a.rY:a.ud,target:r?"_blank":"",rel:"noopener noreferrer"},t,s)};o.defaultProps={isWhite:!1,openInNewTab:!1},t.Z=o},4075:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return M}});var i=n(2297),a=n.n(i),o=n(7294),r=n(2851),s=n(7361),l=n.n(s),c=n(5739),u=n(8032),m=n(9046),p=n(5158);var d=e=>{let{titleText:t,descriptionText:n,children:i,link:a}=e;return o.createElement("div",{className:"banner-module--banner--0fd9f"},o.createElement("div",{className:"banner-module--textBox--20a6c"},o.createElement("span",{className:"banner-module--title--5b414"},t),o.createElement("p",{className:"banner-module--description--42c02"},n),i),o.createElement("div",{className:"banner-module--buttonBox--f17a2"},o.createElement(p.Z,{openInNewTab:!0,buttonText:"Donate now",link:a},o.createElement(m.Z,{style:{marginLeft:"5px"}}))))},h=n(177),f=n(4160),g="actions-module--actionContainer--66f72",y="actions-module--photo--575ba",v="actions-module--sketch--5aab6";var b=()=>o.createElement(f.i1,{query:"2848848296",render:e=>(e=>{const t=e.allFile.edges.map((e=>e.node));return o.createElement("div",null,[{title:"Advocacy",description:"Change requires a voice to be heard. We communicate homelessness issues to local leaders, to make sure that the needs and concerns of the homeless community are considered and addressed.",sketch:"hugging-left.png",photo:"care-packages.jpg"},{title:"Engagement",description:"Building a community of motivated and like-minded members allows for sustainable change. We organize events for the University of Toronto student community in order to get them involved with advocacy and donation initiatives.",sketch:"hugging-right.png",photo:"meeting.jpg"},{title:"Donation",description:"We work with local shelters to supply them with the essential supplies that they need. These items include hygiene products, masks and hand sanitizers, blankets, food, and much more.",sketch:"supporting.png",photo:"donation.jpg"},{title:"Education",description:"Tackling homelessness requires understanding its causes and consequences. We leverage social media posts, online blogging, academic research and in-person events to educate the public about homelessness in Canada.",sketch:"raising.png",photo:"blog.jpg"}].map(((e,n)=>{var i=t.find((t=>t.name+"."+t.extension===e.sketch)),a=t.find((t=>t.name+"."+t.extension===e.photo));return n%2==1?o.createElement("div",{className:g,key:e.title},o.createElement("div",{className:"actions-module--infoTextRight--f36b8"},o.createElement(h.Z,{fade:!0,left:!0},o.createElement("div",{className:v},o.createElement(u.G,{image:i.childImageSharp.gatsbyImageData,style:{maxWidth:"100%"},imgStyle:{objectFit:"contain"},alt:"Homepage sketch "})),o.createElement("h1",null,e.title),o.createElement("p",null,e.description))),o.createElement("div",{className:y},o.createElement(h.Z,{fade:!0,right:!0},o.createElement(u.G,{image:a.childImageSharp.gatsbyImageData,imgStyle:{objectFit:"contain",borderRadius:"15px"},alt:"Homepage photo "})))):o.createElement("div",{className:g,key:e.title},o.createElement("div",{className:y},o.createElement(h.Z,{fade:!0,left:!0},o.createElement(u.G,{image:a.childImageSharp.gatsbyImageData,imgStyle:{objectFit:"contain",borderRadius:"15px"},alt:"Homepage photo "}))),o.createElement("div",{className:"actions-module--infoTextLeft--7e5ac"},o.createElement(h.Z,{fade:!0,right:!0},o.createElement("div",{className:v},o.createElement(u.G,{image:i.childImageSharp.gatsbyImageData,style:{maxWidth:"100%"},imgStyle:{objectFit:"contain"},alt:"Homepage sketch "})),o.createElement("h1",null,e.title),o.createElement("p",null,e.description))))})))})(e)}),E=n(8692),w=e=>o.createElement("div",{className:"contact-box-module--slideshow--7e5a9"},o.createElement("div",{className:"contact-box-module--contactBox--bc377"},[{title:"Donate",description:"Make a monetary or item donation to the organization! Inquire about donating anything, from blankets to clothing to hygiene products.",link:"/donate",buttonText:"Make a donation"},{title:"Join",description:"Become part of the Blankets For T.O. community and be part of the change! Want to join as a member? Interested in volunteering at events?",link:"/positions",buttonText:"Become a member"}].map((e=>o.createElement("div",{className:"contact-box-module--contactBoxSide--16b14",key:e.title},o.createElement("div",{className:"contact-box-module--contactBoxSideText--9d94b"},o.createElement("h2",{className:"contact-box-module--contactBoxTitle--fcfce"},e.title),o.createElement("p",{className:"contact-box-module--contactBoxDescription--3de39"},e.description),o.createElement("div",{className:"contact-box-module--buttonRow--bbaa4"},o.createElement(p.Z,{link:e.link,buttonText:e.buttonText,isWhite:!0})))))))),x=n(1339),O=(n(2542),n(2528)),S=n(628),k=n(5243),N=n.n(k);n(5813);class C extends o.Component{constructor(){super(...arguments),this.state={selectedLocation:0,mapCenter:-1},this.utscCoords={lon:-79.1874,lat:43.783},this.height=400,this.width=400,this.numLocations=0,this.mapLocations=[],this.map=void 0,this.featureGroup=void 0,this.markerUrl="/map-pin.svg",this.arrowColor="rgb(0, 0, 0)",this.lineColor="#6da6a6",this.onMarkerClick=e=>{this.setState({mapCenter:e,selectedLocation:e})},this.onNext=()=>{let e=(this.state.selectedLocation+1)%this.numLocations;this.setState({mapCenter:e,selectedLocation:e})},this.onLast=()=>{let e=this.state.selectedLocation-1;e<0&&(e+=this.numLocations),this.setState({mapCenter:e,selectedLocation:e})}}componentDidUpdate(){-1!==this.state.mapCenter&&"undefined"!=typeof window&&(this.map=this.map.setView({lon:this.mapLocations[this.state.mapCenter].coordinateLongitude,lat:this.mapLocations[this.state.mapCenter].coordinateLatitude}))}componentDidMount(){if("undefined"!=typeof window){this.map=N().map("mapid",{zoomControl:!1,attributionControl:!0,dragging:!1,zoom:!1,touchZoom:!1,scrollWheelZoom:!1});var e=N().icon({iconUrl:this.markerUrl,iconSize:[32,32],iconAnchor:[16,32]});N().tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",{maxZoom:14,attribution:'&copy; <a href="https://openstreetmap.org/copyright">OpenStreetMap contributors</a>'}).addTo(this.map);var t=[];for(let i=0;i<this.mapLocations.length;i++){const a=[this.mapLocations[i].coordinateLatitude,this.mapLocations[i].coordinateLongitude];var n=N().marker(a,{icon:e}).addTo(this.map).on("click",(()=>this.onMarkerClick(i)));let o=N().polyline([[this.utscCoords.lat,this.utscCoords.lon],a],{color:this.lineColor,fillColor:this.lineColor});N().polylineDecorator(o,{patterns:[{offset:"100%",repeat:"100%",symbol:N().Symbol.arrowHead({pixelSize:15,polygon:!0,pathOptions:{stroke:!0,fill:!0,color:this.lineColor,fillColor:this.lineColor,fillOpacity:1}})},{offset:15,repeat:20,symbol:N().Symbol.dash({pixelSize:15,pathOptions:{color:this.lineColor,weight:4}})}]}).addTo(this.map);t.push(n)}this.featureGroup=N().featureGroup(t).addTo(this.map),this.map.fitBounds(this.featureGroup.getBounds()),this.map.on("load",(()=>{setTimeout((()=>{"undefined"!=typeof window&&window.self.map.invalidateSize()}),500)}))}}render(){this.mapLocations=this.props.mapLocations,this.numLocations=this.mapLocations.length;const e=this.mapLocations[this.state.selectedLocation];return o.createElement("div",{className:"org-map-module--mapContainer--86af3"},o.createElement("h1",{className:"org-map-module--title--5c53b"},"See where we have donated"),o.createElement("p",{className:"org-map-module--description--07628"},"We directly connect with shelters and organizations throughout the GTA, donating essential items to those in need."),o.createElement("div",{className:"org-map-module--infoBox--2b790"},o.createElement(O.Z,{onClick:()=>this.onLast(),width:30,height:30}),o.createElement("div",{className:"org-map-module--textBox--943a0"},o.createElement("h1",{className:"org-map-module--infoBoxTitle--e3ec6"},e.name),o.createElement("p",{className:"org-map-module--infoBoxAddress--5e847"},e.street,", ",e.city,", ",e.provinceState," "),o.createElement("p",{className:"org-map-module--infoBoxDescription--b18d4"},e.description.description),o.createElement("p",{className:"org-map-module--infoBoxPage--160d1"},this.state.selectedLocation+1," / ",this.props.mapLocations.length)),o.createElement(S.Z,{onClick:()=>this.onNext(),width:30,height:30})),o.createElement("div",{id:"mapid",className:"org-map-module--leafletMap--6b0a5"}))}}const P=(e,t)=>{let{normalHeight:n}=t;return o.createElement("div",{className:"screen-container-module--screenContainer--e3e28 "+(n?"":"screen-container-module--enforceHeight--64987")},e.children)};var T=P;P.defaultProps={normalHeight:!1};var V=()=>{const{allContentfulSponsor:e}=(0,f.K2)(A),t=e.edges.map((e=>e.node)),n=t.filter((e=>"Preferred"===e.sponsorType)),i=t.filter((e=>"Preferred"!==e.sponsorType)),a=e=>o.createElement("div",{className:"sponsors-module--logoContainer--4858b"},e.map(((e,t)=>o.createElement("div",{className:"sponsors-module--alink--ae94a",key:e.name},o.createElement(h.Z,{fade:!0,delay:150},o.createElement("div",{className:"sponsors-module--logo--049d9"},o.createElement(u.G,{imgStyle:{objectFit:"contain"},alt:e.name,image:e.logo.gatsbyImageData})))))));return o.createElement("div",{className:"sponsors-module--sponsorBox--fdf64"},o.createElement(h.Z,{fade:!0},o.createElement("h1",{className:"sponsors-module--title--6fe7f"},"Thank you to our sponsors for their support!"),n.length>0&&o.createElement("h2",{className:"sponsors-module--preferredSponsorsTitle--aebfb"},"Preferred Sponsor"+(n.length>1?"s":"")),n.length>0&&a(n),i.length>0&&o.createElement("div",{className:"sponsors-module--divider--497c4"}),i.length>0&&o.createElement("h2",{className:"sponsors-module--secondarySponsorsTitle--cccf1"},"Sponsor"+(i.length>1?"s":"")),i.length>0&&a(i),o.createElement(p.Z,{buttonText:"Browse sponsors",link:"/sponsors"}),o.createElement("div",{style:{height:"100px"}})))};const A="1864131347";var L=n(7857),j=JSON.parse('{"title":"To date, we have donated to the homeless community:","M":[{"number":"1763","title":"items","subtitle":"including blankets, masks, and food donations.","prefix":""}]}');var _=e=>{let{donationItemCount:t}=e;const[n,i]=o.useState(!1),a=j.M,{title:r}=j;return o.createElement(h.Z,{fade:!0},o.createElement("div",{className:"stats-highlight-module--parentContainer--bfd20"},o.createElement("h1",{className:"stats-highlight-module--parentTitle--77319"},r),o.createElement("div",{className:"stats-highlight-module--items--ab2bd"},a.map((e=>{var a,r,s;return o.createElement(h.Z,{key:e.title,fade:!0,onReveal:()=>{n||i(!0)}},o.createElement("div",{className:"stats-highlight-module--itemContainer--b4e58",key:"Statistics for "+e.title},o.createElement(L.ZP,{redraw:!0,className:"stats-highlight-module--itemNumber--51507",end:t,useEasing:!0,separator:"",duration:5,prefix:null!==(a=e.prefix)&&void 0!==a?a:""}),o.createElement("h2",{className:"stats-highlight-module--itemTitle--cc357"},null!==(r=e.title)&&void 0!==r?r:""),o.createElement("p",{className:"stats-highlight-module--itemSubtitle--bab83"},null!==(s=e.subtitle)&&void 0!==s?s:"")))})))))},F="index-module--description--18853",D="index-module--descriptionContainer--8e812";class R extends o.Component{render(){const e=l()(this,"props.data.allContentfulOrganizationInformation.nodes")[0],t=l()(this,"props.data.allContentfulDonationLocation.nodes"),n=[o.createElement("link",{rel:"stylesheet",href:"https://unpkg.com/leaflet@1.7.1/dist/leaflet.css",integrity:"sha512-xodZBNTC5n17Xt2atTPuE1HxjVMSvLVW9ocqUKLsCC5CXdbqCmblAshOMAS6/keqq/sMZMZ19scR4PsZChSR7A==",crossorigin:"",key:"leafletcss"})],i=a()(t.map((e=>e.itemsDonated)));return o.createElement(r.Z,{location:this.props.location},o.createElement(c.Z,{title:"Home",description:"Blankets for T.O. is a non-profit organization at the University of Toronto providing support to those in need and combatting stigma surrounding homelessness.",useMailChimp:!0,childElements:n}),o.createElement("div",{className:"white-background"},o.createElement(d,{titleText:"Donate to our Package Fundraiser",descriptionText:"Funds raised will be used to purchase essential items, like clothing and blankets, for those in need. Open until at least May.",link:"https://gofund.me/7cf7ddde"}),o.createElement("div",{className:"index-module--title--2c717"},o.createElement("div",{className:"index-module--image--5d771"},o.createElement(u.G,{className:"index-module--backgroundImage--a118b",image:e.frontPageImage.gatsbyImageData,alt:"Homepage image for Blankets for T.O."})),o.createElement("div",{className:"index-module--infoBox--ec7fb"},o.createElement(h.Z,{fade:!0,left:!0},o.createElement("div",{className:"index-module--infoBoxText--23125"},o.createElement("h2",null,"Eradicating homelessness through action"),o.createElement("p",null,"Founded in 2019 at the University of Toronto Scarborough, we are an organization addressing homelessness through advocacy, engagement and action across Ontario. "))))),o.createElement("div",{className:D},o.createElement("svg",{width:"100%",height:"100%",viewBox:"0 0 100 100",xmlns:"http://www.w3.org/2000/svg",preserveAspectRatio:"none"},o.createElement("polygon",{points:"0,0 100,0 100,95 0,100"}),o.createElement("defs",null,o.createElement("linearGradient",{id:"red_gradient"},o.createElement("stop",{offset:"0",stopColor:"#bb4a3c"}),o.createElement("stop",{offset:"1",stopColor:"#cf6352"})))),o.createElement("div",{className:F},o.createElement("h2",{className:"index-module--multipleMethodTitle--233e2"},"We address homelessness from multiple angles"),o.createElement(b,null))),o.createElement(T,{id:"donation-counter"},o.createElement("div",{className:"index-module--donationColumn--ff76c"},o.createElement(_,{donationItemCount:i}),o.createElement("div",{className:"index-module--btnRow--1cc89"},o.createElement(p.Z,{link:"/donate",buttonText:"Make a donation today"})))),o.createElement("div",{className:"index-module--mapContainer--2056c",id:"donation-map"},o.createElement("svg",{width:"100%",height:"100%",viewBox:"0 0 100 100",xmlns:"http://www.w3.org/2000/svg",preserveAspectRatio:"none"},o.createElement("polygon",{points:"0,0 100,5 100,100 0,95"}),o.createElement("defs",null,o.createElement("linearGradient",{id:"turq_gradient"},o.createElement("stop",{offset:"0",stopColor:"#3d7f7f"}),o.createElement("stop",{offset:"1",stopColor:"#80acaf"})))),o.createElement("div",{className:"index-module--mapArea--76a2c"},o.createElement(C,{mapLocations:t}))),o.createElement(T,{id:"articles"},o.createElement(E.Z,null)),o.createElement("div",{className:D,id:"join-contact"},o.createElement("svg",{width:"100%",height:"100%",viewBox:"0 0 100 100",xmlns:"http://www.w3.org/2000/svg",preserveAspectRatio:"none"},o.createElement("polygon",{points:"0,5 100,0 100,95 0,100"}),o.createElement("defs",null,o.createElement("linearGradient",{id:"red_gradient"},o.createElement("stop",{offset:"0",stopColor:"#bb4a3c"}),o.createElement("stop",{offset:"1",stopColor:"#cf6352"})))),o.createElement("div",{className:F+" index-module--joinContactArea--83c11"},o.createElement("h2",null,"Get involved with us today"),o.createElement(w,null))),o.createElement(V,null),o.createElement("div",{id:"contact-form"},o.createElement(x.Z,null))))}}var M=R},5813:function(e,t,n){!function(e){"use strict";function t(e,t){var n=t.x-e.x,i=t.y-e.y;return Math.sqrt(n*n+i*i)}e=e&&e.hasOwnProperty("default")?e.default:e;var n=function(e,t){return(180*Math.atan2(t.y-e.y,t.x-e.x)/Math.PI+90+360)%360},i=function(e,t){var n=e.value;return e.isInPixels?n/t:n};function a(e){if("string"==typeof e&&-1!==e.indexOf("%"))return{value:parseFloat(e)/100,isInPixels:!1};var t=e?parseFloat(e):0;return{value:t,isInPixels:t>0}}var o,r,s,l=function(e,t){return e.x===t.x&&e.y===t.y};function c(e){return e.reduce((function(e,i,a,o){if(a>0&&!l(i,o[a-1])){var r=o[a-1],s=e.length>0?e[e.length-1].distB:0,c=t(r,i);e.push({a:r,b:i,distA:s,distB:s+c,heading:n(r,i)})}return e}),[])}function u(e,t){var n=c(e),a=n.length;if(0===a)return[];var o=n[a-1].distB,r=i(t.offset,o),s=i(t.endOffset,o),l=o*i(t.repeat,o),u=s>0?o*s:0,p=[],d=r>0?o*r:0;do{p.push(d),d+=l}while(l>0&&d<o-u);var h=0,f=n[0];return p.map((function(e){for(;e>f.distB&&h<a-1;)h++,f=n[h];var t=(e-f.distA)/(f.distB-f.distA);return{pt:m(f.a,f.b,t),heading:f.heading}}))}function m(e,t,n){return t.x!==e.x?{x:e.x+n*(t.x-e.x),y:e.y+n*(t.y-e.y)}:{x:e.x,y:e.y+(t.y-e.y)*n}}o=L.Marker.prototype._initIcon,r=L.Marker.prototype._setPos,s="msTransform"===L.DomUtil.TRANSFORM,L.Marker.addInitHook((function(){var e=this.options.icon&&this.options.icon.options&&this.options.icon.options.iconAnchor;e&&(e=e[0]+"px "+e[1]+"px"),this.options.rotationOrigin=this.options.rotationOrigin||e||"center bottom",this.options.rotationAngle=this.options.rotationAngle||0,this.on("drag",(function(e){e.target._applyRotation()}))})),L.Marker.include({_initIcon:function(){o.call(this)},_setPos:function(e){r.call(this,e),this._applyRotation()},_applyRotation:function(){this.options.rotationAngle&&(this._icon.style[L.DomUtil.TRANSFORM+"Origin"]=this.options.rotationOrigin,s?this._icon.style[L.DomUtil.TRANSFORM]="rotate("+this.options.rotationAngle+"deg)":this._icon.style[L.DomUtil.TRANSFORM]+=" rotateZ("+this.options.rotationAngle+"deg)")},setRotationAngle:function(e){return this.options.rotationAngle=e,this.update(),this},setRotationOrigin:function(e){return this.options.rotationOrigin=e,this.update(),this}}),e.Symbol=e.Symbol||{},e.Symbol.Dash=e.Class.extend({options:{pixelSize:10,pathOptions:{}},initialize:function(t){e.Util.setOptions(this,t),this.options.pathOptions.clickable=!1},buildSymbol:function(t,n,i,a,o){var r=this.options,s=Math.PI/180;if(r.pixelSize<=1)return e.polyline([t.latLng,t.latLng],r.pathOptions);var l=i.project(t.latLng),c=-(t.heading-90)*s,u=e.point(l.x+r.pixelSize*Math.cos(c+Math.PI)/2,l.y+r.pixelSize*Math.sin(c)/2),m=l.add(l.subtract(u));return e.polyline([i.unproject(u),i.unproject(m)],r.pathOptions)}}),e.Symbol.dash=function(t){return new e.Symbol.Dash(t)},e.Symbol.ArrowHead=e.Class.extend({options:{polygon:!0,pixelSize:10,headAngle:60,pathOptions:{stroke:!1,weight:2}},initialize:function(t){e.Util.setOptions(this,t),this.options.pathOptions.clickable=!1},buildSymbol:function(t,n,i,a,o){return this.options.polygon?e.polygon(this._buildArrowPath(t,i),this.options.pathOptions):e.polyline(this._buildArrowPath(t,i),this.options.pathOptions)},_buildArrowPath:function(t,n){var i=Math.PI/180,a=n.project(t.latLng),o=-(t.heading-90)*i,r=this.options.headAngle/2*i,s=o+r,l=o-r,c=e.point(a.x-this.options.pixelSize*Math.cos(s),a.y+this.options.pixelSize*Math.sin(s)),u=e.point(a.x-this.options.pixelSize*Math.cos(l),a.y+this.options.pixelSize*Math.sin(l));return[n.unproject(c),t.latLng,n.unproject(u)]}}),e.Symbol.arrowHead=function(t){return new e.Symbol.ArrowHead(t)},e.Symbol.Marker=e.Class.extend({options:{markerOptions:{},rotate:!1},initialize:function(t){e.Util.setOptions(this,t),this.options.markerOptions.clickable=!1,this.options.markerOptions.draggable=!1},buildSymbol:function(t,n,i,a,o){return this.options.rotate&&(this.options.markerOptions.rotationAngle=t.heading+(this.options.angleCorrection||0)),e.marker(t.latLng,this.options.markerOptions)}}),e.Symbol.marker=function(t){return new e.Symbol.Marker(t)};var p=function(t){return t instanceof e.LatLng||Array.isArray(t)&&2===t.length&&"number"==typeof t[0]},d=function(e){return Array.isArray(e)&&p(e[0])};e.PolylineDecorator=e.FeatureGroup.extend({options:{patterns:[]},initialize:function(t,n){e.FeatureGroup.prototype.initialize.call(this),e.Util.setOptions(this,n),this._map=null,this._paths=this._initPaths(t),this._bounds=this._initBounds(),this._patterns=this._initPatterns(this.options.patterns)},_initPaths:function(t,n){var i=this;return d(t)?[n?t.concat([t[0]]):t]:t instanceof e.Polyline?this._initPaths(t.getLatLngs(),t instanceof e.Polygon):Array.isArray(t)?t.reduce((function(e,t){return e.concat(i._initPaths(t,n))}),[]):[]},_initPatterns:function(e){return e.map(this._parsePatternDef)},setPatterns:function(e){this.options.patterns=e,this._patterns=this._initPatterns(this.options.patterns),this.redraw()},setPaths:function(e){this._paths=this._initPaths(e),this._bounds=this._initBounds(),this.redraw()},_parsePatternDef:function(e,t){return{symbolFactory:e.symbol,offset:a(e.offset),endOffset:a(e.endOffset),repeat:a(e.repeat)}},onAdd:function(e){this._map=e,this._draw(),this._map.on("moveend",this.redraw,this)},onRemove:function(t){this._map.off("moveend",this.redraw,this),this._map=null,e.FeatureGroup.prototype.onRemove.call(this,t)},_initBounds:function(){var t=this._paths.reduce((function(e,t){return e.concat(t)}),[]);return e.latLngBounds(t)},getBounds:function(){return this._bounds},_buildSymbols:function(e,t,n){var i=this;return n.map((function(a,o){return t.buildSymbol(a,e,i._map,o,n.length)}))},_getDirectionPoints:function(t,n){var i=this;return t.length<2?[]:u(t.map((function(e){return i._map.project(e)})),n).map((function(t){return{latLng:i._map.unproject(e.point(t.pt)),heading:t.heading}}))},redraw:function(){this._map&&(this.clearLayers(),this._draw())},_getPatternLayers:function(t){var n=this,i=this._map.getBounds().pad(.1);return this._paths.map((function(a){var o=n._getDirectionPoints(a,t).filter((function(e){return i.contains(e.latLng)}));return e.featureGroup(n._buildSymbols(a,t.symbolFactory,o))}))},_draw:function(){var t=this;this._patterns.map((function(e){return t._getPatternLayers(e)})).forEach((function(n){t.addLayer(e.featureGroup(n))}))}}),e.polylineDecorator=function(t,n){return new e.PolylineDecorator(t,n)}}(n(5243))},7762:function(e){e.exports=function(e,t){for(var n,i=-1,a=e.length;++i<a;){var o=t(e[i]);void 0!==o&&(n=void 0===n?o:n+o)}return n}},2297:function(e,t,n){var i=n(7762),a=n(6557);e.exports=function(e){return e&&e.length?i(e,a):0}},3936:function(e,t,n){"use strict";n.d(t,{rY:function(){return a},ud:function(){return i}});var i="styled-button-module--primaryButton--0f3e8",a="styled-button-module--whiteButton--08a43"},7857:function(e,t,n){"use strict";var i=n(7294),a=n(8273);function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t,n){return(t=function(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var i=n.call(e,t||"default");if("object"!=typeof i)return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(){return l=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},l.apply(this,arguments)}function c(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function u(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var i,a,o,r,s=[],l=!0,c=!1;try{if(o=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;l=!1}else for(;!(l=(i=o.call(n)).done)&&(s.push(i.value),s.length!==t);l=!0);}catch(u){c=!0,a=u}finally{try{if(!l&&null!=n.return&&(r=n.return(),Object(r)!==r))return}finally{if(c)throw a}}return s}}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return m(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return m(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function m(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,i=new Array(t);n<t;n++)i[n]=e[n];return i}var p="undefined"!=typeof window&&void 0!==window.document&&void 0!==window.document.createElement?i.useLayoutEffect:i.useEffect;function d(e){var t=i.useRef(e);return p((function(){t.current=e})),i.useCallback((function(){for(var e=arguments.length,n=new Array(e),i=0;i<e;i++)n[i]=arguments[i];return t.current.apply(void 0,n)}),[])}var h=["ref","startOnMount","enableReinitialize","delay","onEnd","onStart","onPauseResume","onReset","onUpdate"],f={decimal:".",separator:",",delay:null,prefix:"",suffix:"",duration:2,start:0,decimals:0,startOnMount:!0,enableReinitialize:!0,useEasing:!0,useGrouping:!0,useIndianSeparators:!1},g=function(e){var t=Object.fromEntries(Object.entries(e).filter((function(e){return void 0!==u(e,2)[1]}))),n=i.useMemo((function(){return r(r({},f),t)}),[e]),o=n.ref,s=n.startOnMount,l=n.enableReinitialize,m=n.delay,p=n.onEnd,g=n.onStart,y=n.onPauseResume,v=n.onReset,b=n.onUpdate,E=c(n,h),w=i.useRef(),x=i.useRef(),O=i.useRef(!1),S=d((function(){return function(e,t){var n=t.decimal,i=t.decimals,o=t.duration,r=t.easingFn,s=t.end,l=t.formattingFn,c=t.numerals,u=t.prefix,m=t.separator,p=t.start,d=t.suffix,h=t.useEasing,f=t.useGrouping,g=t.useIndianSeparators,y=t.enableScrollSpy,v=t.scrollSpyDelay,b=t.scrollSpyOnce;return new a.CountUp(e,s,{startVal:p,duration:o,decimal:n,decimalPlaces:i,easingFn:r,formattingFn:l,numerals:c,separator:m,prefix:u,suffix:d,useEasing:h,useIndianSeparators:g,useGrouping:f,enableScrollSpy:y,scrollSpyDelay:v,scrollSpyOnce:b})}("string"==typeof o?o:o.current,E)})),k=d((function(e){var t=w.current;if(t&&!e)return t;var n=S();return w.current=n,n})),N=d((function(){var e=function(){return k(!0).start((function(){null==p||p({pauseResume:C,reset:P,start:V,update:T})}))};m&&m>0?x.current=setTimeout(e,1e3*m):e(),null==g||g({pauseResume:C,reset:P,update:T})})),C=d((function(){k().pauseResume(),null==y||y({reset:P,start:V,update:T})})),P=d((function(){k().el&&(x.current&&clearTimeout(x.current),k().reset(),null==v||v({pauseResume:C,start:V,update:T}))})),T=d((function(e){k().update(e),null==b||b({pauseResume:C,reset:P,start:V})})),V=d((function(){P(),N()})),A=d((function(e){s&&(e&&P(),N())}));return i.useEffect((function(){O.current?l&&A(!0):(O.current=!0,A())}),[l,O,A,m,e.start,e.suffix,e.prefix,e.duration,e.separator,e.decimals,e.decimal,e.formattingFn]),i.useEffect((function(){return function(){P()}}),[P]),{start:V,pauseResume:C,reset:P,update:T,getCountUp:k}},y=["className","redraw","containerProps","children","style"];t.ZP=function(e){var t=e.className,n=e.redraw,a=e.containerProps,o=e.children,s=e.style,u=c(e,y),m=i.useRef(null),p=i.useRef(!1),h=g(r(r({},u),{},{ref:m,startOnMount:"function"!=typeof o||0===e.delay,enableReinitialize:!1})),f=h.start,v=h.reset,b=h.update,E=h.pauseResume,w=h.getCountUp,x=d((function(){f()})),O=d((function(t){e.preserveValue||v(),b(t)})),S=d((function(){"function"!=typeof e.children||m.current instanceof Element?w():console.error('Couldn\'t find attached element to hook the CountUp instance into! Try to attach "containerRef" from the render prop to a an Element, eg. <span ref={containerRef} />.')}));i.useEffect((function(){S()}),[S]),i.useEffect((function(){p.current&&O(e.end)}),[e.end,O]);var k=n&&e;return i.useEffect((function(){n&&p.current&&x()}),[x,n,k]),i.useEffect((function(){!n&&p.current&&x()}),[x,n,e.start,e.suffix,e.prefix,e.duration,e.separator,e.decimals,e.decimal,e.className,e.formattingFn]),i.useEffect((function(){p.current=!0}),[]),"function"==typeof o?o({countUpRef:m,start:f,reset:v,update:b,pauseResume:E,getCountUp:w}):i.createElement("span",l({className:t,ref:m,style:s},a),void 0!==e.start?w().formattingFn(e.start):"")}},2528:function(e,t,n){"use strict";var i=n(7294),a=n(5697),o=n.n(a);function r(){return r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},r.apply(this,arguments)}function s(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=(0,i.forwardRef)((function(e,t){var n=e.color,a=void 0===n?"currentColor":n,o=e.size,l=void 0===o?24:o,c=s(e,["color","size"]);return i.createElement("svg",r({ref:t,xmlns:"http://www.w3.org/2000/svg",width:l,height:l,viewBox:"0 0 24 24",fill:"none",stroke:a,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},c),i.createElement("polyline",{points:"15 18 9 12 15 6"}))}));l.propTypes={color:o().string,size:o().oneOfType([o().string,o().number])},l.displayName="ChevronLeft",t.Z=l},628:function(e,t,n){"use strict";var i=n(7294),a=n(5697),o=n.n(a);function r(){return r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},r.apply(this,arguments)}function s(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=(0,i.forwardRef)((function(e,t){var n=e.color,a=void 0===n?"currentColor":n,o=e.size,l=void 0===o?24:o,c=s(e,["color","size"]);return i.createElement("svg",r({ref:t,xmlns:"http://www.w3.org/2000/svg",width:l,height:l,viewBox:"0 0 24 24",fill:"none",stroke:a,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},c),i.createElement("polyline",{points:"9 18 15 12 9 6"}))}));l.propTypes={color:o().string,size:o().oneOfType([o().string,o().number])},l.displayName="ChevronRight",t.Z=l}}]);
//# sourceMappingURL=component---src-pages-index-js-d8885b5d03a1d11716a6.js.map