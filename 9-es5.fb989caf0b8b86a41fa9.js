!function(){function e(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&t(e,n)}function t(e,n){return(t=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,n)}function n(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}();return function(){var n,c=o(e);if(t){var i=o(this).constructor;n=Reflect.construct(c,arguments,i)}else n=c.apply(this,arguments);return r(this,n)}}function r(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function o(e){return(o=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function c(e){return function(e){if(Array.isArray(e))return i(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return i(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return i(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function b(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function u(e,t,n){return t&&a(e.prototype,t),n&&a(e,n),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"1YU7":function(t,r,o){"use strict";o.r(r),o.d(r,"UploadModule",function(){return A});var i=o("ofXK"),a=o("e/UQ"),s=o("Jdgd"),l=o("V5BG"),f=o("tyNb"),d=o("fXoL"),p=o("eaQS");function h(e,t){if(1&e){var n=d.Sb();d.Rb(0,"div",16),d.Bc(1," Documents uploaded successfully! Would you like to "),d.Rb(2,"a",17),d.Zb("click",function(){return d.tc(n),d.bc().success=!1}),d.Bc(3,"upload more documents?"),d.Qb(),d.Qb()}}function m(e,t){if(1&e){var n=d.Sb();d.Rb(0,"div"),d.Rb(1,"p"),d.Rb(2,"strong"),d.Bc(3,"Name"),d.Qb(),d.Rb(4,"sup",18),d.Bc(5,"*"),d.Qb(),d.Mb(6,"br"),d.Mb(7,"input",19),d.Qb(),d.Rb(8,"p"),d.Rb(9,"strong"),d.Bc(10,"Email Address"),d.Qb(),d.Rb(11,"sup",18),d.Bc(12,"*"),d.Qb(),d.Mb(13,"br"),d.Mb(14,"input",19),d.Qb(),d.Rb(15,"p"),d.Rb(16,"strong"),d.Bc(17,"Phone Number"),d.Qb(),d.Rb(18,"sup",18),d.Bc(19,"*"),d.Qb(),d.Mb(20,"br"),d.Mb(21,"input",19),d.Qb(),d.Rb(22,"p"),d.Rb(23,"strong"),d.Bc(24,"Your Message (optional)"),d.Qb(),d.Mb(25,"br"),d.Mb(26,"textarea",19),d.Qb(),d.Rb(27,"p"),d.Rb(28,"label"),d.Mb(29,"input",20),d.Bc(30," Notify me when John Doe receives my documents"),d.Qb(),d.Qb(),d.Rb(31,"h2"),d.Bc(32,"Upload Other Documents"),d.Qb(),d.Rb(33,"div",21),d.Rb(34,"div",22),d.Rb(35,"app-upload",23,24),d.Zb("filesAdded",function(){return d.tc(n),d.bc().hasFiles=!0}),d.Qb(),d.Qb(),d.Qb(),d.Rb(37,"div",25),d.Rb(38,"button",26),d.Zb("click",function(){return d.tc(n),d.bc().success=!0}),d.Mb(39,"i",27),d.Bc(40," Upload All"),d.Qb(),d.Qb(),d.Qb()}2&e&&(d.Ab(35),d.hc("canSelectBorrower",!1)("showSubmit",!1))}var v,y,R,Q,g,M=((v=function(){function e(){b(this,e),this.success=!1,this.text=[],this.resultsSrc=[{label:"W-2 forms",value:"W-2 forms"},{label:"Pay stubs",value:"Pay stubs"},{label:"Income tax returns",value:"Income tax returns"},{label:"Alimony or child support documents",value:"Alimony or child support documents"},{label:"Bank Statements",value:"Bank Statements"},{label:"Drivers License",value:"Drivers License"},{label:"Retirement and investment accounts",value:"Retirement and investment accounts"},{label:"Gift Letter",value:"Gift Letter"}],this.hasFiles=!1,this.addMoreFiles=!1,this.results=c(this.resultsSrc)}return u(e,[{key:"ngOnInit",value:function(){}},{key:"search",value:function(e){this.results=this.resultsSrc.filter(function(t){return t.label.toLowerCase().replace(/[^a-zA-Z ]/g,"").includes(e.query.toLowerCase().replace(/[^a-zA-Z ]/g,""))})}},{key:"filesAdded",value:function(e){this.files=e}},{key:"cancel",value:function(){this.files=null,this.hasFiles=!1,this.addMoreFiles=!1}},{key:"ngOnDestroy",value:function(){}}]),e}()).\u0275fac=function(e){return new(e||v)},v.\u0275cmp=d.Fb({type:v,selectors:[["app-upload-route"]],decls:67,vars:2,consts:[[1,"container"],[1,"row"],[1,"col","col-12","col-md-9","mb-3",2,"position","relative","z-index","5"],["class","alert alert-success",4,"ngIf"],[4,"ngIf"],[1,"col","col-12","col-md-3","mb-3"],[1,"d-flex","mb-2"],[1,"mr-2"],[1,"lo-mugshot",2,"background-image","url('https://i.ibb.co/qnBWTvD/john-doe.jpg')"],[1,"mb-0"],[1,"fas","fa-phone"],["href","tel:3128675309"],[1,"fas","fa-envelope"],["href","mailto:john.doe@example.com"],[1,"lo-mugshot",2,"background-image","url('https://i.ibb.co/sJZsPKG/jane-doe.jpg')"],[1,"lo-mugshot",2,"background-image","url('https://i.ibb.co/G001y5H/stacy-awesome.jpg"],[1,"alert","alert-success"],[3,"click"],[1,"required"],[1,"form-control"],["type","checkbox","checked",""],[1,"card","mb-3"],[1,"card-body"],[3,"canSelectBorrower","showSubmit","filesAdded"],["upload",""],[1,"text-right"],[1,"p-button",3,"click"],[1,"fas","fa-upload","mr-2"]],template:function(e,t){1&e&&(d.Rb(0,"div",0),d.Rb(1,"h1"),d.Bc(2,"Secure Upload Portal"),d.Qb(),d.Rb(3,"h2"),d.Bc(4,"Your Contact Information"),d.Qb(),d.Rb(5,"div",1),d.Rb(6,"div",2),d.zc(7,h,4,0,"div",3),d.zc(8,m,41,2,"div",4),d.Qb(),d.Rb(9,"div",5),d.Rb(10,"h2"),d.Bc(11,"Your Loan Team"),d.Qb(),d.Mb(12,"hr"),d.Rb(13,"div",6),d.Rb(14,"div",7),d.Mb(15,"div",8),d.Qb(),d.Rb(16,"div"),d.Rb(17,"h3",9),d.Rb(18,"strong"),d.Bc(19,"John Doe"),d.Qb(),d.Qb(),d.Bc(20," Loan Officer"),d.Mb(21,"br"),d.Qb(),d.Qb(),d.Rb(22,"div"),d.Mb(23,"i",10),d.Rb(24,"a",11),d.Bc(25," (555) 345-5309"),d.Qb(),d.Mb(26,"br"),d.Mb(27,"i",12),d.Rb(28,"a",13),d.Bc(29," john.joe@example.com"),d.Qb(),d.Qb(),d.Mb(30,"hr"),d.Rb(31,"div",6),d.Rb(32,"div",7),d.Mb(33,"div",14),d.Qb(),d.Rb(34,"div"),d.Rb(35,"h3",9),d.Rb(36,"strong"),d.Bc(37,"Stacey Smith"),d.Qb(),d.Qb(),d.Bc(38," Processor"),d.Mb(39,"br"),d.Qb(),d.Qb(),d.Rb(40,"div"),d.Mb(41,"i",10),d.Rb(42,"a",11),d.Bc(43," (555) 322-3244"),d.Qb(),d.Mb(44,"br"),d.Mb(45,"i",12),d.Rb(46,"a",13),d.Bc(47," stacey.smith@example.com"),d.Qb(),d.Qb(),d.Mb(48,"hr"),d.Rb(49,"div",6),d.Rb(50,"div",7),d.Mb(51,"div",15),d.Qb(),d.Rb(52,"div"),d.Rb(53,"h3",9),d.Rb(54,"strong"),d.Bc(55,"Jane Somebody"),d.Qb(),d.Qb(),d.Bc(56," Underwriter"),d.Mb(57,"br"),d.Qb(),d.Qb(),d.Rb(58,"div"),d.Mb(59,"i",10),d.Rb(60,"a",11),d.Bc(61," (555) 322-3244"),d.Qb(),d.Mb(62,"br"),d.Mb(63,"i",12),d.Rb(64,"a",13),d.Bc(65," jane.somebody@example.com"),d.Qb(),d.Qb(),d.Mb(66,"hr"),d.Qb(),d.Qb(),d.Qb()),2&e&&(d.Ab(7),d.hc("ngIf",t.success),d.Ab(1),d.hc("ngIf",!t.success))},directives:[i.o,p.a],styles:["table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{vertical-align:middle}sup.required[_ngcontent-%COMP%]{color:red}"],changeDetection:0}),v),B=f.i.forChild([{path:":type/:id",component:M,data:{title:"Upload Files"}},{path:"",component:M,data:{title:"Upload Files"}}]),w=o("mrSG"),k=o("4ZtF"),S=((g=function(){function e(t,n){b(this,e),this.store=t,this.query=n,this.someProp$=this.query.select(function(e){return e.someProp})}return u(e,[{key:"updateRouteUIState",value:function(e){this.store.update({someProp:e})}},{key:"reset",value:function(){this.store.reset()}}]),e}()).\u0275fac=function(e){return new(e||g)(d.Vb(j),d.Vb(O))},g.\u0275prov=d.Hb({token:g,factory:g.\u0275fac}),g),j=((Q=function(t){e(o,t);var r=n(o);function o(){return b(this,o),r.call(this,{someProp:null})}return o}(k.b)).\u0275fac=function(e){return new(e||Q)},Q.\u0275prov=d.Hb({token:Q,factory:Q.\u0275fac}),Q=Object(w.a)([Object(k.c)({name:"route-UIState",resettable:!0}),Object(w.b)("design:paramtypes",[])],Q)),O=((R=function(t){e(o,t);var r=n(o);function o(e){var t;return b(this,o),(t=r.call(this,e)).store=e,t}return o}(k.a)).\u0275fac=function(e){return new(e||R)(d.Vb(j))},R.\u0275prov=d.Hb({token:R,factory:R.\u0275fac}),R),A=((y=function e(){b(this,e)}).\u0275mod=d.Jb({type:y}),y.\u0275inj=d.Ib({factory:function(e){return new(e||y)},providers:[S,j,O],imports:[[i.c,a.a,B,s.a,l.b]]}),y)}}])}();