(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{wFkS:function(t,e,i){"use strict";i.r(e),i.d(e,"VisitorsListPageModule",(function(){return E}));var s=i("SVse"),o=i("s7LF"),c=i("sZkV"),n=i("iInd"),r=i("z6cu"),a=i("JIr8"),l=i("lJxs"),u=i("vkgz"),h=i("XNiG"),b=i("zx2A");class d{constructor(t,e){this.notifier=t,this.source=e}call(t,e){return e.subscribe(new v(t,this.notifier,this.source))}}class v extends b.b{constructor(t,e,i){super(t),this.notifier=e,this.source=i}error(t){if(!this.isStopped){let i=this.errors,s=this.retries,o=this.retriesSubscription;if(s)this.errors=void 0,this.retriesSubscription=void 0;else{i=new h.a;try{const{notifier:t}=this;s=t(i)}catch(e){return super.error(e)}o=Object(b.c)(s,new b.a(this))}this._unsubscribeAndRecycle(),this.errors=i,this.retries=s,this.retriesSubscription=o,i.next(t)}}_unsubscribe(){const{errors:t,retriesSubscription:e}=this;t&&(t.unsubscribe(),this.errors=void 0),e&&(e.unsubscribe(),this.retriesSubscription=void 0),this.retries=void 0}notifyNext(){const{_unsubscribe:t}=this;this._unsubscribe=null,this._unsubscribeAndRecycle(),this._unsubscribe=t,this.source.subscribe(this)}}var p=i("Kj3r"),g=i("D0XW"),f=i("7o/Q"),k=i("WMd4");class O{constructor(t,e){this.delay=t,this.scheduler=e}call(t,e){return e.subscribe(new m(t,this.delay,this.scheduler))}}class m extends f.a{constructor(t,e,i){super(t),this.delay=e,this.scheduler=i,this.queue=[],this.active=!1,this.errored=!1}static dispatch(t){const e=t.source,i=e.queue,s=t.scheduler,o=t.destination;for(;i.length>0&&i[0].time-s.now()<=0;)i.shift().notification.observe(o);if(i.length>0){const e=Math.max(0,i[0].time-s.now());this.schedule(t,e)}else this.unsubscribe(),e.active=!1}_schedule(t){this.active=!0,this.destination.add(t.schedule(m.dispatch,this.delay,{source:this,destination:this.destination,scheduler:t}))}scheduleNotification(t){if(!0===this.errored)return;const e=this.scheduler,i=new _(e.now()+this.delay,t);this.queue.push(i),!1===this.active&&this._schedule(e)}_next(t){this.scheduleNotification(k.a.createNext(t))}_error(t){this.errored=!0,this.queue=[],this.destination.error(t),this.unsubscribe()}_complete(){this.scheduleNotification(k.a.createComplete()),this.unsubscribe()}}class _{constructor(t,e){this.time=t,this.notification=e}}var P=i("eIep"),C=i("IzEk"),y=i("pLZG"),j=i("nYR2"),w=i("UXun"),I=i("wZ+X"),V=i("8Y7J"),S=i("9Ku7"),A=i("apZm"),U=i("lyr6");function L(t,e){if(1&t&&(V.Pb(0,"ion-text",12),V.sc(1),V.cc(2,"json"),V.Ob()),2&t){const t=V.bc();V.Ab(1),V.uc(" ",V.dc(2,1,t.errors),"\n")}}function x(t,e){if(1&t&&(V.Nb(0),V.Pb(1,"ion-label"),V.Pb(2,"h2"),V.sc(3),V.Ob(),V.Pb(4,"h3"),V.Lb(5,"ion-icon",13),V.sc(6),V.Ob(),V.Ob(),V.Mb()),2&t){const t=e.$implicit;V.Ab(3),V.uc(" ",t.place_name," "),V.Ab(3),V.uc(" ",t.visits_aggregate.aggregate.count," visitors ")}}function D(t,e){if(1&t&&(V.Nb(0),V.qc(1,x,7,2,"ng-container",10),V.cc(2,"async"),V.Mb()),2&t){const t=V.bc(2);V.Ab(1),V.hc("ngForOf",V.dc(2,1,t.place))}}function N(t,e){if(1&t&&(V.Pb(0,"ion-list-header"),V.qc(1,D,3,3,"ng-container",9),V.cc(2,"async"),V.Ob()),2&t){const t=V.bc();V.Ab(1),V.hc("ngIf",null!==V.dc(2,1,t.place))}}function B(t,e){if(1&t){const t=V.Qb();V.Pb(0,"ion-item-option",18),V.Xb("click",(function(e){V.nc(t);const i=V.bc().$implicit;return V.bc().clickCheckOut(e,i.visitor.visitor_uuid,i.checked_in_at)})),V.sc(1," Check out "),V.Ob()}}function R(t,e){if(1&t&&(V.Pb(0,"ion-item-sliding"),V.Pb(1,"ion-item-options"),V.qc(2,B,2,0,"ion-item-option",14),V.Ob(),V.Pb(3,"ion-item",15),V.Pb(4,"ion-label",16),V.Pb(5,"span",17),V.sc(6),V.cc(7,"date"),V.cc(8,"date"),V.Ob(),V.Pb(9,"h2"),V.sc(10),V.Ob(),V.Pb(11,"h3"),V.sc(12),V.Ob(),V.Ob(),V.Ob(),V.Ob()),2&t){const t=e.$implicit;V.Ab(2),V.hc("ngIf",!t.checked_out_at),V.Ab(2),V.ic("color",t.checked_out_at?"success":"warning"),V.Ab(2),V.vc(" ",V.ec(7,8,t.checked_in_at,"EEEE HH:mm"),"\u2013",V.ec(8,11,t.checked_out_at,"HH:mm")," "),V.Ab(4),V.vc(" ",t.visitor.visitor_first_name," ",t.visitor.visitor_last_name," "),V.Ab(2),V.vc(" ",t.visitor.visitor_phone," ",t.visitor.visitor_email," ")}}const T=[{path:"",component:(()=>{class t{constructor(t,e,i,s,o,c){this.activatedRoute=t,this.router=e,this.toastController=i,this.authenticationService=s,this.checkInOutService=o,this.placeAdminService=c,this.missionControlCoverClickedUnlocked=!1,this.errors=[],this.placeUUID=t.snapshot.paramMap.get("placeUUID"),console.log("VisitorsListPage -> constructor -> this.placeUUID",this.placeUUID);const n=c.getVisitorsByPlaceUUID(this.placeUUID);this.placeVisitorsResult=n;const h=n.pipe(Object(a.a)((t,e)=>{var i;console.error("VisitorsListPage -> err",t),console.error("VisitorsListPage -> caught",e);const s=t;console.error("VisitorsListPage -> apolloError",s);const o=null===(i=s.extensions)||void 0===i?void 0:i.code;return this.presentToast(`Real-time subscription out of sync. Authorisation expired; Please try refreshing or signing in again to administrate your COVIDSafe registry. <br/> ${o}<br/> Reloading soon`),Object(r.a)(t)}),Object(l.a)(t=>(console.log("VisitorsListPage -> interceptResult",t),t)),Object(u.a)(t=>{console.log("VisitorsListPage -> placeVisitorsResult",t)}),(b=t=>(console.log("VisitorsListPage -> retryWhen errors",t),t.pipe(Object(p.a)(500),function(t,e=g.a){var i;const s=(i=t)instanceof Date&&!isNaN(+i)?+t-e.now():Math.abs(t);return t=>t.lift(new O(s,e))}(5e3),Object(u.a)(t=>{console.log("VisitorsListPage -> triggerSideEffectBigRefresh",t),location.reload()}),Object(P.a)(t=>c.getVisitorsByPlaceUUID(this.placeUUID)),Object(C.a)(1),Object(u.a)(t=>{}))),t=>t.lift(new d(b,t))),Object(u.a)(t=>{var e;0===(null===(e=t.data)||void 0===e?void 0:e.place.length)&&(this.presentToast("No places found. Have you activated the correct Place link? <br/>Check account setup or email info@singletouchdigital.com.au to find out more"),this.router.navigate(["sign-in"]))}),Object(y.a)(t=>{var e,i;return void 0!==(null===(i=null===(e=t.data)||void 0===e?void 0:e.place)||void 0===i?void 0:i[0])}),Object(l.a)(t=>t.data.place),Object(u.a)(t=>{console.log("VisitorsListPage -> greatSuccess",t)}),Object(j.a)(()=>{console.log("VisitorsListPage -> completed")}));var b;this.place=h;const v=h.pipe(Object(l.a)(t=>t[0].visits),Object(w.a)(1));this.visits=v,this.visitsPendingCheckOut=this.visits.pipe(Object(l.a)(t=>t.filter(t=>Object(I.c)(t.checked_out_at)))),this.countVisitsPendingCheckOut=this.visitsPendingCheckOut.pipe(Object(l.a)(({length:t})=>t),Object(w.a)(1))}ngOnInit(){}clickCheckOut(t,e,i){if(console.log("clickCheckOut -> event",t),void 0===e||void 0===i)return;const s=this.checkInOutService.updateCheckOutVisitor(this.placeUUID,e,i);console.log("VisitorsListPage -> clickCheckOut -> checkedOutObs",s),s.subscribe(({data:t,errors:e,context:i,extensions:s})=>{var o;console.log("clickCheckOut -> data",t,e,i,s);const c=new Date(null===(o=null==t?void 0:t.update_visit_by_pk)||void 0===o?void 0:o.checked_out_at);console.log("VisitorsListPage -> clickCheckOut -> checkedOutDateTime",c)})}getCountPendingCheckoutVisitors(){}filterRemainingPendingCheckOutVisitors(){}clickMissionControlNonBlockingSwitchNotificationToastFade(){this.countVisitsPendingCheckOut.pipe(Object(C.a)(1)).subscribe(t=>{this.missionControlCoverClickedUnlocked=!this.missionControlCoverClickedUnlocked,this.missionControlCoverClickedUnlocked&&this.presentToast(`Are you sure you want to export and check out remaining ${t} visitors?<br/>(for end of day reconciliation)`,800,"passiveToast")})}clickBulkCheckOut(t,e){this.placeAdminService.updateBulkCheckOut(e).pipe(Object(u.a)(t=>{console.log("bulkCheckOut",t)}),Object(y.a)(t=>{var e,i,s,o;return null!==(null===(i=null===(e=t.data)||void 0===e?void 0:e.update_visit)||void 0===i?void 0:i.affected_rows)&&void 0!==(null===(o=null===(s=t.data)||void 0===s?void 0:s.update_visit)||void 0===o?void 0:o.affected_rows)}),Object(C.a)(1),Object(l.a)(t=>t.data.update_visit),Object(u.a)(t=>{const e=t.affected_rows>0?`Thank you for keeping us a COVIDSafe Place<br/>Successfully checked out ${t.affected_rows} visitors`:"Thank you for keeping us a COVIDSafe Place<br/>Visitors already checked out";console.log("clickBulkCheckOut -> successfulEndOfDayBulkCheckOut",t,e),this.presentToast(e)}),Object(P.a)(t=>this.visits),Object(l.a)(t=>t.map(({visitor:{visitor_first_name:t,visitor_last_name:e,visitor_phone:i,visitor_email:s},checked_in_at:o,checked_out_at:c})=>({visitor_first_name:t,visitor_last_name:e,visitor_phone:i,visitor_email:s,checked_in_at:o,checked_out_at:c}))),Object(u.a)(t=>{!function(t,e,i="list"){const s=function(t,e){const i="object"!=typeof t?JSON.parse(t):t;let s="",o="row_number,";for(let c in e)o+=e[c]+",";o=o.slice(0,-1),s+=o+"\r\n";for(let c=0;c<i.length;c++){let t=`"${c+1}"`;for(let s in e)t+=`,"${i[c][e[s]].replace(/"/g,'\\"')}"`;s+=t+"\r\n"}return s}(t,["visitor_first_name","visitor_last_name","visitor_phone","visitor_email","checked_in_at","checked_out_at"]);console.log(s);const o=new Blob(["\ufeff"+s],{type:"text/csv;charset=utf-8;"});navigator.msSaveBlob&&navigator.msSaveBlob(o,function(t){const e=new Date;return t+e.toLocaleDateString()+"_"+e.toLocaleTimeString()+".csv"}(i));const c=document.createElement("a"),n=URL.createObjectURL(o);-1!==navigator.userAgent.indexOf("Safari")&&-1==navigator.userAgent.indexOf("Chrome")&&c.setAttribute("target","_blank"),c.setAttribute("href",n),c.setAttribute("download",i+".csv"),c.style.visibility="hidden",document.body.appendChild(c),c.click(),document.body.removeChild(c)}(t,0,"covidsafeplace-visitor-list")})).subscribe()}presentToast(t="loading",e=3500,i,s){this.toastController.create({message:t,duration:e,animated:!0,cssClass:i,color:s,translucent:!0}).then(t=>t.present()).then(()=>{console.log("Toast presented "+t)})}}return t.\u0275fac=function(e){return new(e||t)(V.Kb(n.a),V.Kb(n.g),V.Kb(c.J),V.Kb(S.a),V.Kb(A.a),V.Kb(U.a))},t.\u0275cmp=V.Eb({type:t,selectors:[["app-visitors-list"]],decls:23,vars:15,consts:[["color","cobaltblue"],["color","danger",4,"ngIf"],["horizontal","start","vertical","bottom","slot","fixed","size","large"],["color","cobaltbluemonochrome",3,"click"],["name","list-outline","size","large"],["name","log-out-outline","size","small"],["side","end"],["color","warning"],["name","log-out-outline","color","","size","large",3,"click"],[4,"ngIf"],[4,"ngFor","ngForOf"],["color","light","hidden",""],["color","danger"],["name","people"],["color","success","button","",3,"click",4,"ngIf"],["button",""],[3,"color"],[2,"float","right"],["color","success","button","",3,"click"]],template:function(t,e){1&t&&(V.Pb(0,"ion-header"),V.Pb(1,"ion-toolbar",0),V.Pb(2,"ion-title"),V.sc(3," List COVIDSafe check ins \u2705 | Place visitors "),V.Ob(),V.Ob(),V.Ob(),V.qc(4,L,3,3,"ion-text",1),V.Pb(5,"ion-fab",2),V.Pb(6,"ion-fab-button",3),V.Xb("click",(function(){return e.clickMissionControlNonBlockingSwitchNotificationToastFade()})),V.Lb(7,"ion-icon",4),V.Lb(8,"ion-icon",5),V.Ob(),V.Pb(9,"ion-fab-list",6),V.Pb(10,"ion-fab-button",7),V.Pb(11,"ion-icon",8),V.Xb("click",(function(t){return e.clickBulkCheckOut(t,e.placeUUID)})),V.Ob(),V.Ob(),V.Ob(),V.Ob(),V.Pb(12,"ion-content"),V.Pb(13,"ion-list"),V.qc(14,N,3,3,"ion-list-header",9),V.qc(15,R,13,14,"ion-item-sliding",10),V.cc(16,"async"),V.Ob(),V.Pb(17,"ion-text",11),V.sc(18),V.cc(19,"json"),V.cc(20,"async"),V.cc(21,"json"),V.cc(22,"async"),V.Ob(),V.Ob()),2&t&&(V.Ab(4),V.hc("ngIf",e.errors.length>0),V.Ab(10),V.hc("ngIf",e.place),V.Ab(1),V.hc("ngForOf",V.dc(16,5,e.visits)),V.Ab(3),V.vc(" 1 ",V.dc(19,7,V.dc(20,9,e.place))," 2 ",V.dc(21,11,V.dc(22,13,e.visits))," "))},directives:[c.n,c.C,c.B,s.m,c.j,c.k,c.o,c.l,c.i,c.w,s.l,c.A,c.x,c.v,c.u,c.t,c.q,c.s],pipes:[s.b,s.g,s.e],styles:["ion-icon[_ngcontent-%COMP%]{vertical-align:middle}"]}),t})()}];let q=(()=>{class t{}return t.\u0275mod=V.Ib({type:t}),t.\u0275inj=V.Hb({factory:function(e){return new(e||t)},imports:[[n.i.forChild(T)],n.i]}),t})(),E=(()=>{class t{}return t.\u0275mod=V.Ib({type:t}),t.\u0275inj=V.Hb({factory:function(e){return new(e||t)},imports:[[s.c,o.g,c.D,q]]}),t})()}}]);