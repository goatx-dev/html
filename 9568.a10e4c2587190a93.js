"use strict";(self.webpackChunkfuse=self.webpackChunkfuse||[]).push([[9568],{69568:(ee,x,r)=>{r.r(x),r.d(x,{SettingsModule:()=>V});var A=r(91553),u=r(90086),s=r(28167),d=r(59112),p=r(74383),_=r(69859),Z=r(16400),v=r(50514),f=r(7891),q=r(95192),h=r(51382),y=r(50273),C=r(86263),e=r(83668),U=r(60287),g=r(86019),a=r(49133),b=r(52329),T=r(6731);let w=(()=>{class n{constructor(t){this._formBuilder=t}ngOnInit(){this.accountForm=this._formBuilder.group({name:["Brian Hughes"],username:["brianh"],title:["Senior Frontend Developer"],company:["YXZ Software"],about:["Hey! This is Brian; husband, father and gamer. I'm mostly passionate about bleeding edge tech and chocolate! \u{1f36b}"],email:["hughes.brian@mail.com",a.kI.email],phone:["121-490-33-12"],country:["usa"],language:["english"]})}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(a.qu))},n.\u0275cmp=e.Xpm({type:n,selectors:[["settings-account"]],decls:99,vars:30,consts:[[1,"w-full","max-w-3xl"],[3,"formGroup"],[1,"w-full"],[1,"text-xl"],[1,"text-secondary"],[1,"grid","sm:grid-cols-4","gap-6","w-full","mt-8"],[1,"sm:col-span-4"],[1,"fuse-mat-no-subscript","w-full"],["matPrefix","",1,"icon-size-5",3,"svgIcon"],["matInput","",3,"formControlName"],[1,"fuse-mat-no-subscript","fuse-mat-emphasized-affix","w-full"],["matPrefix","",1,"text-secondary"],[1,"sm:col-span-2"],[1,"fuse-mat-textarea","fuse-mat-no-subscript","w-full"],["matInput","","cdkTextareaAutosize","",3,"formControlName","cdkAutosizeMinRows"],[1,"mt-1","text-md","text-hint"],[1,"my-10","border-t"],[3,"formControlName"],[3,"value"],[1,"mt-11","mb-10","border-t"],[1,"flex","items-center","justify-end"],["mat-stroked-button","","type","button"],["mat-flat-button","","type","button",1,"ml-4",3,"color"]],template:function(t,o){1&t&&(e.TgZ(0,"div",0),e.TgZ(1,"form",1),e.TgZ(2,"div",2),e.TgZ(3,"div",3),e._uU(4,"Profile"),e.qZA(),e.TgZ(5,"div",4),e._uU(6,"Following information is publicly displayed, be careful!"),e.qZA(),e.qZA(),e.TgZ(7,"div",5),e.TgZ(8,"div",6),e.TgZ(9,"mat-form-field",7),e.TgZ(10,"mat-label"),e._uU(11,"Name"),e.qZA(),e._UZ(12,"mat-icon",8),e._UZ(13,"input",9),e.qZA(),e.qZA(),e.TgZ(14,"div",6),e.TgZ(15,"mat-form-field",10),e.TgZ(16,"mat-label"),e._uU(17,"Username"),e.qZA(),e.TgZ(18,"div",11),e._uU(19," fusetheme.com/ "),e.qZA(),e._UZ(20,"input",9),e.qZA(),e.qZA(),e.TgZ(21,"div",12),e.TgZ(22,"mat-form-field",7),e.TgZ(23,"mat-label"),e._uU(24,"Title"),e.qZA(),e._UZ(25,"mat-icon",8),e._UZ(26,"input",9),e.qZA(),e.qZA(),e.TgZ(27,"div",12),e.TgZ(28,"mat-form-field",7),e.TgZ(29,"mat-label"),e._uU(30,"Company"),e.qZA(),e._UZ(31,"mat-icon",8),e._UZ(32,"input",9),e.qZA(),e.qZA(),e.TgZ(33,"div",6),e.TgZ(34,"mat-form-field",13),e.TgZ(35,"mat-label"),e._uU(36,"About"),e.qZA(),e._UZ(37,"textarea",14),e.qZA(),e.TgZ(38,"div",15),e._uU(39,"Brief description for your profile. Basic HTML and Emoji are allowed."),e.qZA(),e.qZA(),e.qZA(),e._UZ(40,"div",16),e.TgZ(41,"div",2),e.TgZ(42,"div",3),e._uU(43,"Personal Information"),e.qZA(),e.TgZ(44,"div",4),e._uU(45,"Communication details in case we want to connect with you. These will be kept private."),e.qZA(),e.qZA(),e.TgZ(46,"div",5),e.TgZ(47,"div",12),e.TgZ(48,"mat-form-field",7),e.TgZ(49,"mat-label"),e._uU(50,"Email"),e.qZA(),e._UZ(51,"mat-icon",8),e._UZ(52,"input",9),e.qZA(),e.qZA(),e.TgZ(53,"div",12),e.TgZ(54,"mat-form-field",7),e.TgZ(55,"mat-label"),e._uU(56,"Phone"),e.qZA(),e._UZ(57,"mat-icon",8),e._UZ(58,"input",9),e.qZA(),e.qZA(),e.TgZ(59,"div",12),e.TgZ(60,"mat-form-field",7),e.TgZ(61,"mat-label"),e._uU(62,"Country"),e.qZA(),e._UZ(63,"mat-icon",8),e.TgZ(64,"mat-select",17),e.TgZ(65,"mat-option",18),e._uU(66,"United States"),e.qZA(),e.TgZ(67,"mat-option",18),e._uU(68,"Canada"),e.qZA(),e.TgZ(69,"mat-option",18),e._uU(70,"Mexico"),e.qZA(),e.TgZ(71,"mat-option",18),e._uU(72,"France"),e.qZA(),e.TgZ(73,"mat-option",18),e._uU(74,"Germany"),e.qZA(),e.TgZ(75,"mat-option",18),e._uU(76,"Italy"),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.TgZ(77,"div",12),e.TgZ(78,"mat-form-field",7),e.TgZ(79,"mat-label"),e._uU(80,"Language"),e.qZA(),e._UZ(81,"mat-icon",8),e.TgZ(82,"mat-select",17),e.TgZ(83,"mat-option",18),e._uU(84,"English"),e.qZA(),e.TgZ(85,"mat-option",18),e._uU(86,"French"),e.qZA(),e.TgZ(87,"mat-option",18),e._uU(88,"Spanish"),e.qZA(),e.TgZ(89,"mat-option",18),e._uU(90,"German"),e.qZA(),e.TgZ(91,"mat-option",18),e._uU(92,"Italian"),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e._UZ(93,"div",19),e.TgZ(94,"div",20),e.TgZ(95,"button",21),e._uU(96," Cancel "),e.qZA(),e.TgZ(97,"button",22),e._uU(98,"Save "),e.qZA(),e.qZA(),e.qZA(),e.qZA()),2&t&&(e.xp6(1),e.Q6J("formGroup",o.accountForm),e.xp6(11),e.Q6J("svgIcon","heroicons_solid:user"),e.xp6(1),e.Q6J("formControlName","name"),e.xp6(7),e.Q6J("formControlName","username"),e.xp6(5),e.Q6J("svgIcon","heroicons_solid:briefcase"),e.xp6(1),e.Q6J("formControlName","title"),e.xp6(5),e.Q6J("svgIcon","heroicons_solid:office-building"),e.xp6(1),e.Q6J("formControlName","company"),e.xp6(5),e.Q6J("formControlName","about")("cdkAutosizeMinRows",5),e.xp6(14),e.Q6J("svgIcon","heroicons_solid:mail"),e.xp6(1),e.Q6J("formControlName","email"),e.xp6(5),e.Q6J("svgIcon","heroicons_solid:phone"),e.xp6(1),e.Q6J("formControlName","phone"),e.xp6(5),e.Q6J("svgIcon","heroicons_solid:location-marker"),e.xp6(1),e.Q6J("formControlName","country"),e.xp6(1),e.Q6J("value","usa"),e.xp6(2),e.Q6J("value","canada"),e.xp6(2),e.Q6J("value","mexico"),e.xp6(2),e.Q6J("value","france"),e.xp6(2),e.Q6J("value","germany"),e.xp6(2),e.Q6J("value","italy"),e.xp6(6),e.Q6J("svgIcon","heroicons_solid:globe-alt"),e.xp6(1),e.Q6J("formControlName","language"),e.xp6(1),e.Q6J("value","english"),e.xp6(2),e.Q6J("value","french"),e.xp6(2),e.Q6J("value","spanish"),e.xp6(2),e.Q6J("value","german"),e.xp6(2),e.Q6J("value","italian"),e.xp6(6),e.Q6J("color","primary"))},directives:[a._Y,a.JL,a.sg,s.KE,s.hX,d.Hw,s.qo,p.Nt,a.Fj,a.JJ,a.u,b.IC,Z.gD,T.ey,u.lW],encapsulation:2,changeDetection:0}),n})(),J=(()=>{class n{constructor(t){this._formBuilder=t}ngOnInit(){this.securityForm=this._formBuilder.group({currentPassword:[""],newPassword:[""],twoStep:[!0],askPasswordChange:[!1]})}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(a.qu))},n.\u0275cmp=e.Xpm({type:n,selectors:[["settings-security"]],decls:51,vars:10,consts:[[1,"w-full","max-w-3xl"],[3,"formGroup"],[1,"w-full"],[1,"text-xl"],[1,"text-secondary"],[1,"grid","sm:grid-cols-4","gap-6","w-full","mt-8"],[1,"sm:col-span-4"],[1,"fuse-mat-no-subscript","w-full"],["matPrefix","",1,"icon-size-5",3,"svgIcon"],["type","password","matInput","",3,"formControlName"],[1,"mt-1","text-md","text-hint"],[1,"my-10","border-t"],[1,"sm:col-span-4","flex","items-center","justify-between"],[1,"flex-auto","cursor-pointer",3,"click"],[1,"leading-6","font-medium"],[1,"text-md","text-secondary"],[1,"ml-4",3,"color","formControlName"],["twoStepToggle",""],["askPasswordChangeToggle",""],[1,"flex","items-center","justify-end"],["mat-stroked-button","","type","button"],["mat-flat-button","","type","button",1,"ml-4",3,"color"]],template:function(t,o){if(1&t){const l=e.EpF();e.TgZ(0,"div",0),e.TgZ(1,"form",1),e.TgZ(2,"div",2),e.TgZ(3,"div",3),e._uU(4,"Change your password"),e.qZA(),e.TgZ(5,"div",4),e._uU(6,"You can only change your password twice within 24 hours!"),e.qZA(),e.qZA(),e.TgZ(7,"div",5),e.TgZ(8,"div",6),e.TgZ(9,"mat-form-field",7),e.TgZ(10,"mat-label"),e._uU(11,"Current password"),e.qZA(),e._UZ(12,"mat-icon",8),e._UZ(13,"input",9),e.qZA(),e.qZA(),e.TgZ(14,"div",6),e.TgZ(15,"mat-form-field",7),e.TgZ(16,"mat-label"),e._uU(17,"New password"),e.qZA(),e._UZ(18,"mat-icon",8),e._UZ(19,"input",9),e.qZA(),e.TgZ(20,"div",10),e._uU(21,"Minimum 8 characters. Must include numbers, letters and special characters."),e.qZA(),e.qZA(),e.qZA(),e._UZ(22,"div",11),e.TgZ(23,"div",2),e.TgZ(24,"div",3),e._uU(25,"Security preferences"),e.qZA(),e.TgZ(26,"div",4),e._uU(27,"Keep your account more secure with following preferences."),e.qZA(),e.qZA(),e.TgZ(28,"div",5),e.TgZ(29,"div",12),e.TgZ(30,"div",13),e.NdJ("click",function(){return e.CHM(l),e.MAs(36).toggle()}),e.TgZ(31,"div",14),e._uU(32,"Enable 2-step authentication"),e.qZA(),e.TgZ(33,"div",15),e._uU(34," Protects you against password theft by requesting an authentication code via SMS on every login. "),e.qZA(),e.qZA(),e._UZ(35,"mat-slide-toggle",16,17),e.qZA(),e.TgZ(37,"div",12),e.TgZ(38,"div",13),e.NdJ("click",function(){return e.CHM(l),e.MAs(44).toggle()}),e.TgZ(39,"div",14),e._uU(40,"Ask to change password on every 6 months"),e.qZA(),e.TgZ(41,"div",15),e._uU(42," A simple but an effective way to be protected against data leaks and password theft. "),e.qZA(),e.qZA(),e._UZ(43,"mat-slide-toggle",16,18),e.qZA(),e.qZA(),e._UZ(45,"div",11),e.TgZ(46,"div",19),e.TgZ(47,"button",20),e._uU(48," Cancel "),e.qZA(),e.TgZ(49,"button",21),e._uU(50,"Save "),e.qZA(),e.qZA(),e.qZA(),e.qZA()}2&t&&(e.xp6(1),e.Q6J("formGroup",o.securityForm),e.xp6(11),e.Q6J("svgIcon","heroicons_solid:key"),e.xp6(1),e.Q6J("formControlName","currentPassword"),e.xp6(5),e.Q6J("svgIcon","heroicons_solid:key"),e.xp6(1),e.Q6J("formControlName","newPassword"),e.xp6(16),e.Q6J("color","primary")("formControlName","twoStep"),e.xp6(8),e.Q6J("color","primary")("formControlName","askPasswordChange"),e.xp6(6),e.Q6J("color","primary"))},directives:[a._Y,a.JL,a.sg,s.KE,s.hX,d.Hw,s.qo,p.Nt,a.Fj,a.JJ,a.u,v.Rr,u.lW],encapsulation:2,changeDetection:0}),n})();var Q=r(15356);function S(n,i){if(1&n&&(e.ynx(0),e._UZ(1,"mat-radio-button",22),e.BQk()),2&n){const t=i.$implicit;e.xp6(1),e.Q6J("value",t.value)}}function k(n,i){1&n&&(e.ynx(0),e._UZ(1,"mat-icon",34),e.BQk()),2&n&&(e.xp6(1),e.Q6J("svgIcon","heroicons_solid:check-circle"))}const N=function(n){return{"ring ring-inset ring-primary":n}};function M(n,i){if(1&n){const t=e.EpF();e.ynx(0),e.TgZ(1,"div",28),e.NdJ("click",function(){const c=e.CHM(t).$implicit;return e.oxw(),e.MAs(12).value=c.value}),e.YNc(2,k,2,1,"ng-container",29),e.TgZ(3,"div",30),e._uU(4),e.qZA(),e.TgZ(5,"div",31),e._uU(6),e.qZA(),e._UZ(7,"div",32),e.TgZ(8,"div",33),e.TgZ(9,"span"),e._uU(10),e.ALo(11,"currency"),e.qZA(),e.TgZ(12,"span",4),e._uU(13," / month"),e.qZA(),e.qZA(),e.qZA(),e.BQk()}if(2&n){const t=i.$implicit;e.oxw();const o=e.MAs(12);e.xp6(1),e.Q6J("ngClass",e.VKq(10,N,o.value===t.value)),e.xp6(1),e.Q6J("ngIf",o.value===t.value),e.xp6(2),e.Oqu(t.label),e.xp6(2),e.Oqu(t.details),e.xp6(4),e.Oqu(e.gM2(11,5,t.price,"USD","symbol","1.0"))}}let F=(()=>{class n{constructor(t){this._formBuilder=t}ngOnInit(){this.planBillingForm=this._formBuilder.group({plan:["team"],cardHolder:["Brian Hughes"],cardNumber:[""],cardExpiration:[""],cardCVC:[""],country:["usa"],zip:[""]}),this.plans=[{value:"basic",label:"BASIC",details:"Starter plan for individuals.",price:"10"},{value:"team",label:"TEAM",details:"Collaborate up to 10 people.",price:"20"},{value:"enterprise",label:"ENTERPRISE",details:"For bigger businesses.",price:"40"}]}trackByFn(t,o){return o.id||t}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(a.qu))},n.\u0275cmp=e.Xpm({type:n,selectors:[["settings-plan-billing"]],decls:76,vars:28,consts:[[1,"w-full","max-w-3xl"],[3,"formGroup"],[1,"w-full"],[1,"text-xl"],[1,"text-secondary"],[1,"grid","sm:grid-cols-3","gap-6","w-full","mt-8"],[1,"sm:col-span-3"],[3,"appearance","type"],[1,"invisible","absolute","w-0","h-0","pointer-events-none",3,"formControlName"],["planRadioGroup","matRadioGroup"],[4,"ngFor","ngForOf","ngForTrackBy"],[1,"mt-12","mb-10","border-t"],[1,"grid","grid-cols-4","gap-6","w-full","mt-8"],[1,"col-span-4"],[1,"fuse-mat-no-subscript","w-full"],["matPrefix","",1,"icon-size-5",3,"svgIcon"],["matInput","",3,"formControlName"],[1,"col-span-4","sm:col-span-2"],[1,"col-span-2","sm:col-span-1"],[1,"fuse-mat-no-subscript","w-full",3,"floatLabel"],["matInput","",3,"formControlName","placeholder"],[3,"formControlName"],[3,"value"],["matInput",""],[1,"mt-11","mb-10","border-t"],[1,"flex","items-center","justify-end"],["mat-stroked-button","","type","button"],["mat-flat-button","","type","button",1,"ml-4",3,"color"],[1,"relative","flex","flex-col","items-start","justify-start","p-6","rounded-md","shadow","cursor-pointer","bg-card",3,"ngClass","click"],[4,"ngIf"],[1,"font-medium"],[1,"mt-1","whitespace-normal","text-secondary"],[1,"flex-auto"],[1,"mt-8","text-lg"],[1,"absolute","top-0","right-0","mt-3","mr-3","icon-size-7","text-primary",3,"svgIcon"]],template:function(t,o){1&t&&(e.TgZ(0,"div",0),e.TgZ(1,"form",1),e.TgZ(2,"div",2),e.TgZ(3,"div",3),e._uU(4,"Change your plan"),e.qZA(),e.TgZ(5,"div",4),e._uU(6,"Upgrade or downgrade your current plan."),e.qZA(),e.qZA(),e.TgZ(7,"div",5),e.TgZ(8,"div",6),e.TgZ(9,"fuse-alert",7),e._uU(10," Changing the plan will take effect immediately. You will be charged for the rest of the current month. "),e.qZA(),e.qZA(),e.TgZ(11,"mat-radio-group",8,9),e.YNc(13,S,2,1,"ng-container",10),e.qZA(),e.YNc(14,M,14,12,"ng-container",10),e.qZA(),e._UZ(15,"div",11),e.TgZ(16,"div",2),e.TgZ(17,"div",3),e._uU(18,"Payment Details"),e.qZA(),e.TgZ(19,"div",4),e._uU(20,"Update your billing information. Make sure to set your location correctly as it could affect your tax rates."),e.qZA(),e.qZA(),e.TgZ(21,"div",12),e.TgZ(22,"div",13),e.TgZ(23,"mat-form-field",14),e.TgZ(24,"mat-label"),e._uU(25,"Card holder"),e.qZA(),e._UZ(26,"mat-icon",15),e._UZ(27,"input",16),e.qZA(),e.qZA(),e.TgZ(28,"div",17),e.TgZ(29,"mat-form-field",14),e.TgZ(30,"mat-label"),e._uU(31,"Card number"),e.qZA(),e._UZ(32,"mat-icon",15),e._UZ(33,"input",16),e.qZA(),e.qZA(),e.TgZ(34,"div",18),e.TgZ(35,"mat-form-field",19),e.TgZ(36,"mat-label"),e._uU(37,"Expiration date"),e.qZA(),e._UZ(38,"mat-icon",15),e._UZ(39,"input",20),e.qZA(),e.qZA(),e.TgZ(40,"div",18),e.TgZ(41,"mat-form-field",14),e.TgZ(42,"mat-label"),e._uU(43,"CVC / CVC2"),e.qZA(),e._UZ(44,"mat-icon",15),e._UZ(45,"input",16),e.qZA(),e.qZA(),e.TgZ(46,"div",17),e.TgZ(47,"mat-form-field",14),e.TgZ(48,"mat-label"),e._uU(49,"Country"),e.qZA(),e._UZ(50,"mat-icon",15),e.TgZ(51,"mat-select",21),e.TgZ(52,"mat-option",22),e._uU(53,"United States"),e.qZA(),e.TgZ(54,"mat-option",22),e._uU(55,"Canada"),e.qZA(),e.TgZ(56,"mat-option",22),e._uU(57,"Mexico"),e.qZA(),e.TgZ(58,"mat-option",22),e._uU(59,"France"),e.qZA(),e.TgZ(60,"mat-option",22),e._uU(61,"Germany"),e.qZA(),e.TgZ(62,"mat-option",22),e._uU(63,"Italy"),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.TgZ(64,"div",17),e.TgZ(65,"mat-form-field",14),e.TgZ(66,"mat-label"),e._uU(67,"ZIP / Postal code"),e.qZA(),e._UZ(68,"mat-icon",15),e._UZ(69,"input",23),e.qZA(),e.qZA(),e.qZA(),e._UZ(70,"div",24),e.TgZ(71,"div",25),e.TgZ(72,"button",26),e._uU(73," Cancel "),e.qZA(),e.TgZ(74,"button",27),e._uU(75,"Save "),e.qZA(),e.qZA(),e.qZA(),e.qZA()),2&t&&(e.xp6(1),e.Q6J("formGroup",o.planBillingForm),e.xp6(8),e.Q6J("appearance","outline")("type","info"),e.xp6(2),e.Q6J("formControlName","plan"),e.xp6(2),e.Q6J("ngForOf",o.plans)("ngForTrackBy",o.trackByFn),e.xp6(1),e.Q6J("ngForOf",o.plans)("ngForTrackBy",o.trackByFn),e.xp6(12),e.Q6J("svgIcon","heroicons_solid:user"),e.xp6(1),e.Q6J("formControlName","cardHolder"),e.xp6(5),e.Q6J("svgIcon","heroicons_solid:credit-card"),e.xp6(1),e.Q6J("formControlName","cardNumber"),e.xp6(2),e.Q6J("floatLabel","always"),e.xp6(3),e.Q6J("svgIcon","heroicons_solid:calendar"),e.xp6(1),e.Q6J("formControlName","cardExpiration")("placeholder","MM / YY"),e.xp6(5),e.Q6J("svgIcon","heroicons_solid:lock-closed"),e.xp6(1),e.Q6J("formControlName","cardCVC"),e.xp6(5),e.Q6J("svgIcon","heroicons_solid:location-marker"),e.xp6(1),e.Q6J("formControlName","country"),e.xp6(1),e.Q6J("value","usa"),e.xp6(2),e.Q6J("value","canada"),e.xp6(2),e.Q6J("value","mexico"),e.xp6(2),e.Q6J("value","france"),e.xp6(2),e.Q6J("value","germany"),e.xp6(2),e.Q6J("value","italy"),e.xp6(6),e.Q6J("svgIcon","heroicons_solid:hashtag"),e.xp6(6),e.Q6J("color","primary"))},directives:[a._Y,a.JL,a.sg,Q.W,_.VQ,a.JJ,a.u,g.sg,s.KE,s.hX,d.Hw,s.qo,p.Nt,a.Fj,Z.gD,T.ey,u.lW,_.U0,g.mk,g.O5],pipes:[g.H9],encapsulation:2,changeDetection:0}),n})(),I=(()=>{class n{constructor(t){this._formBuilder=t}ngOnInit(){this.notificationsForm=this._formBuilder.group({communication:[!0],security:[!0],meetups:[!1],comments:[!1],mention:[!0],follow:[!0],inquiry:[!0]})}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(a.qu))},n.\u0275cmp=e.Xpm({type:n,selectors:[["settings-notifications"]],decls:61,vars:16,consts:[[1,"w-full","max-w-3xl"],[3,"formGroup"],[1,"w-full","text-xl"],[1,"grid","grid-cols-1","gap-6","w-full","mt-8"],[1,"flex","items-center","justify-between"],[1,"flex-auto","cursor-pointer",3,"click"],[1,"leading-6","font-medium"],[1,"text-md","text-secondary"],[1,"ml-2",3,"color","formControlName"],["communication",""],["securityToggle",""],["meetupsToggle",""],[1,"my-10","border-t"],[1,"w-full","mt-8","font-medium"],[1,"grid","grid-cols-1","gap-4","w-full","mt-4"],[1,"flex-auto","leading-6","cursor-pointer",3,"click"],["comments",""],["mention",""],["follow",""],["inquiry",""],[1,"flex","items-center","justify-end"],["mat-stroked-button","","type","button"],["mat-flat-button","","type","button",1,"ml-4",3,"color"]],template:function(t,o){if(1&t){const l=e.EpF();e.TgZ(0,"div",0),e.TgZ(1,"form",1),e.TgZ(2,"div",2),e._uU(3,"Alerts"),e.qZA(),e.TgZ(4,"div",3),e.TgZ(5,"div",4),e.TgZ(6,"div",5),e.NdJ("click",function(){return e.CHM(l),e.MAs(12).toggle()}),e.TgZ(7,"div",6),e._uU(8,"Communication"),e.qZA(),e.TgZ(9,"div",7),e._uU(10,"Get news, announcements, and product updates."),e.qZA(),e.qZA(),e._UZ(11,"mat-slide-toggle",8,9),e.qZA(),e.TgZ(13,"div",4),e.TgZ(14,"div",5),e.NdJ("click",function(){return e.CHM(l),e.MAs(20).toggle()}),e.TgZ(15,"div",6),e._uU(16,"Security"),e.qZA(),e.TgZ(17,"div",7),e._uU(18," Get important notifications about your account security. "),e.qZA(),e.qZA(),e._UZ(19,"mat-slide-toggle",8,10),e.qZA(),e.TgZ(21,"div",4),e.TgZ(22,"div",5),e.NdJ("click",function(){return e.CHM(l),e.MAs(28).toggle()}),e.TgZ(23,"div",6),e._uU(24,"Meetups"),e.qZA(),e.TgZ(25,"div",7),e._uU(26," Get an email when a Meetup is posted close to my location. "),e.qZA(),e.qZA(),e._UZ(27,"mat-slide-toggle",8,11),e.qZA(),e.qZA(),e._UZ(29,"div",12),e.TgZ(30,"div",2),e._uU(31,"Account Activity"),e.qZA(),e.TgZ(32,"div",13),e._uU(33,"Email me when:"),e.qZA(),e.TgZ(34,"div",14),e.TgZ(35,"div",4),e.TgZ(36,"div",15),e.NdJ("click",function(){return e.CHM(l),e.MAs(39).toggle()}),e._uU(37," someone comments on one of my items "),e.qZA(),e._UZ(38,"mat-slide-toggle",8,16),e.qZA(),e.TgZ(40,"div",4),e.TgZ(41,"div",15),e.NdJ("click",function(){return e.CHM(l),e.MAs(44).toggle()}),e._uU(42," someone mentions me "),e.qZA(),e._UZ(43,"mat-slide-toggle",8,17),e.qZA(),e.TgZ(45,"div",4),e.TgZ(46,"div",15),e.NdJ("click",function(){return e.CHM(l),e.MAs(49).toggle()}),e._uU(47," someone follows me "),e.qZA(),e._UZ(48,"mat-slide-toggle",8,18),e.qZA(),e.TgZ(50,"div",4),e.TgZ(51,"div",15),e.NdJ("click",function(){return e.CHM(l),e.MAs(54).toggle()}),e._uU(52," someone replies to my job posting "),e.qZA(),e._UZ(53,"mat-slide-toggle",8,19),e.qZA(),e.qZA(),e._UZ(55,"div",12),e.TgZ(56,"div",20),e.TgZ(57,"button",21),e._uU(58," Cancel "),e.qZA(),e.TgZ(59,"button",22),e._uU(60,"Save "),e.qZA(),e.qZA(),e.qZA(),e.qZA()}2&t&&(e.xp6(1),e.Q6J("formGroup",o.notificationsForm),e.xp6(10),e.Q6J("color","primary")("formControlName","communication"),e.xp6(8),e.Q6J("color","primary")("formControlName","security"),e.xp6(8),e.Q6J("color","primary")("formControlName","meetups"),e.xp6(11),e.Q6J("color","primary")("formControlName","comments"),e.xp6(5),e.Q6J("color","primary")("formControlName","mention"),e.xp6(5),e.Q6J("color","primary")("formControlName","follow"),e.xp6(5),e.Q6J("color","primary")("formControlName","inquiry"),e.xp6(6),e.Q6J("color","primary"))},directives:[a._Y,a.JL,a.sg,v.Rr,a.JJ,a.u,u.lW],encapsulation:2,changeDetection:0}),n})();function B(n,i){if(1&n&&(e.ynx(0),e._UZ(1,"img",27),e.BQk()),2&n){const t=e.oxw().$implicit;e.xp6(1),e.Q6J("src",t.avatar,e.LSH)}}function P(n,i){if(1&n&&(e.ynx(0),e.TgZ(1,"div",28),e._uU(2),e.qZA(),e.BQk()),2&n){const t=e.oxw().$implicit;e.xp6(2),e.hij(" ",t.name.charAt(0)," ")}}function j(n,i){if(1&n&&(e.ynx(0),e.TgZ(1,"mat-option",29),e.TgZ(2,"div",14),e._uU(3),e.qZA(),e.TgZ(4,"div",30),e._uU(5),e.qZA(),e.qZA(),e.BQk()),2&n){const t=i.$implicit;e.xp6(1),e.Q6J("value",t.value),e.xp6(2),e.Oqu(t.label),e.xp6(2),e.Oqu(t.description)}}function O(n,i){if(1&n&&(e.ynx(0),e.TgZ(1,"div",9),e.TgZ(2,"div",10),e.TgZ(3,"div",11),e.YNc(4,B,2,1,"ng-container",12),e.YNc(5,P,3,1,"ng-container",12),e.qZA(),e.TgZ(6,"div",13),e.TgZ(7,"div",14),e._uU(8),e.qZA(),e.TgZ(9,"div",15),e._uU(10),e.qZA(),e.qZA(),e.qZA(),e.TgZ(11,"div",16),e.TgZ(12,"div",17),e.TgZ(13,"mat-form-field",18),e.TgZ(14,"mat-select",19,20),e.TgZ(16,"mat-select-trigger",21),e.TgZ(17,"span"),e._uU(18,"Role:"),e.qZA(),e.TgZ(19,"span",22),e._uU(20),e.ALo(21,"titlecase"),e.qZA(),e.qZA(),e.YNc(22,j,6,3,"ng-container",23),e.qZA(),e.qZA(),e.qZA(),e.TgZ(23,"div",24),e.TgZ(24,"button",25),e._UZ(25,"mat-icon",26),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.BQk()),2&n){const t=i.$implicit,o=e.MAs(15),l=e.oxw();e.xp6(4),e.Q6J("ngIf",t.avatar),e.xp6(1),e.Q6J("ngIf",!t.avatar),e.xp6(3),e.Oqu(t.name),e.xp6(2),e.Oqu(t.email),e.xp6(4),e.Q6J("panelClass","w-72 min-w-72 max-w-72 h-auto max-h-none")("value",t.role),e.xp6(6),e.Oqu(e.lcZ(21,9,o.value)),e.xp6(2),e.Q6J("ngForOf",l.roles),e.xp6(3),e.Q6J("svgIcon","heroicons_outline:trash")}}let Y=(()=>{class n{constructor(){}ngOnInit(){this.members=[{avatar:"assets/images/avatars/male-01.jpg",name:"Dejesus Michael",email:"dejesusmichael@mail.org",role:"admin"},{avatar:"assets/images/avatars/male-03.jpg",name:"Mclaughlin Steele",email:"mclaughlinsteele@mail.me",role:"admin"},{avatar:"assets/images/avatars/female-02.jpg",name:"Laverne Dodson",email:"lavernedodson@mail.ca",role:"write"},{avatar:"assets/images/avatars/female-03.jpg",name:"Trudy Berg",email:"trudyberg@mail.us",role:"read"},{avatar:"assets/images/avatars/male-07.jpg",name:"Lamb Underwood",email:"lambunderwood@mail.me",role:"read"},{avatar:"assets/images/avatars/male-08.jpg",name:"Mcleod Wagner",email:"mcleodwagner@mail.biz",role:"read"},{avatar:"assets/images/avatars/female-07.jpg",name:"Shannon Kennedy",email:"shannonkennedy@mail.ca",role:"read"}],this.roles=[{label:"Read",value:"read",description:"Can read and clone this repository. Can also open and comment on issues and pull requests."},{label:"Write",value:"write",description:"Can read, clone, and push to this repository. Can also manage issues and pull requests."},{label:"Admin",value:"admin",description:"Can read, clone, and push to this repository. Can also manage issues, pull requests, and repository settings, including adding collaborators."}]}trackByFn(t,o){return o.id||t}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["settings-team"]],decls:11,vars:6,consts:[[1,"w-full","max-w-3xl"],[1,"w-full"],[1,"fuse-mat-no-subscript","w-full",3,"floatLabel"],["matPrefix","",1,"icon-size-5",3,"svgIcon"],["matInput","",3,"placeholder"],["mat-icon-button","","matSuffix",""],[1,"icon-size-5",3,"svgIcon"],[1,"flex","flex-col","mt-8","divide-y","border-t","border-b"],[4,"ngFor","ngForOf","ngForTrackBy"],[1,"flex","flex-col","sm:flex-row","sm:items-center","py-6"],[1,"flex","items-center"],[1,"flex","flex-0","items-center","justify-center","w-10","h-10","rounded-full","overflow-hidden"],[4,"ngIf"],[1,"ml-4"],[1,"font-medium"],[1,"text-secondary"],[1,"flex","items-center","mt-4","sm:mt-0","sm:ml-auto"],[1,"order-2","sm:order-1","ml-4","sm:ml-0"],[1,"fuse-mat-dense","fuse-mat-no-subscript","w-32"],["disableOptionCentering","",3,"panelClass","value"],["roleSelect","matSelect"],[1,"text-md"],[1,"ml-1","font-medium"],[4,"ngFor","ngForOf"],[1,"order-1","sm:order-2","sm:ml-3"],["mat-icon-button",""],[1,"text-hint",3,"svgIcon"],["alt","Contact avatar",1,"object-cover","w-full","h-full",3,"src"],[1,"flex","items-center","justify-center","w-full","h-full","rounded-full","text-lg","uppercase","bg-gray-200","text-gray-600","dark:bg-gray-700","dark:text-gray-200"],[1,"h-auto","py-4","leading-none",3,"value"],[1,"mt-1.5","text-sm","whitespace-normal","leading-normal","text-secondary"]],template:function(t,o){1&t&&(e.TgZ(0,"div",0),e.TgZ(1,"div",1),e.TgZ(2,"mat-form-field",2),e.TgZ(3,"mat-label"),e._uU(4,"Add team members"),e.qZA(),e._UZ(5,"mat-icon",3),e._UZ(6,"input",4),e.TgZ(7,"button",5),e._UZ(8,"mat-icon",6),e.qZA(),e.qZA(),e.qZA(),e.TgZ(9,"div",7),e.YNc(10,O,26,11,"ng-container",8),e.qZA(),e.qZA()),2&t&&(e.xp6(2),e.Q6J("floatLabel","always"),e.xp6(3),e.Q6J("svgIcon","heroicons_solid:user"),e.xp6(1),e.Q6J("placeholder","Email address"),e.xp6(2),e.Q6J("svgIcon","heroicons_solid:plus-circle"),e.xp6(2),e.Q6J("ngForOf",o.members)("ngForTrackBy",o.trackByFn))},directives:[s.KE,s.hX,d.Hw,s.qo,p.Nt,u.lW,s.R9,g.sg,g.O5,Z.gD,Z.$L,T.ey],pipes:[g.rS],encapsulation:2,changeDetection:0}),n})();const H=["drawer"],E=function(n,i){return{"hover:bg-gray-100 dark:hover:bg-hover":n,"bg-primary-50 dark:bg-hover":i}},L=function(n,i){return{"text-hint":n,"text-primary dark:text-primary-500":i}},D=function(n){return{"text-primary dark:text-primary-500":n}};function G(n,i){if(1&n){const t=e.EpF();e.ynx(0),e.TgZ(1,"div",19),e.NdJ("click",function(){const c=e.CHM(t).$implicit;return e.oxw().goToPanel(c.id)}),e._UZ(2,"mat-icon",20),e.TgZ(3,"div",21),e.TgZ(4,"div",22),e._uU(5),e.qZA(),e.TgZ(6,"div",23),e._uU(7),e.qZA(),e.qZA(),e.qZA(),e.BQk()}if(2&n){const t=i.$implicit,o=e.oxw();e.xp6(1),e.Q6J("ngClass",e.WLB(6,E,!o.selectedPanel||o.selectedPanel!==t.id,o.selectedPanel&&o.selectedPanel===t.id)),e.xp6(1),e.Q6J("ngClass",e.WLB(9,L,!o.selectedPanel||o.selectedPanel!==t.id,o.selectedPanel&&o.selectedPanel===t.id))("svgIcon",t.icon),e.xp6(2),e.Q6J("ngClass",e.VKq(12,D,o.selectedPanel&&o.selectedPanel===t.id)),e.xp6(1),e.hij(" ",t.title," "),e.xp6(2),e.hij(" ",t.description," ")}}function R(n,i){1&n&&(e.ynx(0),e._UZ(1,"settings-account"),e.BQk())}function W(n,i){1&n&&(e.ynx(0),e._UZ(1,"settings-security"),e.BQk())}function z(n,i){1&n&&(e.ynx(0),e._UZ(1,"settings-plan-billing"),e.BQk())}function X(n,i){1&n&&(e.ynx(0),e._UZ(1,"settings-notifications"),e.BQk())}function $(n,i){1&n&&(e.ynx(0),e._UZ(1,"settings-team"),e.BQk())}const K=[{path:"",component:(()=>{class n{constructor(t,o){this._changeDetectorRef=t,this._fuseMediaWatcherService=o,this.drawerMode="side",this.drawerOpened=!0,this.panels=[],this.selectedPanel="account",this._unsubscribeAll=new y.x}ngOnInit(){this.panels=[{id:"account",icon:"heroicons_outline:user-circle",title:"Account",description:"Manage your public profile and private information"},{id:"security",icon:"heroicons_outline:lock-closed",title:"Security",description:"Manage your password and 2-step verification preferences"},{id:"plan-billing",icon:"heroicons_outline:credit-card",title:"Plan & Billing",description:"Manage your subscription plan, payment method and billing information"},{id:"notifications",icon:"heroicons_outline:bell",title:"Notifications",description:"Manage when you'll be notified on which channels"},{id:"team",icon:"heroicons_outline:user-group",title:"Team",description:"Manage your existing team and change roles/permissions"}],this._fuseMediaWatcherService.onMediaChange$.pipe((0,C.R)(this._unsubscribeAll)).subscribe(({matchingAliases:t})=>{t.includes("lg")?(this.drawerMode="side",this.drawerOpened=!0):(this.drawerMode="over",this.drawerOpened=!1),this._changeDetectorRef.markForCheck()})}ngOnDestroy(){this._unsubscribeAll.next(null),this._unsubscribeAll.complete()}goToPanel(t){this.selectedPanel=t,"over"===this.drawerMode&&this.drawer.close()}getPanelInfo(t){return this.panels.find(o=>o.id===t)}trackByFn(t,o){return o.id||t}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(e.sBO),e.Y36(U.T))},n.\u0275cmp=e.Xpm({type:n,selectors:[["settings"]],viewQuery:function(t,o){if(1&t&&e.Gf(H,5),2&t){let l;e.iGM(l=e.CRH())&&(o.drawer=l.first)}},decls:26,vars:14,consts:[[1,"flex","flex-col","w-full","min-w-0","sm:absolute","sm:inset-0","sm:overflow-hidden"],[1,"flex-auto","sm:h-full"],[1,"sm:w-96","dark:bg-gray-900",3,"autoFocus","mode","opened"],["drawer",""],[1,"flex","items-center","justify-between","m-8","mr-6","sm:my-10"],[1,"text-4xl","font-extrabold","tracking-tight","leading-none"],[1,"lg:hidden"],["mat-icon-button","",3,"click"],[3,"svgIcon"],[1,"flex","flex-col","divide-y","border-t","border-b"],[4,"ngFor","ngForOf","ngForTrackBy"],[1,"flex","flex-col"],[1,"flex-auto","px-6","pt-9","pb-12","md:p-8","md:pb-12","lg:p-12"],[1,"flex","items-center"],["mat-icon-button","",1,"lg:hidden","-ml-2",3,"click"],[1,"ml-2","lg:ml-0","text-3xl","font-bold","tracking-tight","leading-none"],[1,"mt-8"],[3,"ngSwitch"],[4,"ngSwitchCase"],[1,"flex","px-8","py-5","cursor-pointer",3,"ngClass","click"],[3,"ngClass","svgIcon"],[1,"ml-3"],[1,"font-medium","leading-6",3,"ngClass"],[1,"mt-0.5","text-secondary"]],template:function(t,o){if(1&t){const l=e.EpF();e.TgZ(0,"div",0),e.TgZ(1,"mat-drawer-container",1),e.TgZ(2,"mat-drawer",2,3),e.TgZ(4,"div",4),e.TgZ(5,"div",5),e._uU(6,"Settings"),e.qZA(),e.TgZ(7,"div",6),e.TgZ(8,"button",7),e.NdJ("click",function(){return e.CHM(l),e.MAs(3).close()}),e._UZ(9,"mat-icon",8),e.qZA(),e.qZA(),e.qZA(),e.TgZ(10,"div",9),e.YNc(11,G,8,14,"ng-container",10),e.qZA(),e.qZA(),e.TgZ(12,"mat-drawer-content",11),e.TgZ(13,"div",12),e.TgZ(14,"div",13),e.TgZ(15,"button",14),e.NdJ("click",function(){return e.CHM(l),e.MAs(3).toggle()}),e._UZ(16,"mat-icon",8),e.qZA(),e.TgZ(17,"div",15),e._uU(18),e.qZA(),e.qZA(),e.TgZ(19,"div",16),e.ynx(20,17),e.YNc(21,R,2,0,"ng-container",18),e.YNc(22,W,2,0,"ng-container",18),e.YNc(23,z,2,0,"ng-container",18),e.YNc(24,X,2,0,"ng-container",18),e.YNc(25,$,2,0,"ng-container",18),e.BQk(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA()}2&t&&(e.xp6(2),e.Q6J("autoFocus",!1)("mode",o.drawerMode)("opened",o.drawerOpened),e.xp6(7),e.Q6J("svgIcon","heroicons_outline:x"),e.xp6(2),e.Q6J("ngForOf",o.panels)("ngForTrackBy",o.trackByFn),e.xp6(5),e.Q6J("svgIcon","heroicons_outline:menu"),e.xp6(2),e.hij(" ",o.getPanelInfo(o.selectedPanel).title," "),e.xp6(2),e.Q6J("ngSwitch",o.selectedPanel),e.xp6(1),e.Q6J("ngSwitchCase","account"),e.xp6(1),e.Q6J("ngSwitchCase","security"),e.xp6(1),e.Q6J("ngSwitchCase","plan-billing"),e.xp6(1),e.Q6J("ngSwitchCase","notifications"),e.xp6(1),e.Q6J("ngSwitchCase","team"))},directives:[f.kh,f.jA,u.lW,d.Hw,g.sg,f.LW,g.RF,g.n9,g.mk,w,J,F,I,Y],encapsulation:2,changeDetection:0}),n})()}];let V=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[[A.Bz.forChild(K),u.ot,s.lN,d.Ps,p.c,_.Fk,Z.LD,f.SJ,v.rP,q.fC,h.m]]}),n})()}}]);