(function(e){function t(t){for(var a,r,c=t[0],l=t[1],o=t[2],u=0,h=[];u<c.length;u++)r=c[u],Object.prototype.hasOwnProperty.call(s,r)&&s[r]&&h.push(s[r][0]),s[r]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a]);d&&d(t);while(h.length)h.shift()();return n.push.apply(n,o||[]),i()}function i(){for(var e,t=0;t<n.length;t++){for(var i=n[t],a=!0,c=1;c<i.length;c++){var l=i[c];0!==s[l]&&(a=!1)}a&&(n.splice(t--,1),e=r(r.s=i[0]))}return e}var a={},s={app:0},n=[];function r(t){if(a[t])return a[t].exports;var i=a[t]={i:t,l:!1,exports:{}};return e[t].call(i.exports,i,i.exports,r),i.l=!0,i.exports}r.m=e,r.c=a,r.d=function(e,t,i){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(r.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)r.d(i,a,function(t){return e[t]}.bind(null,a));return i},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=t,c=c.slice();for(var o=0;o<c.length;o++)t(c[o]);var d=l;n.push([0,"chunk-vendors"]),i()})({0:function(e,t,i){e.exports=i("56d7")},2510:function(e,t,i){"use strict";i("9be5")},"56d7":function(e,t,i){"use strict";i.r(t);i("e260"),i("e6cf"),i("cca6"),i("a79d");var a=i("7a23");i("92c6");function s(e,t,i,s,n,r){var c=Object(a["l"])("Home");return Object(a["i"])(),Object(a["d"])("div",null,[Object(a["g"])(c)])}var n=i("8e7d"),r=i.n(n),c={class:"hero is-info"},l=Object(a["e"])("div",{class:"hero-body"},[Object(a["e"])("div",{class:"container has-text-centered"},[Object(a["e"])("img",{alt:"MiMIC logo",src:r.a}),Object(a["e"])("p",{class:"subtitle"}," Summarize something ")])],-1),o={class:"hero-foot"},d={class:"tabs is-boxed is-fullwidth"},u={class:"container"},h=Object(a["e"])("a",null,"Summarize",-1),m=[h],p=Object(a["e"])("a",null,"Algorithm",-1),b=[p],v=Object(a["e"])("a",null,"Team",-1),g=[v],f=Object(a["e"])("section",null," put a footer right here ",-1);function O(e,t,i,s,n,r){var h=Object(a["l"])("Summarize"),p=Object(a["l"])("Algorithm"),v=Object(a["l"])("Team");return Object(a["i"])(),Object(a["d"])("div",null,[Object(a["e"])("section",c,[l,Object(a["e"])("div",o,[Object(a["e"])("nav",d,[Object(a["e"])("div",u,[Object(a["e"])("ul",null,[Object(a["e"])("li",{onClick:t[0]||(t[0]=function(e){return n.SelectedTab="Summarize"}),class:Object(a["h"])({"is-active":"Summarize"===n.SelectedTab})},m,2),Object(a["e"])("li",{onClick:t[1]||(t[1]=function(e){return n.SelectedTab="Algorithm"}),class:Object(a["h"])({"is-active":"Algorithm"===n.SelectedTab})},b,2),Object(a["e"])("li",{onClick:t[2]||(t[2]=function(e){return n.SelectedTab="Team"}),class:Object(a["h"])({"is-active":"Team"===n.SelectedTab})},g,2)])])])])]),Object(a["e"])("section",null,[Object(a["e"])("div",null,["Summarize"===n.SelectedTab?(Object(a["i"])(),Object(a["b"])(h,{key:0})):Object(a["c"])("",!0),"Algorithm"===n.SelectedTab?(Object(a["i"])(),Object(a["b"])(p,{key:1})):Object(a["c"])("",!0),"Team"===n.SelectedTab?(Object(a["i"])(),Object(a["b"])(v,{key:2})):Object(a["c"])("",!0)])]),f])}var j=function(e){return Object(a["k"])("data-v-2582f3ca"),e=e(),Object(a["j"])(),e},y={class:"tile"},w={class:"tile is-parent"},S={class:"tile is-child notification is-danger"},x={class:"tile is-parent is-vertical"},C={class:"tile is-child notification is-warning"},k={class:"buttons are-normal is-centered"},M=j((function(){return Object(a["e"])("br",null,null,-1)})),T={class:"message"},z={class:"message-body"};function A(e,t,i,s,n,r){return Object(a["i"])(),Object(a["d"])("div",null,[Object(a["e"])("div",y,[Object(a["e"])("div",w,[Object(a["e"])("article",S,[Object(a["o"])(Object(a["e"])("textarea",{class:"textarea",placeholder:"Input your text here",rows:"15","onUpdate:modelValue":t[0]||(t[0]=function(e){return n.Input=e})},null,512),[[a["n"],n.Input]])])]),Object(a["e"])("div",x,[Object(a["e"])("article",C,[Object(a["e"])("article",k,[Object(a["e"])("button",{class:"button",onClick:t[1]||(t[1]=function(e){return r.summarize()})},"Summarize"),Object(a["e"])("button",{class:"button",onClick:t[2]||(t[2]=function(e){return r.clear()})},"Clear"),M]),Object(a["e"])("article",T,[Object(a["e"])("div",z,Object(a["m"])(n.Output),1)])])])])])}var H=i("bc3a"),I=i.n(H),_={name:"Summarize",data:function(){return{NumSentence:"",Input:"Macalester College was founded by Edward Duffield Neill in 1874 with help from the Presbyterian Church in Minnesota. Neill had served as a chaplain in the Civil War and traveled to Minnesota Territory in 1849. He became connected politically and socially. He went on to found two local churches, was appointed the first Chancellor of the University of Minnesota and became the state's first superintendent of public education. In leaving the University of Minnesota Board of Regents he desired to build a religious college affiliated with the Presbyterian Church that would also be open to other Christian church members.[6] The college's original name was Baldwin College; it was affiliated with the Baldwin School, a Presbyterian secondary school.[7] After a large donation from Charles Macalester, a prominent businessman and philanthropist from Philadelphia, the institution was renamed Macalester College. Macalester donated a hotel, the Winslow House, as the first permanent classroom building. With additional funding from the Presbyterian Church and its trustees, Macalester College opened for courses in 1885 with five teachers, six freshmen, and 52 preparatory students.[6] James Wallace joined the faculty in 1887 and later became president. He helped stabilize the college's finances and advance the institution.[6] During his tenure, Macalester created a focus on a liberal arts curriculum.",Output:"Your summarized text will appear here",Method:"Extractive",Hover:!1}},methods:{summarize:function(){var e=this;I.a.post("http://some.heroku.url.or.whatever/summarize",{text:this.Input}).then((function(t){e.Output=t.data.summarizedText})).catch((function(t){e.errors.push(t)}))},clear:function(){this.Input="",this.Output="Your summarized text will appear here"}}},D=(i("2510"),i("6b0d")),P=i.n(D);const V=P()(_,[["render",A],["__scopeId","data-v-2582f3ca"]]);var E=V,X={class:"tile is-parent"},U=Object(a["f"])('<article class="tile is-child notification is-danger"><p class="title">Our Algorithm</p><p class="subtitle">*explanation of how the algorithm works (using the table below to explain)*</p><div class="content"><table class="table"><thead><tr><th>Step</th><th>Action</th></tr></thead><tbody><tr><th>sent_tokenizer: </th><td>splits text into lists of words, each list representing a sentence.</td></tr><tr><th>preproccess: </th><td>removes punctuation and stopwords such as ‘the,’ ‘and,’ ‘or,’ etc.</td></tr><tr><th>tag_pos: </th><td>‘tags’ the grammatical category of words likely to carry important information, such as nouns or past participles </td></tr><tr><th>stem: </th><td>strips tagged words to their most basic lexical form, or stem. For example, the word ‘cities’ would be stemmed to ‘city,’ or ‘gone’ to ‘go’ </td></tr><tr><th> build_similarity_matrix: </th><td>turns processed text into machine-readable vectors, then creates a cosine similarity matrix, comparing each sentence to each other </td></tr><tr><th>text_rank: </th><td>ranks sentences based on the previously created similarity matrix, giving the most favorable rankings to the sentences most similar to one another</td></tr><tr><th>summarize: </th><td>chooses top X ranked sentences (X input by user), orders them chronologically as in the input text, puts a line break between each, and returns the summarized paragraph</td></tr></tbody></table></div></article>',1),W=[U];function F(e,t,i,s,n,r){return Object(a["i"])(),Object(a["d"])("div",X,W)}var G={name:"Algorithm"};const J=P()(G,[["render",F]]);var L=J,N={class:"tile is-ancestor my-1"},B=Object(a["f"])('<div class="tile is-4 is-vertical is-parent"><div class="tile is-child panel is-success"><p class="panel-heading">Charles Zhang &#39;23</p><div class="panel-block"><div class="card-image has-text-centered"><div class="columns"><figure class="image is-128x128 is-inline-block"><div class="column is-11"><img src="https://github.com/zcczhang/zcczhang.github.io/blob/master/images/profile.png?raw=true"></div></figure><div class="column is-7"><div class="myHero hero-right"><div class="hr"></div><h1>Computer Science and Mathematics Major</h1></div></div></div></div></div></div><div class="tile is-child panel is-primary"><p class="panel-heading">Imane Chatri &#39;23</p><div class="panel-block"><div class="card-image has-text-centered"><div class="columns"><figure class="image is-128x128 is-inline-block"><div class="column is-13"><img src="https://blogger.googleusercontent.com/img/a/AVvXsEhR-MdG4DkTLDy_5uITULOrK11kYBsqI_LxSvhoountnHhgbpFag3IGRSdpHCgWM3pDq3yDC0ItF2lY7iq6BA_iHH17TTMthaUMdj4ouwdKZDzyX-40LsI7COIg8L5oUfOOy847sx0HoQc8KCK64oHHSt1ZTliHFQnut2BHwtJQWUFeF9M0Sy3a2jU_=s320"></div></figure><div class="column is-7"><div class="myHero hero-right"><div class="hr"></div><h1>Computer Science and Linguistics Major</h1></div></div></div></div></div></div><div class="tile is-child panel is-info"><p class="panel-heading">Matthew Wilkinson &#39;22</p><div class="panel-block"><div class="card-image has-text-centered"><div class="columns"><figure class="image is-128x128 is-inline-block"><div class="column is-13"><img src="https://blogger.googleusercontent.com/img/a/AVvXsEjy0sNhJ16_zp-zJNJl6sSuYAn40Dw4LTIbDU_Kepw-hICdf5GZwKAFwVqVjQSAj80v9g7yTHMe0lLXJrO9RfQGmSSIe-CD_sV8Gxbty_REnFnEnVXAj4kdQmPO2veIqeIFGVZ9WyZjG2WlkmeuBdyu0F4c9NG-6tpmCMhVqCXDU5vlIXMi67WVnz_d=s320"></div></figure><div class="column is-8"><div class="myHero hero-right"><div class="hr"></div><h1> Linguistics and Anthropology Major</h1></div></div></div></div></div></div><div class="tile is-child panel is-link"><p class="panel-heading">Melody Arteaga &#39;23</p><div class="panel-block"><div class="card-image has-text-centered"><div class="columns"><figure class="image is-128x128 is-inline-block"><div class="column is-13"><img src="https://blogger.googleusercontent.com/img/a/AVvXsEjnQ97ThdAIDF9DNP8z2wV-a69XG3q7dwgiA1lp7XujS7Hx6I81OSZH7iyrpH4u0m_kCg6YVxuhrhSDidgYwCOmgN5la2sVZz7cC0UC_ANyJ_EnazOhApwloWSrcOSMPQpm0oklGCvGv0uE4wl3xKpHe9AEJ9tpb2Vre6glDuu93BWKt9LrK3ENlieX=s320"></div></figure><div class="column is-7"><div class="myHero hero-right"><div class="hr"></div><h1>Computer Science and Mathematics Major</h1></div></div></div></div></div></div></div><div class="tile is-parent"><div class="tile is-child panel is-warning"><p class="panel-heading"> ABOUT THE PROJECT</p><div class="panel-block"><p>This website was made for our computer science class, Software Design and Development. As liberal arts college students, we often find ourselves with lots of papers to read. This can often feel overwhelming. Our solution to this problem was to create a project that would summarize any text. Check out the algorithm tab to learn how we implmented prexsisting algorithms to create MiMIC! </p></div></div></div>',2),K=[B];function Q(e,t,i,s,n,r){return Object(a["i"])(),Object(a["d"])("div",N,K)}var Z={name:"Team"};const q=P()(Z,[["render",Q]]);var Y=q,R={name:"Home",components:{Summarize:E,Algorithm:L,Team:Y},data:function(){return{SelectedTab:"Summarize"}}};const $=P()(R,[["render",O]]);var ee=$,te={name:"App",components:{Home:ee}};i("b4f9");const ie=P()(te,[["render",s]]);var ae=ie;Object(a["a"])(ae).mount("#app")},"8e7d":function(e,t,i){e.exports=i.p+"img/Smaller-MiMIC-Logo.c224a6d7.png"},"9be5":function(e,t,i){},a0ed:function(e,t,i){},b4f9:function(e,t,i){"use strict";i("a0ed")}});
//# sourceMappingURL=app.eeacb36e.js.map