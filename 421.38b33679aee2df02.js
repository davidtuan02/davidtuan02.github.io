"use strict";(self.webpackChunkfisrtAngular=self.webpackChunkfisrtAngular||[]).push([[421],{1421:(f,d,i)=>{i.r(d),i.d(d,{SignUpModule:()=>_});var n=i(5879),p=i(1896),h=i(5627),r=i(6223),m=i(617);let t=(()=>{class o{constructor(c,s){this.router=c,this.accSrv=s,this.listAcc=this.accSrv.listAccount}navigate(c){this.router.navigate([c])}signup(){this.username&&this.email&&this.password&&this.conPassword?this.accSrv.getListAccount().then(c=>{if(c.find(e=>e.username===this.username))alert("Username n\xe0y \u0111\xe3 t\u1ed3n t\u1ea1i!");else if(this.password!==this.conPassword)alert("M\u1eadt kh\u1ea9u x\xe1c nh\u1eadn sai!");else{let e={userId:Math.floor(10*Math.random()).toString(),username:this.username,password:this.password,role:"user"};this.accSrv.createAccount(e),alert("\u0110\u0103ng k\xfd th\xe0nh c\xf4ng!"),this.router.navigate(["login"])}}).catch(c=>{}):alert("H\xe3y nh\u1eadp \u0111\u1ea7y \u0111\u1ee7 th\xf4ng tin!")}static#n=this.\u0275fac=function(s){return new(s||o)(n.Y36(p.F0),n.Y36(h.B))};static#t=this.\u0275cmp=n.Xpm({type:o,selectors:[["app-sign-up"]],decls:31,vars:4,consts:[[1,"signup-container"],["aria-hidden","false","fontIcon","arrow_back",1,"back",3,"click"],[1,"signup-form"],[1,"signup-title"],[1,"username"],["type","text","placeholder","Enter your name",1,"username-input",3,"ngModel","ngModelChange"],["aria-hidden","false","fontIcon","account_circle",1,"username-icon"],["type","email","placeholder","Enter your email",1,"username-input",3,"ngModel","ngModelChange"],["aria-hidden","false","fontIcon","mail",1,"username-icon"],[1,"password"],["type","password","placeholder","Create password",1,"password-input",3,"ngModel","ngModelChange"],["aria-hidden","false","fontIcon","lock_outline",1,"password-icon"],["type","password","placeholder","Confirm password",1,"password-input",3,"ngModel","ngModelChange"],["type","submit","value","SIGN UP",1,"signup",3,"click"],[1,"have-acc"],[1,"already-have"],[1,"login",3,"click"],[1,"footer"],[1,"text"],[1,"images"],["src","https://www.facebook.com/images/fb_icon_325x325.png","alt","facebook"],["src","https://www.iconpacks.net/icons/2/free-twitter-logo-icon-2429-thumb.png","alt","twitter"],["src","https://png.pngtree.com/png-vector/20221018/ourmid/pngtree-instagram-social-platform-icon-png-image_6315976.png","alt","instagram"],["src","https://cdn-icons-png.flaticon.com/512/145/145808.png","alt","pinterest"]],template:function(s,e){1&s&&(n.TgZ(0,"div",0)(1,"mat-icon",1),n.NdJ("click",function(){return e.navigate("")}),n.qZA(),n.TgZ(2,"div",2)(3,"span",3),n._uU(4,"Signup Now"),n.qZA(),n.TgZ(5,"div",4)(6,"input",5),n.NdJ("ngModelChange",function(g){return e.username=g}),n.qZA(),n._UZ(7,"mat-icon",6),n.qZA(),n.TgZ(8,"div",4)(9,"input",7),n.NdJ("ngModelChange",function(g){return e.email=g}),n.qZA(),n._UZ(10,"mat-icon",8),n.qZA(),n.TgZ(11,"div",9)(12,"input",10),n.NdJ("ngModelChange",function(g){return e.password=g}),n.qZA(),n._UZ(13,"mat-icon",11),n.qZA(),n.TgZ(14,"div",9)(15,"input",12),n.NdJ("ngModelChange",function(g){return e.conPassword=g}),n.qZA(),n._UZ(16,"mat-icon",11),n.qZA(),n.TgZ(17,"input",13),n.NdJ("click",function(){return e.signup()}),n.qZA(),n.TgZ(18,"span",14)(19,"span",15),n._uU(20,"Already have an account? "),n.qZA(),n.TgZ(21,"span",16),n.NdJ("click",function(){return e.navigate("login")}),n._uU(22,"Login"),n.qZA()(),n.TgZ(23,"div",17)(24,"span",18),n._uU(25,"Or Signup with"),n.qZA(),n.TgZ(26,"div",19),n._UZ(27,"img",20)(28,"img",21)(29,"img",22)(30,"img",23),n.qZA()()()()),2&s&&(n.xp6(6),n.Q6J("ngModel",e.username),n.xp6(3),n.Q6J("ngModel",e.email),n.xp6(3),n.Q6J("ngModel",e.password),n.xp6(3),n.Q6J("ngModel",e.conPassword))},dependencies:[r.Fj,r.JJ,r.On,m.Hw],styles:[".signup-container[_ngcontent-%COMP%]{height:100vh;background:url(https://static.vecteezy.com/system/resources/previews/004/299/830/non_2x/shopping-online-on-phone-with-podium-paper-art-modern-pink-background-gifts-box-illustration-free-vector.jpg);background-position:center;background-repeat:none;background-size:cover;padding-top:80px;display:flex;flex-direction:column;align-items:center;position:relative}.signup-container[_ngcontent-%COMP%]   .back[_ngcontent-%COMP%]{color:#000;position:absolute;top:30px;left:30px}.signup-container[_ngcontent-%COMP%]   .back[_ngcontent-%COMP%]:hover{cursor:pointer}.signup-container[_ngcontent-%COMP%]   .signup-form[_ngcontent-%COMP%]{display:flex;background-color:#000;opacity:.8;width:500px;height:600px;border:1px solid black;flex-direction:column;border-radius:5%;box-shadow:5px 5px 20px}.signup-container[_ngcontent-%COMP%]   .signup-form[_ngcontent-%COMP%]   .signup-title[_ngcontent-%COMP%]{margin-left:127px;margin-top:50px;color:#fff;font-size:50px;font-weight:700}.signup-container[_ngcontent-%COMP%]   .signup-form[_ngcontent-%COMP%]   .username[_ngcontent-%COMP%]{display:flex;margin-top:30px;justify-content:space-evenly;align-items:center}.signup-container[_ngcontent-%COMP%]   .signup-form[_ngcontent-%COMP%]   .username[_ngcontent-%COMP%]   .username-input[_ngcontent-%COMP%]{color:#fff;font-size:20px;outline:white;background:transparent;width:340px;height:45px;padding-left:10px}.signup-container[_ngcontent-%COMP%]   .signup-form[_ngcontent-%COMP%]   .username[_ngcontent-%COMP%]   .username-icon[_ngcontent-%COMP%]{color:#fff;font-size:25px}.signup-container[_ngcontent-%COMP%]   .signup-form[_ngcontent-%COMP%]   .password[_ngcontent-%COMP%]{display:flex;margin-top:30px;justify-content:space-evenly;align-items:center}.signup-container[_ngcontent-%COMP%]   .signup-form[_ngcontent-%COMP%]   .password[_ngcontent-%COMP%]   .password-input[_ngcontent-%COMP%]{color:#fff;font-size:20px;outline:white;background:transparent;width:340px;height:45px;padding-left:10px}.signup-container[_ngcontent-%COMP%]   .signup-form[_ngcontent-%COMP%]   .password[_ngcontent-%COMP%]   .password-icon[_ngcontent-%COMP%]{color:#fff;font-size:25px}.signup-container[_ngcontent-%COMP%]   .signup-form[_ngcontent-%COMP%]   .signup[_ngcontent-%COMP%]{font-weight:700;width:150px;margin-top:25px;margin-left:36%;padding:10px;font-size:20px;border-radius:15px;margin-bottom:5px}.signup-container[_ngcontent-%COMP%]   .signup-form[_ngcontent-%COMP%]   .signup[_ngcontent-%COMP%]:hover{background-color:pink}.signup-container[_ngcontent-%COMP%]   .signup-form[_ngcontent-%COMP%]   .have-acc[_ngcontent-%COMP%]{color:#fff;margin-left:150px}.signup-container[_ngcontent-%COMP%]   .signup-form[_ngcontent-%COMP%]   .have-acc[_ngcontent-%COMP%]   .login[_ngcontent-%COMP%]{color:green}.signup-container[_ngcontent-%COMP%]   .signup-form[_ngcontent-%COMP%]   .have-acc[_ngcontent-%COMP%]   .login[_ngcontent-%COMP%]:hover{text-decoration:underline}.signup-container[_ngcontent-%COMP%]   .signup-form[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%]{color:#fff;padding-left:163px;margin-top:10px}.signup-container[_ngcontent-%COMP%]   .signup-form[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]{margin-left:45px}.signup-container[_ngcontent-%COMP%]   .signup-form[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%]   .images[_ngcontent-%COMP%]{margin-top:5px;display:flex;gap:5px;height:40px}.signup-container[_ngcontent-%COMP%]   .login-copyright[_ngcontent-%COMP%]{margin-top:120px;color:#000;font-weight:600}"]})}return o})();const a=[{path:"",component:t}];let l=(()=>{class o{static#n=this.\u0275fac=function(s){return new(s||o)};static#t=this.\u0275mod=n.oAB({type:o});static#e=this.\u0275inj=n.cJS({imports:[p.Bz.forChild(a),p.Bz]})}return o})(),_=(()=>{class o{static#n=this.\u0275fac=function(s){return new(s||o)};static#t=this.\u0275mod=n.oAB({type:o,bootstrap:[t]});static#e=this.\u0275inj=n.cJS({imports:[r.u5,m.Ps,l]})}return o})()},5627:(f,d,i)=>{i.d(d,{B:()=>h});var n=i(9862),p=i(5879);let h=(()=>{class r{constructor(t){this.http=t,this.listAccount=[{userId:"1",username:"user1",password:"1"},{userId:"2",username:"user2",password:"2"},{userId:"3",username:"user3",password:"3"},{userId:"4",username:"user4",password:"4"},{userId:"5",username:"user5",password:"5"}],this.url="https://first-nodejs-2.onrender.com/accounts",this.headers=new n.WM({"Content-Type":"application/json"}),this.isLogin=!1,this.currentUrl=""}getIsLogin(){return this.isLogin}setIsLogin(t){this.isLogin=t}getAccLogin(){return this.accLogin}setAccLogin(t){this.accLogin=t}getCurUrl(){return this.currentUrl}setCurUrl(t){this.currentUrl=t}setListAcc(t){this.listAccount=t}getListAccount(){return new Promise((t,a)=>{this.http.get(this.url).subscribe(l=>{t(l)},l=>{a(l)})})}test(){return this.http.get(this.url)}createAccount(t){return this.http.post(this.url,t,{headers:this.headers})}updateAccount(t,a){return this.http.put(`${this.url}/${t}`,a,{headers:this.headers})}deleteAccount(t){return this.http.delete(`${this.url}/${t}`)}static#n=this.\u0275fac=function(a){return new(a||r)(p.LFG(n.eN))};static#t=this.\u0275prov=p.Yz7({token:r,factory:r.\u0275fac,providedIn:"root"})}return r})()}}]);