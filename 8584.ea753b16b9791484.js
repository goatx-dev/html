"use strict";(self.webpackChunkfuse=self.webpackChunkfuse||[]).push([[8584],{18584:(Ae,v,i)=>{i.r(v),i.d(v,{AcademyModule:()=>Ze});var g=i(91553),_=i(90086),x=i(28167),y=i(59112),Z=i(74383),h=i(89009),A=i(16400),d=i(7891),T=i(50514),b=i(87444),J=i(87833),U=i(51382),e=i(83668);let I=(()=>{class n{constructor(){}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["academy"]],decls:1,vars:0,template:function(t,o){1&t&&e._UZ(0,"router-outlet")},directives:[g.lC],encapsulation:2,changeDetection:0}),n})();var u=i(54499),C=i(50273),m=i(86263),B=i(65804),k=i(77384),L=i(54753),F=i(83067),w=i(9433),D=i(82997),N=i(44522);let p=(()=>{class n{constructor(t){this._httpClient=t,this._categories=new u.X(null),this._course=new u.X(null),this._courses=new u.X(null)}get categories$(){return this._categories.asObservable()}get courses$(){return this._courses.asObservable()}get course$(){return this._course.asObservable()}getCategories(){return this._httpClient.get("api/apps/academy/categories").pipe((0,k.b)(t=>{this._categories.next(t)}))}getCourses(){return this._httpClient.get("api/apps/academy/courses").pipe((0,k.b)(t=>{this._courses.next(t)}))}getCourseById(t){return this._httpClient.get("api/apps/academy/courses/course",{params:{id:t}}).pipe((0,L.U)(o=>(this._course.next(o),o)),(0,F.w)(o=>o?(0,D.of)(o):(0,w._)("Could not found course with id of "+t+"!")))}}return n.\u0275fac=function(t){return new(t||n)(e.LFG(N.eN))},n.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();var Q=i(97226),Y=i(6731),a=i(86019),S=i(70152);function O(n,r){if(1&n&&(e.ynx(0),e.TgZ(1,"mat-option",15),e._uU(2),e.qZA(),e.BQk()),2&n){const t=r.$implicit;e.xp6(1),e.Q6J("value",t.slug),e.xp6(1),e.Oqu(t.title)}}const R=function(n,r,t,o){return{"text-blue-800 bg-blue-100 dark:text-blue-50 dark:bg-blue-500":n,"text-green-800 bg-green-100 dark:text-green-50 dark:bg-green-500":r,"text-pink-800 bg-pink-100 dark:text-pink-50 dark:bg-pink-500":t,"text-amber-800 bg-amber-100 dark:text-amber-50 dark:bg-amber-500":o}};function M(n,r){if(1&n&&(e.ynx(0),e.TgZ(1,"div",45),e._uU(2),e.qZA(),e.BQk()),2&n){const t=r.ngIf;e.xp6(1),e.Q6J("ngClass",e.l5B(2,R,"web"===t.slug,"android"===t.slug,"cloud"===t.slug,"firebase"===t.slug)),e.xp6(1),e.hij(" ",t.title," ")}}function $(n,r){1&n&&(e.ynx(0),e._UZ(1,"mat-icon",46),e.BQk()),2&n&&(e.xp6(1),e.Q6J("svgIcon","heroicons_solid:badge-check")("matTooltip","You completed this course at least once"))}function j(n,r){1&n&&(e.ynx(0),e.TgZ(1,"div",35),e._uU(2,"Never completed"),e.qZA(),e.BQk())}function E(n,r){1&n&&(e.ynx(0),e._uU(1,"once"),e.BQk())}function z(n,r){1&n&&(e.ynx(0),e._uU(1,"twice"),e.BQk())}const P=function(){return{"=0":"time","=1":"time",other:"times"}};function H(n,r){if(1&n&&(e.ynx(0),e._uU(1),e.ALo(2,"i18nPlural"),e.BQk()),2&n){const t=e.oxw(2).$implicit;e.xp6(1),e.AsE("",t.progress.completed," ",e.xi3(2,2,t.progress.completed,e.DdM(5,P))," ")}}function W(n,r){if(1&n&&(e.ynx(0),e.TgZ(1,"div",35),e.TgZ(2,"span"),e._uU(3,"Completed"),e.qZA(),e.TgZ(4,"span",47),e.YNc(5,E,2,0,"ng-container",28),e.YNc(6,z,2,0,"ng-container",28),e.YNc(7,H,3,6,"ng-container",28),e.qZA(),e.qZA(),e.BQk()),2&n){const t=e.oxw().$implicit;e.xp6(5),e.Q6J("ngIf",1===t.progress.completed),e.xp6(1),e.Q6J("ngIf",2===t.progress.completed),e.xp6(1),e.Q6J("ngIf",t.progress.completed>2)}}function X(n,r){1&n&&(e.ynx(0),e.TgZ(1,"span"),e._uU(2,"Start"),e.qZA(),e.BQk())}function G(n,r){1&n&&(e.ynx(0),e.TgZ(1,"span"),e._uU(2,"Start again"),e.qZA(),e.BQk())}function K(n,r){if(1&n&&(e.ynx(0),e.YNc(1,X,3,0,"ng-container",28),e.YNc(2,G,3,0,"ng-container",28),e.BQk()),2&n){const t=e.oxw().$implicit;e.xp6(1),e.Q6J("ngIf",0===t.progress.completed),e.xp6(1),e.Q6J("ngIf",t.progress.completed>0)}}function V(n,r){1&n&&(e.ynx(0),e.TgZ(1,"span"),e._uU(2,"Continue"),e.qZA(),e.BQk())}const ee=function(n){return[n]};function te(n,r){if(1&n&&(e.ynx(0),e.TgZ(1,"div",25),e.TgZ(2,"div",26),e.TgZ(3,"div",27),e.YNc(4,M,3,7,"ng-container",28),e.ALo(5,"fuseFindByKey"),e.TgZ(6,"div",29),e.YNc(7,$,2,2,"ng-container",28),e.qZA(),e.qZA(),e.TgZ(8,"div",30),e._uU(9),e.qZA(),e.TgZ(10,"div",31),e._uU(11),e.qZA(),e._UZ(12,"div",32),e.TgZ(13,"div",33),e._UZ(14,"mat-icon",34),e.TgZ(15,"div",35),e._uU(16),e.qZA(),e.qZA(),e.TgZ(17,"div",36),e._UZ(18,"mat-icon",34),e.YNc(19,j,3,0,"ng-container",28),e.YNc(20,W,8,3,"ng-container",28),e.qZA(),e.qZA(),e.TgZ(21,"div",37),e.TgZ(22,"div",38),e._UZ(23,"div",39),e.ALo(24,"percent"),e._UZ(25,"mat-progress-bar",40),e.qZA(),e.TgZ(26,"div",41),e.TgZ(27,"button",42),e.TgZ(28,"span",43),e.YNc(29,K,3,2,"ng-container",28),e.YNc(30,V,3,0,"ng-container",28),e._UZ(31,"mat-icon",44),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.BQk()),2&n){const t=r.$implicit,o=e.oxw(2);e.xp6(4),e.Q6J("ngIf",e.Dn7(5,17,t.category,"slug",o.categories)),e.xp6(3),e.Q6J("ngIf",t.progress.completed>0),e.xp6(2),e.Oqu(t.title),e.xp6(2),e.Oqu(t.description),e.xp6(3),e.Q6J("svgIcon","heroicons_solid:clock"),e.xp6(2),e.hij("",t.duration," minutes"),e.xp6(2),e.Q6J("svgIcon","heroicons_solid:academic-cap"),e.xp6(1),e.Q6J("ngIf",0===t.progress.completed),e.xp6(1),e.Q6J("ngIf",t.progress.completed>0),e.xp6(3),e.Q6J("matTooltip",e.lcZ(24,21,t.progress.currentStep/t.totalSteps))("matTooltipPosition","above")("matTooltipClass","-mb-0.5"),e.xp6(2),e.Q6J("value",100*t.progress.currentStep/t.totalSteps),e.xp6(2),e.Q6J("routerLink",e.VKq(23,ee,t.id)),e.xp6(2),e.Q6J("ngIf",0===t.progress.currentStep),e.xp6(1),e.Q6J("ngIf",t.progress.currentStep>0),e.xp6(1),e.Q6J("svgIcon","heroicons_solid:arrow-sm-right")}}function ne(n,r){if(1&n&&(e.ynx(0),e.TgZ(1,"div",24),e.YNc(2,te,32,25,"ng-container",16),e.qZA(),e.BQk()),2&n){const t=e.oxw();e.xp6(2),e.Q6J("ngForOf",t.filteredCourses)("ngForTrackBy",t.trackByFn)}}function oe(n,r){1&n&&(e.TgZ(0,"div",48),e._UZ(1,"mat-icon",49),e.TgZ(2,"div",50),e._uU(3,"No courses found!"),e.qZA(),e.qZA()),2&n&&(e.xp6(1),e.Q6J("svgIcon","iconsmind:file_search"))}let re=(()=>{class n{constructor(t,o,s,c){this._activatedRoute=t,this._changeDetectorRef=o,this._router=s,this._academyService=c,this.filters={categorySlug$:new u.X("all"),query$:new u.X(""),hideCompleted$:new u.X(!1)},this._unsubscribeAll=new C.x}ngOnInit(){this._academyService.categories$.pipe((0,m.R)(this._unsubscribeAll)).subscribe(t=>{this.categories=t,this._changeDetectorRef.markForCheck()}),this._academyService.courses$.pipe((0,m.R)(this._unsubscribeAll)).subscribe(t=>{this.courses=this.filteredCourses=t,this._changeDetectorRef.markForCheck()}),(0,B.a)([this.filters.categorySlug$,this.filters.query$,this.filters.hideCompleted$]).subscribe(([t,o,s])=>{this.filteredCourses=this.courses,"all"!==t&&(this.filteredCourses=this.filteredCourses.filter(c=>c.category===t)),""!==o&&(this.filteredCourses=this.filteredCourses.filter(c=>c.title.toLowerCase().includes(o.toLowerCase())||c.description.toLowerCase().includes(o.toLowerCase())||c.category.toLowerCase().includes(o.toLowerCase()))),s&&(this.filteredCourses=this.filteredCourses.filter(c=>0===c.progress.completed))})}ngOnDestroy(){this._unsubscribeAll.next(null),this._unsubscribeAll.complete()}filterByQuery(t){this.filters.query$.next(t)}filterByCategory(t){this.filters.categorySlug$.next(t.value)}toggleCompleted(t){this.filters.hideCompleted$.next(t.checked)}trackByFn(t,o){return o.id||t}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(g.gz),e.Y36(e.sBO),e.Y36(g.F0),e.Y36(p))},n.\u0275cmp=e.Xpm({type:n,selectors:[["academy-list"]],decls:30,vars:9,consts:[["cdkScrollable","",1,"absolute","inset-0","flex","flex-col","min-w-0","overflow-y-auto"],[1,"relative","flex-0","py-8","px-4","sm:p-16","overflow-hidden","bg-gray-800","dark"],["viewBox","0 0 960 540","width","100%","height","100%","preserveAspectRatio","xMidYMax slice","xmlns","http://www.w3.org/2000/svg",1,"absolute","inset-0","pointer-events-none"],["fill","none","stroke","currentColor","stroke-width","100",1,"text-gray-700","opacity-25"],["r","234","cx","196","cy","23"],["r","234","cx","790","cy","491"],[1,"z-10","relative","flex","flex-col","items-center"],[1,"text-xl","font-semibold"],[1,"mt-1","text-4xl","sm:text-7xl","font-extrabold","tracking-tight","leading-tight","text-center"],[1,"max-w-2xl","mt-6","sm:text-2xl","text-center","tracking-tight","text-secondary"],[1,"flex","flex-auto","p-6","sm:p-10"],[1,"flex","flex-col","flex-auto","w-full","max-w-xs","sm:max-w-5xl","mx-auto"],[1,"flex","flex-col","sm:flex-row","items-center","justify-between","w-full","max-w-xs","sm:max-w-none"],[1,"fuse-mat-no-subscript","w-full","sm:w-36"],[3,"value","selectionChange"],[3,"value"],[4,"ngFor","ngForOf","ngForTrackBy"],[1,"fuse-mat-no-subscript","w-full","sm:w-72","mt-4","sm:mt-0","sm:ml-4",3,"floatLabel"],["matPrefix","",1,"icon-size-5",3,"svgIcon"],["placeholder","Search by title or description","matInput","",3,"input"],["query",""],[1,"mt-8","sm:mt-0","sm:ml-auto",3,"color","change"],[4,"ngIf","ngIfElse"],["noCourses",""],[1,"grid","grid-cols-1","sm:grid-cols-2","lg:grid-cols-3","gap-8","mt-8","sm:mt-10"],[1,"flex","flex-col","h-96","shadow","rounded-2xl","overflow-hidden","bg-card"],[1,"flex","flex-col","p-6"],[1,"flex","items-center","justify-between"],[4,"ngIf"],[1,"flex","items-center"],[1,"mt-4","text-lg","font-medium"],[1,"mt-0.5","line-clamp-2","text-secondary"],[1,"w-12","h-1","my-6","border-t-2"],[1,"flex","items-center","leading-5","text-md","text-secondary"],[1,"icon-size-5","text-hint",3,"svgIcon"],[1,"ml-1.5"],[1,"flex","items-center","mt-2","leading-5","text-md","text-secondary"],[1,"flex","flex-col","w-full","mt-auto"],[1,"relative","h-0.5"],[1,"z-10","absolute","inset-x-0","h-6","-mt-3",3,"matTooltip","matTooltipPosition","matTooltipClass"],[1,"h-0.5",3,"value"],[1,"px-6","py-4","text-right","bg-gray-50","dark:bg-transparent"],["mat-stroked-button","",3,"routerLink"],[1,"inline-flex","items-center"],[1,"ml-1.5","icon-size-5",3,"svgIcon"],[1,"py-0.5","px-3","rounded-full","text-sm","font-semibold",3,"ngClass"],[1,"icon-size-5","text-green-600",3,"svgIcon","matTooltip"],[1,"ml-1"],[1,"flex","flex-auto","flex-col","items-center","justify-center","bg-gray-100","dark:bg-transparent"],[1,"icon-size-20",3,"svgIcon"],[1,"mt-6","text-2xl","font-semibold","tracking-tight","text-secondary"]],template:function(t,o){if(1&t){const s=e.EpF();e.TgZ(0,"div",0),e.TgZ(1,"div",1),e.O4$(),e.TgZ(2,"svg",2),e.TgZ(3,"g",3),e._UZ(4,"circle",4),e._UZ(5,"circle",5),e.qZA(),e.qZA(),e.kcU(),e.TgZ(6,"div",6),e.TgZ(7,"h2",7),e._uU(8,"FUSE ACADEMY"),e.qZA(),e.TgZ(9,"div",8),e._uU(10," What do you want to learn today? "),e.qZA(),e.TgZ(11,"div",9),e._uU(12," Our courses will step you through the process of a building small applications, or adding new features to existing applications. "),e.qZA(),e.qZA(),e.qZA(),e.TgZ(13,"div",10),e.TgZ(14,"div",11),e.TgZ(15,"div",12),e.TgZ(16,"mat-form-field",13),e.TgZ(17,"mat-select",14),e.NdJ("selectionChange",function(l){return o.filterByCategory(l)}),e.TgZ(18,"mat-option",15),e._uU(19,"All"),e.qZA(),e.YNc(20,O,3,2,"ng-container",16),e.qZA(),e.qZA(),e.TgZ(21,"mat-form-field",17),e._UZ(22,"mat-icon",18),e.TgZ(23,"input",19,20),e.NdJ("input",function(){e.CHM(s);const l=e.MAs(24);return o.filterByQuery(l.value)}),e.qZA(),e.qZA(),e.TgZ(25,"mat-slide-toggle",21),e.NdJ("change",function(l){return o.toggleCompleted(l)}),e._uU(26," Hide completed "),e.qZA(),e.qZA(),e.YNc(27,ne,3,2,"ng-container",22),e.YNc(28,oe,4,1,"ng-template",null,23,e.W1O),e.qZA(),e.qZA(),e.qZA()}if(2&t){const s=e.MAs(29);e.xp6(17),e.Q6J("value","all"),e.xp6(1),e.Q6J("value","all"),e.xp6(2),e.Q6J("ngForOf",o.categories)("ngForTrackBy",o.trackByFn),e.xp6(1),e.Q6J("floatLabel","always"),e.xp6(1),e.Q6J("svgIcon","heroicons_solid:search"),e.xp6(3),e.Q6J("color","primary"),e.xp6(2),e.Q6J("ngIf",o.filteredCourses.length)("ngIfElse",s)}},directives:[Q.PQ,x.KE,A.gD,Y.ey,a.sg,y.Hw,x.qo,Z.Nt,T.Rr,a.O5,b.gM,h.pW,_.lW,g.rH,a.mk],pipes:[S.K,a.Zx,a.Gx],encapsulation:2,changeDetection:0}),n})();var ie=i(60287),f=i(12605);const se=["courseSteps"],ce=function(n,r,t,o){return{"text-blue-800 bg-blue-100 dark:text-blue-50 dark:bg-blue-500":n,"text-green-800 bg-green-100 dark:text-green-50 dark:bg-green-500":r,"text-pink-800 bg-pink-100 dark:text-pink-50 dark:bg-pink-500":t,"text-amber-800 bg-amber-100 dark:text-amber-50 dark:bg-amber-500":o}};function ae(n,r){if(1&n&&(e.ynx(0),e.TgZ(1,"div",41),e._uU(2),e.qZA(),e.BQk()),2&n){const t=r.ngIf;e.xp6(1),e.Q6J("ngClass",e.l5B(2,ce,"web"===t.slug,"android"===t.slug,"cloud"===t.slug,"firebase"===t.slug)),e.xp6(1),e.hij(" ",t.title," ")}}const le=function(n,r){return{"bg-primary":n,"bg-gray-300 dark:bg-gray-600":r}};function ge(n,r){if(1&n&&(e.ynx(0),e._UZ(1,"div",48),e.BQk()),2&n){const t=e.oxw().$implicit,o=e.oxw();e.xp6(1),e.Q6J("ngClass",e.WLB(1,le,t.order<o.currentStep,t.order>=o.currentStep))}}function ue(n,r){1&n&&(e.ynx(0),e._UZ(1,"mat-icon",7),e.BQk()),2&n&&(e.xp6(1),e.Q6J("svgIcon","heroicons_solid:check"))}function me(n,r){if(1&n&&(e.ynx(0),e.TgZ(1,"div",49),e._uU(2),e.qZA(),e.BQk()),2&n){const t=e.oxw().$implicit;e.xp6(2),e.Oqu(t.order+1)}}function pe(n,r){if(1&n&&(e.ynx(0),e.TgZ(1,"div",50),e._uU(2),e.qZA(),e.BQk()),2&n){const t=e.oxw().$implicit;e.xp6(2),e.Oqu(t.order+1)}}const de=function(n,r,t){return{"bg-primary dark:bg-primary text-on-primary group-hover:bg-primary-800":n,"ring-primary":r,"ring-gray-300 dark:ring-gray-600 group-hover:ring-gray-400":t}};function fe(n,r){if(1&n){const t=e.EpF();e.ynx(0),e.TgZ(1,"li",42),e.YNc(2,ge,2,4,"ng-container",9),e.TgZ(3,"div",43),e.NdJ("click",function(){const c=e.CHM(t).$implicit;return e.oxw().goToStep(c.order)}),e.TgZ(4,"div",44),e.YNc(5,ue,2,1,"ng-container",9),e.YNc(6,me,3,1,"ng-container",9),e.YNc(7,pe,3,1,"ng-container",9),e.qZA(),e.TgZ(8,"div",45),e.TgZ(9,"div",46),e._uU(10),e.qZA(),e.TgZ(11,"div",47),e._uU(12),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.BQk()}if(2&n){const t=r.$implicit,o=r.last,s=e.oxw();e.xp6(1),e.ekj("current-step",t.order===s.currentStep),e.xp6(1),e.Q6J("ngIf",!o),e.xp6(2),e.Q6J("ngClass",e.kEZ(9,de,t.order<s.currentStep,t.order===s.currentStep,t.order>s.currentStep)),e.xp6(1),e.Q6J("ngIf",t.order<s.currentStep),e.xp6(1),e.Q6J("ngIf",t.order===s.currentStep),e.xp6(1),e.Q6J("ngIf",t.order>s.currentStep),e.xp6(3),e.Oqu(t.title),e.xp6(2),e.Oqu(t.subtitle)}}function _e(n,r){if(1&n&&e._UZ(0,"div",52),2&n){const t=e.oxw().$implicit;e.Q6J("innerHTML",t.content,e.oJD)}}function xe(n,r){1&n&&(e.ynx(0),e.TgZ(1,"mat-tab"),e.YNc(2,_e,1,1,"ng-template",51),e.qZA(),e.BQk())}const q=function(){return[".."]};let ye=(()=>{class n{constructor(t,o,s,c,l){this._document=t,this._academyService=o,this._changeDetectorRef=s,this._elementRef=c,this._fuseMediaWatcherService=l,this.currentStep=0,this.drawerMode="side",this.drawerOpened=!0,this._unsubscribeAll=new C.x}ngOnInit(){this._academyService.categories$.pipe((0,m.R)(this._unsubscribeAll)).subscribe(t=>{this.categories=t,this._changeDetectorRef.markForCheck()}),this._academyService.course$.pipe((0,m.R)(this._unsubscribeAll)).subscribe(t=>{this.course=t,this.goToStep(t.progress.currentStep),this._changeDetectorRef.markForCheck()}),this._fuseMediaWatcherService.onMediaChange$.pipe((0,m.R)(this._unsubscribeAll)).subscribe(({matchingAliases:t})=>{t.includes("lg")?(this.drawerMode="side",this.drawerOpened=!0):(this.drawerMode="over",this.drawerOpened=!1),this._changeDetectorRef.markForCheck()})}ngOnDestroy(){this._unsubscribeAll.next(null),this._unsubscribeAll.complete()}goToStep(t){this.currentStep=t,this.courseSteps.selectedIndex=this.currentStep,this._changeDetectorRef.markForCheck()}goToPreviousStep(){0!==this.currentStep&&(this.goToStep(this.currentStep-1),this._scrollCurrentStepElementIntoView())}goToNextStep(){this.currentStep!==this.course.totalSteps-1&&(this.goToStep(this.currentStep+1),this._scrollCurrentStepElementIntoView())}trackByFn(t,o){return o.id||t}_scrollCurrentStepElementIntoView(){setTimeout(()=>{const t=this._document.getElementsByClassName("current-step")[0];t&&t.scrollIntoView({behavior:"smooth",block:"start"})})}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(a.K0),e.Y36(p),e.Y36(e.sBO),e.Y36(e.SBq),e.Y36(ie.T))},n.\u0275cmp=e.Xpm({type:n,selectors:[["academy-details"]],viewQuery:function(t,o){if(1&t&&e.Gf(se,7),2&t){let s;e.iGM(s=e.CRH())&&(o.courseSteps=s.first)}},decls:66,vars:37,consts:[[1,"absolute","inset-0","flex","flex-col","min-w-0","overflow-hidden"],[1,"flex-auto","h-full"],[1,"w-90","dark:bg-gray-900",3,"autoFocus","mode","opened"],["matDrawer",""],[1,"flex","flex-col","items-start","p-8","border-b"],[1,"inline-flex","items-center","leading-6","text-primary","hover:underline",3,"routerLink"],[1,"inline-flex","items-center"],[1,"icon-size-5","text-current",3,"svgIcon"],[1,"ml-1.5","font-medium","leading-5"],[4,"ngIf"],[1,"mt-3","text-2xl","font-semibold"],[1,"text-secondary"],[1,"mt-6","flex","items-center","leading-5","text-md","text-secondary"],[1,"icon-size-5","text-hint",3,"svgIcon"],[1,"ml-1.5"],[1,"py-2","px-8"],[4,"ngFor","ngForOf","ngForTrackBy"],[1,"flex","flex-col","overflow-hidden"],[1,"lg:hidden","flex","flex-0","items-center","py-2","pl-4","pr-6","sm:py-4","md:pl-6","md:pr-8","border-b","lg:border-b-0","bg-card","dark:bg-transparent"],["mat-icon-button","",3,"routerLink"],[3,"svgIcon"],[1,"ml-2.5","text-md","sm:text-xl","font-medium","tracking-tight","truncate"],[1,"hidden","lg:block","flex-0","h-0.5","w-full",3,"value"],["cdkScrollable","",1,"flex-auto","overflow-y-auto"],[1,"fuse-mat-no-header",3,"animationDuration"],["courseSteps",""],[1,"z-10","sticky","hidden","lg:flex","bottom-4","p-4"],[1,"flex","items-center","justify-center","mx-auto","p-2","rounded-full","shadow-lg","bg-primary"],["mat-flat-button","",1,"flex-0",3,"color","click"],[1,"mr-2",3,"svgIcon"],[1,"mr-1"],[1,"flex","items-center","justify-center","mx-2.5","font-medium","leading-5","text-on-primary"],[1,"mx-0.5","text-hint"],[1,"ml-1"],[1,"ml-2",3,"svgIcon"],[1,"lg:hidden","flex","items-center","p-4","border-t","bg-card"],["mat-icon-button","",3,"click"],[1,"flex","items-center","justify-center","ml-1","lg:ml-2","font-medium","leading-5"],[1,"flex-auto","ml-6","rounded-full",3,"value"],["mat-icon-button","",1,"ml-4",3,"click"],["mat-icon-button","",1,"ml-0.5",3,"click"],[1,"mt-7","py-0.5","px-3","rounded-full","text-sm","font-semibold",3,"ngClass"],[1,"relative","group","py-6"],[1,"relative","flex","items-start","cursor-pointer",3,"click"],[1,"flex","flex-0","items-center","justify-center","w-8","h-8","rounded-full","ring-2","ring-inset","ring-transparent","bg-card","dark:bg-default",3,"ngClass"],[1,"ml-4"],[1,"font-medium","leading-4"],[1,"mt-1.5","text-md","leading-4","text-secondary"],[1,"absolute","top-6","left-4","w-0.5","h-full","-ml-px",3,"ngClass"],[1,"text-md","font-semibold","text-primary","dark:text-primary-500"],[1,"text-md","font-semibold","text-hint","group-hover:text-secondary"],["matTabContent",""],[1,"prose","prose-sm","max-w-3xl","mx-auto","sm:my-2","lg:mt-4","p-6","sm:p-10","sm:py-12","rounded-2xl","shadow","overflow-hidden","bg-card",3,"innerHTML"]],template:function(t,o){if(1&t){const s=e.EpF();e.TgZ(0,"div",0),e.TgZ(1,"mat-drawer-container",1),e.TgZ(2,"mat-drawer",2,3),e.TgZ(4,"div",4),e.TgZ(5,"a",5),e.TgZ(6,"span",6),e._UZ(7,"mat-icon",7),e.TgZ(8,"span",8),e._uU(9,"Back to courses"),e.qZA(),e.qZA(),e.qZA(),e.YNc(10,ae,3,7,"ng-container",9),e.ALo(11,"fuseFindByKey"),e.TgZ(12,"div",10),e._uU(13),e.qZA(),e.TgZ(14,"div",11),e._uU(15),e.qZA(),e.TgZ(16,"div",12),e._UZ(17,"mat-icon",13),e.TgZ(18,"div",14),e._uU(19),e.qZA(),e.qZA(),e.qZA(),e.TgZ(20,"div",15),e.TgZ(21,"ol"),e.YNc(22,fe,13,13,"ng-container",16),e.qZA(),e.qZA(),e.qZA(),e.TgZ(23,"mat-drawer-content",17),e.TgZ(24,"div",18),e.TgZ(25,"button",19),e._UZ(26,"mat-icon",20),e.qZA(),e.TgZ(27,"h2",21),e._uU(28),e.qZA(),e.qZA(),e._UZ(29,"mat-progress-bar",22),e.TgZ(30,"div",23),e.TgZ(31,"mat-tab-group",24,25),e.YNc(33,xe,3,0,"ng-container",16),e.qZA(),e.TgZ(34,"div",26),e.TgZ(35,"div",27),e.TgZ(36,"button",28),e.NdJ("click",function(){return o.goToPreviousStep()}),e._UZ(37,"mat-icon",29),e.TgZ(38,"span",30),e._uU(39,"Prev"),e.qZA(),e.qZA(),e.TgZ(40,"div",31),e.TgZ(41,"span"),e._uU(42),e.qZA(),e.TgZ(43,"span",32),e._uU(44,"/"),e.qZA(),e.TgZ(45,"span"),e._uU(46),e.qZA(),e.qZA(),e.TgZ(47,"button",28),e.NdJ("click",function(){return o.goToNextStep()}),e.TgZ(48,"span",33),e._uU(49,"Next"),e.qZA(),e._UZ(50,"mat-icon",34),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.TgZ(51,"div",35),e.TgZ(52,"button",36),e.NdJ("click",function(){return e.CHM(s),e.MAs(3).toggle()}),e._UZ(53,"mat-icon",20),e.qZA(),e.TgZ(54,"div",37),e.TgZ(55,"span"),e._uU(56),e.qZA(),e.TgZ(57,"span",32),e._uU(58,"/"),e.qZA(),e.TgZ(59,"span"),e._uU(60),e.qZA(),e.qZA(),e._UZ(61,"mat-progress-bar",38),e.TgZ(62,"button",39),e.NdJ("click",function(){return o.goToPreviousStep()}),e._UZ(63,"mat-icon",20),e.qZA(),e.TgZ(64,"button",40),e.NdJ("click",function(){return o.goToNextStep()}),e._UZ(65,"mat-icon",20),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA()}2&t&&(e.xp6(2),e.Q6J("autoFocus",!1)("mode",o.drawerMode)("opened",o.drawerOpened),e.xp6(3),e.Q6J("routerLink",e.DdM(35,q)),e.xp6(2),e.Q6J("svgIcon","heroicons_solid:arrow-sm-left"),e.xp6(3),e.Q6J("ngIf",e.Dn7(11,31,o.course.category,"slug",o.categories)),e.xp6(3),e.Oqu(o.course.title),e.xp6(2),e.Oqu(o.course.description),e.xp6(2),e.Q6J("svgIcon","heroicons_solid:clock"),e.xp6(2),e.hij("",o.course.duration," minutes"),e.xp6(3),e.Q6J("ngForOf",o.course.steps)("ngForTrackBy",o.trackByFn),e.xp6(3),e.Q6J("routerLink",e.DdM(36,q)),e.xp6(1),e.Q6J("svgIcon","heroicons_outline:arrow-sm-left"),e.xp6(2),e.hij(" ",o.course.title," "),e.xp6(1),e.Q6J("value",100*(o.currentStep+1)/o.course.totalSteps),e.xp6(2),e.Q6J("animationDuration","200"),e.xp6(2),e.Q6J("ngForOf",o.course.steps)("ngForTrackBy",o.trackByFn),e.xp6(3),e.Q6J("color","primary"),e.xp6(1),e.Q6J("svgIcon","heroicons_outline:arrow-narrow-left"),e.xp6(5),e.Oqu(o.currentStep+1),e.xp6(4),e.Oqu(o.course.totalSteps),e.xp6(1),e.Q6J("color","primary"),e.xp6(3),e.Q6J("svgIcon","heroicons_outline:arrow-narrow-right"),e.xp6(3),e.Q6J("svgIcon","heroicons_outline:view-list"),e.xp6(3),e.Oqu(o.currentStep+1),e.xp6(4),e.Oqu(o.course.totalSteps),e.xp6(1),e.Q6J("value",100*(o.currentStep+1)/o.course.totalSteps),e.xp6(2),e.Q6J("svgIcon","heroicons_outline:arrow-narrow-left"),e.xp6(2),e.Q6J("svgIcon","heroicons_outline:arrow-narrow-right"))},directives:[d.kh,d.jA,g.yS,y.Hw,a.O5,a.sg,d.LW,_.lW,g.rH,h.pW,Q.PQ,f.SP,a.mk,f.uX,f.Vc],pipes:[S.K],encapsulation:2,changeDetection:0}),n})();var he=i(72835);const ve=[{path:"",component:I,resolve:{categories:(()=>{class n{constructor(t){this._academyService=t}resolve(t,o){return this._academyService.getCategories()}}return n.\u0275fac=function(t){return new(t||n)(e.LFG(p))},n.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})()},children:[{path:"",pathMatch:"full",component:re,resolve:{courses:(()=>{class n{constructor(t){this._academyService=t}resolve(t,o){return this._academyService.getCourses()}}return n.\u0275fac=function(t){return new(t||n)(e.LFG(p))},n.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})()}},{path:":id",component:ye,resolve:{course:(()=>{class n{constructor(t,o){this._router=t,this._academyService=o}resolve(t,o){return this._academyService.getCourseById(t.paramMap.get("id")).pipe((0,he.K)(s=>{console.error(s);const c=o.url.split("/").slice(0,-1).join("/");return this._router.navigateByUrl(c),(0,w._)(s)}))}}return n.\u0275fac=function(t){return new(t||n)(e.LFG(g.F0),e.LFG(p))},n.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})()}}]}];let Ze=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[[g.Bz.forChild(ve),_.ot,x.lN,y.Ps,Z.c,h.Cv,A.LD,d.SJ,T.rP,b.AV,J.V,U.m,f.Nh]]}),n})()}}]);