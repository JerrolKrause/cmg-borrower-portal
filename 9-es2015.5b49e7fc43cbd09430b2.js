(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"1YU7":function(e,t,b){"use strict";b.r(t),b.d(t,"UploadModule",function(){return v});var o=b("ofXK"),s=b("e/UQ"),c=b("Jdgd"),r=b("V5BG"),n=b("tyNb"),a=b("fXoL"),i=b("eaQS");function l(e,t){if(1&e){const e=a.Sb();a.Rb(0,"div",16),a.Bc(1," Documents uploaded successfully! Would you like to "),a.Rb(2,"a",17),a.Zb("click",function(){return a.tc(e),a.bc().success=!1}),a.Bc(3,"upload more documents?"),a.Qb(),a.Qb()}}function u(e,t){if(1&e){const e=a.Sb();a.Rb(0,"div"),a.Rb(1,"p"),a.Rb(2,"strong"),a.Bc(3,"Name"),a.Qb(),a.Rb(4,"sup",18),a.Bc(5,"*"),a.Qb(),a.Mb(6,"br"),a.Mb(7,"input",19),a.Qb(),a.Rb(8,"p"),a.Rb(9,"strong"),a.Bc(10,"Email Address"),a.Qb(),a.Rb(11,"sup",18),a.Bc(12,"*"),a.Qb(),a.Mb(13,"br"),a.Mb(14,"input",19),a.Qb(),a.Rb(15,"p"),a.Rb(16,"strong"),a.Bc(17,"Phone Number"),a.Qb(),a.Rb(18,"sup",18),a.Bc(19,"*"),a.Qb(),a.Mb(20,"br"),a.Mb(21,"input",19),a.Qb(),a.Rb(22,"p"),a.Rb(23,"strong"),a.Bc(24,"Your Message (optional)"),a.Qb(),a.Mb(25,"br"),a.Mb(26,"textarea",19),a.Qb(),a.Rb(27,"p"),a.Rb(28,"label"),a.Mb(29,"input",20),a.Bc(30," Notify me when John Doe receives my documents"),a.Qb(),a.Qb(),a.Rb(31,"h2"),a.Bc(32,"Upload Other Documents"),a.Qb(),a.Rb(33,"div",21),a.Rb(34,"div",22),a.Rb(35,"app-upload",23,24),a.Zb("filesAdded",function(){return a.tc(e),a.bc().hasFiles=!0}),a.Qb(),a.Qb(),a.Qb(),a.Rb(37,"div",25),a.Rb(38,"button",26),a.Zb("click",function(){return a.tc(e),a.bc().success=!0}),a.Mb(39,"i",27),a.Bc(40," Upload All"),a.Qb(),a.Qb(),a.Qb()}2&e&&(a.Ab(35),a.hc("showSubmit",!1))}let d=(()=>{class e{constructor(){this.success=!1,this.text=[],this.resultsSrc=[{label:"W-2 forms",value:"W-2 forms"},{label:"Pay stubs",value:"Pay stubs"},{label:"Income tax returns",value:"Income tax returns"},{label:"Alimony or child support documents",value:"Alimony or child support documents"},{label:"Bank Statements",value:"Bank Statements"},{label:"Drivers License",value:"Drivers License"},{label:"Retirement and investment accounts",value:"Retirement and investment accounts"},{label:"Gift Letter",value:"Gift Letter"}],this.hasFiles=!1,this.addMoreFiles=!1,this.results=[...this.resultsSrc]}ngOnInit(){}search(e){this.results=this.resultsSrc.filter(t=>t.label.toLowerCase().replace(/[^a-zA-Z ]/g,"").includes(e.query.toLowerCase().replace(/[^a-zA-Z ]/g,"")))}filesAdded(e){this.files=e}cancel(){this.files=null,this.hasFiles=!1,this.addMoreFiles=!1}ngOnDestroy(){}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=a.Fb({type:e,selectors:[["app-upload-route"]],decls:67,vars:2,consts:[[1,"container"],[1,"row"],[1,"col","col-12","col-md-9","mb-3",2,"position","relative","z-index","5"],["class","alert alert-success",4,"ngIf"],[4,"ngIf"],[1,"col","col-12","col-md-3","mb-3"],[1,"d-flex","mb-2"],[1,"mr-2"],[1,"lo-mugshot",2,"background-image","url('https://i.ibb.co/qnBWTvD/john-doe.jpg')"],[1,"mb-0"],[1,"fas","fa-phone"],["href","tel:3128675309"],[1,"fas","fa-envelope"],["href","mailto:john.doe@example.com"],[1,"lo-mugshot",2,"background-image","url('https://i.ibb.co/sJZsPKG/jane-doe.jpg')"],[1,"lo-mugshot",2,"background-image","url('https://i.ibb.co/G001y5H/stacy-awesome.jpg"],[1,"alert","alert-success"],[3,"click"],[1,"required"],[1,"form-control"],["type","checkbox","checked",""],[1,"card","mb-3"],[1,"card-body"],[3,"showSubmit","filesAdded"],["upload",""],[1,"text-right"],[1,"p-button",3,"click"],[1,"fas","fa-upload","mr-2"]],template:function(e,t){1&e&&(a.Rb(0,"div",0),a.Rb(1,"h1"),a.Bc(2,"Secure Upload Portal"),a.Qb(),a.Rb(3,"h2"),a.Bc(4,"Your Contact Information"),a.Qb(),a.Rb(5,"div",1),a.Rb(6,"div",2),a.zc(7,l,4,0,"div",3),a.zc(8,u,41,1,"div",4),a.Qb(),a.Rb(9,"div",5),a.Rb(10,"h2"),a.Bc(11,"Your Loan Team"),a.Qb(),a.Mb(12,"hr"),a.Rb(13,"div",6),a.Rb(14,"div",7),a.Mb(15,"div",8),a.Qb(),a.Rb(16,"div"),a.Rb(17,"h3",9),a.Rb(18,"strong"),a.Bc(19,"John Doe"),a.Qb(),a.Qb(),a.Bc(20," Loan Officer"),a.Mb(21,"br"),a.Qb(),a.Qb(),a.Rb(22,"div"),a.Mb(23,"i",10),a.Rb(24,"a",11),a.Bc(25," (555) 345-5309"),a.Qb(),a.Mb(26,"br"),a.Mb(27,"i",12),a.Rb(28,"a",13),a.Bc(29," john.joe@example.com"),a.Qb(),a.Qb(),a.Mb(30,"hr"),a.Rb(31,"div",6),a.Rb(32,"div",7),a.Mb(33,"div",14),a.Qb(),a.Rb(34,"div"),a.Rb(35,"h3",9),a.Rb(36,"strong"),a.Bc(37,"Stacey Smith"),a.Qb(),a.Qb(),a.Bc(38," Processor"),a.Mb(39,"br"),a.Qb(),a.Qb(),a.Rb(40,"div"),a.Mb(41,"i",10),a.Rb(42,"a",11),a.Bc(43," (555) 322-3244"),a.Qb(),a.Mb(44,"br"),a.Mb(45,"i",12),a.Rb(46,"a",13),a.Bc(47," stacey.smith@example.com"),a.Qb(),a.Qb(),a.Mb(48,"hr"),a.Rb(49,"div",6),a.Rb(50,"div",7),a.Mb(51,"div",15),a.Qb(),a.Rb(52,"div"),a.Rb(53,"h3",9),a.Rb(54,"strong"),a.Bc(55,"Jane Somebody"),a.Qb(),a.Qb(),a.Bc(56," Underwriter"),a.Mb(57,"br"),a.Qb(),a.Qb(),a.Rb(58,"div"),a.Mb(59,"i",10),a.Rb(60,"a",11),a.Bc(61," (555) 322-3244"),a.Qb(),a.Mb(62,"br"),a.Mb(63,"i",12),a.Rb(64,"a",13),a.Bc(65," jane.somebody@example.com"),a.Qb(),a.Qb(),a.Mb(66,"hr"),a.Qb(),a.Qb(),a.Qb()),2&e&&(a.Ab(7),a.hc("ngIf",t.success),a.Ab(1),a.hc("ngIf",!t.success))},directives:[o.o,i.a],styles:["table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{vertical-align:middle}sup.required[_ngcontent-%COMP%]{color:red}"],changeDetection:0}),e})();const p=n.i.forChild([{path:":type/:id",component:d,data:{title:"Upload Files"}},{path:"",component:d,data:{title:"Upload Files"}}]);var m=b("mrSG"),h=b("4ZtF");let f=(()=>{class e{constructor(e,t){this.store=e,this.query=t,this.someProp$=this.query.select(e=>e.someProp)}updateRouteUIState(e){this.store.update({someProp:e})}reset(){this.store.reset()}}return e.\u0275fac=function(t){return new(t||e)(a.Vb(R),a.Vb(Q))},e.\u0275prov=a.Hb({token:e,factory:e.\u0275fac}),e})(),R=(()=>{let e=class extends h.b{constructor(){super({someProp:null})}};return e.\u0275fac=function(t){return new(t||e)},e.\u0275prov=a.Hb({token:e,factory:e.\u0275fac}),e=Object(m.a)([Object(h.c)({name:"route-UIState",resettable:!0}),Object(m.b)("design:paramtypes",[])],e),e})(),Q=(()=>{class e extends h.a{constructor(e){super(e),this.store=e}}return e.\u0275fac=function(t){return new(t||e)(a.Vb(R))},e.\u0275prov=a.Hb({token:e,factory:e.\u0275fac}),e})(),v=(()=>{class e{}return e.\u0275mod=a.Jb({type:e}),e.\u0275inj=a.Ib({factory:function(t){return new(t||e)},providers:[f,R,Q],imports:[[o.c,s.a,p,c.a,r.b]]}),e})()}}]);