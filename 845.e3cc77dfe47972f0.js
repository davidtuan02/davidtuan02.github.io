"use strict";(self.webpackChunkfisrtAngular=self.webpackChunkfisrtAngular||[]).push([[845],{6845:(T,g,i)=>{i.r(g),i.d(g,{HomeModule:()=>Z});var t=i(4946),u=i(1745),s=i(72),h=i(7781),p=i(6814);let d=(()=>{class o{constructor(n){this.router=n}navigate(n,e){this.router.navigate([`detail/${n}/${e}`])}static#t=this.\u0275fac=function(e){return new(e||o)(t.Y36(s.F0))};static#n=this.\u0275cmp=t.Xpm({type:o,selectors:[["app-product"]],inputs:{product:"product"},decls:10,vars:7,consts:[[1,"product-container",3,"click"],["alt","",1,"image",3,"src"],[1,"description"],[1,"footer"],[1,"price"],[1,"sold"]],template:function(e,c){1&e&&(t.TgZ(0,"div",0),t.NdJ("click",function(){return c.navigate(c.product.type,c.product.id)}),t._UZ(1,"img",1),t.TgZ(2,"div",2),t._uU(3),t.qZA(),t.TgZ(4,"div",3)(5,"div",4),t._uU(6),t.ALo(7,"number"),t.qZA(),t.TgZ(8,"div",5),t._uU(9),t.qZA()()()),2&e&&(t.xp6(1),t.Q6J("src",c.product.image,t.LSH),t.xp6(2),t.Oqu(c.product.description),t.xp6(3),t.Oqu(t.xi3(7,4,c.product.price,"1.0-0")),t.xp6(3),t.hij("\u0110\xe3 th\xedch ",c.product.like,""))},dependencies:[p.JJ],styles:[".product-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;width:170px;height:220px}.product-container[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%]{width:100%;height:120px}.product-container[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%]{font-size:16px}.product-container[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%]{display:flex;justify-content:space-between}.product-container[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%]   .price[_ngcontent-%COMP%]{color:red;font-size:20px}.product-container[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%]   .sold[_ngcontent-%COMP%]{color:gray}"]})}return o})();function O(o,l){if(1&o&&(t.TgZ(0,"div",4),t._UZ(1,"app-product",5),t.qZA()),2&o){const n=l.$implicit;t.xp6(1),t.Q6J("product",n)}}let m=(()=>{class o{constructor(n){this.proSrv=n,this.listProduct=[],this.favouriteList=[],this.arrLikeProduct=[],this.listProduct=[...this.proSrv.listPhone,...this.proSrv.listLaptop,...this.proSrv.listTablet,...this.proSrv.listWatch],localStorage.getItem("productsLiked")&&(this.arrLikeProduct=JSON.parse(`${localStorage.getItem("productsLiked")}`)),this.countLike(),this.getFavouriteList()}ngOnInit(){}getFavouriteList(){this.listProduct&&this.listProduct.length>0&&this.listProduct.forEach(n=>{n.like>0&&this.favouriteList.push(n)}),this.favouriteList.sort((n,e)=>n.like>e.like?-1:e.like>n.like?1:0)}scanLike(){this.listProduct.forEach(n=>{this.arrLikeProduct.forEach(e=>{n.type===e.type&&n.id===e.productId&&(n.like+=1)})})}countLike(){this.listProduct&&this.listProduct.length>0&&this.listProduct.forEach(n=>{n.like=0}),this.arrLikeProduct.forEach(n=>{this.listProduct.forEach(e=>{n.productId===e.id&&n.type===e.type&&(e.like+=1)})})}static#t=this.\u0275fac=function(e){return new(e||o)(t.Y36(h.M))};static#n=this.\u0275cmp=t.Xpm({type:o,selectors:[["app-favourite-product"]],decls:6,vars:1,consts:[[1,"favourite-product"],[1,"title"],[1,"list-products"],["class","product",4,"ngFor","ngForOf"],[1,"product"],[3,"product"]],template:function(e,c){1&e&&(t.TgZ(0,"div",0)(1,"div",1)(2,"span"),t._uU(3,"S\u1ea3n ph\u1ea9m \u01b0a th\xedch"),t.qZA()(),t.TgZ(4,"div",2),t.YNc(5,O,2,1,"div",3),t.qZA()()),2&e&&(t.xp6(5),t.Q6J("ngForOf",c.favouriteList))},dependencies:[p.sg,d],styles:[".favourite-product[_ngcontent-%COMP%]{display:flex;flex-direction:column;margin-top:30px}.favourite-product[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{height:40px;background-color:#f19dd2;box-shadow:5px 5px 15px #cc89ca;padding-top:6px;box-sizing:border-box;z-index:99}.favourite-product[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{margin-left:30px;font-size:20px}.favourite-product[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:hover{cursor:pointer;text-decoration:underline}.favourite-product[_ngcontent-%COMP%]   .list-products[_ngcontent-%COMP%]{display:flex;justify-content:flex-start;padding-left:100px;padding-right:100px;gap:200px;padding-top:55px;background-color:#e7cfe3;overflow:auto}.favourite-product[_ngcontent-%COMP%]   .list-products[_ngcontent-%COMP%]   .product[_ngcontent-%COMP%]:hover{cursor:pointer}"]})}return o})();var a=i(95);function v(o,l){if(1&o&&(t.TgZ(0,"div",15),t._UZ(1,"app-product",16),t.qZA()),2&o){const n=l.$implicit;t.xp6(1),t.Q6J("product",n)}}let _=(()=>{class o{constructor(n){this.proSrv=n,this.arrLikeProduct=[],this.listProduct=this.proSrv.listPhone,localStorage.getItem("productsLiked")&&(this.arrLikeProduct=JSON.parse(`${localStorage.getItem("productsLiked")}`))}ngOnInit(){this.countLike()}chooseTypeProduct(n){switch(n){case"phone":this.listProduct=this.proSrv.listPhone;break;case"laptop":this.listProduct=this.proSrv.listLaptop;break;case"tablet":this.listProduct=this.proSrv.listTablet;break;case"watch":this.listProduct=this.proSrv.listWatch}this.countLike()}countLike(){this.listProduct&&this.listProduct.length>0&&this.listProduct.forEach(n=>{n.like=0}),this.arrLikeProduct.forEach(n=>{this.listProduct.forEach(e=>{n.productId===e.id&&n.type===e.type&&(e.like+=1)})})}arrangeProduct(){if(this.arrange)switch(this.arrange){case"price-increase":this.listProduct&&this.listProduct.sort((n,e)=>n.price>e.price?1:e.price>n.price?-1:0);break;case"price-decrease":this.listProduct&&this.listProduct.sort((n,e)=>n.price>e.price?-1:e.price>n.price?1:0);break;case"name-a-to-z":this.listProduct&&this.listProduct.sort((n,e)=>n.description>e.description?1:e.description>n.description?-1:0);break;case"name-z-to-a":this.listProduct&&this.listProduct.sort((n,e)=>n.description>e.description?-1:e.description>n.description?1:0);break;case"best-seller":this.listProduct&&this.listProduct.sort((n,e)=>n.sold>e.sold?-1:e.sold>n.sold?1:0)}}static#t=this.\u0275fac=function(e){return new(e||o)(t.Y36(h.M))};static#n=this.\u0275cmp=t.Xpm({type:o,selectors:[["app-menu-product"]],decls:25,vars:2,consts:[[1,"menu-product-container"],[1,"menu-product"],[1,"phone",3,"click"],[1,"laptop",3,"click"],[1,"tablet",3,"click"],[1,"watch",3,"click"],[1,"arrange-text",3,"ngModel","ngModelChange","change"],["value","SX"],["value","price-increase"],["value","price-decrease"],["value","name-a-to-z"],["value","name-z-to-a"],["value","best-seller"],[1,"list-products"],["class","product",4,"ngFor","ngForOf"],[1,"product"],[3,"product"]],template:function(e,c){1&e&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2),t.NdJ("click",function(){return c.chooseTypeProduct("phone")}),t._uU(3,"Phone"),t.qZA(),t.TgZ(4,"div",3),t.NdJ("click",function(){return c.chooseTypeProduct("laptop")}),t._uU(5,"Laptop"),t.qZA(),t.TgZ(6,"div",4),t.NdJ("click",function(){return c.chooseTypeProduct("tablet")}),t._uU(7,"Tablet"),t.qZA(),t.TgZ(8,"div",5),t.NdJ("click",function(){return c.chooseTypeProduct("watch")}),t._uU(9,"Watch"),t.qZA()(),t.TgZ(10,"select",6),t.NdJ("ngModelChange",function(y){return c.arrange=y})("change",function(){return c.arrangeProduct()}),t.TgZ(11,"option",7),t._uU(12,"S\u1eafp x\u1ebfp theo"),t.qZA(),t.TgZ(13,"option",8),t._uU(14,"Gi\xe1 t\u0103ng d\u1ea7n"),t.qZA(),t.TgZ(15,"option",9),t._uU(16,"Gi\xe1 gi\u1ea3m d\u1ea7n"),t.qZA(),t.TgZ(17,"option",10),t._uU(18,"T\xean A-Z"),t.qZA(),t.TgZ(19,"option",11),t._uU(20,"T\xean Z-A"),t.qZA(),t.TgZ(21,"option",12),t._uU(22,"B\xe1n ch\u1ea1y"),t.qZA()(),t.TgZ(23,"div",13),t.YNc(24,v,2,1,"div",14),t.qZA()()),2&e&&(t.xp6(10),t.Q6J("ngModel",c.arrange),t.xp6(14),t.Q6J("ngForOf",c.listProduct))},dependencies:[p.sg,a.YN,a.Kr,a.EJ,a.JJ,a.On,d],styles:[".menu-product-container[_ngcontent-%COMP%]{margin-top:50px;background-color:#e7cfe3}.menu-product-container[_ngcontent-%COMP%]   .menu-product[_ngcontent-%COMP%]{background-color:#f19dd2;box-shadow:5px 5px 15px #cc89ca;display:flex;justify-content:space-around;align-items:center;height:40px}.menu-product-container[_ngcontent-%COMP%]   .phone[_ngcontent-%COMP%], .menu-product-container[_ngcontent-%COMP%]   .tablet[_ngcontent-%COMP%], .menu-product-container[_ngcontent-%COMP%]   .watch[_ngcontent-%COMP%], .menu-product-container[_ngcontent-%COMP%]   .laptop[_ngcontent-%COMP%]{font-size:26px}.menu-product-container[_ngcontent-%COMP%]   .phone[_ngcontent-%COMP%]:hover, .menu-product-container[_ngcontent-%COMP%]   .tablet[_ngcontent-%COMP%]:hover, .menu-product-container[_ngcontent-%COMP%]   .watch[_ngcontent-%COMP%]:hover, .menu-product-container[_ngcontent-%COMP%]   .laptop[_ngcontent-%COMP%]:hover{cursor:pointer;color:#fff}.menu-product-container[_ngcontent-%COMP%]   .arrange-text[_ngcontent-%COMP%]{margin-left:1400px;margin-top:20px;margin-bottom:20px}.menu-product-container[_ngcontent-%COMP%]   .arrange-text[_ngcontent-%COMP%]:hover{cursor:pointer}.menu-product-container[_ngcontent-%COMP%]   .list-products[_ngcontent-%COMP%]{display:flex;justify-content:space-around}.menu-product-container[_ngcontent-%COMP%]   .list-products[_ngcontent-%COMP%]   .product[_ngcontent-%COMP%]:hover{cursor:pointer}"]})}return o})(),P=(()=>{class o{constructor(){this.images=["https://graphicsfamily.com/wp-content/uploads/edd/2021/07/Shop-Products-Social-Media-Banner-Design-Template-scaled.jpg","https://cdn.vectorstock.com/i/preview-1x/64/35/merry-christmas-banner-with-product-table-display-vector-44736435.webp","https://cdn.vectorstock.com/i/preview-1x/14/27/dairy-product-horizontal-web-banner-vector-45811427.webp"],this.currentIndex=0,this.timeOut=setTimeout(()=>{this.currentIndex+=1,this.currentIndex>this.images.length-1&&(this.currentIndex=0)},1e3)}prev(){this.currentIndex=0===this.currentIndex?this.images.length-1:this.currentIndex-1}next(){this.currentIndex=this.currentIndex===this.images.length-1?0:this.currentIndex+1}static#t=this.\u0275fac=function(e){return new(e||o)};static#n=this.\u0275cmp=t.Xpm({type:o,selectors:[["app-banner"]],decls:6,vars:1,consts:[[1,"slideshow"],[3,"click"],["alt","Slide",3,"src"]],template:function(e,c){1&e&&(t.TgZ(0,"div",0)(1,"button",1),t.NdJ("click",function(){return c.prev()}),t._uU(2,"<"),t.qZA(),t._UZ(3,"img",2),t.TgZ(4,"button",1),t.NdJ("click",function(){return c.next()}),t._uU(5,">"),t.qZA()()),2&e&&(t.xp6(3),t.Q6J("src",c.images[c.currentIndex],t.LSH))},styles:[".slideshow[_ngcontent-%COMP%]{margin-top:30px;display:flex;justify-content:center;height:420px}.slideshow[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:70%;height:auto}.slideshow[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{width:45px;height:30px;margin-top:180px}"]})}return o})(),f=(()=>{class o{static#t=this.\u0275fac=function(e){return new(e||o)};static#n=this.\u0275cmp=t.Xpm({type:o,selectors:[["app-home-page"]],decls:5,vars:0,template:function(e,c){1&e&&t._UZ(0,"router-outlet")(1,"app-menu")(2,"app-banner")(3,"app-favourite-product")(4,"app-menu-product")},dependencies:[u.M,s.lC,m,_,P],encapsulation:2})}return o})();const x=[{path:"",component:f},{path:"contact",component:(()=>{class o{static#t=this.\u0275fac=function(e){return new(e||o)};static#n=this.\u0275cmp=t.Xpm({type:o,selectors:[["app-contact"]],decls:10,vars:0,consts:[[1,"contact-container"],[1,"contact-main"],[1,"contact-detail"],[1,"contact-detail-title"],["type","text","placeholder","Name",1,"contact-detail-name"],["type","email","placeholder","Email",1,"contact-detail-email"],["type","text","placeholder","Message",1,"contact-detail-message"],["type","button","value","Send Message",1,"contact-detail-send"]],template:function(e,c){1&e&&(t.TgZ(0,"div",0),t._UZ(1,"app-menu"),t.TgZ(2,"div",1)(3,"div",2)(4,"span",3),t._uU(5,"Contact us"),t.qZA(),t._UZ(6,"input",4)(7,"input",5)(8,"input",6)(9,"input",7),t.qZA()()())},dependencies:[u.M],styles:[".contact-container[_ngcontent-%COMP%]   .contact-main[_ngcontent-%COMP%]{height:100vh;background:url(https://media.istockphoto.com/id/1311934969/photo/contact-us.jpg?s=612x612&w=0&k=20&c=_vmYyAX0aFi-sHH8eYS-tLLNfs1ZWXnNB8M7_KWwhgg=);background-position:center;background-repeat:none;background-size:cover}.contact-container[_ngcontent-%COMP%]   .contact-main[_ngcontent-%COMP%]   .contact-detail[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:20px;width:300px;padding-left:175px;padding-top:50px}.contact-container[_ngcontent-%COMP%]   .contact-main[_ngcontent-%COMP%]   .contact-detail[_ngcontent-%COMP%]   .contact-detail-title[_ngcontent-%COMP%]{font-size:40px;font-weight:600;color:#fff;margin-bottom:10px}.contact-container[_ngcontent-%COMP%]   .contact-main[_ngcontent-%COMP%]   .contact-detail[_ngcontent-%COMP%]   .contact-detail-name[_ngcontent-%COMP%], .contact-container[_ngcontent-%COMP%]   .contact-main[_ngcontent-%COMP%]   .contact-detail[_ngcontent-%COMP%]   .contact-detail-email[_ngcontent-%COMP%], .contact-container[_ngcontent-%COMP%]   .contact-main[_ngcontent-%COMP%]   .contact-detail[_ngcontent-%COMP%]   .contact-detail-send[_ngcontent-%COMP%]{padding-left:10px;height:35px;border-radius:20px;outline:none;background-color:#dee1e3}.contact-container[_ngcontent-%COMP%]   .contact-main[_ngcontent-%COMP%]   .contact-detail[_ngcontent-%COMP%]   .contact-detail-message[_ngcontent-%COMP%]{padding-left:10px;height:60px;border-radius:20px;background-color:#dee1e3}.contact-container[_ngcontent-%COMP%]   .contact-main[_ngcontent-%COMP%]   .contact-detail[_ngcontent-%COMP%]   .contact-detail-send[_ngcontent-%COMP%]{background-color:#00f;color:#fff;font-size:20px}"]})}return o})()},{path:"about",component:(()=>{class o{constructor(n){this.router=n}navigate(n){this.router.navigate([n])}static#t=this.\u0275fac=function(e){return new(e||o)(t.Y36(s.F0))};static#n=this.\u0275cmp=t.Xpm({type:o,selectors:[["app-about"]],decls:14,vars:0,consts:[[1,"about-container"],[1,"about-main"],[1,"about-main-image"],[1,"text"],["src","https://i0.wp.com/images-prod.healthline.com/hlcmsresource/images/topic_centers/2018-9/9256-Out_of_50_States_These_Are_the_Most_Popular_6_Dinner_Combos-1296x728-Header.jpg?w=1155&h=1528","alt",""],[1,"about-main-content"],[1,"text-1"],[1,"text-2"],[1,"text-3"]],template:function(e,c){1&e&&(t.TgZ(0,"div",0),t._UZ(1,"app-menu"),t.TgZ(2,"div",1)(3,"div",2)(4,"span",3),t._uU(5,"Good Food starts with Good Ingredients"),t.qZA(),t._UZ(6,"img",4),t.qZA(),t.TgZ(7,"div",5)(8,"span",6),t._uU(9,"OUR MISSION"),t.qZA(),t.TgZ(10,"span",7),t._uU(11,"To share food through food."),t.qZA(),t.TgZ(12,"span",8),t._uU(13,"Screenshot of lya Food About Us page featuring bright colors and ingredients"),t.qZA()()()())},dependencies:[u.M],styles:[".about-container[_ngcontent-%COMP%]   .about-main[_ngcontent-%COMP%]   .about-main-image[_ngcontent-%COMP%]{position:relative}.about-container[_ngcontent-%COMP%]   .about-main[_ngcontent-%COMP%]   .about-main-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:500px}.about-container[_ngcontent-%COMP%]   .about-main[_ngcontent-%COMP%]   .about-main-image[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]{position:absolute;font-size:50px;font-weight:600;left:322px;top:52px;color:#fff}.about-container[_ngcontent-%COMP%]   .about-main[_ngcontent-%COMP%]   .about-main-content[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:20px;align-items:center}.about-container[_ngcontent-%COMP%]   .about-main[_ngcontent-%COMP%]   .about-main-content[_ngcontent-%COMP%]   .text-1[_ngcontent-%COMP%]{margin-top:10px;font-size:20px;font-weight:800;color:orange}.about-container[_ngcontent-%COMP%]   .about-main[_ngcontent-%COMP%]   .about-main-content[_ngcontent-%COMP%]   .text-2[_ngcontent-%COMP%]{font-weight:700}.about-container[_ngcontent-%COMP%]   .about-main[_ngcontent-%COMP%]   .about-main-content[_ngcontent-%COMP%]   .text-3[_ngcontent-%COMP%]{margin-top:-10px;font-size:25px}"]})}return o})()}];let b=(()=>{class o{static#t=this.\u0275fac=function(e){return new(e||o)};static#n=this.\u0275mod=t.oAB({type:o});static#e=this.\u0275inj=t.cJS({imports:[s.Bz.forChild(x),s.Bz]})}return o})();var k=i(2327);let Z=(()=>{class o{static#t=this.\u0275fac=function(e){return new(e||o)};static#n=this.\u0275mod=t.oAB({type:o,bootstrap:[f]});static#e=this.\u0275inj=t.cJS({imports:[p.ez,a.u5,k.$,b]})}return o})()}}]);