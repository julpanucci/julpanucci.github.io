(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"3XHS":function(e,t,n){"use strict";n.r(t);var a=n("Wbzz"),r=n("q1tI"),o=n.n(r),l=n("Bl7J");n("GnLm");var i=n("gs7y"),c=n.n(i),s=function(e){var t=e.videoSrcURL,n=e.videoTitle,a=(function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n])}(e,["videoSrcURL","videoTitle"]),Object(r.useState)("image")),l=a[0],i=a[1];return o.a.createElement("div",{className:"container"},"image"===l&&o.a.createElement("img",{onClick:function(){i("video")},className:"iframe",src:c.a,"data-video":t}),"video"===l&&o.a.createElement("iframe",{className:"iframe",src:t,title:n,allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",frameBorder:"0",webkitallowfullscreen:"true",mozallowfullscreen:"true",allowFullScreen:!0}))},u={};function m(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.query,n=void 0===t?"":t,a=e.full,r=void 0!==a&&a,o=e.onChange,l=void 0===o?function(){}:o,i={query:n,full:r,queryMatches:!1,_mq:null};if(!n)return i;function c(e){i.queryMatches=e.matches,l(i.queryMatches)}function s(){i._mq.removeListener(c)}return i.query=r||")"===n[n.length-1]?n:"("+n+")",u[i.query]||(u[i.query]=window.matchMedia(i.query)),i._mq=u[i.query],i.queryMatches=i._mq.matches,i.removeListener=s,i._mq.addListener(c),i}var d=function(e){function t(n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var a=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,e.call(this,n));return a.setColumns=a.setColumns.bind(a),a.state={},a}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.componentDidMount=function(){this.updateColumns(this.props)},t.prototype.componentWillReceiveProps=function(e){var t=this.props.queries!==e.queries,n=this.props.columns!==e.columns;(t||n)&&this.updateColumns(e)},t.prototype.componentWillUnmount=function(){this.removeColumnListeners()},t.prototype.updateColumns=function(e){e.queries.length&&(this.removeColumnListeners(),this._columns=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.queries,n=void 0===t?[]:t,a=e.valueKey,r=void 0===a?"value":a,o=e.defaultValue,l=void 0===o?"":o,i=e.onChange,c=void 0===i?function(){}:i,s=n.map((function(e){return m({query:e.query,full:e.full,onChange:d})}));function u(){var e=l;return s.forEach((function(t,a){t.queryMatches&&(e=n[a][r])})),e}function d(e){c(u())}function f(){s.forEach((function(e,t){e.removeListener()}))}return{getValue:u,removeListeners:f}}({queries:e.queries,valueKey:"columns",defaultValue:e.queries.length?1:e.columns,onChange:this.setColumns}),this.setColumns())},t.prototype.setColumns=function(){var e=this;this.setState((function(){return{columns:e._columns.getValue()}}))},t.prototype.removeColumnListeners=function(){this._columns&&this._columns.removeListeners()},t.prototype.renderColumns=function(e){var t=this.props,n=t.children,a=t.dimensions,r=t.gap,l={boxSizing:"border-box",float:"left",width:1/e*100+"%",paddingLeft:r,paddingRight:r},i=n;e>1&&(i=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.children,n=void 0===t?[]:t,a=e.columns,r=void 0===a?1:a,o=e.dimensions,l=void 0===o?[]:o,i=[],c=[];if(1===r)return n;if(l.length&&l.length===n.length){for(var s=0;s<r;s++)i[s]=[],c[s]=0;n.forEach((function(e,t){var n=l[t],a=n.width,r=n.height,o=c.indexOf(Math.min.apply(Math,c));i[o].push(e),c[o]+=r/a}))}else for(var u=function(e){i[e]=n.filter((function(t,n){return n%r===e}))},m=0;m<r;m++)u(m);return i}({children:n,columns:e,dimensions:a}).map((function(e,t){return o.a.createElement("div",{key:t,style:l},e)})));return i},t.prototype.render=function(){var e=this.props,t=e.className,n=e.gap,a=e.rootStyles,r=this.state.columns,l=void 0===r?this.props.columns:r,i=1===l?{}:{marginLeft:"calc("+n+" * -1)",marginRight:"calc("+n+" * -1)"};return o.a.createElement("div",{className:t,style:a},o.a.createElement("div",{style:i},this.renderColumns(l),o.a.createElement("div",{style:{clear:"both"}})))},t}(r.Component);d.defaultProps={className:"",rootStyles:{overflowX:"hidden"},queries:[],columns:3,gap:"0px"};var f=function(e){var t=e.videos;console.log(t);var n=t.map((function(e){return o.a.createElement("div",{className:"column"},o.a.createElement(s,{videoSrcURL:e.frontmatter.url}))}));return o.a.createElement("div",{className:"row"},n)};t.default=function(e){var t=e.data.allMarkdownRemark.nodes;return o.a.createElement(l.a,null,o.a.createElement("h1",null,"About Me"),o.a.createElement("p",null," I love sports, running, and being outside. "),o.a.createElement(f,{videos:t}),o.a.createElement("p",null," ",o.a.createElement(a.a,{to:"/contact"},"Want to work with me? Reach out")))}},"5t3b":function(e,t,n){e.exports={header:"header-module--header--1C-DW",title:"header-module--title--3_b9J",navList:"header-module--nav-list--3az7f",navItem:"header-module--nav-item--1kPYv",activeNavItem:"header-module--active-nav-item--18LVz"}},Bl7J:function(e,t,n){"use strict";var a=n("q1tI"),r=n.n(a),o=n("Wbzz"),l=function(){var e=Object(o.c)("440568431").site;return r.a.createElement("footer",null,r.a.createElement("p",null," Created by ",e.siteMetadata.author,", © 2021"))},i=n("LbRr"),c=(n("sg+I"),n("kl0w")),s=n.n(c);t.a=function(e){return r.a.createElement("div",{className:s.a.container},r.a.createElement("div",{className:s.a.content},r.a.createElement(i.a,null),e.children),r.a.createElement(l,null))}},GnLm:function(e,t,n){},LbRr:function(e,t,n){"use strict";var a=n("Wbzz"),r=n("q1tI"),o=n.n(r),l=n("5t3b"),i=n("k5SD"),c=n.n(i);t.a=function(){var e=Object(a.c)("3159585216").site;return o.a.createElement("header",{className:l.header},o.a.createElement("div",{style:{display:"flex",margin:0}},o.a.createElement("h1",null,o.a.createElement(a.a,{className:l.title,to:""},e.siteMetadata.title)),o.a.createElement("img",{style:{borderRadius:"50%",width:"50px",borderColor:"black"},src:c.a})),o.a.createElement("nav",null,o.a.createElement("ul",{className:l.navList},o.a.createElement("li",null,o.a.createElement(a.a,{className:l.navItem,activeClassName:l.activeNavItem,to:"/"},"Home")),o.a.createElement("li",null,o.a.createElement(a.a,{className:l.navItem,activeClassName:l.activeNavItem,to:"/about"},"About")),o.a.createElement("li",null,o.a.createElement(a.a,{className:l.navItem,activeClassName:l.activeNavItem,to:"/blog"},"Blog")),o.a.createElement("li",null,o.a.createElement(a.a,{className:l.navItem,activeClassName:l.activeNavItem,to:"/contact"},"Contact")))))}},gs7y:function(e,t,n){e.exports=n.p+"static/sunset-3443ec02e4f7ee1589e699d824a3335c.png"},k5SD:function(e,t,n){e.exports=n.p+"static/duck-03c503b1d028551326dcdc3cae75c70f.jpg"},kl0w:function(e,t,n){e.exports={container:"layout-module--container--28I70",content:"layout-module--content--dHzMz"}},"sg+I":function(e,t,n){}}]);
//# sourceMappingURL=component---src-pages-about-js-961aa8f966051c091bfa.js.map