!function(){function e(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&t(e,n)}function t(e,n){return(t=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,n)}function n(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}();return function(){var n,c=o(e);if(t){var b=o(this).constructor;n=Reflect.construct(c,arguments,b)}else n=c.apply(this,arguments);return r(this,n)}}function r(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function o(e){return(o=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function c(e){return function(e){if(Array.isArray(e))return b(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return b(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return b(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function b(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function u(e,t,n){return t&&a(e.prototype,t),n&&a(e,n),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"1YU7":function(t,r,o){"use strict";o.r(r),o.d(r,"UploadModule",function(){return P});var b=o("ofXK"),a=o("e/UQ"),s=o("Jdgd"),l=o("V5BG"),f=o("tyNb"),p=o("fXoL"),d=o("eaQS");function m(e,t){if(1&e){var n=p.Sb();p.Rb(0,"div",16),p.Bc(1," Documents uploaded successfully! Would you like to "),p.Rb(2,"a",17),p.Zb("click",function(){return p.tc(n),p.bc().success=!1}),p.Bc(3,"upload more documents?"),p.Qb(),p.Qb()}}function h(e,t){if(1&e){var n=p.Sb();p.Rb(0,"div"),p.Rb(1,"p"),p.Rb(2,"strong"),p.Bc(3,"Name"),p.Qb(),p.Rb(4,"sup",18),p.Bc(5,"*"),p.Qb(),p.Mb(6,"br"),p.Mb(7,"input",19),p.Qb(),p.Rb(8,"p"),p.Rb(9,"strong"),p.Bc(10,"Email Address"),p.Qb(),p.Rb(11,"sup",18),p.Bc(12,"*"),p.Qb(),p.Mb(13,"br"),p.Mb(14,"input",19),p.Qb(),p.Rb(15,"p"),p.Rb(16,"strong"),p.Bc(17,"Phone Number"),p.Qb(),p.Rb(18,"sup",18),p.Bc(19,"*"),p.Qb(),p.Mb(20,"br"),p.Mb(21,"input",19),p.Qb(),p.Rb(22,"p"),p.Rb(23,"strong"),p.Bc(24,"Your Message (optional)"),p.Qb(),p.Mb(25,"br"),p.Mb(26,"textarea",19),p.Qb(),p.Rb(27,"p"),p.Rb(28,"label"),p.Mb(29,"input",20),p.Bc(30," Notify me when John Doe receives my documents"),p.Qb(),p.Qb(),p.Rb(31,"h2"),p.Bc(32,"Upload Other Documents"),p.Qb(),p.Rb(33,"div",21),p.Rb(34,"div",22),p.Mb(35,"app-upload"),p.Qb(),p.Qb(),p.Rb(36,"div",23),p.Rb(37,"button",24),p.Zb("click",function(){return p.tc(n),p.bc().success=!0}),p.Mb(38,"i",25),p.Bc(39," Upload"),p.Qb(),p.Qb(),p.Qb()}}var v,y,R,Q,g,M=((v=function(){function e(){i(this,e),this.success=!1,this.text=[],this.resultsSrc=[{label:"W-2 forms",value:"W-2 forms"},{label:"Pay stubs",value:"Pay stubs"},{label:"Income tax returns",value:"Income tax returns"},{label:"Alimony or child support documents",value:"Alimony or child support documents"},{label:"Bank Statements",value:"Bank Statements"},{label:"Drivers License",value:"Drivers License"},{label:"Retirement and investment accounts",value:"Retirement and investment accounts"},{label:"Gift Letter",value:"Gift Letter"}],this.results=c(this.resultsSrc)}return u(e,[{key:"ngOnInit",value:function(){}},{key:"search",value:function(e){this.results=this.resultsSrc.filter(function(t){return t.label.toLowerCase().replace(/[^a-zA-Z ]/g,"").includes(e.query.toLowerCase().replace(/[^a-zA-Z ]/g,""))})}},{key:"filesAdded",value:function(e){this.files=e}},{key:"ngOnDestroy",value:function(){}}]),e}()).\u0275fac=function(e){return new(e||v)},v.\u0275cmp=p.Fb({type:v,selectors:[["app-upload-route"]],decls:67,vars:2,consts:[[1,"container"],[1,"row"],[1,"col","col-12","col-md-9","mb-3",2,"position","relative","z-index","5"],["class","alert alert-success",4,"ngIf"],[4,"ngIf"],[1,"col","col-12","col-md-3","mb-3"],[1,"d-flex","mb-2"],[1,"mr-2"],[1,"lo-mugshot",2,"background-image","url('https://i.ibb.co/qnBWTvD/john-doe.jpg')"],[1,"mb-0"],[1,"fas","fa-phone"],["href","tel:3128675309"],[1,"fas","fa-envelope"],["href","mailto:john.doe@example.com"],[1,"lo-mugshot",2,"background-image","url('https://i.ibb.co/sJZsPKG/jane-doe.jpg')"],[1,"lo-mugshot",2,"background-image","url('https://i.ibb.co/G001y5H/stacy-awesome.jpg"],[1,"alert","alert-success"],[3,"click"],[1,"required"],[1,"form-control"],["type","checkbox","checked",""],[1,"card","mb-3"],[1,"card-body"],[1,"text-right"],[1,"p-button",3,"click"],[1,"fas","fa-upload","mr-2"]],template:function(e,t){1&e&&(p.Rb(0,"div",0),p.Rb(1,"h1"),p.Bc(2,"Secure Upload Portal"),p.Qb(),p.Rb(3,"h2"),p.Bc(4,"Your Contact Information"),p.Qb(),p.Rb(5,"div",1),p.Rb(6,"div",2),p.zc(7,m,4,0,"div",3),p.zc(8,h,40,0,"div",4),p.Qb(),p.Rb(9,"div",5),p.Rb(10,"h2"),p.Bc(11,"Your Loan Team"),p.Qb(),p.Mb(12,"hr"),p.Rb(13,"div",6),p.Rb(14,"div",7),p.Mb(15,"div",8),p.Qb(),p.Rb(16,"div"),p.Rb(17,"h3",9),p.Rb(18,"strong"),p.Bc(19,"John Doe"),p.Qb(),p.Qb(),p.Bc(20," Loan Officer"),p.Mb(21,"br"),p.Qb(),p.Qb(),p.Rb(22,"div"),p.Mb(23,"i",10),p.Rb(24,"a",11),p.Bc(25," (555) 345-5309"),p.Qb(),p.Mb(26,"br"),p.Mb(27,"i",12),p.Rb(28,"a",13),p.Bc(29," john.joe@example.com"),p.Qb(),p.Qb(),p.Mb(30,"hr"),p.Rb(31,"div",6),p.Rb(32,"div",7),p.Mb(33,"div",14),p.Qb(),p.Rb(34,"div"),p.Rb(35,"h3",9),p.Rb(36,"strong"),p.Bc(37,"Stacey Smith"),p.Qb(),p.Qb(),p.Bc(38," Processor"),p.Mb(39,"br"),p.Qb(),p.Qb(),p.Rb(40,"div"),p.Mb(41,"i",10),p.Rb(42,"a",11),p.Bc(43," (555) 322-3244"),p.Qb(),p.Mb(44,"br"),p.Mb(45,"i",12),p.Rb(46,"a",13),p.Bc(47," stacey.smith@example.com"),p.Qb(),p.Qb(),p.Mb(48,"hr"),p.Rb(49,"div",6),p.Rb(50,"div",7),p.Mb(51,"div",15),p.Qb(),p.Rb(52,"div"),p.Rb(53,"h3",9),p.Rb(54,"strong"),p.Bc(55,"Jane Somebody"),p.Qb(),p.Qb(),p.Bc(56," Underwriter"),p.Mb(57,"br"),p.Qb(),p.Qb(),p.Rb(58,"div"),p.Mb(59,"i",10),p.Rb(60,"a",11),p.Bc(61," (555) 322-3244"),p.Qb(),p.Mb(62,"br"),p.Mb(63,"i",12),p.Rb(64,"a",13),p.Bc(65," jane.somebody@example.com"),p.Qb(),p.Qb(),p.Mb(66,"hr"),p.Qb(),p.Qb(),p.Qb()),2&e&&(p.Ab(7),p.hc("ngIf",t.success),p.Ab(1),p.hc("ngIf",!t.success))},directives:[b.o,d.a],styles:["table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{vertical-align:middle}sup.required[_ngcontent-%COMP%]{color:red}"],changeDetection:0}),v),B=f.i.forChild([{path:":type/:id",component:M,data:{title:"Upload Files"}},{path:"",component:M,data:{title:"Upload Files"}}]),w=o("mrSG"),j=o("4ZtF"),k=((g=function(){function e(t,n){i(this,e),this.store=t,this.query=n,this.someProp$=this.query.select(function(e){return e.someProp})}return u(e,[{key:"updateRouteUIState",value:function(e){this.store.update({someProp:e})}},{key:"reset",value:function(){this.store.reset()}}]),e}()).\u0275fac=function(e){return new(e||g)(p.Vb(O),p.Vb(S))},g.\u0275prov=p.Hb({token:g,factory:g.\u0275fac}),g),O=((Q=function(t){e(o,t);var r=n(o);function o(){return i(this,o),r.call(this,{someProp:null})}return o}(j.b)).\u0275fac=function(e){return new(e||Q)},Q.\u0275prov=p.Hb({token:Q,factory:Q.\u0275fac}),Q=Object(w.a)([Object(j.c)({name:"route-UIState",resettable:!0}),Object(w.b)("design:paramtypes",[])],Q)),S=((R=function(t){e(o,t);var r=n(o);function o(e){var t;return i(this,o),(t=r.call(this,e)).store=e,t}return o}(j.a)).\u0275fac=function(e){return new(e||R)(p.Vb(O))},R.\u0275prov=p.Hb({token:R,factory:R.\u0275fac}),R),P=((y=function e(){i(this,e)}).\u0275mod=p.Jb({type:y}),y.\u0275inj=p.Ib({factory:function(e){return new(e||y)},providers:[k,O,S],imports:[[b.c,a.a,B,s.a,l.b]]}),y)}}])}();