var qe=Object.defineProperty;var Le=(l,t,e)=>t in l?qe(l,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):l[t]=e;var m=(l,t,e)=>Le(l,typeof t!="symbol"?t+"":t,e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))s(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function e(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerPolicy&&(i.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?i.credentials="include":a.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(a){if(a.ep)return;a.ep=!0;const i=e(a);fetch(a.href,i)}})();const W={index:0,slug:"nyitany",title:"Rekordok és attribútumok",shortTitle:"Rekordok és attribútumok",gesture:"Ábrázold a válaszaidat",description:"Egy rekord egy megfigyelési egységhez tartozó attribútumértékeket fog össze.",status:"live",accent:"saffron"},P=[{index:1,slug:"adat",title:"Adat és előkészítés",shortTitle:"Adattisztítás",gesture:"Kezeld a hibás értéket",description:"A hiányzó, hibás vagy eltérő skálájú értékeket a modellezés előtt kezelni kell.",status:"live",accent:"vermilion"},{index:2,slug:"knn",title:"Osztályozás: kNN",shortTitle:"k legközelebbi szomszéd",gesture:"Állítsd a k értékét",description:"Egy új pont címkéjét a hozzá legközelebbi k tanítópont többségi címkéje adja.",status:"live",accent:"azure"},{index:3,slug:"dontesi-fa",title:"Döntési fa és együttesek",shortTitle:"Döntési fák",gesture:"Módosítsd a felosztást",description:"A fa egymás utáni feltételekkel osztja fel a változóteret; az együttes módszerek több fa eredményét kombinálják.",status:"live",accent:"teal"},{index:4,slug:"svm",title:"Kernelmódszerek és SVM",shortTitle:"Kernel és SVM",gesture:"Emeld fel a pontokat",description:"Egy jellemzőleképezés a síkbeli nemlineáris határt lineáris határrá alakíthatja egy magasabb dimenziós térben.",status:"live",accent:"azure"},{index:5,slug:"neuralis-halok",title:"Neurális hálók",shortTitle:"Neurális hálók",gesture:"Módosítsd a rétegeket",description:"A rétegek egymásra épített nemlineáris transzformációi görbült döntési határt is leírhatnak.",status:"live",accent:"vermilion"},{index:6,slug:"regresszio",title:"Regresszió",shortTitle:"Polinomregresszió",gesture:"Állítsd a polinom fokszámát",description:"A tanító- és validációs hiba együtt jelzi, ha a modell túl egyszerű vagy túl rugalmas.",status:"live",accent:"vermilion"},{index:7,slug:"kiertekeles",title:"Kiértékelés",shortTitle:"Modellértékelés",gesture:"Módosítsd a küszöböt",description:"A döntési küszöb megváltoztatja a téves pozitív és téves negatív esetek számát.",status:"live",accent:"saffron"},{index:8,slug:"klaszterezes",title:"Klaszterezés",shortTitle:"k-közép és DBSCAN",gesture:"Hasonlítsd össze a módszereket",description:"A k-közép centroidokhoz rendeli a pontokat, a DBSCAN pedig sűrűség alapján alakít klasztereket.",status:"live",accent:"teal"},{index:9,slug:"ajanlorendszerek",title:"Ajánlórendszerek",shortTitle:"Ajánlórendszerek",gesture:"Becsülj hiányzó értékelést",description:"A felhasználók és termékek értékelési mintái alapján hiányzó értékelések becsülhetők.",status:"live",accent:"saffron"},{index:10,slug:"dimenzio",title:"Dimenziócsökkentés",shortTitle:"Dimenziócsökkentés",gesture:"Válassz kétdimenziós vetületet",description:"A nagy dimenziós adatot kevesebb koordinátára vetítjük, miközben igyekszünk megőrizni a pontok szerkezetét.",status:"live",accent:"azure"},{index:11,slug:"mintazatok",title:"Mintázatok és anomáliák",shortTitle:"Anomáliák és együttjárások",gesture:"Jelöld az eltérést",description:"Az anomáliakeresés ritka megfigyeléseket, a mintázatbányászat gyakori együttjárásokat azonosít.",status:"live",accent:"saffron"},{index:12,slug:"vizualizacio",title:"Vizualizáció és lezárás",shortTitle:"Adatvizualizáció",gesture:"Válts ábrázolást",description:"Az összegző statisztikák mellett az eloszlás alakját is meg kell vizsgálni.",status:"live",accent:"vermilion"}],Ie=[W,...P.filter(l=>l.status==="live")];function tt(l){return[W,...P].find(t=>t.slug===l)}function A(l){return()=>{let t=l+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}}function x(l){const t=Math.max(l(),Number.EPSILON),e=Math.max(l(),Number.EPSILON);return Math.sqrt(-2*Math.log(t))*Math.cos(2*Math.PI*e)}const E=(l,t,e)=>Math.max(t,Math.min(e,l)),Re=.44;function He(l,t,e,s,a=0,i=0){const o=(l-t)*Math.PI/2+a;return{x:e*Math.sin(o),y:s*(t-l)+i,z:e*Math.cos(o)}}class Be{constructor(t,e){m(this,"canvas");m(this,"stops");m(this,"cards");m(this,"previews");m(this,"previewIndexes");m(this,"particles");m(this,"reduceMotion");m(this,"onActiveChange");m(this,"stopPositions",[]);m(this,"resizeObserver");m(this,"animationFrame");m(this,"lastFrame",0);m(this,"targetT");m(this,"visualT");m(this,"activeIndex",-1);m(this,"onScroll",()=>{this.targetT=this.readScrollPosition(),this.startAnimation()});m(this,"onResize",()=>{this.measureStops(),this.targetT=this.readScrollPosition(),this.draw()});m(this,"onMotionChange",()=>{this.targetT=this.readScrollPosition(),this.visualT=this.reduceMotion.matches?Math.round(this.targetT):this.targetT,this.syncCards(),this.draw()});m(this,"animate",t=>{const e=Math.min(.05,Math.max(.001,(t-this.lastFrame)/1e3));if(this.lastFrame=t,this.reduceMotion.matches)this.visualT=Math.round(this.targetT);else{const s=1-Math.exp(-e/.085);this.visualT+=(this.targetT-this.visualT)*s}this.syncCards(),this.draw(),Math.abs(this.targetT-this.visualT)>5e-4&&!this.reduceMotion.matches?this.animationFrame=requestAnimationFrame(this.animate):(this.visualT=this.reduceMotion.matches?Math.round(this.targetT):this.targetT,this.syncCards(),this.draw(),this.animationFrame=void 0)});this.canvas=t,this.stops=e.stops,this.cards=e.cards,this.previews=e.previews??[],this.previewIndexes=new Set(this.previews.map(a=>Number(a.dataset.helixPreview))),this.onActiveChange=e.onActiveChange,this.targetT=E(e.initialIndex??0,0,this.stops.length-1),this.visualT=this.targetT,this.reduceMotion=window.matchMedia("(prefers-reduced-motion: reduce)");const s=A(1709);this.particles=Array.from({length:560},()=>({u:-.9+s()*12.8,radiusOffset:(s()-.5)*.58,angleOffset:(s()-.5)*.19,verticalOffset:(s()-.5)*.36,size:.55+s()*1.45,tone:s()}))}mount(){this.resizeObserver=new ResizeObserver(()=>{this.measureStops(),this.draw()}),this.resizeObserver.observe(document.documentElement),window.addEventListener("scroll",this.onScroll,{passive:!0}),window.addEventListener("resize",this.onResize,{passive:!0}),this.reduceMotion.addEventListener("change",this.onMotionChange),this.measureStops(),this.setScrollPosition(this.visualT,"auto"),this.syncCards(),this.draw()}destroy(){var t;(t=this.resizeObserver)==null||t.disconnect(),window.removeEventListener("scroll",this.onScroll),window.removeEventListener("resize",this.onResize),this.reduceMotion.removeEventListener("change",this.onMotionChange),this.animationFrame!==void 0&&cancelAnimationFrame(this.animationFrame)}scrollTo(t,e="smooth"){const s=E(t,0,this.stops.length-1);this.measureStops(),this.setScrollPosition(s,this.reduceMotion.matches?"auto":e)}getActiveIndex(){return E(Math.round(this.visualT),0,this.stops.length-1)}measureStops(){this.stopPositions=this.stops.map(t=>{const e=t.getBoundingClientRect();return e.top+window.scrollY+e.height/2-window.innerHeight/2})}readScrollPosition(){if(this.stopPositions.length<2)return 0;const t=window.scrollY;if(t<=this.stopPositions[0])return 0;const e=this.stopPositions.length-1;if(t>=this.stopPositions[e])return e;for(let s=0;s<e;s+=1){const a=this.stopPositions[s],i=this.stopPositions[s+1];if(t<=i)return s+(t-a)/Math.max(1,i-a)}return e}setScrollPosition(t,e){const s=Math.floor(t),a=Math.min(this.stopPositions.length-1,Math.ceil(t)),i=t-s,o=(this.stopPositions[s]??0)*(1-i)+(this.stopPositions[a]??0)*i;if(e==="auto"){const n=document.documentElement.style.scrollBehavior;document.documentElement.style.scrollBehavior="auto",window.scrollTo({top:o,left:0,behavior:"auto"}),document.documentElement.style.scrollBehavior=n}else window.scrollTo({top:o,left:0,behavior:e});this.targetT=t,e==="auto"?(this.visualT=t,this.syncCards(),this.draw()):this.startAnimation()}startAnimation(){this.animationFrame===void 0&&(this.lastFrame=performance.now(),this.animationFrame=requestAnimationFrame(this.animate))}syncCards(){var s;const t=E(Math.round(this.visualT),0,this.cards.length-1),e=Math.abs(this.visualT-t);this.cards.forEach((a,i)=>{const o=this.visualT-i,n=E(1-Math.abs(o)*2.05,0,1);a.style.setProperty("--station-distance",o.toFixed(4)),a.style.opacity=n.toFixed(3);const r=i===t;a.classList.toggle("is-active",r),a.classList.toggle("is-docked",r&&e<.15),a.setAttribute("aria-hidden",String(!r)),a.inert=!r}),t!==this.activeIndex&&(this.activeIndex=t,(s=this.onActiveChange)==null||s.call(this,t))}project(t,e,s,a=0,i=0,o=0){const n=e<861,r=n?2.55:3.55,d=n?2.2:2.35,c=n?8.9:9.5,h=n?e*1.24:Math.min(e,s)*1.06,p=n?e*.5:e*.68,u=n?s*.34:s*.52,g=r+a,v=He(t,this.visualT,g,d,i,o),b=h/(c-v.z);return{x:p+v.x*b,y:u-v.y*b,z:v.z,scale:b}}syncPreviews(t,e,s,a){const i=a?8.9:9.5,n=(a?t*1.24:Math.min(t,e)*1.06)/(i-s);this.previews.forEach(r=>{const d=Number(r.dataset.helixPreview),c=this.project(d,t,e),h=Math.abs(d-this.visualT),p=E((c.z+s)/(s*2),0,1),u=E(c.scale/n,.46,1),g=h<2.4&&c.x>-180&&c.x<t+180&&c.y>-180&&c.y<e+180,v=g?E(1-h/2.4,0,1)*(.35+p*.65):0,b=d===Math.round(this.visualT),k=b&&h<=Re;r.style.transform=`translate3d(${c.x.toFixed(2)}px, ${c.y.toFixed(2)}px, 0) translate(-50%, -50%) scale(${u.toFixed(4)})`,r.style.opacity=v.toFixed(3),r.style.visibility=g?"visible":"hidden",r.style.zIndex=String(20+Math.round(p*70)),r.classList.toggle("is-active",b),r.classList.toggle("is-clickable",k),r.inert=!k,r.tabIndex=k?0:-1,r.setAttribute("aria-hidden",String(!k))})}draw(){const t=this.canvas.getContext("2d");if(!t)return;const e=this.canvas.getBoundingClientRect(),s=Math.max(1,Math.round(e.width)),a=Math.max(1,Math.round(e.height)),i=s<720?1.5:2,o=Math.min(window.devicePixelRatio||1,i),n=Math.round(s*o),r=Math.round(a*o);(this.canvas.width!==n||this.canvas.height!==r)&&(this.canvas.width=n,this.canvas.height=r),t.setTransform(o,0,0,o,0,0),t.clearRect(0,0,s,a);const d=s<861,c=d?2.55:3.55,h=d?s*.5:s*.68;this.syncPreviews(s,a,c,d);const p=t.createLinearGradient(0,0,0,a);p.addColorStop(0,"rgba(111,180,255,0)"),p.addColorStop(.22,"rgba(111,180,255,0.09)"),p.addColorStop(.78,"rgba(111,180,255,0.09)"),p.addColorStop(1,"rgba(111,180,255,0)"),t.beginPath(),t.moveTo(h,0),t.lineTo(h,a),t.strokeStyle=p,t.lineWidth=1,t.stroke();const u=[],g=Math.max(-.85,this.visualT-4.2),v=Math.min(11.85,this.visualT+4.2),b=520;let k=this.project(g,s,a);for(let f=1;f<=b;f+=1){const z=g+(v-g)*f/b,S=this.project(z,s,a);u.push({from:k,to:S,depth:(k.z+S.z)/2}),k=S}if(u.sort((f,z)=>f.depth-z.depth).forEach(f=>{if(f.from.y<-80&&f.to.y<-80||f.from.y>a+80&&f.to.y>a+80)return;const z=E((f.depth+c)/(c*2),0,1);t.beginPath(),t.moveTo(f.from.x,f.from.y),t.lineTo(f.to.x,f.to.y),t.strokeStyle=`rgba(${Math.round(84+z*52)}, ${Math.round(142+z*62)}, 255, ${.12+z*.62})`,t.lineWidth=.65+z*2.35,t.stroke()}),this.particles.map(f=>({particle:f,projected:this.project(f.u,s,a,f.radiusOffset,f.angleOffset,f.verticalOffset)})).sort((f,z)=>f.projected.z-z.projected.z).forEach(({particle:f,projected:z})=>{if(z.x<-24||z.x>s+24||z.y<-24||z.y>a+24)return;const S=E((z.z+c)/(c*2),0,1),w=.1+S*.56;t.beginPath(),t.arc(z.x,z.y,f.size*(.68+S*.72),0,Math.PI*2),f.tone>.965?t.fillStyle=`rgba(242,193,78,${w})`:f.tone>.91?t.fillStyle=`rgba(224,69,42,${w})`:t.fillStyle=`rgba(111,180,255,${w})`,t.fill()}),this.stops.map((f,z)=>({index:z,projected:this.project(z,s,a)})).sort((f,z)=>f.projected.z-z.projected.z).forEach(({index:f,projected:z})=>{if(this.previewIndexes.has(f)||z.x<-70||z.x>s+70||z.y<-70||z.y>a+70)return;const S=f===Math.round(this.visualT),w=E((z.z+c)/(c*2),0,1),$=S?13:5+w*3;t.beginPath(),t.arc(z.x,z.y,$,0,Math.PI*2),t.fillStyle=S?"#f4f1e8":`rgba(111,180,255,${.22+w*.62})`,t.fill(),S&&(t.beginPath(),t.arc(z.x,z.y,21,0,Math.PI*2),t.strokeStyle="rgba(242,193,78,0.72)",t.lineWidth=1.5,t.stroke(),t.fillStyle="#12203f",t.font="650 10px 'IBM Plex Mono', monospace",t.textAlign="center",t.textBaseline="middle",t.fillText(String(f+1).padStart(2,"0"),z.x,z.y+.5))}),!d){const f=this.project(Math.round(this.visualT),s,a),z=this.previewIndexes.has(Math.round(this.visualT)),S=E(1-Math.abs(this.visualT-Math.round(this.visualT))/.18,0,1),w=Math.max(s*.42,f.x-s*.22),$=t.createLinearGradient(w,0,f.x,0);$.addColorStop(0,"rgba(244,241,232,0)"),$.addColorStop(1,`rgba(244,241,232,${.28*S})`),t.beginPath(),t.moveTo(w,f.y),t.lineTo(f.x-(z?104:23),f.y),t.strokeStyle=$,t.lineWidth=1,t.stroke()}}}const Ne={adat:{label:"Adattisztítás",source:"./previews/data-cleaning.png"},knn:{label:"kNN",source:"./previews/knn.png"},"dontesi-fa":{label:"Döntési fa",source:"./previews/decision-tree.png"},svm:{label:"Kernel és SVM",source:"./previews/kernel-svm.png"},"neuralis-halok":{label:"Neurális háló",source:"./previews/neural-network.png"},regresszio:{label:"Regresszió",source:"./previews/regression.png"},kiertekeles:{label:"Kiértékelés",source:"./previews/evaluation.png"},klaszterezes:{label:"Klaszterezés",source:"./previews/clustering.png"},ajanlorendszerek:{label:"Ajánlórendszer",source:"./previews/recommender.png"},dimenzio:{label:"PCA",source:"./previews/dimension-reduction.png"},mintazatok:{label:"Anomáliák",source:"./previews/patterns-anomalies.png"},vizualizacio:{label:"Vizualizáció",source:"./previews/visualization.png"}};class De{constructor(){m(this,"spiral");m(this,"root");m(this,"currentIndex",0)}mount(t,e,s={}){var d;this.root=t;const a=Math.max(0,Math.min(P.length-1,s.initialIndex??0));this.currentIndex=a,t.innerHTML=`
      <main id="main-content" class="helix-page">
        <div class="helix-stage" aria-hidden="true">
          <canvas class="helix-canvas"></canvas>
          <div class="helix-vignette"></div>
        </div>

        <div class="helix-preview-layer">
          ${P.map((c,h)=>{const p=Ne[c.slug];if(!p||c.status!=="live")return"";const u=String(c.index).padStart(2,"0");return`<a class="helix-preview accent-${c.accent}" href="#/${c.slug}"
              data-open-station="${c.slug}" data-helix-preview="${h}"
              aria-label="${p.label} interaktív modul megnyitása" aria-hidden="true" tabindex="-1" inert>
              <span class="helix-preview-frame"><img src="${p.source}" alt="" width="598" height="433" draggable="false" /></span>
              <span class="helix-preview-label" aria-hidden="true"><small>${u}</small><strong>${p.label}</strong></span>
            </a>`}).join("")}
        </div>

        <div class="helix-course-meta">
          <p>Bevezetés az adattudományba 1.</p>
          <a href="#/${W.slug}"><span>00 · Bevezető modul</span><strong>${W.shortTitle}</strong></a>
        </div>

        <div class="helix-counter" aria-live="polite">
          <span data-current-station>${String(a+1).padStart(2,"0")}</span>
          <i aria-hidden="true"><b data-progress-bar></b></i>
          <span>12</span>
        </div>

        <div class="helix-card-deck">
          ${P.map((c,h)=>{const p=String(c.index).padStart(2,"0"),u=h===a,g=e.has(c.slug);return`<article class="helix-card accent-${c.accent}${u?" is-active is-docked":""}" tabindex="-1"
              data-helix-card="${h}" style="--station-distance:${a-h};opacity:${u?1:0}"
              aria-hidden="${String(!u)}" ${u?"":"inert"}>
              <div class="helix-card-number"><span>${p}</span><small>/ 12</small></div>
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
          ${P.map((c,h)=>`<section class="helix-stop" data-helix-stop="${h}" aria-labelledby="helix-stop-title-${h}"><h2 class="sr-only" id="helix-stop-title-${h}">${c.index}. ${c.title}: ${c.shortTitle}</h2></section>`).join("")}
        </div>
      </main>`;const i=t.querySelector(".helix-canvas"),o=[...t.querySelectorAll("[data-helix-stop]")],n=[...t.querySelectorAll("[data-helix-card]")],r=[...t.querySelectorAll("[data-helix-preview]")];i&&(this.spiral=new Be(i,{stops:o,cards:n,previews:r,initialIndex:a,onActiveChange:c=>{var h;this.currentIndex=c,this.updateStationUI(c),(h=s.onActiveChange)==null||h.call(s,c)}}),this.spiral.mount()),(d=t.querySelector("[data-next-station]"))==null||d.addEventListener("click",()=>{this.scrollToStation(Math.min(P.length-1,this.currentIndex+1))})}destroy(){var t;(t=this.spiral)==null||t.destroy(),this.spiral=void 0,this.root=void 0}scrollToStation(t,e="smooth"){var s;(s=this.spiral)==null||s.scrollTo(t,e)}getActiveIndex(){var t;return((t=this.spiral)==null?void 0:t.getActiveIndex())??this.currentIndex}updateStationUI(t){var i,o,n;const e=(i=this.root)==null?void 0:i.querySelector("[data-current-station]"),s=(o=this.root)==null?void 0:o.querySelector("[data-progress-bar]");e&&(e.textContent=String(t+1).padStart(2,"0")),s&&(s.style.width=`${(t+1)/P.length*100}%`);const a=(n=this.root)==null?void 0:n.querySelector("[data-next-station]");a&&(a.hidden=t===P.length-1,a.setAttribute("aria-label",t===P.length-1?"Az utolsó témánál jársz":`Ugrás a(z) ${t+2}. témára`))}}function q(l,t){const e=l.x-t.x,s=l.y-t.y;return e*e+s*s}function Xt(l,t,e){const s=l.filter(r=>typeof r.label=="number");if(s.length===0)return{label:0,neighbors:[],confidence:0};const a=Math.max(1,Math.min(Math.floor(e),s.length)),i=s.map(r=>({point:r,distance:q(r,t)})).sort((r,d)=>r.distance-d.distance).slice(0,a).map(({point:r})=>r),o=new Map;i.forEach(r=>{const d=r.label??0,c=o.get(d)??{count:0,weight:0};c.count+=1,c.weight+=1/Math.max(1e-9,Math.sqrt(q(r,t))),o.set(d,c)});const n=[...o.entries()].sort((r,d)=>d[1].count-r[1].count||d[1].weight-r[1].weight)[0];return{label:n[0],neighbors:i,confidence:n[1].count/a}}function Ke(l,t){const e=t.length,s=l.map((a,i)=>[...a,t[i]]);for(let a=0;a<e;a+=1){let i=a;for(let n=a+1;n<e;n+=1)Math.abs(s[n][a])>Math.abs(s[i][a])&&(i=n);[s[a],s[i]]=[s[i],s[a]];const o=s[a][a];if(Math.abs(o)<1e-12)return Array(e).fill(0);for(let n=a;n<=e;n+=1)s[a][n]/=o;for(let n=0;n<e;n+=1){if(n===a)continue;const r=s[n][a];for(let d=a;d<=e;d+=1)s[n][d]-=r*s[a][d]}}return s.map(a=>a[e])}function _t(l,t,e=0){const a=Math.max(0,Math.min(Math.floor(t),Math.max(0,l.length-1)))+1,i=Array.from({length:a},()=>Array(a).fill(0)),o=Array(a).fill(0);l.forEach(n=>{const r=Array.from({length:a*2},(d,c)=>n.x**c);for(let d=0;d<a;d+=1){o[d]+=n.y*r[d];for(let c=0;c<a;c+=1)i[d][c]+=r[d+c]}});for(let n=1;n<a;n+=1)i[n][n]+=e;return Ke(i,o)}function Bt(l,t){return l.reduceRight((e,s)=>e*t+s,0)}function rt(l,t){return l.length===0?0:l.reduce((e,s)=>{const a=s.y-Bt(t,s.x);return e+a*a},0)/l.length}function et(l,t,e=0){const s=Math.max(1,Math.min(Math.floor(t),l.length||1)),a=[...l].sort((n,r)=>n.x-r.x||n.y-r.y);let i=Array.from({length:s},(n,r)=>a[Math.min(a.length-1,Math.floor((r+.5)/s*a.length))]);if(e>0&&l.length>0){const n=[...l];let r=e>>>0;for(let d=n.length-1;d>0;d-=1){r=Math.imul(r,1664525)+1013904223>>>0;const c=r%(d+1);[n[d],n[c]]=[n[c],n[d]]}i=n.slice(0,s)}return{centroids:i.map(n=>n?{x:n.x,y:n.y}:{x:.5,y:.5}),assignments:Array(l.length).fill(-1),phase:"assign",iteration:0}}function Oe(l,t){if(l.length===0||t.phase==="done")return t;if(t.phase==="assign"){const n=l.map(r=>{let d=0,c=Number.POSITIVE_INFINITY;return t.centroids.forEach((h,p)=>{const u=q(r,h);u<c&&(d=p,c=u)}),d});return{...t,assignments:n,phase:"update"}}const s=t.centroids.map((n,r)=>l.filter((d,c)=>t.assignments[c]===r)).map(n=>n.length===0?void 0:{x:n.reduce((r,d)=>r+d.x,0)/n.length,y:n.reduce((r,d)=>r+d.y,0)/n.length}),a=new Set;s.forEach((n,r)=>{if(n)return;const d=l.map((h,p)=>({point:h,index:p,distance:t.assignments[p]>=0?q(h,t.centroids[t.assignments[p]]):Number.POSITIVE_INFINITY})).filter(({index:h})=>!a.has(h)).sort((h,p)=>p.distance-h.distance),c=d.find(({point:h})=>!s.some(p=>p&&q(h,p)<1e-12))??d[0];c&&(a.add(c.index),s[r]={x:c.point.x,y:c.point.y})});const i=s.map((n,r)=>n??t.centroids[r]),o=i.reduce((n,r,d)=>n+q(r,t.centroids[d]),0);return{centroids:i,assignments:t.assignments,phase:o<1e-8?"done":"assign",iteration:t.iteration+1}}function st(l,t,e){const s=Array(l.length).fill(-99),a=Array(l.length).fill("noise"),i=l.map(r=>l.map((d,c)=>({index:c,distance:q(r,d)})).filter(({distance:d})=>d<=t*t).map(({index:d})=>d)),o=i.map(r=>r.length>=e);o.forEach((r,d)=>{r&&(a[d]="core")});let n=0;return l.forEach((r,d)=>{if(!o[d]||s[d]!==-99)return;const c=[d];for(s[d]=n;c.length>0;){const h=c.shift();if(h===void 0)break;i[h].forEach(p=>{s[p]===-99&&(s[p]=n,o[p]?c.push(p):a[p]="border")})}n+=1}),s.forEach((r,d)=>{r===-99&&(s[d]=-1)}),{assignments:s,types:a,clusters:n}}function Fe(l,t,e){return l.reduce((s,a,i)=>{const o=e[t[i]];return o?s+q(a,o):s},0)}function T(l){const t=l.getBoundingClientRect(),e=Math.min(window.devicePixelRatio||1,2),s=Math.max(1,Math.round(t.width)),a=Math.max(1,Math.round(t.height)),i=Math.round(s*e),o=Math.round(a*e);(l.width!==i||l.height!==o)&&(l.width=i,l.height=o);const n=l.getContext("2d");return n==null||n.setTransform(e,0,0,e,0,0),{width:s,height:a,dpr:e}}function R(l,t,e=20){const s=l.getBoundingClientRect(),a=t.clientX-s.left,i=t.clientY-s.top;return{x:Math.max(0,Math.min(1,(a-e)/Math.max(1,s.width-e*2))),y:Math.max(0,Math.min(1,(i-e)/Math.max(1,s.height-e*2)))}}function M(l,t,e,s=20){return[s+l.x*(t-s*2),s+l.y*(e-s*2)]}function N(l,t,e,s=20){l.save(),l.strokeStyle="rgba(18, 32, 63, 0.12)",l.lineWidth=1,l.setLineDash([2,5]);for(let a=0;a<=4;a+=1){const i=s+a/4*(t-s*2),o=s+a/4*(e-s*2);l.beginPath(),l.moveTo(i,s),l.lineTo(i,e-s),l.stroke(),l.beginPath(),l.moveTo(s,o),l.lineTo(t-s,o),l.stroke()}l.setLineDash([]),l.strokeStyle="rgba(18, 32, 63, 0.28)",l.strokeRect(s+.5,s+.5,t-s*2-1,e-s*2-1),l.restore()}function wt(l,t,e,s,a=5,i=!1){const o=["#d84429","#1e67b8","#907015","#17776c"],n=o[Math.abs(s)%o.length];l.save(),l.beginPath(),s%2===0?l.arc(t,e,a,0,Math.PI*2):l.rect(t-a*.82,e-a*.82,a*1.64,a*1.64),l.fillStyle=i?"#f4f1e8":n,l.fill(),l.strokeStyle=n,l.lineWidth=i?2:1.25,l.stroke(),l.restore()}function C(l,t=.04,e=.96){return Math.max(t,Math.min(e,l))}function Yt(l=18,t=96){const e=A(l);return Array.from({length:t},(s,a)=>{const i=a%2,o=e()*Math.PI,n=x(e)*.018,r=x(e)*.018;return i===0?{x:C(.28+Math.cos(o)*.24+n),y:C(.49-Math.sin(o)*.25+r),label:i}:{x:C(.7-Math.cos(o)*.24+n),y:C(.48+Math.sin(o)*.25+r),label:i}})}function ve(l=4,t=96){const e=A(l);return Array.from({length:t},()=>{const s=.08+e()*.84,a=.08+e()*.84,i=(s>.5?1:0)+(a>.5?2:0);return{x:s,y:a,label:i===0||i===3?0:1}})}function be(l=72,t=96){const e=A(l);return Array.from({length:t},(s,a)=>{const i=a%2,o=i===0?.42:.59,n=i===0?.47:.54;return{x:C(o+x(e)*.15),y:C(n+x(e)*.15),label:i}})}function ke(l=29){const t=A(l),e=[];for(let s=0;s<34;s+=1){const a=-.93+s/33*1.86,o=.12+.52*a-.27*a*a+.2*Math.sin(a*4.5)+x(t)*.105;e.push({x:a,y:o,split:s%4===1?"test":"train"})}return e}function Ve(l=57){const t=A(l);return Array.from({length:34},(e,s)=>{const a=-.93+s/33*1.86,i=-.48+1.08*a*a+x(t)*.085;return{x:a,y:i,split:s%4===1?"test":"train"}})}function Ye(l=83){const t=A(l);return Array.from({length:34},(e,s)=>{const a=-.93+s/33*1.86,i=-.06+.62*a+x(t)*.07;return{x:a,y:s===24?.82:i,split:s%4===1?"test":"train"}})}function kt(l,t,e,s,a){return Array.from({length:a},()=>({x:C(t+x(l)*s),y:C(e+x(l)*s)}))}function ye(l=11){const t=A(l);return[...kt(t,.25,.3,.07,38),...kt(t,.72,.34,.075,38),...kt(t,.5,.75,.08,38)]}function We(l=42){const t=A(l),e=[];for(let s=0;s<62;s+=1){const a=s/62*Math.PI*2+x(t)*.025,i=.34+x(t)*.014;e.push({x:.5+Math.cos(a)*i,y:.5+Math.sin(a)*i})}return e.push(...kt(t,.5,.5,.075,48)),e}function Ue(l=7){const t=A(l),e=[];for(let s=0;s<3;s+=1)for(let a=0;a<36;a+=1){const i=.08+t()*.84,o=.18+s*.27+.32*(i-.5)+x(t)*.025;e.push({x:C(i),y:C(o)})}return e}function Ge(l=92,t=110){const e=A(l);return Array.from({length:t},()=>({x:.06+e()*.88,y:.06+e()*.88}))}function Xe(l=2026,t=86){const e=A(l),s=[],a=[{x:.28,y:.64,sx:.11,sy:.12},{x:.68,y:.66,sx:.12,sy:.1},{x:.51,y:.3,sx:.14,sy:.09}];for(let i=0;i<t;i+=1){const o=a[i%a.length];s.push({x:C(o.x+x(e)*o.sx),y:C(o.y+x(e)*o.sy),label:i%a.length})}return s}const lt={blobs:{title:"Három csomó",question:"Talál-e mindkét módszer három csoportot?",make:()=>ye(),epsilon:.1,minPoints:5},rings:{title:"Gyűrű és mag",question:"Mit jelent itt a „középpont”?",make:()=>We(),epsilon:.1,minPoints:5},bands:{title:"Ferde sávok",question:"A gömbszerűség jó feltételezés?",make:()=>Ue(),epsilon:.15,minPoints:5},noise:{title:"Egyenletes pontok",question:"Mikor marad a többség zaj?",make:()=>Ge(),epsilon:.04,minPoints:5}},L=["#d84429","#1e67b8","#927019","#17776c","#7b4f9d","#5e697b"];class _e{constructor(t){m(this,"context");m(this,"root");m(this,"canvas");m(this,"points",ye());m(this,"algorithm","kmeans");m(this,"k",3);m(this,"epsilon",.1);m(this,"minPoints",5);m(this,"initializationSeed",0);m(this,"kMeansState",et(this.points,this.k));m(this,"isPlacingCentroids",!1);m(this,"manualCentroids",[]);m(this,"dbscanResult",st(this.points,this.epsilon,this.minPoints));m(this,"pointer");m(this,"drawing",!1);m(this,"lastDrawn");m(this,"touchDrawingEnabled",!1);m(this,"tapCandidate");m(this,"resizeObserver");m(this,"runTimer");m(this,"onKeyDown",t=>{var e;!((e=this.root)!=null&&e.isConnected)||t.target.closest("button, a, input, select, textarea, summary, [contenteditable='true']")||(t.code==="Space"&&this.algorithm==="kmeans"&&(t.preventDefault(),this.step()),t.key.toLowerCase()==="r"&&(this.resetAlgorithms(),this.update()))});this.context=t}mount(t){this.root=t,t.innerHTML=`
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
            ${Object.entries(lt).map(([e,s],a)=>`
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
      </article>`,this.canvas=t.querySelector("canvas.data-canvas")??void 0,this.bindControls(),this.canvas&&(this.resizeObserver=new ResizeObserver(()=>this.draw()),this.resizeObserver.observe(this.canvas)),this.update()}destroy(){var t;(t=this.resizeObserver)==null||t.disconnect(),this.stopRun(),window.removeEventListener("keydown",this.onKeyDown),this.root=void 0,this.canvas=void 0}bindControls(){var e,s,a,i,o,n,r,d,c,h;if(!this.root||!this.canvas)return;this.root.querySelectorAll("[data-algorithm]").forEach(p=>{p.addEventListener("click",()=>{var u;this.stopRun(),this.algorithm=p.dataset.algorithm??"kmeans",this.cancelManualCentroidPlacement(),(u=this.root)==null||u.querySelectorAll("[data-algorithm]").forEach(g=>{const v=g===p;g.classList.toggle("is-active",v),g.setAttribute("aria-pressed",String(v))}),this.syncAlgorithmControls(),this.update()})}),this.root.querySelectorAll("[data-preset]").forEach(p=>{p.addEventListener("click",()=>{var g,v,b;const u=p.dataset.preset??"blobs";if(this.points=u==="custom"?[]:lt[u].make(),u!=="custom"){this.epsilon=lt[u].epsilon,this.minPoints=lt[u].minPoints;const k=(g=this.root)==null?void 0:g.querySelector("#cluster-epsilon"),y=(v=this.root)==null?void 0:v.querySelector("#cluster-minpts");k&&(k.value=String(Math.round(this.epsilon*100))),y&&(y.value=String(this.minPoints))}this.initializationSeed=0,this.resetAlgorithms(),(b=this.root)==null||b.querySelectorAll("[data-preset]").forEach(k=>{const y=k===p;k.classList.toggle("is-active",y),k.setAttribute("aria-pressed",String(y))}),this.update()})}),(e=this.root.querySelector("#cluster-k"))==null||e.addEventListener("input",p=>{this.stopRun(),this.k=Number(p.target.value),this.initializationSeed=0,this.cancelManualCentroidPlacement(),this.kMeansState=et(this.points,this.k,this.initializationSeed),this.update()}),(s=this.root.querySelector("#cluster-epsilon"))==null||s.addEventListener("input",p=>{this.stopRun(),this.epsilon=Number(p.target.value)/100,this.dbscanResult=st(this.points,this.epsilon,this.minPoints),this.update()}),(a=this.root.querySelector("#cluster-minpts"))==null||a.addEventListener("input",p=>{this.stopRun(),this.minPoints=Number(p.target.value),this.dbscanResult=st(this.points,this.epsilon,this.minPoints),this.update()}),(i=this.root.querySelector("[data-action='step']"))==null||i.addEventListener("click",()=>{this.stopRun(),this.step()}),(o=this.root.querySelector("[data-action='run']"))==null||o.addEventListener("click",()=>this.run()),this.root.querySelectorAll("[data-placement-mode]").forEach(p=>{p.addEventListener("click",()=>{p.dataset.placementMode==="centroid"?this.isPlacingCentroids||this.startManualCentroidPlacement():this.cancelManualCentroidPlacement(),this.update()})}),(n=this.root.querySelector("[data-action='toggle-draw']"))==null||n.addEventListener("click",p=>{var v;if(this.isPlacingCentroids)return;this.touchDrawingEnabled=!this.touchDrawingEnabled;const u=p.currentTarget;u.setAttribute("aria-pressed",String(this.touchDrawingEnabled)),u.classList.toggle("is-active",this.touchDrawingEnabled);const g=u.querySelector("[data-draw-state]");g&&(g.textContent=this.touchDrawingEnabled?"be":"ki"),(v=this.canvas)==null||v.classList.toggle("is-touch-drawing",this.touchDrawingEnabled)}),(r=this.root.querySelector("[data-action='restart']"))==null||r.addEventListener("click",()=>{this.stopRun(),this.initializationSeed+=1,this.cancelManualCentroidPlacement(),this.kMeansState=et(this.points,this.k,this.initializationSeed),this.update()}),(d=this.root.querySelector("[data-action='clear']"))==null||d.addEventListener("click",()=>{this.points=[],this.resetAlgorithms(),this.update()}),(c=this.root.querySelector("[data-entry-kind]"))==null||c.addEventListener("change",()=>this.syncKeyboardEntry()),(h=this.root.querySelector("[data-action='add-keyboard']"))==null||h.addEventListener("click",()=>{var b,k,y,j,f,z;const p=Number(((k=(b=this.root)==null?void 0:b.querySelector("[data-entry-x]"))==null?void 0:k.value)??.5),u=Number(((j=(y=this.root)==null?void 0:y.querySelector("[data-entry-y]"))==null?void 0:j.value)??.5),g={x:Math.max(0,Math.min(1,p)),y:Math.max(0,Math.min(1,u))};((z=(f=this.root)==null?void 0:f.querySelector("[data-entry-kind]"))==null?void 0:z.value)==="centroid"&&this.algorithm==="kmeans"?(this.isPlacingCentroids||this.startManualCentroidPlacement(),this.placeManualCentroid(g)):this.addPoint(g)}),this.canvas.addEventListener("pointerdown",p=>{var v;const u=R(this.canvas,p),g=this.algorithm==="kmeans"&&this.isPlacingCentroids?"centroid":"point";if(this.pointer=u,p.pointerType!=="mouse"&&(g==="centroid"||!this.touchDrawingEnabled)){this.tapCandidate={point:u,clientX:p.clientX,clientY:p.clientY,moved:!1,mode:g};return}if((v=this.canvas)==null||v.setPointerCapture(p.pointerId),g==="centroid"){this.placeManualCentroid(u);return}this.drawing=!0,this.lastDrawn=void 0,this.addPoint(u)}),this.canvas.addEventListener("pointermove",p=>{if(this.pointer=R(this.canvas,p),this.tapCandidate){Math.hypot(p.clientX-this.tapCandidate.clientX,p.clientY-this.tapCandidate.clientY)>9&&(this.tapCandidate.moved=!0);return}this.drawing?this.addPoint(this.pointer):this.draw()});const t=()=>{this.drawing=!1,this.lastDrawn=void 0};this.canvas.addEventListener("pointerup",p=>{var u;this.tapCandidate&&(this.tapCandidate.moved||(this.tapCandidate.mode==="centroid"?this.placeManualCentroid(this.tapCandidate.point):(this.lastDrawn=void 0,this.addPoint(this.tapCandidate.point))),this.tapCandidate=void 0),(u=this.canvas)!=null&&u.hasPointerCapture(p.pointerId)&&this.canvas.releasePointerCapture(p.pointerId),t()}),this.canvas.addEventListener("pointercancel",()=>{this.tapCandidate=void 0,t()}),this.canvas.addEventListener("lostpointercapture",t),this.canvas.addEventListener("pointerleave",()=>{this.pointer=void 0,this.tapCandidate=void 0,t(),this.update()}),window.addEventListener("keydown",this.onKeyDown),this.root.querySelectorAll("[data-answer]").forEach(p=>{p.addEventListener("click",()=>{var v,b;const u=p.dataset.answer==="right";(v=this.root)==null||v.querySelectorAll("[data-answer]").forEach(k=>k.classList.remove("is-correct","is-wrong")),p.classList.add(u?"is-correct":"is-wrong");const g=(b=this.root)==null?void 0:b.querySelector("[data-quiz-feedback]");g&&(g.textContent=u?"Helyes. A DBSCAN sűrűség alapján kapcsolja össze a pontokat, ezért a gyűrűt nem bontja centroidok körüli részekre. A modult teljesítetted.":"A k-közép minden klasztert egy centroiddal reprezentál."),u&&this.context.onComplete()})})}syncAlgorithmControls(){var s;const t=this.algorithm==="kmeans";["[data-kmeans-tools]","[data-kmeans-parameters]"].forEach(a=>{var o;const i=(o=this.root)==null?void 0:o.querySelector(a);i&&(i.hidden=!t)}),["[data-dbscan-tools]","[data-dbscan-parameters]"].forEach(a=>{var o;const i=(o=this.root)==null?void 0:o.querySelector(a);i&&(i.hidden=t)});const e=(s=this.root)==null?void 0:s.querySelector("[data-dbscan-legend]");e&&(e.hidden=t),this.syncKeyboardEntry(),this.syncManualCentroidControls()}resetAlgorithms(){this.stopRun(),this.cancelManualCentroidPlacement(),this.kMeansState=et(this.points,this.k,this.initializationSeed),this.dbscanResult=st(this.points,this.epsilon,this.minPoints)}startManualCentroidPlacement(){this.stopRun(),this.isPlacingCentroids=!0,this.manualCentroids=[],this.syncManualCentroidControls()}cancelManualCentroidPlacement(){this.isPlacingCentroids=!1,this.manualCentroids=[],this.syncManualCentroidControls()}placeManualCentroid(t){!this.isPlacingCentroids||this.algorithm!=="kmeans"||(this.manualCentroids.push({x:t.x,y:t.y}),this.manualCentroids.length===this.k&&(this.kMeansState={centroids:this.manualCentroids.map(e=>({...e})),assignments:Array(this.points.length).fill(-1),phase:"assign",iteration:0},this.isPlacingCentroids=!1,this.manualCentroids=[]),this.update())}syncManualCentroidControls(){var n,r,d,c,h,p,u,g;const t=this.algorithm==="kmeans"&&this.isPlacingCentroids,e=(n=this.root)==null?void 0:n.querySelector("[data-placement-mode='point']"),s=(r=this.root)==null?void 0:r.querySelector("[data-placement-mode='centroid']");e==null||e.classList.toggle("is-active",!t),e==null||e.setAttribute("aria-pressed",String(!t)),s==null||s.classList.toggle("is-active",t),s==null||s.setAttribute("aria-pressed",String(t)),s&&(s.disabled=this.algorithm!=="kmeans");const a=s==null?void 0:s.querySelector("[data-centroid-count]");a&&(a.textContent=t?`${this.manualCentroids.length} / ${this.k}`:`${this.k} kezdőpont`),(d=this.root)==null||d.querySelectorAll("[data-action='step'], [data-action='run']").forEach(v=>{v.disabled=t});const i=(c=this.root)==null?void 0:c.querySelector("[data-action='toggle-draw']");i&&(i.disabled=t);const o=(h=this.root)==null?void 0:h.querySelector("[data-centroid-prompt]");o&&(o.hidden=!t,o.innerHTML=t?`<span>KÖZÉPPONT ${this.manualCentroids.length+1} / ${this.k}</span><strong>Kattints a vászonra.</strong>`:""),(p=this.canvas)==null||p.classList.toggle("is-placing-centroids",t),(u=this.canvas)==null||u.classList.toggle("is-touch-drawing",this.touchDrawingEnabled&&!t),(g=this.canvas)==null||g.setAttribute("aria-label",t?`Klaszterezési pontfelhő. A(z) ${this.manualCentroids.length+1}. kezdő középpont helyének kijelölése következik, összesen ${this.k} középpontból.`:"Klaszterezési pontfelhő és algoritmuseredmény")}syncKeyboardEntry(){var a,i;const t=(a=this.root)==null?void 0:a.querySelector("[data-entry-kind]"),e=t==null?void 0:t.querySelector("option[value='centroid']");e&&(e.disabled=this.algorithm!=="kmeans"),t&&this.algorithm!=="kmeans"&&t.value==="centroid"&&(t.value="point");const s=(i=this.root)==null?void 0:i.querySelector("[data-entry-action-label]");s&&(s.textContent=(t==null?void 0:t.value)==="centroid"?"Középpont elhelyezése":"Adatpont hozzáadása")}addPoint(t){this.lastDrawn&&(this.lastDrawn.x-t.x)**2+(this.lastDrawn.y-t.y)**2<.0012||this.points.length>=320||(this.points.push(t),this.lastDrawn=t,this.resetAlgorithms(),this.update())}step(){this.isPlacingCentroids||(this.kMeansState=Oe(this.points,this.kMeansState),this.update())}run(){this.runTimer=void 0,!this.isPlacingCentroids&&(this.kMeansState.phase==="done"&&(this.kMeansState=et(this.points,this.k,this.initializationSeed)),this.step(),this.kMeansState.phase!=="done"&&this.kMeansState.iteration<30&&(this.runTimer=window.setTimeout(()=>this.run(),520)))}stopRun(){this.runTimer!==void 0&&window.clearTimeout(this.runTimer),this.runTimer=void 0}update(){var s;this.dbscanResult=st(this.points,this.epsilon,this.minPoints),this.syncManualCentroidControls();const t=(a,i)=>{var n;const o=(n=this.root)==null?void 0:n.querySelector(a);o&&(o.textContent=i)};t("[data-k-output]",String(this.k)),t("[data-epsilon-output]",this.epsilon.toFixed(2).replace(".",",")),t("[data-minpts-output]",String(this.minPoints));const e=(s=this.root)==null?void 0:s.querySelector("[data-observation]");if(this.algorithm==="kmeans")if(this.isPlacingCentroids){const a=this.k-this.manualCentroids.length;e&&(e.innerHTML=`<p class="control-label">Kézi inicializálás</p><strong>${this.manualCentroids.length} / ${this.k} középpont a helyén.</strong><p>${a===1?"Még egy középpontot jelölj ki.":`Még ${a} középpontot jelölj ki.`}</p>`),t("[data-primary-label]","Elhelyezve"),t("[data-primary-metric]",`${this.manualCentroids.length} / ${this.k}`),t("[data-secondary-label]","Következő lépés"),t("[data-secondary-metric]",String(this.manualCentroids.length+1)),t("[data-summary]",`${this.points.length} adatpont · ${this.manualCentroids.length} / ${this.k} középpont elhelyezve`)}else{const a=this.kMeansState.phase==="assign"?"Hozzárendelési lépés.":this.kMeansState.phase==="update"?"Centroidfrissítési lépés.":"A centroidok konvergáltak.";e&&(e.innerHTML=`<p class="control-label">Aktuális eredmény</p><strong>${a}</strong><p>${this.kMeansState.phase==="assign"?"Minden pontot a hozzá legközelebbi centroidhoz rendelünk.":this.kMeansState.phase==="update"?"Minden centroid a saját pontjainak átlagába mozdul.":"Ez egy lokális optimum; más kezdés más eredményt adhat."}</p>`),t("[data-primary-label]","Iteráció"),t("[data-primary-metric]",String(this.kMeansState.iteration)),t("[data-secondary-label]","Klaszteren belüli négyzetösszeg (SSE)");const i=this.kMeansState.assignments.every(o=>o>=0);t("[data-secondary-metric]",i&&this.points.length>0?Fe(this.points,this.kMeansState.assignments,this.kMeansState.centroids).toFixed(2):"—"),t("[data-summary]",`${this.points.length} címkézetlen pont · ${this.k} beállított klaszter · ${a}`)}else{const a=this.dbscanResult.assignments.filter(i=>i<0).length;e&&(e.innerHTML=`<p class="control-label">Aktuális eredmény</p><strong>${this.dbscanResult.clusters} klaszter, ${a} zajpont.</strong><p>${a>this.points.length*.45?"Az ε túl szűk lehet: kevés pont éri el a szükséges sűrűséget.":this.dbscanResult.clusters===1?"Az ε összeköthette a korábban különálló sűrű részeket.":"A DBSCAN összefüggő sűrűségi komponenseket azonosított."}</p>`),t("[data-primary-label]","Klaszter"),t("[data-primary-metric]",String(this.dbscanResult.clusters)),t("[data-secondary-label]","Zajpont"),t("[data-secondary-metric]",String(a)),t("[data-summary]",`${this.points.length} címkézetlen pont · ${this.dbscanResult.clusters} klaszter · ${a} pontot nem sorolt be a DBSCAN.`)}this.draw()}draw(){var i;if(!this.canvas)return;const t=this.canvas.getContext("2d");if(!t)return;const{width:e,height:s}=T(this.canvas);t.clearRect(0,0,e,s),t.fillStyle="#f4f1e8",t.fillRect(0,0,e,s),N(t,e,s);const a=this.algorithm==="kmeans"?this.isPlacingCentroids?Array(this.points.length).fill(-1):this.kMeansState.assignments:this.dbscanResult.assignments;if(this.algorithm==="kmeans"&&!this.isPlacingCentroids&&this.kMeansState.assignments.some(o=>o>=0)&&(t.save(),t.lineWidth=.8,this.points.forEach((o,n)=>{const r=a[n],d=this.kMeansState.centroids[r];if(!d)return;const[c,h]=M(o,e,s),[p,u]=M(d,e,s);t.beginPath(),t.moveTo(c,h),t.lineTo(p,u),t.strokeStyle=`${L[r%L.length]}24`,t.lineWidth=.75,t.stroke()}),t.restore()),this.points.forEach((o,n)=>{const[r,d]=M(o,e,s),c=a[n];t.save(),t.beginPath();const h=c<0;if(this.algorithm==="dbscan"&&h)t.moveTo(r-3.5,d-3.5),t.lineTo(r+3.5,d+3.5),t.moveTo(r+3.5,d-3.5),t.lineTo(r-3.5,d+3.5),t.strokeStyle="#6d7480",t.lineWidth=1.6,t.stroke();else{const p=c>=0?L[c%L.length]:"#526077",u=this.algorithm==="dbscan"?this.dbscanResult.types[n]:"core",g=this.algorithm==="kmeans"&&c>=0,v=g?5.8:u==="core"?4.8:4;t.arc(r,d,v,0,Math.PI*2),t.fillStyle=u==="border"?"#f4f1e8":p,t.fill(),t.strokeStyle=g?"rgba(18, 32, 63, 0.52)":p,t.lineWidth=g?1.15:u==="border"?1.8:1,t.stroke()}t.restore()}),this.algorithm==="kmeans"){if((this.isPlacingCentroids?this.manualCentroids:this.kMeansState.centroids).forEach((n,r)=>{const[d,c]=M(n,e,s);t.save(),t.fillStyle="rgba(244, 241, 232, 0.96)",t.strokeStyle="#12203f",t.lineWidth=1.5,t.beginPath(),t.arc(d,c,10,0,Math.PI*2),t.fill(),t.stroke(),t.strokeStyle=L[r%L.length],t.lineWidth=3.5,t.beginPath(),t.moveTo(d-8,c),t.lineTo(d+8,c),t.moveTo(d,c-8),t.lineTo(d,c+8),t.stroke(),t.fillStyle="#12203f",t.beginPath(),t.arc(d,c,2.4,0,Math.PI*2),t.fill(),this.isPlacingCentroids&&(t.fillStyle=L[r%L.length],t.font="600 11px 'IBM Plex Mono', monospace",t.textAlign="center",t.textBaseline="bottom",t.fillText(String(r+1),d,c-10)),t.restore()}),this.isPlacingCentroids&&this.pointer){const[n,r]=M(this.pointer,e,s),d=L[this.manualCentroids.length%L.length];t.save(),t.strokeStyle=d,t.globalAlpha=.58,t.lineWidth=2,t.setLineDash([4,4]),t.beginPath(),t.arc(n,r,11,0,Math.PI*2),t.stroke(),t.setLineDash([]),t.beginPath(),t.moveTo(n-7,r),t.lineTo(n+7,r),t.moveTo(n,r-7),t.lineTo(n,r+7),t.stroke(),t.restore()}}else if(this.pointer&&this.points.length>0){const o=this.points.reduce((p,u,g)=>q(u,this.pointer)<q(this.points[p],this.pointer)?g:p,0),n=this.points[o],r=this.points.filter(p=>q(p,n)<=this.epsilon*this.epsilon),[d,c]=M(n,e,s);r.forEach(p=>{const[u,g]=M(p,e,s);t.beginPath(),t.arc(u,g,7,0,Math.PI*2),t.strokeStyle="rgba(184, 50, 30, .5)",t.lineWidth=1,t.stroke()}),t.save(),t.beginPath(),t.ellipse(d,c,this.epsilon*(e-40),this.epsilon*(s-40),0,0,Math.PI*2),t.fillStyle="rgba(224, 69, 42, .055)",t.fill(),t.strokeStyle="rgba(184, 50, 30, .72)",t.lineWidth=1.5,t.stroke(),t.restore();const h=(i=this.root)==null?void 0:i.querySelector("[data-observation]");if(h){const p=this.dbscanResult.types[o],u=p==="core"?"magpont":p==="border"?"határpont":"zajpont";h.innerHTML=`<p class="control-label">ε-környezet</p><strong>${r.length} pont önmagával együtt → ${u}.</strong><p>A kör mindig a kurzorhoz legközelebbi adatpontra illeszkedik.</p>`}}}}const Je=[{uid:"row-01",record:"H-001",programme:"Mérnökinformatikus",birthYear:2002,weeklyStudyHours:8},{uid:"row-02",record:"H-002",programme:"Gazdaságinformatikus",birthYear:2001,weeklyStudyHours:6},{uid:"row-03",record:"H-003",programme:"Villamosmérnök",birthYear:2003,weeklyStudyHours:7},{uid:"row-04",record:"H-004",programme:"Mérnökinformatikus",birthYear:2e3,weeklyStudyHours:10},{uid:"row-05",record:"H-005",programme:"Gazdaságinformatikus",birthYear:"",weeklyStudyHours:5},{uid:"row-06",record:"H-006",programme:"Mérnökinformatikus",birthYear:2004,weeklyStudyHours:9},{uid:"row-07",record:"H-007",programme:"Villamosmérnök",birthYear:2001,weeklyStudyHours:7},{uid:"row-08",record:"H-008",programme:"Mérnökinformatikus",birthYear:2002,weeklyStudyHours:11},{uid:"row-09",record:"H-009",programme:"Gazdaságinformatikus",birthYear:1999,weeklyStudyHours:6},{uid:"row-10",record:"H-010",programme:"Villamosmérnök",birthYear:2003,weeklyStudyHours:8},{uid:"row-11",record:"H-011",programme:"Mérnökinformatikus",birthYear:"N/A",weeklyStudyHours:12},{uid:"row-12",record:"H-012",programme:"Gazdaságinformatikus",birthYear:2e3,weeklyStudyHours:4},{uid:"row-13",record:"H-013",programme:"Mérnökinformatikus",birthYear:2002,weeklyStudyHours:9},{uid:"row-14",record:"H-014",programme:"Villamosmérnök",birthYear:2001,weeklyStudyHours:6},{uid:"row-15",record:"H-015",programme:"Gazdaságinformatikus",birthYear:2004,weeklyStudyHours:7},{uid:"row-16",record:"H-016",programme:"Mérnökinformatikus",birthYear:1998,weeklyStudyHours:13},{uid:"row-17",record:"H-017",programme:"Villamosmérnök",birthYear:2e3,weeklyStudyHours:8},{uid:"row-18",record:"H-018",programme:"Mérnökinformatikus",birthYear:2003,weeklyStudyHours:9},{uid:"row-19",record:"H-019",programme:"Gazdaságinformatikus",birthYear:2001,weeklyStudyHours:5},{uid:"row-20",record:"H-020",programme:"Villamosmérnök",birthYear:1900,weeklyStudyHours:7},{uid:"row-21",record:"H-021",programme:"Mérnökinformatikus",birthYear:2002,weeklyStudyHours:10},{uid:"row-22",record:"H-022",programme:"Gazdaságinformatikus",birthYear:2004,weeklyStudyHours:6},{uid:"row-23",record:"H-023",programme:"Villamosmérnök",birthYear:1999,weeklyStudyHours:8},{uid:"row-24",record:"H-024",programme:"Mérnökinformatikus",birthYear:2003,weeklyStudyHours:11},{uid:"row-25",record:"H-025",programme:"Gazdaságinformatikus",birthYear:2e3,weeklyStudyHours:5},{uid:"row-26",record:"H-026",programme:"Villamosmérnök",birthYear:2002,weeklyStudyHours:7},{uid:"row-27",record:"H-027",programme:"Mérnökinformatikus",birthYear:2001,weeklyStudyHours:9},{uid:"row-28",record:"H-018",programme:"Mérnökinformatikus",birthYear:2003,weeklyStudyHours:9}];function Jt(){return Je.map(l=>({...l}))}function fe(l){return l<1990||l>2010}function Ze(l){return[l.record,l.programme,String(l.birthYear),String(l.weeklyStudyHours)].join("\0")}function at(l){const t=new Set,e=[];return l.forEach(s=>{s.birthYear===""?e.push({id:`missing:${s.uid}`,kind:"missing",rowUid:s.uid,severity:"error",shortLabel:"hiányzó",title:"Hiányzik a születési év",detail:"Az üres cella nem használható számszerű összesítésben. A pótlás módját dokumentálni kell."}):typeof s.birthYear!="number"?e.push({id:`nonnumeric:${s.uid}`,kind:"nonnumeric",rowUid:s.uid,severity:"error",shortLabel:"nem szám",title:"Szöveg került a számoszlopba",detail:"Az „N/A” jelölés szöveg. Előbb egységes hiányzó értékké vagy ellenőrzött számmá kell alakítani."}):fe(s.birthYear)&&!s.yearReviewed&&e.push({id:`outlier:${s.uid}`,kind:"outlier",rowUid:s.uid,severity:"review",shortLabel:"ellenőrizendő",title:"Szokatlan, de nem bizonyítottan hibás",detail:"Az érték kívül esik a mintához választott 1990–2010-es ellenőrzési tartományon. Forrásellenőrzés nélkül nem törölhető."});const a=Ze(s);t.has(a)?e.push({id:`duplicate:${s.uid}`,kind:"duplicate",rowUid:s.uid,severity:"error",shortLabel:"duplikátum",title:"A rekord teljes másolata",detail:"A rekordazonosító és az összes megjelenített érték megegyezik egy korábbi sorral."}):t.add(a)}),e}function Qe(l){return l.reduce((t,e)=>(t[e.kind]+=1,t),{missing:0,nonnumeric:0,outlier:0,duplicate:0})}function ze(l){const t=l.map(i=>i.birthYear).filter(i=>typeof i=="number"&&Number.isFinite(i)).sort((i,o)=>i-o);if(t.length===0)return{count:0,excluded:l.length,mean:null,median:null,minimum:null,maximum:null};const e=Math.floor(t.length/2),s=t.length%2===0?(t[e-1]+t[e])/2:t[e],a=t.reduce((i,o)=>i+o,0)/t.length;return{count:t.length,excluded:l.length-t.length,mean:a,median:s,minimum:t[0],maximum:t.at(-1)??t[0]}}function Zt(l){const t=l.filter(s=>typeof s.birthYear=="number"&&(!fe(s.birthYear)||s.yearReviewed)),e=ze(t).median;return e===null?null:Math.round(e)}function ts(l){const t=[{label:"≤1950",count:0},{label:"1951–97",count:0},...Array.from({length:8},(e,s)=>({label:String(1998+s),count:0})),{label:"≥2006",count:0}];return l.forEach(e=>{typeof e.birthYear!="number"||!Number.isFinite(e.birthYear)||(e.birthYear<=1950?t[0].count+=1:e.birthYear<=1997?t[1].count+=1:e.birthYear<=2005?t[2+e.birthYear-1998].count+=1:t.at(-1).count+=1)}),t}function es(l,t){if(t.kind==="remove-row")return l.filter(e=>e.uid!==t.rowUid).map(e=>({...e}));if(t.kind==="set-year"&&(!Number.isFinite(t.value)||!Number.isInteger(t.value)))throw new TypeError("A születési évnek véges egész számnak kell lennie.");return l.map(e=>e.uid!==t.rowUid?{...e}:t.kind==="set-year"?{...e,birthYear:t.value,yearReviewed:!1}:t.kind==="set-year-missing"?{...e,birthYear:"",yearReviewed:!1}:{...e,yearReviewed:!0})}const Qt=["missing","nonnumeric","duplicate","outlier"],ss={missing:"Hiányzó",nonnumeric:"Nem szám",duplicate:"Duplikátum",outlier:"Ellenőrzendő"};function as(l){return l.replace(/[&<>'"]/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;","'":"&#39;",'"':"&quot;"})[t]??t)}function dt(l){return l===null?"—":new Intl.NumberFormat("hu-HU",{maximumFractionDigits:1}).format(l)}class is{constructor(t){m(this,"context");m(this,"root");m(this,"rows",Jt());m(this,"history",[]);m(this,"filter","all");m(this,"selectedRowUid","row-05");m(this,"selectedIssueId","missing:row-05");m(this,"onClick",t=>{var o,n,r;const e=t.target.closest("button");if(!e||!((o=this.root)!=null&&o.contains(e)))return;const s=e.dataset.rowUid,a=e.dataset.issueId,i=e.dataset.filter;if(s&&e.dataset.action==="select-row"){this.selectRow(s);return}if(a){const d=at(this.rows).find(c=>c.id===a);d&&(this.selectedRowUid=d.rowUid,this.selectedIssueId=d.id,this.update());return}if(i&&["all",...Qt].includes(i)){this.filter=i;const d=this.visibleRows(at(this.rows));d.some(c=>c.uid===this.selectedRowUid)?this.update():this.selectRow(((n=d[0])==null?void 0:n.uid)??((r=this.rows[0])==null?void 0:r.uid)??"");return}switch(e.dataset.action){case"reset":this.rows=Jt(),this.history=[],this.filter="all",this.selectedRowUid="row-05",this.selectedIssueId="missing:row-05",this.announce("A szintetikus tábla visszaállt az eredeti állapotba."),this.update();break;case"undo":{const d=this.history.pop();if(!d)return;this.rows=d,this.selectFirstOpenIssue(),this.announce("Az utolsó módosítást visszavontad."),this.update();break}case"use-median":{const d=Zt(this.rows);d!==null&&this.repair({kind:"set-year",rowUid:this.selectedRowUid,value:d},`A születési évet ${d}-re, a jelenlegi mediánra állítottad.`);break}case"set-missing":this.repair({kind:"set-year-missing",rowUid:this.selectedRowUid},"A cellát egységes hiányzó értékre állítottad.");break;case"confirm-year":this.repair({kind:"confirm-year",rowUid:this.selectedRowUid},"Az értéket ellenőrzöttként jelölted; a táblában változatlanul megmaradt.");break;case"remove-duplicate":this.repair({kind:"remove-row",rowUid:this.selectedRowUid},"A kijelölt ismétlődő sort eltávolítottad.");break;default:e.dataset.answer&&this.answerQuiz(e)}});m(this,"onSubmit",t=>{const e=t.target.closest("[data-manual-year-form]");if(!e)return;t.preventDefault();const s=e.querySelector("[data-manual-year]"),a=Number(s==null?void 0:s.value);if(!Number.isInteger(a)){s==null||s.setCustomValidity("Adj meg egész évszámot."),s==null||s.reportValidity();return}s==null||s.setCustomValidity(""),this.repair({kind:"set-year",rowUid:this.selectedRowUid,value:a},`A születési évet ${a}-re módosítottad.`)});this.context=t}mount(t){this.root=t,t.innerHTML=`
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
      </article>`,t.addEventListener("click",this.onClick),t.addEventListener("submit",this.onSubmit),this.update()}destroy(){var t,e;(t=this.root)==null||t.removeEventListener("click",this.onClick),(e=this.root)==null||e.removeEventListener("submit",this.onSubmit),this.root=void 0}selectRow(t){this.selectedRowUid=t;const e=at(this.rows).find(s=>s.rowUid===t);this.selectedIssueId=(e==null?void 0:e.id)??"",this.update()}selectFirstOpenIssue(t){var a;const e=at(this.rows),s=e.find(i=>i.rowUid===t)??e[0];if(s){this.selectedRowUid=s.rowUid,this.selectedIssueId=s.id;return}this.selectedRowUid=((a=this.rows[0])==null?void 0:a.uid)??"",this.selectedIssueId=""}repair(t,e){this.history.push(this.rows.map(a=>({...a})));const s=this.selectedRowUid;this.rows=es(this.rows,t),this.selectFirstOpenIssue(s),this.announce(e),this.update()}answerQuiz(t){var a,i;const e=t.dataset.answer==="right";(a=this.root)==null||a.querySelectorAll("[data-answer]").forEach(o=>o.classList.remove("is-correct","is-wrong")),t.classList.add(e?"is-correct":"is-wrong");const s=(i=this.root)==null?void 0:i.querySelector("[data-quiz-feedback]");s&&(s.textContent=e?"Helyes. A szélsőséges érték vizsgálati jelzés, nem automatikus törlési utasítás. A modult teljesítetted.":"A szélsőség önmagában még nem bizonyítja, hogy az érték hibás."),e&&this.context.onComplete()}announce(t){var s;const e=(s=this.root)==null?void 0:s.querySelector("[data-cleaning-announcement]");e&&(e.textContent=t)}visibleRows(t){if(this.filter==="all")return this.rows;const e=new Set(t.filter(s=>s.kind===this.filter).map(s=>s.rowUid));return this.rows.filter(s=>e.has(s.uid))}update(){if(!this.root)return;const t=at(this.rows);!t.find(n=>n.id===this.selectedIssueId)&&this.selectedIssueId&&(this.selectedIssueId="");const s=this.root.querySelector("[data-cleaning-overview]"),a=this.root.querySelector("[data-cleaning-table]"),i=this.root.querySelector("[data-cleaning-inspector]");s&&(s.innerHTML=this.overviewMarkup(t)),a&&(a.innerHTML=this.tableMarkup(t)),i&&(i.innerHTML=this.inspectorMarkup(t));const o=this.root.querySelector("[data-action='undo']");o&&(o.disabled=this.history.length===0)}overviewMarkup(t){const e=Qe(t),s=ze(this.rows),a=ts(this.rows),i=Math.max(1,...a.map(n=>n.count)),o=a.map((n,r)=>{const d=43+r*52,c=n.count/i*118,h=154-c;return`<g class="histogram-bin"><rect x="${d}" y="${h.toFixed(1)}" width="34" height="${c.toFixed(1)}" rx="2"></rect><text x="${d+17}" y="${Math.max(18,h-7).toFixed(1)}" text-anchor="middle">${n.count||""}</text><text class="histogram-label" x="${d+17}" y="177" text-anchor="middle">${n.label}</text></g>`}).join("");return`<div class="cleaning-overview">
      <div class="issue-filter-panel" aria-labelledby="issue-filter-title">
        <div class="cleaning-panel-heading"><div><p class="control-label">Adatminőségi teendők</p><h3 id="issue-filter-title">${t.length} nyitott jelzés</h3></div><button type="button" data-filter="all" aria-pressed="${this.filter==="all"}" class="issue-filter-all ${this.filter==="all"?"is-active":""}">Mind a ${this.rows.length} sor</button></div>
        <div class="issue-filter-grid">
          ${Qt.map(n=>`<button type="button" data-filter="${n}" aria-pressed="${this.filter===n}" class="issue-filter ${this.filter===n?"is-active":""}"><span>${ss[n]}</span><strong>${e[n]}</strong></button>`).join("")}
        </div>
        <p class="cleaning-rule-note">Az „ellenőrzendő” nem automatikus hiba: a 1990–2010-es tartomány csak vizsgálati szabály ehhez a mintához.</p>
      </div>
      <div class="cleaning-chart-panel">
        <div class="cleaning-panel-heading"><div><p class="control-label">Születési év</p><h3>Eloszlás és középérték</h3></div><span>${s.count} számos · ${s.excluded} kihagyott</span></div>
        <svg class="cleaning-histogram" viewBox="0 0 640 194" role="img" aria-labelledby="birth-hist-title birth-hist-desc">
          <title id="birth-hist-title">A számmal megadott születési évek hisztogramja</title>
          <desc id="birth-hist-desc">${a.map(n=>`${n.label}: ${n.count} rekord`).join("; ")}.</desc>
          <line x1="36" x2="616" y1="154" y2="154"></line>${o}
        </svg>
        <dl class="metric-list cleaning-statistics">
          <div><dt>Átlag</dt><dd data-year-mean>${dt(s.mean)}</dd></div>
          <div><dt>Medián</dt><dd data-year-median>${dt(s.median)}</dd></div>
          <div><dt>Minimum–maximum</dt><dd>${dt(s.minimum)}–${dt(s.maximum)}</dd></div>
        </dl>
        <p class="cleaning-rule-note">Az üres és nem számos cellák kimaradnak. Az 1900-as érték addig is beleszámít, amíg el nem távolítod vagy hiányzóra nem állítod.</p>
      </div>
    </div>`}tableMarkup(t){const e=this.visibleRows(t),s=new Map;return t.forEach(a=>s.set(a.rowUid,[...s.get(a.rowUid)??[],a])),`<div class="cleaning-panel-heading"><div><p class="control-label">Nyers tábla</p><h3>${e.length} megjelenített sor</h3></div><span>Válassz rekordot vagy jelzést</span></div>
      <div class="cleaning-table-scroll-wrap"><div class="cleaning-table-scroll" tabindex="0" role="region" aria-label="Szintetikus piszkos adattábla" data-table-scroll>
        <table class="cleaning-table">
          <caption class="visually-hidden">28 soros szintetikus hallgatói minta adatminőségi jelzésekkel</caption>
          <thead><tr><th scope="col">Rekord</th><th scope="col">Szak</th><th scope="col">Születési év</th><th scope="col">Tanulás / hét</th><th scope="col">Jelzés</th></tr></thead>
          <tbody>${e.map(a=>{const i=s.get(a.uid)??[],o=a.uid===this.selectedRowUid,n=a.birthYear===""?"üres":String(a.birthYear);return`<tr class="${i.length?"has-issue":""} ${o?"is-selected":""}">
              <th scope="row"><button class="cleaning-record-button" type="button" data-action="select-row" data-row-uid="${a.uid}" aria-pressed="${o}">${a.record}</button></th>
              <td>${as(a.programme)}</td>
              <td class="year-cell ${i.some(r=>r.kind!=="duplicate")?"is-flagged":""}">${n}${a.yearReviewed?"<small>ellenőrizve</small>":""}</td>
              <td>${a.weeklyStudyHours} óra</td>
              <td><div class="cleaning-issue-list">${i.length?i.map(r=>`<button type="button" class="cleaning-issue-chip is-${r.severity} ${r.id===this.selectedIssueId?"is-selected":""}" data-issue-id="${r.id}" aria-pressed="${r.id===this.selectedIssueId}">${r.shortLabel}</button>`).join(""):'<span class="cleaning-ok">rendben</span>'}</div></td>
            </tr>`}).join("")}</tbody>
        </table>
      </div><span class="cleaning-scroll-hint" aria-hidden="true">Húzd oldalra&nbsp; →</span></div>`}inspectorMarkup(t){const e=this.rows.find(n=>n.uid===this.selectedRowUid),s=t.find(n=>n.id===this.selectedIssueId)??t.find(n=>n.rowUid===this.selectedRowUid);if(!e)return'<p class="control-label">Javítás</p><h3>Nincs megjelenített rekord</h3><p>Válassz másik szűrőt.</p>';if(!s)return`<p class="control-label">Kijelölt rekord · ${e.record}</p><h3>Nincs nyitott jelzés</h3><p>A jelenlegi szabályok ezen a soron nem találtak teendőt.</p><dl class="metric-list"><div><dt>Születési év</dt><dd>${e.birthYear||"hiányzó"}</dd></div><div><dt>Tanulás / hét</dt><dd>${e.weeklyStudyHours} óra</dd></div></dl>`;const a=Zt(this.rows),i=s.severity==="review"?"ELLENŐRZÉST KÉR":"JAVÍTÁST KÉR";let o="";return s.kind==="missing"?o=`<button class="button button-ink" type="button" data-action="use-median" ${a===null?"disabled":""}>Pótlás mediánnal${a===null?"":` (${a})`}</button>${this.manualYearForm(e)}`:s.kind==="nonnumeric"?o=`<button class="button button-ink" type="button" data-action="set-missing">„N/A” → hiányzó</button><button class="button button-paper" type="button" data-action="use-median" ${a===null?"disabled":""}>Pótlás mediánnal${a===null?"":` (${a})`}</button>${this.manualYearForm(e)}`:s.kind==="outlier"?o=`<button class="button button-ink" type="button" data-action="confirm-year">Forrás alapján érvényes</button><button class="button button-paper" type="button" data-action="set-missing">Nem igazolható → hiányzó</button>${this.manualYearForm(e)}`:o='<button class="button button-ink" type="button" data-action="remove-duplicate">Ismétlődő sor eltávolítása</button>',`<div class="cleaning-inspector-head"><p class="control-label">${i} · ${e.record}</p><span class="cleaning-issue-chip is-${s.severity}">${s.shortLabel}</span></div>
      <h3>${s.title}</h3><p>${s.detail}</p>
      <div class="cleaning-current-value"><span>Jelenlegi cellaérték</span><strong>${e.birthYear===""?"üres":e.birthYear}</strong></div>
      <div class="cleaning-repair-actions">${o}</div>
      ${s.kind==="outlier"?'<p class="cleaning-decision-note"><strong>Fontos:</strong> egyik javítás sem következik pusztán abból, hogy az érték szélsőséges.</p>':""}`}manualYearForm(t){const e=typeof t.birthYear=="number"?t.birthYear:2001;return`<form class="manual-year-form" data-manual-year-form><label for="manual-year-${t.uid}"><strong>Kézi javítás ellenőrzött forrásból</strong><span>Egész évszám</span></label><div><input id="manual-year-${t.uid}" data-manual-year type="number" min="1850" max="2026" step="1" value="${e}" required /><button class="button button-paper" type="submit">Mentés</button></div></form>`}}function te(l){if(l.length===0)return 0;const t=new Map;return l.forEach(s=>t.set(s,(t.get(s)??0)+1)),1-[...t.values()].reduce((s,a)=>{const i=a/l.length;return s+i*i},0)}function ns(l){if(l.length===0)return 0;const t=new Map;return l.forEach(s=>t.set(s,(t.get(s)??0)+1)),1-Math.max(...t.values())/l.length}function U(l){if(l.length===0)return;const t=new Map;return l.forEach(e=>t.set(e.label,(t.get(e.label)??0)+1)),[...t.entries()].sort((e,s)=>s[1]-e[1]||e[0]-s[0])[0][0]}function os(l,t){const e=[],s=[];return l.forEach(a=>{a[t.axis]<=t.threshold?e.push(a):s.push(a)}),{left:e,right:s}}function Nt(l,t){const{left:e,right:s}=os(l,t),a=l.length,i=te(l.map(r=>r.label)),o=r=>a===0?0:(e.length*r(e.map(d=>d.label))+s.length*r(s.map(d=>d.label)))/a,n=o(te);return{split:{...t},left:e,right:s,valid:a>=2&&e.length>0&&s.length>0,parentGini:i,weightedGini:n,giniGain:i-n,weightedMisclassification:o(ns)}}function Mt(l){if(l.length<2)return;let t;return["x","y"].forEach(e=>{const s=[...new Set(l.map(a=>a[e]))].sort((a,i)=>a-i);for(let a=0;a<s.length-1;a+=1){const i=s[a]+(s[a+1]-s[a])/2,o=Nt(l,{axis:e,threshold:i});o.valid&&(!t||o.weightedGini<t.weightedGini-1e-12)&&(t=o)}}),t}function jt(l){return l.map(t=>({x:t.x,y:t.y,label:t.label??0}))}const $t={moons:{title:"Két hold",question:"Mennyit ér egyetlen vágás?",make:()=>jt(Yt())},xor:{title:"Kockás",question:"Elég lehet a gyökérvágás?",make:()=>jt(ve())},overlap:{title:"Átfedő",question:"Hol marad kevert levél?",make:()=>jt(be())}};function D(l){return l.toFixed(3).replace(".",",")}function rs(l){return l==="x"?"x₁":"x₂"}function G(l){return l===void 0?"üres":l===0?"A":"B"}function it(l){return`${rs(l.axis)} ≤ ${l.threshold.toFixed(2).replace(".",",")}`}function Pt(l){return{a:l.filter(t=>t.label===0).length,b:l.filter(t=>t.label===1).length}}class ls{constructor(t){m(this,"context");m(this,"root");m(this,"canvas");m(this,"resizeObserver");m(this,"points",$t.moons.make());m(this,"history",[]);m(this,"manualSplit",{axis:"x",threshold:.5});m(this,"showBest",!1);m(this,"tool","split");m(this,"pointLabel",0);m(this,"drawing",!1);m(this,"lastDrawn");this.context=t}mount(t){this.root=t,t.innerHTML=`
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
            ${Object.entries($t).map(([e,s],a)=>`
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
      </article>`,this.canvas=t.querySelector("canvas.data-canvas")??void 0,this.bindControls(),this.canvas&&(this.resizeObserver=new ResizeObserver(()=>this.draw()),this.resizeObserver.observe(this.canvas)),this.update()}destroy(){var t;(t=this.resizeObserver)==null||t.disconnect(),this.root=void 0,this.canvas=void 0}bindControls(){var e,s,a,i,o,n;if(!this.root||!this.canvas)return;this.root.querySelectorAll("[data-preset]").forEach(r=>{r.addEventListener("click",()=>{const d=r.dataset.preset??"moons";this.points=d==="custom"?[]:$t[d].make(),this.history=[],this.manualSplit={axis:"x",threshold:.5},this.showBest=!1,this.markPreset(d),this.update()})}),this.root.querySelectorAll("[data-tool]").forEach(r=>{r.addEventListener("click",()=>{this.tool=r.dataset.tool==="point"?"point":"split",this.tool==="point"&&(this.pointLabel=Number(r.dataset.label??0)),this.syncControls()})}),this.root.querySelectorAll("[data-axis]").forEach(r=>{r.addEventListener("click",()=>{this.manualSplit={axis:r.dataset.axis==="y"?"y":"x",threshold:this.manualSplit.threshold},this.tool="split",this.showBest=!1,this.update()})}),(e=this.root.querySelector("#tree-threshold"))==null||e.addEventListener("input",r=>{this.manualSplit={...this.manualSplit,threshold:Number(r.target.value)},this.tool="split",this.showBest=!1,this.update()}),(s=this.root.querySelector("[data-action='best']"))==null||s.addEventListener("click",()=>{Mt(this.points)&&(this.showBest=!0,this.update())}),(a=this.root.querySelector("[data-action='show-manual']"))==null||a.addEventListener("click",()=>{this.showBest=!1,this.update()}),(i=this.root.querySelector("[data-action='undo']"))==null||i.addEventListener("click",()=>{const r=this.history.pop();r&&(this.points=r,this.showBest=!1,this.markPreset("custom"),this.update())}),(o=this.root.querySelector("[data-action='clear']"))==null||o.addEventListener("click",()=>{this.points.length>0&&this.pushHistory(),this.points=[],this.showBest=!1,this.markPreset("custom"),this.update()}),(n=this.root.querySelector("[data-action='add-keyboard']"))==null||n.addEventListener("click",()=>{var h,p,u,g,v,b;const r=Number(((p=(h=this.root)==null?void 0:h.querySelector("[data-entry-x]"))==null?void 0:p.value)??.5),d=Number(((g=(u=this.root)==null?void 0:u.querySelector("[data-entry-y]"))==null?void 0:g.value)??.5),c=Number(((b=(v=this.root)==null?void 0:v.querySelector("[data-entry-label]"))==null?void 0:b.value)??0);this.pushHistory(),this.points.push({x:Math.max(0,Math.min(1,r)),y:Math.max(0,Math.min(1,d)),label:c}),this.showBest=!1,this.markPreset("custom"),this.update()}),this.canvas.addEventListener("pointerdown",r=>{var c;const d=R(this.canvas,r);if(this.tool==="split"){this.manualSplit={...this.manualSplit,threshold:this.manualSplit.axis==="x"?d.x:d.y},this.showBest=!1,this.update();return}this.drawing=!0,this.lastDrawn=void 0,(c=this.canvas)==null||c.setPointerCapture(r.pointerId),this.pushHistory(),this.addDrawnPoint(d)}),this.canvas.addEventListener("pointermove",r=>{!this.drawing||this.tool!=="point"||(r.preventDefault(),this.addDrawnPoint(R(this.canvas,r)))});const t=r=>{var d;(d=this.canvas)!=null&&d.hasPointerCapture(r.pointerId)&&this.canvas.releasePointerCapture(r.pointerId),this.drawing=!1,this.lastDrawn=void 0};this.canvas.addEventListener("pointerup",t),this.canvas.addEventListener("pointercancel",t),this.root.querySelectorAll("[data-answer]").forEach(r=>{r.addEventListener("click",()=>{var h,p;const d=r.dataset.answer==="right";(h=this.root)==null||h.querySelectorAll("[data-answer]").forEach(u=>u.classList.remove("is-correct","is-wrong")),r.classList.add(d?"is-correct":"is-wrong");const c=(p=this.root)==null?void 0:p.querySelector("[data-quiz-feedback]");c&&(c.textContent=d?"Helyes. Az elemszám szerinti súlyozás mindkét gyermek teljes mintán belüli hatását megőrzi. A modult teljesítetted.":"Gondold végig, mi történne, ha egyetlen tiszta pont ugyanannyit számítana, mint a minta többi része."),d&&this.context.onComplete()})})}pushHistory(){this.history.push(this.points.map(t=>({...t}))),this.history.length>30&&this.history.shift()}addDrawnPoint(t){if(this.points.length>=240||this.lastDrawn&&(this.lastDrawn.x-t.x)**2+(this.lastDrawn.y-t.y)**2<.0011)return;const e={...t,label:this.pointLabel};this.points.push(e),this.lastDrawn=e,this.showBest=!1,this.markPreset("custom"),this.update()}markPreset(t){var e;(e=this.root)==null||e.querySelectorAll("[data-preset]").forEach(s=>{const a=s.dataset.preset===t;s.classList.toggle("is-active",a),s.setAttribute("aria-pressed",String(a))})}syncControls(){var t,e,s;(t=this.root)==null||t.querySelectorAll("[data-tool]").forEach(a=>{const i=this.tool==="split"?a.dataset.tool==="split":a.dataset.tool==="point"&&Number(a.dataset.label)===this.pointLabel;a.classList.toggle("is-active",i),a.setAttribute("aria-pressed",String(i))}),(e=this.root)==null||e.querySelectorAll("[data-axis]").forEach(a=>{const i=a.dataset.axis===this.manualSplit.axis;a.classList.toggle("is-active",i),a.setAttribute("aria-pressed",String(i))}),(s=this.canvas)==null||s.classList.toggle("is-touch-drawing",this.tool==="point")}update(){var n,r,d,c,h;const t=Nt(this.points,this.manualSplit),e=Mt(this.points);this.showBest&&!e&&(this.showBest=!1);const s=this.showBest&&e?e:t,a=(n=this.root)==null?void 0:n.querySelector("#tree-threshold");a&&(a.value=String(this.manualSplit.threshold)),this.setText("[data-threshold-output]",this.manualSplit.threshold.toFixed(2).replace(".",",")),this.setText("[data-parent-gini]",this.points.length>0?D(s.parentGini):"—"),this.setText("[data-weighted-gini]",s.valid?D(s.weightedGini):"—"),this.setText("[data-misclassification]",s.valid?D(s.weightedMisclassification):"—"),this.setText("[data-gain]",s.valid?D(s.giniGain):"—");const i=(r=this.root)==null?void 0:r.querySelector("[data-action='best']");i&&(i.disabled=!e);const o=(d=this.root)==null?void 0:d.querySelector("[data-action='show-manual']");o==null||o.toggleAttribute("hidden",!this.showBest),(h=(c=this.root)==null?void 0:c.querySelector("[data-best-legend]"))==null||h.toggleAttribute("hidden",!this.showBest),this.updateObservation(s,t,e),this.updateTree(s),this.syncControls(),this.draw()}updateObservation(t,e,s){var d;const a=(d=this.root)==null?void 0:d.querySelector("[data-observation]"),i=Pt(this.points);if(!a)return;if(!t.valid){a.innerHTML=`<p class="control-label">Aktuális vágás</p><strong>Mindkét oldalra kell pont.</strong><p>Most ${i.a} A és ${i.b} B pont van. Rajzolj pontokat, vagy válassz kész adatkészletet.</p>`,this.setText("[data-summary]",`${this.points.length} pont · ${i.a} A · ${i.b} B. A vágás egyik gyermeke üres.`);return}const o=G(U(t.left)),n=G(U(t.right));let r="A CART-eredményhez nyomd meg a Legjobb vágás gombot.";if(this.showBest&&s)if(!e.valid)r="A saját vágás egyik oldala üres, ezért nem érvényes CART-jelölt.";else{const c=Math.max(0,e.weightedGini-s.weightedGini);r=c<5e-4?`A saját vágás ugyanilyen tiszta: súlyozott Gini ${D(e.weightedGini)}.`:`Saját Gini: ${D(e.weightedGini)}. A CART ${D(c)} értékkel kisebb súlyozott Ginit talált.`}a.innerHTML=`<p class="control-label">${this.showBest?"CART-vágás":"Saját vágás"}</p><strong>${it(t.split)}</strong><p>Az igen ág ${t.left.length} pontból ${o}, a nem ág ${t.right.length} pontból ${n} osztályt jelez. ${r}</p>`,this.setText("[data-summary]",`${this.points.length} pont · ${i.a} A · ${i.b} B. ${it(t.split)}; súlyozott Gini ${D(t.weightedGini)}.`)}updateTree(t){var h;const e=(h=this.root)==null?void 0:h.querySelector("[data-tree-svg]");if(!e)return;const s='<title id="tree-svg-title">Az aktuális gyökérvágás fája</title>';if(!t.valid){e.innerHTML=`${s}<desc id="tree-svg-desc" data-tree-desc>Nincs érvényes kétoldali vágás.</desc>
        <rect x="190" y="30" width="140" height="54" rx="4" fill="#fffdf6" stroke="#12203f" />
        <text x="260" y="54" text-anchor="middle" fill="#12203f" font-size="12" font-family="IBM Plex Mono">Nincs két ág</text>
        <text x="260" y="70" text-anchor="middle" fill="#667085" font-size="10" font-family="IBM Plex Sans">Adj pontokat mindkét oldalra</text>`,this.setText("[data-tree-caption]","Az érvényes vágáshoz mindkét oldalon kell legalább egy pont.");return}const a=Pt(t.left),i=Pt(t.right),o=U(t.left),n=U(t.right),r=o===0?"#d84429":"#1e67b8",d=n===0?"#d84429":"#1e67b8",c=`${it(t.split)} feltételből egy ${G(o)} és egy ${G(n)} többségű levél következik.`;e.innerHTML=`${s}<desc id="tree-svg-desc" data-tree-desc>${c}</desc>
      <path d="M260 46 L133 83 M260 46 L387 83" fill="none" stroke="#7b8290" stroke-width="1.4" />
      <text x="181" y="65" fill="#667085" font-size="9" font-family="IBM Plex Mono">igen</text>
      <text x="331" y="65" fill="#667085" font-size="9" font-family="IBM Plex Mono">nem</text>
      <rect x="195" y="8" width="130" height="38" rx="4" fill="#fffdf6" stroke="#12203f" stroke-width="1.5" />
      <text x="260" y="31" text-anchor="middle" fill="#12203f" font-size="12" font-family="IBM Plex Mono">${it(t.split)}</text>
      <rect x="70" y="82" width="126" height="34" rx="4" fill="#fffdf6" stroke="${r}" stroke-width="2" />
      <text x="133" y="97" text-anchor="middle" fill="${r}" font-size="11" font-weight="650" font-family="IBM Plex Sans">${G(o)} osztály</text>
      <text x="133" y="109" text-anchor="middle" fill="#667085" font-size="8.5" font-family="IBM Plex Mono">${a.a} A · ${a.b} B</text>
      <rect x="324" y="82" width="126" height="34" rx="4" fill="#fffdf6" stroke="${d}" stroke-width="2" />
      <text x="387" y="97" text-anchor="middle" fill="${d}" font-size="11" font-weight="650" font-family="IBM Plex Sans">${G(n)} osztály</text>
      <text x="387" y="109" text-anchor="middle" fill="#667085" font-size="8.5" font-family="IBM Plex Mono">${i.a} A · ${i.b} B</text>`,this.setText("[data-tree-caption]",`${it(t.split)} után az ágak többségi osztálya adja a két levél becslését.`)}setText(t,e){var a;const s=(a=this.root)==null?void 0:a.querySelector(t);s&&(s.textContent=e)}draw(){if(!this.canvas)return;const t=this.canvas.getContext("2d");if(!t)return;const{width:e,height:s}=T(this.canvas),a=20,i=Math.max(1,e-a*2),o=Math.max(1,s-a*2),n=Nt(this.points,this.manualSplit),r=Mt(this.points),d=this.showBest&&r?r:n;if(t.clearRect(0,0,e,s),t.fillStyle="#f4f1e8",t.fillRect(0,0,e,s),d.valid){const c=U(d.left),h=U(d.right),p=u=>u===0?"rgba(216, 68, 41, 0.09)":"rgba(30, 103, 184, 0.09)";if(d.split.axis==="x"){const u=a+d.split.threshold*i;t.fillStyle=p(c),t.fillRect(a,a,u-a,o),t.fillStyle=p(h),t.fillRect(u,a,e-a-u,o)}else{const u=a+d.split.threshold*o;t.fillStyle=p(c),t.fillRect(a,a,i,u-a),t.fillStyle=p(h),t.fillRect(a,u,i,s-a-u)}}N(t,e,s,a),this.showBest&&r&&n.valid&&this.drawSplitLine(t,e,s,n.split,"#d84429",!0,"saját"),d.valid&&this.drawSplitLine(t,e,s,d.split,this.showBest?"#17776c":"#d84429",!1,this.showBest?"CART":"saját"),this.points.forEach(c=>{const[h,p]=M(c,e,s,a);wt(t,h,p,c.label,4.8)})}drawSplitLine(t,e,s,a,i,o,n){const d=20+a.threshold*(e-40),c=20+a.threshold*(s-40);t.save(),t.strokeStyle=i,t.lineWidth=o?1.5:2.6,t.setLineDash(o?[5,5]:[]),t.beginPath(),a.axis==="x"?(t.moveTo(d,20),t.lineTo(d,s-20)):(t.moveTo(20,c),t.lineTo(e-20,c)),t.stroke(),t.setLineDash([]),t.font="600 10px IBM Plex Mono, monospace";const h=t.measureText(n).width,p=a.axis==="x"?Math.min(e-20-h-10,d+6):26,u=a.axis==="x"?35:Math.max(33,c-7);t.fillStyle="rgba(255, 253, 246, 0.92)",t.fillRect(p-4,u-11,h+8,15),t.fillStyle=i,t.fillText(n,p,u),t.restore()}}function xt(l){var e;if(l.length<2)throw new Error("A PCA-hoz legalább két megfigyelés szükséges.");const t=((e=l[0])==null?void 0:e.length)??0;if(t<1)throw new Error("A megfigyeléseknek legalább egy koordinátájuk kell legyen.");return l.forEach(s=>{if(s.length!==t||s.some(a=>!Number.isFinite(a)))throw new Error("A PCA csak azonos dimenziójú, véges számokat tartalmazó megfigyeléseket kezel.")}),t}function we(l){const t=xt(l),e=Array.from({length:t},()=>0);return l.forEach(s=>s.forEach((a,i)=>{e[i]+=a})),e.map(s=>s/l.length)}function xe(l){if(l.length<2)return 0;const t=l.reduce((e,s)=>e+s,0)/l.length;return l.reduce((e,s)=>e+(s-t)**2,0)/(l.length-1)}function Z(l){const t=Math.hypot(...l);if(!Number.isFinite(t)||t<=Number.EPSILON)throw new Error("A vetítési irány nem lehet nullvektor.");return l.map(e=>e/t)}function ds(l,t=!1){const e=xt(l),s=we(l),a=l.map(o=>o.map((n,r)=>n-s[r])),i=Array.from({length:e},(o,n)=>{if(!t)return 1;const r=Math.sqrt(xe(a.map(d=>d[n])));return r>1e-12?r:1});return{mean:s,scales:i,transformed:a.map(o=>o.map((n,r)=>n/i[r]))}}function cs(l){const t=xt(l),e=we(l),s=l.length-1;return Array.from({length:t},(a,i)=>Array.from({length:t},(o,n)=>l.reduce((r,d)=>r+(d[i]-e[i])*(d[n]-e[n]),0)/s))}function hs(l){return Array.from({length:l},(t,e)=>Array.from({length:l},(s,a)=>+(e===a)))}function ps(l){const t=l.length;if(t===0||l.some(a=>a.length!==t))throw new Error("Négyzetes mátrix szükséges.");const e=l.map((a,i)=>a.map((o,n)=>{if(!Number.isFinite(o))throw new Error("A mátrix minden eleme véges szám kell legyen.");if(Math.abs(o-l[n][i])>1e-9)throw new Error("A mátrixnak szimmetrikusnak kell lennie.");return o})),s=hs(t);for(let a=0;a<80*t*t;a+=1){let i=0,o=Math.min(1,t-1),n=0;for(let g=0;g<t;g+=1)for(let v=g+1;v<t;v+=1){const b=Math.abs(e[g][v]);b>n&&(n=b,i=g,o=v)}if(n<1e-12||t===1)break;const r=e[i][i],d=e[o][o],c=e[i][o],h=.5*Math.atan2(2*c,d-r),p=Math.cos(h),u=Math.sin(h);for(let g=0;g<t;g+=1){if(g===i||g===o)continue;const v=e[g][i],b=e[g][o];e[g][i]=p*v-u*b,e[i][g]=e[g][i],e[g][o]=u*v+p*b,e[o][g]=e[g][o]}e[i][i]=p**2*r-2*u*p*c+u**2*d,e[o][o]=u**2*r+2*u*p*c+p**2*d,e[i][o]=0,e[o][i]=0;for(let g=0;g<t;g+=1){const v=s[g][i],b=s[g][o];s[g][i]=p*v-u*b,s[g][o]=u*v+p*b}}return Array.from({length:t},(a,i)=>({value:Math.abs(e[i][i])<1e-12?0:e[i][i],vector:Z(s.map(o=>o[i]))})).sort((a,i)=>i.value-a.value).reduce((a,i)=>{const o=i.vector.reduce((r,d,c,h)=>Math.abs(d)>Math.abs(h[r])?c:r,0),n=i.vector[o]<0?-1:1;return a.eigenvalues.push(i.value),a.eigenvectors.push(i.vector.map(r=>r*n)),a},{eigenvalues:[],eigenvectors:[]})}function us(l,t=!1){const e=xt(l),{transformed:s,mean:a,scales:i}=ds(l,t),o=cs(s),{eigenvalues:n,eigenvectors:r}=ps(o),d=n.reduce((c,h)=>c+h,0);return{dimensions:e,mean:a,scales:i,covariance:o,eigenvalues:n,components:r,explainedVarianceRatios:n.map(c=>d>0?c/d:0),transformed:s,standardized:t}}function ee(l,t,e){if(e.length!==t.dimensions)throw new Error("A vetítési irány dimenziója nem megfelelő.");const s=Z(e),a=l.map(n=>n.reduce((r,d,c)=>r+(d-t.mean[c])/t.scales[c]*s[c],0)),i=xe(a),o=t.eigenvalues.reduce((n,r)=>n+r,0);return{values:a,variance:i,explainedVarianceRatio:o>0?i/o:0,direction:s}}function ms(l,t,e){const s=l*Math.PI/180;if(e===2)return[Math.cos(s),Math.sin(s)];if(e!==3)throw new Error("A szögvezérlés két- vagy háromdimenziós adathoz használható.");const a=t*Math.PI/180;return[Math.cos(a)*Math.cos(s),Math.cos(a)*Math.sin(s),Math.sin(a)]}function gs(l){const t=Z(l);if(t.length!==2&&t.length!==3)throw new Error("Csak két- vagy háromdimenziós irány alakítható szögekké.");return{azimuth:Math.atan2(t[1],t[0])*180/Math.PI,elevation:t.length===3?Math.asin(Math.max(-1,Math.min(1,t[2])))*180/Math.PI:0}}function vs(l=314,t=84){const e=A(l),s=34*Math.PI/180;return Array.from({length:t},()=>{const a=x(e)*2.4,i=x(e)*.38;return[2.2+a*Math.cos(s)-i*Math.sin(s),-1.3+a*Math.sin(s)+i*Math.cos(s)]})}function bs(l=2718,t=96){const e=A(l),s=Z([.78,.42,.46]),a=Z([-.36,.9,-.24]),i=Z([s[1]*a[2]-s[2]*a[1],s[2]*a[0]-s[0]*a[2],s[0]*a[1]-s[1]*a[0]]);return Array.from({length:t},()=>{const o=x(e)*2.1,n=x(e)*1.15,r=x(e)*.075;return[0,1,0].map((d,c)=>d+o*s[c]+n*a[c]+r*i[c])})}function ks(l=1618,t=90){const e=A(l);return Array.from({length:t},()=>{const s=x(e);return[120+s*18+x(e)*4.5,3.2+s*.9+x(e)*.22,-1.5-s*.48+x(e)*.18]})}const O={ellipse:{title:"Ferde ellipszis",question:"Melyik irányban a legszélesebb?",dimensions:"2D",make:()=>vs(),start:{azimuth:120,elevation:0}},plane:{title:"Vékony sík",question:"Mennyi marad meg két komponenssel?",dimensions:"3D",make:()=>bs(),start:{azimuth:-35,elevation:-12}},scale:{title:"Eltérő skálák",question:"Mit változtat a standardizálás?",dimensions:"3D",make:()=>ks(),start:{azimuth:62,elevation:28}}},ct=(l,t,e)=>Math.max(t,Math.min(e,l)),Y=(l,t=2)=>l.toFixed(t).replace(".",","),nt=l=>`${Y(l*100,1)}%`;class ys{constructor(t){m(this,"context");m(this,"root");m(this,"cloudCanvas");m(this,"projectionCanvas");m(this,"resizeObserver");m(this,"points",O.ellipse.make());m(this,"standardized",!1);m(this,"centeredView",!0);m(this,"azimuth",O.ellipse.start.azimuth);m(this,"elevation",O.ellipse.start.elevation);m(this,"viewYaw",-.62);m(this,"viewPitch",.42);m(this,"drag");m(this,"onKeyDown",t=>{var s;if(!((s=this.root)!=null&&s.isConnected)||t.target.closest("button, a, input, select, textarea, summary, [contenteditable='true']"))return;if(t.key.toLowerCase()==="p"){t.preventDefault(),this.usePcaDirection();return}if(t.key.toLowerCase()==="r"){t.preventDefault(),this.resetView();return}const e=t.shiftKey?10:2;(t.key==="ArrowLeft"||t.key==="ArrowRight")&&(t.preventDefault(),this.azimuth=ct(this.azimuth+(t.key==="ArrowLeft"?-e:e),-180,180),this.update()),(t.key==="ArrowUp"||t.key==="ArrowDown")&&this.model.dimensions===3&&(t.preventDefault(),this.elevation=ct(this.elevation+(t.key==="ArrowDown"?-e:e),-80,80),this.update())});this.context=t}get model(){return us(this.points,this.standardized)}mount(t){this.root=t,t.innerHTML=`
      <article class="module-page" data-module="dimension-reduction">
        <header class="module-intro paper-header">
          <div class="module-index">10 <span>/ 12</span></div>
          <div>
            <p class="eyebrow">Dimenziócsökkentés · PCA</p>
            <h1>Vetület és variancia</h1>
            <p class="lede">Állítsd a vetítés irányát. A PCA azt az irányt keresi, amelyen a központosított pontok vetülete a legnagyobb varianciájú.</p>
          </div>
          <a class="present-link" href="?mode=present#/dimenzio" aria-label="Dimenziócsökkentés megnyitása vetítés módban">Vetítés <span aria-hidden="true">↗</span></a>
        </header>

        <section class="workbench pca-workbench" aria-labelledby="pca-workbench-title">
          <div class="workbench-topline">
            <div><p class="section-number">INTERAKTÍV MUNKAPAD</p><h2 id="pca-workbench-title">Főkomponens keresése</h2></div>
            <p class="workbench-instruction">Húzd a felső ábrát a térbeli nézet forgatásához. A vetítés irányát a csúszkák szabályozzák.</p>
          </div>

          <div class="preset-strip pca-preset-strip" role="group" aria-label="PCA adatkészlet választása">
            ${Object.entries(O).map(([e,s],a)=>`
              <button class="preset ${a===0?"is-active":""}" type="button" data-pca-preset="${e}" aria-pressed="${a===0}">
                <span class="preset-mark pca-preset-mark preset-pca-${e}" aria-hidden="true"><b>${s.dimensions}</b><i></i><i></i><i></i><i></i><i></i></span>
                <span><strong>${s.title}</strong><small>${s.question}</small></span>
              </button>`).join("")}
          </div>

          <div class="canvas-layout dimension-layout">
            <aside class="tool-column pca-tool-column" aria-label="PCA vezérlők">
              <button class="button button-ink" type="button" data-action="pca-direction">PCA iránya <kbd>P</kbd></button>
              <button class="text-tool" type="button" data-action="reset-view">Nézet alaphelyzetbe <kbd>R</kbd></button>
              <div class="tool-divider"></div>
              <label class="switch-control">
                <input type="checkbox" data-centered-view checked />
                <span aria-hidden="true"></span>
                <strong>Központosított nézet</strong>
              </label>
              <p class="tool-note">A PCA a számítás előtt mindig levonja az átlagot. Ez a kapcsoló csak a felső ábrán mutatja a lépést.</p>
              <label class="switch-control">
                <input type="checkbox" data-standardize />
                <span aria-hidden="true"></span>
                <strong>Standardizálás</strong>
              </label>
              <p class="tool-note">Bekapcsolva minden koordinátát a saját mintaszórásával osztunk.</p>
            </aside>

            <div class="canvas-column pca-canvas-column">
              <section class="pca-plot-panel" aria-labelledby="pca-cloud-title">
                <div class="pca-plot-heading"><div><p class="control-label">EREDETI TÉR</p><strong id="pca-cloud-title">Pontfelhő és vetítési irány</strong></div><span data-dimension-badge>2D adat</span></div>
                <div class="canvas-frame pca-cloud-frame">
                  <canvas class="data-canvas pca-cloud-canvas" data-pca-cloud aria-label="Kétdimenziós pontfelhő a választott vetítési iránnyal" role="img"></canvas>
                  <div class="pca-drag-hint" aria-hidden="true">húzd a nézetet</div>
                </div>
              </section>
              <section class="pca-plot-panel pca-projection-panel" aria-labelledby="pca-projection-title">
                <div class="pca-plot-heading"><div><p class="control-label">EGYDIMENZIÓS VETÜLET</p><strong id="pca-projection-title">A pontok helye a választott tengelyen</strong></div><span data-projection-width>σ = —</span></div>
                <div class="canvas-frame pca-projection-frame">
                  <canvas class="data-canvas pca-projection-canvas" data-pca-projection aria-label="A pontok egydimenziós vetülete" role="img"></canvas>
                </div>
              </section>
              <p class="canvas-summary" data-summary aria-live="polite"></p>
            </div>

            <aside class="parameter-column pca-parameter-column">
              <label class="range-control" for="pca-azimuth">
                <span><strong>Irányszög, θ</strong><output for="pca-azimuth" data-azimuth-output>120°</output></span>
                <input id="pca-azimuth" type="range" min="-180" max="180" step="1" value="120" />
                <span class="range-ends"><small>−180°</small><small>180°</small></span>
              </label>
              <label class="range-control pca-elevation-control" for="pca-elevation" hidden>
                <span><strong>Emelkedési szög, φ</strong><output for="pca-elevation" data-elevation-output>0°</output></span>
                <input id="pca-elevation" type="range" min="-80" max="80" step="1" value="0" />
                <span class="range-ends"><small>−80°</small><small>80°</small></span>
              </label>
              <div class="observation" data-observation></div>
              <dl class="metric-list pca-metrics">
                <div><dt>Vetületi variancia</dt><dd data-project-variance>—</dd></div>
                <div><dt>Megmagyarázott arány</dt><dd data-explained-ratio>—</dd></div>
                <div><dt>PCA maximuma</dt><dd data-pca-maximum>—</dd></div>
                <div><dt>Első két komponens</dt><dd data-two-components>—</dd></div>
              </dl>
              <p class="pca-vector" data-direction-vector></p>
            </aside>
          </div>
        </section>

        <section class="experiments depth-shell" aria-labelledby="pca-try-title">
          <div class="depth-kicker">Kísérletek</div><h2 id="pca-try-title">Három ellenőrizhető állítás</h2>
          <ol class="experiment-list">
            <li><span>01</span><div><strong>Keresd meg az ellipszis hosszanti irányát.</strong><p>Állítsd az irányszöget úgy, hogy a vetületi variancia a lehető legnagyobb legyen. Ezután nyomd meg a PCA iránya gombot.</p></div></li>
            <li><span>02</span><div><strong>Kapcsold ki a központosított nézetet.</strong><p>A felhő elmozdul az origóhoz képest, de a vetületi variancia nem változik: a számítás levonja az átlagot.</p></div></li>
            <li><span>03</span><div><strong>Nyisd meg az Eltérő skálák mintát.</strong><p>Hasonlítsd össze a PCA irányát standardizálás előtt és után. A mértékegység befolyásolhatja az eredményt.</p></div></li>
          </ol>
        </section>

        <section class="depth reading-layer" aria-labelledby="pca-depth-title">
          <p class="eyebrow">Magyarázat</p>
          <h2 id="pca-depth-title">A PCA a központosított adatok varianciáját rendezi.</h2>
          <p>A modul először minden változóból levonja a saját átlagát, majd kiszámítja a kovarianciamátrixot. Ennek legnagyobb sajátértékéhez tartozó egységvektor az első főkomponens.</p>
          <div class="concept-grid">
            <div><p class="concept-label">Kovariancia és sajátvektor</p><h3>A maximum iránya</h3><p>A választott <em>u</em> egységvektoron a vetületi variancia <em>uᵀΣu</em>. Ennek maximuma λ₁, és a hozzá tartozó irány kielégíti a Σu₁ = λ₁u₁ egyenletet.</p></div>
            <div><p class="concept-label">Megmagyarázott variancia</p><h3>λⱼ / Σᵢλᵢ</h3><p>Az arány azt mutatja, hogy az összes, központosítás után mért varianciából mennyit őriz meg az adott komponens.</p></div>
          </div>
          <aside class="edge-case"><strong>A skála számít.</strong> A kovarianciaalapú PCA-ban a nagyobb mértékegységű változó dominálhat. A standardizálás ezt mérsékli, de nem automatikusan helyes döntés: a változók jelentése alapján kell választani.</aside>
          <aside class="edge-case pca-projection-note"><strong>A felső ábra kamerája.</strong> A nézetforgatás után a modul a perspektivikus <em>s = f / (f + zᵥ)</em>, <em>(X,Y) = (s·xᵥ, s·yᵥ)</em> leképezést használja. Ez csak a rajzot módosítja; a kovarianciamátrixot az adatokból számítjuk.</aside>
          <div class="knowledge-check" data-quiz>
            <p class="concept-label">Ellenőrző kérdés</p>
            <h3>Ugyanazt a változót centiméter helyett milliméterben adod meg, standardizálás nélkül. Mi történhet?</h3>
            <div class="answer-grid">
              <button type="button" data-answer="wrong">A PCA iránya biztosan változatlan marad.</button>
              <button type="button" data-answer="right">A PCA iránya elfordulhat a nagyobb számskála felé.</button>
              <button type="button" data-answer="wrong">Csak az átlag változik, a kovariancia nem.</button>
            </div>
            <p class="quiz-feedback" data-quiz-feedback aria-live="polite"></p>
          </div>
        </section>
      </article>`,this.cloudCanvas=t.querySelector("[data-pca-cloud]")??void 0,this.projectionCanvas=t.querySelector("[data-pca-projection]")??void 0,this.bindControls(),this.resizeObserver=new ResizeObserver(()=>this.draw()),this.cloudCanvas&&this.resizeObserver.observe(this.cloudCanvas),this.projectionCanvas&&this.resizeObserver.observe(this.projectionCanvas),window.addEventListener("keydown",this.onKeyDown),this.update()}destroy(){var t;(t=this.resizeObserver)==null||t.disconnect(),window.removeEventListener("keydown",this.onKeyDown),this.root=void 0,this.cloudCanvas=void 0,this.projectionCanvas=void 0,this.drag=void 0}bindControls(){var t,e,s,a,i,o;this.root&&(this.root.querySelectorAll("[data-pca-preset]").forEach(n=>{n.addEventListener("click",()=>this.loadPreset(n.dataset.pcaPreset??"ellipse"))}),(t=this.root.querySelector("#pca-azimuth"))==null||t.addEventListener("input",n=>{this.azimuth=Number(n.target.value),this.update()}),(e=this.root.querySelector("#pca-elevation"))==null||e.addEventListener("input",n=>{this.elevation=Number(n.target.value),this.update()}),(s=this.root.querySelector("[data-standardize]"))==null||s.addEventListener("change",n=>{this.standardized=n.target.checked,this.update()}),(a=this.root.querySelector("[data-centered-view]"))==null||a.addEventListener("change",n=>{this.centeredView=n.target.checked,this.update()}),(i=this.root.querySelector("[data-action='pca-direction']"))==null||i.addEventListener("click",()=>this.usePcaDirection()),(o=this.root.querySelector("[data-action='reset-view']"))==null||o.addEventListener("click",()=>this.resetView()),this.root.querySelectorAll("[data-answer]").forEach(n=>{n.addEventListener("click",()=>{var c,h;const r=n.dataset.answer==="right";(c=this.root)==null||c.querySelectorAll("[data-answer]").forEach(p=>p.classList.remove("is-correct","is-wrong")),n.classList.add(r?"is-correct":"is-wrong");const d=(h=this.root)==null?void 0:h.querySelector("[data-quiz-feedback]");d&&(d.textContent=r?"Helyes. A mértékegység a kovarianciát, így a főirányt is megváltoztathatja. A modult teljesítetted.":"Gondold végig, mi történik a szórással, ha egy koordináta minden értékét tízzel szorzod."),r&&this.context.onComplete()})}),this.bindCloudDrag())}bindCloudDrag(){if(!this.cloudCanvas)return;this.cloudCanvas.addEventListener("pointerdown",e=>{var s,a;e.pointerType==="mouse"&&e.button!==0||(this.drag={pointerId:e.pointerId,x:e.clientX,y:e.clientY},(s=this.cloudCanvas)==null||s.setPointerCapture(e.pointerId),(a=this.cloudCanvas)==null||a.classList.add("is-rotating"))}),this.cloudCanvas.addEventListener("pointermove",e=>{if(!this.drag||e.pointerId!==this.drag.pointerId)return;const s=e.clientX-this.drag.x,a=e.clientY-this.drag.y;this.drag.x=e.clientX,this.drag.y=e.clientY,this.viewYaw+=s*.009,this.viewPitch=ct(this.viewPitch+a*.009,-1.25,1.25),this.drawCloud()});const t=e=>{var s,a;!this.drag||e.pointerId!==this.drag.pointerId||((s=this.cloudCanvas)==null||s.releasePointerCapture(e.pointerId),(a=this.cloudCanvas)==null||a.classList.remove("is-rotating"),this.drag=void 0)};this.cloudCanvas.addEventListener("pointerup",t),this.cloudCanvas.addEventListener("pointercancel",t)}loadPreset(t){var a,i,o;this.points=O[t].make(),this.standardized=!1,this.centeredView=!0,this.azimuth=O[t].start.azimuth,this.elevation=O[t].start.elevation;const e=(a=this.root)==null?void 0:a.querySelector("[data-standardize]"),s=(i=this.root)==null?void 0:i.querySelector("[data-centered-view]");e&&(e.checked=!1),s&&(s.checked=!0),(o=this.root)==null||o.querySelectorAll("[data-pca-preset]").forEach(n=>{const r=n.dataset.pcaPreset===t;n.classList.toggle("is-active",r),n.setAttribute("aria-pressed",String(r))}),this.update()}usePcaDirection(){const t=gs(this.model.components[0]);this.azimuth=t.azimuth,this.elevation=t.elevation,this.update()}resetView(){this.viewYaw=-.62,this.viewPitch=.42,this.drawCloud()}currentDirection(t){return ms(this.azimuth,this.elevation,t.dimensions)}update(){var h,p,u;if(!this.root)return;const t=this.model,e=this.currentDirection(t),s=ee(this.points,t,e),a=t.explainedVarianceRatios[0]??0,i=t.eigenvalues[0]>0?s.variance/t.eigenvalues[0]:0,o=(t.explainedVarianceRatios[0]??0)+(t.explainedVarianceRatios[1]??0),n=(g,v)=>{var k;const b=(k=this.root)==null?void 0:k.querySelector(g);b&&(b.textContent=v)};n("[data-azimuth-output]",`${Y(this.azimuth,Math.abs(this.azimuth%1)>.01?1:0)}°`),n("[data-elevation-output]",`${Y(this.elevation,Math.abs(this.elevation%1)>.01?1:0)}°`),n("[data-project-variance]",Y(s.variance,3)),n("[data-explained-ratio]",nt(s.explainedVarianceRatio)),n("[data-pca-maximum]",nt(a)),n("[data-two-components]",t.dimensions>1?nt(o):"—"),n("[data-projection-width]",`σ = ${Y(Math.sqrt(s.variance),2)}`),n("[data-dimension-badge]",`${t.dimensions}D adat`),n("[data-direction-vector]",`u = (${e.map(g=>Y(g,2)).join("; ")})`),n("[data-summary]",`${this.points.length} szintetikus pont · ${this.standardized?"központosítva és standardizálva":"központosítva"} · az aktuális irány a PCA-maximum ${nt(i)}-át éri el.`);const r=this.root.querySelector("[data-observation]");if(r){const g=i>=.9995?{title:"Ez az első főkomponens iránya.",body:"A vetületi variancia eléri a kovarianciamátrix legnagyobb sajátértékét."}:i>=.92?{title:"Közel jársz a maximumhoz.",body:"Finomítsd a szögeket, vagy ellenőrizd az eredményt a PCA iránya gombbal."}:{title:"Van szélesebb vetület.",body:"Fordítsd a tengelyt a felhő nagyobb kiterjedésének irányába."};r.innerHTML=`<p class="control-label">AKTUÁLIS EREDMÉNY</p><strong>${g.title}</strong><p>${g.body}</p>`}const d=this.root.querySelector("#pca-azimuth"),c=this.root.querySelector("#pca-elevation");d&&(d.value=String(this.azimuth)),c&&(c.value=String(this.elevation)),(h=this.root.querySelector(".pca-elevation-control"))==null||h.toggleAttribute("hidden",t.dimensions===2),(p=this.cloudCanvas)==null||p.setAttribute("aria-label",`${t.dimensions} dimenziós, ${this.points.length} pontos felhő. A választott vetület az összvariancia ${nt(s.explainedVarianceRatio)}-át őrzi meg.`),(u=this.projectionCanvas)==null||u.setAttribute("aria-label",`${this.points.length} pont egydimenziós vetülete. Variancia: ${Y(s.variance,3)}.`),this.draw(t,s.values,e)}draw(t=this.model,e,s){const a=s??this.currentDirection(t),i=e??ee(this.points,t,a).values;this.drawCloud(t,a),this.drawProjection(i)}displayPoints(t){return this.centeredView?t.transformed:this.points.map(e=>e.map((s,a)=>s/t.scales[a]))}cameraProject(t,e,s,a){const i=(t[0]??0)/a,o=(t[1]??0)/a,n=(t[2]??0)/a,r=Math.cos(this.viewYaw),d=Math.sin(this.viewYaw),c=r*i+d*n,h=-d*i+r*n,p=Math.cos(this.viewPitch),u=Math.sin(this.viewPitch),g=p*o-u*h,v=u*o+p*h,b=3.2,k=b/(b+v),y=Math.min(e,s)*.36;return{x:e/2+c*y*k,y:s/2-g*y*k,depth:v,scale:k}}drawCloud(t=this.model,e=this.currentDirection(t)){if(!this.cloudCanvas)return;const s=this.cloudCanvas.getContext("2d");if(!s)return;const{width:a,height:i}=T(this.cloudCanvas);s.clearRect(0,0,a,i),s.fillStyle="#f4f1e8",s.fillRect(0,0,a,i),N(s,a,i,24);const o=this.displayPoints(t).map(b=>t.dimensions===2?[b[0],b[1],0]:b),n=this.centeredView?[0,0,0]:[...t.mean.map((b,k)=>b/t.scales[k]),0,0].slice(0,3),r=Math.max(.5,...o.flatMap(b=>b.map(Math.abs)),...n.map(Math.abs)),d=this.cameraProject([0,0,0],a,i,r),c=[{vector:[r*.92,0,0],label:"x₁"},{vector:[0,r*.92,0],label:"x₂"},...t.dimensions===3?[{vector:[0,0,r*.92],label:"x₃"}]:[]];s.save(),s.strokeStyle="rgba(18, 32, 63, .34)",s.fillStyle="rgba(18, 32, 63, .7)",s.lineWidth=1,s.font="11px IBM Plex Mono, monospace",c.forEach(b=>{const k=this.cameraProject(b.vector,a,i,r);s.beginPath(),s.moveTo(d.x,d.y),s.lineTo(k.x,k.y),s.stroke(),s.fillText(b.label,k.x+4,k.y-4)}),s.restore();const h=t.dimensions===2?[e[0],e[1],0]:e,p=this.cameraProject(h.map((b,k)=>(n[k]??0)-b*r),a,i,r),u=this.cameraProject(h.map((b,k)=>(n[k]??0)+b*r),a,i,r);s.save(),s.strokeStyle="#d84429",s.lineWidth=2.6,s.beginPath(),s.moveTo(p.x,p.y),s.lineTo(u.x,u.y),s.stroke();const g=Math.atan2(u.y-p.y,u.x-p.x);s.fillStyle="#d84429",s.beginPath(),s.moveTo(u.x,u.y),s.lineTo(u.x-11*Math.cos(g-.42),u.y-11*Math.sin(g-.42)),s.lineTo(u.x-11*Math.cos(g+.42),u.y-11*Math.sin(g+.42)),s.closePath(),s.fill(),s.restore(),o.map((b,k)=>({...this.cameraProject(b,a,i,r),index:k})).sort((b,k)=>k.depth-b.depth).forEach(b=>{const k=ct(3.6*b.scale,2.6,5.6);s.beginPath(),s.arc(b.x,b.y,k,0,Math.PI*2),s.fillStyle=b.index%4===0?"rgba(216, 68, 41, .82)":"rgba(30, 103, 184, .78)",s.fill(),s.strokeStyle="rgba(244, 241, 232, .92)",s.lineWidth=1,s.stroke()});const v=this.cameraProject(n,a,i,r);s.save(),s.strokeStyle="#12203f",s.lineWidth=1.5,s.beginPath(),s.moveTo(v.x-7,v.y),s.lineTo(v.x+7,v.y),s.moveTo(v.x,v.y-7),s.lineTo(v.x,v.y+7),s.stroke(),s.restore()}drawProjection(t){if(!this.projectionCanvas)return;const e=this.projectionCanvas.getContext("2d");if(!e)return;const{width:s,height:a}=T(this.projectionCanvas);e.clearRect(0,0,s,a),e.fillStyle="#f4f1e8",e.fillRect(0,0,s,a);const i=30,o=a/2,n=Math.max(.2,...t.map(Math.abs)),r=u=>i+(u/n+1)/2*(s-i*2);e.save(),e.strokeStyle="rgba(18, 32, 63, .36)",e.lineWidth=1,e.beginPath(),e.moveTo(i,o),e.lineTo(s-i,o),e.stroke();const d=r(0);e.strokeStyle="rgba(18, 32, 63, .2)",e.setLineDash([3,4]),e.beginPath(),e.moveTo(d,18),e.lineTo(d,a-18),e.stroke(),e.restore();const c=Math.sqrt(t.length>1?t.reduce((u,g)=>u+g**2,0)/(t.length-1):0);e.save(),e.strokeStyle="#d84429",e.fillStyle="rgba(216, 68, 41, .1)";const h=r(-c),p=r(c);e.fillRect(h,o-22,p-h,44),e.beginPath(),e.moveTo(h,o-27),e.lineTo(h,o+27),e.moveTo(p,o-27),e.lineTo(p,o+27),e.stroke(),e.restore(),t.forEach((u,g)=>{const v=(g*17%9-4)*4.4;e.beginPath(),e.arc(r(u),o+v,3.7,0,Math.PI*2),e.fillStyle=g%4===0?"rgba(216, 68, 41, .8)":"rgba(30, 103, 184, .72)",e.fill(),e.strokeStyle="rgba(244, 241, 232, .9)",e.lineWidth=.9,e.stroke()})}}function Dt(l){return Math.max(0,Math.min(1,l))}function ht(l,t){return t===0?null:l/t}function fs(l,t,e,s){return t<=1?.5:(l*e+s)%t/(t-1)}function Q(l,t,e,s,a,i,o){return Array.from({length:e},(n,r)=>({id:`${l}-${String(r+1).padStart(4,"0")}`,truth:t,score:s+(a-s)*fs(r,e,i,o)}))}function zs(){return[...Q("rare-positive",1,10,.42,.74,7,3),...Q("rare-negative",0,990,.02,.62,487,113)]}function ws(){return[...Q("overlap-positive",1,72,.3,.88,37,9),...Q("overlap-negative",0,168,.08,.72,101,21)]}function xs(){return[...Q("separated-positive",1,80,.66,.96,43,7),...Q("separated-negative",0,120,.04,.42,73,19)]}const pt=[{id:"rare",title:"Ritka pozitív · 1%",summary:"1000 esetből 10 pozitív. A magas küszöb mindet negatívnak jelöli.",question:"Mit ér a 99%-os pontosság, ha egyetlen pozitív esetet sem talál meg?",defaultThreshold:.8,observations:zs()},{id:"overlap",title:"Átfedő csoportok · 30%",summary:"240 eset, egymásba érő pontszámokkal.",question:"Hol cserélődik fel a precision és a recall előnye?",defaultThreshold:.55,observations:ws()},{id:"separated",title:"Jól elkülönülő · 40%",summary:"200 eset, a két osztály között tiszta réssel.",question:"Miért marad több küszöbnél is hibátlan a tévesztési mátrix?",defaultThreshold:.5,observations:xs()}];function As(l,t){const e=Number.isFinite(t)?Dt(t):.5;return Dt(l.score)>=e}function Ae(l,t){const e=As(l,t);return l.truth===1?e?"tp":"fn":e?"fp":"tn"}function Ss(l,t){return l.reduce((e,s)=>(e[Ae(s,t)]+=1,e),{tp:0,tn:0,fp:0,fn:0})}function Ms(l){const t=l.tp+l.tn+l.fp+l.fn;return{accuracy:ht(l.tp+l.tn,t),precision:ht(l.tp,l.tp+l.fp),recall:ht(l.tp,l.tp+l.fn),f1:ht(2*l.tp,2*l.tp+l.fp+l.fn)}}function js(l){const t=l.filter(r=>r.truth===1).length,e=l.length-t;if(t===0||e===0)return{points:[{threshold:Number.POSITIVE_INFINITY,falsePositiveRate:0,truePositiveRate:0},{threshold:Number.NEGATIVE_INFINITY,falsePositiveRate:1,truePositiveRate:1}],auc:null};const s=l.map(r=>({truth:r.truth,score:Dt(r.score)})).sort((r,d)=>d.score-r.score),a=[{threshold:Number.POSITIVE_INFINITY,falsePositiveRate:0,truePositiveRate:0}];let i=0,o=0;for(let r=0;r<s.length;){const d=s[r].score;let c=r;for(;c<s.length&&s[c].score===d;)s[c].truth===1?i+=1:o+=1,c+=1;a.push({threshold:d,falsePositiveRate:o/e,truePositiveRate:i/t}),r=c}let n=0;for(let r=1;r<a.length;r+=1){const d=a[r-1],c=a[r];n+=(c.falsePositiveRate-d.falsePositiveRate)*(d.truePositiveRate+c.truePositiveRate)/2}return{points:a,auc:n}}function X(l){return l===null?"—":`${(l*100).toFixed(1).replace(".0","")}%`}function $s(l){return l.id==="rare"?"1%":l.id==="overlap"?"↔":"✓"}function Ps(l,t){let e=Math.imul(l+1+t,73244475);return e=Math.imul(e^e>>>16,73244475),e^=e>>>16,(e>>>0)/4294967295}class Ts{constructor(t){m(this,"context");m(this,"root");m(this,"canvas");m(this,"preset",pt[0]);m(this,"threshold",pt[0].defaultThreshold);m(this,"resizeObserver");this.context=t}mount(t){this.root=t,t.innerHTML=`
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
            ${pt.map((e,s)=>`
              <button class="preset ${s===0?"is-active":""}" type="button" data-evaluation-preset="${e.id}" aria-pressed="${s===0}">
                <span class="preset-mark preset-custom evaluation-preset-mark" aria-hidden="true">${$s(e)}</span>
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
      </article>`,this.canvas=t.querySelector("[data-outcome-canvas]")??void 0,this.bindControls(),this.canvas&&(this.resizeObserver=new ResizeObserver(()=>this.draw()),this.resizeObserver.observe(this.canvas)),this.update()}destroy(){var t;(t=this.resizeObserver)==null||t.disconnect(),this.root=void 0,this.canvas=void 0}bindControls(){var t,e,s;this.root&&((t=this.root.querySelector("#evaluation-threshold"))==null||t.addEventListener("input",a=>{this.threshold=Number(a.target.value)/100,this.update()}),this.root.querySelectorAll("[data-evaluation-preset]").forEach(a=>{a.addEventListener("click",()=>{var n,r;const i=pt.find(d=>d.id===a.dataset.evaluationPreset);if(!i)return;this.preset=i,this.threshold=i.defaultThreshold;const o=(n=this.root)==null?void 0:n.querySelector("#evaluation-threshold");o&&(o.value=String(Math.round(this.threshold*100))),(r=this.root)==null||r.querySelectorAll("[data-evaluation-preset]").forEach(d=>{const c=d===a;d.classList.toggle("is-active",c),d.setAttribute("aria-pressed",String(c))}),this.update()})}),(e=this.root.querySelector("[data-action='all-negative']"))==null||e.addEventListener("click",()=>{var i;this.threshold=1;const a=(i=this.root)==null?void 0:i.querySelector("#evaluation-threshold");a&&(a.value="100"),this.update()}),(s=this.root.querySelector("[data-action='reset-threshold']"))==null||s.addEventListener("click",()=>{var i;this.threshold=this.preset.defaultThreshold;const a=(i=this.root)==null?void 0:i.querySelector("#evaluation-threshold");a&&(a.value=String(Math.round(this.threshold*100))),this.update()}),this.root.querySelectorAll("[data-answer]").forEach(a=>{a.addEventListener("click",()=>{var n,r;const i=a.dataset.answer==="right";(n=this.root)==null||n.querySelectorAll("[data-answer]").forEach(d=>d.classList.remove("is-correct","is-wrong")),a.classList.add(i?"is-correct":"is-wrong");const o=(r=this.root)==null?void 0:r.querySelector("[data-quiz-feedback]");o&&(o.textContent=i?"Helyes. A sok valódi negatív elfedi, hogy a modell mind a 10 pozitív esetet kihagyta. A modult teljesítetted.":"Nézd meg külön az FN mezőt és a recall nevezőjét."),i&&this.context.onComplete()})}))}update(){var n;const t=Ss(this.preset.observations,this.threshold),e=Ms(t),s=t.tp+t.fp,a=t.tp+t.fn,i=(r,d)=>{var h;const c=(h=this.root)==null?void 0:h.querySelector(r);c&&(c.textContent=String(d))};i("[data-threshold-output]",`${Math.round(this.threshold*100)}%`),i("[data-tp]",t.tp),i("[data-tn]",t.tn),i("[data-fp]",t.fp),i("[data-fn]",t.fn),i("[data-accuracy]",X(e.accuracy)),i("[data-precision]",X(e.precision)),i("[data-recall]",X(e.recall)),i("[data-f1]",X(e.f1)),i("[data-summary]",`${this.preset.observations.length} szintetikus eset · ${a} valós pozitív · ${s} pozitív jelzés a mostani küszöbnél.`);const o=(n=this.root)==null?void 0:n.querySelector("[data-observation]");o&&(s===0&&this.preset.id==="rare"?o.innerHTML='<p class="control-label">A pontosság csapdája</p><strong>99% accuracy, 0% recall.</strong><p>A modell a 990 negatív esetet eltalálja, de mind a 10 pozitív esetet kihagyja. Precision nincs, mert nem adott pozitív jelzést.</p>':s===0?o.innerHTML='<p class="control-label">Aktuális eredmény</p><strong>Nincs pozitív jelzés.</strong><p>A precision nem értelmezhető, mert a modell egy esetet sem jelölt pozitívnak.</p>':(e.recall??0)<.5?o.innerHTML='<p class="control-label">Aktuális eredmény</p><strong>A pozitív esetek többsége kimarad.</strong><p>A küszöb lejjebb húzása növelheti a recallt, de az FP-k száma is változhat.</p>':(e.precision??0)<.5?o.innerHTML='<p class="control-label">Aktuális eredmény</p><strong>A pozitív jelzések többsége téves.</strong><p>A küszöb feljebb húzása csökkentheti az FP-k számát, de pozitív esetek maradhatnak ki.</p>':o.innerHTML=`<p class="control-label">Aktuális eredmény</p><strong>${t.tp} megtalált, ${t.fn} kihagyott pozitív.</strong><p>A küszöb megítéléséhez az FP és FN hibák következményét is ismerni kell.</p>`),this.updateRoc(t),this.draw()}updateRoc(t){var p,u,g,v,b;const e=js(this.preset.observations),s=k=>44+k*312,a=k=>226-k*208,i=e.points.map((k,y)=>`${y===0?"M":"L"}${s(k.falsePositiveRate).toFixed(2)} ${a(k.truePositiveRate).toFixed(2)}`).join(" ");(u=(p=this.root)==null?void 0:p.querySelector("[data-roc-path]"))==null||u.setAttribute("d",i);const o=t.fp+t.tn===0?0:t.fp/(t.fp+t.tn),n=t.tp+t.fn===0?0:t.tp/(t.tp+t.fn),r=(g=this.root)==null?void 0:g.querySelector("[data-roc-marker]");r==null||r.setAttribute("cx",String(s(o))),r==null||r.setAttribute("cy",String(a(n)));const d=e.auc===null?"—":e.auc.toFixed(3),c=(v=this.root)==null?void 0:v.querySelector("[data-auc]");c&&(c.textContent=d);const h=(b=this.root)==null?void 0:b.querySelector("[data-roc-description]");h&&(h.textContent=`AUC: ${d}. Az aktuális küszöbnél a téves pozitív arány ${X(o)}, a valódi pozitív arány ${X(n)}.`)}draw(){if(!this.canvas)return;const t=this.canvas.getContext("2d");if(!t)return;const{width:e,height:s}=T(this.canvas),a=44,i=e-18,o=26,n=s-40,r=o+(n-o)*.34,d=a+this.threshold*(i-a);t.clearRect(0,0,e,s),t.fillStyle="#f4f1e8",t.fillRect(0,0,e,s),N(t,e,s,20),t.save(),t.fillStyle="rgba(224, 69, 42, 0.055)",t.fillRect(a,o,Math.max(0,d-a),r-o),t.fillStyle="rgba(42, 157, 143, 0.075)",t.fillRect(d,o,Math.max(0,i-d),r-o),t.fillStyle="rgba(30, 79, 181, 0.045)",t.fillRect(a,r,Math.max(0,d-a),n-r),t.fillStyle="rgba(242, 193, 78, 0.11)",t.fillRect(d,r,Math.max(0,i-d),n-r),t.strokeStyle="rgba(18, 32, 63, 0.24)",t.lineWidth=1,t.beginPath(),t.moveTo(a,r),t.lineTo(i,r),t.stroke(),t.fillStyle="rgba(18, 32, 63, 0.62)",t.font='600 10px "IBM Plex Mono", monospace',t.fillText("VALÓS +",a+7,o+14),t.fillText("VALÓS −",a+7,r+16),d-a>72&&(t.fillText("FN",d-24,o+14),t.fillText("TN",d-24,r+16)),i-d>72&&(t.fillText("TP",d+8,o+14),t.fillText("FP",d+8,r+16)),t.restore();let c=0,h=0;const p=this.preset.observations.filter(b=>b.truth===1).length,u=this.preset.observations.length-p,g=this.preset.observations.length>500?2.1:3.2;this.preset.observations.forEach(b=>{const k=b.truth===1,y=k?c++:h++,j=k?p:u,f=k?o+22:r+22,z=k?r-8:n-8,S=j<=1?.5:Ps(y,k?17:193),w=a+b.score*(i-a),$=f+S*Math.max(1,z-f);this.drawOutcomePoint(t,w,$,Ae(b,this.threshold),g)}),t.save(),t.strokeStyle="#d84429",t.lineWidth=2,t.beginPath(),t.moveTo(d,o-2),t.lineTo(d,n+5),t.stroke();const v=Math.max(a+3,Math.min(i-64,d-30));t.fillStyle="#d84429",t.font='650 10px "IBM Plex Mono", monospace',t.fillText(`KÜSZÖB ${Math.round(this.threshold*100)}%`,v,n+20),t.fillStyle="rgba(18, 32, 63, 0.56)",t.font='500 9px "IBM Plex Mono", monospace',[0,.25,.5,.75,1].forEach(b=>{const k=a+b*(i-a);t.fillText(String(b),k-(b===1?5:7),s-8)}),t.restore()}drawOutcomePoint(t,e,s,a,i){t.save(),t.lineWidth=Math.max(1.2,i*.52),a==="tp"?(t.beginPath(),t.arc(e,s,i,0,Math.PI*2),t.fillStyle="rgba(23, 119, 108, 0.82)",t.fill()):a==="tn"?(t.fillStyle="rgba(30, 79, 181, 0.52)",t.fillRect(e-i,s-i,i*2,i*2)):a==="fp"?(t.beginPath(),t.moveTo(e,s-i*1.25),t.lineTo(e+i*1.15,s+i),t.lineTo(e-i*1.15,s+i),t.closePath(),t.strokeStyle="rgba(144, 112, 21, 0.88)",t.stroke()):(t.strokeStyle="rgba(216, 68, 41, 0.9)",t.beginPath(),t.moveTo(e-i,s-i),t.lineTo(e+i,s+i),t.moveTo(e+i,s-i),t.lineTo(e-i,s+i),t.stroke()),t.restore()}}const se={moons:{title:"Két hold",question:"Mekkora k mellett marad meg a keskeny rés?",make:()=>Yt()},xor:{title:"Kockás",question:"Miért nem lenne elég egyetlen egyenes?",make:()=>ve()},overlap:{title:"Átfedő",question:"Hol válik bizonytalanná a szavazás?",make:()=>be()}};class Es{constructor(t){m(this,"context");m(this,"root");m(this,"canvas");m(this,"points",Yt());m(this,"history",[]);m(this,"currentLabel",0);m(this,"k",5);m(this,"pointer");m(this,"drawing",!1);m(this,"lastDrawn");m(this,"touchDrawingEnabled",!1);m(this,"tapCandidate");m(this,"resizeObserver");m(this,"onKeyDown",t=>{var e;!((e=this.root)!=null&&e.isConnected)||t.target.closest("button, a, input, select, textarea, summary, [contenteditable='true']")||((t.key==="1"||t.key==="2")&&(this.currentLabel=Number(t.key)-1,this.syncClassControls()),(t.ctrlKey||t.metaKey)&&t.key.toLowerCase()==="z"&&(t.preventDefault(),this.undo()))});this.context=t}mount(t){this.root=t,t.innerHTML=`
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
            ${Object.entries(se).map(([e,s],a)=>`
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
      </article>`,this.canvas=t.querySelector("canvas.data-canvas")??void 0,this.bindControls(),this.canvas&&(this.resizeObserver=new ResizeObserver(()=>this.draw()),this.resizeObserver.observe(this.canvas)),this.update()}destroy(){var t;(t=this.resizeObserver)==null||t.disconnect(),window.removeEventListener("keydown",this.onKeyDown),this.root=void 0,this.canvas=void 0}bindControls(){var s,a,i,o;if(!this.root||!this.canvas)return;this.root.querySelectorAll("[data-preset]").forEach(n=>{n.addEventListener("click",()=>{var d;const r=n.dataset.preset??"moons";this.points=r==="custom"?[]:se[r].make(),this.history=[],(d=this.root)==null||d.querySelectorAll("[data-preset]").forEach(c=>{const h=c===n;c.classList.toggle("is-active",h),c.setAttribute("aria-pressed",String(h))}),this.update()})}),this.root.querySelectorAll("[data-class]").forEach(n=>{n.addEventListener("click",()=>{this.currentLabel=Number(n.dataset.class??0),this.syncClassControls()})});const t=this.root.querySelector("#knn-k");t==null||t.addEventListener("input",()=>{this.k=Number(t.value),this.update()}),(s=this.root.querySelector("[data-action='undo']"))==null||s.addEventListener("click",()=>this.undo()),(a=this.root.querySelector("[data-action='clear']"))==null||a.addEventListener("click",()=>{this.pushHistory(),this.points=[],this.update()}),(i=this.root.querySelector("[data-action='toggle-draw']"))==null||i.addEventListener("click",n=>{var c;this.touchDrawingEnabled=!this.touchDrawingEnabled;const r=n.currentTarget;r.setAttribute("aria-pressed",String(this.touchDrawingEnabled)),r.classList.toggle("is-active",this.touchDrawingEnabled);const d=r.querySelector("[data-draw-state]");d&&(d.textContent=this.touchDrawingEnabled?"be":"ki"),(c=this.canvas)==null||c.classList.toggle("is-touch-drawing",this.touchDrawingEnabled)}),(o=this.root.querySelector("[data-action='add-keyboard']"))==null||o.addEventListener("click",()=>{var c,h,p,u,g,v;const n=Number(((h=(c=this.root)==null?void 0:c.querySelector("[data-entry-x]"))==null?void 0:h.value)??.5),r=Number(((u=(p=this.root)==null?void 0:p.querySelector("[data-entry-y]"))==null?void 0:u.value)??.5),d=Number(((v=(g=this.root)==null?void 0:g.querySelector("[data-entry-label]"))==null?void 0:v.value)??0);this.pushHistory(),this.points.push({x:Math.max(0,Math.min(1,n)),y:Math.max(0,Math.min(1,r)),label:d}),this.update()}),this.canvas.addEventListener("pointerdown",n=>{var d;const r=R(this.canvas,n);if(n.pointerType!=="mouse"&&!this.touchDrawingEnabled){this.tapCandidate={point:r,clientX:n.clientX,clientY:n.clientY,moved:!1};return}this.drawing=!0,(d=this.canvas)==null||d.setPointerCapture(n.pointerId),this.pushHistory(),this.addPoint(r)}),this.canvas.addEventListener("pointermove",n=>{if(this.tapCandidate){Math.hypot(n.clientX-this.tapCandidate.clientX,n.clientY-this.tapCandidate.clientY)>9&&(this.tapCandidate.moved=!0);return}this.pointer=R(this.canvas,n),this.drawing?this.addPoint(this.pointer):this.draw()});const e=()=>{this.drawing=!1,this.lastDrawn=void 0};this.canvas.addEventListener("pointerup",()=>{this.tapCandidate&&(this.tapCandidate.moved||(this.pushHistory(),this.addPoint(this.tapCandidate.point)),this.tapCandidate=void 0),e()}),this.canvas.addEventListener("pointercancel",()=>{this.tapCandidate=void 0,e()}),this.canvas.addEventListener("pointerleave",()=>{this.pointer=void 0,this.tapCandidate=void 0,e(),this.draw()}),window.addEventListener("keydown",this.onKeyDown),this.root.querySelectorAll("[data-answer]").forEach(n=>{n.addEventListener("click",()=>{var c,h;const r=n.dataset.answer==="right";(c=this.root)==null||c.querySelectorAll("[data-answer]").forEach(p=>p.classList.remove("is-correct","is-wrong")),n.classList.add(r?"is-correct":"is-wrong");const d=(h=this.root)==null?void 0:h.querySelector("[data-quiz-feedback]");d&&(d.textContent=r?"Helyes. A nagyobb k több szomszéd címkéjét veszi figyelembe, ezért kisebb az egyetlen hibás címke hatása. A modult teljesítetted.":"A k értéke határozza meg, hány tanítópont vesz részt a besorolásban."),r&&this.context.onComplete()})})}syncClassControls(){var t;(t=this.root)==null||t.querySelectorAll("[data-class]").forEach(e=>{const s=Number(e.dataset.class)===this.currentLabel;e.classList.toggle("is-active",s),e.setAttribute("aria-pressed",String(s))})}pushHistory(){this.history.push(this.points.map(t=>({...t}))),this.history.length>30&&this.history.shift()}undo(){const t=this.history.pop();t&&(this.points=t,this.update())}addPoint(t){this.lastDrawn&&(this.lastDrawn.x-t.x)**2+(this.lastDrawn.y-t.y)**2<.0012||this.points.length>=320||(this.points.push({...t,label:this.currentLabel}),this.lastDrawn=t,this.update())}update(){const t=this.points.filter(i=>i.label===0).length,e=this.points.filter(i=>i.label===1).length,s=(i,o)=>{var r;const n=(r=this.root)==null?void 0:r.querySelector(i);n&&(n.textContent=o)};s("[data-count-a]",String(t)),s("[data-count-b]",String(e)),s("[data-k-output]",String(this.k)),s("[data-k-metric]",this.points.length<this.k?`${this.k} (${this.points.length} elérhető)`:String(this.k));const a=t>0&&e>0?"A háttér minden helyen a helyi többség döntését mutatja.":"A döntési háttér két osztály pontjai után jelenik meg.";s("[data-summary]",`${this.points.length} tanítópont · ${t} kör · ${e} négyzet. ${a}`),this.draw()}draw(){var o;if(!this.canvas)return;const t=this.canvas.getContext("2d");if(!t)return;const{width:e,height:s}=T(this.canvas);if(t.clearRect(0,0,e,s),t.fillStyle="#f4f1e8",t.fillRect(0,0,e,s),this.points.some(n=>n.label===0)&&this.points.some(n=>n.label===1)){const r=Math.max(1,e-40),d=Math.max(1,s-40),c=Math.max(20,Math.min(42,Math.round(r/16))),h=Math.max(20,Math.round(c*d/r)),p=r/c,u=d/h;for(let g=0;g<h;g+=1)for(let v=0;v<c;v+=1){const b={x:(v+.5)/c,y:(g+.5)/h},k=Xt(this.points,b,this.k);t.fillStyle=k.label===0?"rgba(224, 69, 42, 0.095)":"rgba(30, 79, 181, 0.1)",t.fillRect(20+v*p,20+g*u,p+.6,u+.6)}}N(t,e,s);let a;if(this.pointer&&this.points.length>0){a=Xt(this.points,this.pointer,this.k);const[n,r]=M(this.pointer,e,s);t.save(),t.strokeStyle="rgba(18, 32, 63, 0.22)",t.setLineDash([3,4]),a.neighbors.forEach(c=>{const[h,p]=M(c,e,s);t.beginPath(),t.moveTo(n,r),t.lineTo(h,p),t.stroke()});const d=a.neighbors.reduce((c,h)=>Math.max(c,Math.sqrt((h.x-this.pointer.x)**2+(h.y-this.pointer.y)**2)),0);t.beginPath(),t.strokeStyle=a.label===0?"rgba(184, 50, 30, .68)":"rgba(30, 79, 181, .68)",t.setLineDash([]),t.ellipse(n,r,d*(e-40),d*(s-40),0,0,Math.PI*2),t.stroke(),t.restore()}if(this.points.forEach(n=>{const[r,d]=M(n,e,s);wt(t,r,d,n.label??0,4.7)}),this.pointer){const[n,r]=M(this.pointer,e,s);t.save(),t.beginPath(),t.arc(n,r,7,0,Math.PI*2),t.strokeStyle="#12203f",t.lineWidth=1.5,t.stroke(),t.restore()}const i=(o=this.root)==null?void 0:o.querySelector("[data-observation]");if(i)if(!a)i.innerHTML='<p class="control-label">Aktuális pont</p><strong>Vidd a mutatót az ábrára.</strong><p>A modul megjelöli a k legközelebbi tanítópontot.</p>';else{const n=a.neighbors.filter(d=>d.label===0).length,r=a.neighbors.length-n;i.innerHTML=`<p class="control-label">Aktuális pont</p><strong>Becsült osztály: ${a.label===0?"A":"B"}.</strong><p>A legközelebbi szomszédok között ${n} A és ${r} B címke van. A ${Math.round(a.confidence*100)}% többségi arány, nem kalibrált valószínűség.</p>`}}}const J=1e-12;function ae(l){return Math.max(.025,Math.min(.975,l))}function At(l){const t=l.x*2-1,e=l.y*2-1;return{x1:t,x2:e,z:t*t+e*e}}function Se(l,t,e){return At(l).z<=t?e:e===0?1:0}function Kt(l,t,e){const s=l.map(c=>At(c).z),a=s.filter(c=>c<=t),i=s.filter(c=>c>t),o=a.length>0&&i.length>0,n=o?Math.min(...s.map(c=>Math.abs(c-t))):0,r=n<=J||!o?[]:s.flatMap((c,h)=>Math.abs(Math.abs(c-t)-n)<=1e-9?[h]:[]),d=l.reduce((c,h)=>c+(Se(h,t,e)===h.label?0:1),0);return{threshold:t,innerLabel:e,outerLabel:e===0?1:0,errorCount:d,accuracy:l.length===0?0:1-d/l.length,hasBothSides:o,margin:n,lowerMargin:Math.max(0,t-n),upperMargin:Math.min(2,t+n),supportIndices:r}}function ie(l){if(l.length<2||!l.some(s=>s.label===0)||!l.some(s=>s.label===1))return;const t=[...new Set(l.map(s=>At(s).z))].sort((s,a)=>s-a);if(t.length<2)return;let e;for(let s=0;s<t.length-1;s+=1){const a=t[s]+(t[s+1]-t[s])/2;[0,1].forEach(i=>{const o=Kt(l,a,i);if(!o.hasBothSides)return;(!e||o.errorCount<e.errorCount||o.errorCount===e.errorCount&&o.margin>e.margin+J||o.errorCount===e.errorCount&&Math.abs(o.margin-e.margin)<=J&&o.threshold<e.threshold-J||o.errorCount===e.errorCount&&Math.abs(o.margin-e.margin)<=J&&Math.abs(o.threshold-e.threshold)<=J&&o.innerLabel<e.innerLabel)&&(e=o)})}return e?{...e,separable:e.errorCount===0}:void 0}function yt(l,t,e,s,a){return Array.from({length:e},()=>{const i=l()*Math.PI*2,o=s*s+l()*(a*a-s*s),n=Math.sqrt(o);return{x:ae(.5+Math.cos(i)*n/2),y:ae(.5+Math.sin(i)*n/2),label:t}})}function Me(l=404,t=96){const e=A(l),s=Math.max(0,Math.floor(t)),a=Math.floor(s/2);return[...yt(e,0,a,.08,.43),...yt(e,1,s-a,.67,.96)]}function Cs(l=405,t=96){const e=A(l),s=Math.max(0,Math.floor(t)),a=Math.floor(s/2),i=[...yt(e,0,a,.08,.66),...yt(e,1,s-a,.5,.98)],o=Math.min(7,a-1),n=s-a,r=a+Math.min(9,n-1);return o>=0&&(i[o]={...i[o],label:1}),n>0&&(i[r]={...i[r],label:0}),i}function qs(l=406,t=96){const e=A(l);return Array.from({length:Math.max(0,Math.floor(t))},()=>{const s=.07+e()*.86,a=.07+e()*.86,i=s<=.5&&a<=.5||s>.5&&a>.5;return{x:s,y:a,label:i?0:1}})}function ne(l,t){return l==="rings"?Me(t):l==="noisy-rings"?Cs(t):qs(t)}const Ls=[{key:"rings",title:"Kör a körben",question:"Lesz-e hibátlan sík?",icon:'<svg viewBox="0 0 54 42" width="54" height="42" aria-hidden="true"><circle cx="27" cy="21" r="15" fill="none" stroke="#1e67b8" stroke-width="2"/><circle cx="27" cy="21" r="5" fill="#d84429"/><circle cx="13" cy="21" r="2" fill="#1e67b8"/><circle cx="39" cy="14" r="2" fill="#1e67b8"/></svg>'},{key:"noisy-rings",title:"Zajos gyűrű",question:"Mit tart a margó?",icon:'<svg viewBox="0 0 54 42" width="54" height="42" aria-hidden="true"><circle cx="27" cy="21" r="14" fill="none" stroke="#1e67b8" stroke-width="2" stroke-dasharray="3 3"/><circle cx="27" cy="21" r="5" fill="#d84429"/><circle cx="19" cy="9" r="2.4" fill="#d84429"/><rect x="30" y="18" width="4.8" height="4.8" fill="#1e67b8"/></svg>'},{key:"xor",title:"Kockás (XOR)",question:"Elég a sugár?",icon:'<svg viewBox="0 0 54 42" width="54" height="42" aria-hidden="true"><circle cx="15" cy="11" r="3" fill="#d84429"/><rect x="36" y="8" width="6" height="6" fill="#1e67b8"/><rect x="12" y="28" width="6" height="6" fill="#1e67b8"/><circle cx="39" cy="31" r="3" fill="#d84429"/><path d="M27 3V39M6 21H48" stroke="#12203f" stroke-opacity=".2"/></svg>'},{key:"custom",title:"Saját rajz",question:"Építs mintát üres vásznon.",icon:'<span class="preset-mark preset-custom" aria-hidden="true">＋</span>'}];function F(l,t=2){return l.toFixed(t).replace(".",",")}function ot(l){return l===0?"A":"B"}class Is{constructor(t){m(this,"context");m(this,"root");m(this,"canvas");m(this,"resizeObserver");m(this,"points",Me());m(this,"history",[]);m(this,"activePreset","rings");m(this,"currentLabel",0);m(this,"lift",0);m(this,"threshold",.36);m(this,"innerLabel",0);m(this,"automaticThreshold",!0);m(this,"drawing",!1);m(this,"lastDrawn");m(this,"touchDrawingEnabled",!1);m(this,"tapCandidate");m(this,"onKeyDown",t=>{if(!this.root)return;const e=t.target;e!=null&&e.matches("input, select, textarea")||((t.key==="1"||t.key==="2")&&(this.currentLabel=t.key==="1"?0:1,this.lift=0,this.syncClassControls(),this.update()),this.context.presentMode&&t.code==="Space"&&(t.preventDefault(),this.lift=this.lift<.5?1:0,this.update()),this.context.presentMode&&t.key.toLowerCase()==="r"&&(this.points=this.activePreset==="custom"?[]:ne(this.activePreset),this.history=[],this.lift=0,this.threshold=.36,this.innerLabel=0,this.automaticThreshold=!0,this.applyBestThreshold(),this.update()))});this.context=t,this.applyBestThreshold()}mount(t){this.root=t,t.innerHTML=`
      <article class="module-page" data-module="kernel-svm">
        <header class="module-intro paper-header">
          <div class="module-index">04 <span>/ 12</span></div>
          <div>
            <p class="eyebrow">SVM · radiális feature map</p>
            <h1>Emeld fel a pontokat</h1>
            <p class="lede">A csúszka a síkbeli pontokat a z = x₁² + x₂² felületre emeli. A kör alakú döntési határ ekkor vízszintes síkként jelenik meg.</p>
          </div>
          <a class="present-link" href="?mode=present#/svm" aria-label="Kernelmodul megnyitása vetítés módban">Vetítés <span aria-hidden="true">↗</span></a>
        </header>

        <section class="workbench" aria-labelledby="kernel-workbench-title">
          <div class="workbench-topline">
            <div>
              <p class="section-number">INTERAKTÍV MUNKAPAD</p>
              <h2 id="kernel-workbench-title">Síkból emelt tér</h2>
            </div>
            <p class="workbench-instruction">Rajzolj A és B pontokat, majd emeld őket fel. A kitöltött sík a küszöb, a két szaggatott sík a szemléltetett margó széle.</p>
          </div>

          <div class="preset-strip" role="group" aria-label="Kernelmodul adatkészletének választása">
            ${Ls.map((e,s)=>`
              <button class="preset ${s===0?"is-active":""}" type="button" data-kernel-preset="${e.key}" aria-pressed="${s===0}">
                ${e.key==="custom"?e.icon:`<span class="preset-mark" aria-hidden="true">${e.icon}</span>`}
                <span><strong>${e.title}</strong><small>${e.question}</small></span>
              </button>`).join("")}
          </div>

          <div class="canvas-layout">
            <aside class="tool-column" aria-label="Pontok rajzolása">
              <p class="control-label">Pont osztálya</p>
              <button class="class-tool is-active" type="button" data-class="0" aria-pressed="true">
                <span class="shape shape-circle class-a" aria-hidden="true"></span><span>A osztály</span><kbd>1</kbd>
              </button>
              <button class="class-tool" type="button" data-class="1" aria-pressed="false">
                <span class="shape shape-square class-b" aria-hidden="true"></span><span>B osztály</span><kbd>2</kbd>
              </button>
              <button class="text-tool touch-draw-toggle" type="button" data-action="toggle-draw" aria-pressed="false"><span>Rajzolási mód</span><strong data-draw-state>ki</strong></button>
              <p class="tool-note">Kattints egy ponthoz, vagy tartsd lenyomva az egérgombot a folyamatos rajzoláshoz. A rajzolás sík nézetre vált.</p>
              <div class="tool-divider"></div>
              <button class="button button-ink" type="button" data-action="fit">Legjobb küszöb</button>
              <button class="text-tool" type="button" data-action="flip"><span>Belső osztály cseréje</span><strong data-inner-label>A</strong></button>
              <button class="text-tool" type="button" data-action="undo">Visszavonás</button>
              <button class="text-tool" type="button" data-action="clear">Pontok törlése</button>
            </aside>

            <div class="canvas-column">
              <div class="canvas-frame">
                <canvas class="data-canvas" aria-label="Kétosztályos pontfelhő radiális felemeléssel, küszöbsíkkal és margóval" role="img"></canvas>
              </div>
              <div class="canvas-legend" aria-label="Ábra jelmagyarázata">
                <span><i class="legend-circle" aria-hidden="true"></i>A osztály</span>
                <span><i class="legend-square" aria-hidden="true"></i>B osztály</span>
                <span><i class="legend-border" aria-hidden="true"></i>margót kijelölő pont</span>
                <span><i aria-hidden="true">×</i>téves besorolás</span>
              </div>
              <p class="canvas-summary" data-summary aria-live="polite"></p>
            </div>

            <aside class="parameter-column">
              <label class="range-control" for="kernel-lift">
                <span><strong>Radiális emelés</strong><output for="kernel-lift" data-lift-output>0%</output></span>
                <input id="kernel-lift" type="range" min="0" max="100" step="1" value="0" />
                <span class="range-ends"><small>sík</small><small>z = x₁² + x₂²</small></span>
              </label>
              <label class="range-control" for="kernel-threshold">
                <span><strong>Küszöb, c</strong><output for="kernel-threshold" data-threshold-output>0,36</output></span>
                <input id="kernel-threshold" type="range" min="0.02" max="1.98" step="0.01" value="0.36" />
                <span class="range-ends"><small>középpont</small><small>sarkok</small></span>
              </label>
              <div class="observation" data-observation aria-live="polite"></div>
              <dl class="metric-list">
                <div><dt>Tanítópontosság</dt><dd data-accuracy>—</dd></div>
                <div><dt>Hibás pont</dt><dd data-error-count>—</dd></div>
                <div><dt>Szemléltetett félmargó, Δz</dt><dd data-margin>—</dd></div>
                <div><dt>Küszöb módja</dt><dd data-threshold-mode>automatikus</dd></div>
              </dl>
            </aside>
          </div>

          <details class="keyboard-entry">
            <summary>Billentyűzetes pontbevitel</summary>
            <div class="keyboard-entry-fields">
              <label>x₁ koordináta <input type="number" min="-1" max="1" step="0.05" value="0" data-entry-x /></label>
              <label>x₂ koordináta <input type="number" min="-1" max="1" step="0.05" value="0" data-entry-y /></label>
              <label>osztály <select data-entry-label><option value="0">A — kör</option><option value="1">B — négyzet</option></select></label>
              <button class="button button-ink" type="button" data-action="add-keyboard">Pont hozzáadása</button>
            </div>
          </details>
        </section>

        <section class="experiments depth-shell" aria-labelledby="kernel-try-title">
          <div class="depth-kicker">Kísérletek</div>
          <h2 id="kernel-try-title">Három ellenőrzés ugyanazzal a leképezéssel</h2>
          <ol class="experiment-list">
            <li><span>01</span><div><strong>Emeld fel a Kör a körben készletet.</strong><p>A belső pontok alacsonyabb, a külsők magasabb z értéket kapnak. A kör alakú határ a küszöbsík metszete.</p></div></li>
            <li><span>02</span><div><strong>Válaszd a Zajos gyűrűt.</strong><p>A küszöb eltolása más pontokat hibázik el. A tökéletes elválasztás nem következik pusztán a dimenzió növeléséből.</p></div></li>
            <li><span>03</span><div><strong>Próbáld ki az XOR-készletet.</strong><p>Az azonos sugarú, de eltérő irányú pontok ugyanarra a z magasságra kerülhetnek. Ez a radiális feature map elveszíti az irány szerinti különbséget.</p></div></li>
          </ol>
        </section>

        <section class="depth reading-layer" aria-labelledby="kernel-depth-title">
          <p class="eyebrow">Magyarázat</p>
          <h2 id="kernel-depth-title">A nemlineáris körhatár lineáris küszöbbé válik a kibővített térben.</h2>
          <p>A síkban az x₁² + x₂² = c egy origó középpontú kör. Ha az x₁ és x₂ mellé felvesszük a z = x₁² + x₂² jellemzőt, ugyanaz a feltétel a z = c vízszintes síkkal írható le. A síkhoz legközelebbi pontokat az ábra külön körvonallal jelöli.</p>
          <div class="concept-grid">
            <div>
              <p class="concept-label">Feature map</p>
              <h3>Egy konkrét, explicit leképezés</h3>
              <p>A leképezés nem változtatja meg a címkéket. Új koordinátát képez a meglévő koordinátákból, amelyben egy radiális határ lineárisan leírható.</p>
            </div>
            <div class="formula" aria-label="fí x egy x kettő egyenlő x egy vessző x kettő vessző x egy négyzete plusz x kettő négyzete; a döntési sík z egyenlő c">
              <math display="block"><mi>φ</mi><mo>(</mo><msub><mi>x</mi><mn>1</mn></msub><mo>,</mo><msub><mi>x</mi><mn>2</mn></msub><mo>)</mo><mo>=</mo><mrow><mo>(</mo><msub><mi>x</mi><mn>1</mn></msub><mo>,</mo><msub><mi>x</mi><mn>2</mn></msub><mo>,</mo><msubsup><mi>x</mi><mn>1</mn><mn>2</mn></msubsup><mo>+</mo><msubsup><mi>x</mi><mn>2</mn><mn>2</mn></msubsup><mo>)</mo></mrow></math>
              <math display="block"><mi>z</mi><mo>=</mo><mi>c</mi></math>
            </div>
          </div>
          <aside class="edge-case"><strong>A modul határa.</strong> Ez egy szemléltető radiális feature map és egy z-küszöb illesztése, nem általános kernel-SVM implementáció. Egy valódi kernel-SVM a kernel által meghatározott belső szorzatokból optimalizál maximális margójú szeparátort; átfedő adathoz külön büntetési paramétert is használhat.</aside>
          <div class="knowledge-check" data-quiz>
            <p class="concept-label">Ellenőrző kérdés</p>
            <h3>Miért lesz a kör alakú x₁² + x₂² = c határból sík a megjelenített térben?</h3>
            <div class="answer-grid">
              <button type="button" data-answer="wrong">Mert bármely adathalmaz szeparálható egy új dimenzióval</button>
              <button type="button" data-answer="right">Mert a leképezésben z éppen x₁² + x₂², ezért a határ z = c</button>
              <button type="button" data-answer="wrong">Mert az emelés megváltoztatja a pontok osztálycímkéjét</button>
            </div>
            <p class="quiz-feedback" data-quiz-feedback aria-live="polite"></p>
          </div>
        </section>
      </article>`,this.canvas=t.querySelector("canvas.data-canvas")??void 0,this.bindControls(),this.canvas&&(this.resizeObserver=new ResizeObserver(()=>this.draw()),this.resizeObserver.observe(this.canvas)),this.update()}destroy(){var t;(t=this.resizeObserver)==null||t.disconnect(),window.removeEventListener("keydown",this.onKeyDown),this.root=void 0,this.canvas=void 0}bindControls(){var e,s,a,i,o,n,r,d;if(!this.root||!this.canvas)return;this.root.querySelectorAll("[data-kernel-preset]").forEach(c=>{c.addEventListener("click",()=>{const h=c.dataset.kernelPreset??"rings";this.activePreset=h,this.points=h==="custom"?[]:ne(h),this.history=[],this.lift=0,this.automaticThreshold=!0,this.threshold=.36,this.innerLabel=0,this.applyBestThreshold(),this.update()})}),this.root.querySelectorAll("[data-class]").forEach(c=>{c.addEventListener("click",()=>{this.currentLabel=Number(c.dataset.class??0)===1?1:0,this.lift=0,this.syncClassControls(),this.update()})}),(e=this.root.querySelector("[data-action='toggle-draw']"))==null||e.addEventListener("click",c=>{var u;this.touchDrawingEnabled=!this.touchDrawingEnabled;const h=c.currentTarget;h.setAttribute("aria-pressed",String(this.touchDrawingEnabled)),h.classList.toggle("is-active",this.touchDrawingEnabled);const p=h.querySelector("[data-draw-state]");p&&(p.textContent=this.touchDrawingEnabled?"be":"ki"),(u=this.canvas)==null||u.classList.toggle("is-touch-drawing",this.touchDrawingEnabled)}),(s=this.root.querySelector("#kernel-lift"))==null||s.addEventListener("input",c=>{this.lift=Number(c.target.value)/100,this.update()}),(a=this.root.querySelector("#kernel-threshold"))==null||a.addEventListener("input",c=>{this.threshold=Number(c.target.value),this.automaticThreshold=!1,this.update()}),(i=this.root.querySelector("[data-action='fit']"))==null||i.addEventListener("click",()=>{this.automaticThreshold=!0,this.applyBestThreshold(),this.update()}),(o=this.root.querySelector("[data-action='flip']"))==null||o.addEventListener("click",()=>{this.innerLabel=this.innerLabel===0?1:0,this.automaticThreshold=!1,this.update()}),(n=this.root.querySelector("[data-action='undo']"))==null||n.addEventListener("click",()=>{const c=this.history.pop();c&&(this.points=c,this.activePreset="custom",this.automaticThreshold&&this.applyBestThreshold(),this.update())}),(r=this.root.querySelector("[data-action='clear']"))==null||r.addEventListener("click",()=>{this.points.length>0&&this.pushHistory(),this.points=[],this.activePreset="custom",this.threshold=.36,this.innerLabel=0,this.automaticThreshold=!0,this.update()}),(d=this.root.querySelector("[data-action='add-keyboard']"))==null||d.addEventListener("click",()=>{var u,g,v,b,k,y;const c=Number(((g=(u=this.root)==null?void 0:u.querySelector("[data-entry-x]"))==null?void 0:g.value)??0),h=Number(((b=(v=this.root)==null?void 0:v.querySelector("[data-entry-y]"))==null?void 0:b.value)??0),p=Number(((y=(k=this.root)==null?void 0:k.querySelector("[data-entry-label]"))==null?void 0:y.value)??0)===1?1:0;this.pushHistory(),this.points.push({x:Math.max(0,Math.min(1,(c+1)/2)),y:Math.max(0,Math.min(1,(h+1)/2)),label:p}),this.activePreset="custom",this.automaticThreshold&&this.applyBestThreshold(),this.update()}),this.canvas.addEventListener("pointerdown",c=>{var p;const h=R(this.canvas,c,28);if(c.pointerType!=="mouse"&&!this.touchDrawingEnabled){this.tapCandidate={point:h,clientX:c.clientX,clientY:c.clientY,moved:!1};return}this.lift>0&&(this.lift=0,this.update()),this.drawing=!0,this.lastDrawn=void 0,(p=this.canvas)==null||p.setPointerCapture(c.pointerId),this.pushHistory(),this.addDrawnPoint(h)}),this.canvas.addEventListener("pointermove",c=>{if(this.tapCandidate){Math.hypot(c.clientX-this.tapCandidate.clientX,c.clientY-this.tapCandidate.clientY)>9&&(this.tapCandidate.moved=!0);return}this.drawing&&(c.preventDefault(),this.addDrawnPoint(R(this.canvas,c,28)))});const t=c=>{var h;c&&((h=this.canvas)!=null&&h.hasPointerCapture(c.pointerId))&&this.canvas.releasePointerCapture(c.pointerId),this.drawing=!1,this.lastDrawn=void 0};this.canvas.addEventListener("pointerup",c=>{this.tapCandidate&&(this.tapCandidate.moved||(this.lift>0&&(this.lift=0),this.pushHistory(),this.addDrawnPoint(this.tapCandidate.point)),this.tapCandidate=void 0),t(c)}),this.canvas.addEventListener("pointercancel",c=>{this.tapCandidate=void 0,t(c)}),this.canvas.addEventListener("pointerleave",()=>{this.tapCandidate=void 0,t()}),window.addEventListener("keydown",this.onKeyDown),this.root.querySelectorAll("[data-answer]").forEach(c=>{c.addEventListener("click",()=>{var u,g;const h=c.dataset.answer==="right";(u=this.root)==null||u.querySelectorAll("[data-answer]").forEach(v=>v.classList.remove("is-correct","is-wrong")),c.classList.add(h?"is-correct":"is-wrong");const p=(g=this.root)==null?void 0:g.querySelector("[data-quiz-feedback]");p&&(p.textContent=h?"Helyes. A kör egyenlete az új z koordinátában egyszerű küszöbfeltétel. A modult teljesítetted.":"A z koordináta definícióját hasonlítsd össze a kör egyenletével."),h&&this.context.onComplete()})})}pushHistory(){this.history.push(this.points.map(t=>({...t}))),this.history.length>30&&this.history.shift()}addDrawnPoint(t){if(this.points.length>=240||this.lastDrawn&&(this.lastDrawn.x-t.x)**2+(this.lastDrawn.y-t.y)**2<.0012)return;const e={...t,label:this.currentLabel};this.points.push(e),this.lastDrawn=e,this.activePreset="custom",this.automaticThreshold&&this.applyBestThreshold(),this.update()}applyBestThreshold(){const t=ie(this.points);t&&(this.threshold=t.threshold,this.innerLabel=t.innerLabel)}syncClassControls(){var t;(t=this.root)==null||t.querySelectorAll("[data-class]").forEach(e=>{const s=Number(e.dataset.class)===this.currentLabel;e.classList.toggle("is-active",s),e.setAttribute("aria-pressed",String(s))})}update(){if(!this.root)return;const t=Kt(this.points,this.threshold,this.innerLabel),e=ie(this.points),s=this.root.querySelector("#kernel-lift"),a=this.root.querySelector("#kernel-threshold");s&&(s.value=String(Math.round(this.lift*100))),a&&(a.value=String(this.threshold)),this.setText("[data-lift-output]",`${Math.round(this.lift*100)}%`),this.setText("[data-threshold-output]",F(this.threshold)),this.setText("[data-inner-label]",ot(this.innerLabel)),this.setText("[data-accuracy]",this.points.length>0?`${F(t.accuracy*100,1)}%`:"—"),this.setText("[data-error-count]",this.points.length>0?String(t.errorCount):"—"),this.setText("[data-margin]",t.hasBothSides?F(t.margin,3):"—"),this.setText("[data-threshold-mode]",this.automaticThreshold&&e?"automatikus":"kézi"),this.root.querySelectorAll("[data-kernel-preset]").forEach(o=>{const n=o.dataset.kernelPreset===this.activePreset;o.classList.toggle("is-active",n),o.setAttribute("aria-pressed",String(n))});const i=this.root.querySelector("[data-action='fit']");i&&(i.disabled=!e),this.syncClassControls(),this.updateObservation(t,e!==void 0),this.draw()}updateObservation(t,e){var o;const s=(o=this.root)==null?void 0:o.querySelector("[data-observation]");if(!s)return;const a={a:this.points.filter(n=>n.label===0).length,b:this.points.filter(n=>n.label===1).length};if(!e){s.innerHTML=`<p class="control-label">Aktuális elválasztás</p><strong>Mindkét osztályból kell pont.</strong><p>Most ${a.a} A és ${a.b} B pont van.</p>`,this.setText("[data-summary]",`${this.points.length} pont · ${a.a} A · ${a.b} B. Rajzolj mindkét osztályból.`);return}const i=t.errorCount===0?`<strong>A radiális küszöb hibátlan ezen a mintán.</strong><p>A z = ${F(this.threshold)} sík alatt ${ot(this.innerLabel)}, fölötte ${ot(t.outerLabel)} a becslés.</p>`:`<strong>${t.errorCount} pont a küszöb rossz oldalán van.</strong><p>A z = ${F(this.threshold)} sík alatt ${ot(this.innerLabel)}, fölötte ${ot(t.outerLabel)} a becslés. Ettől ez a feature map még nem lesz általános szeparátor.</p>`;s.innerHTML=`<p class="control-label">Aktuális elválasztás</p>${i}`,this.setText("[data-summary]",`${this.points.length} pont · ${a.a} A · ${a.b} B · ${F(t.accuracy*100,1)}% tanítópontosság. ${Math.round(this.lift*100)}% emelés.`)}setText(t,e){var a;const s=(a=this.root)==null?void 0:a.querySelector(t);s&&(s.textContent=e)}project(t,e,s,a){const{width:i,height:o,padding:n}=a,r=(i-n*2)/2,d=(o-n*2)/2*(1-this.lift*.5),c=o/2+this.lift*o*.22;return{x:i/2+t*r+e*r*.16*this.lift,y:c+e*d-s*o*.22*this.lift}}draw(){if(!this.canvas)return;const t=this.canvas.getContext("2d");if(!t)return;const{width:e,height:s}=T(this.canvas),a={width:e,height:s,padding:28},i=Kt(this.points,this.threshold,this.innerLabel),o=new Set(i.supportIndices);t.clearRect(0,0,e,s),t.fillStyle="#f4f1e8",t.fillRect(0,0,e,s),this.drawFloor(t,a),this.drawDecisionCircle(t,a,i.lowerMargin,"rgba(18, 32, 63, 0.35)",!0),this.drawDecisionCircle(t,a,i.upperMargin,"rgba(18, 32, 63, 0.35)",!0),this.drawDecisionCircle(t,a,this.threshold,"#17776c",!1),this.lift>.025&&(this.drawPlane(t,a,i.lowerMargin,"rgba(18, 32, 63, 0.30)",!0,!1),this.drawPlane(t,a,i.upperMargin,"rgba(18, 32, 63, 0.30)",!0,!1),this.drawPlane(t,a,this.threshold,"#17776c",!1,!0));const n=this.points.map((r,d)=>{const c=At(r),h=this.project(c.x1,c.x2,0,a),p=this.project(c.x1,c.x2,c.z,a);return{point:r,feature:c,base:h,lifted:p,index:d}}).sort((r,d)=>r.lifted.y-d.lifted.y);if(this.lift>.04&&(t.save(),t.strokeStyle=`rgba(18, 32, 63, ${.06+this.lift*.09})`,t.lineWidth=.8,n.forEach(({base:r,lifted:d})=>{t.beginPath(),t.moveTo(r.x,r.y),t.lineTo(d.x,d.y),t.stroke()}),t.restore()),n.forEach(({point:r,lifted:d,index:c})=>{const h=o.has(c)?6:4.7;o.has(c)&&(t.save(),t.beginPath(),t.arc(d.x,d.y,9,0,Math.PI*2),t.strokeStyle="#9a7413",t.lineWidth=2.2,t.stroke(),t.restore()),wt(t,d.x,d.y,r.label,h),Se(r,this.threshold,this.innerLabel)!==r.label&&(t.save(),t.strokeStyle="#12203f",t.lineWidth=1.7,t.beginPath(),t.moveTo(d.x-7,d.y-7),t.lineTo(d.x+7,d.y+7),t.moveTo(d.x+7,d.y-7),t.lineTo(d.x-7,d.y+7),t.stroke(),t.restore())}),this.lift>.12){const r=this.project(-.96,-.96,this.threshold,a),d=`z = ${F(this.threshold)}`;t.save(),t.font="600 10px IBM Plex Mono, monospace";const c=t.measureText(d).width;t.fillStyle="rgba(255, 253, 246, 0.94)",t.fillRect(r.x-4,r.y-13,c+8,17),t.fillStyle="#17776c",t.fillText(d,r.x,r.y),t.restore()}}drawFloor(t,e){t.save(),t.strokeStyle="rgba(18, 32, 63, 0.13)",t.lineWidth=1,t.setLineDash([2,5]);for(let o=0;o<=4;o+=1){const n=-1+o*.5,r=this.project(-1,n,0,e),d=this.project(1,n,0,e),c=this.project(n,-1,0,e),h=this.project(n,1,0,e);t.beginPath(),t.moveTo(r.x,r.y),t.lineTo(d.x,d.y),t.stroke(),t.beginPath(),t.moveTo(c.x,c.y),t.lineTo(h.x,h.y),t.stroke()}t.setLineDash([]);const s=[this.project(-1,-1,0,e),this.project(1,-1,0,e),this.project(1,1,0,e),this.project(-1,1,0,e)];t.beginPath(),s.forEach((o,n)=>n===0?t.moveTo(o.x,o.y):t.lineTo(o.x,o.y)),t.closePath(),t.strokeStyle="rgba(18, 32, 63, 0.30)",t.stroke(),t.fillStyle="rgba(18, 32, 63, 0.48)",t.font="italic 10px Newsreader, Georgia, serif";const a=this.project(1,1,0,e),i=this.project(-1,1,0,e);t.fillText("x₁",a.x-13,a.y-7),t.fillText("x₂",i.x+5,i.y-7),t.restore()}drawDecisionCircle(t,e,s,a,i){if(s<=0||s>2)return;const o=Math.sqrt(s);t.save(),t.strokeStyle=a,t.lineWidth=i?1.1:2.2,t.setLineDash(i?[5,5]:[]),t.globalAlpha=i?.72:.95,t.beginPath();for(let n=0;n<=96;n+=1){const r=n/96*Math.PI*2,d=this.project(Math.cos(r)*o,Math.sin(r)*o,0,e);n===0?t.moveTo(d.x,d.y):t.lineTo(d.x,d.y)}t.closePath(),t.stroke(),t.restore()}drawPlane(t,e,s,a,i,o){const n=[this.project(-1,-1,s,e),this.project(1,-1,s,e),this.project(1,1,s,e),this.project(-1,1,s,e)];t.save(),t.beginPath(),n.forEach((r,d)=>d===0?t.moveTo(r.x,r.y):t.lineTo(r.x,r.y)),t.closePath(),o&&(t.fillStyle="rgba(23, 119, 108, 0.12)",t.fill()),t.strokeStyle=a,t.lineWidth=i?1.1:2.1,t.setLineDash(i?[6,5]:[]),t.stroke(),t.restore()}}const oe=1e-9,Rs=1e-8,Tt=.9,Et=.999;function K(l){return Math.max(0,Math.min(1,l))}function Hs(l){if(l>=0)return 1/(1+Math.exp(-l));const t=Math.exp(l);return t/(1+t)}function Bs(l){return[(K(l.x)-.5)*2,(K(l.y)-.5)*2]}function je(l){return{firstHiddenWeights:Array.from({length:l},()=>[0,0]),secondHiddenWeights:Array.from({length:l},()=>[0,0]),firstHiddenBiases:Array(l).fill(0),secondHiddenBiases:Array(l).fill(0),firstOutputWeights:Array(l).fill(0),secondOutputWeights:Array(l).fill(0),firstOutputBias:0,secondOutputBias:0}}function Ns(l){return{firstHiddenWeights:l.firstHiddenWeights.map(t=>[...t]),secondHiddenWeights:l.secondHiddenWeights.map(t=>[...t]),firstHiddenBiases:[...l.firstHiddenBiases],secondHiddenBiases:[...l.secondHiddenBiases],firstOutputWeights:[...l.firstOutputWeights],secondOutputWeights:[...l.secondOutputWeights],firstOutputBias:l.firstOutputBias,secondOutputBias:l.secondOutputBias}}function ut(l,t,e,s,a,i){const o=Tt*e+(1-Tt)*t,n=Et*s+(1-Et)*t*t,r=o/(1-Tt**a),d=n/(1-Et**a);return{value:l-i*r/(Math.sqrt(d)+Rs),firstMoment:o,secondMoment:n}}function re(l=8,t=73){const e=Math.max(1,Math.min(32,Math.floor(l))),s=A(t),a=Math.sqrt(6/(2+e)),i=Math.sqrt(6/(e+1)),o=n=>(s()*2-1)*n;return{hiddenSize:e,hiddenWeights:Array.from({length:e},()=>[o(a),o(a)]),hiddenBiases:Array.from({length:e},()=>o(a)*.45),outputWeights:Array.from({length:e},()=>o(i)),outputBias:0,steps:0,optimizer:je(e)}}function Ds(l){return{hiddenSize:l.hiddenSize,hiddenWeights:l.hiddenWeights.map(t=>[...t]),hiddenBiases:[...l.hiddenBiases],outputWeights:[...l.outputWeights],outputBias:l.outputBias,steps:l.steps,optimizer:l.optimizer?Ns(l.optimizer):void 0}}function ft(l,t){const e=Bs(t),s=l.hiddenWeights.map((i,o)=>Math.tanh(i[0]*e[0]+i[1]*e[1]+l.hiddenBiases[o])),a=s.reduce((i,o,n)=>i+o*l.outputWeights[n],l.outputBias);return{input:e,hidden:s,logit:a,probability:Hs(a)}}function mt(l,t){if(t.length===0)return{loss:0,accuracy:0};let e=0,s=0;return t.forEach(a=>{const i=Math.max(oe,Math.min(1-oe,ft(l,a).probability));e-=a.label*Math.log(i)+(1-a.label)*Math.log(1-i),(i>=.5?1:0)===a.label&&(s+=1)}),{loss:e/t.length,accuracy:s/t.length}}function Ks(l,t,e){const s=Math.max(0,Math.min(1e4,Math.floor(e.epochs??1))),a=Math.max(0,Math.min(1,e.learningRate)),i=Math.max(0,e.l2??0),o=Ds(l);if(t.length===0||s===0||a===0)return o;o.optimizer??(o.optimizer=je(o.hiddenSize));for(let n=0;n<s;n+=1){const r=Math.min(32,t.length),d=o.steps*r,c=Array.from({length:o.hiddenSize},()=>[0,0]),h=Array(o.hiddenSize).fill(0),p=Array(o.hiddenSize).fill(0);let u=0;for(let y=0;y<r;y+=1){const j=(d+y)*9973%t.length,f=t[j],z=ft(o,f),S=z.probability-f.label;u+=S;for(let w=0;w<o.hiddenSize;w+=1){p[w]+=S*z.hidden[w];const $=S*o.outputWeights[w]*(1-z.hidden[w]**2);h[w]+=$,c[w][0]+=$*z.input[0],c[w][1]+=$*z.input[1]}}const g=1/r,v=o.optimizer,b=o.steps+1;for(let y=0;y<o.hiddenSize;y+=1){for(let w=0;w<2;w+=1){const $=o.hiddenWeights[y][w],Ce=c[y][w]*g+i*$,St=ut($,Ce,v.firstHiddenWeights[y][w],v.secondHiddenWeights[y][w],b,a);o.hiddenWeights[y][w]=St.value,v.firstHiddenWeights[y][w]=St.firstMoment,v.secondHiddenWeights[y][w]=St.secondMoment}const j=ut(o.hiddenBiases[y],h[y]*g,v.firstHiddenBiases[y],v.secondHiddenBiases[y],b,a);o.hiddenBiases[y]=j.value,v.firstHiddenBiases[y]=j.firstMoment,v.secondHiddenBiases[y]=j.secondMoment;const f=o.outputWeights[y],z=p[y]*g+i*f,S=ut(f,z,v.firstOutputWeights[y],v.secondOutputWeights[y],b,a);o.outputWeights[y]=S.value,v.firstOutputWeights[y]=S.firstMoment,v.secondOutputWeights[y]=S.secondMoment}const k=ut(o.outputBias,u*g,v.firstOutputBias,v.secondOutputBias,b,a);o.outputBias=k.value,v.firstOutputBias=k.firstMoment,v.secondOutputBias=k.secondMoment,o.steps+=1}return o}function Os(l=51,t=54){const e=A(l),s=Math.max(8,Math.min(140,Math.floor(t))),a=[];for(let i=0;i<=1;i=i+1)for(let o=0;o<s;o+=1){const n=o/Math.max(1,s-1),r=.55+n*Math.PI*2.25+i*Math.PI,d=.035+n*.43;a.push({x:K(.5+d*Math.cos(r)+x(e)*.0075),y:K(.5+d*Math.sin(r)+x(e)*.0075),label:i})}return a}function Fs(l=29,t=24){const e=A(l),s=Math.max(5,Math.min(70,Math.floor(t)));return[{x:.24,y:.24,label:0},{x:.76,y:.76,label:0},{x:.24,y:.76,label:1},{x:.76,y:.24,label:1}].flatMap(i=>Array.from({length:s},()=>({x:K(i.x+x(e)*.055),y:K(i.y+x(e)*.055),label:i.label})))}function Vs(l=91,t=58){const e=A(l),s=Math.max(8,Math.min(120,Math.floor(t))),a=[];for(let i=0;i<=1;i=i+1)for(let o=0;o<s;o+=1){const n=o/s*Math.PI*2+e()*.08,d=(i===0?.17:.39)+x(e)*.018;a.push({x:K(.5+Math.cos(n)*d),y:K(.5+Math.sin(n)*d),label:i})}return a}const Ct={spiral:{title:"Kétkarú spirál",question:"Hány neuron kell a kanyargó határhoz?",make:()=>Os()},xor:{title:"Kockás",question:"Mit ad hozzá a rejtett réteg?",make:()=>Fs()},rings:{title:"Körök",question:"Hogyan záródik össze a határ?",make:()=>Vs()},custom:{title:"Saját rajz",question:"Indulj üres vászonról.",make:()=>[]}};function _(l,t=3){return l.toFixed(t).replace(".",",")}function qt(l){return`${Math.round(l*100)}%`}function le(l){return{a:l.filter(t=>t.label===0).length,b:l.filter(t=>t.label===1).length}}class Ys{constructor(t){m(this,"context");m(this,"root");m(this,"canvas");m(this,"resizeObserver");m(this,"points",Ct.spiral.make());m(this,"pointHistory",[]);m(this,"model",re(8,73));m(this,"hiddenSize",8);m(this,"learningRate",.03);m(this,"currentLabel",0);m(this,"lossHistory",[mt(this.model,this.points).loss]);m(this,"drawing",!1);m(this,"lastDrawn");m(this,"pointer");m(this,"touchDrawingEnabled",!1);m(this,"tapCandidate");m(this,"initializationSeed",73);m(this,"maxPoints",260);m(this,"onKeyDown",t=>{var e;!((e=this.root)!=null&&e.isConnected)||t.target.closest("button, a, input, select, textarea, summary, [contenteditable='true']")||((t.key==="1"||t.key==="2")&&(this.currentLabel=Number(t.key)-1,this.syncClassControls()),(t.ctrlKey||t.metaKey)&&t.key.toLowerCase()==="z"&&(t.preventDefault(),this.undo()))});this.context=t}mount(t){this.root=t,t.innerHTML=`
      <article class="module-page" data-module="neural-network">
        <header class="module-intro paper-header">
          <div class="module-index">05 <span>/ 12</span></div>
          <div>
            <p class="eyebrow">Neurális hálók · többrétegű perceptron</p>
            <h1>Rajzolj spirált</h1>
            <p class="lede">Taníts egy kétbemenetű, egy rejtett réteges hálót. A háttér a B osztály aktuális becsült valószínűségét mutatja.</p>
          </div>
          <a class="present-link" href="?mode=present#/neuralis-halok" aria-label="Neurális háló megnyitása vetítés módban">Vetítés <span aria-hidden="true">↗</span></a>
        </header>

        <section class="workbench" aria-labelledby="neural-workbench-title">
          <div class="workbench-topline">
            <div>
              <p class="section-number">INTERAKTÍV MUNKAPAD</p>
              <h2 id="neural-workbench-title">Tanul-e a háló?</h2>
            </div>
            <p class="workbench-instruction">Válassz osztályt, majd kattints vagy húzz az ábrán. A „Tanítás ×50” ötven mini-köteges gradienslépést futtat.</p>
          </div>

          <div class="preset-strip neural-preset-strip" role="group" aria-label="Adatkészlet választása">
            ${Object.entries(Ct).map(([e,s],a)=>`
              <button class="preset ${a===0?"is-active":""}" type="button" data-neural-preset="${e}" aria-pressed="${a===0}">
                <span class="preset-mark ${e==="custom"?"preset-custom":`preset-neural-${e} ${e==="rings"?"preset-rings":""}`}" aria-hidden="true">${e==="custom"?"＋":"<i></i><i></i><i></i><i></i><i></i>"}</span>
                <span><strong>${s.title}</strong><small>${s.question}</small></span>
              </button>`).join("")}
          </div>

          <div class="canvas-layout neural-layout">
            <aside class="tool-column" aria-label="Pontok és tanítás">
              <p class="control-label">Pont osztálya</p>
              <button class="class-tool is-active" type="button" data-class="0" aria-pressed="true">
                <span class="shape shape-circle class-a" aria-hidden="true"></span><span>A osztály</span><kbd>1</kbd>
              </button>
              <button class="class-tool" type="button" data-class="1" aria-pressed="false">
                <span class="shape shape-square class-b" aria-hidden="true"></span><span>B osztály</span><kbd>2</kbd>
              </button>
              <button class="text-tool touch-draw-toggle" type="button" data-action="toggle-draw" aria-pressed="false"><span>Rajzolási mód</span><strong data-draw-state>ki</strong></button>
              <div class="tool-divider"></div>
              <p class="control-label">Optimalizálás</p>
              <div class="neural-train-actions">
                <button class="button button-paper" type="button" data-action="train-step">1 lépés</button>
                <button class="button button-ink" type="button" data-action="train-batch">Tanítás ×50</button>
              </div>
              <button class="text-tool" type="button" data-action="reset-model">Súlyok visszaállítása</button>
              <div class="tool-divider"></div>
              <button class="text-tool" type="button" data-action="undo">Visszavonás <kbd>⌘Z</kbd></button>
              <button class="text-tool" type="button" data-action="clear">Pontok törlése</button>
              <p class="tool-note">A munkapad Adam-frissítést használ. Legfeljebb ${this.maxPoints} pont és 16 rejtett neuron számolható; keskeny képernyőn a háttér ritkább rácson készül.</p>
            </aside>

            <div class="canvas-column">
              <div class="canvas-frame">
                <canvas class="data-canvas" aria-label="Kétosztályos pontfelhő és a neurális háló döntési felülete" role="img"></canvas>
                <div class="canvas-corner" aria-hidden="true">x₂</div>
                <div class="canvas-axis" aria-hidden="true">x₁</div>
              </div>
              <p class="canvas-summary" data-summary aria-live="polite"></p>
            </div>

            <aside class="parameter-column">
              <label class="range-control" for="neural-hidden">
                <span><strong>Rejtett neuronok</strong><output for="neural-hidden" data-hidden-output>8</output></span>
                <input id="neural-hidden" type="range" min="2" max="16" step="2" value="8" />
                <span class="range-ends"><small>2</small><small>16</small></span>
              </label>
              <label class="range-control" for="neural-rate">
                <span><strong>Tanulási ráta, η</strong><output for="neural-rate" data-rate-output>0,03</output></span>
                <input id="neural-rate" type="range" min="1" max="25" step="1" value="3" />
                <span class="range-ends"><small>0,01</small><small>0,25</small></span>
              </label>
              <div class="observation" data-observation aria-live="polite"></div>
              <dl class="metric-list neural-metrics">
                <div><dt>Tanítási lépések</dt><dd data-step-count>0</dd></div>
                <div><dt>Tanítási loss</dt><dd data-loss>—</dd></div>
                <div><dt>Tanítási pontosság</dt><dd data-accuracy>—</dd></div>
                <div><dt>Kurzor: P(B)</dt><dd data-pointer-probability>—</dd></div>
              </dl>
              <div class="neural-network-panel">
                <p class="control-label">Háló szerkezete</p>
                <strong data-network-caption>2 → 8 → 1</strong>
                <svg class="neural-network-map" width="210" height="150" viewBox="0 0 210 150" role="img" aria-label="Két bemenet, nyolc rejtett neuron és egy kimenet" data-network-map></svg>
              </div>
            </aside>
          </div>

          <div class="error-profile neural-training-profile" aria-label="A tanítási veszteség alakulása">
            <div><p class="control-label">Tanítási görbe</p><strong data-loss-caption>A loss még az inicializált háló értéke.</strong></div>
            <svg viewBox="0 0 520 120" role="img" aria-labelledby="neural-loss-title neural-loss-desc">
              <title id="neural-loss-title">Bináris keresztentrópia a tanítás során</title>
              <desc id="neural-loss-desc">A vonal az egymást követő tanítási műveletek után mért veszteséget mutatja.</desc>
              <path class="chart-grid" d="M24 18H508M24 58H508M24 98H508" />
              <path class="chart-train neural-loss-path" data-loss-path d="" />
            </svg>
            <div class="chart-legend"><span class="train-key">bináris keresztentrópia</span></div>
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

        <section class="experiments depth-shell" aria-labelledby="neural-try-title">
          <div class="depth-kicker">Kísérletek</div>
          <h2 id="neural-try-title">Három összehasonlítás</h2>
          <ol class="experiment-list">
            <li><span>01</span><div><strong>Tanítsd a spirált 2, majd 12 neuronnal.</strong><p>Minden neuronszám-váltás újrainicializálja a hálót. Hasonlítsd össze a loss értékét azonos lépésszám után.</p></div></li>
            <li><span>02</span><div><strong>Válts 0,02 és 0,20 tanulási ráta között.</strong><p>A nagyobb lépés gyorsabb is lehet, de a loss kevésbé egyenletesen változhat.</p></div></li>
            <li><span>03</span><div><strong>Rajzolj saját határt.</strong><p>Tegyél A és B pontokat egy tetszőleges alakzat két oldalára, majd növeld a rejtett neuronok számát.</p></div></li>
          </ol>
        </section>

        <section class="depth reading-layer" aria-labelledby="neural-depth-title">
          <p class="eyebrow">Magyarázat</p>
          <h2 id="neural-depth-title">A háló súlyait a veszteség gradiensével módosítjuk.</h2>
          <p>A két koordináta a rejtett réteg minden neuronjához eljut. A rejtett neuronok tanh aktivációt, az egyetlen kimenet szigmoidot használ. A kimenet így 0 és 1 közötti szám, amelyet a modul a B osztály becsült valószínűségeként jelenít meg.</p>
          <div class="concept-grid">
            <div>
              <p class="concept-label">Láncszabály</p>
              <h3>Visszaterjesztés</h3>
              <p>A láncszabály a kimeneti hibát rétegenként bontja fel. Így minden súlyhoz kiszámítható, hogyan változtatná a veszteséget.</p>
            </div>
            <div class="formula" aria-label="a veszteség súly szerinti deriváltja egyenlő a veszteség kimenet szerinti deriváltja szorozva a kimenet aktiváció szerinti, majd az aktiváció súly szerinti deriváltjával">
              <math display="block"><mfrac><mrow><mo>∂</mo><mi>L</mi></mrow><mrow><mo>∂</mo><mi>w</mi></mrow></mfrac><mo>=</mo><mfrac><mrow><mo>∂</mo><mi>L</mi></mrow><mrow><mo>∂</mo><mover><mi>y</mi><mo>^</mo></mover></mrow></mfrac><mo>·</mo><mfrac><mrow><mo>∂</mo><mover><mi>y</mi><mo>^</mo></mover></mrow><mrow><mo>∂</mo><mi>a</mi></mrow></mfrac><mo>·</mo><mfrac><mrow><mo>∂</mo><mi>a</mi></mrow><mrow><mo>∂</mo><mi>w</mi></mrow></mfrac></math>
              <math display="block"><msub><mi>w</mi><mtext>új</mtext></msub><mo>=</mo><mi>w</mi><mo>−</mo><mi>η</mi><mfrac><mrow><mo>∂</mo><mi>L</mi></mrow><mrow><mo>∂</mo><mi>w</mi></mrow></mfrac></math>
            </div>
          </div>
          <aside class="edge-case"><strong>Mit mérünk?</strong> A loss és a pontosság ugyanazon a tanítómintán készül. Ezek nem helyettesítik a külön validációs vagy tesztmintán mért teljesítményt. A munkapad Adam-optimalizálót használ: a gradiens adja a frissítés irányát, az Adam a korábbi gradiensek alapján skálázza a lépést.</aside>
          <div class="knowledge-check" data-quiz>
            <p class="concept-label">Ellenőrző kérdés</p>
            <h3>Mi jelezheti, hogy a tanulási ráta túl nagy?</h3>
            <div class="answer-grid">
              <button type="button" data-answer="wrong">A loss minden lépésben lassan csökken</button>
              <button type="button" data-answer="right">A loss ingadozik vagy tartósan nő</button>
              <button type="button" data-answer="wrong">A bemenetnek pontosan két koordinátája van</button>
            </div>
            <p class="quiz-feedback" data-quiz-feedback aria-live="polite"></p>
          </div>
        </section>
      </article>`,this.canvas=t.querySelector("canvas.data-canvas")??void 0,this.bindControls(),this.canvas&&(this.resizeObserver=new ResizeObserver(()=>this.draw()),this.resizeObserver.observe(this.canvas)),this.update()}destroy(){var t;(t=this.resizeObserver)==null||t.disconnect(),window.removeEventListener("keydown",this.onKeyDown),this.root=void 0,this.canvas=void 0}bindControls(){var e,s,a,i,o,n,r,d,c;if(!this.root||!this.canvas)return;this.root.querySelectorAll("[data-neural-preset]").forEach(h=>{h.addEventListener("click",()=>{const p=h.dataset.neuralPreset??"spiral";this.points=Ct[p].make(),this.pointHistory=[],this.markPreset(p),this.resetModel()})}),this.root.querySelectorAll("[data-class]").forEach(h=>{h.addEventListener("click",()=>{this.currentLabel=Number(h.dataset.class??0)===1?1:0,this.syncClassControls()})}),(e=this.root.querySelector("#neural-hidden"))==null||e.addEventListener("input",h=>{this.hiddenSize=Number(h.target.value),this.resetModel()}),(s=this.root.querySelector("#neural-rate"))==null||s.addEventListener("input",h=>{this.learningRate=Number(h.target.value)/100,this.update()}),(a=this.root.querySelector("[data-action='toggle-draw']"))==null||a.addEventListener("click",h=>{var g;this.touchDrawingEnabled=!this.touchDrawingEnabled;const p=h.currentTarget;p.setAttribute("aria-pressed",String(this.touchDrawingEnabled)),p.classList.toggle("is-active",this.touchDrawingEnabled);const u=p.querySelector("[data-draw-state]");u&&(u.textContent=this.touchDrawingEnabled?"be":"ki"),(g=this.canvas)==null||g.classList.toggle("is-touch-drawing",this.touchDrawingEnabled)}),(i=this.root.querySelector("[data-action='train-step']"))==null||i.addEventListener("click",()=>this.train(1)),(o=this.root.querySelector("[data-action='train-batch']"))==null||o.addEventListener("click",()=>this.train(50)),(n=this.root.querySelector("[data-action='reset-model']"))==null||n.addEventListener("click",()=>this.resetModel()),(r=this.root.querySelector("[data-action='undo']"))==null||r.addEventListener("click",()=>this.undo()),(d=this.root.querySelector("[data-action='clear']"))==null||d.addEventListener("click",()=>{this.points.length>0&&this.pushHistory(),this.points=[],this.markPreset("custom"),this.resetModel()}),(c=this.root.querySelector("[data-action='add-keyboard']"))==null||c.addEventListener("click",()=>{var g,v,b,k,y,j;const h=Number(((v=(g=this.root)==null?void 0:g.querySelector("[data-entry-x]"))==null?void 0:v.value)??.5),p=Number(((k=(b=this.root)==null?void 0:b.querySelector("[data-entry-y]"))==null?void 0:k.value)??.5),u=Number(((j=(y=this.root)==null?void 0:y.querySelector("[data-entry-label]"))==null?void 0:j.value)??0)===1?1:0;this.pushHistory(),this.addPoint({x:Math.max(0,Math.min(1,h)),y:Math.max(0,Math.min(1,p)),label:u},!0)}),this.canvas.addEventListener("pointerdown",h=>{var u;const p=R(this.canvas,h);if(this.pointer=p,h.pointerType!=="mouse"&&!this.touchDrawingEnabled){this.tapCandidate={point:p,clientX:h.clientX,clientY:h.clientY,moved:!1};return}this.drawing=!0,this.lastDrawn=void 0,(u=this.canvas)==null||u.setPointerCapture(h.pointerId),this.pushHistory(),this.addPoint({...p,label:this.currentLabel})}),this.canvas.addEventListener("pointermove",h=>{if(this.tapCandidate){Math.hypot(h.clientX-this.tapCandidate.clientX,h.clientY-this.tapCandidate.clientY)>9&&(this.tapCandidate.moved=!0);return}const p=R(this.canvas,h);this.pointer=p,this.drawing?(h.preventDefault(),this.addPoint({...p,label:this.currentLabel})):this.draw()});const t=h=>{var p;(p=this.canvas)!=null&&p.hasPointerCapture(h.pointerId)&&this.canvas.releasePointerCapture(h.pointerId),this.drawing=!1,this.lastDrawn=void 0};this.canvas.addEventListener("pointerup",h=>{this.tapCandidate&&(this.tapCandidate.moved||(this.pushHistory(),this.addPoint({...this.tapCandidate.point,label:this.currentLabel})),this.tapCandidate=void 0),t(h)}),this.canvas.addEventListener("pointercancel",h=>{this.tapCandidate=void 0,t(h)}),this.canvas.addEventListener("pointerleave",()=>{this.drawing||(this.pointer=void 0,this.tapCandidate=void 0,this.draw())}),window.addEventListener("keydown",this.onKeyDown),this.root.querySelectorAll("[data-answer]").forEach(h=>{h.addEventListener("click",()=>{var g,v;const p=h.dataset.answer==="right";(g=this.root)==null||g.querySelectorAll("[data-answer]").forEach(b=>b.classList.remove("is-correct","is-wrong")),h.classList.add(p?"is-correct":"is-wrong");const u=(v=this.root)==null?void 0:v.querySelector("[data-quiz-feedback]");u&&(u.textContent=p?"Helyes. A túl nagy lépés átugorhat a kisebb veszteségű tartományon. A modult teljesítetted.":"A tanulási ráta a gradienssel kijelölt lépés hosszát szabályozza."),p&&this.context.onComplete()})})}pushHistory(){this.pointHistory.push(this.points.map(t=>({...t}))),this.pointHistory.length>30&&this.pointHistory.shift()}undo(){const t=this.pointHistory.pop();t&&(this.points=t,this.markPreset("custom"),this.refreshLossHistory(),this.update())}addPoint(t,e=!1){this.points.length>=this.maxPoints||!e&&this.lastDrawn&&(this.lastDrawn.x-t.x)**2+(this.lastDrawn.y-t.y)**2<.001||(this.points.push(t),this.lastDrawn=t,this.markPreset("custom"),this.refreshLossHistory(),this.update())}train(t){if(!this.canTrain())return;const e=t===1?1:10,s=t===1?1:Math.floor(t/e);for(let a=0;a<e;a+=1)this.model=Ks(this.model,this.points,{learningRate:this.learningRate,epochs:s}),this.lossHistory.push(mt(this.model,this.points).loss);this.lossHistory.length>80&&this.lossHistory.splice(0,this.lossHistory.length-80),this.update()}resetModel(){this.model=re(this.hiddenSize,this.initializationSeed),this.refreshLossHistory(),this.update()}refreshLossHistory(){this.lossHistory=this.points.length>0?[mt(this.model,this.points).loss]:[]}canTrain(){const t=le(this.points);return t.a>0&&t.b>0}markPreset(t){var e;(e=this.root)==null||e.querySelectorAll("[data-neural-preset]").forEach(s=>{const a=s.dataset.neuralPreset===t;s.classList.toggle("is-active",a),s.setAttribute("aria-pressed",String(a))})}syncClassControls(){var t;(t=this.root)==null||t.querySelectorAll("[data-class]").forEach(e=>{const s=Number(e.dataset.class)===this.currentLabel;e.classList.toggle("is-active",s),e.setAttribute("aria-pressed",String(s))})}setText(t,e){var a;const s=(a=this.root)==null?void 0:a.querySelector(t);s&&(s.textContent=e)}update(){var r,d,c;const t=le(this.points),e=mt(this.model,this.points);this.setText("[data-hidden-output]",String(this.hiddenSize)),this.setText("[data-rate-output]",_(this.learningRate,2)),this.setText("[data-step-count]",String(this.model.steps)),this.setText("[data-loss]",this.points.length>0?_(e.loss):"—"),this.setText("[data-accuracy]",this.points.length>0?qt(e.accuracy):"—"),this.setText("[data-network-caption]",`2 → ${this.hiddenSize} → 1`),this.setText("[data-summary]",`${this.points.length} tanítópont · ${t.a} A · ${t.b} B · ${this.model.steps} gradienslépés.`);const s=this.canTrain();(r=this.root)==null||r.querySelectorAll("[data-action='train-step'], [data-action='train-batch']").forEach(h=>{h.disabled=!s});const a=(d=this.root)==null?void 0:d.querySelector("[data-action='undo']");a&&(a.disabled=this.pointHistory.length===0);const i=(c=this.root)==null?void 0:c.querySelector("[data-observation]");i&&(this.points.length===0?i.innerHTML='<p class="control-label">Állapot</p><strong>Üres tanítóminta.</strong><p>Rajzolj mindkét osztályhoz pontokat.</p>':s?this.model.steps===0?i.innerHTML='<p class="control-label">Állapot</p><strong>A súlyok inicializálva vannak.</strong><p>Indíts egy lépést vagy egy rövid tanítási köteget.</p>':i.innerHTML=`<p class="control-label">Aktuális tanítás</p><strong>Loss: ${_(e.loss)}.</strong><p>A 0,5 feletti kimenetet B osztálynak számítjuk; a tanítási pontosság ${qt(e.accuracy)}.</p>`:i.innerHTML='<p class="control-label">Állapot</p><strong>Hiányzik az egyik osztály.</strong><p>A bináris határ tanításához A és B pont is kell.</p>');const o=this.lossHistory[0],n=this.lossHistory[this.lossHistory.length-1];o===void 0||n===void 0?this.setText("[data-loss-caption]","A görbéhez előbb adj tanítópontokat."):this.model.steps===0?this.setText("[data-loss-caption]",`Inicializált érték: ${_(n)}.`):this.setText("[data-loss-caption]",`${_(o)} → ${_(n)} · ${this.model.steps} lépés.`),this.updateNetworkMap(),this.updateLossChart(),this.syncClassControls(),this.draw()}updateNetworkMap(){var c;const t=(c=this.root)==null?void 0:c.querySelector("[data-network-map]");if(!t)return;t.setAttribute("aria-label",`Két bemenet, ${this.hiddenSize} rejtett neuron és egy kimenet`);const e=[{x:20,y:48},{x:20,y:102}],s=Array.from({length:this.hiddenSize},(h,p)=>({x:103,y:13+p*124/Math.max(1,this.hiddenSize-1)})),a={x:190,y:75},i=(h,p,u,g,v)=>{const b=v>=0?"#1e67b8":"#d84429",k=Math.min(.82,.2+Math.abs(v)*.25),y=Math.min(3.2,.65+Math.abs(v)*.85);return`<line x1="${h}" y1="${p}" x2="${u}" y2="${g}" stroke="${b}" stroke-opacity="${k}" stroke-width="${y}" />`},o=s.flatMap((h,p)=>e.map((u,g)=>i(u.x,u.y,h.x,h.y,this.model.hiddenWeights[p][g]))).join(""),n=s.map((h,p)=>i(h.x,h.y,a.x,a.y,this.model.outputWeights[p])).join(""),r=e.map((h,p)=>`
      <circle cx="${h.x}" cy="${h.y}" r="8" fill="#fffdf6" stroke="#12203f" stroke-width="1.4" />
      <text x="${h.x}" y="${h.y+3}" text-anchor="middle" fill="#12203f" font-size="8" font-family="IBM Plex Mono">x${p+1}</text>`).join(""),d=s.map(h=>`<circle cx="${h.x}" cy="${h.y}" r="5" fill="#fffdf6" stroke="#17776c" stroke-width="1.4" />`).join("");t.innerHTML=`
      <title>Kétbemenetű, egy rejtett réteges háló</title>
      ${o}${n}${r}${d}
      <circle cx="${a.x}" cy="${a.y}" r="9" fill="#fffdf6" stroke="#12203f" stroke-width="1.6" />
      <text x="${a.x}" y="${a.y+3}" text-anchor="middle" fill="#12203f" font-size="8" font-family="IBM Plex Mono">ŷ</text>`}updateLossChart(){var d;const t=(d=this.root)==null?void 0:d.querySelector("[data-loss-path]");if(!t||this.lossHistory.length===0){t==null||t.setAttribute("d","");return}const e=24,s=12,a=484,i=88,o=Math.max(.75,...this.lossHistory)*1.08,n=Math.max(1,this.lossHistory.length-1),r=this.lossHistory.map((c,h)=>{const p=e+h/n*a,u=s+(1-Math.min(1,c/o))*i;return`${h===0?"M":"L"}${p.toFixed(1)} ${u.toFixed(1)}`}).join(" ");t.setAttribute("d",r)}draw(){if(!this.canvas)return;const t=this.canvas.getContext("2d");if(!t)return;const{width:e,height:s}=T(this.canvas),a=20,i=Math.max(1,e-a*2),o=Math.max(1,s-a*2);if(t.clearRect(0,0,e,s),t.fillStyle="#f4f1e8",t.fillRect(0,0,e,s),this.canTrain()){const n=e<560?32:48,r=Math.max(24,Math.round(n*o/i)),d=i/n,c=o/r,h=Array.from({length:r},()=>Array(n).fill(0));for(let p=0;p<r;p+=1)for(let u=0;u<n;u+=1){const g=ft(this.model,{x:(u+.5)/n,y:(p+.5)/r}).probability,v=Math.round(216*(1-g)+30*g),b=Math.round(68*(1-g)+103*g),k=Math.round(41*(1-g)+184*g);t.fillStyle=`rgba(${v}, ${b}, ${k}, 0.16)`,t.fillRect(a+u*d,a+p*c,d+.5,c+.5),h[p][u]=g>=.5?1:0}t.save(),t.strokeStyle="rgba(18, 32, 63, 0.54)",t.lineWidth=1.15,t.beginPath();for(let p=0;p<r;p+=1)for(let u=0;u<n;u+=1){if(u>0&&h[p][u]!==h[p][u-1]){const g=a+u*d,v=a+p*c;t.moveTo(g,v),t.lineTo(g,v+c)}if(p>0&&h[p][u]!==h[p-1][u]){const g=a+u*d,v=a+p*c;t.moveTo(g,v),t.lineTo(g+d,v)}}t.stroke(),t.restore()}if(N(t,e,s,a),this.points.forEach(n=>{const[r,d]=M(n,e,s,a);wt(t,r,d,n.label,4.8)}),this.pointer){const[n,r]=M(this.pointer,e,s,a);t.save(),t.beginPath(),t.arc(n,r,7,0,Math.PI*2),t.strokeStyle=this.currentLabel===0?"#d84429":"#1e67b8",t.lineWidth=1.5,t.stroke(),t.restore();const d=ft(this.model,this.pointer).probability;this.setText("[data-pointer-probability]",qt(d))}else this.setText("[data-pointer-probability]","—")}}class Ws{constructor(t){m(this,"context");m(this,"root");m(this,"canvas");m(this,"cohort",Xe());m(this,"ownPoint");m(this,"resizeObserver");this.context=t}mount(t){this.root=t,t.innerHTML=`
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
      </article>`,this.canvas=t.querySelector("canvas.data-canvas")??void 0,this.bindControls(),this.canvas&&(this.resizeObserver=new ResizeObserver(()=>this.draw()),this.resizeObserver.observe(this.canvas)),this.update()}destroy(){var t;(t=this.resizeObserver)==null||t.disconnect(),this.root=void 0,this.canvas=void 0}bindControls(){var s;if(!this.root)return;const t=this.root.querySelector("#opening-python"),e=this.root.querySelector("#opening-coffee");t==null||t.addEventListener("input",()=>this.update()),e==null||e.addEventListener("input",()=>this.update()),(s=this.root.querySelector(".self-form"))==null||s.addEventListener("submit",a=>{var o,n;a.preventDefault();const i=Number(((n=(o=this.root)==null?void 0:o.querySelector("#opening-mode"))==null?void 0:n.value)??0);this.ownPoint={x:.08+(Number((t==null?void 0:t.value)??3)-1)/4*.84,y:.9-Number((e==null?void 0:e.value)??2)/6*.8,label:i},this.context.onComplete(),this.update(),window.setTimeout(()=>{var r,d;return(d=(r=this.root)==null?void 0:r.querySelector(".cohort-map"))==null?void 0:d.scrollIntoView({behavior:window.matchMedia("(prefers-reduced-motion: reduce)").matches?"auto":"smooth",block:"center"})},80)})}update(){var o,n,r,d,c,h,p;const t=Number(((n=(o=this.root)==null?void 0:o.querySelector("#opening-python"))==null?void 0:n.value)??3),e=Number(((d=(r=this.root)==null?void 0:r.querySelector("#opening-coffee"))==null?void 0:d.value)??2),s=(c=this.root)==null?void 0:c.querySelector("[data-python-output]"),a=(h=this.root)==null?void 0:h.querySelector("[data-coffee-output]");s&&(s.textContent=`${t} / 5`),a&&(a.textContent=e===6?"6+":String(e));const i=(p=this.root)==null?void 0:p.querySelector("[data-summary]");i&&(i.textContent=this.ownPoint?"A sáfrányszínű gyűrű jelöli a te pontodat. A belső alak a választott munkamódot mutatja. Az oldal nem küldte el a válaszokat.":"86 generált mintapont. Állítsd be a válaszaidat, majd mutasd meg a saját pontodat."),this.draw()}draw(){if(!this.canvas)return;const t=this.canvas.getContext("2d");if(!t)return;const{width:e,height:s}=T(this.canvas);t.clearRect(0,0,e,s),t.fillStyle="#06080d",t.fillRect(0,0,e,s),t.save(),t.strokeStyle="rgba(111, 180, 255, .12)",t.setLineDash([2,7]);for(let i=1;i<5;i+=1){const o=24+i/5*(e-48),n=24+i/5*(s-48);t.beginPath(),t.moveTo(o,24),t.lineTo(o,s-24),t.stroke(),t.beginPath(),t.moveTo(24,n),t.lineTo(e-24,n),t.stroke()}t.restore();const a=["rgba(111,180,255,.56)","rgba(42,157,143,.56)","rgba(224,69,42,.58)"];if(this.cohort.forEach(i=>{const[o,n]=M(i,e,s,24);t.save(),t.translate(o,n);const r=i.label??0;t.strokeStyle=a[r],t.fillStyle=a[r],t.lineWidth=1.2,t.beginPath(),r===0?t.arc(0,0,3.2,0,Math.PI*2):r===1?t.rect(-2.8,-2.8,5.6,5.6):(t.moveTo(0,-3.7),t.lineTo(3.5,3),t.lineTo(-3.5,3),t.closePath()),t.fill(),t.restore()}),this.ownPoint){const[i,o]=M(this.ownPoint,e,s,24);t.save(),t.translate(i,o),t.strokeStyle="#f2c14e",t.fillStyle="#f2c14e",t.lineWidth=2.2,t.beginPath();const n=this.ownPoint.label??0;n===0?t.arc(0,0,4.5,0,Math.PI*2):n===1?t.rect(-4,-4,8,8):(t.moveTo(0,-5),t.lineTo(4.8,4),t.lineTo(-4.8,4),t.closePath()),t.fill(),t.beginPath(),t.arc(0,0,13,0,Math.PI*2),t.stroke(),t.restore()}}}function Ot(l,t=.045,e=.955){return Math.max(t,Math.min(e,l))}function Ft(l,t,e,s,a,i,o){const n=A(l);return Array.from({length:e},(r,d)=>({id:`${t}-${String(d+1).padStart(2,"0")}`,x:Ot(s+x(n)*i),y:Ot(a+x(n)*o),isAnomaly:!1}))}function Wt(l,t){return t.map(([e,s],a)=>({id:`${l}-X${a+1}`,x:e,y:s,isAnomaly:!0}))}function Us(){return[...Ft(111,"TP",44,.27,.31,.075,.085),...Ft(112,"TPB",44,.7,.66,.08,.09),...Wt("TP",[[.08,.89],[.91,.12],[.92,.9],[.51,.94],[.08,.58]])]}function Gs(){return[...Ft(213,"SC",88,.5,.5,.12,.105),...Wt("SC",[[.08,.12],[.9,.18],[.1,.84],[.91,.88],[.51,.94]])]}function Xs(){const l=A(317);return[...Array.from({length:88},(e,s)=>{const a=.08+l()*.84,i=Ot(.15+a*.68+x(l)*.038);return{id:`DG-${String(s+1).padStart(2,"0")}`,x:a,y:i,isAnomaly:!1}}),...Wt("DG",[[.14,.78],[.28,.9],[.57,.16],[.78,.25],[.92,.46]])]}function de(l,t=5){if(l.length===0)return[];if(l.length===1)return[{...l[0],score:0,rank:1}];const e=Math.min(l.length-1,Math.max(1,Math.floor(Number.isFinite(t)?t:1))),s=l.map((a,i)=>{const n=l.map((r,d)=>d===i?null:Math.hypot(a.x-r.x,a.y-r.y)).filter(r=>r!==null).sort((r,d)=>r-d).slice(0,e).reduce((r,d)=>r+d,0)/e;return{...a,score:n,rank:0}});return s.sort((a,i)=>i.score-a.score||(a.id<i.id?-1:a.id>i.id?1:0)),s.map((a,i)=>({...a,rank:i+1}))}const Lt=[{id:"two-peaks",title:"Két csúcsidő",summary:"Két sűrű tranzakciócsoport",points:Us()},{id:"single-cloud",title:"Egy sűrű mag",summary:"Kompakt, közel kör alakú felhő",points:Gs()},{id:"diagonal",title:"Összeg–idő sáv",summary:"Erős kapcsolat a két tengely között",points:Xs()}],Vt=[{id:"bread",label:"kenyér"},{id:"milk",label:"tej"},{id:"diaper",label:"pelenka"},{id:"beer",label:"sör"},{id:"coffee",label:"kávé"},{id:"apple",label:"alma"}],ce=[{id:"K01",items:["diaper","beer","milk"]},{id:"K02",items:["diaper","beer","bread"]},{id:"K03",items:["diaper","beer"]},{id:"K04",items:["diaper","beer","apple"]},{id:"K05",items:["diaper","milk"]},{id:"K06",items:["diaper","bread"]},{id:"K07",items:["beer","bread"]},{id:"K08",items:["bread","milk","apple"]},{id:"K09",items:["bread","milk"]},{id:"K10",items:["bread","coffee"]},{id:"K11",items:["milk","coffee"]},{id:"K12",items:["bread","apple"]},{id:"K13",items:["milk","apple"]},{id:"K14",items:["coffee","apple"]},{id:"K15",items:["bread","milk","coffee"]},{id:"K16",items:["bread","milk","apple"]},{id:"K17",items:["bread","coffee","apple"]},{id:"K18",items:["milk","coffee","apple"]},{id:"K19",items:["bread","milk"]},{id:"K20",items:["bread","apple"]},{id:"K21",items:["milk","coffee"]},{id:"K22",items:["bread","coffee"]},{id:"K23",items:["milk","apple"]},{id:"K24",items:["bread","milk","coffee","apple"]}];function _s(l,t,e){const s=l.length;let a=0,i=0,o=0;if(l.forEach(u=>{const g=u.items.includes(t),v=u.items.includes(e);g&&(a+=1),v&&(i+=1),g&&v&&(o+=1)}),s===0)return{total:s,countA:a,countB:i,countBoth:o,supportA:null,supportB:null,jointSupport:null,confidenceAToB:null,confidenceBToA:null,lift:null};const n=a/s,r=i/s,d=o/s,c=a===0?null:o/a,h=i===0?null:o/i,p=c===null||r===0?null:c/r;return{total:s,countA:a,countB:i,countBoth:o,supportA:n,supportB:r,jointSupport:d,confidenceAToB:c,confidenceBToA:h,lift:p}}function It(l){return l===null?"—":`${(l*100).toFixed(1).replace(".0","").replace(".",",")}%`}function Rt(l){var t;return((t=Vt.find(e=>e.id===l))==null?void 0:t.label)??l}function Js(l){return l.id==="diagonal"?"↗":l.id==="single-cloud"?"●":"••"}function he(l){const t=l.x.toFixed(2).replace(".",","),e=l.y.toFixed(2).replace(".",",");return`${l.id} · idő ${t} · összeg ${e}`}class Zs{constructor(t){m(this,"context");m(this,"root");m(this,"canvas");m(this,"resizeObserver");m(this,"activeMode","anomaly");m(this,"preset",Lt[0]);m(this,"guesses",new Set);m(this,"revealed",!1);m(this,"neighbours",5);m(this,"itemA","bread");m(this,"itemB","milk");m(this,"tapCandidate");this.context=t}mount(t){this.root=t,t.innerHTML=`
      <article class="module-page patterns-anomalies-page" data-module="patterns-anomalies">
        <header class="module-intro paper-header">
          <div class="module-index">11 <span>/ 12</span></div>
          <div>
            <p class="eyebrow">Mintázatok és anomáliák</p>
            <h1>Ritka pontok és gyakori párok</h1>
            <p class="lede">Jelöld meg a szokatlan tranzakciókat, majd mérd meg, mely termékek fordulnak elő együtt a vártnál gyakrabban.</p>
          </div>
          <a class="present-link" href="?mode=present#/mintazatok" aria-label="Mintázatok és anomáliák megnyitása vetítés módban">Vetítés <span aria-hidden="true">↗</span></a>
        </header>

        <section class="workbench patterns-workbench" aria-labelledby="patterns-workbench-title">
          <div class="workbench-topline">
            <div><p class="section-number">INTERAKTÍV MUNKAPAD</p><h2 id="patterns-workbench-title">Kétféle mintázat</h2></div>
            <p class="workbench-instruction">Mindkét adatkészlet determinisztikus és szintetikus. Nem valós vásárlásokból származik.</p>
          </div>

          <div class="pattern-mode-tabs segmented" role="tablist" aria-label="Feladat választása">
            <button class="is-active" id="anomaly-tab" type="button" role="tab" aria-selected="true" aria-controls="anomaly-panel" tabindex="0" data-pattern-mode="anomaly">Anomáliavadászat</button>
            <button id="basket-tab" type="button" role="tab" aria-selected="false" aria-controls="basket-panel" tabindex="-1" data-pattern-mode="basket">Bevásárlókosarak</button>
          </div>

          <div id="anomaly-panel" class="pattern-panel anomaly-panel" role="tabpanel" aria-labelledby="anomaly-tab" data-pattern-panel="anomaly">
            <div class="preset-strip anomaly-preset-strip" role="group" aria-label="Szintetikus tranzakcióhelyzet választása">
              ${Lt.map((e,s)=>`
                <button class="preset ${s===0?"is-active":""}" type="button" data-anomaly-preset="${e.id}" aria-pressed="${s===0}">
                  <span class="preset-mark preset-custom anomaly-preset-mark" aria-hidden="true">${Js(e)}</span>
                  <span><strong>${e.title}</strong><small>${e.summary}</small></span>
                </button>`).join("")}
            </div>

            <div class="canvas-layout anomaly-layout">
              <aside class="tool-column" aria-label="Anomáliavadászat vezérlői">
                <p class="control-label">Feladat</p>
                <p class="tool-note">Öt beépített anomália van. Kattints legfeljebb öt gyanús pontra.</p>
                <button class="button button-ink" type="button" data-action="reveal-anomalies">Pontszámok felfedése</button>
                <button class="text-tool" type="button" data-action="clear-guesses">Tippek törlése</button>
                <div class="tool-divider"></div>
                <dl class="metric-list anomaly-hit-metrics">
                  <div><dt>Saját találat</dt><dd data-human-hits>—</dd></div>
                  <div><dt data-algorithm-hit-label>5-NN találat</dt><dd data-algorithm-hits>—</dd></div>
                </dl>
              </aside>

              <div class="canvas-column">
                <div class="canvas-frame anomaly-canvas-frame">
                  <canvas class="data-canvas anomaly-canvas" data-anomaly-canvas aria-label="Szintetikus tranzakciók idő és kosárösszeg szerint. Kattintással jelölhető egy gyanús pont." role="img"></canvas>
                  <div class="canvas-corner" aria-hidden="true">kosárösszeg</div><div class="canvas-axis" aria-hidden="true">idő a napon</div>
                </div>
                <div class="canvas-legend anomaly-legend" aria-label="Jelmagyarázat">
                  <span><i class="legend-core" aria-hidden="true"></i>tranzakció</span>
                  <span><i class="legend-noise" aria-hidden="true"></i>saját tipp</span>
                  <span data-reveal-legend hidden><i class="legend-triangle" aria-hidden="true"></i>5-NN rangsor eleje</span>
                </div>
                <p class="canvas-summary" data-anomaly-summary aria-live="polite"></p>
              </div>

              <aside class="parameter-column">
                <label class="range-control" for="anomaly-neighbours">
                  <span><strong>Szomszédok száma, k</strong><output for="anomaly-neighbours" data-neighbour-output>5</output></span>
                  <input id="anomaly-neighbours" type="range" min="2" max="12" step="1" value="5" />
                  <span class="range-ends"><small>lokálisabb</small><small>simább</small></span>
                </label>
                <div class="observation" data-anomaly-observation aria-live="polite"></div>
              </aside>
            </div>

            <div class="anomaly-ranking" data-anomaly-ranking aria-live="polite">
              <div class="anomaly-ranking-placeholder"><strong>A rangsor még rejtve van.</strong><p>A módszer minden pontnál az öt legközelebbi szomszéd átlagtávolságát számítja.</p></div>
            </div>

            <details class="keyboard-entry anomaly-keyboard-entry">
              <summary>Billentyűzetes tippelés</summary>
              <div class="keyboard-entry-fields">
                <label>Tranzakció
                  <select data-suspect-select aria-label="Gyanús tranzakció kiválasztása">
                    ${this.preset.points.map(e=>`<option value="${e.id}">${he(e)}</option>`).join("")}
                  </select>
                </label>
                <button class="button button-ink" type="button" data-action="toggle-suspect">Tipp váltása</button>
              </div>
            </details>
          </div>

          <div id="basket-panel" class="pattern-panel basket-panel" role="tabpanel" aria-labelledby="basket-tab" data-pattern-panel="basket" hidden>
            <div class="basket-controls">
              <div>
                <p class="control-label">Szabály bal oldala</p>
                <label class="basket-select"><span>A termék</span><select data-basket-item="a">${this.itemOptions(this.itemA)}</select></label>
              </div>
              <span class="basket-arrow" aria-hidden="true">→</span>
              <div>
                <p class="control-label">Szabály jobb oldala</p>
                <label class="basket-select"><span>B termék</span><select data-basket-item="b">${this.itemOptions(this.itemB)}</select></label>
              </div>
              <p class="basket-sample-note"><strong>24 kosár</strong><span>Kis, rögzített oktatási minta</span></p>
            </div>

            <div class="basket-analysis">
              <section class="basket-data-panel" aria-labelledby="basket-data-title">
                <div class="basket-panel-heading"><div><p class="control-label">Adatok</p><h3 id="basket-data-title">Bevásárlókosarak</h3></div><p data-basket-count-summary></p></div>
                <ol class="basket-grid" data-basket-grid></ol>
              </section>
              <aside class="basket-metrics-panel" aria-labelledby="basket-metrics-title">
                <p class="control-label">A → B szabály</p>
                <h3 id="basket-metrics-title" data-rule-title></h3>
                <dl class="metric-list basket-metrics">
                  <div><dt>Támogatottság, A∪B</dt><dd data-pair-support>—</dd></div>
                  <div><dt>Bizalom, A→B</dt><dd data-confidence-ab>—</dd></div>
                  <div><dt>Bizalom, B→A</dt><dd data-confidence-ba>—</dd></div>
                  <div><dt>Lift, A→B</dt><dd data-pair-lift>—</dd></div>
                </dl>
                <div class="observation" data-basket-observation aria-live="polite"></div>
              </aside>
            </div>
          </div>
        </section>

        <section class="experiments depth-shell" aria-labelledby="patterns-try-title">
          <div class="depth-kicker">Kísérletek</div><h2 id="patterns-try-title">Három ellenőrizhető próba</h2>
          <ol class="experiment-list">
            <li><span>01</span><div><strong>Tippelj a pontszámok előtt.</strong><p>Jelölj öt pontot a Két csúcsidő készleten, majd hasonlítsd össze a találataidat az 5-NN rangsor első öt helyével.</p></div></li>
            <li><span>02</span><div><strong>Változtasd meg k értékét.</strong><p>A kisebb k szűkebb környezetet vizsgál. Nézd meg, változik-e az első öt pont sorrendje az átlós készleten.</p></div></li>
            <li><span>03</span><div><strong>Keresd meg a legerősebb termékpárt.</strong><p>Válts a kosarakra, és próbáld ki a pelenka → sör szabályt. Az A→B lift a bizalmat B teljes mintabeli gyakoriságához viszonyítja.</p></div></li>
          </ol>
        </section>

        <section class="depth reading-layer" aria-labelledby="patterns-depth-title">
          <p class="eyebrow">Magyarázat</p>
          <h2 id="patterns-depth-title">A ritkaság és az együttjárás külön kérdés.</h2>
          <p>Az anomáliapontszám egy pont környezetét méri; az asszociációs szabály két esemény közös előfordulását. Egyik eredmény sem bizonyít csalást vagy oksági kapcsolatot.</p>
          <div class="concept-grid">
            <div><p class="concept-label">k-NN átlagtávolság</p><h3>Nagyobb érték: ritkább környezet.</h3><p>A koordináták itt előre a [0,1] tartományra vannak skálázva. Minden ponthoz kiválasztjuk a k legközelebbi másik pontot, majd átlagoljuk az euklideszi távolságukat; alaphelyzetben k = 5. Ez nem LOF és nem isolation forest.</p></div>
            <div class="formula" aria-label="az x pont anomáliapontszáma egy per k szor a k legközelebbi szomszéd távolságainak összege">
              <math display="block"><mi>s</mi><mo stretchy="false">(</mo><mi>x</mi><mo stretchy="false">)</mo><mo>=</mo><mfrac><mn>1</mn><mi>k</mi></mfrac><munder><mo>∑</mo><mrow><mi>z</mi><mo>∈</mo><msub><mi>N</mi><mi>k</mi></msub><mo stretchy="false">(</mo><mi>x</mi><mo stretchy="false">)</mo></mrow></munder><mrow><mo>∥</mo><mi>x</mi><mo>−</mo><mi>z</mi><mo>∥</mo><msub><mspace width="0.05em"></mspace><mn>2</mn></msub></mrow></math>
            </div>
          </div>
          <div class="concept-grid association-concepts">
            <div><p class="concept-label">Támogatottság és bizalom</p><h3>A gyakoriság és a feltételes arány.</h3><p>A támogatottság azt mutatja, a kosarak mekkora részében van együtt A és B. A bizalom azt, az A-t tartalmazó kosarak mekkora része tartalmazza B-t is. A két irány bizalma eltérhet.</p></div>
            <div class="formula" aria-label="lift A-ból B-be egyenlő A-ból B-be bizalom per B támogatottsága">
              <math display="block"><mi>lift</mi><mo stretchy="false">(</mo><mi>A</mi><mo>→</mo><mi>B</mi><mo stretchy="false">)</mo><mo>=</mo><mfrac><mrow><mi>conf</mi><mo stretchy="false">(</mo><mi>A</mi><mo>→</mo><mi>B</mi><mo stretchy="false">)</mo></mrow><mrow><mi>supp</mi><mo stretchy="false">(</mo><mi>B</mi><mo stretchy="false">)</mo></mrow></mfrac></math>
            </div>
          </div>
          <aside class="edge-case"><strong>A skálázás számít.</strong> Távolságalapú pontszámnál egy nagy számtartományú változó elnyomhatja a többit. A normalizálás módját a pontszámmal együtt kell rögzíteni.</aside>
          <aside class="edge-case"><strong>A lift nem okság.</strong> A lift 1 fölötti értéke együttjárást jelez ebben a mintában. Nem mondja meg, hogy A okozza-e B-t, és kis mintán bizonytalan lehet.</aside>
          <div class="knowledge-check" data-quiz>
            <p class="concept-label">Ellenőrző kérdés</p>
            <h3>Mit jelent egy A → B szabály 2-es liftje?</h3>
            <div class="answer-grid">
              <button type="button" data-answer="wrong">B minden A-t tartalmazó kosárban szerepel.</button>
              <button type="button" data-answer="right">B kétszer olyan gyakori az A-t tartalmazó kosarakban, mint az összes kosárban.</button>
              <button type="button" data-answer="wrong">A bizonyítottan B vásárlását okozza.</button>
            </div>
            <p class="quiz-feedback" data-quiz-feedback aria-live="polite"></p>
          </div>
        </section>
      </article>`,this.canvas=t.querySelector("[data-anomaly-canvas]")??void 0,this.bindControls(),this.canvas&&(this.resizeObserver=new ResizeObserver(()=>this.drawAnomalies()),this.resizeObserver.observe(this.canvas)),this.updateAnomalies(),this.updateBaskets()}destroy(){var t;(t=this.resizeObserver)==null||t.disconnect(),this.root=void 0,this.canvas=void 0,this.tapCandidate=void 0}itemOptions(t){return Vt.map(e=>`<option value="${e.id}" ${e.id===t?"selected":""}>${e.label}</option>`).join("")}bindControls(){var t,e,s,a,i,o,n,r;this.root&&(this.root.querySelectorAll("[data-pattern-mode]").forEach(d=>{d.addEventListener("click",()=>this.setMode(d.dataset.patternMode??"anomaly")),d.addEventListener("keydown",c=>{var p,u;if(!["ArrowLeft","ArrowRight","Home","End"].includes(c.key))return;c.preventDefault();const h=c.key==="ArrowLeft"||c.key==="Home"?"anomaly":"basket";this.setMode(h),(u=(p=this.root)==null?void 0:p.querySelector(`[data-pattern-mode='${h}']`))==null||u.focus()})}),this.root.querySelectorAll("[data-anomaly-preset]").forEach(d=>{d.addEventListener("click",()=>{var h;const c=Lt.find(p=>p.id===d.dataset.anomalyPreset);c&&(this.preset=c,this.guesses.clear(),this.revealed=!1,(h=this.root)==null||h.querySelectorAll("[data-anomaly-preset]").forEach(p=>{const u=p===d;p.classList.toggle("is-active",u),p.setAttribute("aria-pressed",String(u))}),this.refreshSuspectOptions(),this.updateAnomalies())})}),(t=this.root.querySelector("#anomaly-neighbours"))==null||t.addEventListener("input",d=>{this.neighbours=Number(d.target.value),this.updateAnomalies()}),(e=this.root.querySelector("[data-action='reveal-anomalies']"))==null||e.addEventListener("click",()=>{this.revealed=!0,this.updateAnomalies()}),(s=this.root.querySelector("[data-action='clear-guesses']"))==null||s.addEventListener("click",()=>{this.guesses.clear(),this.revealed=!1,this.updateAnomalies()}),(a=this.root.querySelector("[data-action='toggle-suspect']"))==null||a.addEventListener("click",()=>{var c,h;const d=(h=(c=this.root)==null?void 0:c.querySelector("[data-suspect-select]"))==null?void 0:h.value;d&&this.toggleGuess(d)}),(i=this.canvas)==null||i.addEventListener("pointerdown",d=>{if(d.pointerType==="mouse"){this.guessAt(d.clientX,d.clientY);return}this.tapCandidate={clientX:d.clientX,clientY:d.clientY,moved:!1}}),(o=this.canvas)==null||o.addEventListener("pointermove",d=>{this.tapCandidate&&Math.hypot(d.clientX-this.tapCandidate.clientX,d.clientY-this.tapCandidate.clientY)>9&&(this.tapCandidate.moved=!0)}),(n=this.canvas)==null||n.addEventListener("pointerup",d=>{this.tapCandidate&&!this.tapCandidate.moved&&this.guessAt(d.clientX,d.clientY),this.tapCandidate=void 0}),(r=this.canvas)==null||r.addEventListener("pointercancel",()=>{this.tapCandidate=void 0}),this.root.querySelectorAll("[data-basket-item]").forEach(d=>{d.addEventListener("change",()=>{var h,p;const c=d.dataset.basketItem;if(c==="a"&&(this.itemA=d.value),c==="b"&&(this.itemB=d.value),this.itemA===this.itemB){const u=((h=Vt.find(v=>v.id!==d.value))==null?void 0:h.id)??"bread";c==="a"?this.itemB=u:this.itemA=u;const g=(p=this.root)==null?void 0:p.querySelector(`[data-basket-item='${c==="a"?"b":"a"}']`);g&&(g.value=u)}this.updateBaskets()})}),this.root.querySelectorAll("[data-answer]").forEach(d=>{d.addEventListener("click",()=>{var p,u;const c=d.dataset.answer==="right";(p=this.root)==null||p.querySelectorAll("[data-answer]").forEach(g=>g.classList.remove("is-correct","is-wrong")),d.classList.add(c?"is-correct":"is-wrong");const h=(u=this.root)==null?void 0:u.querySelector("[data-quiz-feedback]");h&&(h.textContent=c?"Helyes. A lift a feltételes és az alapszintű gyakoriság hányadosa. A modult teljesítetted.":"A lift arányt mér; sem 100%-os bizalmat, sem okságot nem állít."),c&&this.context.onComplete()})}))}setMode(t){var e,s;this.activeMode=t,(e=this.root)==null||e.querySelectorAll("[data-pattern-panel]").forEach(a=>{a.hidden=a.dataset.patternPanel!==t}),(s=this.root)==null||s.querySelectorAll("[data-pattern-mode]").forEach(a=>{const i=a.dataset.patternMode===t;a.classList.toggle("is-active",i),a.setAttribute("aria-selected",String(i)),a.tabIndex=i?0:-1}),t==="anomaly"&&requestAnimationFrame(()=>this.drawAnomalies())}refreshSuspectOptions(){var e;const t=(e=this.root)==null?void 0:e.querySelector("[data-suspect-select]");t&&(t.innerHTML=this.preset.points.map(s=>`<option value="${s.id}">${he(s)}</option>`).join(""))}toggleGuess(t){this.revealed||(this.guesses.has(t)?this.guesses.delete(t):this.guesses.size<this.preset.points.filter(e=>e.isAnomaly).length&&this.guesses.add(t),this.updateAnomalies())}guessAt(t,e){if(!this.canvas||this.revealed||this.activeMode!=="anomaly")return;const s=this.canvas.getBoundingClientRect(),a=s.width,i=s.height,o=t-s.left,n=e-s.top;let r;this.preset.points.forEach(d=>{const[c,h]=M({x:d.x,y:1-d.y},a,i,30),p=Math.hypot(o-c,n-h);(!r||p<r.distance)&&(r={point:d,distance:p})}),r&&r.distance<=19&&this.toggleGuess(r.point.id)}updateAnomalies(){var c,h,p;const t=de(this.preset.points,this.neighbours),e=this.preset.points.filter(u=>u.isAnomaly).length,s=t.slice(0,e),a=this.preset.points.filter(u=>u.isAnomaly&&this.guesses.has(u.id)).length,i=s.filter(u=>u.isAnomaly).length,o=(u,g)=>{var b;const v=(b=this.root)==null?void 0:b.querySelector(u);v&&(v.textContent=String(g))};o("[data-neighbour-output]",this.neighbours),o("[data-algorithm-hit-label]",`${this.neighbours}-NN találat`),o("[data-anomaly-summary]",`${this.preset.points.length} szintetikus tranzakció · ${this.guesses.size}/${e} tipp kijelölve.`),o("[data-human-hits]",this.revealed?`${a}/${e}`:"—"),o("[data-algorithm-hits]",this.revealed?`${i}/${e}`:"—");const n=(c=this.root)==null?void 0:c.querySelector("[data-reveal-legend]");n&&(n.hidden=!this.revealed);const r=(h=this.root)==null?void 0:h.querySelector("[data-anomaly-observation]");r&&(this.revealed?r.innerHTML=`<p class="control-label">Eredmény</p><strong>Te: ${a}/${e} · ${this.neighbours}-NN: ${i}/${e}</strong><p>A kék sorszámok a távolságpontszám szerinti első öt helyet mutatják. A sáfrányszín a beépített anomáliákat jelöli.</p>`:this.guesses.size===e?r.innerHTML='<p class="control-label">Tipp kész</p><strong>Öt pont kijelölve.</strong><p>Most fedd fel a pontszámokat, vagy kattints egy jelölt pontra a visszavonáshoz.</p>':r.innerHTML=`<p class="control-label">Saját becslés</p><strong>Még ${e-this.guesses.size} pontot jelölhetsz.</strong><p>A sűrű csoportoktól való távolság csak egy lehetséges jel.</p>`);const d=(p=this.root)==null?void 0:p.querySelector("[data-anomaly-ranking]");d&&(this.revealed?d.innerHTML=`<div class="anomaly-ranking-heading"><div><p class="control-label">${this.neighbours}-NN átlagtávolság</p><h3>Az első öt hely</h3></div><p>Nagyobb pontszám: távolabbi szomszédok.</p></div>
          <ol class="anomaly-rank-list">${s.map(u=>`
            <li data-anomaly-rank="${u.rank}" class="${u.isAnomaly?"is-true-anomaly":"is-ordinary"}">
              <span>${String(u.rank).padStart(2,"0")}</span><strong>${u.id}</strong><small>${u.score.toFixed(3).replace(".",",")}</small>
              <em>${u.isAnomaly?"beépített anomália":"szokásos pont"}${this.guesses.has(u.id)?" · saját tipp":""}</em>
            </li>`).join("")}</ol>`:d.innerHTML=`<div class="anomaly-ranking-placeholder"><strong>A rangsor még rejtve van.</strong><p>A módszer minden pontnál a ${this.neighbours} legközelebbi szomszéd átlagtávolságát számítja.</p></div>`),this.drawAnomalies(t)}drawAnomalies(t=de(this.preset.points,this.neighbours)){if(!this.canvas||this.activeMode!=="anomaly")return;const e=this.canvas.getContext("2d");if(!e)return;const{width:s,height:a}=T(this.canvas);e.clearRect(0,0,s,a),e.fillStyle="#f4f1e8",e.fillRect(0,0,s,a),N(e,s,a,30);const i=this.preset.points.filter(n=>n.isAnomaly).length,o=new Map(t.map(n=>[n.id,n.rank]));this.preset.points.forEach(n=>{const[r,d]=M({x:n.x,y:1-n.y},s,a,30),c=o.get(n.id)??t.length;e.save(),e.beginPath(),e.arc(r,d,this.revealed&&n.isAnomaly?6:3.8,0,Math.PI*2),e.fillStyle=this.revealed&&n.isAnomaly?"#f2c14e":"rgba(18, 32, 63, 0.72)",e.fill(),e.strokeStyle=this.revealed&&n.isAnomaly?"#12203f":"rgba(18, 32, 63, 0.25)",e.lineWidth=this.revealed&&n.isAnomaly?1.5:1,e.stroke(),this.guesses.has(n.id)&&(e.beginPath(),e.arc(r,d,8.5,0,Math.PI*2),e.strokeStyle="#d84429",e.lineWidth=2.2,e.stroke()),this.revealed&&c<=i&&(e.beginPath(),e.rect(r-10,d-10,20,20),e.strokeStyle="#1e67b8",e.lineWidth=1.7,e.stroke(),e.fillStyle="#1e4fb5",e.font='700 10px "IBM Plex Mono", monospace',e.fillText(String(c),r+11,d-7)),e.restore()})}updateBaskets(){var n,r;const t=_s(ce,this.itemA,this.itemB),e=Rt(this.itemA),s=Rt(this.itemB),a=(d,c)=>{var p;const h=(p=this.root)==null?void 0:p.querySelector(d);h&&(h.textContent=String(c))};a("[data-rule-title]",`${e} → ${s}`),a("[data-pair-support]",It(t.jointSupport)),a("[data-confidence-ab]",It(t.confidenceAToB)),a("[data-confidence-ba]",It(t.confidenceBToA)),a("[data-pair-lift]",t.lift===null?"—":t.lift.toFixed(2).replace(".",",")),a("[data-basket-count-summary]",`${t.countBoth} közös · ${t.total} összesen`);const i=(n=this.root)==null?void 0:n.querySelector("[data-basket-grid]");i&&(i.innerHTML=ce.map(d=>{const c=d.items.includes(this.itemA),h=d.items.includes(this.itemB);return`<li class="basket-card ${c&&h?"is-joint":c?"contains-a":h?"contains-b":""}" data-basket-id="${d.id}"><span>${d.id}</span><ul>${d.items.map(u=>`<li class="${u===this.itemA||u===this.itemB?"is-selected-item":""}">${Rt(u)}</li>`).join("")}</ul></li>`}).join(""));const o=(r=this.root)==null?void 0:r.querySelector("[data-basket-observation]");if(o){const d=t.lift===null?"A lift nem számítható.":t.lift>1.05?`${s} gyakoribb a ${e} terméket tartalmazó kosarakban, mint a teljes mintában.`:t.lift<.95?`${s} ritkább a ${e} terméket tartalmazó kosarakban, mint a teljes mintában.`:"A két termék együttjárása ezen a mintán közel van a függetlenséghez.";o.innerHTML=`<p class="control-label">Leolvasás</p><strong>${t.countBoth} kosár tartalmazza mindkettőt.</strong><p>${d}</p>`}}}function Qs(l,t,e){return l<=2?{title:"Alultanulásra utal.",body:"Az alacsony fokszám a látható jel alakját is csak durván követi."}:e<=t*1.9?{title:"A tanító- és validációs hiba hasonló.",body:"A két hiba között ezen a mintán nincs nagy eltérés."}:{title:"Túltanulásra utal.",body:"A tanítóhiba tovább csökken, miközben a validációs pontokon nő a hiba."}}const gt={wave:{title:"Hullámzó jel",question:"Mekkora fokszám követi a görbületet?",make:l=>ke(l)},parabola:{title:"Parabola",question:"Mikor elég a másodfok?",make:l=>Ve(l)},outlier:{title:"Kiugró pont",question:"Mennyire húzza el az illesztést?",make:l=>Ye(l)},custom:{title:"Saját rajz",question:"Építs adatsort üres vásznon.",make:()=>[]}};class ta{constructor(t){m(this,"context");m(this,"root");m(this,"canvas");m(this,"points",ke());m(this,"history",[]);m(this,"activePreset","wave");m(this,"degree",3);m(this,"ridge",0);m(this,"showTest",!1);m(this,"resizeObserver");this.context=t}mount(t){this.root=t,t.innerHTML=`
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
            ${Object.entries(gt).map(([e,s],a)=>`
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
      </article>`,this.canvas=t.querySelector("canvas.data-canvas")??void 0,this.bindControls(),this.canvas&&(this.resizeObserver=new ResizeObserver(()=>this.draw()),this.resizeObserver.observe(this.canvas)),this.update()}destroy(){var t;(t=this.resizeObserver)==null||t.disconnect(),this.root=void 0,this.canvas=void 0}get trainingPoints(){return this.points.filter(t=>t.split!=="test")}get testPoints(){return this.points.filter(t=>t.split==="test")}coefficients(t=this.degree){return _t(this.trainingPoints,t,this.ridge/1e3)}bindControls(){var t,e,s,a,i,o,n;!this.root||!this.canvas||((t=this.root.querySelector("#reg-degree"))==null||t.addEventListener("input",r=>{this.degree=Number(r.target.value),this.update()}),(e=this.root.querySelector("#reg-ridge"))==null||e.addEventListener("input",r=>{this.ridge=Number(r.target.value),this.update()}),(s=this.root.querySelector("[data-show-test]"))==null||s.addEventListener("change",r=>{this.showTest=r.target.checked,this.update()}),this.root.querySelectorAll("[data-regression-preset]").forEach(r=>{r.addEventListener("click",()=>{this.activePreset=r.dataset.regressionPreset??"wave",this.loadPreset()})}),(a=this.root.querySelector("[data-action='new-sample']"))==null||a.addEventListener("click",()=>{const r=Math.floor(Math.random()*1e4);this.points=gt[this.activePreset].make(r),this.history=[],this.update()}),(i=this.root.querySelector("[data-action='reset']"))==null||i.addEventListener("click",()=>{var h,p,u;this.points=gt[this.activePreset].make(),this.history=[],this.degree=3,this.ridge=0,this.showTest=!1;const r=(h=this.root)==null?void 0:h.querySelector("#reg-degree"),d=(p=this.root)==null?void 0:p.querySelector("#reg-ridge"),c=(u=this.root)==null?void 0:u.querySelector("[data-show-test]");r&&(r.value="3"),d&&(d.value="0"),c&&(c.checked=!1),this.update()}),(o=this.root.querySelector("[data-action='undo']"))==null||o.addEventListener("click",()=>{const r=this.history.pop();r&&(this.points=r,this.update())}),(n=this.root.querySelector("[data-action='add-keyboard']"))==null||n.addEventListener("click",()=>{var c,h,p,u;const r=Number(((h=(c=this.root)==null?void 0:c.querySelector("[data-entry-x]"))==null?void 0:h.value)??0),d=Number(((u=(p=this.root)==null?void 0:p.querySelector("[data-entry-y]"))==null?void 0:u.value)??0);this.addPoint({x:Math.max(-1,Math.min(1,r)),y:Math.max(-1,Math.min(1,d)),split:"train"})}),this.canvas.addEventListener("click",r=>{var h;const d=(h=this.canvas)==null?void 0:h.getBoundingClientRect();if(!d)return;const c=24;this.addPoint({x:Math.max(-1,Math.min(1,(r.clientX-d.left-c)/Math.max(1,d.width-c*2)*2-1)),y:Math.max(-.9,Math.min(.9,.9-(r.clientY-d.top-c)/Math.max(1,d.height-c*2)*1.8)),split:"train"})}),this.root.querySelectorAll("[data-answer]").forEach(r=>{r.addEventListener("click",()=>{var h,p;const d=r.dataset.answer==="right";(h=this.root)==null||h.querySelectorAll("[data-answer]").forEach(u=>u.classList.remove("is-correct","is-wrong")),r.classList.add(d?"is-correct":"is-wrong");const c=(p=this.root)==null?void 0:p.querySelector("[data-quiz-feedback]");c&&(c.textContent=d?"Helyes. A csökkenő tanítóhiba és a növekvő validációs hiba túltanulásra utal. A modult teljesítetted.":"Hasonlítsd össze a két hibagörbe irányát."),d&&this.context.onComplete()})}))}loadPreset(){var e;this.points=gt[this.activePreset].make(),this.history=[],this.showTest=!1;const t=(e=this.root)==null?void 0:e.querySelector("[data-show-test]");t&&(t.checked=!1),this.update()}addPoint(t){this.points.length>=80||(this.history.push(this.points.map(e=>({...e}))),this.points.push(t),this.update())}update(){var r,d,c,h,p;const t=this.coefficients(),e=rt(this.trainingPoints,t),s=rt(this.testPoints,t),a=this.trainingPoints.length<2?{title:"Rajzolj legalább két tanítópontot.",body:"A polinom illesztéséhez több, eltérő x koordinátájú megfigyelés szükséges."}:this.showTest&&this.testPoints.length===0?{title:"Ehhez az adatsorhoz nincs félretett pont.",body:"A Saját rajz minden új pontját tanítópontként kezeli."}:this.showTest?Qs(this.degree,e,s):{title:"A validációs pontok rejtve vannak.",body:"A tanítóhiba önmagában nem mutatja meg, hogyan viselkedik a modell a félretett pontokon."},i=(u,g)=>{var b;const v=(b=this.root)==null?void 0:b.querySelector(u);v&&(v.textContent=g)};i("[data-degree-output]",String(this.degree)),i("[data-ridge-output]",this.ridge===0?"0":(this.ridge/1e3).toFixed(3)),i("[data-train-error]",this.trainingPoints.length>0?e.toFixed(3):"—"),i("[data-test-error]",this.showTest?this.testPoints.length>0?s.toFixed(3):"—":"rejtve"),i("[data-summary]",`${this.trainingPoints.length} tanítópont${this.showTest?` · ${this.testPoints.length} validációs pont`:" · a validációs pontok rejtve"}. A függőleges szárak a reziduumokat mutatják.`);const o=(r=this.root)==null?void 0:r.querySelector("[data-observation]");o&&(o.innerHTML=`<p class="control-label">Aktuális eredmény</p><strong>${a.title}</strong><p>${a.body}</p>`),(c=(d=this.root)==null?void 0:d.querySelector(".test-metric"))==null||c.classList.toggle("is-revealed",this.showTest),(h=this.root)==null||h.querySelectorAll("[data-regression-preset]").forEach(u=>{const g=u.dataset.regressionPreset===this.activePreset;u.classList.toggle("is-active",g),u.setAttribute("aria-pressed",String(g))});const n=(p=this.root)==null?void 0:p.querySelector("[data-action='new-sample']");n&&(n.disabled=this.activePreset==="custom"),this.updateChart(),this.draw()}updateChart(){var n,r;if(!this.root)return;const t=Array.from({length:12},(d,c)=>{const h=_t(this.trainingPoints,c+1,this.ridge/1e3);return{train:rt(this.trainingPoints,h),test:rt(this.testPoints,h)}}),e=this.showTest?t.flatMap(d=>[d.train,d.test]):t.map(d=>d.train),s=Math.max(.03,...e.filter(Number.isFinite)),a=d=>t.map((c,h)=>{const p=24+h/11*484,g=98-Math.min(1,c[d]/s)*78;return`${h===0?"M":"L"}${p.toFixed(1)} ${g.toFixed(1)}`}).join(" ");(n=this.root.querySelector("[data-train-path]"))==null||n.setAttribute("d",a("train"));const i=this.root.querySelector("[data-test-path]");i==null||i.setAttribute("d",a("test")),i==null||i.toggleAttribute("hidden",!this.showTest),(r=this.root.querySelector("[data-test-key]"))==null||r.toggleAttribute("hidden",!this.showTest);const o=this.root.querySelector("[data-chart-marker]");if(o){const d=24+(this.degree-1)/11*484;o.setAttribute("x1",String(d)),o.setAttribute("x2",String(d))}}draw(){if(!this.canvas)return;const t=this.canvas.getContext("2d");if(!t)return;const{width:e,height:s}=T(this.canvas);t.clearRect(0,0,e,s),t.fillStyle="#f4f1e8",t.fillRect(0,0,e,s),N(t,e,s,24);const a=n=>24+(n+1)/2*(e-48),i=n=>24+(.9-n)/1.8*(s-48),o=this.coefficients();t.save(),t.strokeStyle="rgba(224, 69, 42, .34)",t.lineWidth=1,this.trainingPoints.forEach(n=>{const r=Bt(o,n.x);t.beginPath(),t.moveTo(a(n.x),i(n.y)),t.lineTo(a(n.x),i(r)),t.stroke()}),t.restore(),t.save(),t.beginPath();for(let n=0;n<=260;n+=1){const r=-1+n/260*2,d=Bt(o,r);!Number.isFinite(d)||Math.abs(d)>3||(n===0?t.moveTo(a(r),i(d)):t.lineTo(a(r),i(d)))}t.strokeStyle="#1e4fb5",t.lineWidth=3,t.stroke(),t.restore(),this.trainingPoints.forEach(n=>{t.beginPath(),t.arc(a(n.x),i(n.y),4.6,0,Math.PI*2),t.fillStyle="#d84429",t.fill(),t.strokeStyle="#f4f1e8",t.lineWidth=1.5,t.stroke()}),this.showTest&&this.testPoints.forEach(n=>{const r=a(n.x),d=i(n.y);t.save(),t.translate(r,d),t.rotate(Math.PI/4),t.fillStyle="#f4f1e8",t.strokeStyle="#1e4fb5",t.lineWidth=2,t.fillRect(-4.5,-4.5,9,9),t.strokeRect(-4.5,-4.5,9,9),t.restore()})}}const Ut=3.25,B=[{id:"csendes-palya",code:"F1",title:"Csendes pálya",description:"lassú sci-fi",factors:[-.86,.68],bias:.1},{id:"varosi-zaj",code:"F2",title:"Városi zaj",description:"pörgős dráma",factors:[.78,.72],bias:-.1},{id:"papirhid",code:"F3",title:"Papírhíd",description:"csendes dráma",factors:[-.62,-.58],bias:.18},{id:"nulladik-kijarat",code:"F4",title:"Nulladik kijárat",description:"abszurd thriller",factors:[.9,-.28],bias:.04},{id:"kisbolygo-kert",code:"F5",title:"Kisbolygó-kert",description:"derűs animáció",factors:[-.22,.94],bias:.24},{id:"ejjeli-muszak",code:"F6",title:"Éjjeli műszak",description:"sötét krimi",factors:[.56,-.82],bias:-.08},{id:"masodik-part",code:"F7",title:"A második part",description:"elmélkedő kaland",factors:[-.94,-.1],bias:.02},{id:"tizenket-perc",code:"F8",title:"Tizenkét perc",description:"feszes vígjáték",factors:[.36,.34],bias:.14}],pe=[{id:"profile-a",label:"A",factors:[-.78,.56],bias:.12,observedItemIds:["csendes-palya","varosi-zaj","papirhid","kisbolygo-kert","masodik-part"]},{id:"profile-b",label:"B",factors:[.72,.66],bias:-.06,observedItemIds:["varosi-zaj","nulladik-kijarat","kisbolygo-kert","ejjeli-muszak","tizenket-perc"]},{id:"profile-c",label:"C",factors:[-.18,-.88],bias:.18,observedItemIds:["csendes-palya","papirhid","nulladik-kijarat","ejjeli-muszak","masodik-part"]},{id:"profile-d",label:"D",factors:[.86,-.46],bias:-.12,observedItemIds:["varosi-zaj","papirhid","kisbolygo-kert","masodik-part","tizenket-perc"]}];function Gt(l){return Math.max(1,Math.min(5,l))}function $e(l,t){const e=l[t];return typeof e=="number"&&Number.isFinite(e)?Gt(e):void 0}function ea(l,t){const e=l.map((s,a)=>[...s,t[a]]);for(let s=0;s<3;s+=1){let a=s;for(let o=s+1;o<3;o+=1)Math.abs(e[o][s])>Math.abs(e[a][s])&&(a=o);[e[s],e[a]]=[e[a],e[s]];const i=e[s][s];if(!Number.isFinite(i)||Math.abs(i)<1e-12)return[0,0,0];for(let o=s;o<4;o+=1)e[s][o]/=i;for(let o=0;o<3;o+=1){if(o===s)continue;const n=e[o][s];for(let r=s;r<4;r+=1)e[o][r]-=n*e[s][r]}}return[e[0][3],e[1][3],e[2][3]]}function sa(l,t=B,e=.8){const s=t.flatMap(p=>{const u=$e(l,p.id);return u===void 0?[]:[{item:p,rating:u}]});if(s.length===0)return{bias:0,factors:[0,0],observedCount:0,trainingRmse:null,state:"cold"};const a=Number.isFinite(e)?Math.max(0,e):.8,i=Array.from({length:3},()=>Array(3).fill(0)),o=Array(3).fill(0);s.forEach(({item:p,rating:u})=>{const g=[1,p.factors[0],p.factors[1]],v=u-Ut-p.bias;for(let b=0;b<3;b+=1){o[b]+=g[b]*v;for(let k=0;k<3;k+=1)i[b][k]+=g[b]*g[k]}}),i[0][0]+=a*.25,i[1][1]+=a,i[2][2]+=a;const[n,r,d]=ea(i,o),c={bias:n,factors:[r,d],observedCount:s.length,trainingRmse:null,state:s.length<3?"provisional":"personalized"},h=s.reduce((p,{item:u,rating:g})=>{const v=g-Pe(c,u);return p+v*v},0);return c.trainingRmse=Math.sqrt(h/s.length),c}function Pe(l,t){return Ut+t.bias+l.bias+l.factors[0]*t.factors[0]+l.factors[1]*t.factors[1]}function zt(l,t){return Gt(Pe(l,t))}function aa(l,t,e=B){return e.filter(s=>$e(t,s.id)===void 0).map(s=>{const a=Gt(Ut+s.bias),i=zt(l,s);return{item:s,score:i,baseline:a,personalizedShift:i-a}}).sort((s,a)=>a.score-s.score||s.item.title.localeCompare(a.item.title,"hu"))}function ia(l,t){return l.observedItemIds.includes(t.id)?Math.round(zt(l,t)):null}const na=[1,2,3,4,5];function I(l){return l.replace(/[&<>'"]/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;","'":"&#39;",'"':"&quot;"})[t]??t)}function V(l,t=2){return new Intl.NumberFormat("hu-HU",{minimumFractionDigits:t,maximumFractionDigits:t}).format(l)}function ue(l){return l.state==="cold"?{label:"Hidegindítás",text:"Még nincs értékelés. A lista csak a filmek szintetikus alapszintjét használja; nem személyre szabott."}:l.state==="provisional"?{label:"Kevés adat",text:`${l.observedCount} értékelésből már becsülhető vektor, de az eredmény erősen regularizált. Három értékeléstől váltunk személyre szabott állapotra.`}:{label:"Személyre szabott",text:`${l.observedCount} értékelésből illesztettük a kétdimenziós ízlésvektort. A sorrend továbbra is modellbecslés.`}}class oa{constructor(t){m(this,"context");m(this,"root");m(this,"canvas");m(this,"resizeObserver");m(this,"ratings",{});m(this,"onClick",t=>{var i;const e=t.target.closest("button");if(!e||!((i=this.root)!=null&&i.contains(e)))return;const s=e.dataset.itemId,a=Number(e.dataset.rating);if(s&&Number.isInteger(a)&&a>=1&&a<=5){this.ratings[s]=a;const o=B.find(n=>n.id===s);this.announce(`${(o==null?void 0:o.title)??"A film"}: ${a} csillag.`),this.update();return}if(e.dataset.action==="clear-rating"&&s){delete this.ratings[s];const o=B.find(n=>n.id===s);this.announce(`${(o==null?void 0:o.title)??"A film"} értékelését törölted.`),this.update();return}if(e.dataset.action==="reset"){this.ratings={},this.announce("Az összes értékelést törölted. A modell hidegindítási állapotban van."),this.update();return}if(e.dataset.action==="load-example"){this.ratings={"csendes-palya":5,"varosi-zaj":2,papirhid:4,"ejjeli-muszak":1},this.announce("Négy fiktív mintaértékelést betöltöttél."),this.update();return}e.dataset.answer&&this.answerQuiz(e)});this.context=t}mount(t){this.root=t,t.innerHTML=`
      <article class="module-page recommender-page" data-module="recommender">
        <header class="module-intro paper-header">
          <div class="module-index">09 <span>/ 12</span></div>
          <div>
            <p class="eyebrow">Ajánlórendszerek · látens faktorok</p>
            <h1>Kétdimenziós faktormodell</h1>
            <p class="lede">Értékelj fiktív filmeket 1–5 csillaggal. A modell újrailleszti a profilodat, majd megbecsüli a hiányzó értékeléseket.</p>
          </div>
          <a class="present-link" href="?mode=present#/ajanlorendszerek" aria-label="Ajánlórendszerek megnyitása vetítési módban">Vetítés <span aria-hidden="true">↗</span></a>
        </header>

        <section class="workbench recommender-workbench" aria-labelledby="recommender-workbench-title">
          <div class="workbench-topline">
            <div><p class="section-number">INTERAKTÍV MUNKAPAD</p><h2 id="recommender-workbench-title">Értékelésekből ajánlási sorrend</h2></div>
            <p class="workbench-instruction">Adj meg legalább három, lehetőleg eltérő értékelést. Egy értékelés törölhető, majd újra megadható.</p>
          </div>

          <div class="recommender-toolbar">
            <p class="synthetic-notice"><strong>Szintetikus oktatási példa.</strong> A filmek, a háttérprofilok és a modellparaméterek fiktívek.</p>
            <div class="recommender-actions">
              <button class="button button-paper" type="button" data-action="load-example">Mintaértékelések</button>
              <button class="text-tool" type="button" data-action="reset">Összes törlése</button>
            </div>
          </div>

          <div class="recommender-workspace">
            <section class="rating-catalogue" aria-labelledby="rating-catalogue-title">
              <div class="recommender-panel-heading">
                <div><p class="control-label">Fiktív katalógus</p><h3 id="rating-catalogue-title">Nyolc film</h3></div>
                <strong data-rating-progress>0 / 8</strong>
              </div>
              <div class="rating-card-grid">
                ${B.map(e=>`
                  <article class="rating-card" data-rating-item="${e.id}">
                    <header><span class="item-code">${e.code}</span><div><h4>${I(e.title)}</h4><p>${I(e.description)}</p></div></header>
                    <div class="star-picker" role="group" aria-label="${I(e.title)} értékelése">
                      ${na.map(s=>`<button type="button" data-item-id="${e.id}" data-rating="${s}" aria-label="${s} csillag" aria-pressed="false"><span aria-hidden="true">★</span></button>`).join("")}
                    </div>
                    <button class="rating-clear" type="button" data-action="clear-rating" data-item-id="${e.id}" disabled>Értékelés törlése</button>
                  </article>`).join("")}
              </div>
            </section>

            <section class="recommender-analysis" aria-labelledby="latent-space-title">
              <div class="profile-status" data-profile-status data-state="cold">
                <span class="profile-status-mark" aria-hidden="true"></span>
                <div><p class="control-label" data-state-label>Hidegindítás</p><p data-state-copy></p></div>
              </div>

              <div class="latent-ranking-layout">
                <div class="latent-space-panel">
                  <div class="recommender-panel-heading">
                    <div><p class="control-label">Élő ábra</p><h3 id="latent-space-title">2D látens tér</h3></div>
                    <span class="latent-vector" data-latent-vector>p = (0,00; 0,00)</span>
                  </div>
                  <div class="canvas-frame latent-canvas-frame">
                    <canvas class="data-canvas recommender-canvas" role="img" aria-label="A fiktív filmek és szintetikus felhasználók kétdimenziós látens tere"></canvas>
                  </div>
                  <div class="latent-legend" aria-label="Jelmagyarázat">
                    <span><i class="legend-current-user" aria-hidden="true"></i>te</span>
                    <span><i class="legend-synthetic-user" aria-hidden="true"></i>szintetikus profil</span>
                    <span><i class="legend-recommended-item" aria-hidden="true"></i>első ajánlás</span>
                    <span><i class="legend-rated-item" aria-hidden="true"></i>értékelt film</span>
                  </div>
                </div>

                <aside class="recommendation-panel" aria-labelledby="recommendation-title">
                  <div class="recommender-panel-heading">
                    <div><p class="control-label">Becsült értékelés</p><h3 id="recommendation-title">Ajánlási sorrend</h3></div>
                  </div>
                  <div data-recommendations></div>
                  <dl class="metric-list recommender-metrics">
                    <div><dt>Megfigyelt</dt><dd data-rating-count>0 / 8</dd></div>
                    <div><dt>Illesztési RMSE</dt><dd data-training-rmse>—</dd></div>
                  </dl>
                </aside>
              </div>

              <div class="factor-matrix" aria-labelledby="factor-matrix-title">
                <div class="recommender-panel-heading matrix-heading">
                  <div><p class="control-label">Értékelési mátrix</p><h3 id="factor-matrix-title">Megfigyelt és becsült cellák</h3></div>
                  <p><strong>★</strong> megfigyelt · <strong>≈</strong> becsült · <strong>·</strong> hiányzó</p>
                </div>
                <div class="rating-matrix-scroll-wrap">
                  <div class="rating-matrix-scroll" data-rating-matrix></div>
                  <span class="rating-matrix-scroll-hint" aria-hidden="true">Húzd oldalra&nbsp; →</span>
                </div>
              </div>
            </section>
          </div>
          <p class="visually-hidden" data-recommender-announcement aria-live="polite"></p>
        </section>

        <section class="experiments depth-shell" aria-labelledby="recommender-try-title">
          <div class="depth-kicker">Kísérletek</div><h2 id="recommender-try-title">Mikor lesz személyes a sorrend?</h2>
          <ol class="experiment-list">
            <li><span>01</span><div><strong>Indulj üres profillal.</strong><p>A hidegindítási lista csak a filmek alapszintjét használja. A „te” pontod még nem jelenik meg a látens térben.</p></div></li>
            <li><span>02</span><div><strong>Adj egy ötöst és egy egyest.</strong><p>Figyeld meg a vektor helyét, majd adj meg egy harmadik értékelést is. A regularizáció kevés adatnál az origó felé húz.</p></div></li>
            <li><span>03</span><div><strong>Töröld a legerősebb értékelést.</strong><p>A hiányzó cella újra becsléssé válik. Ellenőrizd, hogyan változik az első három ajánlás.</p></div></li>
          </ol>
        </section>

        <section class="depth reading-layer" aria-labelledby="recommender-depth-title">
          <p class="eyebrow">Magyarázat</p>
          <h2 id="recommender-depth-title">A modell csak a megfigyelt értékelésekre illeszt.</h2>
          <p>A mátrix sorai felhasználók, oszlopai filmek. A legtöbb cella hiányzik. A modell minden felhasználóhoz és filmhez rövid vektort rendel; a vektorok skalárszorzata adja az egyéni eltérést az alapszinttől.</p>
          <div class="concept-grid">
            <div><p class="concept-label">Ebben a modulban</p><h3>Rögzített elemfaktorok, élő profilillesztés</h3><p>A nyolc film q<sub>i</sub> vektora és b<sub>i</sub> torzítása egy rögzített szintetikus modell része. Minden kattintás után ridge-regresszióval újrabecsüljük a b<sub>u</sub> felhasználói torzítást és a kétdimenziós p<sub>u</sub> vektort.</p></div>
            <div class="formula" aria-label="r kalap u i egyenlő mű plusz b u plusz b i plusz p u transzponált szor q i">
              <math display="block"><msub><mover><mi>r</mi><mo>^</mo></mover><mrow><mi>u</mi><mi>i</mi></mrow></msub><mo>=</mo><mi>μ</mi><mo>+</mo><msub><mi>b</mi><mi>u</mi></msub><mo>+</mo><msub><mi>b</mi><mi>i</mi></msub><mo>+</mo><msubsup><mi>p</mi><mi>u</mi><mi>T</mi></msubsup><msub><mi>q</mi><mi>i</mi></msub></math>
            </div>
          </div>
          <div class="concept-grid">
            <div><p class="concept-label">Mátrixfaktorizáció és SVD</p><h3>Kapcsolódó, de nem azonos eljárások.</h3><p>A klasszikus SVD teljes numerikus mátrixot bont fel. Az explicit ajánlási feladatban jellemzően közvetlenül a megfigyelt cellák hibáját minimalizáljuk, regularizációval. A modul ennek a „fold-in” lépését mutatja: az elemfaktorok adottak, az új felhasználó faktorait illesztjük.</p></div>
            <div><p class="concept-label">Torzítások és korlátok</p><h3>A magas becslés nem biztos jóslat.</h3><p>A b<sub>i</sub> az elemek eltérő alapszintjét, a b<sub>u</sub> a felhasználó általános pontozási szigorát kezeli. Az értékelések önkéntesek és az előző ajánlásoktól is függnek. A modell nem látja a kihagyás okát, az új filmekről pedig nincs faktora.</p></div>
          </div>
          <aside class="edge-case"><strong>A tengelyeknek nincs önálló nevük.</strong> A látens tér elforgatható úgy, hogy a skalárszorzatok és így az összes becslés változatlan maradjon. A közelség hasznos, de a két koordinátát nem szabad automatikusan műfajként értelmezni.</aside>
          <div class="knowledge-check" data-quiz>
            <p class="concept-label">Ellenőrző kérdés</p>
            <h3>Mit jelent egy hiányzó cellára kapott 4,6-os becslés?</h3>
            <div class="answer-grid">
              <button type="button" data-answer="wrong">A felhasználó biztosan 5 csillagot fog adni</button>
              <button type="button" data-answer="right">A modell a megfigyelt minta alapján magas értékelést vár, bizonytalanság mellett</button>
              <button type="button" data-answer="wrong">A film látens koordinátái összeadva 4,6-ot adnak</button>
            </div>
            <p class="quiz-feedback" data-quiz-feedback aria-live="polite"></p>
          </div>
        </section>
      </article>`,this.canvas=t.querySelector("canvas.recommender-canvas")??void 0,t.addEventListener("click",this.onClick),this.canvas&&(this.resizeObserver=new ResizeObserver(()=>this.update()),this.resizeObserver.observe(this.canvas)),this.update()}destroy(){var t,e;(t=this.root)==null||t.removeEventListener("click",this.onClick),(e=this.resizeObserver)==null||e.disconnect(),this.root=void 0,this.canvas=void 0}update(){var n;if(!this.root)return;const t=sa(this.ratings),e=aa(t,this.ratings),s=ue(t),a=(r,d)=>{var h;const c=(h=this.root)==null?void 0:h.querySelector(r);c&&(c.textContent=d)};a("[data-rating-progress]",`${t.observedCount} / 8`),a("[data-rating-count]",`${t.observedCount} / 8`),a("[data-training-rmse]",t.trainingRmse===null?"—":V(t.trainingRmse)),a("[data-state-label]",s.label),a("[data-state-copy]",s.text),a("[data-latent-vector]",`p = (${V(t.factors[0])}; ${V(t.factors[1])})`);const i=this.root.querySelector("[data-profile-status]");i&&(i.dataset.state=t.state);const o=(n=e[0])==null?void 0:n.item.id;this.root.querySelectorAll("[data-rating-item]").forEach(r=>{const d=r.dataset.ratingItem??"",c=this.ratings[d];r.classList.toggle("is-rated",c!==void 0),r.classList.toggle("is-top-recommendation",c===void 0&&d===o),r.querySelectorAll("[data-rating]").forEach(p=>{const u=Number(p.dataset.rating);p.classList.toggle("is-filled",c!==void 0&&u<=c),p.classList.toggle("is-selected",u===c),p.setAttribute("aria-pressed",String(u===c))});const h=r.querySelector("[data-action='clear-rating']");h&&(h.disabled=c===void 0)}),this.renderRecommendations(t,e),this.renderMatrix(t),this.draw(t,e)}renderRecommendations(t,e){var i;const s=(i=this.root)==null?void 0:i.querySelector("[data-recommendations]");if(!s)return;if(e.length===0){s.innerHTML='<p class="recommendation-empty">Mind a nyolc filmet értékelted. Törölj egy értékelést, hogy ismét legyen becsülendő cella.</p>';return}const a=t.state==="cold"?"Nem személyre szabott alaplista":t.state==="provisional"?"Ideiglenes sorrend":"Személyre szabott sorrend";s.innerHTML=`
      <p class="recommendation-mode">${a}</p>
      <ol class="recommendation-list">
        ${e.map((o,n)=>{const r=o.personalizedShift,d=t.state==="cold"?"csak elemalapszint":Math.abs(r)<.01?"az alapszint közelében":`${r>0?"+":""}${V(r)} az alapszinthez képest`;return`<li class="${n===0?"is-first":""}">
            <span class="recommendation-rank">${String(n+1).padStart(2,"0")}</span>
            <div><strong>${I(o.item.title)}</strong><small>${d}</small><span class="score-bar" aria-hidden="true"><i style="width:${o.score/5*100}%"></i></span></div>
            <output aria-label="${I(o.item.title)} becsült értékelése">${V(o.score,1)}</output>
          </li>`}).join("")}
      </ol>`}renderMatrix(t){var i;const e=(i=this.root)==null?void 0:i.querySelector("[data-rating-matrix]");if(!e)return;const s=pe.map(o=>`
      <tr>
        <th scope="row"><span class="matrix-profile-mark">${o.label}</span><span>Fiktív ${o.label}</span></th>
        ${B.map(n=>{const r=ia(o,n);return r===null?`<td class="is-missing" aria-label="${I(n.title)}: hiányzó">·</td>`:`<td class="is-observed" aria-label="${I(n.title)}: ${r} csillag"><strong>${r}</strong><small>★</small></td>`}).join("")}
      </tr>`).join(""),a=B.map(o=>{const n=this.ratings[o.id];return n===void 0?`<td class="is-predicted" aria-label="${I(o.title)}: ${V(zt(t,o),1)} becsült"><strong>≈${V(zt(t,o),1)}</strong></td>`:`<td class="is-observed is-yours" aria-label="${I(o.title)}: ${n} csillag, megfigyelt"><strong>${n}</strong><small>★</small></td>`}).join("");e.innerHTML=`
      <table class="rating-matrix-table">
        <caption class="visually-hidden">Négy szintetikus profil részleges értékelései, valamint a saját megfigyelt és becsült értékeléseid.</caption>
        <thead><tr><th scope="col">Profil</th>${B.map(o=>`<th scope="col"><abbr title="${I(o.title)}">${o.code}</abbr></th>`).join("")}</tr></thead>
        <tbody>${s}<tr class="personal-matrix-row"><th scope="row"><span class="matrix-profile-mark is-you">T</span><span>Te</span></th>${a}</tr></tbody>
      </table>`}draw(t,e){if(!this.canvas)return;const s=this.canvas.getContext("2d");if(!s)return;const{width:a,height:i}=T(this.canvas);s.clearRect(0,0,a,i),s.fillStyle="#f4f1e8",s.fillRect(0,0,a,i);const o=Math.min(42,Math.max(28,a*.07));N(s,a,i,o);const n=1.25,r=p=>o+(Math.max(-n,Math.min(n,p))+n)/(n*2)*(a-o*2),d=p=>i-o-(Math.max(-n,Math.min(n,p))+n)/(n*2)*(i-o*2);s.save(),s.strokeStyle="rgba(18, 32, 63, .28)",s.lineWidth=1,s.beginPath(),s.moveTo(r(0),o),s.lineTo(r(0),i-o),s.moveTo(o,d(0)),s.lineTo(a-o,d(0)),s.stroke(),s.fillStyle="rgba(18, 32, 63, .68)",s.font="11px 'IBM Plex Mono', monospace",s.fillText("L2",r(0)+6,o+12),s.textAlign="right",s.fillText("L1",a-o-4,d(0)-7),s.restore(),pe.forEach(p=>{const u=r(p.factors[0]),g=d(p.factors[1]);s.save(),s.strokeStyle="rgba(18, 32, 63, .46)",s.lineWidth=1.6,s.beginPath(),s.moveTo(u-4,g-4),s.lineTo(u+4,g+4),s.moveTo(u+4,g-4),s.lineTo(u-4,g+4),s.stroke(),s.fillStyle="rgba(18, 32, 63, .62)",s.font="10px 'IBM Plex Mono', monospace",s.fillText(p.label,u+7,g-6),s.restore()});const c=new Map(e.map((p,u)=>[p.item.id,u]));if(B.forEach(p=>this.drawItem(s,p,a,r,d,c)),t.state!=="cold"){const p=r(t.factors[0]),u=d(t.factors[1]);s.save(),s.shadowColor="rgba(216, 68, 41, .32)",s.shadowBlur=12,s.beginPath(),s.arc(p,u,9,0,Math.PI*2),s.fillStyle="#f4f1e8",s.fill(),s.shadowBlur=0,s.strokeStyle="#d84429",s.lineWidth=2.5,s.stroke(),s.beginPath(),s.arc(p,u,2.7,0,Math.PI*2),s.fillStyle="#d84429",s.fill(),s.fillStyle="#12203f",s.font="600 11px 'IBM Plex Sans', sans-serif",s.fillText("Te",p+13,u+4),s.restore()}else{const p=r(0),u=d(0);s.save(),s.setLineDash([3,4]),s.strokeStyle="rgba(216, 68, 41, .62)",s.lineWidth=1.5,s.beginPath(),s.arc(p,u,8,0,Math.PI*2),s.stroke(),s.setLineDash([]),s.fillStyle="rgba(18, 32, 63, .72)",s.font="11px 'IBM Plex Sans', sans-serif",s.fillText("Te · még nincs becslés",p+13,u+4),s.restore()}const h=ue(t).label;this.canvas.setAttribute("aria-label",`Kétdimenziós látens tér nyolc fiktív filmmel és négy szintetikus háttérprofillal. Saját profil: ${h}.`)}drawItem(t,e,s,a,i,o){const n=a(e.factors[0]),r=i(e.factors[1]),d=this.ratings[e.id]!==void 0,h=o.get(e.id)===0,p=h?8:6;t.save(),h&&(t.shadowColor="rgba(216, 68, 41, .38)",t.shadowBlur=14),t.beginPath(),t.arc(n,r,p,0,Math.PI*2),t.fillStyle=d?"#12203f":h?"#d84429":"#1e67b8",t.fill(),t.shadowBlur=0,t.strokeStyle="#f4f1e8",t.lineWidth=2,t.stroke(),t.fillStyle="#12203f",t.font=`${h?"600 ":""}10px 'IBM Plex Mono', monospace`;const u=n>s*.62;t.textAlign=u?"right":"left",t.fillText(e.code,n+(u?-11:11),r+3),t.restore()}answerQuiz(t){var a,i;const e=t.dataset.answer==="right";(a=this.root)==null||a.querySelectorAll("[data-answer]").forEach(o=>o.classList.remove("is-correct","is-wrong")),t.classList.add(e?"is-correct":"is-wrong");const s=(i=this.root)==null?void 0:i.querySelector("[data-quiz-feedback]");s&&(s.textContent=e?"Helyes. A becslés a modell feltételei mellett várható érték, nem biztos felhasználói reakció. A modult teljesítetted.":"A becslés a megfigyelt mintából és a faktormodellből származik; nem garantált eredmény."),e&&this.context.onComplete()}announce(t){var s;const e=(s=this.root)==null?void 0:s.querySelector("[data-recommender-announcement]");e&&(e.textContent=t)}}const Ht=[10,8,13,9,11,14,6,4,12,7,5];function vt(l,t){return l.map((e,s)=>({x:e,y:t[s]}))}const bt=[{id:"I",title:"Közel lineáris",prompt:"A regressziós egyenes itt hihető összegzés.",points:vt(Ht,[8.04,6.95,7.58,8.81,8.33,9.96,7.24,4.26,10.84,4.82,5.68])},{id:"II",title:"Görbült",prompt:"A korreláció nem mutatja meg a görbületet.",points:vt(Ht,[9.14,8.14,8.74,8.77,9.26,8.1,6.13,3.1,9.13,7.26,4.74])},{id:"III",title:"Egy kiugró érték",prompt:"Egyetlen pont húzza a meredekséget.",points:vt(Ht,[7.46,6.77,12.74,7.11,7.81,8.84,6.08,5.39,8.15,6.42,5.73])},{id:"IV",title:"Függőleges sor",prompt:"A legtöbb x azonos; egy pont tartja a korrelációt.",points:vt([8,8,8,8,8,8,8,19,8,8,8],[6.58,5.76,7.71,8.84,8.47,7.04,5.25,12.5,5.56,7.91,6.89])}];function me(l){return l.length===0?Number.NaN:l.reduce((t,e)=>t+e,0)/l.length}function ge(l){const t=l.length;if(t===0)return{count:t,meanX:Number.NaN,meanY:Number.NaN,sampleStandardDeviationX:Number.NaN,sampleStandardDeviationY:Number.NaN,correlation:null,slope:null,intercept:null};const e=me(l.map(g=>g.x)),s=me(l.map(g=>g.y)),a=l.reduce((g,v)=>g+(v.x-e)**2,0),i=l.reduce((g,v)=>g+(v.y-s)**2,0),o=l.reduce((g,v)=>g+(v.x-e)*(v.y-s),0),n=Math.max(1,t-1),r=Math.sqrt(a/n),d=Math.sqrt(i/n),c=Math.sqrt(a*i),h=c===0?null:o/c,p=a===0?null:o/a,u=p===null?null:s-p*e;return{count:t,meanX:e,meanY:s,sampleStandardDeviationX:r,sampleStandardDeviationY:d,correlation:h,slope:p,intercept:u}}function H(l,t=2){return l===null||!Number.isFinite(l)?"—":l.toFixed(t).replace(".",",")}class ra{constructor(t){m(this,"context");m(this,"root");m(this,"canvas");m(this,"resizeObserver");m(this,"dataset",bt[0]);m(this,"chartMode","scatter");m(this,"compareAll",!1);m(this,"hoveredIndex",-1);this.context=t}mount(t){this.root=t,t.innerHTML=`
      <article class="module-page" data-module="visualization">
        <header class="module-intro paper-header">
          <div class="module-index">12 <span>/ 12</span></div>
          <div>
            <p class="eyebrow">Adatvizualizáció · Anscombe-kvartett</p>
            <h1>Azonos statisztikák, eltérő ábrák</h1>
            <p class="lede">Négy adathalmaz összegző számai szinte azonosak. Válts közöttük, majd nézd meg a pontok elrendezését.</p>
          </div>
          <a class="present-link" href="?mode=present#/vizualizacio" aria-label="Adatvizualizáció megnyitása vetítés módban">Vetítés <span aria-hidden="true">↗</span></a>
        </header>

        <section class="workbench" aria-labelledby="viz-workbench-title">
          <div class="workbench-topline">
            <div><p class="section-number">INTERAKTÍV MUNKAPAD</p><h2 id="viz-workbench-title">Ugyanazok a számok?</h2></div>
            <p class="workbench-instruction">Előbb hasonlítsd össze a statisztikákat, aztán nyomd meg a „Mind a négy” gombot. A pontábra mutatja meg, mit takar el az összegzés.</p>
          </div>

          <div class="preset-strip" role="group" aria-label="Anscombe-adathalmaz választása">
            ${bt.map((e,s)=>`
              <button class="preset ${s===0?"is-active":""}" type="button" data-viz-dataset="${e.id}" aria-pressed="${s===0}">
                <span class="preset-mark viz-preset-mark" aria-hidden="true">${e.id}</span>
                <span><strong>${e.title}</strong><small>${e.prompt}</small></span>
              </button>`).join("")}
          </div>

          <div class="canvas-layout visualization-layout">
            <aside class="tool-column" aria-label="Ábrázolási beállítások">
              <p class="control-label">Ábrázolás</p>
              <button class="class-tool is-active" type="button" data-viz-mode="scatter" aria-pressed="true"><span aria-hidden="true">••</span><span>Pontábra</span></button>
              <button class="class-tool" type="button" data-viz-mode="connected" aria-pressed="false"><span aria-hidden="true">⌁</span><span>Összekötve</span></button>
              <div class="tool-divider"></div>
              <button class="button button-ink" type="button" data-action="compare">Mind a négy</button>
              <p class="tool-note">Az összekötés a táblázat sorrendjét időbeli sorrendként láttatja, pedig itt nincs időváltozó.</p>
            </aside>

            <div class="canvas-column">
              <div class="canvas-frame visualization-canvas-frame">
                <canvas class="data-canvas" data-viz-canvas role="img" aria-label="Az Anscombe-kvartett kiválasztott pontábrája"></canvas>
              </div>
              <p class="canvas-summary" data-summary aria-live="polite"></p>
            </div>

            <aside class="parameter-column">
              <div class="observation" data-observation aria-live="polite"></div>
              <dl class="metric-list visualization-metrics">
                <div><dt>Átlag x̄</dt><dd data-mean-x>—</dd></div>
                <div><dt>Átlag ȳ</dt><dd data-mean-y>—</dd></div>
                <div><dt>Mintaszórás sₓ</dt><dd data-sd-x>—</dd></div>
                <div><dt>Mintaszórás sᵧ</dt><dd data-sd-y>—</dd></div>
                <div><dt>Korreláció r</dt><dd data-correlation>—</dd></div>
                <div><dt>Egyenes</dt><dd data-regression>—</dd></div>
              </dl>
              <p class="tool-note" data-hover>Mutass egy pontra a koordinátáihoz.</p>
            </aside>
          </div>
        </section>

        <section class="experiments depth-shell" aria-labelledby="viz-try-title">
          <div class="depth-kicker">Kísérletek</div><h2 id="viz-try-title">Három ellenőrzés</h2>
          <ol class="experiment-list">
            <li><span>01</span><div><strong>Válts az I. és II. adathalmaz között.</strong><p>A korreláció és a regressziós egyenes alig változik, de a második pontfelhő görbült.</p></div></li>
            <li><span>02</span><div><strong>Nézd meg a III. adathalmazt.</strong><p>Takard le fejben a felső pontot. Az alatta maradó pontokból nem ugyanaz a pozitív kapcsolat következne.</p></div></li>
            <li><span>03</span><div><strong>Kapcsold be az Összekötve nézetet.</strong><p>A vonal mintázatot sugall, noha csak a sorok tárolási sorrendjét köti össze. Az ábratípus állítást tesz az adatról.</p></div></li>
          </ol>
        </section>

        <section class="depth reading-layer" aria-labelledby="viz-depth-title">
          <p class="eyebrow">Magyarázat</p>
          <h2 id="viz-depth-title">Az összegző statisztika és az ábra más kérdést válaszol meg.</h2>
          <p>Az átlag, a szórás, a korreláció és az illesztett egyenes néhány számmal foglalja össze a mintát. Ettől még nem derül ki a kapcsolat alakja, a kiugró pontok szerepe vagy az, hogy az x értékek milyen tartományban fordulnak elő.</p>
          <div class="concept-grid">
            <div><p class="concept-label">Korreláció</p><h3>Lineáris együttjárást mér.</h3><p>A Pearson-féle korreláció előjele és nagysága a lineáris kapcsolatot összegzi. A görbült kapcsolat és az egyetlen nagy hatású pont külön vizsgálatot kér.</p></div>
            <div class="formula" aria-label="r egyenlő az x és y eltérésszorzatainak összege osztva a négyzetes eltérések szorzatának négyzetgyökével">
              <math display="block"><mi>r</mi><mo>=</mo><mfrac><mrow><mo>∑</mo><mo>(</mo><msub><mi>x</mi><mi>i</mi></msub><mo>−</mo><mover><mi>x</mi><mo>¯</mo></mover><mo>)</mo><mo>(</mo><msub><mi>y</mi><mi>i</mi></msub><mo>−</mo><mover><mi>y</mi><mo>¯</mo></mover><mo>)</mo></mrow><msqrt><mrow><mo>∑</mo><msup><mrow><mo>(</mo><msub><mi>x</mi><mi>i</mi></msub><mo>−</mo><mover><mi>x</mi><mo>¯</mo></mover><mo>)</mo></mrow><mn>2</mn></msup><mo>∑</mo><msup><mrow><mo>(</mo><msub><mi>y</mi><mi>i</mi></msub><mo>−</mo><mover><mi>y</mi><mo>¯</mo></mover><mo>)</mo></mrow><mn>2</mn></msup></mrow></msqrt></mfrac></math>
            </div>
          </div>
          <aside class="edge-case"><strong>Mire jó ez a példa?</strong> Arra, hogy minden modellezés előtt nézd meg az eloszlást és a kapcsolat alakját. Nem arra, hogy az összegző statisztikák fölöslegesek: az ábrával együtt értelmezhetők jól.</aside>
          <aside class="edge-case"><strong>Az adatok eredete.</strong> Ez az Anscombe-kvartett, Francis Anscombe 1973-as szemléltető adatsora. A modul a 11-11 megfigyelést változtatás nélkül számolja újra.</aside>
          <div class="knowledge-check" data-quiz>
            <p class="concept-label">Ellenőrző kérdés</p><h3>Két mintának azonos az átlaga és a korrelációja. Mi következik ebből?</h3>
            <div class="answer-grid">
              <button type="button" data-answer="wrong">A pontfelhőjük alakja is azonos.</button>
              <button type="button" data-answer="right">A megadott statisztikák egyeznek; az alakot még meg kell nézni.</button>
              <button type="button" data-answer="wrong">Mindkettőre biztosan megfelelő a lineáris regresszió.</button>
            </div>
            <p class="quiz-feedback" data-quiz-feedback aria-live="polite"></p>
          </div>
        </section>
      </article>`,this.canvas=t.querySelector("[data-viz-canvas]")??void 0,this.bindControls(),this.canvas&&(this.resizeObserver=new ResizeObserver(()=>this.draw()),this.resizeObserver.observe(this.canvas)),this.update()}destroy(){var t;(t=this.resizeObserver)==null||t.disconnect(),this.root=void 0,this.canvas=void 0}bindControls(){var t,e,s;this.root&&(this.root.querySelectorAll("[data-viz-dataset]").forEach(a=>{a.addEventListener("click",()=>{var o;const i=bt.find(n=>n.id===a.dataset.vizDataset);i&&(this.dataset=i,this.compareAll=!1,this.hoveredIndex=-1,(o=this.root)==null||o.querySelectorAll("[data-viz-dataset]").forEach(n=>{const r=n===a;n.classList.toggle("is-active",r),n.setAttribute("aria-pressed",String(r))}),this.update())})}),this.root.querySelectorAll("[data-viz-mode]").forEach(a=>{a.addEventListener("click",()=>{var i;this.chartMode=a.dataset.vizMode==="connected"?"connected":"scatter",this.compareAll=!1,(i=this.root)==null||i.querySelectorAll("[data-viz-mode]").forEach(o=>{const n=o===a;o.classList.toggle("is-active",n),o.setAttribute("aria-pressed",String(n))}),this.update()})}),(t=this.root.querySelector("[data-action='compare']"))==null||t.addEventListener("click",()=>{this.compareAll=!this.compareAll,this.hoveredIndex=-1,this.update()}),(e=this.canvas)==null||e.addEventListener("pointermove",a=>this.onPointerMove(a)),(s=this.canvas)==null||s.addEventListener("pointerleave",()=>{this.hoveredIndex=-1,this.updateHoverText(),this.draw()}),this.root.querySelectorAll("[data-answer]").forEach(a=>{a.addEventListener("click",()=>{var n,r;const i=a.dataset.answer==="right";(n=this.root)==null||n.querySelectorAll("[data-answer]").forEach(d=>d.classList.remove("is-correct","is-wrong")),a.classList.add(i?"is-correct":"is-wrong");const o=(r=this.root)==null?void 0:r.querySelector("[data-quiz-feedback]");o&&(o.textContent=i?"Helyes. Az összegző számok mellé az eloszlás alakja is kell. A modult teljesítetted.":"Nézd meg egyszerre a négy pontábrát: a számok hasonlók, az alakok nem."),i&&this.context.onComplete()})}))}update(){var i,o,n;const t=ge(this.dataset.points),e=(r,d)=>{var h;const c=(h=this.root)==null?void 0:h.querySelector(r);c&&(c.textContent=d)};e("[data-mean-x]",H(t.meanX)),e("[data-mean-y]",H(t.meanY)),e("[data-sd-x]",H(t.sampleStandardDeviationX)),e("[data-sd-y]",H(t.sampleStandardDeviationY)),e("[data-correlation]",H(t.correlation,3)),e("[data-regression]",t.slope===null||t.intercept===null?"—":`ŷ = ${H(t.intercept,1)} + ${H(t.slope,2)}x`),e("[data-summary]",this.compareAll?"Négy különböző alak · közel azonos átlag, szórás, korreláció és regressziós egyenes.":`${this.dataset.id}. adathalmaz · ${this.dataset.points.length} pont · ${this.chartMode==="scatter"?"pontábra":"tárolási sorrendben összekötve"}.`);const s=(i=this.root)==null?void 0:i.querySelector("[data-observation]");s&&(s.innerHTML=this.compareAll?'<p class="control-label">Együttes nézet</p><strong>A számok nem azonosítják az alakot.</strong><p>A négy pontfelhő más ellenőrzést vagy modellt indokol.</p>':`<p class="control-label">${this.dataset.id}. adathalmaz</p><strong>${this.dataset.title}</strong><p>${this.dataset.prompt}</p>`);const a=(o=this.root)==null?void 0:o.querySelector("[data-action='compare']");a&&(a.textContent=this.compareAll?"Kiválasztott nézet":"Mind a négy",a.setAttribute("aria-pressed",String(this.compareAll))),(n=this.canvas)==null||n.setAttribute("aria-label",this.compareAll?"Az Anscombe-kvartett négy pontábrája egymás mellett":`Az Anscombe-kvartett ${this.dataset.id}. adathalmazának ${this.chartMode==="scatter"?"pontábrája":"összekötött ábrája"}`),this.updateHoverText(),this.draw()}updateHoverText(){var s;const t=(s=this.root)==null?void 0:s.querySelector("[data-hover]");if(!t)return;const e=this.dataset.points[this.hoveredIndex];t.textContent=e&&!this.compareAll?`Kijelölt pont: x = ${H(e.x,0)}, y = ${H(e.y,2)}.`:"Mutass egy pontra a koordinátáihoz."}onPointerMove(t){if(!this.canvas||this.compareAll)return;const e=this.canvas.getBoundingClientRect(),s=e.width,a=e.height,i=this.dataset.points.map(r=>this.mapPoint(r,{x:40,y:22,width:s-60,height:a-58}));let o=-1,n=12;i.forEach(([r,d],c)=>{const h=Math.hypot(t.clientX-e.left-r,t.clientY-e.top-d);h<n&&(o=c,n=h)}),o!==this.hoveredIndex&&(this.hoveredIndex=o,this.updateHoverText(),this.draw())}draw(){if(!this.canvas)return;const t=this.canvas.getContext("2d");if(!t)return;const{width:e,height:s}=T(this.canvas);if(t.clearRect(0,0,e,s),t.fillStyle="#f4f1e8",t.fillRect(0,0,e,s),this.compareAll){const i=(e-42)/2,o=(s-42)/2;bt.forEach((n,r)=>{const d=r%2,c=Math.floor(r/2);this.drawPlot(t,n,{x:14+d*(i+14),y:14+c*(o+14),width:i,height:o},!1,n.id)})}else this.drawPlot(t,this.dataset,{x:18,y:12,width:e-36,height:s-24},!0)}drawPlot(t,e,s,a,i){const o={x:s.x+(a?34:22),y:s.y+(a?12:20),width:s.width-(a?48:32),height:s.height-(a?42:30)};t.save(),t.strokeStyle="rgba(18, 32, 63, 0.12)",t.lineWidth=1,t.setLineDash([2,5]);for(let d=0;d<=4;d+=1){const c=o.x+d/4*o.width,h=o.y+d/4*o.height;t.beginPath(),t.moveTo(c,o.y),t.lineTo(c,o.y+o.height),t.moveTo(o.x,h),t.lineTo(o.x+o.width,h),t.stroke()}t.setLineDash([]),t.strokeStyle="rgba(18, 32, 63, 0.3)",t.strokeRect(o.x+.5,o.y+.5,o.width-1,o.height-1);const n=ge(e.points);if(n.slope!==null&&n.intercept!==null){const d=this.mapPoint({x:2,y:n.intercept+n.slope*2},o),c=this.mapPoint({x:20,y:n.intercept+n.slope*20},o);t.strokeStyle="rgba(30, 79, 181, 0.56)",t.lineWidth=a?2:1.5,t.setLineDash([6,4]),t.beginPath(),t.moveTo(d[0],d[1]),t.lineTo(c[0],c[1]),t.stroke(),t.setLineDash([])}const r=e.points.map(d=>this.mapPoint(d,o));a&&this.chartMode==="connected"&&(t.strokeStyle="rgba(216, 68, 41, 0.55)",t.lineWidth=1.5,t.beginPath(),r.forEach(([d,c],h)=>h===0?t.moveTo(d,c):t.lineTo(d,c)),t.stroke()),r.forEach(([d,c],h)=>{const p=a&&h===this.hoveredIndex;t.beginPath(),t.arc(d,c,p?7:a?5:3.4,0,Math.PI*2),t.fillStyle=p?"#d84429":"#1e4fb5",t.fill(),t.strokeStyle="#f4f1e8",t.lineWidth=p?2.2:1.2,t.stroke()}),t.fillStyle="rgba(18, 32, 63, 0.62)",t.font=`${a?10:9}px "IBM Plex Mono", monospace`,a&&(t.fillText("x",o.x+o.width-4,o.y+o.height+18),t.fillText("y",o.x-18,o.y+8)),i&&(t.fillStyle="#12203f",t.font='650 11px "IBM Plex Mono", monospace',t.fillText(i,s.x+5,s.y+12)),t.restore()}mapPoint(t,e){const s=e.x+(t.x-2)/18*e.width,a=e.y+e.height-(t.y-2)/12*e.height;return[s,a]}}const Te="adatspiral-progress-v1";function la(){try{const l=JSON.parse(localStorage.getItem(Te)??"[]");return new Set(Array.isArray(l)?l.filter(t=>typeof t=="string"):[])}catch{return new Set}}class da{constructor(t){m(this,"host");m(this,"completed",la());m(this,"home");m(this,"playground");m(this,"route","");m(this,"activeStationIndex",0);m(this,"lastModuleTrigger");m(this,"closeQuickMenu");m(this,"onHashChange",()=>{if(this.isPresentMode()){this.renderPresent();return}this.handleRoute()});this.host=t}mount(){var t;window.addEventListener("hashchange",this.onHashChange),(t=document.querySelector(".skip-link"))==null||t.addEventListener("click",e=>{const s=this.host.querySelector("[data-module-dialog]");if(s!=null&&s.open)return;e.preventDefault();const a=this.host.querySelector("#main-content");a&&(a.tabIndex=-1,a.focus())}),this.isPresentMode()?this.renderPresent():this.renderShell()}renderShell(){this.destroyViews(),document.body.classList.remove("present-mode","module-overlay-open","menu-open"),document.body.dataset.route="home",this.route=this.readRoute();const t=tt(this.route),e=t&&t.index>0?t.index-1:0;this.activeStationIndex=e,this.host.innerHTML=`${this.header()}<div id="page-root"></div>${this.quickStart()}${this.moduleDialog()}${this.toast()}`,this.bindShell();const s=this.host.querySelector("#page-root");s&&(this.home=new De,this.home.mount(s,this.completed,{initialIndex:e,onActiveChange:a=>{this.activeStationIndex=a,this.updateHeaderStation(a)}}),this.updateHeaderStation(e),this.syncProgress(),window.requestAnimationFrame(()=>this.handleRoute(!0)))}renderPresent(){this.destroyViews(),document.body.classList.remove("module-overlay-open","menu-open"),document.body.classList.add("present-mode"),this.route=this.readRoute();const t=tt(this.route);document.body.dataset.route=this.route||"home",document.title=t?`${t.shortTitle} · Adatspirál`:"Adatspirál · Vetítés",this.host.innerHTML=`${this.presentHeader()}<div id="page-root"></div>${this.toast()}`;const e=this.host.querySelector("#page-root");if(!e)return;const s=this.createPlayground(this.route,!0);s?(e.innerHTML='<main id="main-content"></main>',s.mount(e.querySelector("main")),this.playground=s):this.renderUnavailable(e),this.syncProgress(),window.scrollTo({top:0,left:0,behavior:"auto"})}handleRoute(t=!1){var a;const e=this.readRoute();this.route=e;const s=tt(e);if(!e){this.closeModule(),document.title="Adatspirál · Bevezetés az adattudományba 1.",document.body.dataset.route="home";return}if(!s){this.closeModule(),this.replaceWithHomeRoute(),this.route="",document.title="Adatspirál · Bevezetés az adattudományba 1.";return}if(s.index>0&&(this.activeStationIndex=s.index-1,(a=this.home)==null||a.scrollToStation(this.activeStationIndex,"auto")),s.status!=="live"){this.closeModule(),this.replaceWithHomeRoute(),this.route="",document.title="Adatspirál · Bevezetés az adattudományba 1.";return}this.openModule(e)}openModule(t){var d,c,h;const e=this.host.querySelector("[data-module-dialog]"),s=this.host.querySelector("[data-module-host]"),a=tt(t);if(!e||!s||!a||e.open&&e.dataset.openSlug===t)return;if(!((d=this.lastModuleTrigger)!=null&&d.isConnected)){const p=document.activeElement instanceof HTMLElement?document.activeElement:void 0;this.lastModuleTrigger=p!=null&&p.matches("[data-open-station], [data-quick-open], .quick-prologue")?p:void 0}(c=this.closeQuickMenu)==null||c.call(this,!1),(h=this.playground)==null||h.destroy(),this.playground=void 0,s.innerHTML="";const i=this.createPlayground(t,!1);if(!i)return;const o=this.host.querySelector("[data-dialog-number]"),n=this.host.querySelector("[data-dialog-title]"),r=this.host.querySelector("[data-dialog-present]");o&&(o.textContent=a.index===0?"Bevezető modul":`${String(a.index).padStart(2,"0")} / 12`),n&&(n.textContent=a.shortTitle),r&&(r.href=`?mode=present#/${t}`,r.setAttribute("aria-label",`${a.shortTitle} megnyitása vetítési módban`)),i.mount(s),this.playground=i,e.dataset.openSlug=t,document.body.classList.add("module-overlay-open"),document.body.dataset.route=t,document.title=`${a.shortTitle} · Adatspirál`,e.open||e.showModal(),s.scrollTop=0,window.requestAnimationFrame(()=>n==null?void 0:n.focus({preventScroll:!0})),this.syncProgress()}closeModule(){var a,i;const t=this.host.querySelector("[data-module-dialog]"),e=this.host.querySelector("[data-module-host]"),s=!!(t!=null&&t.open);if(t!=null&&t.open&&t.close(),t&&delete t.dataset.openSlug,(a=this.playground)==null||a.destroy(),this.playground=void 0,e&&(e.innerHTML=""),document.body.classList.remove("module-overlay-open"),document.body.dataset.route="home",s){const o=this.host.querySelector(`[data-helix-preview="${this.activeStationIndex}"]:not([inert]), [data-helix-card="${this.activeStationIndex}"] [data-open-station]`),r=((i=this.lastModuleTrigger)==null?void 0:i.isConnected)&&!this.lastModuleTrigger.closest("[inert]")?this.lastModuleTrigger:o;window.requestAnimationFrame(()=>r==null?void 0:r.focus({preventScroll:!0}))}this.lastModuleTrigger=void 0}requestModuleClose(){this.replaceWithHomeRoute(),this.route="",this.closeModule(),document.title="Adatspirál · Bevezetés az adattudományba 1."}header(){const t=P[this.activeStationIndex];return`<header class="site-header">
      <a class="wordmark" href="#/" aria-label="Adatspirál kezdőlap">${this.logo()}<span>Adatspirál</span></a>
      <div class="header-station" aria-live="polite"><span data-header-index>${String(t.index).padStart(2,"0")} / 12</span><strong data-header-title>${t.shortTitle}</strong></div>
      <button class="station-menu-button" type="button" aria-expanded="false" aria-controls="station-menu"><span>Gyorsindítás</span><i aria-hidden="true"></i></button>
    </header>`}presentHeader(){const t=tt(this.route);return`<header class="present-header"><a class="wordmark" href="${window.location.pathname}#/${this.route}" aria-label="Kilépés a vetítési módból">${this.logo()}<span>Adatspirál</span></a><div><span>VETÍTÉS</span><strong>${(t==null?void 0:t.title)??"Modul"}</strong></div><a class="exit-present" href="${window.location.pathname}#/${this.route}">Kilépés</a></header>`}quickStart(){return`<div class="station-menu-backdrop" data-menu-backdrop hidden></div><aside class="station-menu quick-start" id="station-menu" role="dialog" aria-modal="true" aria-label="Gyorsindítás" aria-hidden="true" inert>
      <div class="station-menu-head"><div><small>12 téma · ${Ie.length} modul</small><strong>Gyorsindítás</strong></div><button type="button" data-close-menu aria-label="Gyorsindítás bezárása">×</button></div>
      <a class="quick-prologue" href="#/${W.slug}"><span>00</span><span><small>Bevezető modul</small><strong>${W.shortTitle}</strong></span><em>Megnyitás</em></a>
      <ol>${P.map((t,e)=>`<li class="quick-row ${t.status==="live"?"is-live":""}">
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
    </dialog>`}toast(){return'<div class="completion-toast" role="status" aria-live="polite" aria-hidden="true" data-completion-toast><span aria-hidden="true">✓</span><div><strong>Modul teljesítve</strong><small>A böngésző elmentette a haladást.</small></div></div>'}bindShell(){var d,c;const t=this.host.querySelector(".station-menu-button"),e=this.host.querySelector(".station-menu"),s=this.host.querySelector("[data-menu-backdrop]"),a=this.host.querySelector("#page-root"),i=this.host.querySelector(".site-header .wordmark"),o=this.host.querySelector(".header-station");this.host.addEventListener("click",h=>{const p=h.target instanceof Element?h.target.closest("[data-open-station], [data-quick-open], .quick-prologue"):null;p&&(this.lastModuleTrigger=p.closest(".station-menu")?t??void 0:p)});const n=(h,p=!0)=>{var u;t==null||t.setAttribute("aria-expanded",String(h)),e==null||e.setAttribute("aria-hidden",String(!h)),e==null||e.toggleAttribute("inert",!h),e==null||e.classList.toggle("is-open",h),s&&(s.hidden=!h),document.body.classList.toggle("menu-open",h),a==null||a.toggleAttribute("inert",h),i==null||i.toggleAttribute("inert",h),o==null||o.toggleAttribute("inert",h),h?(u=e==null?void 0:e.querySelector("[data-close-menu]"))==null||u.focus():p&&(t==null||t.focus())};this.closeQuickMenu=(h=!0)=>n(!1,h),t==null||t.addEventListener("click",()=>n(t.getAttribute("aria-expanded")!=="true")),(d=this.host.querySelector("[data-close-menu]"))==null||d.addEventListener("click",()=>n(!1)),s==null||s.addEventListener("click",()=>n(!1)),e==null||e.querySelectorAll("[data-jump-station]").forEach(h=>{h.addEventListener("click",()=>{var u;const p=Number(h.dataset.jumpStation??0);n(!1,!1),(u=this.home)==null||u.scrollToStation(p),window.setTimeout(()=>{var g;return(g=this.host.querySelector(`[data-helix-card="${p}"]`))==null?void 0:g.focus({preventScroll:!0})},520)})}),e==null||e.querySelectorAll("a[href]").forEach(h=>{h.addEventListener("click",()=>n(!1,!1))}),e==null||e.addEventListener("keydown",h=>this.trapFocus(h,e,()=>n(!1)));const r=this.host.querySelector("[data-module-dialog]");(c=this.host.querySelector("[data-close-module]"))==null||c.addEventListener("click",()=>this.requestModuleClose()),r==null||r.addEventListener("cancel",h=>{h.preventDefault(),this.requestModuleClose()}),r==null||r.addEventListener("click",h=>{h.target===r&&this.requestModuleClose()})}trapFocus(t,e,s){if(t.key==="Escape"){t.preventDefault(),s();return}if(t.key!=="Tab")return;const a=[...e.querySelectorAll("a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex='-1'])")].filter(n=>!n.hasAttribute("hidden")),i=a[0],o=a.at(-1);!i||!o||(t.shiftKey&&document.activeElement===i?(t.preventDefault(),o.focus()):!t.shiftKey&&document.activeElement===o&&(t.preventDefault(),i.focus()))}updateHeaderStation(t){const e=P[t];if(!e)return;const s=this.host.querySelector("[data-header-index]"),a=this.host.querySelector("[data-header-title]");s&&(s.textContent=`${String(e.index).padStart(2,"0")} / 12`),a&&(a.textContent=e.shortTitle)}createPlayground(t,e){const s={presentMode:e,onComplete:()=>this.complete(t)};if(t===W.slug)return new Ws(s);if(t==="adat")return new is(s);if(t==="knn")return new Es(s);if(t==="dontesi-fa")return new ls(s);if(t==="svm")return new Is(s);if(t==="neuralis-halok")return new Ys(s);if(t==="regresszio")return new ta(s);if(t==="kiertekeles")return new Ts(s);if(t==="klaszterezes")return new _e(s);if(t==="ajanlorendszerek")return new oa(s);if(t==="dimenzio")return new ys(s);if(t==="mintazatok")return new Zs(s);if(t==="vizualizacio")return new ra(s)}complete(t){if(this.completed.has(t))return;this.completed.add(t);try{localStorage.setItem(Te,JSON.stringify([...this.completed]))}catch{}this.syncProgress();const e=this.host.querySelector("[data-completion-toast]");e&&(e.setAttribute("aria-hidden","false"),e.classList.add("is-visible"),window.setTimeout(()=>{e.classList.remove("is-visible"),e.setAttribute("aria-hidden","true")},3600))}syncProgress(){this.completed.forEach(t=>{this.host.querySelectorAll(`[data-progress-slug="${t}"]`).forEach(e=>{e.textContent=e.classList.contains("helix-complete")?"Teljesítve":"Kész",e.classList.add("is-complete")})})}renderUnavailable(t){t.innerHTML=`<main id="main-content" class="unavailable-page"><p class="eyebrow">Ismeretlen modul</p><h1>Ez a modul nem érhető el.</h1><a class="button button-hand" href="${window.location.pathname}#/">Vissza a spirálhoz</a></main>`}destroyViews(){var t,e;(t=this.home)==null||t.destroy(),this.home=void 0,(e=this.playground)==null||e.destroy(),this.playground=void 0,this.closeQuickMenu=void 0}readRoute(){return window.location.hash.replace(/^#\/?/,"").split("?")[0]}isPresentMode(){return new URLSearchParams(window.location.search).get("mode")==="present"}replaceWithHomeRoute(){window.history.replaceState(null,"",`${window.location.pathname}${window.location.search}#/`)}logo(){return'<svg viewBox="0 0 32 32" aria-hidden="true"><path d="M7 8c5-5 15-4 18 1 4 7-4 15-12 14-6-1-8-7-4-10 4-4 11-1 10 4-1 3-6 4-9 1"/><circle cx="7" cy="8" r="2.2"/><circle cx="19" cy="17" r="2.2"/></svg>'}}const Ee=document.querySelector("#app");if(!Ee)throw new Error("Az alkalmazás gyökéreleme hiányzik.");new da(Ee).mount();
