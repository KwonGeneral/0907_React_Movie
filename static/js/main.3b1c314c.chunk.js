(this.webpackJsonpreact_movie=this.webpackJsonpreact_movie||[]).push([[0],{38:function(e,t,n){},39:function(e,t,n){},46:function(e,t,n){},67:function(e,t,n){},68:function(e,t,n){},69:function(e,t,n){"use strict";n.r(t);var a=n(0),s=n.n(a),c=n(29),i=n.n(c),r=(n(38),n(8)),o=(n(39),n(1));var l=function(){return Object(o.jsxs)("div",{className:"nav",children:[Object(o.jsx)(r.b,{to:"/",children:"\ud648"}),Object(o.jsx)(r.b,{to:"/about",children:"\uc815\ubcf4"})]})},m=n(2);n(46);var j=function(e){return console.log(e),Object(o.jsxs)("div",{className:"about__container",children:[Object(o.jsx)("span",{children:"\uc601\ud654 \ud3c9\uac00 \uc6f9\uc0ac\uc774\ud2b8"}),Object(o.jsx)("span",{children:"- 2021.09.07 Kwonputer"})]})},u=n(19),d=n.n(u),v=n(32),b=n(11),h=n(12),p=n(14),O=n(13),x=n(33),_=n.n(x);n(67);var f=function(e){var t=e.year,n=e.title,a=e.summary,s=e.medium_cover_image,c=e.genres;return Object(o.jsx)("div",{className:"movie",children:Object(o.jsxs)(r.b,{to:{pathname:"/movie-detail",state:{year:t,title:n,summary:a,medium_cover_image:s,genres:c}},children:[Object(o.jsx)("img",{src:s,alt:n,title:n}),Object(o.jsxs)("div",{className:"movie__data",children:[Object(o.jsx)("h3",{className:"movie__title",children:n}),Object(o.jsx)("h5",{className:"movie__year",children:t}),Object(o.jsx)("ul",{className:"movie__genres",children:c.map((function(e,t){return Object(o.jsx)("li",{className:"movie__genres_li",children:e},t)}))}),Object(o.jsxs)("p",{className:"movie__summary",children:[a.slice(0,180),"..."]})]})]})})},y=(n(68),function(e){Object(p.a)(n,e);var t=Object(O.a)(n);function n(){var e;Object(b.a)(this,n);for(var a=arguments.length,s=new Array(a),c=0;c<a;c++)s[c]=arguments[c];return(e=t.call.apply(t,[this].concat(s))).state={isLoading:!0,movie_list:[]},e.getMovieData=Object(v.a)(d.a.mark((function t(){var n,a;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,_.a.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");case 2:n=t.sent,a=n.data.data.movies,e.setState({movie_list:a,isLoading:!1});case 5:case"end":return t.stop()}}),t)}))),e}return Object(h.a)(n,[{key:"componentDidMount",value:function(){this.getMovieData()}},{key:"render",value:function(){var e=this.state,t=e.isLoading,n=e.movie_list;return Object(o.jsx)("section",{className:"container",children:t?Object(o.jsx)("div",{className:"loader",children:Object(o.jsx)("span",{className:"loader__text",children:"\ub85c\ub529\uc911..."})}):Object(o.jsx)("div",{className:"movies",children:n.map((function(e){return Object(o.jsx)(f,{id:e.id,year:e.year,title:e.title,summary:e.summary,medium_cover_image:e.medium_cover_image,genres:e.genres},e.id)}))})})}}]),n}(s.a.Component)),g=function(e){Object(p.a)(n,e);var t=Object(O.a)(n);function n(){return Object(b.a)(this,n),t.apply(this,arguments)}return Object(h.a)(n,[{key:"componentDidMount",value:function(){var e=this.props,t=e.location,n=e.history;void 0===t.state&&n.push("/")}},{key:"render",value:function(){var e=this.props.location;return e.state?Object(o.jsx)("span",{children:e.state.title}):null}}]),n}(s.a.Component);var N=function(){return Object(o.jsxs)(r.a,{children:[Object(o.jsx)(l,{}),Object(o.jsx)(m.a,{path:"/",exact:!0,component:y}),Object(o.jsx)(m.a,{path:"/about",component:j}),Object(o.jsx)(m.a,{path:"/movie-detail",component:g})]})};i.a.render(Object(o.jsx)(N,{}),document.getElementById("root"))}},[[69,1,2]]]);
//# sourceMappingURL=main.3b1c314c.chunk.js.map