"use strict";(self.webpackChunkfuse=self.webpackChunkfuse||[]).push([[2792],{72792:(T,c,o)=>{o.r(c),o.d(c,{AuthSignOutModule:()=>y});var s=o(91553),a=o(90086),r=o(79736),m=o(51382),g=o(50273),d=o(89417),h=o(423),f=o(15406),v=o(86263),x=o(77384),t=o(83668),p=o(67919),l=o(86019);function A(n,i){if(1&n&&(t.ynx(0),t._uU(1),t.ALo(2,"i18nPlural"),t.BQk()),2&n){const e=t.oxw();t.xp6(1),t.hij(" Redirecting in ",t.xi3(2,1,e.countdown,e.countdownMapping)," ")}}function S(n,i){1&n&&(t.ynx(0),t._uU(1," You are now being redirected! "),t.BQk())}const Z=function(){return["/sign-in"]},O=[{path:"",component:(()=>{class n{constructor(e,u){this._authService=e,this._router=u,this.countdown=5,this.countdownMapping={"=1":"# second",other:"# seconds"},this._unsubscribeAll=new g.x}ngOnInit(){this._authService.signOut(),localStorage.removeItem("uid"),localStorage.removeItem("role"),(0,d.H)(1e3,1e3).pipe((0,h.x)(()=>{this._router.navigate(["sign-in"])}),(0,f.o)(()=>this.countdown>0),(0,v.R)(this._unsubscribeAll),(0,x.b)(()=>this.countdown--)).subscribe()}ngOnDestroy(){this._unsubscribeAll.next(null),this._unsubscribeAll.complete()}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(p.e),t.Y36(s.F0))},n.\u0275cmp=t.Xpm({type:n,selectors:[["auth-sign-out"]],decls:15,vars:4,consts:[[1,"flex","flex-col","flex-auto","items-center","sm:justify-center","min-w-0"],[1,"w-full","sm:w-auto","py-8","px-4","sm:p-12","sm:rounded-2xl","sm:shadow","sm:bg-card"],[1,"w-full","max-w-80","sm:w-80","mx-auto","sm:mx-0"],[1,"w-12","mx-auto"],["src","assets/images/logo/logo.svg"],[1,"mt-8","text-4xl","font-extrabold","tracking-tight","leading-tight","text-center"],[1,"flex","justify-center","mt-0.5","font-medium"],[4,"ngIf"],[1,"mt-8","text-md","font-medium","text-secondary","text-center"],[1,"ml-1","text-primary-500","hover:underline",3,"routerLink"]],template:function(e,u){1&e&&(t.TgZ(0,"div",0),t.TgZ(1,"div",1),t.TgZ(2,"div",2),t.TgZ(3,"div",3),t._UZ(4,"img",4),t.qZA(),t.TgZ(5,"div",5),t._uU(6,"You have signed out!"),t.qZA(),t.TgZ(7,"div",6),t.YNc(8,A,3,4,"ng-container",7),t.YNc(9,S,2,0,"ng-container",7),t.qZA(),t.TgZ(10,"div",8),t.TgZ(11,"span"),t._uU(12,"Go to"),t.qZA(),t.TgZ(13,"a",9),t._uU(14,"sign in "),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA()),2&e&&(t.xp6(8),t.Q6J("ngIf",u.countdown>0),t.xp6(1),t.Q6J("ngIf",0===u.countdown),t.xp6(4),t.Q6J("routerLink",t.DdM(3,Z)))},directives:[l.O5,s.yS],pipes:[l.Gx],encapsulation:2}),n})()}];let y=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[[s.Bz.forChild(O),a.ot,r.J,m.m]]}),n})()}}]);