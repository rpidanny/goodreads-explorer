(this["webpackJsonpgoodreads-explorer"]=this["webpackJsonpgoodreads-explorer"]||[]).push([[13],{215:function(e,a,t){"use strict";var n=t(44),o=t(45),l=t(22),r=t(48),i=t(47),s=t(1),c=t.n(s),u=t(2),d=t.n(u),h=t(256),m=(t(216),function(e){Object(r.a)(t,e);var a=Object(i.a)(t);function t(e){var o;return Object(n.a)(this,t),(o=a.call(this,e)).state={checkedList:e.defaultCheckedList,indeterminate:!0,checkAll:!1},o.onChange=o.onChange.bind(Object(l.a)(o)),o.onCheckAllChange=o.onCheckAllChange.bind(Object(l.a)(o)),o}return Object(o.a)(t,[{key:"onChange",value:function(e,a){var t=this,n=this.state.checkedList;a?n.push(e):n=n.filter((function(a){return a!==e})),this.setState({checkedList:n,indeterminate:!!n.length&&n.length<this.props.options.length,checkAll:n.length===this.props.options.length},(function(){return t.props.onChange(t.state.checkedList)}))}},{key:"onCheckAllChange",value:function(e){var a=this;this.setState({checkedList:e.target.checked?this.props.options:[],indeterminate:!1,checkAll:e.target.checked},(function(){return a.props.onChange(a.state.checkedList)}))}},{key:"render",value:function(){var e=this;return c.a.createElement("div",{className:this.props.className},c.a.createElement("div",{style:{borderBottom:"1px solid #E9E9E9"}},c.a.createElement(h.a,{indeterminate:this.state.indeterminate,onChange:this.onCheckAllChange,checked:this.state.checkAll},"Check all")),c.a.createElement("ul",{className:"shelvesCheckboxGroup"},this.props.options.map((function(a,t){return c.a.createElement("li",{key:t},c.a.createElement(h.a,{onChange:function(t){return e.onChange(a,t.target.checked)},key:a,checked:e.props.defaultCheckedList.indexOf(a)>-1,disabled:e.props.disable[t]},e.props.optionLabel[t]?e.props.optionLabel[t]:a))}))))}}]),t}(s.Component));m.defaultProps={disable:[],optionLabel:[]},m.propTpes={options:d.a.array.isRequired,onChange:d.a.func,optionLabel:d.a.array,defaultCheckedList:d.a.array,disable:d.a.array},a.a=m},216:function(e,a,t){},535:function(e,a,t){},542:function(e,a,t){},545:function(e,a,t){},564:function(e,a,t){},565:function(e,a,t){},605:function(e,a,t){"use strict";t.r(a);var n=t(44),o=t(45),l=t(22),r=t(48),i=t(47),s=t(1),c=t.n(s),u=t(590),d=t(591),h=t(600),m=t(606),g=t(597),b=t(596),k=t(164),p=t(404),f=t.n(p),v=t(215),E=t(405),y={keys:["hot dog","burger","sandwich","kebab","fries","donut"],margin:{top:50,right:50,bottom:50,left:60},defs:[{id:"dots",type:"patternDots",background:"inherit",color:"#38bcb2",size:4,padding:1,stagger:!0},{id:"lines",type:"patternLines",background:"inherit",color:"#eed312",rotation:-45,lineWidth:6,spacing:10}],fill:[{match:{id:"fries"},id:"dots"},{match:{id:"sandwich"},id:"lines"}],axisBottom:{tickSize:5,tickPadding:5,tickRotation:0,legend:"country",legendPosition:"middle",legendOffset:32},axisLeft:{tickSize:5,tickPadding:5,tickRotation:0,legend:"food",legendPosition:"middle",legendOffset:-40},legends:[{dataFrom:"keys",anchor:"bottom-right",direction:"column",justify:!1,translateX:120,translateY:0,itemsSpacing:2,itemWidth:100,itemHeight:20,itemDirection:"left-to-right",itemOpacity:.85,symbolSize:20,effects:[{on:"hover",style:{itemOpacity:1}}]}]},x=(t(535),function(e){return c.a.createElement("div",{className:"barGraph"},c.a.createElement(E.ResponsiveBar,{data:e.data,indexBy:"key",margin:y.margin,padding:.3,colors:e.colors||"nivo",colorBy:"id",defs:y.defs,fill:y.fill,borderColor:"inherit:darker(1.6)",axisTop:null,axisRight:null,axisBottom:{tickSize:5,tickPadding:5,tickRotation:0,legend:e.xLabel,legendPosition:"middle",legendOffset:32},axisLeft:{tickSize:5,tickPadding:5,tickRotation:0,legend:e.yLabel,legendPosition:"middle",legendOffset:-40},labelSkipWidth:12,labelSkipHeight:12,labelTextColor:"inherit:darker(1.6)",animate:!0,motionStiffness:90,motionDamping:15}))}),S=t(190),L=t(536),C=(t(542),1337),O=function(){var e=1e4*Math.sin(C++);return e-Math.floor(e)},P=function(e,a,t){return c.a.createElement(S.a,{key:e.value,title:"".concat(e.value," (").concat(e.count,")")},c.a.createElement("span",{key:e.value,style:{fontSize:"".concat(a,"em"),border:"2px solid ".concat(t),margin:"3px",padding:"3px",display:"inline-block"}},e.value))},B=function(e){var a=e.data.map((function(e){return{value:e.key,count:e.value}}));return c.a.createElement(L.TagCloud,{tags:a,minSize:1,maxSize:5,renderer:P,randomNumberGenerator:O})},R=t(543),j=(t(545),function(e){return c.a.createElement("div",{className:"pieChart"},c.a.createElement(R.ResponsivePie,{data:e.data,margin:{top:40,right:80,bottom:80,left:80},innerRadius:.5,padAngle:.7,cornerRadius:3,colors:e.colors||"nivo",colorBy:"id",borderWidth:1,borderColor:"inherit:darker(0.2)",radialLabelsSkipAngle:10,radialLabelsTextXOffset:6,radialLabelsTextColor:"#333333",radialLabelsLinkOffset:0,radialLabelsLinkDiagonalLength:16,radialLabelsLinkHorizontalLength:24,radialLabelsLinkStrokeWidth:1,radialLabelsLinkColor:"inherit",slicesLabelsSkipAngle:10,slicesLabelsTextColor:"#333333",animate:!0,motionStiffness:90,motionDamping:15,defs:[{id:"dots",type:"patternDots",background:"inherit",color:"rgba(255, 255, 255, 0.3)",size:4,padding:1,stagger:!0},{id:"lines",type:"patternLines",background:"inherit",color:"rgba(255, 255, 255, 0.3)",rotation:-45,lineWidth:6,spacing:10}]}))}),A=t(546),_=(t(564),function(e){return c.a.createElement("div",{style:{width:"100%",height:"400px"}},c.a.createElement(A.ResponsiveScatterPlot,{data:e.data,colors:e.colors||"dark2",margin:{top:60,right:60,bottom:70,left:90},xScale:{type:"linear",min:0,max:"auto"},yScale:{type:"linear",min:0,max:"auto"},axisTop:null,axisRight:null,axisBottom:{orient:"bottom",tickSize:5,tickPadding:5,tickRotation:0,legend:e.xLabel,legendPosition:"middle",legendOffset:46},axisLeft:{orient:"left",tickSize:5,tickPadding:5,tickRotation:0,legend:e.yLabel,legendPosition:"middle",legendOffset:-60},animate:!0,motionStiffness:90,motionDamping:15}))}),N=t(6),z=function(e){return e.reduce((function(e,a){return e+a}),0)};function D(e,a){var t=[];return e.user_shelves.forEach((function(e){a.indexOf(e.name)>-1&&(e.books.book&&(e.books.book.length?e.books.book:[e.books.book]).forEach((function(a){t.push(Object(N.a)(Object(N.a)({},a),{},{property:{shelf:e.name},author:a.authors?a.authors.author.name:"Unknown"}))})))})),t}function w(e,a){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,n={};e.forEach((function(e){var o=e[a];t&&(o=t(o)),n[o]?n[o].push(e):n[o]=[e]}));var o=Object.keys(n),l=Object.values(n).map((function(e,a){return{key:o[a],value:e.length}}));return l}t(565);var H=function(e){Object(r.a)(t,e);var a=Object(i.a)(t);function t(e){var o;return Object(n.a)(this,t),(o=a.call(this,e)).state={shelvesSelectPopover:!1,books:[],shelves:[],selectedShelves:[]},o.hideShelvesSelect=o.hideShelvesSelect.bind(Object(l.a)(o)),o.handleShelvesChange=o.handleShelvesChange.bind(Object(l.a)(o)),o.handleShelvesSelectVisibleChange=o.handleShelvesSelectVisibleChange.bind(Object(l.a)(o)),o}return Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this.props.userData.user_shelves.map((function(e){return e.books.book?{name:e.name,bookCount:e.books.book.length?e.books.book.length:1}:{name:e.name,bookCount:0}})),a=e.length>0?[e[0].name]:[],t=D(this.props.userData,a);this.setState({shelves:e,selectedShelves:a,books:t})}},{key:"hideShelvesSelect",value:function(){this.setState({shelvesSelectPopover:!1})}},{key:"handleShelvesSelectVisibleChange",value:function(e){this.setState({shelvesSelectPopover:e})}},{key:"handleShelvesChange",value:function(e){var a=D(this.props.userData,e);this.setState({books:a,selectedShelves:e})}},{key:"render",value:function(){var e=this.state,a=e.books,t=e.shelvesSelectPopover,n=e.shelves,o=e.selectedShelves,l=this.props.userData.user_shelves.map((function(e){return{id:e.name,label:e.name,value:e.books.total,color:f()()}})),r=function(e){var a=e.map((function(e){return"string"===typeof e.num_pages?parseInt(e.num_pages):0})),t=e.map((function(e){return"string"===typeof e.average_rating?parseFloat(e.average_rating):0})),n=e.length,o=z(a),l=z(t);return{totalBooks:e.length,totalPages:o,averagePages:(o/n).toFixed(2),averageRating:(l/n).toFixed(2)}}(a),i=w(a,"published",(function(e){return"string"===typeof e?e:"Unknown"})),s=w(a,"author"),p=w(a,"format",(function(e){return"string"===typeof e?e:"Unknown"})),E=function(e){var a=w(e,"average_rating"),t={"0-1":0,"1-2":0,"2-3":0,"3-4":0,"4-5":0};a.forEach((function(e){switch(Math.floor(parseFloat(e.key))){case 0:t["0-1"]+=1;break;case 1:t["1-2"]+=1;break;case 2:t["2-3"]+=1;break;case 3:t["3-4"]+=1;break;case 4:t["4-5"]+=1}}));var n=Object.keys(t);return Object.values(t).map((function(e,a){return{key:n[a],value:e}}))}(a),y=function(e){var a=w(e,"num_pages"),t={"0-100":0,"100-200":0,"200-300":0,"300-400":0,"400-500":0,"500-600":0,"600-700":0,"700-800":0,"800-900":0,"900-1000":0,"1000-1100":0,"1100-1200":0,"1200+":0};a.forEach((function(e){switch(Math.floor(parseFloat(e.key)/100)){case 0:t["0-100"]+=1;break;case 1:t["100-200"]+=1;break;case 2:t["200-300"]+=1;break;case 3:t["300-400"]+=1;break;case 4:t["400-500"]+=1;break;case 5:t["500-600"]+=1;break;case 6:t["600-700"]+=1;break;case 7:t["700-800"]+=1;break;case 8:t["800-900"]+=1;break;case 9:t["900-1000"]+=1;break;case 10:t["1000-1100"]+=1;break;case 11:t["1100-1200"]+=1;break;case 12:t["1200+"]+=1}}));var n=Object.keys(t);return Object.values(t).map((function(e,a){return{key:n[a],value:e}}))}(a),S=function(e){var a=w(e,"publication_month"),t={1:0,2:0,3:0,4:0,5:0,6:0,7:0,8:0,9:0,10:0,11:0,12:0};a.forEach((function(e){switch(parseInt(e.key)){case 1:t[1]=e.value;break;case 2:t[2]=e.value;break;case 3:t[3]=e.value;break;case 4:t[4]=e.value;break;case 5:t[5]=e.value;break;case 6:t[6]=e.value;break;case 7:t[7]=e.value;break;case 8:t[8]=e.value;break;case 9:t[9]=e.value;break;case 10:t[10]=e.value;break;case 11:t[11]=e.value;break;case 12:t[12]=e.value}}));var n=Object.keys(t);return Object.values(t).map((function(e,a){return{key:n[a],value:e}}))}(a),L=p.map((function(e){return{id:e.key,label:e.key,value:e.value,color:f()()}})),C=function(e){var a=[];return e.forEach((function(e){"string"===typeof e.publication_month&&"string"===typeof e.average_rating&&a.push({x:parseInt(e.publication_month),y:parseFloat(e.average_rating)})})),[{id:"Books",data:a}]}(a),O=function(e){var a=[];return e.forEach((function(e){e.authors&&"string"===typeof e.authors.author.average_rating&&"string"===typeof e.average_rating&&a.push({x:parseFloat(e.authors.author.average_rating),y:parseFloat(e.average_rating)})})),[{id:"Books",data:a}]}(a);return console.log("Books: ",a),console.log("YearHist: ",i),console.log("authorHist: ",s),console.log("ratingHist",E),console.log("numPagesHist",y),console.log("Shelves",l),console.log("formatDistribution",p),console.log("stats",r),c.a.createElement("div",{className:"statistics"},c.a.createElement(u.a,{gutter:16},c.a.createElement(d.a,{xs:24,sm:12,md:6,lg:4,xl:4},c.a.createElement(h.a,null,c.a.createElement(m.a,{title:"Total Shelves",value:n.length}))),c.a.createElement(d.a,{xs:24,sm:12,md:6,lg:4,xl:4},c.a.createElement(h.a,null,c.a.createElement(m.a,{title:"Total Books",value:r.totalBooks}))),c.a.createElement(d.a,{xs:24,sm:12,md:6,lg:4,xl:4},c.a.createElement(h.a,null,c.a.createElement(m.a,{title:"Total Pages",value:r.totalPages}))),c.a.createElement(d.a,{xs:24,sm:12,md:6,lg:4,xl:4},c.a.createElement(h.a,null,c.a.createElement(m.a,{title:"Average Pages",value:r.averagePages}))),c.a.createElement(d.a,{xs:24,sm:12,md:6,lg:4,xl:4},c.a.createElement(h.a,null,c.a.createElement(m.a,{title:"Average Rating",value:r.averageRating})))),c.a.createElement(g.a,null),c.a.createElement(u.a,null,c.a.createElement(h.a,{title:"Authors"},c.a.createElement(B,{data:s}))),c.a.createElement(g.a,null),c.a.createElement(u.a,{gutter:16},c.a.createElement(d.a,{xs:24,sm:24,md:12,lg:12,xl:12},c.a.createElement(h.a,{title:"Shelves"},c.a.createElement(j,{data:l,colors:"accent"}))),c.a.createElement(d.a,{xs:24,sm:24,md:12,lg:12,xl:12},c.a.createElement(h.a,{title:"Book Formats"},c.a.createElement(j,{data:L})))),c.a.createElement("br",null),c.a.createElement(u.a,{gutter:16},c.a.createElement(d.a,{xs:24,sm:24,md:12,lg:12,xl:12},c.a.createElement(h.a,{title:"Published Month Vs Average Rating"},c.a.createElement(_,{data:C,xLabel:"Published Month",yLabel:"Average Rating"}))),c.a.createElement(d.a,{xs:24,sm:24,md:12,lg:12,xl:12},c.a.createElement(h.a,{title:"Author Rating Vs Book Rating"},c.a.createElement(_,{data:O,xLabel:"Author Rating",yLabel:"Book Rating",colors:"pink_yellowGreen"})))),c.a.createElement(g.a,{dashed:!0}),c.a.createElement(u.a,null,c.a.createElement(h.a,{title:"Histogram of Books by Number of Pages"},c.a.createElement(x,{data:y,xLabel:"Number of Pages",yLabel:"Number of Books"}))),c.a.createElement(g.a,{dashed:!0}),c.a.createElement(u.a,null,c.a.createElement(h.a,{title:"Histogram of Books by Published Month"},c.a.createElement(x,{data:S,xLabel:"Published Month",yLabel:"Number of Books"}))),c.a.createElement(g.a,{dashed:!0}),c.a.createElement(u.a,null,c.a.createElement(h.a,{title:"Histogram of Books by Published Year"},c.a.createElement(x,{data:i,xLabel:"Published Year",yLabel:"Number of Books"}))),c.a.createElement(g.a,{dashed:!0}),c.a.createElement(u.a,null,c.a.createElement(h.a,{title:"Histogram of Books by Average Rating"},c.a.createElement(x,{data:E,xLabel:"Average Rating",yLabel:"Number of Books"}))),c.a.createElement(g.a,{dashed:!0}),c.a.createElement(b.a,{content:c.a.createElement(v.a,{onChange:this.handleShelvesChange,options:n.map((function(e){return e.name})),defaultCheckedList:o,optionLabel:n.map((function(e){return"".concat(e.name," (").concat(e.bookCount,")")})),disable:n.map((function(e){return 0===e.bookCount})),className:"graphPopover"}),title:"Shelves (".concat(n.length,")"),trigger:"click",visible:t,onVisibleChange:this.handleShelvesSelectVisibleChange,placement:"bottomLeft"},c.a.createElement(k.a,{icon:"check-square",style:{position:"fixed",top:20,right:60}},"Select Shelves")))}}]),t}(s.Component);a.default=H}}]);
//# sourceMappingURL=13.6a495698.chunk.js.map