var At=Object.defineProperty;var Pt=(l,t,e)=>t in l?At(l,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):l[t]=e;var p=(l,t,e)=>Pt(l,typeof t!="symbol"?t+"":t,e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))s(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const d of i.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&s(d)}).observe(document,{childList:!0,subtree:!0});function e(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerPolicy&&(i.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?i.credentials="include":a.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(a){if(a.ep)return;a.ep=!0;const i=e(a);fetch(a.href,i)}})();const L={index:0,slug:"nyitany",title:"Rekordok és attribútumok",shortTitle:"Rekordok és attribútumok",gesture:"Ábrázold a válaszaidat",description:"Egy rekord egy megfigyelési egységhez tartozó attribútumértékeket fog össze.",status:"live",accent:"saffron"},M=[{index:1,slug:"adat",title:"Adat és előkészítés",shortTitle:"Adattisztítás",gesture:"Kezeld a hibás értéket",description:"A hiányzó, hibás vagy eltérő skálájú értékeket a modellezés előtt kezelni kell.",status:"live",accent:"vermilion"},{index:2,slug:"knn",title:"Osztályozás: kNN",shortTitle:"k legközelebbi szomszéd",gesture:"Állítsd a k értékét",description:"Egy új pont címkéjét a hozzá legközelebbi k tanítópont többségi címkéje adja.",status:"live",accent:"azure"},{index:3,slug:"dontesi-fa",title:"Döntési fa és együttesek",shortTitle:"Döntési fák",gesture:"Módosítsd a felosztást",description:"A fa egymás utáni feltételekkel osztja fel a változóteret; az együttes módszerek több fa eredményét kombinálják.",status:"live",accent:"teal"},{index:4,slug:"svm",title:"Logisztikus regresszió és SVM",shortTitle:"Lineáris döntési határok",gesture:"Hasonlítsd össze a határokat",description:"A logisztikus regresszió és az SVM eltérő célfüggvénnyel illeszt döntési határt.",status:"coming",accent:"azure"},{index:5,slug:"neuralis-halok",title:"Neurális hálók",shortTitle:"Neurális hálók",gesture:"Módosítsd a rétegeket",description:"A rétegek egymásra épített nemlineáris transzformációi görbült döntési határt is leírhatnak.",status:"coming",accent:"vermilion"},{index:6,slug:"regresszio",title:"Regresszió",shortTitle:"Polinomregresszió",gesture:"Állítsd a polinom fokszámát",description:"A tanító- és validációs hiba együtt jelzi, ha a modell túl egyszerű vagy túl rugalmas.",status:"live",accent:"vermilion"},{index:7,slug:"kiertekeles",title:"Kiértékelés",shortTitle:"Modellértékelés",gesture:"Módosítsd a küszöböt",description:"A döntési küszöb megváltoztatja a téves pozitív és téves negatív esetek számát.",status:"live",accent:"saffron"},{index:8,slug:"klaszterezes",title:"Klaszterezés",shortTitle:"k-közép és DBSCAN",gesture:"Hasonlítsd össze a módszereket",description:"A k-közép centroidokhoz rendeli a pontokat, a DBSCAN pedig sűrűség alapján alakít klasztereket.",status:"live",accent:"teal"},{index:9,slug:"ajanlorendszerek",title:"Ajánlórendszerek",shortTitle:"Értékelési minták",gesture:"Becsülj hiányzó értékelést",description:"A felhasználók és termékek értékelési mintái alapján hiányzó értékelések becsülhetők.",status:"coming",accent:"saffron"},{index:10,slug:"dimenzio",title:"Dimenziócsökkentés",shortTitle:"Dimenziócsökkentés",gesture:"Válassz kétdimenziós vetületet",description:"A nagy dimenziós adatot kevesebb koordinátára vetítjük, miközben igyekszünk megőrizni a pontok szerkezetét.",status:"coming",accent:"azure"},{index:11,slug:"mintazatok",title:"Mintázatok és anomáliák",shortTitle:"Anomáliák és együttjárások",gesture:"Jelöld az eltérést",description:"Az anomáliakeresés ritka megfigyeléseket, a mintázatbányászat gyakori együttjárásokat azonosít.",status:"coming",accent:"saffron"},{index:12,slug:"vizualizacio",title:"Vizualizáció és lezárás",shortTitle:"Adatvizualizáció",gesture:"Válts ábrázolást",description:"Az összegző statisztikák mellett az eloszlás alakját is meg kell vizsgálni.",status:"coming",accent:"vermilion"}],Tt=[L,...M.filter(l=>l.status==="live")];function K(l){return[L,...M].find(t=>t.slug===l)}function T(l){return()=>{let t=l+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}}function S(l){const t=Math.max(l(),Number.EPSILON),e=Math.max(l(),Number.EPSILON);return Math.sqrt(-2*Math.log(t))*Math.cos(2*Math.PI*e)}const A=(l,t,e)=>Math.max(t,Math.min(e,l)),$t=.44;function jt(l,t,e,s,a=0,i=0){const d=(l-t)*Math.PI/2+a;return{x:e*Math.sin(d),y:s*(t-l)+i,z:e*Math.cos(d)}}class Ct{constructor(t,e){p(this,"canvas");p(this,"stops");p(this,"cards");p(this,"previews");p(this,"previewIndexes");p(this,"particles");p(this,"reduceMotion");p(this,"onActiveChange");p(this,"stopPositions",[]);p(this,"resizeObserver");p(this,"animationFrame");p(this,"lastFrame",0);p(this,"targetT");p(this,"visualT");p(this,"activeIndex",-1);p(this,"onScroll",()=>{this.targetT=this.readScrollPosition(),this.startAnimation()});p(this,"onResize",()=>{this.measureStops(),this.targetT=this.readScrollPosition(),this.draw()});p(this,"onMotionChange",()=>{this.targetT=this.readScrollPosition(),this.visualT=this.reduceMotion.matches?Math.round(this.targetT):this.targetT,this.syncCards(),this.draw()});p(this,"animate",t=>{const e=Math.min(.05,Math.max(.001,(t-this.lastFrame)/1e3));if(this.lastFrame=t,this.reduceMotion.matches)this.visualT=Math.round(this.targetT);else{const s=1-Math.exp(-e/.085);this.visualT+=(this.targetT-this.visualT)*s}this.syncCards(),this.draw(),Math.abs(this.targetT-this.visualT)>5e-4&&!this.reduceMotion.matches?this.animationFrame=requestAnimationFrame(this.animate):(this.visualT=this.reduceMotion.matches?Math.round(this.targetT):this.targetT,this.syncCards(),this.draw(),this.animationFrame=void 0)});this.canvas=t,this.stops=e.stops,this.cards=e.cards,this.previews=e.previews??[],this.previewIndexes=new Set(this.previews.map(a=>Number(a.dataset.helixPreview))),this.onActiveChange=e.onActiveChange,this.targetT=A(e.initialIndex??0,0,this.stops.length-1),this.visualT=this.targetT,this.reduceMotion=window.matchMedia("(prefers-reduced-motion: reduce)");const s=T(1709);this.particles=Array.from({length:560},()=>({u:-.9+s()*12.8,radiusOffset:(s()-.5)*.58,angleOffset:(s()-.5)*.19,verticalOffset:(s()-.5)*.36,size:.55+s()*1.45,tone:s()}))}mount(){this.resizeObserver=new ResizeObserver(()=>{this.measureStops(),this.draw()}),this.resizeObserver.observe(document.documentElement),window.addEventListener("scroll",this.onScroll,{passive:!0}),window.addEventListener("resize",this.onResize,{passive:!0}),this.reduceMotion.addEventListener("change",this.onMotionChange),this.measureStops(),this.setScrollPosition(this.visualT,"auto"),this.syncCards(),this.draw()}destroy(){var t;(t=this.resizeObserver)==null||t.disconnect(),window.removeEventListener("scroll",this.onScroll),window.removeEventListener("resize",this.onResize),this.reduceMotion.removeEventListener("change",this.onMotionChange),this.animationFrame!==void 0&&cancelAnimationFrame(this.animationFrame)}scrollTo(t,e="smooth"){const s=A(t,0,this.stops.length-1);this.measureStops(),this.setScrollPosition(s,this.reduceMotion.matches?"auto":e)}getActiveIndex(){return A(Math.round(this.visualT),0,this.stops.length-1)}measureStops(){this.stopPositions=this.stops.map(t=>{const e=t.getBoundingClientRect();return e.top+window.scrollY+e.height/2-window.innerHeight/2})}readScrollPosition(){if(this.stopPositions.length<2)return 0;const t=window.scrollY;if(t<=this.stopPositions[0])return 0;const e=this.stopPositions.length-1;if(t>=this.stopPositions[e])return e;for(let s=0;s<e;s+=1){const a=this.stopPositions[s],i=this.stopPositions[s+1];if(t<=i)return s+(t-a)/Math.max(1,i-a)}return e}setScrollPosition(t,e){const s=Math.floor(t),a=Math.min(this.stopPositions.length-1,Math.ceil(t)),i=t-s,d=(this.stopPositions[s]??0)*(1-i)+(this.stopPositions[a]??0)*i;if(e==="auto"){const o=document.documentElement.style.scrollBehavior;document.documentElement.style.scrollBehavior="auto",window.scrollTo({top:d,left:0,behavior:"auto"}),document.documentElement.style.scrollBehavior=o}else window.scrollTo({top:d,left:0,behavior:e});this.targetT=t,e==="auto"?(this.visualT=t,this.syncCards(),this.draw()):this.startAnimation()}startAnimation(){this.animationFrame===void 0&&(this.lastFrame=performance.now(),this.animationFrame=requestAnimationFrame(this.animate))}syncCards(){var s;const t=A(Math.round(this.visualT),0,this.cards.length-1),e=Math.abs(this.visualT-t);this.cards.forEach((a,i)=>{const d=this.visualT-i,o=A(1-Math.abs(d)*2.05,0,1);a.style.setProperty("--station-distance",d.toFixed(4)),a.style.opacity=o.toFixed(3);const n=i===t;a.classList.toggle("is-active",n),a.classList.toggle("is-docked",n&&e<.15),a.setAttribute("aria-hidden",String(!n)),a.inert=!n}),t!==this.activeIndex&&(this.activeIndex=t,(s=this.onActiveChange)==null||s.call(this,t))}project(t,e,s,a=0,i=0,d=0){const o=e<861,n=o?2.55:3.55,r=o?2.2:2.35,c=o?8.9:9.5,u=o?e*1.24:Math.min(e,s)*1.06,h=o?e*.5:e*.68,m=o?s*.34:s*.52,g=n+a,v=jt(t,this.visualT,g,r,i,d),y=u/(c-v.z);return{x:h+v.x*y,y:m-v.y*y,z:v.z,scale:y}}syncPreviews(t,e,s,a){const i=a?8.9:9.5,o=(a?t*1.24:Math.min(t,e)*1.06)/(i-s);this.previews.forEach(n=>{const r=Number(n.dataset.helixPreview),c=this.project(r,t,e),u=Math.abs(r-this.visualT),h=A((c.z+s)/(s*2),0,1),m=A(c.scale/o,.46,1),g=u<2.4&&c.x>-180&&c.x<t+180&&c.y>-180&&c.y<e+180,v=g?A(1-u/2.4,0,1)*(.35+h*.65):0,y=r===Math.round(this.visualT),f=y&&u<=$t;n.style.transform=`translate3d(${c.x.toFixed(2)}px, ${c.y.toFixed(2)}px, 0) translate(-50%, -50%) scale(${m.toFixed(4)})`,n.style.opacity=v.toFixed(3),n.style.visibility=g?"visible":"hidden",n.style.zIndex=String(20+Math.round(h*70)),n.classList.toggle("is-active",y),n.classList.toggle("is-clickable",f),n.inert=!f,n.tabIndex=f?0:-1,n.setAttribute("aria-hidden",String(!f))})}draw(){const t=this.canvas.getContext("2d");if(!t)return;const e=this.canvas.getBoundingClientRect(),s=Math.max(1,Math.round(e.width)),a=Math.max(1,Math.round(e.height)),i=s<720?1.5:2,d=Math.min(window.devicePixelRatio||1,i),o=Math.round(s*d),n=Math.round(a*d);(this.canvas.width!==o||this.canvas.height!==n)&&(this.canvas.width=o,this.canvas.height=n),t.setTransform(d,0,0,d,0,0),t.clearRect(0,0,s,a);const r=s<861,c=r?2.55:3.55,u=r?s*.5:s*.68;this.syncPreviews(s,a,c,r);const h=t.createLinearGradient(0,0,0,a);h.addColorStop(0,"rgba(111,180,255,0)"),h.addColorStop(.22,"rgba(111,180,255,0.09)"),h.addColorStop(.78,"rgba(111,180,255,0.09)"),h.addColorStop(1,"rgba(111,180,255,0)"),t.beginPath(),t.moveTo(u,0),t.lineTo(u,a),t.strokeStyle=h,t.lineWidth=1,t.stroke();const m=[],g=Math.max(-.85,this.visualT-4.2),v=Math.min(11.85,this.visualT+4.2),y=520;let f=this.project(g,s,a);for(let b=1;b<=y;b+=1){const k=g+(v-g)*b/y,z=this.project(k,s,a);m.push({from:f,to:z,depth:(f.z+z.z)/2}),f=z}if(m.sort((b,k)=>b.depth-k.depth).forEach(b=>{if(b.from.y<-80&&b.to.y<-80||b.from.y>a+80&&b.to.y>a+80)return;const k=A((b.depth+c)/(c*2),0,1);t.beginPath(),t.moveTo(b.from.x,b.from.y),t.lineTo(b.to.x,b.to.y),t.strokeStyle=`rgba(${Math.round(84+k*52)}, ${Math.round(142+k*62)}, 255, ${.12+k*.62})`,t.lineWidth=.65+k*2.35,t.stroke()}),this.particles.map(b=>({particle:b,projected:this.project(b.u,s,a,b.radiusOffset,b.angleOffset,b.verticalOffset)})).sort((b,k)=>b.projected.z-k.projected.z).forEach(({particle:b,projected:k})=>{if(k.x<-24||k.x>s+24||k.y<-24||k.y>a+24)return;const z=A((k.z+c)/(c*2),0,1),$=.1+z*.56;t.beginPath(),t.arc(k.x,k.y,b.size*(.68+z*.72),0,Math.PI*2),b.tone>.965?t.fillStyle=`rgba(242,193,78,${$})`:b.tone>.91?t.fillStyle=`rgba(224,69,42,${$})`:t.fillStyle=`rgba(111,180,255,${$})`,t.fill()}),this.stops.map((b,k)=>({index:k,projected:this.project(k,s,a)})).sort((b,k)=>b.projected.z-k.projected.z).forEach(({index:b,projected:k})=>{if(this.previewIndexes.has(b)||k.x<-70||k.x>s+70||k.y<-70||k.y>a+70)return;const z=b===Math.round(this.visualT),$=A((k.z+c)/(c*2),0,1),E=z?13:5+$*3;t.beginPath(),t.arc(k.x,k.y,E,0,Math.PI*2),t.fillStyle=z?"#f4f1e8":`rgba(111,180,255,${.22+$*.62})`,t.fill(),z&&(t.beginPath(),t.arc(k.x,k.y,21,0,Math.PI*2),t.strokeStyle="rgba(242,193,78,0.72)",t.lineWidth=1.5,t.stroke(),t.fillStyle="#12203f",t.font="650 10px 'IBM Plex Mono', monospace",t.textAlign="center",t.textBaseline="middle",t.fillText(String(b+1).padStart(2,"0"),k.x,k.y+.5))}),!r){const b=this.project(Math.round(this.visualT),s,a),k=this.previewIndexes.has(Math.round(this.visualT)),z=A(1-Math.abs(this.visualT-Math.round(this.visualT))/.18,0,1),$=Math.max(s*.42,b.x-s*.22),E=t.createLinearGradient($,0,b.x,0);E.addColorStop(0,"rgba(244,241,232,0)"),E.addColorStop(1,`rgba(244,241,232,${.28*z})`),t.beginPath(),t.moveTo($,b.y),t.lineTo(b.x-(k?104:23),b.y),t.strokeStyle=E,t.lineWidth=1,t.stroke()}}}const qt={adat:{label:"Adattisztítás",source:"./previews/data-cleaning.png"},knn:{label:"kNN",source:"./previews/knn.png"},"dontesi-fa":{label:"Döntési fa",source:"./previews/decision-tree.png"},regresszio:{label:"Regresszió",source:"./previews/regression.png"},kiertekeles:{label:"Kiértékelés",source:"./previews/evaluation.png"},klaszterezes:{label:"Klaszterezés",source:"./previews/clustering.png"}};class Et{constructor(){p(this,"spiral");p(this,"root");p(this,"currentIndex",0)}mount(t,e,s={}){var r;this.root=t;const a=Math.max(0,Math.min(M.length-1,s.initialIndex??0));this.currentIndex=a,t.innerHTML=`
      <main id="main-content" class="helix-page">
        <div class="helix-stage" aria-hidden="true">
          <canvas class="helix-canvas"></canvas>
          <div class="helix-vignette"></div>
        </div>

        <div class="helix-preview-layer">
          ${M.map((c,u)=>{const h=qt[c.slug];if(!h||c.status!=="live")return"";const m=String(c.index).padStart(2,"0");return`<a class="helix-preview accent-${c.accent}" href="#/${c.slug}"
              data-open-station="${c.slug}" data-helix-preview="${u}"
              aria-label="${h.label} interaktív modul megnyitása" aria-hidden="true" tabindex="-1" inert>
              <span class="helix-preview-frame"><img src="${h.source}" alt="" width="598" height="433" draggable="false" /></span>
              <span class="helix-preview-label" aria-hidden="true"><small>${m}</small><strong>${h.label}</strong></span>
            </a>`}).join("")}
        </div>

        <div class="helix-course-meta">
          <p>Bevezetés az adattudományba 1.</p>
          <a href="#/${L.slug}"><span>00 · Bevezető modul</span><strong>${L.shortTitle}</strong></a>
        </div>

        <div class="helix-counter" aria-live="polite">
          <span data-current-station>${String(a+1).padStart(2,"0")}</span>
          <i aria-hidden="true"><b data-progress-bar></b></i>
          <span>12</span>
        </div>

        <div class="helix-card-deck">
          ${M.map((c,u)=>{const h=String(c.index).padStart(2,"0"),m=u===a,g=e.has(c.slug);return`<article class="helix-card accent-${c.accent}${m?" is-active is-docked":""}" tabindex="-1"
              data-helix-card="${u}" style="--station-distance:${a-u};opacity:${m?1:0}"
              aria-hidden="${String(!m)}" ${m?"":"inert"}>
              <div class="helix-card-number"><span>${h}</span><small>/ 12</small></div>
              ${c.title!==c.shortTitle?`<p class="helix-card-category">${c.title}</p>`:""}
              <h1>${c.shortTitle}</h1>
              <p class="helix-card-description">${c.description}</p>
              ${c.status==="live"?`<a class="helix-module-link" href="#/${c.slug}" data-open-station="${c.slug}"><span>Interaktív modul</span><strong>Megnyitás</strong><b aria-hidden="true">↗</b></a>
                   <span class="helix-complete${g?" is-complete":""}" data-progress-slug="${c.slug}">${g?"Teljesítve":"Elérhető"}</span>`:'<p class="helix-availability">A modul még nem érhető el.</p>'}
            </article>`}).join("")}
        </div>

        <button class="helix-scroll-cue" type="button" data-next-station aria-label="Ugrás a következő témára">
          <span>Görgess a következő témához</span><i aria-hidden="true"></i>
        </button>

        <div class="helix-track" aria-label="A félév 12 témája">
          ${M.map((c,u)=>`<section class="helix-stop" data-helix-stop="${u}" aria-labelledby="helix-stop-title-${u}"><h2 class="sr-only" id="helix-stop-title-${u}">${c.index}. ${c.title}: ${c.shortTitle}</h2></section>`).join("")}
        </div>
      </main>`;const i=t.querySelector(".helix-canvas"),d=[...t.querySelectorAll("[data-helix-stop]")],o=[...t.querySelectorAll("[data-helix-card]")],n=[...t.querySelectorAll("[data-helix-preview]")];i&&(this.spiral=new Ct(i,{stops:d,cards:o,previews:n,initialIndex:a,onActiveChange:c=>{var u;this.currentIndex=c,this.updateStationUI(c),(u=s.onActiveChange)==null||u.call(s,c)}}),this.spiral.mount()),(r=t.querySelector("[data-next-station]"))==null||r.addEventListener("click",()=>{this.scrollToStation(Math.min(M.length-1,this.currentIndex+1))})}destroy(){var t;(t=this.spiral)==null||t.destroy(),this.spiral=void 0,this.root=void 0}scrollToStation(t,e="smooth"){var s;(s=this.spiral)==null||s.scrollTo(t,e)}getActiveIndex(){var t;return((t=this.spiral)==null?void 0:t.getActiveIndex())??this.currentIndex}updateStationUI(t){var i,d,o;const e=(i=this.root)==null?void 0:i.querySelector("[data-current-station]"),s=(d=this.root)==null?void 0:d.querySelector("[data-progress-bar]");e&&(e.textContent=String(t+1).padStart(2,"0")),s&&(s.style.width=`${(t+1)/M.length*100}%`);const a=(o=this.root)==null?void 0:o.querySelector("[data-next-station]");a&&(a.hidden=t===M.length-1,a.setAttribute("aria-label",t===M.length-1?"Az utolsó témánál jársz":`Ugrás a(z) ${t+2}. témára`))}}function j(l,t){const e=l.x-t.x,s=l.y-t.y;return e*e+s*s}function dt(l,t,e){const s=l.filter(n=>typeof n.label=="number");if(s.length===0)return{label:0,neighbors:[],confidence:0};const a=Math.max(1,Math.min(Math.floor(e),s.length)),i=s.map(n=>({point:n,distance:j(n,t)})).sort((n,r)=>n.distance-r.distance).slice(0,a).map(({point:n})=>n),d=new Map;i.forEach(n=>{const r=n.label??0,c=d.get(r)??{count:0,weight:0};c.count+=1,c.weight+=1/Math.max(1e-9,Math.sqrt(j(n,t))),d.set(r,c)});const o=[...d.entries()].sort((n,r)=>r[1].count-n[1].count||r[1].weight-n[1].weight)[0];return{label:o[0],neighbors:i,confidence:o[1].count/a}}function Lt(l,t){const e=t.length,s=l.map((a,i)=>[...a,t[i]]);for(let a=0;a<e;a+=1){let i=a;for(let o=a+1;o<e;o+=1)Math.abs(s[o][a])>Math.abs(s[i][a])&&(i=o);[s[a],s[i]]=[s[i],s[a]];const d=s[a][a];if(Math.abs(d)<1e-12)return Array(e).fill(0);for(let o=a;o<=e;o+=1)s[a][o]/=d;for(let o=0;o<e;o+=1){if(o===a)continue;const n=s[o][a];for(let r=a;r<=e;r+=1)s[o][r]-=n*s[a][r]}}return s.map(a=>a[e])}function ct(l,t,e=0){const a=Math.max(0,Math.min(Math.floor(t),Math.max(0,l.length-1)))+1,i=Array.from({length:a},()=>Array(a).fill(0)),d=Array(a).fill(0);l.forEach(o=>{const n=Array.from({length:a*2},(r,c)=>o.x**c);for(let r=0;r<a;r+=1){d[r]+=o.y*n[r];for(let c=0;c<a;c+=1)i[r][c]+=n[r+c]}});for(let o=1;o<a;o+=1)i[o][o]+=e;return Lt(i,d)}function nt(l,t){return l.reduceRight((e,s)=>e*t+s,0)}function W(l,t){return l.length===0?0:l.reduce((e,s)=>{const a=s.y-nt(t,s.x);return e+a*a},0)/l.length}function O(l,t,e=0){const s=Math.max(1,Math.min(Math.floor(t),l.length||1)),a=[...l].sort((o,n)=>o.x-n.x||o.y-n.y);let i=Array.from({length:s},(o,n)=>a[Math.min(a.length-1,Math.floor((n+.5)/s*a.length))]);if(e>0&&l.length>0){const o=[...l];let n=e>>>0;for(let r=o.length-1;r>0;r-=1){n=Math.imul(n,1664525)+1013904223>>>0;const c=n%(r+1);[o[r],o[c]]=[o[c],o[r]]}i=o.slice(0,s)}return{centroids:i.map(o=>o?{x:o.x,y:o.y}:{x:.5,y:.5}),assignments:Array(l.length).fill(-1),phase:"assign",iteration:0}}function Rt(l,t){if(l.length===0||t.phase==="done")return t;if(t.phase==="assign"){const o=l.map(n=>{let r=0,c=Number.POSITIVE_INFINITY;return t.centroids.forEach((u,h)=>{const m=j(n,u);m<c&&(r=h,c=m)}),r});return{...t,assignments:o,phase:"update"}}const s=t.centroids.map((o,n)=>l.filter((r,c)=>t.assignments[c]===n)).map(o=>o.length===0?void 0:{x:o.reduce((n,r)=>n+r.x,0)/o.length,y:o.reduce((n,r)=>n+r.y,0)/o.length}),a=new Set;s.forEach((o,n)=>{if(o)return;const r=l.map((u,h)=>({point:u,index:h,distance:t.assignments[h]>=0?j(u,t.centroids[t.assignments[h]]):Number.POSITIVE_INFINITY})).filter(({index:u})=>!a.has(u)).sort((u,h)=>h.distance-u.distance),c=r.find(({point:u})=>!s.some(h=>h&&j(u,h)<1e-12))??r[0];c&&(a.add(c.index),s[n]={x:c.point.x,y:c.point.y})});const i=s.map((o,n)=>o??t.centroids[n]),d=i.reduce((o,n,r)=>o+j(n,t.centroids[r]),0);return{centroids:i,assignments:t.assignments,phase:d<1e-8?"done":"assign",iteration:t.iteration+1}}function Y(l,t,e){const s=Array(l.length).fill(-99),a=Array(l.length).fill("noise"),i=l.map(n=>l.map((r,c)=>({index:c,distance:j(n,r)})).filter(({distance:r})=>r<=t*t).map(({index:r})=>r)),d=i.map(n=>n.length>=e);d.forEach((n,r)=>{n&&(a[r]="core")});let o=0;return l.forEach((n,r)=>{if(!d[r]||s[r]!==-99)return;const c=[r];for(s[r]=o;c.length>0;){const u=c.shift();if(u===void 0)break;i[u].forEach(h=>{s[h]===-99&&(s[h]=o,d[h]?c.push(h):a[h]="border")})}o+=1}),s.forEach((n,r)=>{n===-99&&(s[r]=-1)}),{assignments:s,types:a,clusters:o}}function It(l,t,e){return l.reduce((s,a,i)=>{const d=e[t[i]];return d?s+j(a,d):s},0)}function B(l){const t=l.getBoundingClientRect(),e=Math.min(window.devicePixelRatio||1,2),s=Math.max(1,Math.round(t.width)),a=Math.max(1,Math.round(t.height)),i=Math.round(s*e),d=Math.round(a*e);(l.width!==i||l.height!==d)&&(l.width=i,l.height=d);const o=l.getContext("2d");return o==null||o.setTransform(e,0,0,e,0,0),{width:s,height:a,dpr:e}}function N(l,t,e=20){const s=l.getBoundingClientRect(),a=t.clientX-s.left,i=t.clientY-s.top;return{x:Math.max(0,Math.min(1,(a-e)/Math.max(1,s.width-e*2))),y:Math.max(0,Math.min(1,(i-e)/Math.max(1,s.height-e*2)))}}function w(l,t,e,s=20){return[s+l.x*(t-s*2),s+l.y*(e-s*2)]}function G(l,t,e,s=20){l.save(),l.strokeStyle="rgba(18, 32, 63, 0.12)",l.lineWidth=1,l.setLineDash([2,5]);for(let a=0;a<=4;a+=1){const i=s+a/4*(t-s*2),d=s+a/4*(e-s*2);l.beginPath(),l.moveTo(i,s),l.lineTo(i,e-s),l.stroke(),l.beginPath(),l.moveTo(s,d),l.lineTo(t-s,d),l.stroke()}l.setLineDash([]),l.strokeStyle="rgba(18, 32, 63, 0.28)",l.strokeRect(s+.5,s+.5,t-s*2-1,e-s*2-1),l.restore()}function vt(l,t,e,s,a=5,i=!1){const d=["#d84429","#1e67b8","#907015","#17776c"],o=d[Math.abs(s)%d.length];l.save(),l.beginPath(),s%2===0?l.arc(t,e,a,0,Math.PI*2):l.rect(t-a*.82,e-a*.82,a*1.64,a*1.64),l.fillStyle=i?"#f4f1e8":o,l.fill(),l.strokeStyle=o,l.lineWidth=i?2:1.25,l.stroke(),l.restore()}function P(l,t=.04,e=.96){return Math.max(t,Math.min(e,l))}function lt(l=18,t=96){const e=T(l);return Array.from({length:t},(s,a)=>{const i=a%2,d=e()*Math.PI,o=S(e)*.018,n=S(e)*.018;return i===0?{x:P(.28+Math.cos(d)*.24+o),y:P(.49-Math.sin(d)*.25+n),label:i}:{x:P(.7-Math.cos(d)*.24+o),y:P(.48+Math.sin(d)*.25+n),label:i}})}function bt(l=4,t=96){const e=T(l);return Array.from({length:t},()=>{const s=.08+e()*.84,a=.08+e()*.84,i=(s>.5?1:0)+(a>.5?2:0);return{x:s,y:a,label:i===0||i===3?0:1}})}function kt(l=72,t=96){const e=T(l);return Array.from({length:t},(s,a)=>{const i=a%2,d=i===0?.42:.59,o=i===0?.47:.54;return{x:P(d+S(e)*.15),y:P(o+S(e)*.15),label:i}})}function yt(l=29){const t=T(l),e=[];for(let s=0;s<34;s+=1){const a=-.93+s/33*1.86,d=.12+.52*a-.27*a*a+.2*Math.sin(a*4.5)+S(t)*.105;e.push({x:a,y:d,split:s%4===1?"test":"train"})}return e}function Ht(l=57){const t=T(l);return Array.from({length:34},(e,s)=>{const a=-.93+s/33*1.86,i=-.48+1.08*a*a+S(t)*.085;return{x:a,y:i,split:s%4===1?"test":"train"}})}function Nt(l=83){const t=T(l);return Array.from({length:34},(e,s)=>{const a=-.93+s/33*1.86,i=-.06+.62*a+S(t)*.07;return{x:a,y:s===24?.82:i,split:s%4===1?"test":"train"}})}function tt(l,t,e,s,a){return Array.from({length:a},()=>({x:P(t+S(l)*s),y:P(e+S(l)*s)}))}function ft(l=11){const t=T(l);return[...tt(t,.25,.3,.07,38),...tt(t,.72,.34,.075,38),...tt(t,.5,.75,.08,38)]}function Dt(l=42){const t=T(l),e=[];for(let s=0;s<62;s+=1){const a=s/62*Math.PI*2+S(t)*.025,i=.34+S(t)*.014;e.push({x:.5+Math.cos(a)*i,y:.5+Math.sin(a)*i})}return e.push(...tt(t,.5,.5,.075,48)),e}function Bt(l=7){const t=T(l),e=[];for(let s=0;s<3;s+=1)for(let a=0;a<36;a+=1){const i=.08+t()*.84,d=.18+s*.27+.32*(i-.5)+S(t)*.025;e.push({x:P(i),y:P(d)})}return e}function Ft(l=92,t=110){const e=T(l);return Array.from({length:t},()=>({x:.06+e()*.88,y:.06+e()*.88}))}function Kt(l=2026,t=86){const e=T(l),s=[],a=[{x:.28,y:.64,sx:.11,sy:.12},{x:.68,y:.66,sx:.12,sy:.1},{x:.51,y:.3,sx:.14,sy:.09}];for(let i=0;i<t;i+=1){const d=a[i%a.length];s.push({x:P(d.x+S(e)*d.sx),y:P(d.y+S(e)*d.sy),label:i%a.length})}return s}const X={blobs:{title:"Három csomó",question:"Talál-e mindkét módszer három csoportot?",make:()=>ft(),epsilon:.1,minPoints:5},rings:{title:"Gyűrű és mag",question:"Mit jelent itt a „középpont”?",make:()=>Dt(),epsilon:.1,minPoints:5},bands:{title:"Ferde sávok",question:"A gömbszerűség jó feltételezés?",make:()=>Bt(),epsilon:.15,minPoints:5},noise:{title:"Egyenletes pontok",question:"Mikor marad a többség zaj?",make:()=>Ft(),epsilon:.04,minPoints:5}},C=["#d84429","#1e67b8","#927019","#17776c","#7b4f9d","#5e697b"];class Ot{constructor(t){p(this,"context");p(this,"root");p(this,"canvas");p(this,"points",ft());p(this,"algorithm","kmeans");p(this,"k",3);p(this,"epsilon",.1);p(this,"minPoints",5);p(this,"initializationSeed",0);p(this,"kMeansState",O(this.points,this.k));p(this,"isPlacingCentroids",!1);p(this,"manualCentroids",[]);p(this,"dbscanResult",Y(this.points,this.epsilon,this.minPoints));p(this,"pointer");p(this,"drawing",!1);p(this,"lastDrawn");p(this,"touchDrawingEnabled",!1);p(this,"tapCandidate");p(this,"resizeObserver");p(this,"runTimer");p(this,"onKeyDown",t=>{var e;!((e=this.root)!=null&&e.isConnected)||t.target.closest("button, a, input, select, textarea, summary, [contenteditable='true']")||(t.code==="Space"&&this.algorithm==="kmeans"&&(t.preventDefault(),this.step()),t.key.toLowerCase()==="r"&&(this.resetAlgorithms(),this.update()))});this.context=t}mount(t){this.root=t,t.innerHTML=`
      <article class="module-page" data-module="clustering">
        <header class="module-intro paper-header">
          <div class="module-index">08 <span>/ 12</span></div>
          <div>
            <p class="eyebrow">Felügyelet nélküli tanulás · klaszterezés</p>
            <h1>k-közép és DBSCAN</h1>
            <p class="lede">Az adatokhoz nincs osztálycímke. Válassz algoritmust és paramétereket, majd hasonlítsd össze a klasztereket.</p>
          </div>
          <a class="present-link" href="?mode=present#/klaszterezes" aria-label="Klaszterezés megnyitása vetítés módban">Vetítés <span aria-hidden="true">↗</span></a>
        </header>

        <section class="workbench" aria-labelledby="cluster-workbench-title">
          <div class="workbench-topline">
            <div><p class="section-number">INTERAKTÍV MUNKAPAD</p><h2 id="cluster-workbench-title">A k-közép és a DBSCAN eredménye</h2></div>
            <div class="segmented" role="group" aria-label="Klaszterező algoritmus">
              <button class="is-active" type="button" data-algorithm="kmeans" aria-pressed="true">k-közép</button>
              <button type="button" data-algorithm="dbscan" aria-pressed="false">DBSCAN</button>
            </div>
          </div>

          <div class="preset-strip" role="group" aria-label="Adatkészlet választása">
            ${Object.entries(X).map(([e,s],a)=>`
              <button class="preset ${a===0?"is-active":""}" type="button" data-preset="${e}" aria-pressed="${a===0}">
                <span class="preset-mark preset-${e}" aria-hidden="true"><i></i><i></i><i></i><i></i><i></i></span>
                <span><strong>${s.title}</strong><small>${s.question}</small></span>
              </button>`).join("")}
            <button class="preset" type="button" data-preset="custom" aria-pressed="false"><span class="preset-mark preset-custom" aria-hidden="true">＋</span><span><strong>Saját</strong><small>Üres, címkézetlen adatkészlet.</small></span></button>
          </div>

          <div class="canvas-layout cluster-layout">
            <aside class="tool-column" aria-label="Futtatási vezérlők">
              <div data-kmeans-tools>
                <button class="button button-ink" type="button" data-action="step">Következő lépés <kbd>Space</kbd></button>
                <button class="button button-paper" type="button" data-action="run">Futtasd végig</button>
                <button class="text-tool" type="button" data-action="restart">Új inicializálás</button>
              </div>
              <div data-dbscan-tools hidden>
                <p class="tool-note">A modul minden paramétermódosítás után újraszámolja a DBSCAN eredményét. Mozgasd a mutatót a pontok fölött; az ε csúszkával változtasd a kör sugarát.</p>
              </div>
              <div class="placement-panel">
                <p class="control-label">Mit teszel a vászonra?</p>
                <div class="placement-mode-group" role="group" aria-label="Vászon beviteli módja">
                  <button class="placement-mode is-active" type="button" data-placement-mode="point" aria-pressed="true">
                    <span class="placement-symbol placement-point" aria-hidden="true"></span>
                    <span><strong>Adatpontok</strong><small>Kattints vagy húzd</small></span>
                  </button>
                  <button class="placement-mode" type="button" data-placement-mode="centroid" data-action="manual-centroids" aria-pressed="false">
                    <span class="placement-symbol placement-centroid" aria-hidden="true"></span>
                    <span><strong>Középpontok</strong><small data-centroid-count>${this.k} kezdőpont</small></span>
                  </button>
                </div>
                <button class="text-tool touch-draw-toggle" type="button" data-action="toggle-draw" aria-pressed="false"><span>Folyamatos rajzolás</span><strong data-draw-state>ki</strong></button>
              </div>
              <div class="tool-divider"></div>
              <button class="text-tool" type="button" data-action="clear">Összes pont törlése</button>
            </aside>

            <div class="canvas-column">
              <div class="canvas-frame">
                <canvas class="data-canvas" aria-label="Klaszterezési pontfelhő és algoritmuseredmény" role="img"></canvas>
                <div class="canvas-corner" aria-hidden="true">x₂</div><div class="canvas-axis" aria-hidden="true">x₁</div>
                <div class="centroid-placement-prompt" data-centroid-prompt hidden aria-hidden="true"></div>
              </div>
              <p class="canvas-summary" data-summary aria-live="polite"></p>
            </div>

            <aside class="parameter-column">
              <div data-kmeans-parameters>
                <label class="range-control" for="cluster-k"><span><strong>Klaszterek száma</strong><output for="cluster-k" data-k-output>3</output></span><input id="cluster-k" type="range" min="2" max="6" step="1" value="3" /><span class="range-ends"><small>2</small><small>6</small></span></label>
              </div>
              <div data-dbscan-parameters hidden>
                <label class="range-control" for="cluster-epsilon"><span><strong>ε sugár</strong><output for="cluster-epsilon" data-epsilon-output>0,10</output></span><input id="cluster-epsilon" type="range" min="4" max="24" step="1" value="10" /><span class="range-ends"><small>szűk</small><small>tág</small></span></label>
                <label class="range-control" for="cluster-minpts"><span><strong>MinPts</strong><output for="cluster-minpts" data-minpts-output>5</output></span><input id="cluster-minpts" type="range" min="2" max="10" step="1" value="5" /><span class="range-ends"><small>laza</small><small>szigorú</small></span></label>
              </div>
              <div class="observation" data-observation></div>
              <dl class="metric-list">
                <div><dt data-primary-label>Iteráció</dt><dd data-primary-metric>0</dd></div>
                <div><dt data-secondary-label>SSE</dt><dd data-secondary-metric>—</dd></div>
              </dl>
            </aside>
          </div>
          <div class="canvas-legend cluster-legend" data-dbscan-legend hidden aria-label="DBSCAN ponttípusok jelmagyarázata"><span><i class="legend-core" aria-hidden="true"></i>magpont</span><span><i class="legend-border" aria-hidden="true"></i>határpont</span><span><i class="legend-noise" aria-hidden="true">×</i>zajpont</span></div>

          <details class="keyboard-entry">
            <summary>Billentyűzetes pontbevitel</summary>
            <div class="keyboard-entry-fields">
              <label>Elem
                <select data-entry-kind>
                  <option value="point">Adatpont</option>
                  <option value="centroid">Középpont</option>
                </select>
              </label>
              <label>x koordináta <input type="number" min="0" max="1" step="0.05" value="0.5" data-entry-x /></label>
              <label>y koordináta <input type="number" min="0" max="1" step="0.05" value="0.5" data-entry-y /></label>
              <button class="button button-ink" type="button" data-action="add-keyboard"><span data-entry-action-label>Adatpont hozzáadása</span></button>
            </div>
          </details>
        </section>

        <section class="experiments depth-shell" aria-labelledby="cluster-try-title">
          <div class="depth-kicker">Kísérletek</div><h2 id="cluster-try-title">A két módszer összehasonlítása</h2>
          <ol class="experiment-list">
            <li><span>01</span><div><strong>Léptesd a k-közepet.</strong><p>A k-közép először a pontokat rendeli a centroidokhoz, majd újraszámolja a centroidokat.</p></div></li>
            <li><span>02</span><div><strong>Válts Gyűrű és mag készletre.</strong><p>A k-közép a gyűrűt centroidok körüli részekre osztja; a DBSCAN a sűrűség szerint összefüggő alakot követi.</p></div></li>
            <li><span>03</span><div><strong>Nyisd meg az Egyenletes pontok készletet.</strong><p>Az adott ε és MinPts mellett a DBSCAN akár a pontok többségét zajként hagyhatja.</p></div></li>
          </ol>
        </section>

        <section class="depth reading-layer" aria-labelledby="cluster-depth-title">
          <p class="eyebrow">Magyarázat</p>
          <h2 id="cluster-depth-title">A klaszterfelosztás a módszertől és a paraméterektől függ.</h2>
          <p>Az eredményt az ábrázolt változók, a távolságmérték és a felhasználási cél is befolyásolja.</p>
          <div class="concept-grid">
            <div><p class="concept-label">k-közép</p><h3>Centroidalapú felosztás</h3><p>Minden pont a legközelebbi centroidhoz kerül, majd a centroid a hozzá tartozó pontok átlagába mozdul.</p></div>
            <div><p class="concept-label">DBSCAN</p><h3>Sűrűségalapú felosztás</h3><p>Magpont az, amelynek ε sugarú környezetében, önmagát is beleszámítva, legalább MinPts pont van. A ritka pont lehet zaj.</p></div>
          </div>
          <aside class="edge-case"><strong>Algoritmusválasztás.</strong> A k-közép gömbszerű klasztereknél használható jól. A DBSCAN nem konvex alakokat is kezel, de érzékeny az ε és a MinPts értékére.</aside>
          <div class="knowledge-check" data-quiz>
            <p class="concept-label">Ellenőrző kérdés</p>
            <h3>Melyik algoritmus képes a gyűrűt és a magot alakjuk szerint két klaszterként kezelni?</h3>
            <div class="answer-grid">
              <button type="button" data-answer="wrong">k-közép, k = 2</button>
              <button type="button" data-answer="right">DBSCAN megfelelő ε és MinPts mellett</button>
              <button type="button" data-answer="wrong">k-közép, k = 10</button>
            </div>
            <p class="quiz-feedback" data-quiz-feedback aria-live="polite"></p>
          </div>
        </section>
      </article>`,this.canvas=t.querySelector("canvas.data-canvas")??void 0,this.bindControls(),this.canvas&&(this.resizeObserver=new ResizeObserver(()=>this.draw()),this.resizeObserver.observe(this.canvas)),this.update()}destroy(){var t;(t=this.resizeObserver)==null||t.disconnect(),this.stopRun(),window.removeEventListener("keydown",this.onKeyDown),this.root=void 0,this.canvas=void 0}bindControls(){var e,s,a,i,d,o,n,r,c,u;if(!this.root||!this.canvas)return;this.root.querySelectorAll("[data-algorithm]").forEach(h=>{h.addEventListener("click",()=>{var m;this.stopRun(),this.algorithm=h.dataset.algorithm??"kmeans",this.cancelManualCentroidPlacement(),(m=this.root)==null||m.querySelectorAll("[data-algorithm]").forEach(g=>{const v=g===h;g.classList.toggle("is-active",v),g.setAttribute("aria-pressed",String(v))}),this.syncAlgorithmControls(),this.update()})}),this.root.querySelectorAll("[data-preset]").forEach(h=>{h.addEventListener("click",()=>{var g,v,y;const m=h.dataset.preset??"blobs";if(this.points=m==="custom"?[]:X[m].make(),m!=="custom"){this.epsilon=X[m].epsilon,this.minPoints=X[m].minPoints;const f=(g=this.root)==null?void 0:g.querySelector("#cluster-epsilon"),x=(v=this.root)==null?void 0:v.querySelector("#cluster-minpts");f&&(f.value=String(Math.round(this.epsilon*100))),x&&(x.value=String(this.minPoints))}this.initializationSeed=0,this.resetAlgorithms(),(y=this.root)==null||y.querySelectorAll("[data-preset]").forEach(f=>{const x=f===h;f.classList.toggle("is-active",x),f.setAttribute("aria-pressed",String(x))}),this.update()})}),(e=this.root.querySelector("#cluster-k"))==null||e.addEventListener("input",h=>{this.stopRun(),this.k=Number(h.target.value),this.initializationSeed=0,this.cancelManualCentroidPlacement(),this.kMeansState=O(this.points,this.k,this.initializationSeed),this.update()}),(s=this.root.querySelector("#cluster-epsilon"))==null||s.addEventListener("input",h=>{this.stopRun(),this.epsilon=Number(h.target.value)/100,this.dbscanResult=Y(this.points,this.epsilon,this.minPoints),this.update()}),(a=this.root.querySelector("#cluster-minpts"))==null||a.addEventListener("input",h=>{this.stopRun(),this.minPoints=Number(h.target.value),this.dbscanResult=Y(this.points,this.epsilon,this.minPoints),this.update()}),(i=this.root.querySelector("[data-action='step']"))==null||i.addEventListener("click",()=>{this.stopRun(),this.step()}),(d=this.root.querySelector("[data-action='run']"))==null||d.addEventListener("click",()=>this.run()),this.root.querySelectorAll("[data-placement-mode]").forEach(h=>{h.addEventListener("click",()=>{h.dataset.placementMode==="centroid"?this.isPlacingCentroids||this.startManualCentroidPlacement():this.cancelManualCentroidPlacement(),this.update()})}),(o=this.root.querySelector("[data-action='toggle-draw']"))==null||o.addEventListener("click",h=>{var v;if(this.isPlacingCentroids)return;this.touchDrawingEnabled=!this.touchDrawingEnabled;const m=h.currentTarget;m.setAttribute("aria-pressed",String(this.touchDrawingEnabled)),m.classList.toggle("is-active",this.touchDrawingEnabled);const g=m.querySelector("[data-draw-state]");g&&(g.textContent=this.touchDrawingEnabled?"be":"ki"),(v=this.canvas)==null||v.classList.toggle("is-touch-drawing",this.touchDrawingEnabled)}),(n=this.root.querySelector("[data-action='restart']"))==null||n.addEventListener("click",()=>{this.stopRun(),this.initializationSeed+=1,this.cancelManualCentroidPlacement(),this.kMeansState=O(this.points,this.k,this.initializationSeed),this.update()}),(r=this.root.querySelector("[data-action='clear']"))==null||r.addEventListener("click",()=>{this.points=[],this.resetAlgorithms(),this.update()}),(c=this.root.querySelector("[data-entry-kind]"))==null||c.addEventListener("change",()=>this.syncKeyboardEntry()),(u=this.root.querySelector("[data-action='add-keyboard']"))==null||u.addEventListener("click",()=>{var y,f,x,F,b,k;const h=Number(((f=(y=this.root)==null?void 0:y.querySelector("[data-entry-x]"))==null?void 0:f.value)??.5),m=Number(((F=(x=this.root)==null?void 0:x.querySelector("[data-entry-y]"))==null?void 0:F.value)??.5),g={x:Math.max(0,Math.min(1,h)),y:Math.max(0,Math.min(1,m))};((k=(b=this.root)==null?void 0:b.querySelector("[data-entry-kind]"))==null?void 0:k.value)==="centroid"&&this.algorithm==="kmeans"?(this.isPlacingCentroids||this.startManualCentroidPlacement(),this.placeManualCentroid(g)):this.addPoint(g)}),this.canvas.addEventListener("pointerdown",h=>{var v;const m=N(this.canvas,h),g=this.algorithm==="kmeans"&&this.isPlacingCentroids?"centroid":"point";if(this.pointer=m,h.pointerType!=="mouse"&&(g==="centroid"||!this.touchDrawingEnabled)){this.tapCandidate={point:m,clientX:h.clientX,clientY:h.clientY,moved:!1,mode:g};return}if((v=this.canvas)==null||v.setPointerCapture(h.pointerId),g==="centroid"){this.placeManualCentroid(m);return}this.drawing=!0,this.lastDrawn=void 0,this.addPoint(m)}),this.canvas.addEventListener("pointermove",h=>{if(this.pointer=N(this.canvas,h),this.tapCandidate){Math.hypot(h.clientX-this.tapCandidate.clientX,h.clientY-this.tapCandidate.clientY)>9&&(this.tapCandidate.moved=!0);return}this.drawing?this.addPoint(this.pointer):this.draw()});const t=()=>{this.drawing=!1,this.lastDrawn=void 0};this.canvas.addEventListener("pointerup",h=>{var m;this.tapCandidate&&(this.tapCandidate.moved||(this.tapCandidate.mode==="centroid"?this.placeManualCentroid(this.tapCandidate.point):(this.lastDrawn=void 0,this.addPoint(this.tapCandidate.point))),this.tapCandidate=void 0),(m=this.canvas)!=null&&m.hasPointerCapture(h.pointerId)&&this.canvas.releasePointerCapture(h.pointerId),t()}),this.canvas.addEventListener("pointercancel",()=>{this.tapCandidate=void 0,t()}),this.canvas.addEventListener("lostpointercapture",t),this.canvas.addEventListener("pointerleave",()=>{this.pointer=void 0,this.tapCandidate=void 0,t(),this.update()}),window.addEventListener("keydown",this.onKeyDown),this.root.querySelectorAll("[data-answer]").forEach(h=>{h.addEventListener("click",()=>{var v,y;const m=h.dataset.answer==="right";(v=this.root)==null||v.querySelectorAll("[data-answer]").forEach(f=>f.classList.remove("is-correct","is-wrong")),h.classList.add(m?"is-correct":"is-wrong");const g=(y=this.root)==null?void 0:y.querySelector("[data-quiz-feedback]");g&&(g.textContent=m?"Helyes. A DBSCAN sűrűség alapján kapcsolja össze a pontokat, ezért a gyűrűt nem bontja centroidok körüli részekre. A modult teljesítetted.":"A k-közép minden klasztert egy centroiddal reprezentál."),m&&this.context.onComplete()})})}syncAlgorithmControls(){var s;const t=this.algorithm==="kmeans";["[data-kmeans-tools]","[data-kmeans-parameters]"].forEach(a=>{var d;const i=(d=this.root)==null?void 0:d.querySelector(a);i&&(i.hidden=!t)}),["[data-dbscan-tools]","[data-dbscan-parameters]"].forEach(a=>{var d;const i=(d=this.root)==null?void 0:d.querySelector(a);i&&(i.hidden=t)});const e=(s=this.root)==null?void 0:s.querySelector("[data-dbscan-legend]");e&&(e.hidden=t),this.syncKeyboardEntry(),this.syncManualCentroidControls()}resetAlgorithms(){this.stopRun(),this.cancelManualCentroidPlacement(),this.kMeansState=O(this.points,this.k,this.initializationSeed),this.dbscanResult=Y(this.points,this.epsilon,this.minPoints)}startManualCentroidPlacement(){this.stopRun(),this.isPlacingCentroids=!0,this.manualCentroids=[],this.syncManualCentroidControls()}cancelManualCentroidPlacement(){this.isPlacingCentroids=!1,this.manualCentroids=[],this.syncManualCentroidControls()}placeManualCentroid(t){!this.isPlacingCentroids||this.algorithm!=="kmeans"||(this.manualCentroids.push({x:t.x,y:t.y}),this.manualCentroids.length===this.k&&(this.kMeansState={centroids:this.manualCentroids.map(e=>({...e})),assignments:Array(this.points.length).fill(-1),phase:"assign",iteration:0},this.isPlacingCentroids=!1,this.manualCentroids=[]),this.update())}syncManualCentroidControls(){var o,n,r,c,u,h,m,g;const t=this.algorithm==="kmeans"&&this.isPlacingCentroids,e=(o=this.root)==null?void 0:o.querySelector("[data-placement-mode='point']"),s=(n=this.root)==null?void 0:n.querySelector("[data-placement-mode='centroid']");e==null||e.classList.toggle("is-active",!t),e==null||e.setAttribute("aria-pressed",String(!t)),s==null||s.classList.toggle("is-active",t),s==null||s.setAttribute("aria-pressed",String(t)),s&&(s.disabled=this.algorithm!=="kmeans");const a=s==null?void 0:s.querySelector("[data-centroid-count]");a&&(a.textContent=t?`${this.manualCentroids.length} / ${this.k}`:`${this.k} kezdőpont`),(r=this.root)==null||r.querySelectorAll("[data-action='step'], [data-action='run']").forEach(v=>{v.disabled=t});const i=(c=this.root)==null?void 0:c.querySelector("[data-action='toggle-draw']");i&&(i.disabled=t);const d=(u=this.root)==null?void 0:u.querySelector("[data-centroid-prompt]");d&&(d.hidden=!t,d.innerHTML=t?`<span>KÖZÉPPONT ${this.manualCentroids.length+1} / ${this.k}</span><strong>Kattints a vászonra.</strong>`:""),(h=this.canvas)==null||h.classList.toggle("is-placing-centroids",t),(m=this.canvas)==null||m.classList.toggle("is-touch-drawing",this.touchDrawingEnabled&&!t),(g=this.canvas)==null||g.setAttribute("aria-label",t?`Klaszterezési pontfelhő. A(z) ${this.manualCentroids.length+1}. kezdő középpont helyének kijelölése következik, összesen ${this.k} középpontból.`:"Klaszterezési pontfelhő és algoritmuseredmény")}syncKeyboardEntry(){var a,i;const t=(a=this.root)==null?void 0:a.querySelector("[data-entry-kind]"),e=t==null?void 0:t.querySelector("option[value='centroid']");e&&(e.disabled=this.algorithm!=="kmeans"),t&&this.algorithm!=="kmeans"&&t.value==="centroid"&&(t.value="point");const s=(i=this.root)==null?void 0:i.querySelector("[data-entry-action-label]");s&&(s.textContent=(t==null?void 0:t.value)==="centroid"?"Középpont elhelyezése":"Adatpont hozzáadása")}addPoint(t){this.lastDrawn&&(this.lastDrawn.x-t.x)**2+(this.lastDrawn.y-t.y)**2<.0012||this.points.length>=320||(this.points.push(t),this.lastDrawn=t,this.resetAlgorithms(),this.update())}step(){this.isPlacingCentroids||(this.kMeansState=Rt(this.points,this.kMeansState),this.update())}run(){this.runTimer=void 0,!this.isPlacingCentroids&&(this.kMeansState.phase==="done"&&(this.kMeansState=O(this.points,this.k,this.initializationSeed)),this.step(),this.kMeansState.phase!=="done"&&this.kMeansState.iteration<30&&(this.runTimer=window.setTimeout(()=>this.run(),520)))}stopRun(){this.runTimer!==void 0&&window.clearTimeout(this.runTimer),this.runTimer=void 0}update(){var s;this.dbscanResult=Y(this.points,this.epsilon,this.minPoints),this.syncManualCentroidControls();const t=(a,i)=>{var o;const d=(o=this.root)==null?void 0:o.querySelector(a);d&&(d.textContent=i)};t("[data-k-output]",String(this.k)),t("[data-epsilon-output]",this.epsilon.toFixed(2).replace(".",",")),t("[data-minpts-output]",String(this.minPoints));const e=(s=this.root)==null?void 0:s.querySelector("[data-observation]");if(this.algorithm==="kmeans")if(this.isPlacingCentroids){const a=this.k-this.manualCentroids.length;e&&(e.innerHTML=`<p class="control-label">Kézi inicializálás</p><strong>${this.manualCentroids.length} / ${this.k} középpont a helyén.</strong><p>${a===1?"Még egy középpontot jelölj ki.":`Még ${a} középpontot jelölj ki.`}</p>`),t("[data-primary-label]","Elhelyezve"),t("[data-primary-metric]",`${this.manualCentroids.length} / ${this.k}`),t("[data-secondary-label]","Következő lépés"),t("[data-secondary-metric]",String(this.manualCentroids.length+1)),t("[data-summary]",`${this.points.length} adatpont · ${this.manualCentroids.length} / ${this.k} középpont elhelyezve`)}else{const a=this.kMeansState.phase==="assign"?"Hozzárendelési lépés.":this.kMeansState.phase==="update"?"Centroidfrissítési lépés.":"A centroidok konvergáltak.";e&&(e.innerHTML=`<p class="control-label">Aktuális eredmény</p><strong>${a}</strong><p>${this.kMeansState.phase==="assign"?"Minden pontot a hozzá legközelebbi centroidhoz rendelünk.":this.kMeansState.phase==="update"?"Minden centroid a saját pontjainak átlagába mozdul.":"Ez egy lokális optimum; más kezdés más eredményt adhat."}</p>`),t("[data-primary-label]","Iteráció"),t("[data-primary-metric]",String(this.kMeansState.iteration)),t("[data-secondary-label]","Klaszteren belüli négyzetösszeg (SSE)");const i=this.kMeansState.assignments.every(d=>d>=0);t("[data-secondary-metric]",i&&this.points.length>0?It(this.points,this.kMeansState.assignments,this.kMeansState.centroids).toFixed(2):"—"),t("[data-summary]",`${this.points.length} címkézetlen pont · ${this.k} beállított klaszter · ${a}`)}else{const a=this.dbscanResult.assignments.filter(i=>i<0).length;e&&(e.innerHTML=`<p class="control-label">Aktuális eredmény</p><strong>${this.dbscanResult.clusters} klaszter, ${a} zajpont.</strong><p>${a>this.points.length*.45?"Az ε túl szűk lehet: kevés pont éri el a szükséges sűrűséget.":this.dbscanResult.clusters===1?"Az ε összeköthette a korábban különálló sűrű részeket.":"A DBSCAN összefüggő sűrűségi komponenseket azonosított."}</p>`),t("[data-primary-label]","Klaszter"),t("[data-primary-metric]",String(this.dbscanResult.clusters)),t("[data-secondary-label]","Zajpont"),t("[data-secondary-metric]",String(a)),t("[data-summary]",`${this.points.length} címkézetlen pont · ${this.dbscanResult.clusters} klaszter · ${a} pontot nem sorolt be a DBSCAN.`)}this.draw()}draw(){var i;if(!this.canvas)return;const t=this.canvas.getContext("2d");if(!t)return;const{width:e,height:s}=B(this.canvas);t.clearRect(0,0,e,s),t.fillStyle="#f4f1e8",t.fillRect(0,0,e,s),G(t,e,s);const a=this.algorithm==="kmeans"?this.isPlacingCentroids?Array(this.points.length).fill(-1):this.kMeansState.assignments:this.dbscanResult.assignments;if(this.algorithm==="kmeans"&&!this.isPlacingCentroids&&this.kMeansState.assignments.some(d=>d>=0)&&(t.save(),t.lineWidth=.8,this.points.forEach((d,o)=>{const n=a[o],r=this.kMeansState.centroids[n];if(!r)return;const[c,u]=w(d,e,s),[h,m]=w(r,e,s);t.beginPath(),t.moveTo(c,u),t.lineTo(h,m),t.strokeStyle=`${C[n%C.length]}24`,t.lineWidth=.75,t.stroke()}),t.restore()),this.points.forEach((d,o)=>{const[n,r]=w(d,e,s),c=a[o];t.save(),t.beginPath();const u=c<0;if(this.algorithm==="dbscan"&&u)t.moveTo(n-3.5,r-3.5),t.lineTo(n+3.5,r+3.5),t.moveTo(n+3.5,r-3.5),t.lineTo(n-3.5,r+3.5),t.strokeStyle="#6d7480",t.lineWidth=1.6,t.stroke();else{const h=c>=0?C[c%C.length]:"#526077",m=this.algorithm==="dbscan"?this.dbscanResult.types[o]:"core",g=this.algorithm==="kmeans"&&c>=0,v=g?5.8:m==="core"?4.8:4;t.arc(n,r,v,0,Math.PI*2),t.fillStyle=m==="border"?"#f4f1e8":h,t.fill(),t.strokeStyle=g?"rgba(18, 32, 63, 0.52)":h,t.lineWidth=g?1.15:m==="border"?1.8:1,t.stroke()}t.restore()}),this.algorithm==="kmeans"){if((this.isPlacingCentroids?this.manualCentroids:this.kMeansState.centroids).forEach((o,n)=>{const[r,c]=w(o,e,s);t.save(),t.fillStyle="rgba(244, 241, 232, 0.96)",t.strokeStyle="#12203f",t.lineWidth=1.5,t.beginPath(),t.arc(r,c,10,0,Math.PI*2),t.fill(),t.stroke(),t.strokeStyle=C[n%C.length],t.lineWidth=3.5,t.beginPath(),t.moveTo(r-8,c),t.lineTo(r+8,c),t.moveTo(r,c-8),t.lineTo(r,c+8),t.stroke(),t.fillStyle="#12203f",t.beginPath(),t.arc(r,c,2.4,0,Math.PI*2),t.fill(),this.isPlacingCentroids&&(t.fillStyle=C[n%C.length],t.font="600 11px 'IBM Plex Mono', monospace",t.textAlign="center",t.textBaseline="bottom",t.fillText(String(n+1),r,c-10)),t.restore()}),this.isPlacingCentroids&&this.pointer){const[o,n]=w(this.pointer,e,s),r=C[this.manualCentroids.length%C.length];t.save(),t.strokeStyle=r,t.globalAlpha=.58,t.lineWidth=2,t.setLineDash([4,4]),t.beginPath(),t.arc(o,n,11,0,Math.PI*2),t.stroke(),t.setLineDash([]),t.beginPath(),t.moveTo(o-7,n),t.lineTo(o+7,n),t.moveTo(o,n-7),t.lineTo(o,n+7),t.stroke(),t.restore()}}else if(this.pointer&&this.points.length>0){const d=this.points.reduce((h,m,g)=>j(m,this.pointer)<j(this.points[h],this.pointer)?g:h,0),o=this.points[d],n=this.points.filter(h=>j(h,o)<=this.epsilon*this.epsilon),[r,c]=w(o,e,s);n.forEach(h=>{const[m,g]=w(h,e,s);t.beginPath(),t.arc(m,g,7,0,Math.PI*2),t.strokeStyle="rgba(184, 50, 30, .5)",t.lineWidth=1,t.stroke()}),t.save(),t.beginPath(),t.ellipse(r,c,this.epsilon*(e-40),this.epsilon*(s-40),0,0,Math.PI*2),t.fillStyle="rgba(224, 69, 42, .055)",t.fill(),t.strokeStyle="rgba(184, 50, 30, .72)",t.lineWidth=1.5,t.stroke(),t.restore();const u=(i=this.root)==null?void 0:i.querySelector("[data-observation]");if(u){const h=this.dbscanResult.types[d],m=h==="core"?"magpont":h==="border"?"határpont":"zajpont";u.innerHTML=`<p class="control-label">ε-környezet</p><strong>${n.length} pont önmagával együtt → ${m}.</strong><p>A kör mindig a kurzorhoz legközelebbi adatpontra illeszkedik.</p>`}}}}const Yt=[{uid:"row-01",record:"H-001",programme:"Mérnökinformatikus",birthYear:2002,weeklyStudyHours:8},{uid:"row-02",record:"H-002",programme:"Gazdaságinformatikus",birthYear:2001,weeklyStudyHours:6},{uid:"row-03",record:"H-003",programme:"Villamosmérnök",birthYear:2003,weeklyStudyHours:7},{uid:"row-04",record:"H-004",programme:"Mérnökinformatikus",birthYear:2e3,weeklyStudyHours:10},{uid:"row-05",record:"H-005",programme:"Gazdaságinformatikus",birthYear:"",weeklyStudyHours:5},{uid:"row-06",record:"H-006",programme:"Mérnökinformatikus",birthYear:2004,weeklyStudyHours:9},{uid:"row-07",record:"H-007",programme:"Villamosmérnök",birthYear:2001,weeklyStudyHours:7},{uid:"row-08",record:"H-008",programme:"Mérnökinformatikus",birthYear:2002,weeklyStudyHours:11},{uid:"row-09",record:"H-009",programme:"Gazdaságinformatikus",birthYear:1999,weeklyStudyHours:6},{uid:"row-10",record:"H-010",programme:"Villamosmérnök",birthYear:2003,weeklyStudyHours:8},{uid:"row-11",record:"H-011",programme:"Mérnökinformatikus",birthYear:"N/A",weeklyStudyHours:12},{uid:"row-12",record:"H-012",programme:"Gazdaságinformatikus",birthYear:2e3,weeklyStudyHours:4},{uid:"row-13",record:"H-013",programme:"Mérnökinformatikus",birthYear:2002,weeklyStudyHours:9},{uid:"row-14",record:"H-014",programme:"Villamosmérnök",birthYear:2001,weeklyStudyHours:6},{uid:"row-15",record:"H-015",programme:"Gazdaságinformatikus",birthYear:2004,weeklyStudyHours:7},{uid:"row-16",record:"H-016",programme:"Mérnökinformatikus",birthYear:1998,weeklyStudyHours:13},{uid:"row-17",record:"H-017",programme:"Villamosmérnök",birthYear:2e3,weeklyStudyHours:8},{uid:"row-18",record:"H-018",programme:"Mérnökinformatikus",birthYear:2003,weeklyStudyHours:9},{uid:"row-19",record:"H-019",programme:"Gazdaságinformatikus",birthYear:2001,weeklyStudyHours:5},{uid:"row-20",record:"H-020",programme:"Villamosmérnök",birthYear:1900,weeklyStudyHours:7},{uid:"row-21",record:"H-021",programme:"Mérnökinformatikus",birthYear:2002,weeklyStudyHours:10},{uid:"row-22",record:"H-022",programme:"Gazdaságinformatikus",birthYear:2004,weeklyStudyHours:6},{uid:"row-23",record:"H-023",programme:"Villamosmérnök",birthYear:1999,weeklyStudyHours:8},{uid:"row-24",record:"H-024",programme:"Mérnökinformatikus",birthYear:2003,weeklyStudyHours:11},{uid:"row-25",record:"H-025",programme:"Gazdaságinformatikus",birthYear:2e3,weeklyStudyHours:5},{uid:"row-26",record:"H-026",programme:"Villamosmérnök",birthYear:2002,weeklyStudyHours:7},{uid:"row-27",record:"H-027",programme:"Mérnökinformatikus",birthYear:2001,weeklyStudyHours:9},{uid:"row-28",record:"H-018",programme:"Mérnökinformatikus",birthYear:2003,weeklyStudyHours:9}];function ht(){return Yt.map(l=>({...l}))}function zt(l){return l<1990||l>2010}function Vt(l){return[l.record,l.programme,String(l.birthYear),String(l.weeklyStudyHours)].join("\0")}function V(l){const t=new Set,e=[];return l.forEach(s=>{s.birthYear===""?e.push({id:`missing:${s.uid}`,kind:"missing",rowUid:s.uid,severity:"error",shortLabel:"hiányzó",title:"Hiányzik a születési év",detail:"Az üres cella nem használható számszerű összesítésben. A pótlás módját dokumentálni kell."}):typeof s.birthYear!="number"?e.push({id:`nonnumeric:${s.uid}`,kind:"nonnumeric",rowUid:s.uid,severity:"error",shortLabel:"nem szám",title:"Szöveg került a számoszlopba",detail:"Az „N/A” jelölés szöveg. Előbb egységes hiányzó értékké vagy ellenőrzött számmá kell alakítani."}):zt(s.birthYear)&&!s.yearReviewed&&e.push({id:`outlier:${s.uid}`,kind:"outlier",rowUid:s.uid,severity:"review",shortLabel:"ellenőrizendő",title:"Szokatlan, de nem bizonyítottan hibás",detail:"Az érték kívül esik a mintához választott 1990–2010-es ellenőrzési tartományon. Forrásellenőrzés nélkül nem törölhető."});const a=Vt(s);t.has(a)?e.push({id:`duplicate:${s.uid}`,kind:"duplicate",rowUid:s.uid,severity:"error",shortLabel:"duplikátum",title:"A rekord teljes másolata",detail:"A rekordazonosító és az összes megjelenített érték megegyezik egy korábbi sorral."}):t.add(a)}),e}function Ut(l){return l.reduce((t,e)=>(t[e.kind]+=1,t),{missing:0,nonnumeric:0,outlier:0,duplicate:0})}function wt(l){const t=l.map(i=>i.birthYear).filter(i=>typeof i=="number"&&Number.isFinite(i)).sort((i,d)=>i-d);if(t.length===0)return{count:0,excluded:l.length,mean:null,median:null,minimum:null,maximum:null};const e=Math.floor(t.length/2),s=t.length%2===0?(t[e-1]+t[e])/2:t[e],a=t.reduce((i,d)=>i+d,0)/t.length;return{count:t.length,excluded:l.length-t.length,mean:a,median:s,minimum:t[0],maximum:t.at(-1)??t[0]}}function ut(l){const t=l.filter(s=>typeof s.birthYear=="number"&&(!zt(s.birthYear)||s.yearReviewed)),e=wt(t).median;return e===null?null:Math.round(e)}function Gt(l){const t=[{label:"≤1950",count:0},{label:"1951–97",count:0},...Array.from({length:8},(e,s)=>({label:String(1998+s),count:0})),{label:"≥2006",count:0}];return l.forEach(e=>{typeof e.birthYear!="number"||!Number.isFinite(e.birthYear)||(e.birthYear<=1950?t[0].count+=1:e.birthYear<=1997?t[1].count+=1:e.birthYear<=2005?t[2+e.birthYear-1998].count+=1:t.at(-1).count+=1)}),t}function Wt(l,t){if(t.kind==="remove-row")return l.filter(e=>e.uid!==t.rowUid).map(e=>({...e}));if(t.kind==="set-year"&&(!Number.isFinite(t.value)||!Number.isInteger(t.value)))throw new TypeError("A születési évnek véges egész számnak kell lennie.");return l.map(e=>e.uid!==t.rowUid?{...e}:t.kind==="set-year"?{...e,birthYear:t.value,yearReviewed:!1}:t.kind==="set-year-missing"?{...e,birthYear:"",yearReviewed:!1}:{...e,yearReviewed:!0})}const pt=["missing","nonnumeric","duplicate","outlier"],Xt={missing:"Hiányzó",nonnumeric:"Nem szám",duplicate:"Duplikátum",outlier:"Ellenőrzendő"};function _t(l){return l.replace(/[&<>'"]/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;","'":"&#39;",'"':"&quot;"})[t]??t)}function _(l){return l===null?"—":new Intl.NumberFormat("hu-HU",{maximumFractionDigits:1}).format(l)}class Jt{constructor(t){p(this,"context");p(this,"root");p(this,"rows",ht());p(this,"history",[]);p(this,"filter","all");p(this,"selectedRowUid","row-05");p(this,"selectedIssueId","missing:row-05");p(this,"onClick",t=>{var d,o,n;const e=t.target.closest("button");if(!e||!((d=this.root)!=null&&d.contains(e)))return;const s=e.dataset.rowUid,a=e.dataset.issueId,i=e.dataset.filter;if(s&&e.dataset.action==="select-row"){this.selectRow(s);return}if(a){const r=V(this.rows).find(c=>c.id===a);r&&(this.selectedRowUid=r.rowUid,this.selectedIssueId=r.id,this.update());return}if(i&&["all",...pt].includes(i)){this.filter=i;const r=this.visibleRows(V(this.rows));r.some(c=>c.uid===this.selectedRowUid)?this.update():this.selectRow(((o=r[0])==null?void 0:o.uid)??((n=this.rows[0])==null?void 0:n.uid)??"");return}switch(e.dataset.action){case"reset":this.rows=ht(),this.history=[],this.filter="all",this.selectedRowUid="row-05",this.selectedIssueId="missing:row-05",this.announce("A szintetikus tábla visszaállt az eredeti állapotba."),this.update();break;case"undo":{const r=this.history.pop();if(!r)return;this.rows=r,this.selectFirstOpenIssue(),this.announce("Az utolsó módosítást visszavontad."),this.update();break}case"use-median":{const r=ut(this.rows);r!==null&&this.repair({kind:"set-year",rowUid:this.selectedRowUid,value:r},`A születési évet ${r}-re, a jelenlegi mediánra állítottad.`);break}case"set-missing":this.repair({kind:"set-year-missing",rowUid:this.selectedRowUid},"A cellát egységes hiányzó értékre állítottad.");break;case"confirm-year":this.repair({kind:"confirm-year",rowUid:this.selectedRowUid},"Az értéket ellenőrzöttként jelölted; a táblában változatlanul megmaradt.");break;case"remove-duplicate":this.repair({kind:"remove-row",rowUid:this.selectedRowUid},"A kijelölt ismétlődő sort eltávolítottad.");break;default:e.dataset.answer&&this.answerQuiz(e)}});p(this,"onSubmit",t=>{const e=t.target.closest("[data-manual-year-form]");if(!e)return;t.preventDefault();const s=e.querySelector("[data-manual-year]"),a=Number(s==null?void 0:s.value);if(!Number.isInteger(a)){s==null||s.setCustomValidity("Adj meg egész évszámot."),s==null||s.reportValidity();return}s==null||s.setCustomValidity(""),this.repair({kind:"set-year",rowUid:this.selectedRowUid,value:a},`A születési évet ${a}-re módosítottad.`)});this.context=t}mount(t){this.root=t,t.innerHTML=`
      <article class="module-page data-cleaning-page" data-module="data-cleaning">
        <header class="module-intro paper-header">
          <div class="module-index">01 <span>/ 12</span></div>
          <div>
            <p class="eyebrow">Adat és előkészítés · adattisztítás</p>
            <h1>Piszkos adatok</h1>
            <p class="lede">Vizsgáld meg a 28 soros szintetikus táblát. A hibát javítsd, a szokatlan értékről pedig csak ellenőrzés után dönts.</p>
          </div>
          <a class="present-link" href="?mode=present#/adat" aria-label="Adattisztítás megnyitása vetítési módban">Vetítés <span aria-hidden="true">↗</span></a>
        </header>

        <section class="workbench data-cleaning-workbench" aria-labelledby="cleaning-workbench-title">
          <div class="workbench-topline">
            <div><p class="section-number">INTERAKTÍV MUNKAPAD</p><h2 id="cleaning-workbench-title">Mi kerülhet az elemzésbe?</h2></div>
            <p class="workbench-instruction">A minta generált. Válassz egy megjelölt cellát vagy rekordot, majd indokolt javítást alkalmazz.</p>
          </div>

          <div class="cleaning-toolbar">
            <div class="cleaning-actions">
              <button class="button button-paper" type="button" data-action="undo" disabled>Visszavonás</button>
              <button class="text-tool" type="button" data-action="reset">Alaphelyzet</button>
            </div>
            <p class="cleaning-provenance"><strong>Szintetikus oktatási minta.</strong> A táblázat nem valós hallgatókat ír le.</p>
          </div>

          <div data-cleaning-overview></div>

          <div class="cleaning-editor">
            <div class="cleaning-table-panel" data-cleaning-table></div>
            <aside class="cleaning-inspector" data-cleaning-inspector aria-label="Kijelölt adatminőségi probléma"></aside>
          </div>
          <p class="visually-hidden" data-cleaning-announcement aria-live="polite"></p>
        </section>

        <section class="experiments depth-shell" aria-labelledby="cleaning-try-title">
          <div class="depth-kicker">Kísérletek</div><h2 id="cleaning-try-title">Az összesítés a döntéseiddel együtt változik.</h2>
          <ol class="experiment-list">
            <li><span>01</span><div><strong>Először csak az 1900-as értéket vizsgáld.</strong><p>Hasonlítsd össze az átlagot és a mediánt, majd állítsd hiányzóra. Az átlag nagyobbat mozdul.</p></div></li>
            <li><span>02</span><div><strong>Állítsd vissza, és fogadd el az 1900-as évet.</strong><p>Az érték a táblában marad, de az ellenőrzési teendő megszűnik. Az elfogadás nem ugyanaz, mint a törlés.</p></div></li>
            <li><span>03</span><div><strong>Javítsd a hiányzó és a nem számos értéket.</strong><p>A mediánnal pótlás egy lehetséges eljárás, de megváltoztatja az eloszlást, ezért dokumentálni kell.</p></div></li>
          </ol>
        </section>

        <section class="depth reading-layer" aria-labelledby="cleaning-depth-title">
          <p class="eyebrow">Magyarázat</p>
          <h2 id="cleaning-depth-title">A tisztítás szabályokból és ellenőrzött döntésekből áll.</h2>
          <p>A hiányzó érték, a hibás adattípus és a teljesen ismétlődő rekord technikailag felismerhető. A szélsőséges érték csak jelzés: lehet rögzítési hiba, de lehet valódi megfigyelés is.</p>
          <div class="concept-grid">
            <div><p class="concept-label">Átlag és medián</p><h3>Nem egyformán érzékenyek.</h3><p>Az átlag minden számos értéket felhasznál, ezért egy távoli érték erősen eltolhatja. A medián a rendezett minta közepét adja, így a szélsőséges értékre kevésbé érzékeny.</p></div>
            <div><p class="concept-label">Pótlás</p><h3>Nem semleges javítás.</h3><p>A mediánnal pótlás megtartja a sorszámot és a változó közepéhez teszi az új értéket, de mesterségesen sűríti az eloszlás közepét. Az eljárást és az érintett sorokat rögzíteni kell.</p></div>
          </div>
          <aside class="edge-case"><strong>Miért van külön „ellenőrzendő” állapot?</strong> Az adattisztító szabály jelezheti, hogy 1900 szokatlan ebben a mintában. Azt viszont nem tudja, hogy elírás történt-e. Ehhez adatforrás, mérési körülmény vagy tartalmi ismeret kell.</aside>
          <div class="knowledge-check" data-quiz>
            <p class="concept-label">Ellenőrző kérdés</p>
            <h3>Mi a helyes első lépés a szokatlan 1900-as születési évnél?</h3>
            <div class="answer-grid">
              <button type="button" data-answer="wrong">Automatikusan törölni a teljes rekordot</button>
              <button type="button" data-answer="right">Megjelölni, majd a forrás és a kontextus alapján ellenőrizni</button>
              <button type="button" data-answer="wrong">1900-at automatikusan az átlagra cserélni</button>
            </div>
            <p class="quiz-feedback" data-quiz-feedback aria-live="polite"></p>
          </div>
        </section>
      </article>`,t.addEventListener("click",this.onClick),t.addEventListener("submit",this.onSubmit),this.update()}destroy(){var t,e;(t=this.root)==null||t.removeEventListener("click",this.onClick),(e=this.root)==null||e.removeEventListener("submit",this.onSubmit),this.root=void 0}selectRow(t){this.selectedRowUid=t;const e=V(this.rows).find(s=>s.rowUid===t);this.selectedIssueId=(e==null?void 0:e.id)??"",this.update()}selectFirstOpenIssue(t){var a;const e=V(this.rows),s=e.find(i=>i.rowUid===t)??e[0];if(s){this.selectedRowUid=s.rowUid,this.selectedIssueId=s.id;return}this.selectedRowUid=((a=this.rows[0])==null?void 0:a.uid)??"",this.selectedIssueId=""}repair(t,e){this.history.push(this.rows.map(a=>({...a})));const s=this.selectedRowUid;this.rows=Wt(this.rows,t),this.selectFirstOpenIssue(s),this.announce(e),this.update()}answerQuiz(t){var a,i;const e=t.dataset.answer==="right";(a=this.root)==null||a.querySelectorAll("[data-answer]").forEach(d=>d.classList.remove("is-correct","is-wrong")),t.classList.add(e?"is-correct":"is-wrong");const s=(i=this.root)==null?void 0:i.querySelector("[data-quiz-feedback]");s&&(s.textContent=e?"Helyes. A szélsőséges érték vizsgálati jelzés, nem automatikus törlési utasítás. A modult teljesítetted.":"A szélsőség önmagában még nem bizonyítja, hogy az érték hibás."),e&&this.context.onComplete()}announce(t){var s;const e=(s=this.root)==null?void 0:s.querySelector("[data-cleaning-announcement]");e&&(e.textContent=t)}visibleRows(t){if(this.filter==="all")return this.rows;const e=new Set(t.filter(s=>s.kind===this.filter).map(s=>s.rowUid));return this.rows.filter(s=>e.has(s.uid))}update(){if(!this.root)return;const t=V(this.rows);!t.find(o=>o.id===this.selectedIssueId)&&this.selectedIssueId&&(this.selectedIssueId="");const s=this.root.querySelector("[data-cleaning-overview]"),a=this.root.querySelector("[data-cleaning-table]"),i=this.root.querySelector("[data-cleaning-inspector]");s&&(s.innerHTML=this.overviewMarkup(t)),a&&(a.innerHTML=this.tableMarkup(t)),i&&(i.innerHTML=this.inspectorMarkup(t));const d=this.root.querySelector("[data-action='undo']");d&&(d.disabled=this.history.length===0)}overviewMarkup(t){const e=Ut(t),s=wt(this.rows),a=Gt(this.rows),i=Math.max(1,...a.map(o=>o.count)),d=a.map((o,n)=>{const r=43+n*52,c=o.count/i*118,u=154-c;return`<g><rect x="${r}" y="${u.toFixed(1)}" width="34" height="${c.toFixed(1)}" rx="2"></rect><text x="${r+17}" y="${Math.max(18,u-7).toFixed(1)}" text-anchor="middle">${o.count||""}</text><text class="histogram-label" x="${r+17}" y="177" text-anchor="middle">${o.label}</text></g>`}).join("");return`<div class="cleaning-overview">
      <div class="issue-filter-panel" aria-labelledby="issue-filter-title">
        <div class="cleaning-panel-heading"><div><p class="control-label">Adatminőségi teendők</p><h3 id="issue-filter-title">${t.length} nyitott jelzés</h3></div><button type="button" data-filter="all" aria-pressed="${this.filter==="all"}" class="issue-filter-all ${this.filter==="all"?"is-active":""}">Mind a ${this.rows.length} sor</button></div>
        <div class="issue-filter-grid">
          ${pt.map(o=>`<button type="button" data-filter="${o}" aria-pressed="${this.filter===o}" class="issue-filter ${this.filter===o?"is-active":""}"><span>${Xt[o]}</span><strong>${e[o]}</strong></button>`).join("")}
        </div>
        <p class="cleaning-rule-note">Az „ellenőrzendő” nem automatikus hiba: a 1990–2010-es tartomány csak vizsgálati szabály ehhez a mintához.</p>
      </div>
      <div class="cleaning-chart-panel">
        <div class="cleaning-panel-heading"><div><p class="control-label">Születési év</p><h3>Eloszlás és középérték</h3></div><span>${s.count} számos · ${s.excluded} kihagyott</span></div>
        <svg class="cleaning-histogram" viewBox="0 0 640 194" role="img" aria-labelledby="birth-hist-title birth-hist-desc">
          <title id="birth-hist-title">A számmal megadott születési évek hisztogramja</title>
          <desc id="birth-hist-desc">${a.map(o=>`${o.label}: ${o.count} rekord`).join("; ")}.</desc>
          <line x1="36" x2="616" y1="154" y2="154"></line>${d}
        </svg>
        <dl class="metric-list cleaning-statistics">
          <div><dt>Átlag</dt><dd data-year-mean>${_(s.mean)}</dd></div>
          <div><dt>Medián</dt><dd data-year-median>${_(s.median)}</dd></div>
          <div><dt>Minimum–maximum</dt><dd>${_(s.minimum)}–${_(s.maximum)}</dd></div>
        </dl>
        <p class="cleaning-rule-note">Az üres és nem számos cellák kimaradnak. Az 1900-as érték addig is beleszámít, amíg el nem távolítod vagy hiányzóra nem állítod.</p>
      </div>
    </div>`}tableMarkup(t){const e=this.visibleRows(t),s=new Map;return t.forEach(a=>s.set(a.rowUid,[...s.get(a.rowUid)??[],a])),`<div class="cleaning-panel-heading"><div><p class="control-label">Nyers tábla</p><h3>${e.length} megjelenített sor</h3></div><span>Válassz rekordot vagy jelzést</span></div>
      <div class="cleaning-table-scroll" tabindex="0" role="region" aria-label="Szintetikus piszkos adattábla" data-table-scroll>
        <table class="cleaning-table">
          <caption class="visually-hidden">28 soros szintetikus hallgatói minta adatminőségi jelzésekkel</caption>
          <thead><tr><th scope="col">Rekord</th><th scope="col">Szak</th><th scope="col">Születési év</th><th scope="col">Tanulás / hét</th><th scope="col">Jelzés</th></tr></thead>
          <tbody>${e.map(a=>{const i=s.get(a.uid)??[],d=a.uid===this.selectedRowUid,o=a.birthYear===""?"üres":String(a.birthYear);return`<tr class="${i.length?"has-issue":""} ${d?"is-selected":""}">
              <th scope="row"><button class="cleaning-record-button" type="button" data-action="select-row" data-row-uid="${a.uid}" aria-pressed="${d}">${a.record}</button></th>
              <td>${_t(a.programme)}</td>
              <td class="year-cell ${i.some(n=>n.kind!=="duplicate")?"is-flagged":""}">${o}${a.yearReviewed?"<small>ellenőrizve</small>":""}</td>
              <td>${a.weeklyStudyHours} óra</td>
              <td><div class="cleaning-issue-list">${i.length?i.map(n=>`<button type="button" class="cleaning-issue-chip is-${n.severity} ${n.id===this.selectedIssueId?"is-selected":""}" data-issue-id="${n.id}" aria-pressed="${n.id===this.selectedIssueId}">${n.shortLabel}</button>`).join(""):'<span class="cleaning-ok">rendben</span>'}</div></td>
            </tr>`}).join("")}</tbody>
        </table>
      </div>`}inspectorMarkup(t){const e=this.rows.find(o=>o.uid===this.selectedRowUid),s=t.find(o=>o.id===this.selectedIssueId)??t.find(o=>o.rowUid===this.selectedRowUid);if(!e)return'<p class="control-label">Javítás</p><h3>Nincs megjelenített rekord</h3><p>Válassz másik szűrőt.</p>';if(!s)return`<p class="control-label">Kijelölt rekord · ${e.record}</p><h3>Nincs nyitott jelzés</h3><p>A jelenlegi szabályok ezen a soron nem találtak teendőt.</p><dl class="metric-list"><div><dt>Születési év</dt><dd>${e.birthYear||"hiányzó"}</dd></div><div><dt>Tanulás / hét</dt><dd>${e.weeklyStudyHours} óra</dd></div></dl>`;const a=ut(this.rows),i=s.severity==="review"?"ELLENŐRZÉST KÉR":"JAVÍTÁST KÉR";let d="";return s.kind==="missing"?d=`<button class="button button-ink" type="button" data-action="use-median" ${a===null?"disabled":""}>Pótlás mediánnal${a===null?"":` (${a})`}</button>${this.manualYearForm(e)}`:s.kind==="nonnumeric"?d=`<button class="button button-ink" type="button" data-action="set-missing">„N/A” → hiányzó</button><button class="button button-paper" type="button" data-action="use-median" ${a===null?"disabled":""}>Pótlás mediánnal${a===null?"":` (${a})`}</button>${this.manualYearForm(e)}`:s.kind==="outlier"?d=`<button class="button button-ink" type="button" data-action="confirm-year">Forrás alapján érvényes</button><button class="button button-paper" type="button" data-action="set-missing">Nem igazolható → hiányzó</button>${this.manualYearForm(e)}`:d='<button class="button button-ink" type="button" data-action="remove-duplicate">Ismétlődő sor eltávolítása</button>',`<div class="cleaning-inspector-head"><p class="control-label">${i} · ${e.record}</p><span class="cleaning-issue-chip is-${s.severity}">${s.shortLabel}</span></div>
      <h3>${s.title}</h3><p>${s.detail}</p>
      <div class="cleaning-current-value"><span>Jelenlegi cellaérték</span><strong>${e.birthYear===""?"üres":e.birthYear}</strong></div>
      <div class="cleaning-repair-actions">${d}</div>
      ${s.kind==="outlier"?'<p class="cleaning-decision-note"><strong>Fontos:</strong> egyik javítás sem következik pusztán abból, hogy az érték szélsőséges.</p>':""}`}manualYearForm(t){const e=typeof t.birthYear=="number"?t.birthYear:2001;return`<form class="manual-year-form" data-manual-year-form><label for="manual-year-${t.uid}"><strong>Kézi javítás ellenőrzött forrásból</strong><span>Egész évszám</span></label><div><input id="manual-year-${t.uid}" data-manual-year type="number" min="1850" max="2026" step="1" value="${e}" required /><button class="button button-paper" type="submit">Mentés</button></div></form>`}}function mt(l){if(l.length===0)return 0;const t=new Map;return l.forEach(s=>t.set(s,(t.get(s)??0)+1)),1-[...t.values()].reduce((s,a)=>{const i=a/l.length;return s+i*i},0)}function Qt(l){if(l.length===0)return 0;const t=new Map;return l.forEach(s=>t.set(s,(t.get(s)??0)+1)),1-Math.max(...t.values())/l.length}function R(l){if(l.length===0)return;const t=new Map;return l.forEach(e=>t.set(e.label,(t.get(e.label)??0)+1)),[...t.entries()].sort((e,s)=>s[1]-e[1]||e[0]-s[0])[0][0]}function Zt(l,t){const e=[],s=[];return l.forEach(a=>{a[t.axis]<=t.threshold?e.push(a):s.push(a)}),{left:e,right:s}}function ot(l,t){const{left:e,right:s}=Zt(l,t),a=l.length,i=mt(l.map(n=>n.label)),d=n=>a===0?0:(e.length*n(e.map(r=>r.label))+s.length*n(s.map(r=>r.label)))/a,o=d(mt);return{split:{...t},left:e,right:s,valid:a>=2&&e.length>0&&s.length>0,parentGini:i,weightedGini:o,giniGain:i-o,weightedMisclassification:d(Qt)}}function et(l){if(l.length<2)return;let t;return["x","y"].forEach(e=>{const s=[...new Set(l.map(a=>a[e]))].sort((a,i)=>a-i);for(let a=0;a<s.length-1;a+=1){const i=s[a]+(s[a+1]-s[a])/2,d=ot(l,{axis:e,threshold:i});d.valid&&(!t||d.weightedGini<t.weightedGini-1e-12)&&(t=d)}}),t}function st(l){return l.map(t=>({x:t.x,y:t.y,label:t.label??0}))}const at={moons:{title:"Két hold",question:"Mennyit ér egyetlen vágás?",make:()=>st(lt())},xor:{title:"Kockás",question:"Elég lehet a gyökérvágás?",make:()=>st(bt())},overlap:{title:"Átfedő",question:"Hol marad kevert levél?",make:()=>st(kt())}};function q(l){return l.toFixed(3).replace(".",",")}function te(l){return l==="x"?"x₁":"x₂"}function I(l){return l===void 0?"üres":l===0?"A":"B"}function U(l){return`${te(l.axis)} ≤ ${l.threshold.toFixed(2).replace(".",",")}`}function it(l){return{a:l.filter(t=>t.label===0).length,b:l.filter(t=>t.label===1).length}}class ee{constructor(t){p(this,"context");p(this,"root");p(this,"canvas");p(this,"resizeObserver");p(this,"points",at.moons.make());p(this,"history",[]);p(this,"manualSplit",{axis:"x",threshold:.5});p(this,"showBest",!1);p(this,"tool","split");p(this,"pointLabel",0);p(this,"drawing",!1);p(this,"lastDrawn");this.context=t}mount(t){this.root=t,t.innerHTML=`
      <article class="module-page" data-module="decision-tree">
        <header class="module-intro paper-header">
          <div class="module-index">03 <span>/ 12</span></div>
          <div>
            <p class="eyebrow">Döntési fa · gyökérvágás</p>
            <h1>Döntési fa</h1>
            <p class="lede">Tegyél le egy vízszintes vagy függőleges vágást, majd hasonlítsd össze a súlyozott szennyezettségét a CART által választott küszöbével.</p>
          </div>
          <a class="present-link" href="?mode=present#/dontesi-fa" aria-label="Döntési fa megnyitása vetítés módban">Vetítés <span aria-hidden="true">↗</span></a>
        </header>

        <section class="workbench" aria-labelledby="tree-workbench-title">
          <div class="workbench-topline">
            <div>
              <p class="section-number">INTERAKTÍV MUNKAPAD</p>
              <h2 id="tree-workbench-title">Hol vágjon a gyökér?</h2>
            </div>
            <p class="workbench-instruction">Válaszd a Vágás eszközt és az irányt, majd kattints az ábrára. Pontokat külön A vagy B osztályhoz is rajzolhatsz.</p>
          </div>

          <div class="preset-strip" role="group" aria-label="Adatkészlet választása">
            ${Object.entries(at).map(([e,s],a)=>`
              <button class="preset ${a===0?"is-active":""}" type="button" data-preset="${e}" aria-pressed="${a===0}">
                <span class="preset-mark preset-${e}" aria-hidden="true"><i></i><i></i><i></i><i></i><i></i></span>
                <span><strong>${s.title}</strong><small>${s.question}</small></span>
              </button>`).join("")}
            <button class="preset" type="button" data-preset="custom" aria-pressed="false">
              <span class="preset-mark preset-custom" aria-hidden="true">＋</span>
              <span><strong>Saját rajz</strong><small>Üres adatkészlet.</small></span>
            </button>
          </div>

          <div class="canvas-layout">
            <aside class="tool-column" aria-label="Vászon eszközei">
              <p class="control-label">Művelet</p>
              <button class="class-tool is-active" type="button" data-tool="split" aria-pressed="true">
                <span aria-hidden="true">┆</span><span>Vágás</span>
              </button>
              <button class="class-tool" type="button" data-tool="point" data-label="0" aria-pressed="false">
                <span class="shape shape-circle class-a" aria-hidden="true"></span><span>A pont</span>
              </button>
              <button class="class-tool" type="button" data-tool="point" data-label="1" aria-pressed="false">
                <span class="shape shape-square class-b" aria-hidden="true"></span><span>B pont</span>
              </button>
              <div class="tool-divider"></div>
              <p class="control-label">Vágás iránya</p>
              <button class="class-tool is-active" type="button" data-axis="x" aria-pressed="true">
                <span aria-hidden="true">│</span><span>Függőleges</span><kbd>x₁</kbd>
              </button>
              <button class="class-tool" type="button" data-axis="y" aria-pressed="false">
                <span aria-hidden="true">─</span><span>Vízszintes</span><kbd>x₂</kbd>
              </button>
              <div class="tool-divider"></div>
              <button class="button button-ink" type="button" data-action="best">Legjobb vágás</button>
              <button class="text-tool" type="button" data-action="show-manual" hidden>Saját vágás mutatása</button>
              <button class="text-tool" type="button" data-action="undo">Utolsó pontok visszavonása</button>
              <button class="text-tool" type="button" data-action="clear">Pontok törlése</button>
            </aside>

            <div class="canvas-column">
              <div class="canvas-frame">
                <canvas class="data-canvas" aria-label="Kétosztályos pontfelhő és egy tengelypárhuzamos döntési vágás" role="img"></canvas>
                <div class="canvas-corner" aria-hidden="true">x₂</div>
                <div class="canvas-axis" aria-hidden="true">x₁</div>
              </div>
              <p class="canvas-summary" data-summary aria-live="polite"></p>
            </div>

            <aside class="parameter-column">
              <label class="range-control" for="tree-threshold">
                <span><strong>Saját küszöb</strong><output for="tree-threshold" data-threshold-output>0,50</output></span>
                <input id="tree-threshold" type="range" min="0.02" max="0.98" step="0.01" value="0.5" />
                <span class="range-ends"><small>0,02</small><small>0,98</small></span>
              </label>
              <div class="observation" data-observation aria-live="polite"></div>
              <dl class="metric-list">
                <div><dt>Szülő Gini</dt><dd data-parent-gini>—</dd></div>
                <div><dt>Súlyozott Gini</dt><dd data-weighted-gini>—</dd></div>
                <div><dt>Súlyozott tévesztési arány</dt><dd data-misclassification>—</dd></div>
                <div><dt>Gini-csökkenés</dt><dd data-gain>—</dd></div>
              </dl>
              <p class="tool-note">A „Legjobb vágás” mindkét tengely minden, szomszédos mintaértékek közötti küszöbét megvizsgálja, és a legkisebb súlyozott Ginit választja.</p>
            </aside>
          </div>

          <div class="error-profile" aria-label="Az aktuális gyökérvágás kétlevelű faábrája">
            <div><p class="control-label">A gyökér és levelei</p><strong data-tree-caption>Egy vágás két részre osztja a mintát.</strong></div>
            <svg viewBox="0 0 520 120" role="img" aria-labelledby="tree-svg-title tree-svg-desc" data-tree-svg>
              <title id="tree-svg-title">Az aktuális gyökérvágás fája</title>
              <desc id="tree-svg-desc" data-tree-desc>A gyökér feltételéből két levél következik.</desc>
            </svg>
            <div class="chart-legend" aria-label="Vágásjelölések">
              <span class="train-key">saját</span>
              <span class="test-key" data-best-legend hidden>CART</span>
            </div>
          </div>

          <details class="keyboard-entry">
            <summary>Billentyűzetes pontbevitel</summary>
            <div class="keyboard-entry-fields">
              <label>x₁ koordináta <input type="number" min="0" max="1" step="0.05" value="0.5" data-entry-x /></label>
              <label>x₂ koordináta <input type="number" min="0" max="1" step="0.05" value="0.5" data-entry-y /></label>
              <label>osztály <select data-entry-label><option value="0">A — kör</option><option value="1">B — négyzet</option></select></label>
              <button class="button button-ink" type="button" data-action="add-keyboard">Pont hozzáadása</button>
            </div>
          </details>
        </section>

        <section class="experiments depth-shell" aria-labelledby="tree-try-title">
          <div class="depth-kicker">Kísérletek</div>
          <h2 id="tree-try-title">Három rövid összehasonlítás</h2>
          <ol class="experiment-list">
            <li><span>01</span><div><strong>Tegyél le egy saját vágást.</strong><p>Ezután kérd a legjobb vágást. A két súlyozott Gini különbsége mutatja, mennyivel tisztább felosztást talált a CART ezen a gyökércsomóponton.</p></div></li>
            <li><span>02</span><div><strong>Válaszd a Kockás készletet.</strong><p>Próbálj 0,50 körüli vágást mindkét irányban. Egyetlen gyökérvágás után mindkét levél kevert maradhat; az XOR-hoz további vágások kellenek.</p></div></li>
            <li><span>03</span><div><strong>Rajzolj egy rossz címkéjű pontot.</strong><p>Tedd az egyik osztály pontját a másik tiszta tartományába, majd figyeld meg a Gini-csökkenés változását.</p></div></li>
          </ol>
        </section>

        <section class="depth reading-layer" aria-labelledby="tree-depth-title">
          <p class="eyebrow">Magyarázat</p>
          <h2 id="tree-depth-title">A CART mohón választja ki a következő vágást.</h2>
          <p>A gyökérben minden jelölt küszöb két részre osztja a tanítómintát. A modul a két rész Gini-szennyezettségének elemszámmal súlyozott átlagát számolja ki. A kisebb érték tisztább gyermekcsomópontokat jelent.</p>
          <div class="concept-grid">
            <div>
              <p class="concept-label">Fogalom</p>
              <h3>Gini-szennyezettség</h3>
              <p>A pₖ arány annak valószínűsége, hogy a csomópontból véletlenül választott pont a k-adik osztályba tartozik. Tiszta csomópontnál a Gini nulla.</p>
            </div>
            <div class="formula" aria-label="Gini egyenlő egy mínusz a p k négyzetek összege; a vágás Gini értéke a gyermekek elemszámmal súlyozott átlaga">
              <math display="block"><mi>G</mi><mo>=</mo><mn>1</mn><mo>−</mo><munder><mo>∑</mo><mi>k</mi></munder><msubsup><mi>p</mi><mi>k</mi><mn>2</mn></msubsup></math>
              <math display="block"><msub><mi>G</mi><mtext>vágás</mtext></msub><mo>=</mo><mfrac><msub><mi>n</mi><mi>L</mi></msub><mi>n</mi></mfrac><msub><mi>G</mi><mi>L</mi></msub><mo>+</mo><mfrac><msub><mi>n</mi><mi>R</mi></msub><mi>n</mi></mfrac><msub><mi>G</mi><mi>R</mi></msub></math>
            </div>
          </div>
          <aside class="edge-case"><strong>Mit mutat ez a modul?</strong> Egyetlen gyökérvágást. A teljes döntési fa ugyanezt a keresést ismétli a létrejövő csomópontokon, amíg egy leállítási feltétel meg nem állítja. A bagging több, eltérő mintán tanított fa szavazatát kombinálja; azt ez a munkapad még nem szimulálja.</aside>
          <div class="knowledge-check" data-quiz>
            <p class="concept-label">Ellenőrző kérdés</p>
            <h3>Miért súlyozzuk a két gyermek Gini-értékét a gyermekek elemszámával?</h3>
            <div class="answer-grid">
              <button type="button" data-answer="wrong">Hogy mindig a középső küszöb nyerjen</button>
              <button type="button" data-answer="right">Hogy egy apró, tiszta gyermek ne fedje el a nagy, kevert gyermek hatását</button>
              <button type="button" data-answer="wrong">Hogy a Gini azonos legyen a pontossággal</button>
            </div>
            <p class="quiz-feedback" data-quiz-feedback aria-live="polite"></p>
          </div>
        </section>
      </article>`,this.canvas=t.querySelector("canvas.data-canvas")??void 0,this.bindControls(),this.canvas&&(this.resizeObserver=new ResizeObserver(()=>this.draw()),this.resizeObserver.observe(this.canvas)),this.update()}destroy(){var t;(t=this.resizeObserver)==null||t.disconnect(),this.root=void 0,this.canvas=void 0}bindControls(){var e,s,a,i,d,o;if(!this.root||!this.canvas)return;this.root.querySelectorAll("[data-preset]").forEach(n=>{n.addEventListener("click",()=>{const r=n.dataset.preset??"moons";this.points=r==="custom"?[]:at[r].make(),this.history=[],this.manualSplit={axis:"x",threshold:.5},this.showBest=!1,this.markPreset(r),this.update()})}),this.root.querySelectorAll("[data-tool]").forEach(n=>{n.addEventListener("click",()=>{this.tool=n.dataset.tool==="point"?"point":"split",this.tool==="point"&&(this.pointLabel=Number(n.dataset.label??0)),this.syncControls()})}),this.root.querySelectorAll("[data-axis]").forEach(n=>{n.addEventListener("click",()=>{this.manualSplit={axis:n.dataset.axis==="y"?"y":"x",threshold:this.manualSplit.threshold},this.tool="split",this.showBest=!1,this.update()})}),(e=this.root.querySelector("#tree-threshold"))==null||e.addEventListener("input",n=>{this.manualSplit={...this.manualSplit,threshold:Number(n.target.value)},this.tool="split",this.showBest=!1,this.update()}),(s=this.root.querySelector("[data-action='best']"))==null||s.addEventListener("click",()=>{et(this.points)&&(this.showBest=!0,this.update())}),(a=this.root.querySelector("[data-action='show-manual']"))==null||a.addEventListener("click",()=>{this.showBest=!1,this.update()}),(i=this.root.querySelector("[data-action='undo']"))==null||i.addEventListener("click",()=>{const n=this.history.pop();n&&(this.points=n,this.showBest=!1,this.markPreset("custom"),this.update())}),(d=this.root.querySelector("[data-action='clear']"))==null||d.addEventListener("click",()=>{this.points.length>0&&this.pushHistory(),this.points=[],this.showBest=!1,this.markPreset("custom"),this.update()}),(o=this.root.querySelector("[data-action='add-keyboard']"))==null||o.addEventListener("click",()=>{var u,h,m,g,v,y;const n=Number(((h=(u=this.root)==null?void 0:u.querySelector("[data-entry-x]"))==null?void 0:h.value)??.5),r=Number(((g=(m=this.root)==null?void 0:m.querySelector("[data-entry-y]"))==null?void 0:g.value)??.5),c=Number(((y=(v=this.root)==null?void 0:v.querySelector("[data-entry-label]"))==null?void 0:y.value)??0);this.pushHistory(),this.points.push({x:Math.max(0,Math.min(1,n)),y:Math.max(0,Math.min(1,r)),label:c}),this.showBest=!1,this.markPreset("custom"),this.update()}),this.canvas.addEventListener("pointerdown",n=>{var c;const r=N(this.canvas,n);if(this.tool==="split"){this.manualSplit={...this.manualSplit,threshold:this.manualSplit.axis==="x"?r.x:r.y},this.showBest=!1,this.update();return}this.drawing=!0,this.lastDrawn=void 0,(c=this.canvas)==null||c.setPointerCapture(n.pointerId),this.pushHistory(),this.addDrawnPoint(r)}),this.canvas.addEventListener("pointermove",n=>{!this.drawing||this.tool!=="point"||(n.preventDefault(),this.addDrawnPoint(N(this.canvas,n)))});const t=n=>{var r;(r=this.canvas)!=null&&r.hasPointerCapture(n.pointerId)&&this.canvas.releasePointerCapture(n.pointerId),this.drawing=!1,this.lastDrawn=void 0};this.canvas.addEventListener("pointerup",t),this.canvas.addEventListener("pointercancel",t),this.root.querySelectorAll("[data-answer]").forEach(n=>{n.addEventListener("click",()=>{var u,h;const r=n.dataset.answer==="right";(u=this.root)==null||u.querySelectorAll("[data-answer]").forEach(m=>m.classList.remove("is-correct","is-wrong")),n.classList.add(r?"is-correct":"is-wrong");const c=(h=this.root)==null?void 0:h.querySelector("[data-quiz-feedback]");c&&(c.textContent=r?"Helyes. Az elemszám szerinti súlyozás mindkét gyermek teljes mintán belüli hatását megőrzi. A modult teljesítetted.":"Gondold végig, mi történne, ha egyetlen tiszta pont ugyanannyit számítana, mint a minta többi része."),r&&this.context.onComplete()})})}pushHistory(){this.history.push(this.points.map(t=>({...t}))),this.history.length>30&&this.history.shift()}addDrawnPoint(t){if(this.points.length>=240||this.lastDrawn&&(this.lastDrawn.x-t.x)**2+(this.lastDrawn.y-t.y)**2<.0011)return;const e={...t,label:this.pointLabel};this.points.push(e),this.lastDrawn=e,this.showBest=!1,this.markPreset("custom"),this.update()}markPreset(t){var e;(e=this.root)==null||e.querySelectorAll("[data-preset]").forEach(s=>{const a=s.dataset.preset===t;s.classList.toggle("is-active",a),s.setAttribute("aria-pressed",String(a))})}syncControls(){var t,e,s;(t=this.root)==null||t.querySelectorAll("[data-tool]").forEach(a=>{const i=this.tool==="split"?a.dataset.tool==="split":a.dataset.tool==="point"&&Number(a.dataset.label)===this.pointLabel;a.classList.toggle("is-active",i),a.setAttribute("aria-pressed",String(i))}),(e=this.root)==null||e.querySelectorAll("[data-axis]").forEach(a=>{const i=a.dataset.axis===this.manualSplit.axis;a.classList.toggle("is-active",i),a.setAttribute("aria-pressed",String(i))}),(s=this.canvas)==null||s.classList.toggle("is-touch-drawing",this.tool==="point")}update(){var o,n,r,c,u;const t=ot(this.points,this.manualSplit),e=et(this.points);this.showBest&&!e&&(this.showBest=!1);const s=this.showBest&&e?e:t,a=(o=this.root)==null?void 0:o.querySelector("#tree-threshold");a&&(a.value=String(this.manualSplit.threshold)),this.setText("[data-threshold-output]",this.manualSplit.threshold.toFixed(2).replace(".",",")),this.setText("[data-parent-gini]",this.points.length>0?q(s.parentGini):"—"),this.setText("[data-weighted-gini]",s.valid?q(s.weightedGini):"—"),this.setText("[data-misclassification]",s.valid?q(s.weightedMisclassification):"—"),this.setText("[data-gain]",s.valid?q(s.giniGain):"—");const i=(n=this.root)==null?void 0:n.querySelector("[data-action='best']");i&&(i.disabled=!e);const d=(r=this.root)==null?void 0:r.querySelector("[data-action='show-manual']");d==null||d.toggleAttribute("hidden",!this.showBest),(u=(c=this.root)==null?void 0:c.querySelector("[data-best-legend]"))==null||u.toggleAttribute("hidden",!this.showBest),this.updateObservation(s,t,e),this.updateTree(s),this.syncControls(),this.draw()}updateObservation(t,e,s){var r;const a=(r=this.root)==null?void 0:r.querySelector("[data-observation]"),i=it(this.points);if(!a)return;if(!t.valid){a.innerHTML=`<p class="control-label">Aktuális vágás</p><strong>Mindkét oldalra kell pont.</strong><p>Most ${i.a} A és ${i.b} B pont van. Rajzolj pontokat, vagy válassz kész adatkészletet.</p>`,this.setText("[data-summary]",`${this.points.length} pont · ${i.a} A · ${i.b} B. A vágás egyik gyermeke üres.`);return}const d=I(R(t.left)),o=I(R(t.right));let n="A CART-eredményhez nyomd meg a Legjobb vágás gombot.";if(this.showBest&&s)if(!e.valid)n="A saját vágás egyik oldala üres, ezért nem érvényes CART-jelölt.";else{const c=Math.max(0,e.weightedGini-s.weightedGini);n=c<5e-4?`A saját vágás ugyanilyen tiszta: súlyozott Gini ${q(e.weightedGini)}.`:`Saját Gini: ${q(e.weightedGini)}. A CART ${q(c)} értékkel kisebb súlyozott Ginit talált.`}a.innerHTML=`<p class="control-label">${this.showBest?"CART-vágás":"Saját vágás"}</p><strong>${U(t.split)}</strong><p>Az igen ág ${t.left.length} pontból ${d}, a nem ág ${t.right.length} pontból ${o} osztályt jelez. ${n}</p>`,this.setText("[data-summary]",`${this.points.length} pont · ${i.a} A · ${i.b} B. ${U(t.split)}; súlyozott Gini ${q(t.weightedGini)}.`)}updateTree(t){var u;const e=(u=this.root)==null?void 0:u.querySelector("[data-tree-svg]");if(!e)return;const s='<title id="tree-svg-title">Az aktuális gyökérvágás fája</title>';if(!t.valid){e.innerHTML=`${s}<desc id="tree-svg-desc" data-tree-desc>Nincs érvényes kétoldali vágás.</desc>
        <rect x="190" y="30" width="140" height="54" rx="4" fill="#fffdf6" stroke="#12203f" />
        <text x="260" y="54" text-anchor="middle" fill="#12203f" font-size="12" font-family="IBM Plex Mono">Nincs két ág</text>
        <text x="260" y="70" text-anchor="middle" fill="#667085" font-size="10" font-family="IBM Plex Sans">Adj pontokat mindkét oldalra</text>`,this.setText("[data-tree-caption]","Az érvényes vágáshoz mindkét oldalon kell legalább egy pont.");return}const a=it(t.left),i=it(t.right),d=R(t.left),o=R(t.right),n=d===0?"#d84429":"#1e67b8",r=o===0?"#d84429":"#1e67b8",c=`${U(t.split)} feltételből egy ${I(d)} és egy ${I(o)} többségű levél következik.`;e.innerHTML=`${s}<desc id="tree-svg-desc" data-tree-desc>${c}</desc>
      <path d="M260 46 L133 83 M260 46 L387 83" fill="none" stroke="#7b8290" stroke-width="1.4" />
      <text x="181" y="65" fill="#667085" font-size="9" font-family="IBM Plex Mono">igen</text>
      <text x="331" y="65" fill="#667085" font-size="9" font-family="IBM Plex Mono">nem</text>
      <rect x="195" y="8" width="130" height="38" rx="4" fill="#fffdf6" stroke="#12203f" stroke-width="1.5" />
      <text x="260" y="31" text-anchor="middle" fill="#12203f" font-size="12" font-family="IBM Plex Mono">${U(t.split)}</text>
      <rect x="70" y="82" width="126" height="34" rx="4" fill="#fffdf6" stroke="${n}" stroke-width="2" />
      <text x="133" y="97" text-anchor="middle" fill="${n}" font-size="11" font-weight="650" font-family="IBM Plex Sans">${I(d)} osztály</text>
      <text x="133" y="109" text-anchor="middle" fill="#667085" font-size="8.5" font-family="IBM Plex Mono">${a.a} A · ${a.b} B</text>
      <rect x="324" y="82" width="126" height="34" rx="4" fill="#fffdf6" stroke="${r}" stroke-width="2" />
      <text x="387" y="97" text-anchor="middle" fill="${r}" font-size="11" font-weight="650" font-family="IBM Plex Sans">${I(o)} osztály</text>
      <text x="387" y="109" text-anchor="middle" fill="#667085" font-size="8.5" font-family="IBM Plex Mono">${i.a} A · ${i.b} B</text>`,this.setText("[data-tree-caption]",`${U(t.split)} után az ágak többségi osztálya adja a két levél becslését.`)}setText(t,e){var a;const s=(a=this.root)==null?void 0:a.querySelector(t);s&&(s.textContent=e)}draw(){if(!this.canvas)return;const t=this.canvas.getContext("2d");if(!t)return;const{width:e,height:s}=B(this.canvas),a=20,i=Math.max(1,e-a*2),d=Math.max(1,s-a*2),o=ot(this.points,this.manualSplit),n=et(this.points),r=this.showBest&&n?n:o;if(t.clearRect(0,0,e,s),t.fillStyle="#f4f1e8",t.fillRect(0,0,e,s),r.valid){const c=R(r.left),u=R(r.right),h=m=>m===0?"rgba(216, 68, 41, 0.09)":"rgba(30, 103, 184, 0.09)";if(r.split.axis==="x"){const m=a+r.split.threshold*i;t.fillStyle=h(c),t.fillRect(a,a,m-a,d),t.fillStyle=h(u),t.fillRect(m,a,e-a-m,d)}else{const m=a+r.split.threshold*d;t.fillStyle=h(c),t.fillRect(a,a,i,m-a),t.fillStyle=h(u),t.fillRect(a,m,i,s-a-m)}}G(t,e,s,a),this.showBest&&n&&o.valid&&this.drawSplitLine(t,e,s,o.split,"#d84429",!0,"saját"),r.valid&&this.drawSplitLine(t,e,s,r.split,this.showBest?"#17776c":"#d84429",!1,this.showBest?"CART":"saját"),this.points.forEach(c=>{const[u,h]=w(c,e,s,a);vt(t,u,h,c.label,4.8)})}drawSplitLine(t,e,s,a,i,d,o){const r=20+a.threshold*(e-40),c=20+a.threshold*(s-40);t.save(),t.strokeStyle=i,t.lineWidth=d?1.5:2.6,t.setLineDash(d?[5,5]:[]),t.beginPath(),a.axis==="x"?(t.moveTo(r,20),t.lineTo(r,s-20)):(t.moveTo(20,c),t.lineTo(e-20,c)),t.stroke(),t.setLineDash([]),t.font="600 10px IBM Plex Mono, monospace";const u=t.measureText(o).width,h=a.axis==="x"?Math.min(e-20-u-10,r+6):26,m=a.axis==="x"?35:Math.max(33,c-7);t.fillStyle="rgba(255, 253, 246, 0.92)",t.fillRect(h-4,m-11,u+8,15),t.fillStyle=i,t.fillText(o,h,m),t.restore()}}function rt(l){return Math.max(0,Math.min(1,l))}function J(l,t){return t===0?null:l/t}function se(l,t,e,s){return t<=1?.5:(l*e+s)%t/(t-1)}function D(l,t,e,s,a,i,d){return Array.from({length:e},(o,n)=>({id:`${l}-${String(n+1).padStart(4,"0")}`,truth:t,score:s+(a-s)*se(n,e,i,d)}))}function ae(){return[...D("rare-positive",1,10,.42,.74,7,3),...D("rare-negative",0,990,.02,.62,487,113)]}function ie(){return[...D("overlap-positive",1,72,.3,.88,37,9),...D("overlap-negative",0,168,.08,.72,101,21)]}function ne(){return[...D("separated-positive",1,80,.66,.96,43,7),...D("separated-negative",0,120,.04,.42,73,19)]}const Q=[{id:"rare",title:"Ritka pozitív · 1%",summary:"1000 esetből 10 pozitív. A magas küszöb mindet negatívnak jelöli.",question:"Mit ér a 99%-os pontosság, ha egyetlen pozitív esetet sem talál meg?",defaultThreshold:.8,observations:ae()},{id:"overlap",title:"Átfedő csoportok · 30%",summary:"240 eset, egymásba érő pontszámokkal.",question:"Hol cserélődik fel a precision és a recall előnye?",defaultThreshold:.55,observations:ie()},{id:"separated",title:"Jól elkülönülő · 40%",summary:"200 eset, a két osztály között tiszta réssel.",question:"Miért marad több küszöbnél is hibátlan a tévesztési mátrix?",defaultThreshold:.5,observations:ne()}];function oe(l,t){const e=Number.isFinite(t)?rt(t):.5;return rt(l.score)>=e}function St(l,t){const e=oe(l,t);return l.truth===1?e?"tp":"fn":e?"fp":"tn"}function re(l,t){return l.reduce((e,s)=>(e[St(s,t)]+=1,e),{tp:0,tn:0,fp:0,fn:0})}function le(l){const t=l.tp+l.tn+l.fp+l.fn;return{accuracy:J(l.tp+l.tn,t),precision:J(l.tp,l.tp+l.fp),recall:J(l.tp,l.tp+l.fn),f1:J(2*l.tp,2*l.tp+l.fp+l.fn)}}function de(l){const t=l.filter(n=>n.truth===1).length,e=l.length-t;if(t===0||e===0)return{points:[{threshold:Number.POSITIVE_INFINITY,falsePositiveRate:0,truePositiveRate:0},{threshold:Number.NEGATIVE_INFINITY,falsePositiveRate:1,truePositiveRate:1}],auc:null};const s=l.map(n=>({truth:n.truth,score:rt(n.score)})).sort((n,r)=>r.score-n.score),a=[{threshold:Number.POSITIVE_INFINITY,falsePositiveRate:0,truePositiveRate:0}];let i=0,d=0;for(let n=0;n<s.length;){const r=s[n].score;let c=n;for(;c<s.length&&s[c].score===r;)s[c].truth===1?i+=1:d+=1,c+=1;a.push({threshold:r,falsePositiveRate:d/e,truePositiveRate:i/t}),n=c}let o=0;for(let n=1;n<a.length;n+=1){const r=a[n-1],c=a[n];o+=(c.falsePositiveRate-r.falsePositiveRate)*(r.truePositiveRate+c.truePositiveRate)/2}return{points:a,auc:o}}function H(l){return l===null?"—":`${(l*100).toFixed(1).replace(".0","")}%`}function ce(l){return l.id==="rare"?"1%":l.id==="overlap"?"↔":"✓"}function he(l,t){let e=Math.imul(l+1+t,73244475);return e=Math.imul(e^e>>>16,73244475),e^=e>>>16,(e>>>0)/4294967295}class ue{constructor(t){p(this,"context");p(this,"root");p(this,"canvas");p(this,"preset",Q[0]);p(this,"threshold",Q[0].defaultThreshold);p(this,"resizeObserver");this.context=t}mount(t){this.root=t,t.innerHTML=`
      <article class="module-page" data-module="evaluation">
        <header class="module-intro paper-header">
          <div class="module-index">07 <span>/ 12</span></div>
          <div>
            <p class="eyebrow">Kiértékelés · osztályozási küszöb</p>
            <h1>A küszöb ára</h1>
            <p class="lede">Mozgasd a döntési küszöböt, és figyeld együtt a tévesztési mátrixot, a mérőszámokat és a ROC-görbét.</p>
          </div>
          <a class="present-link" href="?mode=present#/kiertekeles" aria-label="Kiértékelés megnyitása vetítés módban">Vetítés <span aria-hidden="true">↗</span></a>
        </header>

        <section class="workbench" aria-labelledby="evaluation-workbench-title">
          <div class="workbench-topline">
            <div><p class="section-number">INTERAKTÍV MUNKAPAD</p><h2 id="evaluation-workbench-title">Mit nevezzen a modell pozitívnak?</h2></div>
            <p class="workbench-instruction">A pontszám legalább akkora, mint a küszöb: pozitív jelzés. Alatta: negatív jelzés.</p>
          </div>

          <div class="preset-strip" role="group" aria-label="Szintetikus értékelési eset választása">
            ${Q.map((e,s)=>`
              <button class="preset ${s===0?"is-active":""}" type="button" data-evaluation-preset="${e.id}" aria-pressed="${s===0}">
                <span class="preset-mark preset-custom evaluation-preset-mark" aria-hidden="true">${ce(e)}</span>
                <span><strong>${e.title}</strong><small>${e.summary}</small></span>
              </button>`).join("")}
          </div>

          <div class="canvas-layout evaluation-layout">
            <aside class="tool-column" aria-label="Küszöbhelyzetek">
              <p class="control-label">Gyors helyzetek</p>
              <button class="button button-ink" type="button" data-action="all-negative">0 pozitív jelzés</button>
              <button class="text-tool" type="button" data-action="reset-threshold">Alap-küszöb</button>
              <div class="tool-divider"></div>
              <p class="tool-note"><strong>Szintetikus oktatási példa.</strong> A pontok nem személyek adatai, és a modul nem diagnosztikai eszköz.</p>
            </aside>

            <div class="canvas-column">
              <div class="canvas-frame evaluation-canvas-frame">
                <canvas class="data-canvas" data-outcome-canvas aria-label="Szintetikus esetek a valós címke, a modellpontszám és a küszöb szerint" role="img"></canvas>
              </div>
              <div class="canvas-legend" aria-label="Kimenetek jelmagyarázata">
                <span><i class="legend-core" aria-hidden="true"></i>TP · helyes pozitív</span>
                <span><i class="legend-noise" aria-hidden="true">×</i>FN · kihagyott pozitív</span>
                <span><i class="legend-square" aria-hidden="true"></i>TN · helyes negatív</span>
                <span><i class="legend-triangle" aria-hidden="true"></i>FP · téves pozitív</span>
              </div>
              <p class="canvas-summary" data-summary aria-live="polite"></p>
            </div>

            <aside class="parameter-column">
              <label class="range-control" for="evaluation-threshold">
                <span><strong>Döntési küszöb</strong><output for="evaluation-threshold" data-threshold-output>80%</output></span>
                <input id="evaluation-threshold" type="range" min="0" max="100" step="1" value="80" />
                <span class="range-ends"><small>több pozitív jelzés</small><small>kevesebb pozitív jelzés</small></span>
              </label>
              <div class="observation" data-observation aria-live="polite"></div>
              <dl class="metric-list evaluation-metrics">
                <div><dt>Pontosság (accuracy)</dt><dd data-accuracy>—</dd></div>
                <div><dt>Precizitás (precision)</dt><dd data-precision>—</dd></div>
                <div><dt>Visszahívás (recall)</dt><dd data-recall>—</dd></div>
                <div><dt>F1</dt><dd data-f1>—</dd></div>
              </dl>
            </aside>
          </div>

          <div class="evaluation-diagnostics">
            <section class="confusion-panel" aria-labelledby="confusion-title">
              <p class="control-label">Tévesztési mátrix</p>
              <h3 id="confusion-title">Négyféle kimenet</h3>
              <table class="confusion-table">
                <caption class="visually-hidden">Valós címke és modelljelzés kereszttáblája</caption>
                <thead><tr><td></td><th scope="col">Jelzés: pozitív</th><th scope="col">Jelzés: negatív</th></tr></thead>
                <tbody>
                  <tr><th scope="row">Valós: pozitív</th><td class="cell-tp"><strong data-tp>0</strong><small>TP</small></td><td class="cell-fn"><strong data-fn>0</strong><small>FN</small></td></tr>
                  <tr><th scope="row">Valós: negatív</th><td class="cell-fp"><strong data-fp>0</strong><small>FP</small></td><td class="cell-tn"><strong data-tn>0</strong><small>TN</small></td></tr>
                </tbody>
              </table>
            </section>

            <section class="roc-panel" aria-labelledby="roc-title">
              <div class="roc-heading"><div><p class="control-label">Minden lehetséges küszöb</p><h3 id="roc-title">ROC-görbe</h3></div><div><small>AUC</small><strong data-auc>—</strong></div></div>
              <svg class="roc-chart" viewBox="0 0 380 270" role="img" aria-labelledby="roc-svg-title roc-svg-desc">
                <title id="roc-svg-title">ROC-görbe és az aktuális küszöb helye</title>
                <desc id="roc-svg-desc" data-roc-description>A görbe a téves pozitív arány és a valódi pozitív arány kapcsolatát mutatja.</desc>
                <path class="roc-grid" d="M44 18V226H356M44 174H356M44 122H356M44 70H356M122 18V226M200 18V226M278 18V226" fill="none" stroke="rgba(18, 32, 63, 0.14)" />
                <path class="roc-baseline" d="M44 226L356 18" fill="none" stroke="rgba(18, 32, 63, 0.28)" stroke-dasharray="5 5" />
                <path class="roc-curve" data-roc-path d="" fill="none" stroke="#1e4fb5" stroke-width="3" stroke-linejoin="round" />
                <circle class="roc-current" data-roc-marker cx="44" cy="226" r="6" fill="#d84429" stroke="#f4f1e8" stroke-width="2" />
                <g class="roc-axis-labels" fill="rgba(18, 32, 63, 0.66)" font-family="IBM Plex Mono, monospace" font-size="10" aria-hidden="true">
                  <text x="44" y="244">0</text><text x="196" y="244">FPR</text><text x="350" y="244">1</text>
                  <text x="27" y="230">0</text><text x="27" y="23">1</text><text x="14" y="130" transform="rotate(-90 14 130)">TPR / recall</text>
                </g>
              </svg>
              <p>A pont a mostani küszöböt jelöli. A görbe egésze a rangsorolást összegzi.</p>
            </section>
          </div>
        </section>

        <section class="experiments depth-shell" aria-labelledby="evaluation-try-title">
          <div class="depth-kicker">Kísérletek</div><h2 id="evaluation-try-title">Három próba a küszöbbel</h2>
          <ol class="experiment-list">
            <li><span>01</span><div><strong>Indulj a Ritka pozitív készlettel.</strong><p>Az alaphelyzet 99%-os accuracyt mutat. Nézd meg mellé a recallt és az FN mezőt.</p></div></li>
            <li><span>02</span><div><strong>Engedd le a küszöböt.</strong><p>Figyeld, hogyan nő a TP és a recall, miközben téves pozitív jelzések is megjelenhetnek.</p></div></li>
            <li><span>03</span><div><strong>Válts az Átfedő készletre.</strong><p>Keress két küszöböt: az egyiknél a precision, a másiknál a recall nagyobb. A választáshoz előbb a két hibatípus következményét kell rögzíteni.</p></div></li>
          </ol>
        </section>

        <section class="depth reading-layer" aria-labelledby="evaluation-depth-title">
          <p class="eyebrow">Magyarázat</p>
          <h2 id="evaluation-depth-title">Egyetlen mérőszám nem írja le az összes hibát.</h2>
          <p>A küszöb a modell folytonos pontszámából készít kétosztályos döntést. A tévesztési mátrix megmutatja, milyen típusú találatokból és hibákból áll össze az eredmény; a megfelelő mérőszámot a feladat és a hibák következménye alapján kell kiválasztani.</p>
          <div class="concept-grid">
            <div><p class="concept-label">Precision és recall</p><h3>Más kérdésre válaszolnak.</h3><p>A precision azt méri, a pozitív jelzések mekkora része helyes. A recall azt, a valódi pozitív esetek mekkora részét találta meg a modell.</p></div>
            <div class="formula" aria-label="precision egyenlő TP per TP plusz FP; recall egyenlő TP per TP plusz FN; F1 a precision és recall harmonikus átlaga">
              <math display="block"><mtable rowspacing="0.7em"><mtr><mtd><mi>precision</mi></mtd><mtd><mo>=</mo><mfrac><mi>TP</mi><mrow><mi>TP</mi><mo>+</mo><mi>FP</mi></mrow></mfrac></mtd></mtr><mtr><mtd><mi>recall</mi></mtd><mtd><mo>=</mo><mfrac><mi>TP</mi><mrow><mi>TP</mi><mo>+</mo><mi>FN</mi></mrow></mfrac></mtd></mtr><mtr><mtd><msub><mi>F</mi><mn>1</mn></msub></mtd><mtd><mo>=</mo><mfrac><mrow><mn>2</mn><mo>·</mo><mi>precision</mi><mo>·</mo><mi>recall</mi></mrow><mrow><mi>precision</mi><mo>+</mo><mi>recall</mi></mrow></mfrac></mtd></mtr></mtable></math>
            </div>
          </div>
          <aside class="edge-case"><strong>Mit mond az AUC?</strong> A ROC–AUC azt összegzi, milyen jól rangsorolja a modell a pozitív példákat a negatívak elé az összes küszöbön. Nem választ üzemi küszöböt, és önmagában nem mutatja meg a pontszámok kalibráltságát.</aside>
          <aside class="edge-case"><strong>Valós alkalmazásban.</strong> A küszöböt és a mérőszámokat előre rögzített cél, külön értékelési adat és szakterületi követelmények alapján kell ellenőrizni. Ez a szintetikus példa csak a mérőszámok működését szemlélteti.</aside>
          <div class="knowledge-check" data-quiz>
            <p class="concept-label">Ellenőrző kérdés</p>
            <h3>A ritka, 1%-os pozitív készleten a modell minden esetet negatívnak jelöl. Mi igaz?</h3>
            <div class="answer-grid">
              <button type="button" data-answer="wrong">A 99%-os accuracy miatt jól megtalálja a pozitív eseteket.</button>
              <button type="button" data-answer="right">Az accuracy 99%, a recall 0%.</button>
              <button type="button" data-answer="wrong">A precision és a recall egyaránt 99%.</button>
            </div>
            <p class="quiz-feedback" data-quiz-feedback aria-live="polite"></p>
          </div>
        </section>
      </article>`,this.canvas=t.querySelector("[data-outcome-canvas]")??void 0,this.bindControls(),this.canvas&&(this.resizeObserver=new ResizeObserver(()=>this.draw()),this.resizeObserver.observe(this.canvas)),this.update()}destroy(){var t;(t=this.resizeObserver)==null||t.disconnect(),this.root=void 0,this.canvas=void 0}bindControls(){var t,e,s;this.root&&((t=this.root.querySelector("#evaluation-threshold"))==null||t.addEventListener("input",a=>{this.threshold=Number(a.target.value)/100,this.update()}),this.root.querySelectorAll("[data-evaluation-preset]").forEach(a=>{a.addEventListener("click",()=>{var o,n;const i=Q.find(r=>r.id===a.dataset.evaluationPreset);if(!i)return;this.preset=i,this.threshold=i.defaultThreshold;const d=(o=this.root)==null?void 0:o.querySelector("#evaluation-threshold");d&&(d.value=String(Math.round(this.threshold*100))),(n=this.root)==null||n.querySelectorAll("[data-evaluation-preset]").forEach(r=>{const c=r===a;r.classList.toggle("is-active",c),r.setAttribute("aria-pressed",String(c))}),this.update()})}),(e=this.root.querySelector("[data-action='all-negative']"))==null||e.addEventListener("click",()=>{var i;this.threshold=1;const a=(i=this.root)==null?void 0:i.querySelector("#evaluation-threshold");a&&(a.value="100"),this.update()}),(s=this.root.querySelector("[data-action='reset-threshold']"))==null||s.addEventListener("click",()=>{var i;this.threshold=this.preset.defaultThreshold;const a=(i=this.root)==null?void 0:i.querySelector("#evaluation-threshold");a&&(a.value=String(Math.round(this.threshold*100))),this.update()}),this.root.querySelectorAll("[data-answer]").forEach(a=>{a.addEventListener("click",()=>{var o,n;const i=a.dataset.answer==="right";(o=this.root)==null||o.querySelectorAll("[data-answer]").forEach(r=>r.classList.remove("is-correct","is-wrong")),a.classList.add(i?"is-correct":"is-wrong");const d=(n=this.root)==null?void 0:n.querySelector("[data-quiz-feedback]");d&&(d.textContent=i?"Helyes. A sok valódi negatív elfedi, hogy a modell mind a 10 pozitív esetet kihagyta. A modult teljesítetted.":"Nézd meg külön az FN mezőt és a recall nevezőjét."),i&&this.context.onComplete()})}))}update(){var o;const t=re(this.preset.observations,this.threshold),e=le(t),s=t.tp+t.fp,a=t.tp+t.fn,i=(n,r)=>{var u;const c=(u=this.root)==null?void 0:u.querySelector(n);c&&(c.textContent=String(r))};i("[data-threshold-output]",`${Math.round(this.threshold*100)}%`),i("[data-tp]",t.tp),i("[data-tn]",t.tn),i("[data-fp]",t.fp),i("[data-fn]",t.fn),i("[data-accuracy]",H(e.accuracy)),i("[data-precision]",H(e.precision)),i("[data-recall]",H(e.recall)),i("[data-f1]",H(e.f1)),i("[data-summary]",`${this.preset.observations.length} szintetikus eset · ${a} valós pozitív · ${s} pozitív jelzés a mostani küszöbnél.`);const d=(o=this.root)==null?void 0:o.querySelector("[data-observation]");d&&(s===0&&this.preset.id==="rare"?d.innerHTML='<p class="control-label">A pontosság csapdája</p><strong>99% accuracy, 0% recall.</strong><p>A modell a 990 negatív esetet eltalálja, de mind a 10 pozitív esetet kihagyja. Precision nincs, mert nem adott pozitív jelzést.</p>':s===0?d.innerHTML='<p class="control-label">Aktuális eredmény</p><strong>Nincs pozitív jelzés.</strong><p>A precision nem értelmezhető, mert a modell egy esetet sem jelölt pozitívnak.</p>':(e.recall??0)<.5?d.innerHTML='<p class="control-label">Aktuális eredmény</p><strong>A pozitív esetek többsége kimarad.</strong><p>A küszöb lejjebb húzása növelheti a recallt, de az FP-k száma is változhat.</p>':(e.precision??0)<.5?d.innerHTML='<p class="control-label">Aktuális eredmény</p><strong>A pozitív jelzések többsége téves.</strong><p>A küszöb feljebb húzása csökkentheti az FP-k számát, de pozitív esetek maradhatnak ki.</p>':d.innerHTML=`<p class="control-label">Aktuális eredmény</p><strong>${t.tp} megtalált, ${t.fn} kihagyott pozitív.</strong><p>A küszöb megítéléséhez az FP és FN hibák következményét is ismerni kell.</p>`),this.updateRoc(t),this.draw()}updateRoc(t){var h,m,g,v,y;const e=de(this.preset.observations),s=f=>44+f*312,a=f=>226-f*208,i=e.points.map((f,x)=>`${x===0?"M":"L"}${s(f.falsePositiveRate).toFixed(2)} ${a(f.truePositiveRate).toFixed(2)}`).join(" ");(m=(h=this.root)==null?void 0:h.querySelector("[data-roc-path]"))==null||m.setAttribute("d",i);const d=t.fp+t.tn===0?0:t.fp/(t.fp+t.tn),o=t.tp+t.fn===0?0:t.tp/(t.tp+t.fn),n=(g=this.root)==null?void 0:g.querySelector("[data-roc-marker]");n==null||n.setAttribute("cx",String(s(d))),n==null||n.setAttribute("cy",String(a(o)));const r=e.auc===null?"—":e.auc.toFixed(3),c=(v=this.root)==null?void 0:v.querySelector("[data-auc]");c&&(c.textContent=r);const u=(y=this.root)==null?void 0:y.querySelector("[data-roc-description]");u&&(u.textContent=`AUC: ${r}. Az aktuális küszöbnél a téves pozitív arány ${H(d)}, a valódi pozitív arány ${H(o)}.`)}draw(){if(!this.canvas)return;const t=this.canvas.getContext("2d");if(!t)return;const{width:e,height:s}=B(this.canvas),a=44,i=e-18,d=26,o=s-40,n=d+(o-d)*.34,r=a+this.threshold*(i-a);t.clearRect(0,0,e,s),t.fillStyle="#f4f1e8",t.fillRect(0,0,e,s),G(t,e,s,20),t.save(),t.fillStyle="rgba(224, 69, 42, 0.055)",t.fillRect(a,d,Math.max(0,r-a),n-d),t.fillStyle="rgba(42, 157, 143, 0.075)",t.fillRect(r,d,Math.max(0,i-r),n-d),t.fillStyle="rgba(30, 79, 181, 0.045)",t.fillRect(a,n,Math.max(0,r-a),o-n),t.fillStyle="rgba(242, 193, 78, 0.11)",t.fillRect(r,n,Math.max(0,i-r),o-n),t.strokeStyle="rgba(18, 32, 63, 0.24)",t.lineWidth=1,t.beginPath(),t.moveTo(a,n),t.lineTo(i,n),t.stroke(),t.fillStyle="rgba(18, 32, 63, 0.62)",t.font='600 10px "IBM Plex Mono", monospace',t.fillText("VALÓS +",a+7,d+14),t.fillText("VALÓS −",a+7,n+16),r-a>72&&(t.fillText("FN",r-24,d+14),t.fillText("TN",r-24,n+16)),i-r>72&&(t.fillText("TP",r+8,d+14),t.fillText("FP",r+8,n+16)),t.restore();let c=0,u=0;const h=this.preset.observations.filter(y=>y.truth===1).length,m=this.preset.observations.length-h,g=this.preset.observations.length>500?2.1:3.2;this.preset.observations.forEach(y=>{const f=y.truth===1,x=f?c++:u++,F=f?h:m,b=f?d+22:n+22,k=f?n-8:o-8,z=F<=1?.5:he(x,f?17:193),$=a+y.score*(i-a),E=b+z*Math.max(1,k-b);this.drawOutcomePoint(t,$,E,St(y,this.threshold),g)}),t.save(),t.strokeStyle="#d84429",t.lineWidth=2,t.beginPath(),t.moveTo(r,d-2),t.lineTo(r,o+5),t.stroke();const v=Math.max(a+3,Math.min(i-64,r-30));t.fillStyle="#d84429",t.font='650 10px "IBM Plex Mono", monospace',t.fillText(`KÜSZÖB ${Math.round(this.threshold*100)}%`,v,o+20),t.fillStyle="rgba(18, 32, 63, 0.56)",t.font='500 9px "IBM Plex Mono", monospace',[0,.25,.5,.75,1].forEach(y=>{const f=a+y*(i-a);t.fillText(String(y),f-(y===1?5:7),s-8)}),t.restore()}drawOutcomePoint(t,e,s,a,i){t.save(),t.lineWidth=Math.max(1.2,i*.52),a==="tp"?(t.beginPath(),t.arc(e,s,i,0,Math.PI*2),t.fillStyle="rgba(23, 119, 108, 0.82)",t.fill()):a==="tn"?(t.fillStyle="rgba(30, 79, 181, 0.52)",t.fillRect(e-i,s-i,i*2,i*2)):a==="fp"?(t.beginPath(),t.moveTo(e,s-i*1.25),t.lineTo(e+i*1.15,s+i),t.lineTo(e-i*1.15,s+i),t.closePath(),t.strokeStyle="rgba(144, 112, 21, 0.88)",t.stroke()):(t.strokeStyle="rgba(216, 68, 41, 0.9)",t.beginPath(),t.moveTo(e-i,s-i),t.lineTo(e+i,s+i),t.moveTo(e+i,s-i),t.lineTo(e-i,s+i),t.stroke()),t.restore()}}const gt={moons:{title:"Két hold",question:"Mekkora k mellett marad meg a keskeny rés?",make:()=>lt()},xor:{title:"Kockás",question:"Miért nem lenne elég egyetlen egyenes?",make:()=>bt()},overlap:{title:"Átfedő",question:"Hol válik bizonytalanná a szavazás?",make:()=>kt()}};class pe{constructor(t){p(this,"context");p(this,"root");p(this,"canvas");p(this,"points",lt());p(this,"history",[]);p(this,"currentLabel",0);p(this,"k",5);p(this,"pointer");p(this,"drawing",!1);p(this,"lastDrawn");p(this,"touchDrawingEnabled",!1);p(this,"tapCandidate");p(this,"resizeObserver");p(this,"onKeyDown",t=>{var e;!((e=this.root)!=null&&e.isConnected)||t.target.closest("button, a, input, select, textarea, summary, [contenteditable='true']")||((t.key==="1"||t.key==="2")&&(this.currentLabel=Number(t.key)-1,this.syncClassControls()),(t.ctrlKey||t.metaKey)&&t.key.toLowerCase()==="z"&&(t.preventDefault(),this.undo()))});this.context=t}mount(t){this.root=t,t.innerHTML=`
      <article class="module-page" data-module="knn">
        <header class="module-intro paper-header">
          <div class="module-index">02 <span>/ 12</span></div>
          <div>
            <p class="eyebrow">Osztályozás · legközelebbi szomszédok</p>
            <h1>k legközelebbi szomszéd</h1>
            <p class="lede">Rajzolj pontokat két osztályhoz. A modul minden pozícióban a k legközelebbi tanítópont többségi címkéjét jeleníti meg.</p>
          </div>
          <a class="present-link" href="?mode=present#/knn" aria-label="kNN megnyitása vetítés módban">Vetítés <span aria-hidden="true">↗</span></a>
        </header>

        <section class="workbench" aria-labelledby="knn-workbench-title">
          <div class="workbench-topline">
            <div>
              <p class="section-number">INTERAKTÍV MUNKAPAD</p>
              <h2 id="knn-workbench-title">Hol lesz a határ?</h2>
            </div>
            <p class="workbench-instruction">Kattints vagy húzd a mutatót az ábrán. Mobilon koppints; folyamatos rajzoláshoz kapcsold be a rajzolási módot.</p>
          </div>

          <div class="preset-strip" role="group" aria-label="Adatkészlet választása">
            ${Object.entries(gt).map(([e,s],a)=>`
              <button class="preset ${a===0?"is-active":""}" type="button" data-preset="${e}" aria-pressed="${a===0}">
                <span class="preset-mark preset-${e}" aria-hidden="true"><i></i><i></i><i></i><i></i><i></i></span>
                <span><strong>${s.title}</strong><small>${s.question}</small></span>
              </button>`).join("")}
            <button class="preset" type="button" data-preset="custom" aria-pressed="false">
              <span class="preset-mark preset-custom" aria-hidden="true">＋</span>
              <span><strong>Saját rajz</strong><small>Üres adatkészlet.</small></span>
            </button>
          </div>

          <div class="canvas-layout">
            <aside class="tool-column" aria-label="Rajzeszközök">
              <p class="control-label">Pont osztálya</p>
              <button class="class-tool is-active" type="button" data-class="0" aria-pressed="true">
                <span class="shape shape-circle class-a" aria-hidden="true"></span><span>A osztály</span><kbd>1</kbd>
              </button>
              <button class="class-tool" type="button" data-class="1" aria-pressed="false">
                <span class="shape shape-square class-b" aria-hidden="true"></span><span>B osztály</span><kbd>2</kbd>
              </button>
              <button class="text-tool touch-draw-toggle" type="button" data-action="toggle-draw" aria-pressed="false"><span>Rajzolási mód</span><strong data-draw-state>ki</strong></button>
              <div class="tool-divider"></div>
              <button class="text-tool" type="button" data-action="undo">Visszavonás <kbd>⌘Z</kbd></button>
              <button class="text-tool" type="button" data-action="clear">Összes pont törlése</button>
            </aside>

            <div class="canvas-column">
              <div class="canvas-frame">
                <canvas class="data-canvas" aria-label="kNN pontfelhő és döntési tartomány" role="img"></canvas>
                <div class="canvas-corner" aria-hidden="true">x₂</div>
                <div class="canvas-axis" aria-hidden="true">x₁</div>
              </div>
              <p class="canvas-summary" data-summary aria-live="polite"></p>
            </div>

            <aside class="parameter-column">
              <label class="range-control" for="knn-k">
                <span><strong>Szomszédok száma</strong><output for="knn-k" data-k-output>5</output></span>
                <input id="knn-k" type="range" min="1" max="15" step="2" value="5" />
                <span class="range-ends"><small>k = 1</small><small>k = 15</small></span>
              </label>
              <div class="observation" data-observation>
                <p class="control-label">Aktuális pont</p>
                <strong>Vidd a mutatót az ábrára.</strong>
                <p>A modul megjelöli a k legközelebbi tanítópontot.</p>
              </div>
              <dl class="metric-list">
                <div><dt>A osztály</dt><dd data-count-a>0</dd></div>
                <div><dt>B osztály</dt><dd data-count-b>0</dd></div>
                <div><dt>k értéke</dt><dd data-k-metric>5</dd></div>
              </dl>
            </aside>
          </div>

          <details class="keyboard-entry">
            <summary>Billentyűzetes pontbevitel</summary>
            <div class="keyboard-entry-fields">
              <label>x koordináta <input type="number" min="0" max="1" step="0.05" value="0.5" data-entry-x /></label>
              <label>y koordináta <input type="number" min="0" max="1" step="0.05" value="0.5" data-entry-y /></label>
              <label>osztály <select data-entry-label><option value="0">A — kör</option><option value="1">B — négyzet</option></select></label>
              <button class="button button-ink" type="button" data-action="add-keyboard">Pont hozzáadása</button>
            </div>
          </details>
        </section>

        <section class="experiments depth-shell" aria-labelledby="knn-try-title">
          <div class="depth-kicker">Kísérletek</div>
          <h2 id="knn-try-title">Kísérletek a k értékével</h2>
          <ol class="experiment-list">
            <li><span>01</span><div><strong>Állítsd k-t 1-re.</strong><p>Figyeld meg, hol hoz létre egyetlen zajos pont különálló döntési tartományt.</p></div></li>
            <li><span>02</span><div><strong>Válaszd az Átfedő készletet.</strong><p>A határ mentén a szavazás bizonytalanabb, mint a felhők közepén.</p></div></li>
            <li><span>03</span><div><strong>Tegyél egy B pontot az A-k közepébe.</strong><p>Növeld k-t addig, amíg a környező A pontok adják a többségi címkét.</p></div></li>
          </ol>
        </section>

        <section class="depth reading-layer" aria-labelledby="knn-depth-title">
          <p class="eyebrow">Magyarázat</p>
          <h2 id="knn-depth-title">A kNN közvetlenül tárolja és használja a tanítópontokat.</h2>
          <p>A kNN-módszer egy új rekord címkéjét a hozzá legközelebbi tanítópontok többségi címkéjéből adja meg. Ebben a modulban euklideszi távolságot használunk, és mindkét koordinátát azonos [0,1] skálára tesszük. Valós adatoknál a skálázás és a távolság megválasztása is a modell része.</p>
          <div class="concept-grid">
            <div>
              <p class="concept-label">Fogalom</p>
              <h3>Euklideszi távolság</h3>
              <p>Két pont távolsága a koordinátánkénti eltérések négyzetösszegének gyöke.</p>
            </div>
            <div class="formula" aria-label="d zárójel x vessző z zárójel egyenlő négyzetgyök x egy mínusz z egy négyzete plusz x kettő mínusz z kettő négyzete">
              <math display="block"><mi>d</mi><mo>(</mo><mi>x</mi><mo>,</mo><mi>z</mi><mo>)</mo><mo>=</mo><msqrt><mrow><msup><mrow><mo>(</mo><msub><mi>x</mi><mn>1</mn></msub><mo>−</mo><msub><mi>z</mi><mn>1</mn></msub><mo>)</mo></mrow><mn>2</mn></msup><mo>+</mo><msup><mrow><mo>(</mo><msub><mi>x</mi><mn>2</mn></msub><mo>−</mo><msub><mi>z</mi><mn>2</mn></msub><mo>)</mo></mrow><mn>2</mn></msup></mrow></msqrt></math>
            </div>
          </div>
          <aside class="edge-case"><strong>Nagy dimenziószám.</strong> Nagy dimenzióban a pontok közötti távolságok egyre kevésbé különböznek. A kNN-nek ezért több adat és gondos változóválasztás kell.</aside>
          <div class="knowledge-check" data-quiz>
            <p class="concept-label">Ellenőrző kérdés</p>
            <h3>Egy hibásan címkézett pont kis, különálló döntési tartományt hozott létre. Melyik változtatás csökkenti legközvetlenebbül ezt a hatást?</h3>
            <div class="answer-grid">
              <button type="button" data-answer="wrong">Még egy dimenzió hozzáadása</button>
              <button type="button" data-answer="right">A k értékének növelése</button>
              <button type="button" data-answer="wrong">Az összes távolság megszorzása kettővel</button>
            </div>
            <p class="quiz-feedback" data-quiz-feedback aria-live="polite"></p>
          </div>
        </section>
      </article>`,this.canvas=t.querySelector("canvas.data-canvas")??void 0,this.bindControls(),this.canvas&&(this.resizeObserver=new ResizeObserver(()=>this.draw()),this.resizeObserver.observe(this.canvas)),this.update()}destroy(){var t;(t=this.resizeObserver)==null||t.disconnect(),window.removeEventListener("keydown",this.onKeyDown),this.root=void 0,this.canvas=void 0}bindControls(){var s,a,i,d;if(!this.root||!this.canvas)return;this.root.querySelectorAll("[data-preset]").forEach(o=>{o.addEventListener("click",()=>{var r;const n=o.dataset.preset??"moons";this.points=n==="custom"?[]:gt[n].make(),this.history=[],(r=this.root)==null||r.querySelectorAll("[data-preset]").forEach(c=>{const u=c===o;c.classList.toggle("is-active",u),c.setAttribute("aria-pressed",String(u))}),this.update()})}),this.root.querySelectorAll("[data-class]").forEach(o=>{o.addEventListener("click",()=>{this.currentLabel=Number(o.dataset.class??0),this.syncClassControls()})});const t=this.root.querySelector("#knn-k");t==null||t.addEventListener("input",()=>{this.k=Number(t.value),this.update()}),(s=this.root.querySelector("[data-action='undo']"))==null||s.addEventListener("click",()=>this.undo()),(a=this.root.querySelector("[data-action='clear']"))==null||a.addEventListener("click",()=>{this.pushHistory(),this.points=[],this.update()}),(i=this.root.querySelector("[data-action='toggle-draw']"))==null||i.addEventListener("click",o=>{var c;this.touchDrawingEnabled=!this.touchDrawingEnabled;const n=o.currentTarget;n.setAttribute("aria-pressed",String(this.touchDrawingEnabled)),n.classList.toggle("is-active",this.touchDrawingEnabled);const r=n.querySelector("[data-draw-state]");r&&(r.textContent=this.touchDrawingEnabled?"be":"ki"),(c=this.canvas)==null||c.classList.toggle("is-touch-drawing",this.touchDrawingEnabled)}),(d=this.root.querySelector("[data-action='add-keyboard']"))==null||d.addEventListener("click",()=>{var c,u,h,m,g,v;const o=Number(((u=(c=this.root)==null?void 0:c.querySelector("[data-entry-x]"))==null?void 0:u.value)??.5),n=Number(((m=(h=this.root)==null?void 0:h.querySelector("[data-entry-y]"))==null?void 0:m.value)??.5),r=Number(((v=(g=this.root)==null?void 0:g.querySelector("[data-entry-label]"))==null?void 0:v.value)??0);this.pushHistory(),this.points.push({x:Math.max(0,Math.min(1,o)),y:Math.max(0,Math.min(1,n)),label:r}),this.update()}),this.canvas.addEventListener("pointerdown",o=>{var r;const n=N(this.canvas,o);if(o.pointerType!=="mouse"&&!this.touchDrawingEnabled){this.tapCandidate={point:n,clientX:o.clientX,clientY:o.clientY,moved:!1};return}this.drawing=!0,(r=this.canvas)==null||r.setPointerCapture(o.pointerId),this.pushHistory(),this.addPoint(n)}),this.canvas.addEventListener("pointermove",o=>{if(this.tapCandidate){Math.hypot(o.clientX-this.tapCandidate.clientX,o.clientY-this.tapCandidate.clientY)>9&&(this.tapCandidate.moved=!0);return}this.pointer=N(this.canvas,o),this.drawing?this.addPoint(this.pointer):this.draw()});const e=()=>{this.drawing=!1,this.lastDrawn=void 0};this.canvas.addEventListener("pointerup",()=>{this.tapCandidate&&(this.tapCandidate.moved||(this.pushHistory(),this.addPoint(this.tapCandidate.point)),this.tapCandidate=void 0),e()}),this.canvas.addEventListener("pointercancel",()=>{this.tapCandidate=void 0,e()}),this.canvas.addEventListener("pointerleave",()=>{this.pointer=void 0,this.tapCandidate=void 0,e(),this.draw()}),window.addEventListener("keydown",this.onKeyDown),this.root.querySelectorAll("[data-answer]").forEach(o=>{o.addEventListener("click",()=>{var c,u;const n=o.dataset.answer==="right";(c=this.root)==null||c.querySelectorAll("[data-answer]").forEach(h=>h.classList.remove("is-correct","is-wrong")),o.classList.add(n?"is-correct":"is-wrong");const r=(u=this.root)==null?void 0:u.querySelector("[data-quiz-feedback]");r&&(r.textContent=n?"Helyes. A nagyobb k több szomszéd címkéjét veszi figyelembe, ezért kisebb az egyetlen hibás címke hatása. A modult teljesítetted.":"A k értéke határozza meg, hány tanítópont vesz részt a besorolásban."),n&&this.context.onComplete()})})}syncClassControls(){var t;(t=this.root)==null||t.querySelectorAll("[data-class]").forEach(e=>{const s=Number(e.dataset.class)===this.currentLabel;e.classList.toggle("is-active",s),e.setAttribute("aria-pressed",String(s))})}pushHistory(){this.history.push(this.points.map(t=>({...t}))),this.history.length>30&&this.history.shift()}undo(){const t=this.history.pop();t&&(this.points=t,this.update())}addPoint(t){this.lastDrawn&&(this.lastDrawn.x-t.x)**2+(this.lastDrawn.y-t.y)**2<.0012||this.points.length>=320||(this.points.push({...t,label:this.currentLabel}),this.lastDrawn=t,this.update())}update(){const t=this.points.filter(i=>i.label===0).length,e=this.points.filter(i=>i.label===1).length,s=(i,d)=>{var n;const o=(n=this.root)==null?void 0:n.querySelector(i);o&&(o.textContent=d)};s("[data-count-a]",String(t)),s("[data-count-b]",String(e)),s("[data-k-output]",String(this.k)),s("[data-k-metric]",this.points.length<this.k?`${this.k} (${this.points.length} elérhető)`:String(this.k));const a=t>0&&e>0?"A háttér minden helyen a helyi többség döntését mutatja.":"A döntési háttér két osztály pontjai után jelenik meg.";s("[data-summary]",`${this.points.length} tanítópont · ${t} kör · ${e} négyzet. ${a}`),this.draw()}draw(){var d;if(!this.canvas)return;const t=this.canvas.getContext("2d");if(!t)return;const{width:e,height:s}=B(this.canvas);if(t.clearRect(0,0,e,s),t.fillStyle="#f4f1e8",t.fillRect(0,0,e,s),this.points.some(o=>o.label===0)&&this.points.some(o=>o.label===1)){const n=Math.max(1,e-40),r=Math.max(1,s-40),c=Math.max(20,Math.min(42,Math.round(n/16))),u=Math.max(20,Math.round(c*r/n)),h=n/c,m=r/u;for(let g=0;g<u;g+=1)for(let v=0;v<c;v+=1){const y={x:(v+.5)/c,y:(g+.5)/u},f=dt(this.points,y,this.k);t.fillStyle=f.label===0?"rgba(224, 69, 42, 0.095)":"rgba(30, 79, 181, 0.1)",t.fillRect(20+v*h,20+g*m,h+.6,m+.6)}}G(t,e,s);let a;if(this.pointer&&this.points.length>0){a=dt(this.points,this.pointer,this.k);const[o,n]=w(this.pointer,e,s);t.save(),t.strokeStyle="rgba(18, 32, 63, 0.22)",t.setLineDash([3,4]),a.neighbors.forEach(c=>{const[u,h]=w(c,e,s);t.beginPath(),t.moveTo(o,n),t.lineTo(u,h),t.stroke()});const r=a.neighbors.reduce((c,u)=>Math.max(c,Math.sqrt((u.x-this.pointer.x)**2+(u.y-this.pointer.y)**2)),0);t.beginPath(),t.strokeStyle=a.label===0?"rgba(184, 50, 30, .68)":"rgba(30, 79, 181, .68)",t.setLineDash([]),t.ellipse(o,n,r*(e-40),r*(s-40),0,0,Math.PI*2),t.stroke(),t.restore()}if(this.points.forEach(o=>{const[n,r]=w(o,e,s);vt(t,n,r,o.label??0,4.7)}),this.pointer){const[o,n]=w(this.pointer,e,s);t.save(),t.beginPath(),t.arc(o,n,7,0,Math.PI*2),t.strokeStyle="#12203f",t.lineWidth=1.5,t.stroke(),t.restore()}const i=(d=this.root)==null?void 0:d.querySelector("[data-observation]");if(i)if(!a)i.innerHTML='<p class="control-label">Aktuális pont</p><strong>Vidd a mutatót az ábrára.</strong><p>A modul megjelöli a k legközelebbi tanítópontot.</p>';else{const o=a.neighbors.filter(r=>r.label===0).length,n=a.neighbors.length-o;i.innerHTML=`<p class="control-label">Aktuális pont</p><strong>Becsült osztály: ${a.label===0?"A":"B"}.</strong><p>A legközelebbi szomszédok között ${o} A és ${n} B címke van. A ${Math.round(a.confidence*100)}% többségi arány, nem kalibrált valószínűség.</p>`}}}class me{constructor(t){p(this,"context");p(this,"root");p(this,"canvas");p(this,"cohort",Kt());p(this,"ownPoint");p(this,"resizeObserver");this.context=t}mount(t){this.root=t,t.innerHTML=`
      <article class="module-page opening-page" data-module="opening">
        <header class="module-intro opening-intro">
          <p class="eyebrow">Bevezető modul · rekordok és attribútumok</p>
          <h1>Hogyan lesz egy válaszból adatpont?</h1>
          <p class="lede">Egy rekord egy megfigyelési egységhez, itt egy válaszadóhoz tartozó attribútumértékeket tárol. A minta teljesen szintetikus, az oldal nem küld adatot.</p>
        </header>

        <section class="workbench opening-workbench" aria-labelledby="opening-title">
          <div class="workbench-topline">
            <div><p class="section-number">MODUL 00</p><h2 id="opening-title">A válaszaid két dimenzióban</h2></div>
            <p class="sample-notice"><span aria-hidden="true">●</span> Generált mintaadatok · nem valós hallgatók</p>
          </div>
          <div class="opening-layout">
            <form class="self-form">
              <label class="range-control" for="opening-python">
                <span><strong>Python-magabiztosság</strong><output for="opening-python" data-python-output>3 / 5</output></span>
                <input id="opening-python" type="range" min="1" max="5" value="3" />
                <span class="range-ends"><small>most kezdem</small><small>otthonosan</small></span>
              </label>
              <label class="range-control" for="opening-coffee">
                <span><strong>Kávé vagy tea naponta</strong><output for="opening-coffee" data-coffee-output>2</output></span>
                <input id="opening-coffee" type="range" min="0" max="6" value="2" />
                <span class="range-ends"><small>0</small><small>6+</small></span>
              </label>
              <label class="select-control" for="opening-mode"><strong>Hogyan szeretsz dolgozni?</strong>
                <select id="opening-mode"><option value="0">Egyedül, csendben</option><option value="1" selected>Párban gondolkodva</option><option value="2">Csapatban, táblánál</option></select>
              </label>
              <button class="button button-hand" type="submit">Mutasd a pontomat</button>
              <p class="privacy-note">A válaszod a böngészőben marad. Nem küldjük el és nem tároljuk.</p>
            </form>
            <div class="cohort-map">
              <div class="canvas-frame dark-canvas-frame">
                <canvas class="data-canvas" aria-label="Szintetikus hallgatói pontfelhő és a saját pontod" role="img"></canvas>
                <div class="map-label map-label-x"><span>Python-magabiztosság</span><b>→</b></div>
                <div class="map-label map-label-y"><span>napi kávé / tea</span><b>→</b></div>
              </div>
              <p class="canvas-summary" data-summary aria-live="polite">86 generált mintapont. Állítsd be a válaszaidat, majd mutasd meg a saját pontodat.</p>
              <div class="cohort-legend" aria-label="A munkamód alakjelei"><span><i class="legend-circle" aria-hidden="true"></i>egyedül</span><span><i class="legend-square" aria-hidden="true"></i>párban</span><span><i class="legend-triangle" aria-hidden="true"></i>csapatban</span></div>
            </div>
          </div>
        </section>

        <section class="depth reading-layer opening-reading" aria-labelledby="opening-depth-title">
          <p class="eyebrow">Ábrázolás</p>
          <h2 id="opening-depth-title">Két változó adja a koordinátákat, a harmadik az alakjelet.</h2>
          <p>Más változópár választásakor ugyanazok a rekordok más elrendezésben jelennének meg. Minden pont szintetikus; az ábra nem állít semmit valódi hallgatókról.</p>
          <div class="concept-grid">
            <div><p class="concept-label">Rekord</p><h3>Egy megfigyelési egység</h3><p>Itt egy válaszadó. Más feladatban lehet tranzakció, kép, mérés vagy hálózati csúcs.</p></div>
            <div><p class="concept-label">Attribútum</p><h3>Amit róla rögzítünk</h3><p>A koordináták és az alak egy-egy tulajdonságot kódolnak. A nem ábrázolt attribútum nem olvasható le erről a diagramról.</p></div>
          </div>
          <a class="next-module-link" href="#/knn"><span>Következő elérhető modul</span><strong>02 · k legközelebbi szomszéd</strong><b aria-hidden="true">→</b></a>
        </section>
      </article>`,this.canvas=t.querySelector("canvas.data-canvas")??void 0,this.bindControls(),this.canvas&&(this.resizeObserver=new ResizeObserver(()=>this.draw()),this.resizeObserver.observe(this.canvas)),this.update()}destroy(){var t;(t=this.resizeObserver)==null||t.disconnect(),this.root=void 0,this.canvas=void 0}bindControls(){var s;if(!this.root)return;const t=this.root.querySelector("#opening-python"),e=this.root.querySelector("#opening-coffee");t==null||t.addEventListener("input",()=>this.update()),e==null||e.addEventListener("input",()=>this.update()),(s=this.root.querySelector(".self-form"))==null||s.addEventListener("submit",a=>{var d,o;a.preventDefault();const i=Number(((o=(d=this.root)==null?void 0:d.querySelector("#opening-mode"))==null?void 0:o.value)??0);this.ownPoint={x:.08+(Number((t==null?void 0:t.value)??3)-1)/4*.84,y:.9-Number((e==null?void 0:e.value)??2)/6*.8,label:i},this.context.onComplete(),this.update(),window.setTimeout(()=>{var n,r;return(r=(n=this.root)==null?void 0:n.querySelector(".cohort-map"))==null?void 0:r.scrollIntoView({behavior:window.matchMedia("(prefers-reduced-motion: reduce)").matches?"auto":"smooth",block:"center"})},80)})}update(){var d,o,n,r,c,u,h;const t=Number(((o=(d=this.root)==null?void 0:d.querySelector("#opening-python"))==null?void 0:o.value)??3),e=Number(((r=(n=this.root)==null?void 0:n.querySelector("#opening-coffee"))==null?void 0:r.value)??2),s=(c=this.root)==null?void 0:c.querySelector("[data-python-output]"),a=(u=this.root)==null?void 0:u.querySelector("[data-coffee-output]");s&&(s.textContent=`${t} / 5`),a&&(a.textContent=e===6?"6+":String(e));const i=(h=this.root)==null?void 0:h.querySelector("[data-summary]");i&&(i.textContent=this.ownPoint?"A sáfrányszínű gyűrű jelöli a te pontodat. A belső alak a választott munkamódot mutatja. Az oldal nem küldte el a válaszokat.":"86 generált mintapont. Állítsd be a válaszaidat, majd mutasd meg a saját pontodat."),this.draw()}draw(){if(!this.canvas)return;const t=this.canvas.getContext("2d");if(!t)return;const{width:e,height:s}=B(this.canvas);t.clearRect(0,0,e,s),t.fillStyle="#06080d",t.fillRect(0,0,e,s),t.save(),t.strokeStyle="rgba(111, 180, 255, .12)",t.setLineDash([2,7]);for(let i=1;i<5;i+=1){const d=24+i/5*(e-48),o=24+i/5*(s-48);t.beginPath(),t.moveTo(d,24),t.lineTo(d,s-24),t.stroke(),t.beginPath(),t.moveTo(24,o),t.lineTo(e-24,o),t.stroke()}t.restore();const a=["rgba(111,180,255,.56)","rgba(42,157,143,.56)","rgba(224,69,42,.58)"];if(this.cohort.forEach(i=>{const[d,o]=w(i,e,s,24);t.save(),t.translate(d,o);const n=i.label??0;t.strokeStyle=a[n],t.fillStyle=a[n],t.lineWidth=1.2,t.beginPath(),n===0?t.arc(0,0,3.2,0,Math.PI*2):n===1?t.rect(-2.8,-2.8,5.6,5.6):(t.moveTo(0,-3.7),t.lineTo(3.5,3),t.lineTo(-3.5,3),t.closePath()),t.fill(),t.restore()}),this.ownPoint){const[i,d]=w(this.ownPoint,e,s,24);t.save(),t.translate(i,d),t.strokeStyle="#f2c14e",t.fillStyle="#f2c14e",t.lineWidth=2.2,t.beginPath();const o=this.ownPoint.label??0;o===0?t.arc(0,0,4.5,0,Math.PI*2):o===1?t.rect(-4,-4,8,8):(t.moveTo(0,-5),t.lineTo(4.8,4),t.lineTo(-4.8,4),t.closePath()),t.fill(),t.beginPath(),t.arc(0,0,13,0,Math.PI*2),t.stroke(),t.restore()}}}function ge(l,t,e){return l<=2?{title:"Alultanulásra utal.",body:"Az alacsony fokszám a látható jel alakját is csak durván követi."}:e<=t*1.9?{title:"A tanító- és validációs hiba hasonló.",body:"A két hiba között ezen a mintán nincs nagy eltérés."}:{title:"Túltanulásra utal.",body:"A tanítóhiba tovább csökken, miközben a validációs pontokon nő a hiba."}}const Z={wave:{title:"Hullámzó jel",question:"Mekkora fokszám követi a görbületet?",make:l=>yt(l)},parabola:{title:"Parabola",question:"Mikor elég pontosan a másodfok?",make:l=>Ht(l)},outlier:{title:"Kiugró pont",question:"Mennyire húzza el az illesztést?",make:l=>Nt(l)},custom:{title:"Saját rajz",question:"Építs adatsort üres vászonról.",make:()=>[]}};class ve{constructor(t){p(this,"context");p(this,"root");p(this,"canvas");p(this,"points",yt());p(this,"history",[]);p(this,"activePreset","wave");p(this,"degree",3);p(this,"ridge",0);p(this,"showTest",!1);p(this,"resizeObserver");this.context=t}mount(t){this.root=t,t.innerHTML=`
      <article class="module-page" data-module="regression">
        <header class="module-intro paper-header">
          <div class="module-index">06 <span>/ 12</span></div>
          <div>
            <p class="eyebrow">Regresszió · modellkomplexitás</p>
            <h1>Polinomregresszió</h1>
            <p class="lede">Módosítsd a polinom fokszámát, majd hasonlítsd össze a tanító- és validációs hibát.</p>
          </div>
          <a class="present-link" href="?mode=present#/regresszio" aria-label="Regresszió megnyitása vetítés módban">Vetítés <span aria-hidden="true">↗</span></a>
        </header>

        <section class="workbench" aria-labelledby="reg-workbench-title">
          <div class="workbench-topline">
            <div><p class="section-number">INTERAKTÍV MUNKAPAD</p><h2 id="reg-workbench-title">Tanító- és validációs hiba</h2></div>
            <p class="workbench-instruction">A kitöltött pontokon tanul a modell. Kattintással új tanítópontot adhatsz hozzá.</p>
          </div>


          <div class="preset-strip regression-preset-strip" role="group" aria-label="Regressziós adatkészlet választása">
            ${Object.entries(Z).map(([e,s],a)=>`
              <button class="preset ${a===0?"is-active":""}" type="button" data-regression-preset="${e}" aria-pressed="${a===0}">
                <span class="preset-mark preset-regression-${e}${e==="custom"?" preset-custom":""}" aria-hidden="true">${e==="custom"?"＋":"<i></i><i></i><i></i><i></i><i></i>"}</span>
                <span><strong>${s.title}</strong><small>${s.question}</small></span>
              </button>`).join("")}
          </div>

          <div class="canvas-layout regression-layout">
            <aside class="tool-column" aria-label="Adatvezérlők">
              <button class="button button-ink" type="button" data-action="new-sample">Új zajminta</button>
              <button class="text-tool" type="button" data-action="undo">Visszavonás</button>
              <button class="text-tool" type="button" data-action="reset">Alaphelyzet</button>
              <div class="tool-divider"></div>
              <label class="switch-control">
                <input type="checkbox" data-show-test />
                <span aria-hidden="true"></span>
                <strong>Rejtett validációs pontok</strong>
              </label>
              <p class="tool-note">A modell ezeket a pontokat nem használja az illesztéshez. A modul validációra használja őket; külön teszthalmazt nem tartalmaz.</p>
            </aside>

            <div class="canvas-column">
              <div class="canvas-frame">
                <canvas class="data-canvas" aria-label="Polinomregresszió tanító- és validációs pontokkal" role="img"></canvas>
                <div class="canvas-corner" aria-hidden="true">y</div><div class="canvas-axis" aria-hidden="true">x</div>
              </div>
              <p class="canvas-summary" data-summary aria-live="polite"></p>
            </div>

            <aside class="parameter-column">
              <label class="range-control" for="reg-degree">
                <span><strong>Polinom fokszáma</strong><output for="reg-degree" data-degree-output>3</output></span>
                <input id="reg-degree" type="range" min="1" max="12" step="1" value="3" />
                <span class="range-ends"><small>1. fok</small><small>12. fok</small></span>
              </label>
              <label class="range-control" for="reg-ridge">
                <span><strong>L2-regularizáció (ridge), λ</strong><output for="reg-ridge" data-ridge-output>0</output></span>
                <input id="reg-ridge" type="range" min="0" max="60" step="1" value="0" />
                <span class="range-ends"><small>λ = 0</small><small>λ = 0,06</small></span>
              </label>
              <div class="observation" data-observation></div>
              <dl class="metric-list metric-errors">
                <div><dt>Tanító MSE</dt><dd data-train-error>—</dd></div>
                <div class="test-metric"><dt>Validációs MSE</dt><dd data-test-error>rejtve</dd></div>
              </dl>
            </aside>
          </div>

          <div class="error-profile" aria-label="Tanító- és validációs hiba a fokszám függvényében">
            <div><p class="control-label">Hibaprofil</p><strong>A félretett pontok segítenek modellt választani.</strong></div>
            <svg viewBox="0 0 520 120" role="img" aria-labelledby="error-chart-title error-chart-desc">
              <title id="error-chart-title">Tanító- és validációs hiba fokszámonként</title>
              <desc id="error-chart-desc">A tanítóhiba jellemzően csökken, a validációs hiba egy pont után növekedhet.</desc>
              <path class="chart-grid" d="M24 18H508M24 58H508M24 98H508" />
              <path class="chart-train" data-train-path d="" />
              <path class="chart-test" data-test-path d="" hidden />
              <line class="chart-marker" data-chart-marker x1="0" x2="0" y1="12" y2="102" />
            </svg>
            <div class="chart-legend"><span class="train-key">tanító</span><span class="test-key" data-test-key hidden>validációs</span></div>
          </div>

          <details class="keyboard-entry">
            <summary>Billentyűzetes pontbevitel</summary>
            <div class="keyboard-entry-fields">
              <label>x koordináta <input type="number" min="-1" max="1" step="0.05" value="0" data-entry-x /></label>
              <label>y érték <input type="number" min="-1" max="1" step="0.05" value="0" data-entry-y /></label>
              <button class="button button-ink" type="button" data-action="add-keyboard">Tanítópont hozzáadása</button>
            </div>
          </details>
        </section>

        <section class="experiments depth-shell" aria-labelledby="reg-try-title">
          <div class="depth-kicker">Kísérletek</div><h2 id="reg-try-title">A tanító- és validációs hiba összehasonlítása</h2>
          <ol class="experiment-list">
            <li><span>01</span><div><strong>Indulj 1. fokon.</strong><p>A tanító- és a validációs hiba is nagy: a modell túl egyszerű.</p></div></li>
            <li><span>02</span><div><strong>Fedd fel a validációs pontokat.</strong><p>Növeld a fokszámot. Hol válik ketté a két hibagörbe?</p></div></li>
            <li><span>03</span><div><strong>Adj L2-regularizációt.</strong><p>A ridge a konstans tag kivételével az együtthatók négyzetösszegét bünteti. A görbe stabilabb lehet, miközben az illesztési hiba nőhet.</p></div></li>
          </ol>
        </section>

        <section class="depth reading-layer" aria-labelledby="reg-depth-title">
          <p class="eyebrow">Magyarázat</p>
          <h2 id="reg-depth-title">A fokszámot a validációs hiba alapján választjuk.</h2>
          <p>A regresszió folytonos célváltozót becsül. A polinom együtthatóit itt úgy választjuk, hogy a tanítópontokon mért négyzetes hibák összege kicsi legyen. A validációs hiba azt becsüli, hogyan teljesít a modell az illesztéshez nem használt pontokon.</p>
          <div class="concept-grid">
            <div><p class="concept-label">Fogalom</p><h3>Átlagos négyzetes hiba</h3><p>A nagy eltéréseket négyzetesen bünteti. A függőleges szárak a vásznon az egyes reziduumok.</p></div>
            <div class="formula" aria-label="M S E egyenlő egy per n szor az y i mínusz y kalap i négyzetének összege">
              <math display="block"><mi>MSE</mi><mo>=</mo><mfrac><mn>1</mn><mi>n</mi></mfrac><munderover><mo>∑</mo><mrow><mi>i</mi><mo>=</mo><mn>1</mn></mrow><mi>n</mi></munderover><msup><mrow><mo>(</mo><msub><mi>y</mi><mi>i</mi></msub><mo>−</mo><msub><mover><mi>y</mi><mo>^</mo></mover><mi>i</mi></msub><mo>)</mo></mrow><mn>2</mn></msup></math>
            </div>
          </div>
          <aside class="edge-case"><strong>Torzítás és szórás.</strong> Az egyszerű modell stabil, de következetesen tévedhet. A túl rugalmas modell a minta zajával együtt változik.</aside>
          <div class="knowledge-check" data-quiz>
            <p class="concept-label">Ellenőrző kérdés</p>
            <h3>A fokszám növelésével a tanítóhiba csökken, a validációs hiba viszont emelkedik. Mit látsz?</h3>
            <div class="answer-grid">
              <button type="button" data-answer="wrong">Alultanulást</button>
              <button type="button" data-answer="right">Túltanulást</button>
              <button type="button" data-answer="wrong">Adatszivárgást biztosan</button>
            </div>
            <p class="quiz-feedback" data-quiz-feedback aria-live="polite"></p>
          </div>
        </section>
      </article>`,this.canvas=t.querySelector("canvas.data-canvas")??void 0,this.bindControls(),this.canvas&&(this.resizeObserver=new ResizeObserver(()=>this.draw()),this.resizeObserver.observe(this.canvas)),this.update()}destroy(){var t;(t=this.resizeObserver)==null||t.disconnect(),this.root=void 0,this.canvas=void 0}get trainingPoints(){return this.points.filter(t=>t.split!=="test")}get testPoints(){return this.points.filter(t=>t.split==="test")}coefficients(t=this.degree){return ct(this.trainingPoints,t,this.ridge/1e3)}bindControls(){var t,e,s,a,i,d,o;!this.root||!this.canvas||((t=this.root.querySelector("#reg-degree"))==null||t.addEventListener("input",n=>{this.degree=Number(n.target.value),this.update()}),(e=this.root.querySelector("#reg-ridge"))==null||e.addEventListener("input",n=>{this.ridge=Number(n.target.value),this.update()}),(s=this.root.querySelector("[data-show-test]"))==null||s.addEventListener("change",n=>{this.showTest=n.target.checked,this.update()}),this.root.querySelectorAll("[data-regression-preset]").forEach(n=>{n.addEventListener("click",()=>{this.activePreset=n.dataset.regressionPreset??"wave",this.loadPreset()})}),(a=this.root.querySelector("[data-action='new-sample']"))==null||a.addEventListener("click",()=>{const n=Math.floor(Math.random()*1e4);this.points=Z[this.activePreset].make(n),this.history=[],this.update()}),(i=this.root.querySelector("[data-action='reset']"))==null||i.addEventListener("click",()=>{var u,h,m;this.points=Z[this.activePreset].make(),this.history=[],this.degree=3,this.ridge=0,this.showTest=!1;const n=(u=this.root)==null?void 0:u.querySelector("#reg-degree"),r=(h=this.root)==null?void 0:h.querySelector("#reg-ridge"),c=(m=this.root)==null?void 0:m.querySelector("[data-show-test]");n&&(n.value="3"),r&&(r.value="0"),c&&(c.checked=!1),this.update()}),(d=this.root.querySelector("[data-action='undo']"))==null||d.addEventListener("click",()=>{const n=this.history.pop();n&&(this.points=n,this.update())}),(o=this.root.querySelector("[data-action='add-keyboard']"))==null||o.addEventListener("click",()=>{var c,u,h,m;const n=Number(((u=(c=this.root)==null?void 0:c.querySelector("[data-entry-x]"))==null?void 0:u.value)??0),r=Number(((m=(h=this.root)==null?void 0:h.querySelector("[data-entry-y]"))==null?void 0:m.value)??0);this.addPoint({x:Math.max(-1,Math.min(1,n)),y:Math.max(-1,Math.min(1,r)),split:"train"})}),this.canvas.addEventListener("click",n=>{var u;const r=(u=this.canvas)==null?void 0:u.getBoundingClientRect();if(!r)return;const c=24;this.addPoint({x:Math.max(-1,Math.min(1,(n.clientX-r.left-c)/Math.max(1,r.width-c*2)*2-1)),y:Math.max(-.9,Math.min(.9,.9-(n.clientY-r.top-c)/Math.max(1,r.height-c*2)*1.8)),split:"train"})}),this.root.querySelectorAll("[data-answer]").forEach(n=>{n.addEventListener("click",()=>{var u,h;const r=n.dataset.answer==="right";(u=this.root)==null||u.querySelectorAll("[data-answer]").forEach(m=>m.classList.remove("is-correct","is-wrong")),n.classList.add(r?"is-correct":"is-wrong");const c=(h=this.root)==null?void 0:h.querySelector("[data-quiz-feedback]");c&&(c.textContent=r?"Helyes. A csökkenő tanítóhiba és a növekvő validációs hiba túltanulásra utal. A modult teljesítetted.":"Hasonlítsd össze a két hibagörbe irányát."),r&&this.context.onComplete()})}))}loadPreset(){var e;this.points=Z[this.activePreset].make(),this.history=[],this.showTest=!1;const t=(e=this.root)==null?void 0:e.querySelector("[data-show-test]");t&&(t.checked=!1),this.update()}addPoint(t){this.points.length>=80||(this.history.push(this.points.map(e=>({...e}))),this.points.push(t),this.update())}update(){var n,r,c,u,h;const t=this.coefficients(),e=W(this.trainingPoints,t),s=W(this.testPoints,t),a=this.trainingPoints.length<2?{title:"Rajzolj legalább két tanítópontot.",body:"A polinom illesztéséhez több, eltérő x koordinátájú megfigyelés szükséges."}:this.showTest&&this.testPoints.length===0?{title:"Ehhez az adatsorhoz nincs félretett pont.",body:"A Saját rajz minden új pontját tanítópontként kezeli."}:this.showTest?ge(this.degree,e,s):{title:"A validációs pontok rejtve vannak.",body:"A tanítóhiba önmagában nem mutatja meg, hogyan viselkedik a modell a félretett pontokon."},i=(m,g)=>{var y;const v=(y=this.root)==null?void 0:y.querySelector(m);v&&(v.textContent=g)};i("[data-degree-output]",String(this.degree)),i("[data-ridge-output]",this.ridge===0?"0":(this.ridge/1e3).toFixed(3)),i("[data-train-error]",this.trainingPoints.length>0?e.toFixed(3):"—"),i("[data-test-error]",this.showTest?this.testPoints.length>0?s.toFixed(3):"—":"rejtve"),i("[data-summary]",`${this.trainingPoints.length} tanítópont${this.showTest?` · ${this.testPoints.length} validációs pont`:" · a validációs pontok rejtve"}. A függőleges szárak a reziduumokat mutatják.`);const d=(n=this.root)==null?void 0:n.querySelector("[data-observation]");d&&(d.innerHTML=`<p class="control-label">Aktuális eredmény</p><strong>${a.title}</strong><p>${a.body}</p>`),(c=(r=this.root)==null?void 0:r.querySelector(".test-metric"))==null||c.classList.toggle("is-revealed",this.showTest),(u=this.root)==null||u.querySelectorAll("[data-regression-preset]").forEach(m=>{const g=m.dataset.regressionPreset===this.activePreset;m.classList.toggle("is-active",g),m.setAttribute("aria-pressed",String(g))});const o=(h=this.root)==null?void 0:h.querySelector("[data-action='new-sample']");o&&(o.disabled=this.activePreset==="custom"),this.updateChart(),this.draw()}updateChart(){var o,n;if(!this.root)return;const t=Array.from({length:12},(r,c)=>{const u=ct(this.trainingPoints,c+1,this.ridge/1e3);return{train:W(this.trainingPoints,u),test:W(this.testPoints,u)}}),e=this.showTest?t.flatMap(r=>[r.train,r.test]):t.map(r=>r.train),s=Math.max(.03,...e.filter(Number.isFinite)),a=r=>t.map((c,u)=>{const h=24+u/11*484,g=98-Math.min(1,c[r]/s)*78;return`${u===0?"M":"L"}${h.toFixed(1)} ${g.toFixed(1)}`}).join(" ");(o=this.root.querySelector("[data-train-path]"))==null||o.setAttribute("d",a("train"));const i=this.root.querySelector("[data-test-path]");i==null||i.setAttribute("d",a("test")),i==null||i.toggleAttribute("hidden",!this.showTest),(n=this.root.querySelector("[data-test-key]"))==null||n.toggleAttribute("hidden",!this.showTest);const d=this.root.querySelector("[data-chart-marker]");if(d){const r=24+(this.degree-1)/11*484;d.setAttribute("x1",String(r)),d.setAttribute("x2",String(r))}}draw(){if(!this.canvas)return;const t=this.canvas.getContext("2d");if(!t)return;const{width:e,height:s}=B(this.canvas);t.clearRect(0,0,e,s),t.fillStyle="#f4f1e8",t.fillRect(0,0,e,s),G(t,e,s,24);const a=o=>24+(o+1)/2*(e-48),i=o=>24+(.9-o)/1.8*(s-48),d=this.coefficients();t.save(),t.strokeStyle="rgba(224, 69, 42, .34)",t.lineWidth=1,this.trainingPoints.forEach(o=>{const n=nt(d,o.x);t.beginPath(),t.moveTo(a(o.x),i(o.y)),t.lineTo(a(o.x),i(n)),t.stroke()}),t.restore(),t.save(),t.beginPath();for(let o=0;o<=260;o+=1){const n=-1+o/260*2,r=nt(d,n);!Number.isFinite(r)||Math.abs(r)>3||(o===0?t.moveTo(a(n),i(r)):t.lineTo(a(n),i(r)))}t.strokeStyle="#1e4fb5",t.lineWidth=3,t.stroke(),t.restore(),this.trainingPoints.forEach(o=>{t.beginPath(),t.arc(a(o.x),i(o.y),4.6,0,Math.PI*2),t.fillStyle="#d84429",t.fill(),t.strokeStyle="#f4f1e8",t.lineWidth=1.5,t.stroke()}),this.showTest&&this.testPoints.forEach(o=>{const n=a(o.x),r=i(o.y);t.save(),t.translate(n,r),t.rotate(Math.PI/4),t.fillStyle="#f4f1e8",t.strokeStyle="#1e4fb5",t.lineWidth=2,t.fillRect(-4.5,-4.5,9,9),t.strokeRect(-4.5,-4.5,9,9),t.restore()})}}const xt="adatspiral-progress-v1";function be(){try{const l=JSON.parse(localStorage.getItem(xt)??"[]");return new Set(Array.isArray(l)?l.filter(t=>typeof t=="string"):[])}catch{return new Set}}class ke{constructor(t){p(this,"host");p(this,"completed",be());p(this,"home");p(this,"playground");p(this,"route","");p(this,"activeStationIndex",0);p(this,"lastModuleTrigger");p(this,"closeQuickMenu");p(this,"onHashChange",()=>{if(this.isPresentMode()){this.renderPresent();return}this.handleRoute()});this.host=t}mount(){var t;window.addEventListener("hashchange",this.onHashChange),(t=document.querySelector(".skip-link"))==null||t.addEventListener("click",e=>{const s=this.host.querySelector("[data-module-dialog]");if(s!=null&&s.open)return;e.preventDefault();const a=this.host.querySelector("#main-content");a&&(a.tabIndex=-1,a.focus())}),this.isPresentMode()?this.renderPresent():this.renderShell()}renderShell(){this.destroyViews(),document.body.classList.remove("present-mode","module-overlay-open","menu-open"),document.body.dataset.route="home",this.route=this.readRoute();const t=K(this.route),e=t&&t.index>0?t.index-1:0;this.activeStationIndex=e,this.host.innerHTML=`${this.header()}<div id="page-root"></div>${this.quickStart()}${this.moduleDialog()}${this.toast()}`,this.bindShell();const s=this.host.querySelector("#page-root");s&&(this.home=new Et,this.home.mount(s,this.completed,{initialIndex:e,onActiveChange:a=>{this.activeStationIndex=a,this.updateHeaderStation(a)}}),this.updateHeaderStation(e),this.syncProgress(),window.requestAnimationFrame(()=>this.handleRoute(!0)))}renderPresent(){this.destroyViews(),document.body.classList.remove("module-overlay-open","menu-open"),document.body.classList.add("present-mode"),this.route=this.readRoute();const t=K(this.route);document.body.dataset.route=this.route||"home",document.title=t?`${t.shortTitle} · Adatspirál`:"Adatspirál · Vetítés",this.host.innerHTML=`${this.presentHeader()}<div id="page-root"></div>${this.toast()}`;const e=this.host.querySelector("#page-root");if(!e)return;const s=this.createPlayground(this.route,!0);s?(e.innerHTML='<main id="main-content"></main>',s.mount(e.querySelector("main")),this.playground=s):this.renderUnavailable(e),this.syncProgress(),window.scrollTo({top:0,left:0,behavior:"auto"})}handleRoute(t=!1){var a;const e=this.readRoute();this.route=e;const s=K(e);if(!e){this.closeModule(),document.title="Adatspirál · Bevezetés az adattudományba 1.",document.body.dataset.route="home";return}if(!s){this.closeModule(),this.replaceWithHomeRoute(),this.route="",document.title="Adatspirál · Bevezetés az adattudományba 1.";return}if(s.index>0&&(this.activeStationIndex=s.index-1,(a=this.home)==null||a.scrollToStation(this.activeStationIndex,"auto")),s.status!=="live"){this.closeModule(),this.replaceWithHomeRoute(),this.route="",document.title="Adatspirál · Bevezetés az adattudományba 1.";return}this.openModule(e)}openModule(t){var r,c,u;const e=this.host.querySelector("[data-module-dialog]"),s=this.host.querySelector("[data-module-host]"),a=K(t);if(!e||!s||!a||e.open&&e.dataset.openSlug===t)return;if(!((r=this.lastModuleTrigger)!=null&&r.isConnected)){const h=document.activeElement instanceof HTMLElement?document.activeElement:void 0;this.lastModuleTrigger=h!=null&&h.matches("[data-open-station], [data-quick-open], .quick-prologue")?h:void 0}(c=this.closeQuickMenu)==null||c.call(this,!1),(u=this.playground)==null||u.destroy(),this.playground=void 0,s.innerHTML="";const i=this.createPlayground(t,!1);if(!i)return;const d=this.host.querySelector("[data-dialog-number]"),o=this.host.querySelector("[data-dialog-title]"),n=this.host.querySelector("[data-dialog-present]");d&&(d.textContent=a.index===0?"Bevezető modul":`${String(a.index).padStart(2,"0")} / 12`),o&&(o.textContent=a.shortTitle),n&&(n.href=`?mode=present#/${t}`,n.setAttribute("aria-label",`${a.shortTitle} megnyitása vetítési módban`)),i.mount(s),this.playground=i,e.dataset.openSlug=t,document.body.classList.add("module-overlay-open"),document.body.dataset.route=t,document.title=`${a.shortTitle} · Adatspirál`,e.open||e.showModal(),s.scrollTop=0,window.requestAnimationFrame(()=>o==null?void 0:o.focus({preventScroll:!0})),this.syncProgress()}closeModule(){var a,i;const t=this.host.querySelector("[data-module-dialog]"),e=this.host.querySelector("[data-module-host]"),s=!!(t!=null&&t.open);if(t!=null&&t.open&&t.close(),t&&delete t.dataset.openSlug,(a=this.playground)==null||a.destroy(),this.playground=void 0,e&&(e.innerHTML=""),document.body.classList.remove("module-overlay-open"),document.body.dataset.route="home",s){const d=this.host.querySelector(`[data-helix-preview="${this.activeStationIndex}"]:not([inert]), [data-helix-card="${this.activeStationIndex}"] [data-open-station]`),n=((i=this.lastModuleTrigger)==null?void 0:i.isConnected)&&!this.lastModuleTrigger.closest("[inert]")?this.lastModuleTrigger:d;window.requestAnimationFrame(()=>n==null?void 0:n.focus({preventScroll:!0}))}this.lastModuleTrigger=void 0}requestModuleClose(){this.replaceWithHomeRoute(),this.route="",this.closeModule(),document.title="Adatspirál · Bevezetés az adattudományba 1."}header(){const t=M[this.activeStationIndex];return`<header class="site-header">
      <a class="wordmark" href="#/" aria-label="Adatspirál kezdőlap">${this.logo()}<span>Adatspirál</span></a>
      <div class="header-station" aria-live="polite"><span data-header-index>${String(t.index).padStart(2,"0")} / 12</span><strong data-header-title>${t.shortTitle}</strong></div>
      <button class="station-menu-button" type="button" aria-expanded="false" aria-controls="station-menu"><span>Gyorsindítás</span><i aria-hidden="true"></i></button>
    </header>`}presentHeader(){const t=K(this.route);return`<header class="present-header"><a class="wordmark" href="${window.location.pathname}#/${this.route}" aria-label="Kilépés a vetítési módból">${this.logo()}<span>Adatspirál</span></a><div><span>VETÍTÉS</span><strong>${(t==null?void 0:t.title)??"Modul"}</strong></div><a class="exit-present" href="${window.location.pathname}#/${this.route}">Kilépés</a></header>`}quickStart(){return`<div class="station-menu-backdrop" data-menu-backdrop hidden></div><aside class="station-menu quick-start" id="station-menu" role="dialog" aria-modal="true" aria-label="Gyorsindítás" aria-hidden="true" inert>
      <div class="station-menu-head"><div><small>12 téma · ${Tt.length} modul</small><strong>Gyorsindítás</strong></div><button type="button" data-close-menu aria-label="Gyorsindítás bezárása">×</button></div>
      <a class="quick-prologue" href="#/${L.slug}"><span>00</span><span><small>Bevezető modul</small><strong>${L.shortTitle}</strong></span><em>Megnyitás</em></a>
      <ol>${M.map((t,e)=>`<li class="quick-row ${t.status==="live"?"is-live":""}">
        <button type="button" data-jump-station="${e}" aria-label="Ugrás ide: ${t.index}. ${t.title}">
          <span>${String(t.index).padStart(2,"0")}</span><span><strong>${t.shortTitle}</strong>${t.title!==t.shortTitle?`<small>${t.title}</small>`:""}</span>
        </button>
        ${t.status==="live"?`<a href="#/${t.slug}" data-quick-open="${t.slug}" aria-label="${t.shortTitle} modul megnyitása"><span data-progress-slug="${t.slug}">${this.completed.has(t.slug)?"Kész":"Megnyitás"}</span><b aria-hidden="true">↗</b></a>`:'<span class="quick-coming">Ugrás</span>'}
      </li>`).join("")}</ol>
    </aside>`}moduleDialog(){return`<dialog class="module-dialog" data-module-dialog aria-labelledby="module-dialog-title">
      <div class="module-dialog-frame">
        <header class="module-dialog-bar">
          <div><span data-dialog-number>Modul</span><h2 id="module-dialog-title" data-dialog-title tabindex="-1">Interaktív modul</h2></div>
          <div><a href="?mode=present#/" data-dialog-present>Vetítés <span aria-hidden="true">↗</span></a><button type="button" data-close-module aria-label="Modul bezárása">×</button></div>
        </header>
        <div class="module-dialog-body" data-module-host></div>
      </div>
    </dialog>`}toast(){return'<div class="completion-toast" role="status" aria-live="polite" aria-hidden="true" data-completion-toast><span aria-hidden="true">✓</span><div><strong>Modul teljesítve</strong><small>A böngésző elmentette a haladást.</small></div></div>'}bindShell(){var r,c;const t=this.host.querySelector(".station-menu-button"),e=this.host.querySelector(".station-menu"),s=this.host.querySelector("[data-menu-backdrop]"),a=this.host.querySelector("#page-root"),i=this.host.querySelector(".site-header .wordmark"),d=this.host.querySelector(".header-station");this.host.addEventListener("click",u=>{const h=u.target instanceof Element?u.target.closest("[data-open-station], [data-quick-open], .quick-prologue"):null;h&&(this.lastModuleTrigger=h.closest(".station-menu")?t??void 0:h)});const o=(u,h=!0)=>{var m;t==null||t.setAttribute("aria-expanded",String(u)),e==null||e.setAttribute("aria-hidden",String(!u)),e==null||e.toggleAttribute("inert",!u),e==null||e.classList.toggle("is-open",u),s&&(s.hidden=!u),document.body.classList.toggle("menu-open",u),a==null||a.toggleAttribute("inert",u),i==null||i.toggleAttribute("inert",u),d==null||d.toggleAttribute("inert",u),u?(m=e==null?void 0:e.querySelector("[data-close-menu]"))==null||m.focus():h&&(t==null||t.focus())};this.closeQuickMenu=(u=!0)=>o(!1,u),t==null||t.addEventListener("click",()=>o(t.getAttribute("aria-expanded")!=="true")),(r=this.host.querySelector("[data-close-menu]"))==null||r.addEventListener("click",()=>o(!1)),s==null||s.addEventListener("click",()=>o(!1)),e==null||e.querySelectorAll("[data-jump-station]").forEach(u=>{u.addEventListener("click",()=>{var m;const h=Number(u.dataset.jumpStation??0);o(!1,!1),(m=this.home)==null||m.scrollToStation(h),window.setTimeout(()=>{var g;return(g=this.host.querySelector(`[data-helix-card="${h}"]`))==null?void 0:g.focus({preventScroll:!0})},520)})}),e==null||e.querySelectorAll("a[href]").forEach(u=>{u.addEventListener("click",()=>o(!1,!1))}),e==null||e.addEventListener("keydown",u=>this.trapFocus(u,e,()=>o(!1)));const n=this.host.querySelector("[data-module-dialog]");(c=this.host.querySelector("[data-close-module]"))==null||c.addEventListener("click",()=>this.requestModuleClose()),n==null||n.addEventListener("cancel",u=>{u.preventDefault(),this.requestModuleClose()}),n==null||n.addEventListener("click",u=>{u.target===n&&this.requestModuleClose()})}trapFocus(t,e,s){if(t.key==="Escape"){t.preventDefault(),s();return}if(t.key!=="Tab")return;const a=[...e.querySelectorAll("a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex='-1'])")].filter(o=>!o.hasAttribute("hidden")),i=a[0],d=a.at(-1);!i||!d||(t.shiftKey&&document.activeElement===i?(t.preventDefault(),d.focus()):!t.shiftKey&&document.activeElement===d&&(t.preventDefault(),i.focus()))}updateHeaderStation(t){const e=M[t];if(!e)return;const s=this.host.querySelector("[data-header-index]"),a=this.host.querySelector("[data-header-title]");s&&(s.textContent=`${String(e.index).padStart(2,"0")} / 12`),a&&(a.textContent=e.shortTitle)}createPlayground(t,e){const s={presentMode:e,onComplete:()=>this.complete(t)};if(t===L.slug)return new me(s);if(t==="adat")return new Jt(s);if(t==="knn")return new pe(s);if(t==="dontesi-fa")return new ee(s);if(t==="regresszio")return new ve(s);if(t==="kiertekeles")return new ue(s);if(t==="klaszterezes")return new Ot(s)}complete(t){if(this.completed.has(t))return;this.completed.add(t);try{localStorage.setItem(xt,JSON.stringify([...this.completed]))}catch{}this.syncProgress();const e=this.host.querySelector("[data-completion-toast]");e&&(e.setAttribute("aria-hidden","false"),e.classList.add("is-visible"),window.setTimeout(()=>{e.classList.remove("is-visible"),e.setAttribute("aria-hidden","true")},3600))}syncProgress(){this.completed.forEach(t=>{this.host.querySelectorAll(`[data-progress-slug="${t}"]`).forEach(e=>{e.textContent=e.classList.contains("helix-complete")?"Teljesítve":"Kész",e.classList.add("is-complete")})})}renderUnavailable(t){t.innerHTML=`<main id="main-content" class="unavailable-page"><p class="eyebrow">Ismeretlen modul</p><h1>Ez a modul nem érhető el.</h1><a class="button button-hand" href="${window.location.pathname}#/">Vissza a spirálhoz</a></main>`}destroyViews(){var t,e;(t=this.home)==null||t.destroy(),this.home=void 0,(e=this.playground)==null||e.destroy(),this.playground=void 0,this.closeQuickMenu=void 0}readRoute(){return window.location.hash.replace(/^#\/?/,"").split("?")[0]}isPresentMode(){return new URLSearchParams(window.location.search).get("mode")==="present"}replaceWithHomeRoute(){window.history.replaceState(null,"",`${window.location.pathname}${window.location.search}#/`)}logo(){return'<svg viewBox="0 0 32 32" aria-hidden="true"><path d="M7 8c5-5 15-4 18 1 4 7-4 15-12 14-6-1-8-7-4-10 4-4 11-1 10 4-1 3-6 4-9 1"/><circle cx="7" cy="8" r="2.2"/><circle cx="19" cy="17" r="2.2"/></svg>'}}const Mt=document.querySelector("#app");if(!Mt)throw new Error("Az alkalmazás gyökéreleme hiányzik.");new ke(Mt).mount();
