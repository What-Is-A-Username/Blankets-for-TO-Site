(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{GxIa:function(e,n,r){"use strict";r.r(n),r.d(n,"default",(function(){return y}));var o=r("VbXa"),a=r.n(o),t=r("q1tI"),s=r.n(t),l=r("mwIZ"),i=r.n(l),p=r("Bl7J"),c=(r("Vr8v"),r("EYWl")),u=r("/eHF"),d=r.n(u),m=(r("VSsl"),r("17x9")),f=r.n(m),g=r("9eSz"),h=r.n(g),E=r("a506"),v=r.n(E),S=function(e){var n=e.sponsorData,r=n.name,o=n.logo;n.sponsorType,n.linkUrl;return s.a.createElement("div",{className:v.a.parentContainer},s.a.createElement("div",{className:v.a.awardContainer},s.a.createElement("div",{className:v.a.image},s.a.createElement(h.a,{fluid:o.fluid,alt:r}))))};S.propTypes={name:f.a.string.isRequired,sponsorType:f.a.string.isRequired,linkUrl:f.a.string.isRequired};var N=S,T=r("nOio"),w=r.n(T),y=function(e){function n(){return e.apply(this,arguments)||this}return a()(n,e),n.prototype.render=function(){var e=i()(this,"props.data.allContentfulSponsor.nodes"),n=e.filter((function(e){return"Preferred"===e.sponsorType})),r=e.filter((function(e){return"Preferred"!==e.sponsorType}));return s.a.createElement(p.a,{location:this.props.location},s.a.createElement(c.a,{title:"Sponsors",description:"Blankets for T.O. is proud to work with the following sponsors for donations and outreach"}),s.a.createElement("div",{className:"white-background"},s.a.createElement("div",{className:"wrapper"},s.a.createElement(d.a,{left:!0,duration:400},s.a.createElement("h2",null,"Sponsors")),s.a.createElement(d.a,{delay:500},s.a.createElement("div",{className:"richText"},s.a.createElement("h3",{className:w.a.titles},"Preferred Sponsors"),s.a.createElement("div",{className:w.a.sponsorsGrid},n.map((function(e){return s.a.createElement(N,{sponsorData:e})}))),s.a.createElement("h3",{className:w.a.titles},"Sponsors"),s.a.createElement("div",{className:w.a.sponsorsGrid},r.map((function(e){return s.a.createElement(N,{sponsorData:e})}))))))))},n}(s.a.Component)},VSsl:function(e,n,r){var o=r("IvzW"),a=r("jekk").f,t=Function.prototype,s=t.toString,l=/^\s*function ([^ (]*)/;o&&!("name"in t)&&a(t,"name",{configurable:!0,get:function(){try{return s.call(this).match(l)[1]}catch(e){return""}}})},Vr8v:function(e,n,r){"use strict";r("VSsl");var o=r("q1tI"),a=r.n(o),t=r("Wbzz"),s=r("eJfn"),l=r.n(s);n.a=function(){var e=Object(t.e)(i).allContentfulSponsor.edges.map((function(e){return e.node})),n=e.filter((function(e){return"Preferred"===e.sponsorType})),r=e.filter((function(e){return"Preferred"!==e.sponsorType})),o=function(e){return a.a.createElement("div",{className:l.a.logoContainer},e.map((function(e){return a.a.createElement("a",{className:l.a.alink,href:e.linkUrl,target:"_blank",rel:"noopener noreferrer"},a.a.createElement("div",{className:l.a.logo},a.a.createElement("img",{alt:e.name,src:e.logo.resize.src})))})))};return a.a.createElement("div",{className:l.a.sponsorBox},n.length>0&&a.a.createElement("h2",{className:l.a.preferredSponsorsTitle},"Preferred Sponsor"+(n.length>1?"s":"")),n.length>0&&o(n),r.length>0&&a.a.createElement("div",{className:l.a.divider}),r.length>0&&a.a.createElement("h2",{className:l.a.secondarySponsorsTitle},"Sponsor"+(r.length>1?"s":"")),r.length>0&&o(r))};var i="829196995"},a506:function(e,n,r){e.exports={parentContainer:"sponsor-module--parentContainer--3JYjc",awardContainer:"sponsor-module--awardContainer--2d4-i",infoContainer:"sponsor-module--infoContainer--13ouL",image:"sponsor-module--image--ODEhx"}},eJfn:function(e,n,r){e.exports={sponsorBox:"sponsors-module--sponsorBox--2Zny5",preferredSponsorsTitle:"sponsors-module--preferredSponsorsTitle--2uUTb",divider:"sponsors-module--divider--1uBp4",logoContainer:"sponsors-module--logoContainer--3qwEq",logo:"sponsors-module--logo--2623b",alink:"sponsors-module--alink--2HvdP",secondarySponsorsTitle:"sponsors-module--secondarySponsorsTitle--2vhTg"}},nOio:function(e,n,r){e.exports={sponsorsGrid:"sponsors-page-module--sponsorsGrid--2shil",titles:"sponsors-page-module--titles--2OQQz"}}}]);
//# sourceMappingURL=component---src-pages-sponsors-js-778606db4458abed35f8.js.map