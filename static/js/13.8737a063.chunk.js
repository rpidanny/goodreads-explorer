(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{214:function(e,t,a){"use strict";var n=a(42),o=a(43),l=a(46),i=a(44),r=a(47),s=a(21),c=a(1),u=a.n(c),d=a(2),h=a.n(d),m=a(255),g=(a(215),function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(l.a)(this,Object(i.a)(t).call(this,e))).state={checkedList:e.defaultCheckedList,indeterminate:!0,checkAll:!1},a.onChange=a.onChange.bind(Object(s.a)(Object(s.a)(a))),a.onCheckAllChange=a.onCheckAllChange.bind(Object(s.a)(Object(s.a)(a))),a}return Object(r.a)(t,e),Object(o.a)(t,[{key:"onChange",value:function(e,t){var a=this,n=this.state.checkedList;t?n.push(e):n=n.filter(function(t){return t!==e}),this.setState({checkedList:n,indeterminate:!!n.length&&n.length<this.props.options.length,checkAll:n.length===this.props.options.length},function(){return a.props.onChange(a.state.checkedList)})}},{key:"onCheckAllChange",value:function(e){var t=this;this.setState({checkedList:e.target.checked?this.props.options:[],indeterminate:!1,checkAll:e.target.checked},function(){return t.props.onChange(t.state.checkedList)})}},{key:"render",value:function(){var e=this;return u.a.createElement("div",{className:this.props.className},u.a.createElement("div",{style:{borderBottom:"1px solid #E9E9E9"}},u.a.createElement(m.a,{indeterminate:this.state.indeterminate,onChange:this.onCheckAllChange,checked:this.state.checkAll},"Check all")),u.a.createElement("ul",{className:"shelvesCheckboxGroup"},this.props.options.map(function(t,a){return u.a.createElement("li",{key:a},u.a.createElement(m.a,{onChange:function(a){return e.onChange(t,a.target.checked)},key:t,checked:e.props.defaultCheckedList.indexOf(t)>-1,disabled:e.props.disable[a]},e.props.optionLabel[a]?e.props.optionLabel[a]:t))})))}}]),t}(c.Component));g.defaultProps={disable:[],optionLabel:[]},g.propTpes={options:h.a.array.isRequired,onChange:h.a.func,optionLabel:h.a.array,defaultCheckedList:h.a.array,disable:h.a.array},t.a=g},215:function(e,t,a){},533:function(e,t,a){},540:function(e,t,a){},543:function(e,t,a){},562:function(e,t,a){},563:function(e,t,a){},603:function(e,t,a){"use strict";a.r(t);var n=a(42),o=a(43),l=a(46),i=a(44),r=a(47),s=a(21),c=a(1),u=a.n(c),d=a(588),h=a(589),m=a(598),g=a(604),b=a(595),k=a(594),p=a(163),f=a(402),v=a.n(f),E=a(214),y=a(403),S={keys:["hot dog","burger","sandwich","kebab","fries","donut"],margin:{top:50,right:50,bottom:50,left:60},defs:[{id:"dots",type:"patternDots",background:"inherit",color:"#38bcb2",size:4,padding:1,stagger:!0},{id:"lines",type:"patternLines",background:"inherit",color:"#eed312",rotation:-45,lineWidth:6,spacing:10}],fill:[{match:{id:"fries"},id:"dots"},{match:{id:"sandwich"},id:"lines"}],axisBottom:{tickSize:5,tickPadding:5,tickRotation:0,legend:"country",legendPosition:"middle",legendOffset:32},axisLeft:{tickSize:5,tickPadding:5,tickRotation:0,legend:"food",legendPosition:"middle",legendOffset:-40},legends:[{dataFrom:"keys",anchor:"bottom-right",direction:"column",justify:!1,translateX:120,translateY:0,itemsSpacing:2,itemWidth:100,itemHeight:20,itemDirection:"left-to-right",itemOpacity:.85,symbolSize:20,effects:[{on:"hover",style:{itemOpacity:1}}]}]},x=(a(533),function(e){return u.a.createElement("div",{className:"barGraph"},u.a.createElement(y.ResponsiveBar,{data:e.data,indexBy:"key",margin:S.margin,padding:.3,colors:"nivo",colorBy:"id",defs:S.defs,fill:S.fill,borderColor:"inherit:darker(1.6)",axisTop:null,axisRight:null,axisBottom:{tickSize:5,tickPadding:5,tickRotation:0,legend:e.xLabel,legendPosition:"middle",legendOffset:32},axisLeft:{tickSize:5,tickPadding:5,tickRotation:0,legend:e.yLabel,legendPosition:"middle",legendOffset:-40},labelSkipWidth:12,labelSkipHeight:12,labelTextColor:"inherit:darker(1.6)",animate:!0,motionStiffness:90,motionDamping:15}))}),L=a(189),C=a(534),O=(a(540),1337),P=function(){var e=1e4*Math.sin(O++);return e-Math.floor(e)},j=function(e,t,a){return u.a.createElement(L.a,{key:e.value,title:"".concat(e.value," (").concat(e.count,")")},u.a.createElement("span",{key:e.value,style:{fontSize:"".concat(t,"em"),border:"2px solid ".concat(a),margin:"3px",padding:"3px",display:"inline-block"}},e.value))},B=function(e){var t=e.data.map(function(e){return{value:e.key,count:e.value}});return u.a.createElement(C.TagCloud,{tags:t,minSize:1,maxSize:5,renderer:j,randomNumberGenerator:P})},R=a(541),A=(a(543),function(e){return u.a.createElement("div",{className:"pieChart"},u.a.createElement(R.ResponsivePie,{data:e.data,margin:{top:40,right:80,bottom:80,left:80},innerRadius:.5,padAngle:.7,cornerRadius:3,colors:"nivo",colorBy:"id",borderWidth:1,borderColor:"inherit:darker(0.2)",radialLabelsSkipAngle:10,radialLabelsTextXOffset:6,radialLabelsTextColor:"#333333",radialLabelsLinkOffset:0,radialLabelsLinkDiagonalLength:16,radialLabelsLinkHorizontalLength:24,radialLabelsLinkStrokeWidth:1,radialLabelsLinkColor:"inherit",slicesLabelsSkipAngle:10,slicesLabelsTextColor:"#333333",animate:!0,motionStiffness:90,motionDamping:15,defs:[{id:"dots",type:"patternDots",background:"inherit",color:"rgba(255, 255, 255, 0.3)",size:4,padding:1,stagger:!0},{id:"lines",type:"patternLines",background:"inherit",color:"rgba(255, 255, 255, 0.3)",rotation:-45,lineWidth:6,spacing:10}]}))}),w=a(544),N=(a(562),function(e){return u.a.createElement("div",{style:{width:"100%",height:"400px"}},u.a.createElement(w.ResponsiveScatterPlot,{data:e.data,margin:{top:60,right:60,bottom:70,left:90},xScale:{type:"linear",min:0,max:"auto"},yScale:{type:"linear",min:0,max:"auto"},axisTop:null,axisRight:null,axisBottom:{orient:"bottom",tickSize:5,tickPadding:5,tickRotation:0,legend:e.xLabel,legendPosition:"middle",legendOffset:46},axisLeft:{orient:"left",tickSize:5,tickPadding:5,tickRotation:0,legend:e.yLabel,legendPosition:"middle",legendOffset:-60},animate:!0,motionStiffness:90,motionDamping:15}))}),_=a(11),z=function(e){return e.reduce(function(e,t){return e+t},0)};function D(e,t){var a=[];return e.user_shelves.forEach(function(e){t.indexOf(e.name)>-1&&(e.books.book&&(e.books.book.length?e.books.book:[e.books.book]).forEach(function(t){a.push(Object(_.a)({},t,{property:{shelf:e.name},author:t.authors?t.authors.author.name:"Unknown"}))}))}),a}function H(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,n={};e.forEach(function(e){var o=e[t];a&&(o=a(o)),n[o]?n[o].push(e):n[o]=[e]});var o=Object.keys(n);return Object.values(n).map(function(e,t){return{key:o[t],value:e.length}})}a(563);var T=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(l.a)(this,Object(i.a)(t).call(this,e))).state={shelvesSelectPopover:!1,books:[],shelves:[],selectedShelves:[]},a.hideShelvesSelect=a.hideShelvesSelect.bind(Object(s.a)(Object(s.a)(a))),a.handleShelvesChange=a.handleShelvesChange.bind(Object(s.a)(Object(s.a)(a))),a.handleShelvesSelectVisibleChange=a.handleShelvesSelectVisibleChange.bind(Object(s.a)(Object(s.a)(a))),a}return Object(r.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this.props.userData.user_shelves.map(function(e){return e.books.book?{name:e.name,bookCount:e.books.book.length?e.books.book.length:1}:{name:e.name,bookCount:0}}),t=e.length>0?[e[0].name]:[],a=D(this.props.userData,t);this.setState({shelves:e,selectedShelves:t,books:a})}},{key:"hideShelvesSelect",value:function(){this.setState({shelvesSelectPopover:!1})}},{key:"handleShelvesSelectVisibleChange",value:function(e){this.setState({shelvesSelectPopover:e})}},{key:"handleShelvesChange",value:function(e){var t=D(this.props.userData,e);this.setState({books:t,selectedShelves:e})}},{key:"render",value:function(){var e=this.state,t=e.books,a=e.shelvesSelectPopover,n=e.shelves,o=e.selectedShelves,l=this.props.userData.user_shelves.map(function(e){return{id:e.name,label:e.name,value:parseInt(e.books.end),color:v()()}}),i=function(e){var t=e.map(function(e){return"string"===typeof e.num_pages?parseInt(e.num_pages):0}),a=e.map(function(e){return"string"===typeof e.average_rating?parseFloat(e.average_rating):0}),n=e.length,o=z(t),l=z(a);return{totalBooks:e.length,totalPages:o,averagePages:(o/n).toFixed(2),averageRating:(l/n).toFixed(2)}}(t),r=H(t,"published",function(e){return"string"===typeof e?e:"Unknown"}),s=H(t,"author"),c=H(t,"format",function(e){return"string"===typeof e?e:"Unknown"}),f=function(e){var t=H(e,"average_rating"),a={"0-1":0,"1-2":0,"2-3":0,"3-4":0,"4-5":0};t.forEach(function(e){switch(Math.floor(parseFloat(e.key))){case 0:a["0-1"]+=1;break;case 1:a["1-2"]+=1;break;case 2:a["2-3"]+=1;break;case 3:a["3-4"]+=1;break;case 4:a["4-5"]+=1}});var n=Object.keys(a);return Object.values(a).map(function(e,t){return{key:n[t],value:e}})}(t),y=function(e){var t=H(e,"num_pages"),a={"0-100":0,"100-200":0,"200-300":0,"300-400":0,"400-500":0,"500-600":0,"600-700":0,"700-800":0,"800-900":0,"900-1000":0,"1000-1100":0,"1100-1200":0,"1200+":0};t.forEach(function(e){switch(Math.floor(parseFloat(e.key)/100)){case 0:a["0-100"]+=1;break;case 1:a["100-200"]+=1;break;case 2:a["200-300"]+=1;break;case 3:a["300-400"]+=1;break;case 4:a["400-500"]+=1;break;case 5:a["500-600"]+=1;break;case 6:a["600-700"]+=1;break;case 7:a["700-800"]+=1;break;case 8:a["800-900"]+=1;break;case 9:a["900-1000"]+=1;break;case 10:a["1000-1100"]+=1;break;case 11:a["1100-1200"]+=1;break;case 12:a["1200+"]+=1}});var n=Object.keys(a);return Object.values(a).map(function(e,t){return{key:n[t],value:e}})}(t),S=function(e){var t=H(e,"publication_month"),a={1:0,2:0,3:0,4:0,5:0,6:0,7:0,8:0,9:0,10:0,11:0,12:0};t.forEach(function(e){switch(parseInt(e.key)){case 1:a[1]=e.value;break;case 2:a[2]=e.value;break;case 3:a[3]=e.value;break;case 4:a[4]=e.value;break;case 5:a[5]=e.value;break;case 6:a[6]=e.value;break;case 7:a[7]=e.value;break;case 8:a[8]=e.value;break;case 9:a[9]=e.value;break;case 10:a[10]=e.value;break;case 11:a[11]=e.value;break;case 12:a[12]=e.value}});var n=Object.keys(a);return Object.values(a).map(function(e,t){return{key:n[t],value:e}})}(t),L=c.map(function(e){return{id:e.key,label:e.key,value:e.value,color:v()()}}),C=function(e){var t=[];return e.forEach(function(e){"string"===typeof e.publication_month&&"string"===typeof e.average_rating&&t.push({x:parseInt(e.publication_month),y:parseFloat(e.average_rating)})}),[{id:"Books",data:t}]}(t);return console.log("Books: ",t),console.log("YearHist: ",r),console.log("authorHist: ",s),console.log("ratingHist",f),console.log("numPagesHist",y),console.log("Shelves",l),console.log("formatDistribution",c),console.log("stats",i),u.a.createElement("div",{className:"statistics"},u.a.createElement(d.a,{gutter:16},u.a.createElement(h.a,{xs:24,sm:12,md:6,lg:4,xl:4},u.a.createElement(m.a,null,u.a.createElement(g.a,{title:"Total Shelves",value:n.length}))),u.a.createElement(h.a,{xs:24,sm:12,md:6,lg:4,xl:4},u.a.createElement(m.a,null,u.a.createElement(g.a,{title:"Total Books",value:i.totalBooks}))),u.a.createElement(h.a,{xs:24,sm:12,md:6,lg:4,xl:4},u.a.createElement(m.a,null,u.a.createElement(g.a,{title:"Total Pages",value:i.totalPages}))),u.a.createElement(h.a,{xs:24,sm:12,md:6,lg:4,xl:4},u.a.createElement(m.a,null,u.a.createElement(g.a,{title:"Average Pages",value:i.averagePages}))),u.a.createElement(h.a,{xs:24,sm:12,md:6,lg:4,xl:4},u.a.createElement(m.a,null,u.a.createElement(g.a,{title:"Average Rating",value:i.averageRating})))),u.a.createElement(b.a,null),u.a.createElement(d.a,null,u.a.createElement(m.a,{title:"Authors"},u.a.createElement(B,{data:s}))),u.a.createElement(b.a,null),u.a.createElement(d.a,{gutter:16},u.a.createElement(h.a,{xs:24,sm:24,md:12,lg:12,xl:12},u.a.createElement(m.a,{title:"Shelves"},u.a.createElement(A,{data:l}))),u.a.createElement(h.a,{xs:24,sm:24,md:12,lg:12,xl:12},u.a.createElement(m.a,{title:"Book Formats"},u.a.createElement(A,{data:L})))),u.a.createElement("br",null),u.a.createElement(d.a,{gutter:16},u.a.createElement(h.a,{xs:24,sm:24,md:12,lg:12,xl:12},u.a.createElement(m.a,{title:"Published Month Vs Average Rating"},u.a.createElement(N,{data:C,xLabel:"Published Month",yLabel:"Average Rating"})))),u.a.createElement(b.a,{dashed:!0}),u.a.createElement(d.a,null,u.a.createElement(m.a,{title:"Histogram of Books by Number of Pages"},u.a.createElement(x,{data:y,xLabel:"Number of Pages",yLabel:"Number of Books"}))),u.a.createElement(b.a,{dashed:!0}),u.a.createElement(d.a,null,u.a.createElement(m.a,{title:"Histogram of Books by Published Month"},u.a.createElement(x,{data:S,xLabel:"Published Month",yLabel:"Number of Books"}))),u.a.createElement(b.a,{dashed:!0}),u.a.createElement(d.a,null,u.a.createElement(m.a,{title:"Histogram of Books by Published Year"},u.a.createElement(x,{data:r,xLabel:"Published Year",yLabel:"Number of Books"}))),u.a.createElement(b.a,{dashed:!0}),u.a.createElement(d.a,null,u.a.createElement(m.a,{title:"Histogram of Books by Average Rating"},u.a.createElement(x,{data:f,xLabel:"Average Rating",yLabel:"Number of Books"}))),u.a.createElement(b.a,{dashed:!0}),u.a.createElement(k.a,{content:u.a.createElement(E.a,{onChange:this.handleShelvesChange,options:n.map(function(e){return e.name}),defaultCheckedList:o,optionLabel:n.map(function(e){return"".concat(e.name," (").concat(e.bookCount,")")}),disable:n.map(function(e){return 0===e.bookCount}),className:"graphPopover"}),title:"Shelves (".concat(n.length,")"),trigger:"click",visible:a,onVisibleChange:this.handleShelvesSelectVisibleChange,placement:"bottomLeft"},u.a.createElement(p.a,{icon:"check-square",style:{position:"fixed",top:20,right:60}},"Select Shelves")))}}]),t}(c.Component);t.default=T}}]);
//# sourceMappingURL=13.8737a063.chunk.js.map