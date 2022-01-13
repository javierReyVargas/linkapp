"use strict";(self.webpackChunklinks=self.webpackChunklinks||[]).push([[321],{6321:(B,v,a)=>{a.r(v),a.d(v,{LoginModule:()=>P});var F=a(9808),p=a(3692),l=a(6907),r=a(3075),t=a(5e3),g=a(5620),m=a(9224),d=a(7093),f=a(7161),L=a(7531),Z=a(7423);let T=(()=>{class o{constructor(n,i,s){this.store=n,this.router=i,this.fb=s}ngOnInit(){this.loginFormGroup=this.fb.group({email:["",[r.kI.required,r.kI.email]],password:["",r.kI.required]}),this.store.select("auth").subscribe(n=>{this.readyLogin(n)})}readyLogin(n){void 0!==n.token&&""!==n.token&&this.goToDashBoard()}goToDashBoard(){this.router.navigate(["./dashboard"])}goToLogin(){this.router.navigate(["./"])}login(){var n,i;let s={email:null===(n=this.loginFormGroup)||void 0===n?void 0:n.value.email,password:null===(i=this.loginFormGroup)||void 0===i?void 0:i.value.password};this.store.dispatch(l.el(s))}}return o.\u0275fac=function(n){return new(n||o)(t.Y36(g.yh),t.Y36(p.F0),t.Y36(r.qu))},o.\u0275cmp=t.Xpm({type:o,selectors:[["login"]],decls:18,vars:2,consts:[[1,"cardLogin"],["fxLayout","column",3,"formGroup"],["appearance","fill",1,"fullWidth"],["type","email","matInput","","formControlName","email","placeholder","Ex. pat@example.com"],["matInput","","type","password","formControlName","password","placeholder","******"],["fxLayoutAlign","center"],["mat-raised-button","",1,"actionLogin",3,"disabled","click"]],template:function(n,i){1&n&&(t.TgZ(0,"mat-card",0),t.TgZ(1,"mat-card-title"),t._uU(2," Login "),t.qZA(),t.TgZ(3,"mat-card-content"),t.TgZ(4,"form",1),t.TgZ(5,"div"),t.TgZ(6,"mat-hint"),t._uU(7,"Your Email"),t.qZA(),t.TgZ(8,"mat-form-field",2),t._UZ(9,"input",3),t.qZA(),t.qZA(),t.TgZ(10,"div"),t.TgZ(11,"mat-hint"),t._uU(12,"Password"),t.qZA(),t.TgZ(13,"mat-form-field",2),t._UZ(14,"input",4),t.qZA(),t.qZA(),t.qZA(),t.TgZ(15,"div",5),t.TgZ(16,"button",6),t.NdJ("click",function(){return i.login()}),t._uU(17,"Login"),t.qZA(),t.qZA(),t.qZA(),t.qZA()),2&n&&(t.xp6(4),t.Q6J("formGroup",i.loginFormGroup),t.xp6(12),t.Q6J("disabled",!(null!=i.loginFormGroup&&i.loginFormGroup.valid)))},directives:[m.a8,m.n5,m.dn,r._Y,r.JL,d.xw,r.sg,f.bx,f.KE,L.Nt,r.Fj,r.JJ,r.u,d.Wh,Z.lW],styles:[".cardLogin[_ngcontent-%COMP%]{width:500px;background:#FFFFFF;box-shadow:0 0 30px #c7c7c78c;border-radius:6px}.actionLogin[_ngcontent-%COMP%]{background:#007AFF;color:#fff;border-radius:4px;width:80%;height:48px;width:366px}"]}),o})(),b=(()=>{class o{constructor(n,i,s){this.store=n,this.router=i,this.fb=s}ngOnInit(){this.signupFormGroup=this.fb.group({email:["",[r.kI.required,r.kI.email]],password:["",r.kI.required],fullName:["",r.kI.required]})}goToDashBoard(){this.router.navigate(["./dashboard"])}signup(){var n,i,s;let u={email:null===(n=this.signupFormGroup)||void 0===n?void 0:n.value.email,password:null===(i=this.signupFormGroup)||void 0===i?void 0:i.value.password,fullName:null===(s=this.signupFormGroup)||void 0===s?void 0:s.value.fullName};this.store.dispatch(l.Od(u))}}return o.\u0275fac=function(n){return new(n||o)(t.Y36(g.yh),t.Y36(p.F0),t.Y36(r.qu))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-signup"]],decls:31,vars:2,consts:[[1,"cardLogin"],["fxLayout","column",3,"formGroup"],["appearance","fill",1,"fullWidth"],["matInput","","type","text","formControlName","fullName","placeholder","Fernanda example"],["type","email","matInput","","formControlName","email","placeholder","Ex. fernanda@example.com"],["matInput","","type","password","formControlName","password","placeholder","******"],["fxLayoutAlign","center"],["mat-raised-button","",1,"actionSignup",3,"disabled","click"],["fxLayoutAlign","center",1,"tcAndPP"],["href","",1,"tc"],["href","",1,"pp"]],template:function(n,i){1&n&&(t.TgZ(0,"mat-card",0),t.TgZ(1,"mat-card-title"),t._uU(2," SIGNUP "),t.qZA(),t.TgZ(3,"mat-card-content"),t.TgZ(4,"form",1),t.TgZ(5,"div"),t.TgZ(6,"mat-hint"),t._uU(7,"Full name"),t.qZA(),t.TgZ(8,"mat-form-field",2),t._UZ(9,"input",3),t.qZA(),t.qZA(),t.TgZ(10,"div"),t.TgZ(11,"mat-hint"),t._uU(12,"Your Email"),t.qZA(),t.TgZ(13,"mat-form-field",2),t._UZ(14,"input",4),t.qZA(),t.qZA(),t.TgZ(15,"div"),t.TgZ(16,"mat-hint"),t._uU(17,"Password"),t.qZA(),t.TgZ(18,"mat-form-field",2),t._UZ(19,"input",5),t.qZA(),t.qZA(),t.qZA(),t.TgZ(20,"div",6),t.TgZ(21,"button",7),t.NdJ("click",function(){return i.signup()}),t._uU(22,"SIGNUP"),t.qZA(),t.qZA(),t.TgZ(23,"div",8),t.TgZ(24,"p"),t._uU(25," By Creating account You agree to the "),t.TgZ(26,"a",9),t._uU(27," Terms of use"),t.qZA(),t._uU(28," and "),t.TgZ(29,"a",10),t._uU(30,"Privacy Polycy"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA()),2&n&&(t.xp6(4),t.Q6J("formGroup",i.signupFormGroup),t.xp6(17),t.Q6J("disabled",!(null!=i.signupFormGroup&&i.signupFormGroup.valid)))},directives:[m.a8,m.n5,m.dn,r._Y,r.JL,d.xw,r.sg,f.bx,f.KE,L.Nt,r.Fj,r.JJ,r.u,d.Wh,Z.lW],styles:[".cardLogin[_ngcontent-%COMP%]{width:500px;background:#FFFFFF;box-shadow:0 0 30px #c7c7c78c;border-radius:6px}.actionSignup[_ngcontent-%COMP%]{background:#007AFF;color:#fff;border-radius:4px;width:80%;height:48px;width:366px}.tcAndPP[_ngcontent-%COMP%]{padding:7px 116px}.tc[_ngcontent-%COMP%], .pp[_ngcontent-%COMP%]{color:#39f;font-weight:700;text-decoration:none}"]}),o})();var y=a(6869);const O=[{path:"",component:(()=>{class o{constructor(n,i){this.store=n,this.router=i,this.textButton="LOGIN",this.urlButton="signup",this.loadInitData()}ngOnInit(){}loadInitData(){this.store.select("auth").subscribe(n=>{this.validateDataButton(n)})}validateDataButton(n){n.isViewLogin?(this.textButton="SIGNUP",this.urlButton="./signup"):(this.textButton="LOGIN",this.urlButton="login")}goToViewAuth(){this.store.dispatch("LOGIN"===this.textButton?l.h3():l.Ng())}}return o.\u0275fac=function(n){return new(n||o)(t.Y36(g.yh),t.Y36(p.F0))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-main"]],decls:9,vars:2,consts:[["fxLayout","row","fxLayoutAlign","end"],["mat-stroked-button","",1,"buttonSession",3,"routerLink","click"],["fxLayout","column","fxLayoutAlign","center center"],["fxFlex",""]],template:function(n,i){1&n&&(t.TgZ(0,"div"),t.TgZ(1,"div",0),t.TgZ(2,"button",1),t.NdJ("click",function(){return i.goToViewAuth()}),t._uU(3),t.qZA(),t.qZA(),t.TgZ(4,"div",2),t.TgZ(5,"div",3),t._UZ(6,"logo"),t.qZA(),t.TgZ(7,"div",3),t._UZ(8,"router-outlet"),t.qZA(),t.qZA(),t.qZA()),2&n&&(t.xp6(2),t.Q6J("routerLink",i.urlButton),t.xp6(1),t.hij(" ",i.textButton," "))},directives:[d.xw,d.Wh,Z.lW,p.rH,d.yH,y.R,p.lC],styles:[".buttonSession[_ngcontent-%COMP%]{border:2px solid #007AFF;color:#007aff;height:39px;width:130px;border-radius:4px;margin:16px 16px 0 0}"]}),o})(),children:[{path:"",redirectTo:"login"},{path:"login",component:T},{path:"signup",component:b}]}];let C=(()=>{class o{}return o.\u0275fac=function(n){return new(n||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[[p.Bz.forChild(O)],p.Bz]}),o})();var w=a(6390);const j=(0,g.Lq)({isLogin:!1,isViewLogin:!0,isViewSignup:!1,loading:!1,error:null,token:"",email:"",name:"",fullName:"",id:""},(0,g.on)(l.el,o=>Object.assign(Object.assign({},o),{loading:!0})),(0,g.on)(l.h3,o=>Object.assign(Object.assign({},o),{isViewSignup:!1,isViewLogin:!0})),(0,g.on)(l.Ng,o=>Object.assign(Object.assign({},o),{isViewSignup:!0,isViewLogin:!1})),(0,g.on)(l.RN,(o,{token:e})=>Object.assign(Object.assign({},o),{loading:!1,isLogin:!0,token:e})),(0,g.on)(l.jP,(o,{payload:e})=>Object.assign(Object.assign({},o),{loading:!1,isLogin:!1,error:e})),(0,g.on)(l.Od,o=>Object.assign(Object.assign({},o),{loading:!0})),(0,g.on)(l.nv,(o,{fullName:e,email:n,id:i})=>Object.assign(Object.assign({},o),{loading:!1,isLogin:!0,fullName:e,email:n,id:i})),(0,g.on)(l.rn,(o,{payload:e})=>Object.assign(Object.assign({},o),{loading:!1,isLogin:!1,error:e})),(0,g.on)(l.kS,o=>Object.assign(Object.assign({},o),{isLogin:!1,token:""})));function S(o,e){return j(o,e)}var c=a(4394),A=a(5577),h=a(4004),G=a(262),N=a(2340),q=a(520);let I=(()=>{class o{constructor(n){this.http=n,this.url=N.N.api}login(n,i){return this.http.post(`${this.url}/login`,{email:n,password:i})}signup(n,i,s){let u={name:s,email:n,password:i};return this.http.post(`${this.url}/register`,u).pipe((0,h.U)(x=>Object.assign(Object.assign({},x),{id:x.id,name:u.name,email:u.email,password:u.password})))}}return o.\u0275fac=function(n){return new(n||o)(t.LFG(q.eN))},o.\u0275prov=t.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),o})(),M=(()=>{class o{constructor(n,i){this.actions$=n,this.userService=i,this.initLogin$=(0,c.GW)(()=>this.actions$.pipe((0,c.l4)(l.el),(0,A.z)(s=>this.userService.login(s.email,s.password).pipe((0,h.U)(u=>l.RN(u)),(0,G.K)(u=>l.jP(u)))))),this.initRegister$=(0,c.GW)(()=>this.actions$.pipe((0,c.l4)(l.Od),(0,A.z)(s=>this.userService.signup(s.email,s.password,s.fullName).pipe((0,h.U)(u=>l.nv({fullName:u.name,id:u.id,email:u.email,password:u.password})))))),this.successSignup$=(0,c.GW)(()=>this.actions$.pipe((0,c.l4)(l.nv),(0,h.U)(s=>l.el(s))))}}return o.\u0275fac=function(n){return new(n||o)(t.LFG(c.eX),t.LFG(I))},o.\u0275prov=t.Yz7({token:o,factory:o.\u0275fac}),o})(),P=(()=>{class o{}return o.\u0275fac=function(n){return new(n||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[[F.ez,C,r.UX,w.m,g.Aw.forFeature("auth",S),c.sQ.forFeature([M])]]}),o})()}}]);