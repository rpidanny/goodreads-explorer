(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{254:function(e,t,a){},280:function(e,t,a){},283:function(e,t,a){},305:function(e,t,a){"use strict";a.r(t);var n=a(48),i=a(49),s=a(17),r=a(50),o=a(18),l=a(27),c=a(1),u=a.n(c),h=a(301),d=a(21),p=a(11),f=a(307),g=a(40),b=a(303),m=(a(254),f.a.Group),v=["animation","cluster"],O=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(s.a)(this,Object(r.a)(t).call(this,e))).state=Object(p.a)({},e),a.defaultOptions=v.filter(function(e){return a.props.settings[e]}),a.updateState=a.updateState.bind(Object(l.a)(Object(l.a)(a))),a.updateFps=a.updateFps.bind(Object(l.a)(Object(l.a)(a))),a.updateCluster=a.updateCluster.bind(Object(l.a)(Object(l.a)(a))),a.updateAnimation=a.updateAnimation.bind(Object(l.a)(Object(l.a)(a))),a.updateAlphaStart=a.updateAlphaStart.bind(Object(l.a)(Object(l.a)(a))),a.updateVelocityDecay=a.updateVelocityDecay.bind(Object(l.a)(Object(l.a)(a))),a.updateChargeStrength=a.updateChargeStrength.bind(Object(l.a)(Object(l.a)(a))),a.updateCollisionStrength=a.updateCollisionStrength.bind(Object(l.a)(Object(l.a)(a))),a.updateClusterRadiusScale=a.updateClusterRadiusScale.bind(Object(l.a)(Object(l.a)(a))),a.updateCollisionRadiusOffset=a.updateCollisionRadiusOffset.bind(Object(l.a)(Object(l.a)(a))),a.updateClusterForceStrength=a.updateClusterForceStrength.bind(Object(l.a)(Object(l.a)(a))),a.updateAttracForceStrength=a.updateAttracForceStrength.bind(Object(l.a)(Object(l.a)(a))),a}return Object(o.a)(t,e),Object(i.a)(t,[{key:"updateState",value:function(e){var t=this;this.setState({settings:Object(p.a)({},this.state.settings,e)},function(){return t.props.onChange(t.state.settings)})}},{key:"updateFps",value:function(e){this.updateState({fps:e})}},{key:"updateCluster",value:function(e){this.updateState({cluster:e})}},{key:"updateAnimation",value:function(e){this.updateState({animation:e})}},{key:"updateAlphaStart",value:function(e){this.updateState({alphaStart:e})}},{key:"updateVelocityDecay",value:function(e){this.updateState({velocityDecay:e})}},{key:"updateChargeStrength",value:function(e){this.updateState({chargeStrength:e})}},{key:"updateCollisionStrength",value:function(e){this.updateState({collisionStrength:e})}},{key:"updateClusterRadiusScale",value:function(e){this.updateState({clusterRadiusScale:e})}},{key:"updateCollisionRadiusOffset",value:function(e){this.updateState({collisionRadiusOffset:e})}},{key:"updateAttracForceStrength",value:function(e){this.updateState({attraceForceStrength:e})}},{key:"updateClusterForceStrength",value:function(e){this.updateState({clusterForceStrength:e})}},{key:"render",value:function(){var e=this,t=this.state.settings,a=t.fps,n=t.alphaStart,i=t.velocityDecay,s=t.attraceForceStrength,r=t.collisionStrength,o=t.collisionRadiusOffset,l=t.clusterRadiusScale,c=t.chargeStrength,h=t.clusterForceStrength;return u.a.createElement("div",{className:"settings"},u.a.createElement("ul",null,u.a.createElement("li",null,u.a.createElement("div",{style:{borderBottom:"1px solid #E9E9E9",padding:5}},u.a.createElement(m,{options:v,value:this.defaultOptions,onChange:function(t){e.defaultOptions=t,e.updateState({animation:t.indexOf("animation")>-1,cluster:t.indexOf("cluster")>-1})},className:"settingsCheckbox"}))),u.a.createElement("li",null,u.a.createElement(g.a,{title:"How many times per second to render the graph.",placement:"rightTop"},"FPS (",a,")"),u.a.createElement(b.a,{defaultValue:a,max:120,min:1,step:1,onAfterChange:this.updateFps})),u.a.createElement("li",null,u.a.createElement(g.a,{title:"Initial Alpha of simulation.",placement:"rightTop"},"Alpha Start (",n,")"),u.a.createElement(b.a,{defaultValue:n,max:1,min:0,step:.01,onAfterChange:this.updateAlphaStart})),u.a.createElement("li",null,u.a.createElement(g.a,{title:"The decay factor is akin to atmospheric friction; after the application of any forces during a tick, each node\u2019s velocity is multiplied by 1 - decay. As with lowering the alpha decay rate, less velocity decay may converge on a better solution, but risks numerical instabilities and oscillation.",placement:"rightTop"},"velocity Decay (",i,")"),u.a.createElement(b.a,{defaultValue:i,max:1,min:0,step:.01,onAfterChange:this.updateVelocityDecay})),u.a.createElement("li",null,u.a.createElement(g.a,{title:"It can be used to simulate gravity (attraction) if the strength is positive, or electrostatic charge (repulsion) if the strength is negative.",placement:"rightTop"},"Charge Strength (",c,")"),u.a.createElement(b.a,{defaultValue:c,max:500,min:-500,step:1,onAfterChange:this.updateChargeStrength})),u.a.createElement("li",null,u.a.createElement(g.a,{title:"Sets the collision force strength to the specified number.",placement:"rightTop"},"Collision Strength (",r,")"),u.a.createElement(b.a,{defaultValue:r,max:1,min:0,step:.01,onAfterChange:this.updateCollisionStrength})),u.a.createElement("li",null,u.a.createElement(g.a,{title:"The collision force treats nodes as circles with a given radius, rather than points, and prevents nodes from overlapping.",placement:"rightTop"},"Collision Radius Offset (",o,")"),u.a.createElement(b.a,{defaultValue:o,max:50,min:0,step:1,onAfterChange:this.updateCollisionRadiusOffset})),u.a.createElement("li",null,u.a.createElement(g.a,{title:"Sets attractive force strength between nodes",placement:"rightTop"},"Attractive Force Strength (",s,")"),u.a.createElement(b.a,{defaultValue:s,max:500,min:-500,step:1,onAfterChange:this.updateAttracForceStrength})),u.a.createElement("li",null,u.a.createElement(g.a,{title:"Radius of the circle around which to cluster the nodes.",placement:"rightTop"},"Cluster Radius Scale (",l,")"),u.a.createElement(b.a,{defaultValue:l,max:10,min:.5,step:.5,onAfterChange:this.updateClusterRadiusScale})),u.a.createElement("li",null,u.a.createElement(g.a,{title:"Strength of clustering of nodes.",placement:"rightTop"},"Cluster Force Strength (",h,")"),u.a.createElement(b.a,{defaultValue:h,max:1,min:0,step:.01,onAfterChange:this.updateClusterForceStrength})),u.a.createElement("div",{style:{padding:10}},u.a.createElement(d.a,{type:"danger",onClick:function(){return e.props.onReset()},block:!0},"Reset"))))}}]),t}(c.Component);O.defaultProps={settings:{fps:60,cluster:!0,alphaStart:1,animation:!0,velocityDecay:.1,chargeStrength:-100,clusterRadiusScale:2,collisionStrength:.5,collisionRadiusOffset:15,attraceForceStrength:-100}};var y=O,k=a(282),S=a(127),j=a(291),C=a(290),E=a(278),x=a.n(E),A=a(289),H=function(e){function t(){var e;return Object(n.a)(this,t),(e=Object(s.a)(this,Object(r.a)(t).call(this))).clickHandler=e.clickHandler.bind(Object(l.a)(Object(l.a)(e))),e.doubleClickHandler=e.doubleClickHandler.bind(Object(l.a)(Object(l.a)(e))),e.mouseOverHandler=e.mouseOverHandler.bind(Object(l.a)(Object(l.a)(e))),e.mouseOutHandler=e.mouseOutHandler.bind(Object(l.a)(Object(l.a)(e))),e.clickTimeout=null,e}return Object(o.a)(t,e),Object(i.a)(t,[{key:"clickHandler",value:function(){this.props.onClick({type:"NODE",data:this.props.id})}},{key:"doubleClickHandler",value:function(){this.props.onDoubleClick&&this.props.onDoubleClick({type:"NODE",data:this.props.id})}},{key:"mouseOverHandler",value:function(e,t){this.props.onMouseOver&&this.props.onMouseOver({type:"NODE",data:{id:this.props.id,text:this.props.text,type:this.props.type},event:e})}},{key:"mouseOutHandler",value:function(e){this.props.onMouseOut&&this.props.onMouseOut({type:"NODE",data:{id:this.props.id,text:this.props.text,type:this.props.type},event:e})}},{key:"render",value:function(){var e=this.props,t=e.className,a=e.radius,n=e.color,i=e.x,s=e.y,r=e.style,o=e.active;return u.a.createElement("g",{className:t,transform:"translate(".concat(i,",").concat(s,")"),onClick:this.clickHandler,style:{cursor:"pointer",opacity:o?1:.1},onMouseOver:this.mouseOverHandler,onMouseOut:this.mouseOutHandler},u.a.createElement("circle",{r:a,fill:n,style:r}),D(this.props))}}]),t}(c.Component),D=function(e){var t=e.id,a=e.img,n=e.radius,i=e.shortText,s=e.textStyle;return a?u.a.createElement("g",null,u.a.createElement("defs",null,u.a.createElement("clipPath",{id:"clip_".concat(t)},u.a.createElement("circle",{r:n-1}))),u.a.createElement("image",{xlinkHref:a,clipPath:"url(#clip_".concat(t,")"),x:-n,y:-n,width:2*n})):u.a.createElement("text",{dx:-n/2,dy:s.fontSize/2,style:s},i)};H.defaultProps={className:"node",radius:35,color:"#FFFFFF",style:{r:35,stroke:"#375E97",strokeWidth:"3px"},textStyle:{fontSize:15,fill:"#fff",strokeWidth:"3px",fontWeight:"normal"},x:0,y:0,active:!0};var N=H,R=function(e){function t(){return Object(n.a)(this,t),Object(s.a)(this,Object(r.a)(t).apply(this,arguments))}return Object(o.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props,t=e.d,a=e.pointer,n=e.style,i=e.id,s=e.active;return u.a.createElement("g",{style:{opacity:s?1:.1}},F(this.props),u.a.createElement("path",{id:i,style:n,d:t,markerEnd:a?"url(#".concat(i,"_pointer)"):a}),w(this.props))}}]),t}(c.Component),F=function(e){if(e.pointer)return u.a.createElement("defs",null,u.a.createElement("marker",{id:"".concat(e.id,"_pointer"),viewBox:"0 -5 10 10",refX:e.arrowOffset,refY:"-2",markerWidth:"6",markerHeight:"6",orient:"auto"},u.a.createElement("path",{d:"M0,-5L10,0L0,5",fill:"#666",style:{opacity:1}})))},w=function(e){if(e.type)return u.a.createElement("text",null,u.a.createElement("textPath",{dx:0,dy:5,href:"#".concat(e.id),startOffset:"50%",style:e.textStyle},e.type))};R.defaultProps={style:{strokeWidth:1.5,fill:"none",stroke:"gba(50, 50, 50, 0.2)"},textStyle:{pointerEvents:"none",textAnchor:"middle",fill:"#333"},pointer:!0,active:!0};var P=R,T=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(s.a)(this,Object(r.a)(t).call(this,e))).state=Object(p.a)({},a.props),a.getArcPath=a.getArcPath.bind(Object(l.a)(Object(l.a)(a))),a.getLinks=a.getLinks.bind(Object(l.a)(Object(l.a)(a))),a}return Object(o.a)(t,e),Object(i.a)(t,[{key:"componentWillReceiveProps",value:function(e){this.setState(Object(p.a)({},e))}},{key:"getLinks",value:function(e,t){return this.state.links.filter(function(a){return a.source.id===e.id&&a.target.id===t.id}).map(function(e){return e.type})}},{key:"getArcPath",value:function(e){var t,a,n=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],i=n?e.source.x:e.target.x,s=n?e.source.y:e.target.y,r=n?e.target.x:e.source.x,o=n?e.target.y:e.source.y,l=r-i,c=o-s,u=this.getLinks(e.source,e.target),h=Object(A.a)().domain(u).range([1,2])(e.type);1===h?(a=1,t=1):h%2===0?(a=0,t=h/2):h%3===0&&(a=1,t=h/3+1);var d=Math.sqrt(l*l+c*c)/(1+.5*(t-1));return"M".concat(i,",").concat(s,"A").concat(1.7*d,",").concat(1.7*d," ").concat(0,", ").concat(0,", ").concat(a," ").concat(r,",").concat(o)}},{key:"render",value:function(){var e=this,t=this.state,a=t.nodes,n=t.links;return u.a.createElement("g",{className:this.props.className,transform:this.props.transform},u.a.createElement("g",{className:"links"},n.reduce(function(t,a,n){return"object"===typeof a.source&&"object"===typeof a.target?(t.push(u.a.createElement(P,{key:n,d:e.getArcPath(a),style:a.style,id:a.id,type:a.type,arrowOffset:1.45*a.target.radius,active:a.active})),t):t},[])),u.a.createElement("g",{className:"nodes"},a.map(function(t,a){return u.a.createElement(N,Object.assign({key:a,onClick:e.props.onClick,onDoubleClick:e.props.onDoubleClick,onMouseOver:e.props.onMouseOver,onMouseOut:e.props.onMouseOut},t))})))}}]),t}(c.Component);T.defaultProps={className:"universe",nodes:[],links:[]};var L=T,M=(a(280),function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(s.a)(this,Object(r.a)(t).call(this,e))).state={nodes:[],links:[],selectedNode:null,activeNodes:[],simulation:a.initSimulation(),width:100,height:100,transform:{x:0,y:0,k:1},tooltip:{text:"",style:{opacity:0,top:0,left:0}}},a.initSimulation=a.initSimulation.bind(Object(l.a)(Object(l.a)(a))),a.initZoomHandler=a.initZoomHandler.bind(Object(l.a)(Object(l.a)(a))),a.updateData=a.updateData.bind(Object(l.a)(Object(l.a)(a))),a.updateSimulation=a.updateSimulation.bind(Object(l.a)(Object(l.a)(a))),a.onTick=a.onTick.bind(Object(l.a)(Object(l.a)(a))),a.svg=u.a.createRef(),a.nodes=[],a.links=[],a.interval=1e3/a.props.fps,a.millis=Date.now(),a.mouseOverHandler=a.mouseOverHandler.bind(Object(l.a)(Object(l.a)(a))),a.mouseOutHandler=a.mouseOutHandler.bind(Object(l.a)(Object(l.a)(a))),a.clickHandler=a.clickHandler.bind(Object(l.a)(Object(l.a)(a))),a.getNeighborNodes=a.getNeighborNodes.bind(Object(l.a)(Object(l.a)(a))),a}return Object(o.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.initZoomHandler(),this.setState({width:this.svg.current.clientWidth,height:this.svg.current.clientHeight},function(){var t=W(e.nodes,e.props.nodes);e.updateData(t),e.updateSimulation()})}},{key:"componentDidUpdate",value:function(e){this.interval=1e3/this.props.fps;var t=W(e.nodes,this.props.nodes);(t.added.length>0||t.removed.length>0)&&(this.updateData(t),this.updateSimulation()),JSON.stringify(Object(p.a)({},e,{nodes:null,links:null,children:null}))!==JSON.stringify(Object(p.a)({},this.props,{nodes:null,links:null,children:null}))&&this.updateSimulation()}},{key:"initSimulation",value:function(){var e=Object(j.c)().id(function(e){return e.id}).strength(function(e){return e.strength}).distance(function(e){return e.distance});return Object(j.e)().force("link",e)}},{key:"initZoomHandler",value:function(){var e=this,t=Object(S.f)(".svgGraph"),a=Object(C.a)().on("zoom",function(){e.setState({transform:S.b.transform})});t.call(a).on("dblclick.zoom",null)}},{key:"updateData",value:function(e){var t=this,a=this.props.links;this.links=[],e.removed.forEach(function(e){t.nodes=t.nodes.filter(function(t){return!(t.id===e.id&&t.type===e.type)})}),e.added.forEach(function(e){return t.nodes.push(e)}),a.forEach(function(e){var a=t.nodes.filter(function(t){return t.id===e.source})[0],n=t.nodes.filter(function(t){return t.id===e.target})[0];a&&n&&t.links.push(Object(p.a)({},e,{source:a,target:n}))})}},{key:"updateSimulation",value:function(){var e=this,t=this.props,a=t.attraceForceStrength,n=t.chargeStrength,i=t.collisionRadiusOffset,s=t.collisionStrength,r=t.animation,o=t.velocityDecay,l=t.alphaStart,c=t.cluster,u=t.clusterRadiusScale,h=t.clusterForceStrength,d=this.state,p=d.simulation,f=d.height,g=d.width;if(p.nodes(this.nodes).on("tick",this.onTick),p.force("link").links(this.links),p.force("center",Object(j.a)(g/2,f/2)).force("attraceForce",Object(j.d)().strength(a)).force("charge",Object(j.d)().strength(n)).force("collision",Object(j.b)().radius(function(e){return e.radius+i}).strength(s)),c){var b={};x()(this.nodes,"type").map(function(e){return e.type}).forEach(function(e,t,a){if(!b[e]){var n=g>f?f*u:g*u;b[e]={x:Math.cos((t+1)/a.length*2*Math.PI)*n+g/2+Math.random(),y:Math.sin((t+1)/a.length*2*Math.PI)*n+f/2+Math.random(),radius:n}}}),p.force("cluster",function(t){return V(t,e.nodes,b,h)})}else p.force("cluster",null);if(p.alpha(l).alphaTarget(0).velocityDecay(o).restart(),!r)for(;p.alpha()>=.02;)p.tick()}},{key:"onTick",value:function(e){var t=Date.now();t-this.millis>this.interval&&(this.millis=t,this.setState({nodes:this.nodes,links:this.links}))}},{key:"mouseOutHandler",value:function(){this.setState({tooltip:{style:{opacity:0}}})}},{key:"mouseOverHandler",value:function(e){var t=e.event,a=e.type,n=e.data,i="";"NODE"===a?i="[".concat(n.type,"] ").concat(n.text):"LINK"===a&&(i="".concat(n.type)),this.setState({tooltip:{text:i,style:{opacity:1,top:t.clientY+15,left:t.clientX+15}}})}},{key:"clickHandler",value:function(e){this.state.selectedNode===e.data?this.setState({selectedNode:null,activeNodes:[]}):this.setState({selectedNode:e.data,activeNodes:this.getNeighborNodes(e.data)})}},{key:"getNeighborNodes",value:function(e){return this.links.reduce(function(t,a){return a.target.id===e?t.push(a.source.id):a.source.id===e&&t.push(a.target.id),t},[])}},{key:"render",value:function(){var e=this.state,t=e.transform,a=e.tooltip,n=e.selectedNode,i=e.activeNodes,s=this.state.nodes.map(function(e){return Object(p.a)({},e,{active:null===n||e.id===n||i.indexOf(e.id)>-1})}),r=this.state.links.map(function(e){return Object(p.a)({},e,{active:null===n||e.source.id===n||e.target.id===n})});return u.a.createElement("div",{className:"networkGraph",style:{width:"100%",height:"100%"}},this.props.children,u.a.createElement("svg",{className:"svgGraph",width:"100%",height:"100%",ref:this.svg},u.a.createElement(L,{nodes:s,links:r,transform:"translate(".concat(t.x,",").concat(t.y,") scale(").concat(t.k,")"),onClick:this.clickHandler,onDoubleClick:this.props.onDoubleClick,onMouseOver:this.mouseOverHandler,onMouseOut:this.mouseOutHandler})),u.a.createElement("span",{className:"networkGrapTooltip",style:a.style},a.text))}}]),t}(c.Component)),V=function(e,t,a,n){t.forEach(function(t){var i=a[t.type];if(i.x!==t.x&&i.y!==t.y){var s=e*n;t.vx-=(t.x-i.x)*s,t.vy-=(t.y-i.y)*s}})},_=Object(k.a)(function(e,t){return t.reduce(function(t,a){return a.id===e.id&&t.push(a),t},[]).length>0?1:0}),W=Object(k.a)(function(e,t){return{removed:e.filter(function(e){return 0===_(e,t)}),added:t.filter(function(t){return 0===_(t,e)})}});M.defaultProps={nodes:[],links:[],attraceForceStrength:10,chargeStrength:-10,collisionRadiusOffset:15,collisionStrength:.5,animation:!0,cluster:!1,fps:60,alphaStart:1,velocityDecay:.4,clusterRadiusScale:2,clusterForceStrength:.3};var B=M,I=a(2),U=a.n(I),G=(a(283),function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(s.a)(this,Object(r.a)(t).call(this,e))).state={checkedList:e.defaultCheckedList,indeterminate:!0,checkAll:!1},a.onChange=a.onChange.bind(Object(l.a)(Object(l.a)(a))),a.onCheckAllChange=a.onCheckAllChange.bind(Object(l.a)(Object(l.a)(a))),a}return Object(o.a)(t,e),Object(i.a)(t,[{key:"onChange",value:function(e,t){var a=this,n=this.state.checkedList;t?n.push(e):n=n.filter(function(t){return t!==e}),this.setState({checkedList:n,indeterminate:!!n.length&&n.length<this.props.options.length,checkAll:n.length===this.props.options.length},function(){return a.props.onChange(a.state.checkedList)})}},{key:"onCheckAllChange",value:function(e){var t=this;this.setState({checkedList:e.target.checked?this.props.options:[],indeterminate:!1,checkAll:e.target.checked},function(){return t.props.onChange(t.state.checkedList)})}},{key:"render",value:function(){var e=this;return u.a.createElement("div",null,u.a.createElement("div",{style:{borderBottom:"1px solid #E9E9E9"}},u.a.createElement(f.a,{indeterminate:this.state.indeterminate,onChange:this.onCheckAllChange,checked:this.state.checkAll},"Check all")),u.a.createElement("ul",{className:"shelvesCheckboxGroup"},this.props.options.map(function(t,a){return u.a.createElement("li",{key:a},u.a.createElement(f.a,{onChange:function(a){return e.onChange(t,a.target.checked)},key:t,checked:e.props.defaultCheckedList.indexOf(t)>-1,disabled:e.props.disable[a]},e.props.optionLabel[a]?e.props.optionLabel[a]:t))})))}}]),t}(c.Component));G.defaultProps={disable:[],optionLabel:[]},G.propTpes={options:U.a.array.isRequired,onChange:U.a.func,optionLabel:U.a.array,defaultCheckedList:U.a.array,disable:U.a.array};var J=G,Y=function(e){return e.split(" ").slice(0,3).map(function(e){return e.charAt(0).toUpperCase()}).join("")};function $(e,t){var a=[],n={},i={},s={},r=[];return e.user_shelves.forEach(function(e){t.indexOf(e.name)>-1&&(e.books.book&&(e.books.book.length?e.books.book:[e.books.book]).forEach(function(t){a.push(Object(p.a)({},t,{property:{shelf:e.name}}))}))}),a.forEach(function(e){var t=e.authors.author;n[e.id.$t]||(n[e.id.$t]={id:e.id.$t,text:e.title,type:"BOOK",img:e.image_url,color:"#336B87",radius:35,style:{r:35,stroke:"#375E97",strokeWidth:"3px"}},i[t.id]||(i[t.id]={id:t.id,text:t.name,type:"AUTHOR",img:t.image_url.$t,color:"#FB6542",radius:35,style:{r:35,stroke:"#FB6542",strokeWidth:"3px"}}),s[e.publisher]||(s[e.publisher]={id:"string"===typeof e.publisher?e.publisher:"Self Published",text:"string"===typeof e.publisher?e.publisher:"Self Published",type:"PUBLISHER",color:"#DDA487",radius:35,style:{r:35,stroke:"#7D4427",strokeWidth:"3px"}}),r.push({source:t.id,sourceType:"AUTHOR",target:e.id.$t,targetType:"BOOK",type:"AUTHOR_OF",property:{publicationYear:e.publication_year,publicationMonth:e.publication_month,publicationDay:e.publication_day}}),r.push({source:e.id.$t,sourceType:"BOOK",target:"string"===typeof e.publisher?e.publisher:"Self Published",targetType:"PUBLISHER",type:"PUBLISHED_BY",property:{publicationYear:e.publication_year,publicationMonth:e.publication_month,publicationDay:e.publication_day}}),r.push({source:t.id,sourceType:"AUTHOR",target:e.publisher,targetType:"PUBLISHER",type:"WORKS_WITH",property:{publicationYear:e.publication_year,publicationMonth:e.publication_month,publicationDay:e.publication_day}}))}),{nodes:Object.values(n).concat(Object.values(i)).concat(Object.values(s)).map(function(e,t){return Object(p.a)({},e,{shortText:Y(e.text),textStyle:{fontSize:15,fill:"#fff",strokeWidth:"2px",fontWeight:"normal"}})}),links:r.map(function(e){return Object(p.a)({},e,{strength:.5,distance:350,id:"".concat(e.source,"-").concat(e.type,"-").concat(e.target),style:{strokeWidth:1.5,fill:"none",stroke:"rgba(50, 50, 50, 0.2)"}})})}}var z={fps:60,cluster:!0,alphaStart:1,animation:!0,velocityDecay:.1,chargeStrength:-100,collisionStrength:.5,collisionRadiusOffset:15,attraceForceStrength:-100,clusterRadiusScale:2,clusterForceStrength:.3},K=function(e){function t(e){var a;Object(n.a)(this,t),a=Object(s.a)(this,Object(r.a)(t).call(this,e));var i=window.localStorage.getItem("graphSettings");return a.state={graphSettings:i?JSON.parse(i):z,settingsPopover:!1,shelvesSelectPopover:!1,nodes:[],links:[],shelves:[],selectedShelves:[]},a.hideSettings=a.hideSettings.bind(Object(l.a)(Object(l.a)(a))),a.handleSettingsChange=a.handleSettingsChange.bind(Object(l.a)(Object(l.a)(a))),a.handleSettingsReset=a.handleSettingsReset.bind(Object(l.a)(Object(l.a)(a))),a.handleSettingsVisibleChange=a.handleSettingsVisibleChange.bind(Object(l.a)(Object(l.a)(a))),a.hideShelvesSelect=a.hideShelvesSelect.bind(Object(l.a)(Object(l.a)(a))),a.handleShelvesChange=a.handleShelvesChange.bind(Object(l.a)(Object(l.a)(a))),a.handleShelvesSelectVisibleChange=a.handleShelvesSelectVisibleChange.bind(Object(l.a)(Object(l.a)(a))),a}return Object(o.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this.props.userData.user_shelves.map(function(e){return e.books.book?{name:e.name,bookCount:e.books.book.length?e.books.book.length:1}:{name:e.name,bookCount:0}}),t=e.length>0?[e[0].name]:[],a=$(this.props.userData,t),n=a.nodes,i=a.links;this.setState({nodes:n,links:i,shelves:e,selectedShelves:t})}},{key:"handleSettingsVisibleChange",value:function(e){this.setState({settingsPopover:e})}},{key:"hideSettings",value:function(){this.setState({settingsPopover:!1})}},{key:"handleSettingsChange",value:function(e){this.setState({graphSettings:e}),window.localStorage.setItem("graphSettings",JSON.stringify(e))}},{key:"handleSettingsReset",value:function(){this.setState({graphSettings:z}),window.localStorage.removeItem("graphSettings"),window.location.reload()}},{key:"hideShelvesSelect",value:function(){this.setState({shelvesSelectPopover:!1})}},{key:"handleShelvesSelectVisibleChange",value:function(e){this.setState({shelvesSelectPopover:e})}},{key:"handleShelvesChange",value:function(e){var t=$(this.props.userData,e),a=t.nodes,n=t.links;this.setState({nodes:a,links:n,selectedShelves:e})}},{key:"render",value:function(){var e=this.state,t=e.nodes,a=e.links,n=e.graphSettings,i=e.settingsPopover,s=e.shelvesSelectPopover,r=e.shelves,o=e.selectedShelves;return u.a.createElement(B,Object.assign({nodes:t,links:a},n),u.a.createElement(h.a,{content:u.a.createElement(y,{onChange:this.handleSettingsChange,onReset:this.handleSettingsReset,settings:n}),title:"Settings",trigger:"click",visible:i,onVisibleChange:this.handleSettingsVisibleChange,placement:"bottomLeft"},u.a.createElement(d.a,{icon:"setting",style:{position:"fixed",top:40,right:40}})),u.a.createElement(h.a,{content:u.a.createElement(J,{onChange:this.handleShelvesChange,options:r.map(function(e){return e.name}),defaultCheckedList:o,optionLabel:r.map(function(e){return"".concat(e.name," (").concat(e.bookCount,")")}),disable:r.map(function(e){return 0===e.bookCount})}),title:"Shelves (".concat(r.length,")"),trigger:"click",visible:s,onVisibleChange:this.handleShelvesSelectVisibleChange,placement:"bottomLeft"},u.a.createElement(d.a,{icon:"book",style:{position:"fixed",top:40,right:80}},"Shelves")))}}]),t}(c.Component);t.default=K}}]);
//# sourceMappingURL=8.52369d26.chunk.js.map