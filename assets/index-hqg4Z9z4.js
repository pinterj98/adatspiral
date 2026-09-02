var Le=Object.defineProperty;var qe=(d,t,e)=>t in d?Le(d,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):d[t]=e;var m=(d,t,e)=>qe(d,typeof t!="symbol"?t+"":t,e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))s(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const n of i.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function e(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerPolicy&&(i.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?i.credentials="include":a.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(a){if(a.ep)return;a.ep=!0;const i=e(a);fetch(a.href,i)}})();const ot={index:0,slug:"nyitany",title:"Rekordok és attribútumok",shortTitle:"Rekordok és attribútumok",gesture:"Ábrázold a válaszaidat",description:"Egy rekord egy megfigyelési egységhez tartozó attribútumértékeket fog össze.",status:"live",accent:"saffron"},D=[{index:1,slug:"adat",title:"Adat és előkészítés",shortTitle:"Adattisztítás",gesture:"Kezeld a hibás értéket",description:"A hiányzó, hibás vagy eltérő skálájú értékeket a modellezés előtt kezelni kell.",status:"live",accent:"vermilion"},{index:2,slug:"knn",title:"Osztályozás: kNN",shortTitle:"k legközelebbi szomszéd",gesture:"Állítsd a k értékét",description:"Egy új pont címkéjét a hozzá legközelebbi k tanítópont többségi címkéje adja.",status:"live",accent:"azure"},{index:3,slug:"dontesi-fa",title:"Döntési fa és együttesek",shortTitle:"Döntési fák",gesture:"Módosítsd a felosztást",description:"A fa egymás utáni feltételekkel osztja fel a változóteret; az együttes módszerek több fa eredményét kombinálják.",status:"live",accent:"teal"},{index:4,slug:"svm",title:"Kernelmódszerek és SVM",shortTitle:"Kernel és SVM",gesture:"Emeld fel a pontokat",description:"Egy jellemzőleképezés a síkbeli nemlineáris határt lineáris határrá alakíthatja egy magasabb dimenziós térben.",status:"live",accent:"azure"},{index:5,slug:"neuralis-halok",title:"Neurális hálók",shortTitle:"Neurális hálók",gesture:"Módosítsd a rétegeket",description:"A rétegek egymásra épített nemlineáris transzformációi görbült döntési határt is leírhatnak.",status:"live",accent:"vermilion"},{index:6,slug:"regresszio",title:"Regresszió",shortTitle:"Polinomregresszió",gesture:"Állítsd a polinom fokszámát",description:"A tanító- és validációs hiba együtt jelzi, ha a modell túl egyszerű vagy túl rugalmas.",status:"live",accent:"vermilion"},{index:7,slug:"kiertekeles",title:"Kiértékelés",shortTitle:"Modellértékelés",gesture:"Módosítsd a küszöböt",description:"A döntési küszöb megváltoztatja a téves pozitív és téves negatív esetek számát.",status:"live",accent:"saffron"},{index:8,slug:"klaszterezes",title:"Klaszterezés",shortTitle:"k-közép és DBSCAN",gesture:"Hasonlítsd össze a módszereket",description:"A k-közép centroidokhoz rendeli a pontokat, a DBSCAN pedig sűrűség alapján alakít klasztereket.",status:"live",accent:"teal"},{index:9,slug:"ajanlorendszerek",title:"Ajánlórendszerek",shortTitle:"Ajánlórendszerek",gesture:"Becsülj hiányzó értékelést",description:"A felhasználók és termékek értékelési mintái alapján hiányzó értékelések becsülhetők.",status:"live",accent:"saffron"},{index:10,slug:"dimenzio",title:"Dimenziócsökkentés",shortTitle:"Dimenziócsökkentés",gesture:"Válassz kétdimenziós vetületet",description:"A nagy dimenziós adatot kevesebb koordinátára vetítjük, miközben igyekszünk megőrizni a pontok szerkezetét.",status:"live",accent:"azure"},{index:11,slug:"mintazatok",title:"Mintázatok és anomáliák",shortTitle:"Anomáliák és együttjárások",gesture:"Jelöld az eltérést",description:"Az anomáliakeresés ritka megfigyeléseket, a mintázatbányászat gyakori együttjárásokat azonosít.",status:"live",accent:"saffron"},{index:12,slug:"vizualizacio",title:"Vizualizáció és lezárás",shortTitle:"Adatvizualizáció",gesture:"Válts ábrázolást",description:"Az összegző statisztikák mellett az eloszlás alakját is meg kell vizsgálni.",status:"live",accent:"vermilion"}],Ie=[ot,...D.filter(d=>d.status==="live")];function Q(d){return[ot,...D].find(t=>t.slug===d)}function A(d){return()=>{let t=d+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}}function x(d){const t=Math.max(d(),Number.EPSILON),e=Math.max(d(),Number.EPSILON);return Math.sqrt(-2*Math.log(t))*Math.cos(2*Math.PI*e)}const T=(d,t,e)=>Math.max(t,Math.min(e,d)),Re=.44;function He(d,t,e,s,a=0,i=0){const n=(d-t)*Math.PI/2+a;return{x:e*Math.sin(n),y:s*(t-d)+i,z:e*Math.cos(n)}}class Be{constructor(t,e){m(this,"canvas");m(this,"stops");m(this,"cards");m(this,"previews");m(this,"previewIndexes");m(this,"particles");m(this,"reduceMotion");m(this,"onActiveChange");m(this,"stopPositions",[]);m(this,"resizeObserver");m(this,"animationFrame");m(this,"lastFrame",0);m(this,"targetT");m(this,"visualT");m(this,"activeIndex",-1);m(this,"onScroll",()=>{this.targetT=this.readScrollPosition(),this.startAnimation()});m(this,"onResize",()=>{this.measureStops(),this.targetT=this.readScrollPosition(),this.draw()});m(this,"onMotionChange",()=>{this.targetT=this.readScrollPosition(),this.visualT=this.reduceMotion.matches?Math.round(this.targetT):this.targetT,this.syncCards(),this.draw()});m(this,"animate",t=>{const e=Math.min(.05,Math.max(.001,(t-this.lastFrame)/1e3));if(this.lastFrame=t,this.reduceMotion.matches)this.visualT=Math.round(this.targetT);else{const s=1-Math.exp(-e/.085);this.visualT+=(this.targetT-this.visualT)*s}this.syncCards(),this.draw(),Math.abs(this.targetT-this.visualT)>5e-4&&!this.reduceMotion.matches?this.animationFrame=requestAnimationFrame(this.animate):(this.visualT=this.reduceMotion.matches?Math.round(this.targetT):this.targetT,this.syncCards(),this.draw(),this.animationFrame=void 0)});this.canvas=t,this.stops=e.stops,this.cards=e.cards,this.previews=e.previews??[],this.previewIndexes=new Set(this.previews.map(a=>Number(a.dataset.helixPreview))),this.onActiveChange=e.onActiveChange,this.targetT=T(e.initialIndex??0,0,this.stops.length-1),this.visualT=this.targetT,this.reduceMotion=window.matchMedia("(prefers-reduced-motion: reduce)");const s=A(1709);this.particles=Array.from({length:560},()=>({u:-.9+s()*12.8,radiusOffset:(s()-.5)*.58,angleOffset:(s()-.5)*.19,verticalOffset:(s()-.5)*.36,size:.55+s()*1.45,tone:s()}))}mount(){this.resizeObserver=new ResizeObserver(()=>{this.measureStops(),this.draw()}),this.resizeObserver.observe(document.documentElement),window.addEventListener("scroll",this.onScroll,{passive:!0}),window.addEventListener("resize",this.onResize,{passive:!0}),this.reduceMotion.addEventListener("change",this.onMotionChange),this.measureStops(),this.setScrollPosition(this.visualT,"auto"),this.syncCards(),this.draw()}destroy(){var t;(t=this.resizeObserver)==null||t.disconnect(),window.removeEventListener("scroll",this.onScroll),window.removeEventListener("resize",this.onResize),this.reduceMotion.removeEventListener("change",this.onMotionChange),this.animationFrame!==void 0&&cancelAnimationFrame(this.animationFrame)}scrollTo(t,e="smooth"){const s=T(t,0,this.stops.length-1);this.measureStops(),this.setScrollPosition(s,this.reduceMotion.matches?"auto":e)}getActiveIndex(){return T(Math.round(this.visualT),0,this.stops.length-1)}measureStops(){this.stopPositions=this.stops.map(t=>{const e=t.getBoundingClientRect();return e.top+window.scrollY+e.height/2-window.innerHeight/2})}readScrollPosition(){if(this.stopPositions.length<2)return 0;const t=window.scrollY;if(t<=this.stopPositions[0])return 0;const e=this.stopPositions.length-1;if(t>=this.stopPositions[e])return e;for(let s=0;s<e;s+=1){const a=this.stopPositions[s],i=this.stopPositions[s+1];if(t<=i)return s+(t-a)/Math.max(1,i-a)}return e}setScrollPosition(t,e){const s=Math.floor(t),a=Math.min(this.stopPositions.length-1,Math.ceil(t)),i=t-s,n=(this.stopPositions[s]??0)*(1-i)+(this.stopPositions[a]??0)*i;if(e==="auto"){const o=document.documentElement.style.scrollBehavior;document.documentElement.style.scrollBehavior="auto",window.scrollTo({top:n,left:0,behavior:"auto"}),document.documentElement.style.scrollBehavior=o}else window.scrollTo({top:n,left:0,behavior:e});this.targetT=t,e==="auto"?(this.visualT=t,this.syncCards(),this.draw()):this.startAnimation()}startAnimation(){this.animationFrame===void 0&&(this.lastFrame=performance.now(),this.animationFrame=requestAnimationFrame(this.animate))}syncCards(){var s;const t=T(Math.round(this.visualT),0,this.cards.length-1),e=Math.abs(this.visualT-t);this.cards.forEach((a,i)=>{const n=this.visualT-i,o=T(1-Math.abs(n)*2.05,0,1);a.style.setProperty("--station-distance",n.toFixed(4)),a.style.opacity=o.toFixed(3);const r=i===t;a.classList.toggle("is-active",r),a.classList.toggle("is-docked",r&&e<.15),a.setAttribute("aria-hidden",String(!r)),a.inert=!r}),t!==this.activeIndex&&(this.activeIndex=t,(s=this.onActiveChange)==null||s.call(this,t))}project(t,e,s,a=0,i=0,n=0){const o=e<861,r=o?2.55:3.55,l=o?2.2:2.35,c=o?8.9:9.5,p=o?e*1.24:Math.min(e,s)*1.06,h=o?e*.5:e*.68,u=o?s*.34:s*.52,g=r+a,v=He(t,this.visualT,g,l,i,n),b=p/(c-v.z);return{x:h+v.x*b,y:u-v.y*b,z:v.z,scale:b}}syncPreviews(t,e,s,a){const i=a?8.9:9.5,o=(a?t*1.24:Math.min(t,e)*1.06)/(i-s);this.previews.forEach(r=>{const l=Number(r.dataset.helixPreview),c=this.project(l,t,e),p=Math.abs(l-this.visualT),h=T((c.z+s)/(s*2),0,1),u=T(c.scale/o,.46,1),g=p<2.4&&c.x>-180&&c.x<t+180&&c.y>-180&&c.y<e+180,v=g?T(1-p/2.4,0,1)*(.35+h*.65):0,b=l===Math.round(this.visualT),k=b&&p<=Re;r.style.transform=`translate3d(${c.x.toFixed(2)}px, ${c.y.toFixed(2)}px, 0) translate(-50%, -50%) scale(${u.toFixed(4)})`,r.style.opacity=v.toFixed(3),r.style.visibility=g?"visible":"hidden",r.style.zIndex=String(20+Math.round(h*70)),r.classList.toggle("is-active",b),r.classList.toggle("is-clickable",k),r.inert=!k,r.tabIndex=k?0:-1,r.setAttribute("aria-hidden",String(!k))})}draw(){const t=this.canvas.getContext("2d");if(!t)return;const e=this.canvas.getBoundingClientRect(),s=Math.max(1,Math.round(e.width)),a=Math.max(1,Math.round(e.height)),i=s<720?1.5:2,n=Math.min(window.devicePixelRatio||1,i),o=Math.round(s*n),r=Math.round(a*n);(this.canvas.width!==o||this.canvas.height!==r)&&(this.canvas.width=o,this.canvas.height=r),t.setTransform(n,0,0,n,0,0),t.clearRect(0,0,s,a);const l=s<861,c=l?2.55:3.55,p=l?s*.5:s*.68;this.syncPreviews(s,a,c,l);const h=t.createLinearGradient(0,0,0,a);h.addColorStop(0,"rgba(111,180,255,0)"),h.addColorStop(.22,"rgba(111,180,255,0.09)"),h.addColorStop(.78,"rgba(111,180,255,0.09)"),h.addColorStop(1,"rgba(111,180,255,0)"),t.beginPath(),t.moveTo(p,0),t.lineTo(p,a),t.strokeStyle=h,t.lineWidth=1,t.stroke();const u=[],g=Math.max(-.85,this.visualT-4.2),v=Math.min(11.85,this.visualT+4.2),b=520;let k=this.project(g,s,a);for(let f=1;f<=b;f+=1){const z=g+(v-g)*f/b,S=this.project(z,s,a);u.push({from:k,to:S,depth:(k.z+S.z)/2}),k=S}if(u.sort((f,z)=>f.depth-z.depth).forEach(f=>{if(f.from.y<-80&&f.to.y<-80||f.from.y>a+80&&f.to.y>a+80)return;const z=T((f.depth+c)/(c*2),0,1);t.beginPath(),t.moveTo(f.from.x,f.from.y),t.lineTo(f.to.x,f.to.y),t.strokeStyle=`rgba(${Math.round(84+z*52)}, ${Math.round(142+z*62)}, 255, ${.12+z*.62})`,t.lineWidth=.65+z*2.35,t.stroke()}),this.particles.map(f=>({particle:f,projected:this.project(f.u,s,a,f.radiusOffset,f.angleOffset,f.verticalOffset)})).sort((f,z)=>f.projected.z-z.projected.z).forEach(({particle:f,projected:z})=>{if(z.x<-24||z.x>s+24||z.y<-24||z.y>a+24)return;const S=T((z.z+c)/(c*2),0,1),w=.1+S*.56;t.beginPath(),t.arc(z.x,z.y,f.size*(.68+S*.72),0,Math.PI*2),f.tone>.965?t.fillStyle=`rgba(242,193,78,${w})`:f.tone>.91?t.fillStyle=`rgba(224,69,42,${w})`:t.fillStyle=`rgba(111,180,255,${w})`,t.fill()}),this.stops.map((f,z)=>({index:z,projected:this.project(z,s,a)})).sort((f,z)=>f.projected.z-z.projected.z).forEach(({index:f,projected:z})=>{if(this.previewIndexes.has(f)||z.x<-70||z.x>s+70||z.y<-70||z.y>a+70)return;const S=f===Math.round(this.visualT),w=T((z.z+c)/(c*2),0,1),$=S?13:5+w*3;t.beginPath(),t.arc(z.x,z.y,$,0,Math.PI*2),t.fillStyle=S?"#f4f1e8":`rgba(111,180,255,${.22+w*.62})`,t.fill(),S&&(t.beginPath(),t.arc(z.x,z.y,21,0,Math.PI*2),t.strokeStyle="rgba(242,193,78,0.72)",t.lineWidth=1.5,t.stroke(),t.fillStyle="#12203f",t.font="650 10px 'IBM Plex Mono', monospace",t.textAlign="center",t.textBaseline="middle",t.fillText(String(f+1).padStart(2,"0"),z.x,z.y+.5))}),!l){const f=this.project(Math.round(this.visualT),s,a),z=this.previewIndexes.has(Math.round(this.visualT)),S=T(1-Math.abs(this.visualT-Math.round(this.visualT))/.18,0,1),w=Math.max(s*.42,f.x-s*.22),$=t.createLinearGradient(w,0,f.x,0);$.addColorStop(0,"rgba(244,241,232,0)"),$.addColorStop(1,`rgba(244,241,232,${.28*S})`),t.beginPath(),t.moveTo(w,f.y),t.lineTo(f.x-(z?104:23),f.y),t.strokeStyle=$,t.lineWidth=1,t.stroke()}}}const Ne={adat:{label:"Adattisztítás",source:"./previews/data-cleaning.png"},knn:{label:"kNN",source:"./previews/knn.png"},"dontesi-fa":{label:"Döntési fa",source:"./previews/decision-tree.png"},svm:{label:"Kernel és SVM",source:"./previews/kernel-svm.png"},"neuralis-halok":{label:"Neurális háló",source:"./previews/neural-network.png"},regresszio:{label:"Regresszió",source:"./previews/regression.png"},kiertekeles:{label:"Kiértékelés",source:"./previews/evaluation.png"},klaszterezes:{label:"Klaszterezés",source:"./previews/clustering.png"},ajanlorendszerek:{label:"Ajánlórendszer",source:"./previews/recommender.png"},dimenzio:{label:"PCA",source:"./previews/dimension-reduction.png"},mintazatok:{label:"Anomáliák",source:"./previews/patterns-anomalies.png"},vizualizacio:{label:"Vizualizáció",source:"./previews/visualization.png"}},De={knn:["k legközelebbi","szomszéd"],mintazatok:["Anomáliák és","együttjárások"]};class Ke{constructor(){m(this,"spiral");m(this,"root");m(this,"currentIndex",0)}mount(t,e,s={}){this.root=t;const a=Math.max(0,Math.min(D.length-1,s.initialIndex??0));this.currentIndex=a,t.innerHTML=`
      <main id="main-content" class="helix-page">
        <div class="helix-stage" aria-hidden="true">
          <canvas class="helix-canvas"></canvas>
          <div class="helix-vignette"></div>
        </div>

        <div class="helix-preview-layer">
          ${D.map((l,c)=>{const p=Ne[l.slug];if(!p||l.status!=="live")return"";const h=String(l.index).padStart(2,"0");return`<a class="helix-preview accent-${l.accent}" href="#/${l.slug}"
              data-open-station="${l.slug}" data-helix-preview="${c}"
              aria-label="${p.label} interaktív modul megnyitása" aria-hidden="true" tabindex="-1" inert>
              <span class="helix-preview-frame"><img src="${p.source}" alt="" width="598" height="433" draggable="false" /></span>
              <span class="helix-preview-label" aria-hidden="true"><small>${h}</small><strong>${p.label}</strong></span>
            </a>`}).join("")}
        </div>

        <div class="helix-footer">
          <div class="helix-counter" aria-live="polite">
            <span data-current-station>${String(a+1).padStart(2,"0")}</span>
            <i aria-hidden="true"><b data-progress-bar></b></i>
            <span>12</span>
          </div>
          <a class="helix-lab-link" href="https://hsdslab.math.bme.hu/" target="_blank" rel="noopener noreferrer"
            aria-label="A HSDSLab weboldalának megnyitása új lapon">
            <img src="./hsdslab-logo.svg" alt="HSDSLab" width="391" height="94" />
          </a>
        </div>

        <div class="helix-card-deck">
          ${D.map((l,c)=>{const p=String(l.index).padStart(2,"0"),h=c===a,u=e.has(l.slug),g=De[l.slug];return`<article class="helix-card accent-${l.accent}${h?" is-active is-docked":""}" tabindex="-1"
              data-helix-card="${c}" style="--station-distance:${a-c};opacity:${h?1:0}"
              aria-hidden="${String(!h)}" ${h?"":"inert"}>
              <div class="helix-card-number"><span>${p}</span><small>/ 12</small></div>
              ${l.title!==l.shortTitle?`<p class="helix-card-category">${l.title}</p>`:""}
              <h1${g?` class="helix-card-title-fixed" aria-label="${l.shortTitle}"`:""}>${g?g.map(v=>`<span aria-hidden="true">${v}</span>`).join(""):l.shortTitle}</h1>
              <p class="helix-card-description">${l.description}</p>
              ${l.status==="live"?`<a class="helix-module-link" href="#/${l.slug}" data-open-station="${l.slug}"><span>Interaktív modul</span><strong>Megnyitás</strong><b aria-hidden="true">↗</b></a>
                   <span class="helix-complete${u?" is-complete":""}" data-progress-slug="${l.slug}">${u?"Teljesítve":"Elérhető"}</span>`:'<p class="helix-availability">A modul még nem érhető el.</p>'}
            </article>`}).join("")}
        </div>

        <div class="helix-track" aria-label="A félév 12 témája">
          ${D.map((l,c)=>`<section class="helix-stop" data-helix-stop="${c}" aria-labelledby="helix-stop-title-${c}"><h2 class="sr-only" id="helix-stop-title-${c}">${l.index}. ${l.title}: ${l.shortTitle}</h2></section>`).join("")}
        </div>
      </main>`;const i=t.querySelector(".helix-canvas"),n=[...t.querySelectorAll("[data-helix-stop]")],o=[...t.querySelectorAll("[data-helix-card]")],r=[...t.querySelectorAll("[data-helix-preview]")];i&&(this.spiral=new Be(i,{stops:n,cards:o,previews:r,initialIndex:a,onActiveChange:l=>{var c;this.currentIndex=l,this.updateStationUI(l),(c=s.onActiveChange)==null||c.call(s,l)}}),this.spiral.mount())}destroy(){var t;(t=this.spiral)==null||t.destroy(),this.spiral=void 0,this.root=void 0}scrollToStation(t,e="smooth"){var s;(s=this.spiral)==null||s.scrollTo(t,e)}getActiveIndex(){var t;return((t=this.spiral)==null?void 0:t.getActiveIndex())??this.currentIndex}updateStationUI(t){var a,i;const e=(a=this.root)==null?void 0:a.querySelector("[data-current-station]"),s=(i=this.root)==null?void 0:i.querySelector("[data-progress-bar]");e&&(e.textContent=String(t+1).padStart(2,"0")),s&&(s.style.width=`${(t+1)/D.length*100}%`)}}function C(d,t){const e=d.x-t.x,s=d.y-t.y;return e*e+s*s}function Xt(d,t,e){const s=d.filter(r=>typeof r.label=="number");if(s.length===0)return{label:0,neighbors:[],confidence:0};const a=Math.max(1,Math.min(Math.floor(e),s.length)),i=s.map(r=>({point:r,distance:C(r,t)})).sort((r,l)=>r.distance-l.distance).slice(0,a).map(({point:r})=>r),n=new Map;i.forEach(r=>{const l=r.label??0,c=n.get(l)??{count:0,weight:0};c.count+=1,c.weight+=1/Math.max(1e-9,Math.sqrt(C(r,t))),n.set(l,c)});const o=[...n.entries()].sort((r,l)=>l[1].count-r[1].count||l[1].weight-r[1].weight)[0];return{label:o[0],neighbors:i,confidence:o[1].count/a}}function Oe(d,t){const e=t.length,s=d.map((a,i)=>[...a,t[i]]);for(let a=0;a<e;a+=1){let i=a;for(let o=a+1;o<e;o+=1)Math.abs(s[o][a])>Math.abs(s[i][a])&&(i=o);[s[a],s[i]]=[s[i],s[a]];const n=s[a][a];if(Math.abs(n)<1e-12)return Array(e).fill(0);for(let o=a;o<=e;o+=1)s[a][o]/=n;for(let o=0;o<e;o+=1){if(o===a)continue;const r=s[o][a];for(let l=a;l<=e;l+=1)s[o][l]-=r*s[a][l]}}return s.map(a=>a[e])}function _t(d,t,e=0){const a=Math.max(0,Math.min(Math.floor(t),Math.max(0,d.length-1)))+1,i=Array.from({length:a},()=>Array(a).fill(0)),n=Array(a).fill(0);d.forEach(o=>{const r=Array.from({length:a*2},(l,c)=>o.x**c);for(let l=0;l<a;l+=1){n[l]+=o.y*r[l];for(let c=0;c<a;c+=1)i[l][c]+=r[l+c]}});for(let o=1;o<a;o+=1)i[o][o]+=e;return Oe(i,n)}function Bt(d,t){return d.reduceRight((e,s)=>e*t+s,0)}function rt(d,t){return d.length===0?0:d.reduce((e,s)=>{const a=s.y-Bt(t,s.x);return e+a*a},0)/d.length}function tt(d,t,e=0){const s=Math.max(1,Math.min(Math.floor(t),d.length||1)),a=[...d].sort((o,r)=>o.x-r.x||o.y-r.y);let i=Array.from({length:s},(o,r)=>a[Math.min(a.length-1,Math.floor((r+.5)/s*a.length))]);if(e>0&&d.length>0){const o=[...d];let r=e>>>0;for(let l=o.length-1;l>0;l-=1){r=Math.imul(r,1664525)+1013904223>>>0;const c=r%(l+1);[o[l],o[c]]=[o[c],o[l]]}i=o.slice(0,s)}return{centroids:i.map(o=>o?{x:o.x,y:o.y}:{x:.5,y:.5}),assignments:Array(d.length).fill(-1),phase:"assign",iteration:0}}function Fe(d,t){if(d.length===0||t.phase==="done")return t;if(t.phase==="assign"){const o=d.map(r=>{let l=0,c=Number.POSITIVE_INFINITY;return t.centroids.forEach((p,h)=>{const u=C(r,p);u<c&&(l=h,c=u)}),l});return{...t,assignments:o,phase:"update"}}const s=t.centroids.map((o,r)=>d.filter((l,c)=>t.assignments[c]===r)).map(o=>o.length===0?void 0:{x:o.reduce((r,l)=>r+l.x,0)/o.length,y:o.reduce((r,l)=>r+l.y,0)/o.length}),a=new Set;s.forEach((o,r)=>{if(o)return;const l=d.map((p,h)=>({point:p,index:h,distance:t.assignments[h]>=0?C(p,t.centroids[t.assignments[h]]):Number.POSITIVE_INFINITY})).filter(({index:p})=>!a.has(p)).sort((p,h)=>h.distance-p.distance),c=l.find(({point:p})=>!s.some(h=>h&&C(p,h)<1e-12))??l[0];c&&(a.add(c.index),s[r]={x:c.point.x,y:c.point.y})});const i=s.map((o,r)=>o??t.centroids[r]),n=i.reduce((o,r,l)=>o+C(r,t.centroids[l]),0);return{centroids:i,assignments:t.assignments,phase:n<1e-8?"done":"assign",iteration:t.iteration+1}}function et(d,t,e){const s=Array(d.length).fill(-99),a=Array(d.length).fill("noise"),i=d.map(r=>d.map((l,c)=>({index:c,distance:C(r,l)})).filter(({distance:l})=>l<=t*t).map(({index:l})=>l)),n=i.map(r=>r.length>=e);n.forEach((r,l)=>{r&&(a[l]="core")});let o=0;return d.forEach((r,l)=>{if(!n[l]||s[l]!==-99)return;const c=[l];for(s[l]=o;c.length>0;){const p=c.shift();if(p===void 0)break;i[p].forEach(h=>{s[h]===-99&&(s[h]=o,n[h]?c.push(h):a[h]="border")})}o+=1}),s.forEach((r,l)=>{r===-99&&(s[l]=-1)}),{assignments:s,types:a,clusters:o}}function Ve(d,t,e){return d.reduce((s,a,i)=>{const n=e[t[i]];return n?s+C(a,n):s},0)}function P(d){const t=d.getBoundingClientRect(),e=Math.min(window.devicePixelRatio||1,2),s=Math.max(1,Math.round(t.width)),a=Math.max(1,Math.round(t.height)),i=Math.round(s*e),n=Math.round(a*e);(d.width!==i||d.height!==n)&&(d.width=i,d.height=n);const o=d.getContext("2d");return o==null||o.setTransform(e,0,0,e,0,0),{width:s,height:a,dpr:e}}function I(d,t,e=20){const s=d.getBoundingClientRect(),a=t.clientX-s.left,i=t.clientY-s.top;return{x:Math.max(0,Math.min(1,(a-e)/Math.max(1,s.width-e*2))),y:Math.max(0,Math.min(1,(i-e)/Math.max(1,s.height-e*2)))}}function M(d,t,e,s=20){return[s+d.x*(t-s*2),s+d.y*(e-s*2)]}function B(d,t,e,s=20){d.save(),d.strokeStyle="rgba(18, 32, 63, 0.12)",d.lineWidth=1,d.setLineDash([2,5]);for(let a=0;a<=4;a+=1){const i=s+a/4*(t-s*2),n=s+a/4*(e-s*2);d.beginPath(),d.moveTo(i,s),d.lineTo(i,e-s),d.stroke(),d.beginPath(),d.moveTo(s,n),d.lineTo(t-s,n),d.stroke()}d.setLineDash([]),d.strokeStyle="rgba(18, 32, 63, 0.28)",d.strokeRect(s+.5,s+.5,t-s*2-1,e-s*2-1),d.restore()}function wt(d,t,e,s,a=5,i=!1){const n=["#d84429","#1e67b8","#907015","#17776c"],o=n[Math.abs(s)%n.length];d.save(),d.beginPath(),s%2===0?d.arc(t,e,a,0,Math.PI*2):d.rect(t-a*.82,e-a*.82,a*1.64,a*1.64),d.fillStyle=i?"#f4f1e8":o,d.fill(),d.strokeStyle=o,d.lineWidth=i?2:1.25,d.stroke(),d.restore()}function E(d,t=.04,e=.96){return Math.max(t,Math.min(e,d))}function Yt(d=18,t=96){const e=A(d);return Array.from({length:t},(s,a)=>{const i=a%2,n=e()*Math.PI,o=x(e)*.018,r=x(e)*.018;return i===0?{x:E(.28+Math.cos(n)*.24+o),y:E(.49-Math.sin(n)*.25+r),label:i}:{x:E(.7-Math.cos(n)*.24+o),y:E(.48+Math.sin(n)*.25+r),label:i}})}function ve(d=4,t=96){const e=A(d);return Array.from({length:t},()=>{const s=.08+e()*.84,a=.08+e()*.84,i=(s>.5?1:0)+(a>.5?2:0);return{x:s,y:a,label:i===0||i===3?0:1}})}function be(d=72,t=96){const e=A(d);return Array.from({length:t},(s,a)=>{const i=a%2,n=i===0?.42:.59,o=i===0?.47:.54;return{x:E(n+x(e)*.15),y:E(o+x(e)*.15),label:i}})}function ke(d=29){const t=A(d),e=[];for(let s=0;s<34;s+=1){const a=-.93+s/33*1.86,n=.12+.52*a-.27*a*a+.2*Math.sin(a*4.5)+x(t)*.105;e.push({x:a,y:n,split:s%4===1?"test":"train"})}return e}function Ye(d=57){const t=A(d);return Array.from({length:34},(e,s)=>{const a=-.93+s/33*1.86,i=-.48+1.08*a*a+x(t)*.085;return{x:a,y:i,split:s%4===1?"test":"train"}})}function We(d=83){const t=A(d);return Array.from({length:34},(e,s)=>{const a=-.93+s/33*1.86,i=-.06+.62*a+x(t)*.07;return{x:a,y:s===24?.82:i,split:s%4===1?"test":"train"}})}function kt(d,t,e,s,a){return Array.from({length:a},()=>({x:E(t+x(d)*s),y:E(e+x(d)*s)}))}function ye(d=11){const t=A(d);return[...kt(t,.25,.3,.07,38),...kt(t,.72,.34,.075,38),...kt(t,.5,.75,.08,38)]}function Ue(d=42){const t=A(d),e=[];for(let s=0;s<62;s+=1){const a=s/62*Math.PI*2+x(t)*.025,i=.34+x(t)*.014;e.push({x:.5+Math.cos(a)*i,y:.5+Math.sin(a)*i})}return e.push(...kt(t,.5,.5,.075,48)),e}function Ge(d=7){const t=A(d),e=[];for(let s=0;s<3;s+=1)for(let a=0;a<36;a+=1){const i=.08+t()*.84,n=.18+s*.27+.32*(i-.5)+x(t)*.025;e.push({x:E(i),y:E(n)})}return e}function Xe(d=92,t=110){const e=A(d);return Array.from({length:t},()=>({x:.06+e()*.88,y:.06+e()*.88}))}function _e(d=2026,t=86){const e=A(d),s=[],a=[{x:.28,y:.64,sx:.11,sy:.12},{x:.68,y:.66,sx:.12,sy:.1},{x:.51,y:.3,sx:.14,sy:.09}];for(let i=0;i<t;i+=1){const n=a[i%a.length];s.push({x:E(n.x+x(e)*n.sx),y:E(n.y+x(e)*n.sy),label:i%a.length})}return s}const lt={blobs:{title:"Három csomó",question:"Talál-e mindkét módszer három csoportot?",make:()=>ye(),epsilon:.1,minPoints:5},rings:{title:"Gyűrű és mag",question:"Mit jelent itt a „középpont”?",make:()=>Ue(),epsilon:.1,minPoints:5},bands:{title:"Ferde sávok",question:"A gömbszerűség jó feltételezés?",make:()=>Ge(),epsilon:.15,minPoints:5},noise:{title:"Egyenletes pontok",question:"Mikor marad a többség zaj?",make:()=>Xe(),epsilon:.04,minPoints:5}},L=["#d84429","#1e67b8","#927019","#17776c","#7b4f9d","#5e697b"];class Je{constructor(t){m(this,"context");m(this,"root");m(this,"canvas");m(this,"points",ye());m(this,"algorithm","kmeans");m(this,"k",3);m(this,"epsilon",.1);m(this,"minPoints",5);m(this,"initializationSeed",0);m(this,"kMeansState",tt(this.points,this.k));m(this,"isPlacingCentroids",!1);m(this,"manualCentroids",[]);m(this,"dbscanResult",et(this.points,this.epsilon,this.minPoints));m(this,"pointer");m(this,"drawing",!1);m(this,"lastDrawn");m(this,"touchDrawingEnabled",!1);m(this,"tapCandidate");m(this,"resizeObserver");m(this,"runTimer");m(this,"onKeyDown",t=>{var e;!((e=this.root)!=null&&e.isConnected)||t.target.closest("button, a, input, select, textarea, summary, [contenteditable='true']")||(t.code==="Space"&&this.algorithm==="kmeans"&&(t.preventDefault(),this.step()),t.key.toLowerCase()==="r"&&(this.resetAlgorithms(),this.update()))});this.context=t}mount(t){this.root=t,t.innerHTML=`
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
      </article>`,this.canvas=t.querySelector("canvas.data-canvas")??void 0,this.bindControls(),this.canvas&&(this.resizeObserver=new ResizeObserver(()=>this.draw()),this.resizeObserver.observe(this.canvas)),this.update()}destroy(){var t;(t=this.resizeObserver)==null||t.disconnect(),this.stopRun(),window.removeEventListener("keydown",this.onKeyDown),this.root=void 0,this.canvas=void 0}bindControls(){var e,s,a,i,n,o,r,l,c,p;if(!this.root||!this.canvas)return;this.root.querySelectorAll("[data-algorithm]").forEach(h=>{h.addEventListener("click",()=>{var u;this.stopRun(),this.algorithm=h.dataset.algorithm??"kmeans",this.cancelManualCentroidPlacement(),(u=this.root)==null||u.querySelectorAll("[data-algorithm]").forEach(g=>{const v=g===h;g.classList.toggle("is-active",v),g.setAttribute("aria-pressed",String(v))}),this.syncAlgorithmControls(),this.update()})}),this.root.querySelectorAll("[data-preset]").forEach(h=>{h.addEventListener("click",()=>{var g,v,b;const u=h.dataset.preset??"blobs";if(this.points=u==="custom"?[]:lt[u].make(),u!=="custom"){this.epsilon=lt[u].epsilon,this.minPoints=lt[u].minPoints;const k=(g=this.root)==null?void 0:g.querySelector("#cluster-epsilon"),y=(v=this.root)==null?void 0:v.querySelector("#cluster-minpts");k&&(k.value=String(Math.round(this.epsilon*100))),y&&(y.value=String(this.minPoints))}this.initializationSeed=0,this.resetAlgorithms(),(b=this.root)==null||b.querySelectorAll("[data-preset]").forEach(k=>{const y=k===h;k.classList.toggle("is-active",y),k.setAttribute("aria-pressed",String(y))}),this.update()})}),(e=this.root.querySelector("#cluster-k"))==null||e.addEventListener("input",h=>{this.stopRun(),this.k=Number(h.target.value),this.initializationSeed=0,this.cancelManualCentroidPlacement(),this.kMeansState=tt(this.points,this.k,this.initializationSeed),this.update()}),(s=this.root.querySelector("#cluster-epsilon"))==null||s.addEventListener("input",h=>{this.stopRun(),this.epsilon=Number(h.target.value)/100,this.dbscanResult=et(this.points,this.epsilon,this.minPoints),this.update()}),(a=this.root.querySelector("#cluster-minpts"))==null||a.addEventListener("input",h=>{this.stopRun(),this.minPoints=Number(h.target.value),this.dbscanResult=et(this.points,this.epsilon,this.minPoints),this.update()}),(i=this.root.querySelector("[data-action='step']"))==null||i.addEventListener("click",()=>{this.stopRun(),this.step()}),(n=this.root.querySelector("[data-action='run']"))==null||n.addEventListener("click",()=>this.run()),this.root.querySelectorAll("[data-placement-mode]").forEach(h=>{h.addEventListener("click",()=>{h.dataset.placementMode==="centroid"?this.isPlacingCentroids||this.startManualCentroidPlacement():this.cancelManualCentroidPlacement(),this.update()})}),(o=this.root.querySelector("[data-action='toggle-draw']"))==null||o.addEventListener("click",h=>{var v;if(this.isPlacingCentroids)return;this.touchDrawingEnabled=!this.touchDrawingEnabled;const u=h.currentTarget;u.setAttribute("aria-pressed",String(this.touchDrawingEnabled)),u.classList.toggle("is-active",this.touchDrawingEnabled);const g=u.querySelector("[data-draw-state]");g&&(g.textContent=this.touchDrawingEnabled?"be":"ki"),(v=this.canvas)==null||v.classList.toggle("is-touch-drawing",this.touchDrawingEnabled)}),(r=this.root.querySelector("[data-action='restart']"))==null||r.addEventListener("click",()=>{this.stopRun(),this.initializationSeed+=1,this.cancelManualCentroidPlacement(),this.kMeansState=tt(this.points,this.k,this.initializationSeed),this.update()}),(l=this.root.querySelector("[data-action='clear']"))==null||l.addEventListener("click",()=>{this.points=[],this.resetAlgorithms(),this.update()}),(c=this.root.querySelector("[data-entry-kind]"))==null||c.addEventListener("change",()=>this.syncKeyboardEntry()),(p=this.root.querySelector("[data-action='add-keyboard']"))==null||p.addEventListener("click",()=>{var b,k,y,j,f,z;const h=Number(((k=(b=this.root)==null?void 0:b.querySelector("[data-entry-x]"))==null?void 0:k.value)??.5),u=Number(((j=(y=this.root)==null?void 0:y.querySelector("[data-entry-y]"))==null?void 0:j.value)??.5),g={x:Math.max(0,Math.min(1,h)),y:Math.max(0,Math.min(1,u))};((z=(f=this.root)==null?void 0:f.querySelector("[data-entry-kind]"))==null?void 0:z.value)==="centroid"&&this.algorithm==="kmeans"?(this.isPlacingCentroids||this.startManualCentroidPlacement(),this.placeManualCentroid(g)):this.addPoint(g)}),this.canvas.addEventListener("pointerdown",h=>{var v;const u=I(this.canvas,h),g=this.algorithm==="kmeans"&&this.isPlacingCentroids?"centroid":"point";if(this.pointer=u,h.pointerType!=="mouse"&&(g==="centroid"||!this.touchDrawingEnabled)){this.tapCandidate={point:u,clientX:h.clientX,clientY:h.clientY,moved:!1,mode:g};return}if((v=this.canvas)==null||v.setPointerCapture(h.pointerId),g==="centroid"){this.placeManualCentroid(u);return}this.drawing=!0,this.lastDrawn=void 0,this.addPoint(u)}),this.canvas.addEventListener("pointermove",h=>{if(this.pointer=I(this.canvas,h),this.tapCandidate){Math.hypot(h.clientX-this.tapCandidate.clientX,h.clientY-this.tapCandidate.clientY)>9&&(this.tapCandidate.moved=!0);return}this.drawing?this.addPoint(this.pointer):this.draw()});const t=()=>{this.drawing=!1,this.lastDrawn=void 0};this.canvas.addEventListener("pointerup",h=>{var u;this.tapCandidate&&(this.tapCandidate.moved||(this.tapCandidate.mode==="centroid"?this.placeManualCentroid(this.tapCandidate.point):(this.lastDrawn=void 0,this.addPoint(this.tapCandidate.point))),this.tapCandidate=void 0),(u=this.canvas)!=null&&u.hasPointerCapture(h.pointerId)&&this.canvas.releasePointerCapture(h.pointerId),t()}),this.canvas.addEventListener("pointercancel",()=>{this.tapCandidate=void 0,t()}),this.canvas.addEventListener("lostpointercapture",t),this.canvas.addEventListener("pointerleave",()=>{this.pointer=void 0,this.tapCandidate=void 0,t(),this.update()}),window.addEventListener("keydown",this.onKeyDown),this.root.querySelectorAll("[data-answer]").forEach(h=>{h.addEventListener("click",()=>{var v,b;const u=h.dataset.answer==="right";(v=this.root)==null||v.querySelectorAll("[data-answer]").forEach(k=>k.classList.remove("is-correct","is-wrong")),h.classList.add(u?"is-correct":"is-wrong");const g=(b=this.root)==null?void 0:b.querySelector("[data-quiz-feedback]");g&&(g.textContent=u?"Helyes. A DBSCAN sűrűség alapján kapcsolja össze a pontokat, ezért a gyűrűt nem bontja centroidok körüli részekre. A modult teljesítetted.":"A k-közép minden klasztert egy centroiddal reprezentál."),u&&this.context.onComplete()})})}syncAlgorithmControls(){var s;const t=this.algorithm==="kmeans";["[data-kmeans-tools]","[data-kmeans-parameters]"].forEach(a=>{var n;const i=(n=this.root)==null?void 0:n.querySelector(a);i&&(i.hidden=!t)}),["[data-dbscan-tools]","[data-dbscan-parameters]"].forEach(a=>{var n;const i=(n=this.root)==null?void 0:n.querySelector(a);i&&(i.hidden=t)});const e=(s=this.root)==null?void 0:s.querySelector("[data-dbscan-legend]");e&&(e.hidden=t),this.syncKeyboardEntry(),this.syncManualCentroidControls()}resetAlgorithms(){this.stopRun(),this.cancelManualCentroidPlacement(),this.kMeansState=tt(this.points,this.k,this.initializationSeed),this.dbscanResult=et(this.points,this.epsilon,this.minPoints)}startManualCentroidPlacement(){this.stopRun(),this.isPlacingCentroids=!0,this.manualCentroids=[],this.syncManualCentroidControls()}cancelManualCentroidPlacement(){this.isPlacingCentroids=!1,this.manualCentroids=[],this.syncManualCentroidControls()}placeManualCentroid(t){!this.isPlacingCentroids||this.algorithm!=="kmeans"||(this.manualCentroids.push({x:t.x,y:t.y}),this.manualCentroids.length===this.k&&(this.kMeansState={centroids:this.manualCentroids.map(e=>({...e})),assignments:Array(this.points.length).fill(-1),phase:"assign",iteration:0},this.isPlacingCentroids=!1,this.manualCentroids=[]),this.update())}syncManualCentroidControls(){var o,r,l,c,p,h,u,g;const t=this.algorithm==="kmeans"&&this.isPlacingCentroids,e=(o=this.root)==null?void 0:o.querySelector("[data-placement-mode='point']"),s=(r=this.root)==null?void 0:r.querySelector("[data-placement-mode='centroid']");e==null||e.classList.toggle("is-active",!t),e==null||e.setAttribute("aria-pressed",String(!t)),s==null||s.classList.toggle("is-active",t),s==null||s.setAttribute("aria-pressed",String(t)),s&&(s.disabled=this.algorithm!=="kmeans");const a=s==null?void 0:s.querySelector("[data-centroid-count]");a&&(a.textContent=t?`${this.manualCentroids.length} / ${this.k}`:`${this.k} kezdőpont`),(l=this.root)==null||l.querySelectorAll("[data-action='step'], [data-action='run']").forEach(v=>{v.disabled=t});const i=(c=this.root)==null?void 0:c.querySelector("[data-action='toggle-draw']");i&&(i.disabled=t);const n=(p=this.root)==null?void 0:p.querySelector("[data-centroid-prompt]");n&&(n.hidden=!t,n.innerHTML=t?`<span>KÖZÉPPONT ${this.manualCentroids.length+1} / ${this.k}</span><strong>Kattints a vászonra.</strong>`:""),(h=this.canvas)==null||h.classList.toggle("is-placing-centroids",t),(u=this.canvas)==null||u.classList.toggle("is-touch-drawing",this.touchDrawingEnabled&&!t),(g=this.canvas)==null||g.setAttribute("aria-label",t?`Klaszterezési pontfelhő. A(z) ${this.manualCentroids.length+1}. kezdő középpont helyének kijelölése következik, összesen ${this.k} középpontból.`:"Klaszterezési pontfelhő és algoritmuseredmény")}syncKeyboardEntry(){var a,i;const t=(a=this.root)==null?void 0:a.querySelector("[data-entry-kind]"),e=t==null?void 0:t.querySelector("option[value='centroid']");e&&(e.disabled=this.algorithm!=="kmeans"),t&&this.algorithm!=="kmeans"&&t.value==="centroid"&&(t.value="point");const s=(i=this.root)==null?void 0:i.querySelector("[data-entry-action-label]");s&&(s.textContent=(t==null?void 0:t.value)==="centroid"?"Középpont elhelyezése":"Adatpont hozzáadása")}addPoint(t){this.lastDrawn&&(this.lastDrawn.x-t.x)**2+(this.lastDrawn.y-t.y)**2<.0012||this.points.length>=320||(this.points.push(t),this.lastDrawn=t,this.resetAlgorithms(),this.update())}step(){this.isPlacingCentroids||(this.kMeansState=Fe(this.points,this.kMeansState),this.update())}run(){this.runTimer=void 0,!this.isPlacingCentroids&&(this.kMeansState.phase==="done"&&(this.kMeansState=tt(this.points,this.k,this.initializationSeed)),this.step(),this.kMeansState.phase!=="done"&&this.kMeansState.iteration<30&&(this.runTimer=window.setTimeout(()=>this.run(),520)))}stopRun(){this.runTimer!==void 0&&window.clearTimeout(this.runTimer),this.runTimer=void 0}update(){var s;this.dbscanResult=et(this.points,this.epsilon,this.minPoints),this.syncManualCentroidControls();const t=(a,i)=>{var o;const n=(o=this.root)==null?void 0:o.querySelector(a);n&&(n.textContent=i)};t("[data-k-output]",String(this.k)),t("[data-epsilon-output]",this.epsilon.toFixed(2).replace(".",",")),t("[data-minpts-output]",String(this.minPoints));const e=(s=this.root)==null?void 0:s.querySelector("[data-observation]");if(this.algorithm==="kmeans")if(this.isPlacingCentroids){const a=this.k-this.manualCentroids.length;e&&(e.innerHTML=`<p class="control-label">Kézi inicializálás</p><strong>${this.manualCentroids.length} / ${this.k} középpont a helyén.</strong><p>${a===1?"Még egy középpontot jelölj ki.":`Még ${a} középpontot jelölj ki.`}</p>`),t("[data-primary-label]","Elhelyezve"),t("[data-primary-metric]",`${this.manualCentroids.length} / ${this.k}`),t("[data-secondary-label]","Következő lépés"),t("[data-secondary-metric]",String(this.manualCentroids.length+1)),t("[data-summary]",`${this.points.length} adatpont · ${this.manualCentroids.length} / ${this.k} középpont elhelyezve`)}else{const a=this.kMeansState.phase==="assign"?"Hozzárendelési lépés.":this.kMeansState.phase==="update"?"Centroidfrissítési lépés.":"A centroidok konvergáltak.";e&&(e.innerHTML=`<p class="control-label">Aktuális eredmény</p><strong>${a}</strong><p>${this.kMeansState.phase==="assign"?"Minden pontot a hozzá legközelebbi centroidhoz rendelünk.":this.kMeansState.phase==="update"?"Minden centroid a saját pontjainak átlagába mozdul.":"Ez egy lokális optimum; más kezdés más eredményt adhat."}</p>`),t("[data-primary-label]","Iteráció"),t("[data-primary-metric]",String(this.kMeansState.iteration)),t("[data-secondary-label]","Klaszteren belüli négyzetösszeg (SSE)");const i=this.kMeansState.assignments.every(n=>n>=0);t("[data-secondary-metric]",i&&this.points.length>0?Ve(this.points,this.kMeansState.assignments,this.kMeansState.centroids).toFixed(2):"—"),t("[data-summary]",`${this.points.length} címkézetlen pont · ${this.k} beállított klaszter · ${a}`)}else{const a=this.dbscanResult.assignments.filter(i=>i<0).length;e&&(e.innerHTML=`<p class="control-label">Aktuális eredmény</p><strong>${this.dbscanResult.clusters} klaszter, ${a} zajpont.</strong><p>${a>this.points.length*.45?"Az ε túl szűk lehet: kevés pont éri el a szükséges sűrűséget.":this.dbscanResult.clusters===1?"Az ε összeköthette a korábban különálló sűrű részeket.":"A DBSCAN összefüggő sűrűségi komponenseket azonosított."}</p>`),t("[data-primary-label]","Klaszter"),t("[data-primary-metric]",String(this.dbscanResult.clusters)),t("[data-secondary-label]","Zajpont"),t("[data-secondary-metric]",String(a)),t("[data-summary]",`${this.points.length} címkézetlen pont · ${this.dbscanResult.clusters} klaszter · ${a} pontot nem sorolt be a DBSCAN.`)}this.draw()}draw(){var i;if(!this.canvas)return;const t=this.canvas.getContext("2d");if(!t)return;const{width:e,height:s}=P(this.canvas);t.clearRect(0,0,e,s),t.fillStyle="#f4f1e8",t.fillRect(0,0,e,s),B(t,e,s);const a=this.algorithm==="kmeans"?this.isPlacingCentroids?Array(this.points.length).fill(-1):this.kMeansState.assignments:this.dbscanResult.assignments;if(this.algorithm==="kmeans"&&!this.isPlacingCentroids&&this.kMeansState.assignments.some(n=>n>=0)&&(t.save(),t.lineWidth=.8,this.points.forEach((n,o)=>{const r=a[o],l=this.kMeansState.centroids[r];if(!l)return;const[c,p]=M(n,e,s),[h,u]=M(l,e,s);t.beginPath(),t.moveTo(c,p),t.lineTo(h,u),t.strokeStyle=`${L[r%L.length]}24`,t.lineWidth=.75,t.stroke()}),t.restore()),this.points.forEach((n,o)=>{const[r,l]=M(n,e,s),c=a[o];t.save(),t.beginPath();const p=c<0;if(this.algorithm==="dbscan"&&p)t.moveTo(r-3.5,l-3.5),t.lineTo(r+3.5,l+3.5),t.moveTo(r+3.5,l-3.5),t.lineTo(r-3.5,l+3.5),t.strokeStyle="#6d7480",t.lineWidth=1.6,t.stroke();else{const h=c>=0?L[c%L.length]:"#526077",u=this.algorithm==="dbscan"?this.dbscanResult.types[o]:"core",g=this.algorithm==="kmeans"&&c>=0,v=g?5.8:u==="core"?4.8:4;t.arc(r,l,v,0,Math.PI*2),t.fillStyle=u==="border"?"#f4f1e8":h,t.fill(),t.strokeStyle=g?"rgba(18, 32, 63, 0.52)":h,t.lineWidth=g?1.15:u==="border"?1.8:1,t.stroke()}t.restore()}),this.algorithm==="kmeans"){if((this.isPlacingCentroids?this.manualCentroids:this.kMeansState.centroids).forEach((o,r)=>{const[l,c]=M(o,e,s);t.save(),t.fillStyle="rgba(244, 241, 232, 0.96)",t.strokeStyle="#12203f",t.lineWidth=1.5,t.beginPath(),t.arc(l,c,10,0,Math.PI*2),t.fill(),t.stroke(),t.strokeStyle=L[r%L.length],t.lineWidth=3.5,t.beginPath(),t.moveTo(l-8,c),t.lineTo(l+8,c),t.moveTo(l,c-8),t.lineTo(l,c+8),t.stroke(),t.fillStyle="#12203f",t.beginPath(),t.arc(l,c,2.4,0,Math.PI*2),t.fill(),this.isPlacingCentroids&&(t.fillStyle=L[r%L.length],t.font="600 11px 'IBM Plex Mono', monospace",t.textAlign="center",t.textBaseline="bottom",t.fillText(String(r+1),l,c-10)),t.restore()}),this.isPlacingCentroids&&this.pointer){const[o,r]=M(this.pointer,e,s),l=L[this.manualCentroids.length%L.length];t.save(),t.strokeStyle=l,t.globalAlpha=.58,t.lineWidth=2,t.setLineDash([4,4]),t.beginPath(),t.arc(o,r,11,0,Math.PI*2),t.stroke(),t.setLineDash([]),t.beginPath(),t.moveTo(o-7,r),t.lineTo(o+7,r),t.moveTo(o,r-7),t.lineTo(o,r+7),t.stroke(),t.restore()}}else if(this.pointer&&this.points.length>0){const n=this.points.reduce((h,u,g)=>C(u,this.pointer)<C(this.points[h],this.pointer)?g:h,0),o=this.points[n],r=this.points.filter(h=>C(h,o)<=this.epsilon*this.epsilon),[l,c]=M(o,e,s);r.forEach(h=>{const[u,g]=M(h,e,s);t.beginPath(),t.arc(u,g,7,0,Math.PI*2),t.strokeStyle="rgba(184, 50, 30, .5)",t.lineWidth=1,t.stroke()}),t.save(),t.beginPath(),t.ellipse(l,c,this.epsilon*(e-40),this.epsilon*(s-40),0,0,Math.PI*2),t.fillStyle="rgba(224, 69, 42, .055)",t.fill(),t.strokeStyle="rgba(184, 50, 30, .72)",t.lineWidth=1.5,t.stroke(),t.restore();const p=(i=this.root)==null?void 0:i.querySelector("[data-observation]");if(p){const h=this.dbscanResult.types[n],u=h==="core"?"magpont":h==="border"?"határpont":"zajpont";p.innerHTML=`<p class="control-label">ε-környezet</p><strong>${r.length} pont önmagával együtt → ${u}.</strong><p>A kör mindig a kurzorhoz legközelebbi adatpontra illeszkedik.</p>`}}}}const Ze=[{uid:"row-01",record:"H-001",programme:"Mérnökinformatikus",birthYear:2002,weeklyStudyHours:8},{uid:"row-02",record:"H-002",programme:"Gazdaságinformatikus",birthYear:2001,weeklyStudyHours:6},{uid:"row-03",record:"H-003",programme:"Villamosmérnök",birthYear:2003,weeklyStudyHours:7},{uid:"row-04",record:"H-004",programme:"Mérnökinformatikus",birthYear:2e3,weeklyStudyHours:10},{uid:"row-05",record:"H-005",programme:"Gazdaságinformatikus",birthYear:"",weeklyStudyHours:5},{uid:"row-06",record:"H-006",programme:"Mérnökinformatikus",birthYear:2004,weeklyStudyHours:9},{uid:"row-07",record:"H-007",programme:"Villamosmérnök",birthYear:2001,weeklyStudyHours:7},{uid:"row-08",record:"H-008",programme:"Mérnökinformatikus",birthYear:2002,weeklyStudyHours:11},{uid:"row-09",record:"H-009",programme:"Gazdaságinformatikus",birthYear:1999,weeklyStudyHours:6},{uid:"row-10",record:"H-010",programme:"Villamosmérnök",birthYear:2003,weeklyStudyHours:8},{uid:"row-11",record:"H-011",programme:"Mérnökinformatikus",birthYear:"N/A",weeklyStudyHours:12},{uid:"row-12",record:"H-012",programme:"Gazdaságinformatikus",birthYear:2e3,weeklyStudyHours:4},{uid:"row-13",record:"H-013",programme:"Mérnökinformatikus",birthYear:2002,weeklyStudyHours:9},{uid:"row-14",record:"H-014",programme:"Villamosmérnök",birthYear:2001,weeklyStudyHours:6},{uid:"row-15",record:"H-015",programme:"Gazdaságinformatikus",birthYear:2004,weeklyStudyHours:7},{uid:"row-16",record:"H-016",programme:"Mérnökinformatikus",birthYear:1998,weeklyStudyHours:13},{uid:"row-17",record:"H-017",programme:"Villamosmérnök",birthYear:2e3,weeklyStudyHours:8},{uid:"row-18",record:"H-018",programme:"Mérnökinformatikus",birthYear:2003,weeklyStudyHours:9},{uid:"row-19",record:"H-019",programme:"Gazdaságinformatikus",birthYear:2001,weeklyStudyHours:5},{uid:"row-20",record:"H-020",programme:"Villamosmérnök",birthYear:1900,weeklyStudyHours:7},{uid:"row-21",record:"H-021",programme:"Mérnökinformatikus",birthYear:2002,weeklyStudyHours:10},{uid:"row-22",record:"H-022",programme:"Gazdaságinformatikus",birthYear:2004,weeklyStudyHours:6},{uid:"row-23",record:"H-023",programme:"Villamosmérnök",birthYear:1999,weeklyStudyHours:8},{uid:"row-24",record:"H-024",programme:"Mérnökinformatikus",birthYear:2003,weeklyStudyHours:11},{uid:"row-25",record:"H-025",programme:"Gazdaságinformatikus",birthYear:2e3,weeklyStudyHours:5},{uid:"row-26",record:"H-026",programme:"Villamosmérnök",birthYear:2002,weeklyStudyHours:7},{uid:"row-27",record:"H-027",programme:"Mérnökinformatikus",birthYear:2001,weeklyStudyHours:9},{uid:"row-28",record:"H-018",programme:"Mérnökinformatikus",birthYear:2003,weeklyStudyHours:9}];function Jt(){return Ze.map(d=>({...d}))}function fe(d){return d<1990||d>2010}function Qe(d){return[d.record,d.programme,String(d.birthYear),String(d.weeklyStudyHours)].join("\0")}function st(d){const t=new Set,e=[];return d.forEach(s=>{s.birthYear===""?e.push({id:`missing:${s.uid}`,kind:"missing",rowUid:s.uid,severity:"error",shortLabel:"hiányzó",title:"Hiányzik a születési év",detail:"Az üres cella nem használható számszerű összesítésben. A pótlás módját dokumentálni kell."}):typeof s.birthYear!="number"?e.push({id:`nonnumeric:${s.uid}`,kind:"nonnumeric",rowUid:s.uid,severity:"error",shortLabel:"nem szám",title:"Szöveg került a számoszlopba",detail:"Az „N/A” jelölés szöveg. Előbb egységes hiányzó értékké vagy ellenőrzött számmá kell alakítani."}):fe(s.birthYear)&&!s.yearReviewed&&e.push({id:`outlier:${s.uid}`,kind:"outlier",rowUid:s.uid,severity:"review",shortLabel:"ellenőrizendő",title:"Szokatlan, de nem bizonyítottan hibás",detail:"Az érték kívül esik a mintához választott 1990–2010-es ellenőrzési tartományon. Forrásellenőrzés nélkül nem törölhető."});const a=Qe(s);t.has(a)?e.push({id:`duplicate:${s.uid}`,kind:"duplicate",rowUid:s.uid,severity:"error",shortLabel:"duplikátum",title:"A rekord teljes másolata",detail:"A rekordazonosító és az összes megjelenített érték megegyezik egy korábbi sorral."}):t.add(a)}),e}function ts(d){return d.reduce((t,e)=>(t[e.kind]+=1,t),{missing:0,nonnumeric:0,outlier:0,duplicate:0})}function ze(d){const t=d.map(i=>i.birthYear).filter(i=>typeof i=="number"&&Number.isFinite(i)).sort((i,n)=>i-n);if(t.length===0)return{count:0,excluded:d.length,mean:null,median:null,minimum:null,maximum:null};const e=Math.floor(t.length/2),s=t.length%2===0?(t[e-1]+t[e])/2:t[e],a=t.reduce((i,n)=>i+n,0)/t.length;return{count:t.length,excluded:d.length-t.length,mean:a,median:s,minimum:t[0],maximum:t.at(-1)??t[0]}}function Zt(d){const t=d.filter(s=>typeof s.birthYear=="number"&&(!fe(s.birthYear)||s.yearReviewed)),e=ze(t).median;return e===null?null:Math.round(e)}function es(d){const t=[{label:"≤1950",count:0},{label:"1951–97",count:0},...Array.from({length:8},(e,s)=>({label:String(1998+s),count:0})),{label:"≥2006",count:0}];return d.forEach(e=>{typeof e.birthYear!="number"||!Number.isFinite(e.birthYear)||(e.birthYear<=1950?t[0].count+=1:e.birthYear<=1997?t[1].count+=1:e.birthYear<=2005?t[2+e.birthYear-1998].count+=1:t.at(-1).count+=1)}),t}function ss(d,t){if(t.kind==="remove-row")return d.filter(e=>e.uid!==t.rowUid).map(e=>({...e}));if(t.kind==="set-year"&&(!Number.isFinite(t.value)||!Number.isInteger(t.value)))throw new TypeError("A születési évnek véges egész számnak kell lennie.");return d.map(e=>e.uid!==t.rowUid?{...e}:t.kind==="set-year"?{...e,birthYear:t.value,yearReviewed:!1}:t.kind==="set-year-missing"?{...e,birthYear:"",yearReviewed:!1}:{...e,yearReviewed:!0})}const Qt=["missing","nonnumeric","duplicate","outlier"],as={missing:"Hiányzó",nonnumeric:"Nem szám",duplicate:"Duplikátum",outlier:"Ellenőrzendő"};function is(d){return d.replace(/[&<>'"]/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;","'":"&#39;",'"':"&quot;"})[t]??t)}function dt(d){return d===null?"—":new Intl.NumberFormat("hu-HU",{maximumFractionDigits:1}).format(d)}class ns{constructor(t){m(this,"context");m(this,"root");m(this,"rows",Jt());m(this,"history",[]);m(this,"filter","all");m(this,"selectedRowUid","row-05");m(this,"selectedIssueId","missing:row-05");m(this,"onClick",t=>{var n,o,r;const e=t.target.closest("button");if(!e||!((n=this.root)!=null&&n.contains(e)))return;const s=e.dataset.rowUid,a=e.dataset.issueId,i=e.dataset.filter;if(s&&e.dataset.action==="select-row"){this.selectRow(s);return}if(a){const l=st(this.rows).find(c=>c.id===a);l&&(this.selectedRowUid=l.rowUid,this.selectedIssueId=l.id,this.update());return}if(i&&["all",...Qt].includes(i)){this.filter=i;const l=this.visibleRows(st(this.rows));l.some(c=>c.uid===this.selectedRowUid)?this.update():this.selectRow(((o=l[0])==null?void 0:o.uid)??((r=this.rows[0])==null?void 0:r.uid)??"");return}switch(e.dataset.action){case"reset":this.rows=Jt(),this.history=[],this.filter="all",this.selectedRowUid="row-05",this.selectedIssueId="missing:row-05",this.announce("A szintetikus tábla visszaállt az eredeti állapotba."),this.update();break;case"undo":{const l=this.history.pop();if(!l)return;this.rows=l,this.selectFirstOpenIssue(),this.announce("Az utolsó módosítást visszavontad."),this.update();break}case"use-median":{const l=Zt(this.rows);l!==null&&this.repair({kind:"set-year",rowUid:this.selectedRowUid,value:l},`A születési évet ${l}-re, a jelenlegi mediánra állítottad.`);break}case"set-missing":this.repair({kind:"set-year-missing",rowUid:this.selectedRowUid},"A cellát egységes hiányzó értékre állítottad.");break;case"confirm-year":this.repair({kind:"confirm-year",rowUid:this.selectedRowUid},"Az értéket ellenőrzöttként jelölted; a táblában változatlanul megmaradt.");break;case"remove-duplicate":this.repair({kind:"remove-row",rowUid:this.selectedRowUid},"A kijelölt ismétlődő sort eltávolítottad.");break;default:e.dataset.answer&&this.answerQuiz(e)}});m(this,"onSubmit",t=>{const e=t.target.closest("[data-manual-year-form]");if(!e)return;t.preventDefault();const s=e.querySelector("[data-manual-year]"),a=Number(s==null?void 0:s.value);if(!Number.isInteger(a)){s==null||s.setCustomValidity("Adj meg egész évszámot."),s==null||s.reportValidity();return}s==null||s.setCustomValidity(""),this.repair({kind:"set-year",rowUid:this.selectedRowUid,value:a},`A születési évet ${a}-re módosítottad.`)});this.context=t}mount(t){this.root=t,t.innerHTML=`
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
      </article>`,t.addEventListener("click",this.onClick),t.addEventListener("submit",this.onSubmit),this.update()}destroy(){var t,e;(t=this.root)==null||t.removeEventListener("click",this.onClick),(e=this.root)==null||e.removeEventListener("submit",this.onSubmit),this.root=void 0}selectRow(t){this.selectedRowUid=t;const e=st(this.rows).find(s=>s.rowUid===t);this.selectedIssueId=(e==null?void 0:e.id)??"",this.update()}selectFirstOpenIssue(t){var a;const e=st(this.rows),s=e.find(i=>i.rowUid===t)??e[0];if(s){this.selectedRowUid=s.rowUid,this.selectedIssueId=s.id;return}this.selectedRowUid=((a=this.rows[0])==null?void 0:a.uid)??"",this.selectedIssueId=""}repair(t,e){this.history.push(this.rows.map(a=>({...a})));const s=this.selectedRowUid;this.rows=ss(this.rows,t),this.selectFirstOpenIssue(s),this.announce(e),this.update()}answerQuiz(t){var a,i;const e=t.dataset.answer==="right";(a=this.root)==null||a.querySelectorAll("[data-answer]").forEach(n=>n.classList.remove("is-correct","is-wrong")),t.classList.add(e?"is-correct":"is-wrong");const s=(i=this.root)==null?void 0:i.querySelector("[data-quiz-feedback]");s&&(s.textContent=e?"Helyes. A szélsőséges érték vizsgálati jelzés, nem automatikus törlési utasítás. A modult teljesítetted.":"A szélsőség önmagában még nem bizonyítja, hogy az érték hibás."),e&&this.context.onComplete()}announce(t){var s;const e=(s=this.root)==null?void 0:s.querySelector("[data-cleaning-announcement]");e&&(e.textContent=t)}visibleRows(t){if(this.filter==="all")return this.rows;const e=new Set(t.filter(s=>s.kind===this.filter).map(s=>s.rowUid));return this.rows.filter(s=>e.has(s.uid))}update(){if(!this.root)return;const t=st(this.rows);!t.find(o=>o.id===this.selectedIssueId)&&this.selectedIssueId&&(this.selectedIssueId="");const s=this.root.querySelector("[data-cleaning-overview]"),a=this.root.querySelector("[data-cleaning-table]"),i=this.root.querySelector("[data-cleaning-inspector]");s&&(s.innerHTML=this.overviewMarkup(t)),a&&(a.innerHTML=this.tableMarkup(t)),i&&(i.innerHTML=this.inspectorMarkup(t));const n=this.root.querySelector("[data-action='undo']");n&&(n.disabled=this.history.length===0)}overviewMarkup(t){const e=ts(t),s=ze(this.rows),a=es(this.rows),i=Math.max(1,...a.map(o=>o.count)),n=a.map((o,r)=>{const l=43+r*52,c=o.count/i*118,p=154-c;return`<g class="histogram-bin"><rect x="${l}" y="${p.toFixed(1)}" width="34" height="${c.toFixed(1)}" rx="2"></rect><text x="${l+17}" y="${Math.max(18,p-7).toFixed(1)}" text-anchor="middle">${o.count||""}</text><text class="histogram-label" x="${l+17}" y="177" text-anchor="middle">${o.label}</text></g>`}).join("");return`<div class="cleaning-overview">
      <div class="issue-filter-panel" aria-labelledby="issue-filter-title">
        <div class="cleaning-panel-heading"><div><p class="control-label">Adatminőségi teendők</p><h3 id="issue-filter-title">${t.length} nyitott jelzés</h3></div><button type="button" data-filter="all" aria-pressed="${this.filter==="all"}" class="issue-filter-all ${this.filter==="all"?"is-active":""}">Mind a ${this.rows.length} sor</button></div>
        <div class="issue-filter-grid">
          ${Qt.map(o=>`<button type="button" data-filter="${o}" aria-pressed="${this.filter===o}" class="issue-filter ${this.filter===o?"is-active":""}"><span>${as[o]}</span><strong>${e[o]}</strong></button>`).join("")}
        </div>
        <p class="cleaning-rule-note">Az „ellenőrzendő” nem automatikus hiba: a 1990–2010-es tartomány csak vizsgálati szabály ehhez a mintához.</p>
      </div>
      <div class="cleaning-chart-panel">
        <div class="cleaning-panel-heading"><div><p class="control-label">Születési év</p><h3>Eloszlás és középérték</h3></div><span>${s.count} számos · ${s.excluded} kihagyott</span></div>
        <svg class="cleaning-histogram" viewBox="0 0 640 194" role="img" aria-labelledby="birth-hist-title birth-hist-desc">
          <title id="birth-hist-title">A számmal megadott születési évek hisztogramja</title>
          <desc id="birth-hist-desc">${a.map(o=>`${o.label}: ${o.count} rekord`).join("; ")}.</desc>
          <line x1="36" x2="616" y1="154" y2="154"></line>${n}
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
          <tbody>${e.map(a=>{const i=s.get(a.uid)??[],n=a.uid===this.selectedRowUid,o=a.birthYear===""?"üres":String(a.birthYear);return`<tr class="${i.length?"has-issue":""} ${n?"is-selected":""}">
              <th scope="row"><button class="cleaning-record-button" type="button" data-action="select-row" data-row-uid="${a.uid}" aria-pressed="${n}">${a.record}</button></th>
              <td>${is(a.programme)}</td>
              <td class="year-cell ${i.some(r=>r.kind!=="duplicate")?"is-flagged":""}">${o}${a.yearReviewed?"<small>ellenőrizve</small>":""}</td>
              <td>${a.weeklyStudyHours} óra</td>
              <td><div class="cleaning-issue-list">${i.length?i.map(r=>`<button type="button" class="cleaning-issue-chip is-${r.severity} ${r.id===this.selectedIssueId?"is-selected":""}" data-issue-id="${r.id}" aria-pressed="${r.id===this.selectedIssueId}">${r.shortLabel}</button>`).join(""):'<span class="cleaning-ok">rendben</span>'}</div></td>
            </tr>`}).join("")}</tbody>
        </table>
      </div><span class="cleaning-scroll-hint" aria-hidden="true">Húzd oldalra&nbsp; →</span></div>`}inspectorMarkup(t){const e=this.rows.find(o=>o.uid===this.selectedRowUid),s=t.find(o=>o.id===this.selectedIssueId)??t.find(o=>o.rowUid===this.selectedRowUid);if(!e)return'<p class="control-label">Javítás</p><h3>Nincs megjelenített rekord</h3><p>Válassz másik szűrőt.</p>';if(!s)return`<p class="control-label">Kijelölt rekord · ${e.record}</p><h3>Nincs nyitott jelzés</h3><p>A jelenlegi szabályok ezen a soron nem találtak teendőt.</p><dl class="metric-list"><div><dt>Születési év</dt><dd>${e.birthYear||"hiányzó"}</dd></div><div><dt>Tanulás / hét</dt><dd>${e.weeklyStudyHours} óra</dd></div></dl>`;const a=Zt(this.rows),i=s.severity==="review"?"ELLENŐRZÉST KÉR":"JAVÍTÁST KÉR";let n="";return s.kind==="missing"?n=`<button class="button button-ink" type="button" data-action="use-median" ${a===null?"disabled":""}>Pótlás mediánnal${a===null?"":` (${a})`}</button>${this.manualYearForm(e)}`:s.kind==="nonnumeric"?n=`<button class="button button-ink" type="button" data-action="set-missing">„N/A” → hiányzó</button><button class="button button-paper" type="button" data-action="use-median" ${a===null?"disabled":""}>Pótlás mediánnal${a===null?"":` (${a})`}</button>${this.manualYearForm(e)}`:s.kind==="outlier"?n=`<button class="button button-ink" type="button" data-action="confirm-year">Forrás alapján érvényes</button><button class="button button-paper" type="button" data-action="set-missing">Nem igazolható → hiányzó</button>${this.manualYearForm(e)}`:n='<button class="button button-ink" type="button" data-action="remove-duplicate">Ismétlődő sor eltávolítása</button>',`<div class="cleaning-inspector-head"><p class="control-label">${i} · ${e.record}</p><span class="cleaning-issue-chip is-${s.severity}">${s.shortLabel}</span></div>
      <h3>${s.title}</h3><p>${s.detail}</p>
      <div class="cleaning-current-value"><span>Jelenlegi cellaérték</span><strong>${e.birthYear===""?"üres":e.birthYear}</strong></div>
      <div class="cleaning-repair-actions">${n}</div>
      ${s.kind==="outlier"?'<p class="cleaning-decision-note"><strong>Fontos:</strong> egyik javítás sem következik pusztán abból, hogy az érték szélsőséges.</p>':""}`}manualYearForm(t){const e=typeof t.birthYear=="number"?t.birthYear:2001;return`<form class="manual-year-form" data-manual-year-form><label for="manual-year-${t.uid}"><strong>Kézi javítás ellenőrzött forrásból</strong><span>Egész évszám</span></label><div><input id="manual-year-${t.uid}" data-manual-year type="number" min="1850" max="2026" step="1" value="${e}" required /><button class="button button-paper" type="submit">Mentés</button></div></form>`}}function te(d){if(d.length===0)return 0;const t=new Map;return d.forEach(s=>t.set(s,(t.get(s)??0)+1)),1-[...t.values()].reduce((s,a)=>{const i=a/d.length;return s+i*i},0)}function os(d){if(d.length===0)return 0;const t=new Map;return d.forEach(s=>t.set(s,(t.get(s)??0)+1)),1-Math.max(...t.values())/d.length}function W(d){if(d.length===0)return;const t=new Map;return d.forEach(e=>t.set(e.label,(t.get(e.label)??0)+1)),[...t.entries()].sort((e,s)=>s[1]-e[1]||e[0]-s[0])[0][0]}function rs(d,t){const e=[],s=[];return d.forEach(a=>{a[t.axis]<=t.threshold?e.push(a):s.push(a)}),{left:e,right:s}}function Nt(d,t){const{left:e,right:s}=rs(d,t),a=d.length,i=te(d.map(r=>r.label)),n=r=>a===0?0:(e.length*r(e.map(l=>l.label))+s.length*r(s.map(l=>l.label)))/a,o=n(te);return{split:{...t},left:e,right:s,valid:a>=2&&e.length>0&&s.length>0,parentGini:i,weightedGini:o,giniGain:i-o,weightedMisclassification:n(os)}}function Mt(d){if(d.length<2)return;let t;return["x","y"].forEach(e=>{const s=[...new Set(d.map(a=>a[e]))].sort((a,i)=>a-i);for(let a=0;a<s.length-1;a+=1){const i=s[a]+(s[a+1]-s[a])/2,n=Nt(d,{axis:e,threshold:i});n.valid&&(!t||n.weightedGini<t.weightedGini-1e-12)&&(t=n)}}),t}function jt(d){return d.map(t=>({x:t.x,y:t.y,label:t.label??0}))}const $t={moons:{title:"Két hold",question:"Mennyit ér egyetlen vágás?",make:()=>jt(Yt())},xor:{title:"Kockás",question:"Elég lehet a gyökérvágás?",make:()=>jt(ve())},overlap:{title:"Átfedő",question:"Hol marad kevert levél?",make:()=>jt(be())}};function N(d){return d.toFixed(3).replace(".",",")}function ls(d){return d==="x"?"x₁":"x₂"}function U(d){return d===void 0?"üres":d===0?"A":"B"}function at(d){return`${ls(d.axis)} ≤ ${d.threshold.toFixed(2).replace(".",",")}`}function Pt(d){return{a:d.filter(t=>t.label===0).length,b:d.filter(t=>t.label===1).length}}class ds{constructor(t){m(this,"context");m(this,"root");m(this,"canvas");m(this,"resizeObserver");m(this,"points",$t.moons.make());m(this,"history",[]);m(this,"manualSplit",{axis:"x",threshold:.5});m(this,"showBest",!1);m(this,"tool","split");m(this,"pointLabel",0);m(this,"drawing",!1);m(this,"lastDrawn");this.context=t}mount(t){this.root=t,t.innerHTML=`
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
      </article>`,this.canvas=t.querySelector("canvas.data-canvas")??void 0,this.bindControls(),this.canvas&&(this.resizeObserver=new ResizeObserver(()=>this.draw()),this.resizeObserver.observe(this.canvas)),this.update()}destroy(){var t;(t=this.resizeObserver)==null||t.disconnect(),this.root=void 0,this.canvas=void 0}bindControls(){var e,s,a,i,n,o;if(!this.root||!this.canvas)return;this.root.querySelectorAll("[data-preset]").forEach(r=>{r.addEventListener("click",()=>{const l=r.dataset.preset??"moons";this.points=l==="custom"?[]:$t[l].make(),this.history=[],this.manualSplit={axis:"x",threshold:.5},this.showBest=!1,this.markPreset(l),this.update()})}),this.root.querySelectorAll("[data-tool]").forEach(r=>{r.addEventListener("click",()=>{this.tool=r.dataset.tool==="point"?"point":"split",this.tool==="point"&&(this.pointLabel=Number(r.dataset.label??0)),this.syncControls()})}),this.root.querySelectorAll("[data-axis]").forEach(r=>{r.addEventListener("click",()=>{this.manualSplit={axis:r.dataset.axis==="y"?"y":"x",threshold:this.manualSplit.threshold},this.tool="split",this.showBest=!1,this.update()})}),(e=this.root.querySelector("#tree-threshold"))==null||e.addEventListener("input",r=>{this.manualSplit={...this.manualSplit,threshold:Number(r.target.value)},this.tool="split",this.showBest=!1,this.update()}),(s=this.root.querySelector("[data-action='best']"))==null||s.addEventListener("click",()=>{Mt(this.points)&&(this.showBest=!0,this.update())}),(a=this.root.querySelector("[data-action='show-manual']"))==null||a.addEventListener("click",()=>{this.showBest=!1,this.update()}),(i=this.root.querySelector("[data-action='undo']"))==null||i.addEventListener("click",()=>{const r=this.history.pop();r&&(this.points=r,this.showBest=!1,this.markPreset("custom"),this.update())}),(n=this.root.querySelector("[data-action='clear']"))==null||n.addEventListener("click",()=>{this.points.length>0&&this.pushHistory(),this.points=[],this.showBest=!1,this.markPreset("custom"),this.update()}),(o=this.root.querySelector("[data-action='add-keyboard']"))==null||o.addEventListener("click",()=>{var p,h,u,g,v,b;const r=Number(((h=(p=this.root)==null?void 0:p.querySelector("[data-entry-x]"))==null?void 0:h.value)??.5),l=Number(((g=(u=this.root)==null?void 0:u.querySelector("[data-entry-y]"))==null?void 0:g.value)??.5),c=Number(((b=(v=this.root)==null?void 0:v.querySelector("[data-entry-label]"))==null?void 0:b.value)??0);this.pushHistory(),this.points.push({x:Math.max(0,Math.min(1,r)),y:Math.max(0,Math.min(1,l)),label:c}),this.showBest=!1,this.markPreset("custom"),this.update()}),this.canvas.addEventListener("pointerdown",r=>{var c;const l=I(this.canvas,r);if(this.tool==="split"){this.manualSplit={...this.manualSplit,threshold:this.manualSplit.axis==="x"?l.x:l.y},this.showBest=!1,this.update();return}this.drawing=!0,this.lastDrawn=void 0,(c=this.canvas)==null||c.setPointerCapture(r.pointerId),this.pushHistory(),this.addDrawnPoint(l)}),this.canvas.addEventListener("pointermove",r=>{!this.drawing||this.tool!=="point"||(r.preventDefault(),this.addDrawnPoint(I(this.canvas,r)))});const t=r=>{var l;(l=this.canvas)!=null&&l.hasPointerCapture(r.pointerId)&&this.canvas.releasePointerCapture(r.pointerId),this.drawing=!1,this.lastDrawn=void 0};this.canvas.addEventListener("pointerup",t),this.canvas.addEventListener("pointercancel",t),this.root.querySelectorAll("[data-answer]").forEach(r=>{r.addEventListener("click",()=>{var p,h;const l=r.dataset.answer==="right";(p=this.root)==null||p.querySelectorAll("[data-answer]").forEach(u=>u.classList.remove("is-correct","is-wrong")),r.classList.add(l?"is-correct":"is-wrong");const c=(h=this.root)==null?void 0:h.querySelector("[data-quiz-feedback]");c&&(c.textContent=l?"Helyes. Az elemszám szerinti súlyozás mindkét gyermek teljes mintán belüli hatását megőrzi. A modult teljesítetted.":"Gondold végig, mi történne, ha egyetlen tiszta pont ugyanannyit számítana, mint a minta többi része."),l&&this.context.onComplete()})})}pushHistory(){this.history.push(this.points.map(t=>({...t}))),this.history.length>30&&this.history.shift()}addDrawnPoint(t){if(this.points.length>=240||this.lastDrawn&&(this.lastDrawn.x-t.x)**2+(this.lastDrawn.y-t.y)**2<.0011)return;const e={...t,label:this.pointLabel};this.points.push(e),this.lastDrawn=e,this.showBest=!1,this.markPreset("custom"),this.update()}markPreset(t){var e;(e=this.root)==null||e.querySelectorAll("[data-preset]").forEach(s=>{const a=s.dataset.preset===t;s.classList.toggle("is-active",a),s.setAttribute("aria-pressed",String(a))})}syncControls(){var t,e,s;(t=this.root)==null||t.querySelectorAll("[data-tool]").forEach(a=>{const i=this.tool==="split"?a.dataset.tool==="split":a.dataset.tool==="point"&&Number(a.dataset.label)===this.pointLabel;a.classList.toggle("is-active",i),a.setAttribute("aria-pressed",String(i))}),(e=this.root)==null||e.querySelectorAll("[data-axis]").forEach(a=>{const i=a.dataset.axis===this.manualSplit.axis;a.classList.toggle("is-active",i),a.setAttribute("aria-pressed",String(i))}),(s=this.canvas)==null||s.classList.toggle("is-touch-drawing",this.tool==="point")}update(){var o,r,l,c,p;const t=Nt(this.points,this.manualSplit),e=Mt(this.points);this.showBest&&!e&&(this.showBest=!1);const s=this.showBest&&e?e:t,a=(o=this.root)==null?void 0:o.querySelector("#tree-threshold");a&&(a.value=String(this.manualSplit.threshold)),this.setText("[data-threshold-output]",this.manualSplit.threshold.toFixed(2).replace(".",",")),this.setText("[data-parent-gini]",this.points.length>0?N(s.parentGini):"—"),this.setText("[data-weighted-gini]",s.valid?N(s.weightedGini):"—"),this.setText("[data-misclassification]",s.valid?N(s.weightedMisclassification):"—"),this.setText("[data-gain]",s.valid?N(s.giniGain):"—");const i=(r=this.root)==null?void 0:r.querySelector("[data-action='best']");i&&(i.disabled=!e);const n=(l=this.root)==null?void 0:l.querySelector("[data-action='show-manual']");n==null||n.toggleAttribute("hidden",!this.showBest),(p=(c=this.root)==null?void 0:c.querySelector("[data-best-legend]"))==null||p.toggleAttribute("hidden",!this.showBest),this.updateObservation(s,t,e),this.updateTree(s),this.syncControls(),this.draw()}updateObservation(t,e,s){var l;const a=(l=this.root)==null?void 0:l.querySelector("[data-observation]"),i=Pt(this.points);if(!a)return;if(!t.valid){a.innerHTML=`<p class="control-label">Aktuális vágás</p><strong>Mindkét oldalra kell pont.</strong><p>Most ${i.a} A és ${i.b} B pont van. Rajzolj pontokat, vagy válassz kész adatkészletet.</p>`,this.setText("[data-summary]",`${this.points.length} pont · ${i.a} A · ${i.b} B. A vágás egyik gyermeke üres.`);return}const n=U(W(t.left)),o=U(W(t.right));let r="A CART-eredményhez nyomd meg a Legjobb vágás gombot.";if(this.showBest&&s)if(!e.valid)r="A saját vágás egyik oldala üres, ezért nem érvényes CART-jelölt.";else{const c=Math.max(0,e.weightedGini-s.weightedGini);r=c<5e-4?`A saját vágás ugyanilyen tiszta: súlyozott Gini ${N(e.weightedGini)}.`:`Saját Gini: ${N(e.weightedGini)}. A CART ${N(c)} értékkel kisebb súlyozott Ginit talált.`}a.innerHTML=`<p class="control-label">${this.showBest?"CART-vágás":"Saját vágás"}</p><strong>${at(t.split)}</strong><p>Az igen ág ${t.left.length} pontból ${n}, a nem ág ${t.right.length} pontból ${o} osztályt jelez. ${r}</p>`,this.setText("[data-summary]",`${this.points.length} pont · ${i.a} A · ${i.b} B. ${at(t.split)}; súlyozott Gini ${N(t.weightedGini)}.`)}updateTree(t){var p;const e=(p=this.root)==null?void 0:p.querySelector("[data-tree-svg]");if(!e)return;const s='<title id="tree-svg-title">Az aktuális gyökérvágás fája</title>';if(!t.valid){e.innerHTML=`${s}<desc id="tree-svg-desc" data-tree-desc>Nincs érvényes kétoldali vágás.</desc>
        <rect x="190" y="30" width="140" height="54" rx="4" fill="#fffdf6" stroke="#12203f" />
        <text x="260" y="54" text-anchor="middle" fill="#12203f" font-size="12" font-family="IBM Plex Mono">Nincs két ág</text>
        <text x="260" y="70" text-anchor="middle" fill="#667085" font-size="10" font-family="IBM Plex Sans">Adj pontokat mindkét oldalra</text>`,this.setText("[data-tree-caption]","Az érvényes vágáshoz mindkét oldalon kell legalább egy pont.");return}const a=Pt(t.left),i=Pt(t.right),n=W(t.left),o=W(t.right),r=n===0?"#d84429":"#1e67b8",l=o===0?"#d84429":"#1e67b8",c=`${at(t.split)} feltételből egy ${U(n)} és egy ${U(o)} többségű levél következik.`;e.innerHTML=`${s}<desc id="tree-svg-desc" data-tree-desc>${c}</desc>
      <path d="M260 46 L133 83 M260 46 L387 83" fill="none" stroke="#7b8290" stroke-width="1.4" />
      <text x="181" y="65" fill="#667085" font-size="9" font-family="IBM Plex Mono">igen</text>
      <text x="331" y="65" fill="#667085" font-size="9" font-family="IBM Plex Mono">nem</text>
      <rect x="195" y="8" width="130" height="38" rx="4" fill="#fffdf6" stroke="#12203f" stroke-width="1.5" />
      <text x="260" y="31" text-anchor="middle" fill="#12203f" font-size="12" font-family="IBM Plex Mono">${at(t.split)}</text>
      <rect x="70" y="82" width="126" height="34" rx="4" fill="#fffdf6" stroke="${r}" stroke-width="2" />
      <text x="133" y="97" text-anchor="middle" fill="${r}" font-size="11" font-weight="650" font-family="IBM Plex Sans">${U(n)} osztály</text>
      <text x="133" y="109" text-anchor="middle" fill="#667085" font-size="8.5" font-family="IBM Plex Mono">${a.a} A · ${a.b} B</text>
      <rect x="324" y="82" width="126" height="34" rx="4" fill="#fffdf6" stroke="${l}" stroke-width="2" />
      <text x="387" y="97" text-anchor="middle" fill="${l}" font-size="11" font-weight="650" font-family="IBM Plex Sans">${U(o)} osztály</text>
      <text x="387" y="109" text-anchor="middle" fill="#667085" font-size="8.5" font-family="IBM Plex Mono">${i.a} A · ${i.b} B</text>`,this.setText("[data-tree-caption]",`${at(t.split)} után az ágak többségi osztálya adja a két levél becslését.`)}setText(t,e){var a;const s=(a=this.root)==null?void 0:a.querySelector(t);s&&(s.textContent=e)}draw(){if(!this.canvas)return;const t=this.canvas.getContext("2d");if(!t)return;const{width:e,height:s}=P(this.canvas),a=20,i=Math.max(1,e-a*2),n=Math.max(1,s-a*2),o=Nt(this.points,this.manualSplit),r=Mt(this.points),l=this.showBest&&r?r:o;if(t.clearRect(0,0,e,s),t.fillStyle="#f4f1e8",t.fillRect(0,0,e,s),l.valid){const c=W(l.left),p=W(l.right),h=u=>u===0?"rgba(216, 68, 41, 0.09)":"rgba(30, 103, 184, 0.09)";if(l.split.axis==="x"){const u=a+l.split.threshold*i;t.fillStyle=h(c),t.fillRect(a,a,u-a,n),t.fillStyle=h(p),t.fillRect(u,a,e-a-u,n)}else{const u=a+l.split.threshold*n;t.fillStyle=h(c),t.fillRect(a,a,i,u-a),t.fillStyle=h(p),t.fillRect(a,u,i,s-a-u)}}B(t,e,s,a),this.showBest&&r&&o.valid&&this.drawSplitLine(t,e,s,o.split,"#d84429",!0,"saját"),l.valid&&this.drawSplitLine(t,e,s,l.split,this.showBest?"#17776c":"#d84429",!1,this.showBest?"CART":"saját"),this.points.forEach(c=>{const[p,h]=M(c,e,s,a);wt(t,p,h,c.label,4.8)})}drawSplitLine(t,e,s,a,i,n,o){const l=20+a.threshold*(e-40),c=20+a.threshold*(s-40);t.save(),t.strokeStyle=i,t.lineWidth=n?1.5:2.6,t.setLineDash(n?[5,5]:[]),t.beginPath(),a.axis==="x"?(t.moveTo(l,20),t.lineTo(l,s-20)):(t.moveTo(20,c),t.lineTo(e-20,c)),t.stroke(),t.setLineDash([]),t.font="600 10px IBM Plex Mono, monospace";const p=t.measureText(o).width,h=a.axis==="x"?Math.min(e-20-p-10,l+6):26,u=a.axis==="x"?35:Math.max(33,c-7);t.fillStyle="rgba(255, 253, 246, 0.92)",t.fillRect(h-4,u-11,p+8,15),t.fillStyle=i,t.fillText(o,h,u),t.restore()}}function xt(d){var e;if(d.length<2)throw new Error("A PCA-hoz legalább két megfigyelés szükséges.");const t=((e=d[0])==null?void 0:e.length)??0;if(t<1)throw new Error("A megfigyeléseknek legalább egy koordinátájuk kell legyen.");return d.forEach(s=>{if(s.length!==t||s.some(a=>!Number.isFinite(a)))throw new Error("A PCA csak azonos dimenziójú, véges számokat tartalmazó megfigyeléseket kezel.")}),t}function we(d){const t=xt(d),e=Array.from({length:t},()=>0);return d.forEach(s=>s.forEach((a,i)=>{e[i]+=a})),e.map(s=>s/d.length)}function xe(d){if(d.length<2)return 0;const t=d.reduce((e,s)=>e+s,0)/d.length;return d.reduce((e,s)=>e+(s-t)**2,0)/(d.length-1)}function J(d){const t=Math.hypot(...d);if(!Number.isFinite(t)||t<=Number.EPSILON)throw new Error("A vetítési irány nem lehet nullvektor.");return d.map(e=>e/t)}function cs(d,t=!1){const e=xt(d),s=we(d),a=d.map(n=>n.map((o,r)=>o-s[r])),i=Array.from({length:e},(n,o)=>{if(!t)return 1;const r=Math.sqrt(xe(a.map(l=>l[o])));return r>1e-12?r:1});return{mean:s,scales:i,transformed:a.map(n=>n.map((o,r)=>o/i[r]))}}function hs(d){const t=xt(d),e=we(d),s=d.length-1;return Array.from({length:t},(a,i)=>Array.from({length:t},(n,o)=>d.reduce((r,l)=>r+(l[i]-e[i])*(l[o]-e[o]),0)/s))}function ps(d){return Array.from({length:d},(t,e)=>Array.from({length:d},(s,a)=>+(e===a)))}function us(d){const t=d.length;if(t===0||d.some(a=>a.length!==t))throw new Error("Négyzetes mátrix szükséges.");const e=d.map((a,i)=>a.map((n,o)=>{if(!Number.isFinite(n))throw new Error("A mátrix minden eleme véges szám kell legyen.");if(Math.abs(n-d[o][i])>1e-9)throw new Error("A mátrixnak szimmetrikusnak kell lennie.");return n})),s=ps(t);for(let a=0;a<80*t*t;a+=1){let i=0,n=Math.min(1,t-1),o=0;for(let g=0;g<t;g+=1)for(let v=g+1;v<t;v+=1){const b=Math.abs(e[g][v]);b>o&&(o=b,i=g,n=v)}if(o<1e-12||t===1)break;const r=e[i][i],l=e[n][n],c=e[i][n],p=.5*Math.atan2(2*c,l-r),h=Math.cos(p),u=Math.sin(p);for(let g=0;g<t;g+=1){if(g===i||g===n)continue;const v=e[g][i],b=e[g][n];e[g][i]=h*v-u*b,e[i][g]=e[g][i],e[g][n]=u*v+h*b,e[n][g]=e[g][n]}e[i][i]=h**2*r-2*u*h*c+u**2*l,e[n][n]=u**2*r+2*u*h*c+h**2*l,e[i][n]=0,e[n][i]=0;for(let g=0;g<t;g+=1){const v=s[g][i],b=s[g][n];s[g][i]=h*v-u*b,s[g][n]=u*v+h*b}}return Array.from({length:t},(a,i)=>({value:Math.abs(e[i][i])<1e-12?0:e[i][i],vector:J(s.map(n=>n[i]))})).sort((a,i)=>i.value-a.value).reduce((a,i)=>{const n=i.vector.reduce((r,l,c,p)=>Math.abs(l)>Math.abs(p[r])?c:r,0),o=i.vector[n]<0?-1:1;return a.eigenvalues.push(i.value),a.eigenvectors.push(i.vector.map(r=>r*o)),a},{eigenvalues:[],eigenvectors:[]})}function ms(d,t=!1){const e=xt(d),{transformed:s,mean:a,scales:i}=cs(d,t),n=hs(s),{eigenvalues:o,eigenvectors:r}=us(n),l=o.reduce((c,p)=>c+p,0);return{dimensions:e,mean:a,scales:i,covariance:n,eigenvalues:o,components:r,explainedVarianceRatios:o.map(c=>l>0?c/l:0),transformed:s,standardized:t}}function ee(d,t,e){if(e.length!==t.dimensions)throw new Error("A vetítési irány dimenziója nem megfelelő.");const s=J(e),a=d.map(o=>o.reduce((r,l,c)=>r+(l-t.mean[c])/t.scales[c]*s[c],0)),i=xe(a),n=t.eigenvalues.reduce((o,r)=>o+r,0);return{values:a,variance:i,explainedVarianceRatio:n>0?i/n:0,direction:s}}function gs(d,t,e){const s=d*Math.PI/180;if(e===2)return[Math.cos(s),Math.sin(s)];if(e!==3)throw new Error("A szögvezérlés két- vagy háromdimenziós adathoz használható.");const a=t*Math.PI/180;return[Math.cos(a)*Math.cos(s),Math.cos(a)*Math.sin(s),Math.sin(a)]}function vs(d){const t=J(d);if(t.length!==2&&t.length!==3)throw new Error("Csak két- vagy háromdimenziós irány alakítható szögekké.");return{azimuth:Math.atan2(t[1],t[0])*180/Math.PI,elevation:t.length===3?Math.asin(Math.max(-1,Math.min(1,t[2])))*180/Math.PI:0}}function bs(d=314,t=84){const e=A(d),s=34*Math.PI/180;return Array.from({length:t},()=>{const a=x(e)*2.4,i=x(e)*.38;return[2.2+a*Math.cos(s)-i*Math.sin(s),-1.3+a*Math.sin(s)+i*Math.cos(s)]})}function ks(d=2718,t=96){const e=A(d),s=J([.78,.42,.46]),a=J([-.36,.9,-.24]),i=J([s[1]*a[2]-s[2]*a[1],s[2]*a[0]-s[0]*a[2],s[0]*a[1]-s[1]*a[0]]);return Array.from({length:t},()=>{const n=x(e)*2.1,o=x(e)*1.15,r=x(e)*.075;return[0,1,0].map((l,c)=>l+n*s[c]+o*a[c]+r*i[c])})}function ys(d=1618,t=90){const e=A(d);return Array.from({length:t},()=>{const s=x(e);return[120+s*18+x(e)*4.5,3.2+s*.9+x(e)*.22,-1.5-s*.48+x(e)*.18]})}const O={ellipse:{title:"Ferde ellipszis",question:"Melyik irányban a legszélesebb?",dimensions:"2D",make:()=>bs(),start:{azimuth:120,elevation:0}},plane:{title:"Vékony sík",question:"Mennyi marad meg két komponenssel?",dimensions:"3D",make:()=>ks(),start:{azimuth:-35,elevation:-12}},scale:{title:"Eltérő skálák",question:"Mit változtat a standardizálás?",dimensions:"3D",make:()=>ys(),start:{azimuth:62,elevation:28}}},ct=(d,t,e)=>Math.max(t,Math.min(e,d)),Y=(d,t=2)=>d.toFixed(t).replace(".",","),it=d=>`${Y(d*100,1)}%`;class fs{constructor(t){m(this,"context");m(this,"root");m(this,"cloudCanvas");m(this,"projectionCanvas");m(this,"resizeObserver");m(this,"points",O.ellipse.make());m(this,"standardized",!1);m(this,"centeredView",!0);m(this,"azimuth",O.ellipse.start.azimuth);m(this,"elevation",O.ellipse.start.elevation);m(this,"viewYaw",-.62);m(this,"viewPitch",.42);m(this,"drag");m(this,"onKeyDown",t=>{var s;if(!((s=this.root)!=null&&s.isConnected)||t.target.closest("button, a, input, select, textarea, summary, [contenteditable='true']"))return;if(t.key.toLowerCase()==="p"){t.preventDefault(),this.usePcaDirection();return}if(t.key.toLowerCase()==="r"){t.preventDefault(),this.resetView();return}const e=t.shiftKey?10:2;(t.key==="ArrowLeft"||t.key==="ArrowRight")&&(t.preventDefault(),this.azimuth=ct(this.azimuth+(t.key==="ArrowLeft"?-e:e),-180,180),this.update()),(t.key==="ArrowUp"||t.key==="ArrowDown")&&this.model.dimensions===3&&(t.preventDefault(),this.elevation=ct(this.elevation+(t.key==="ArrowDown"?-e:e),-80,80),this.update())});this.context=t}get model(){return ms(this.points,this.standardized)}mount(t){this.root=t,t.innerHTML=`
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
      </article>`,this.cloudCanvas=t.querySelector("[data-pca-cloud]")??void 0,this.projectionCanvas=t.querySelector("[data-pca-projection]")??void 0,this.bindControls(),this.resizeObserver=new ResizeObserver(()=>this.draw()),this.cloudCanvas&&this.resizeObserver.observe(this.cloudCanvas),this.projectionCanvas&&this.resizeObserver.observe(this.projectionCanvas),window.addEventListener("keydown",this.onKeyDown),this.update()}destroy(){var t;(t=this.resizeObserver)==null||t.disconnect(),window.removeEventListener("keydown",this.onKeyDown),this.root=void 0,this.cloudCanvas=void 0,this.projectionCanvas=void 0,this.drag=void 0}bindControls(){var t,e,s,a,i,n;this.root&&(this.root.querySelectorAll("[data-pca-preset]").forEach(o=>{o.addEventListener("click",()=>this.loadPreset(o.dataset.pcaPreset??"ellipse"))}),(t=this.root.querySelector("#pca-azimuth"))==null||t.addEventListener("input",o=>{this.azimuth=Number(o.target.value),this.update()}),(e=this.root.querySelector("#pca-elevation"))==null||e.addEventListener("input",o=>{this.elevation=Number(o.target.value),this.update()}),(s=this.root.querySelector("[data-standardize]"))==null||s.addEventListener("change",o=>{this.standardized=o.target.checked,this.update()}),(a=this.root.querySelector("[data-centered-view]"))==null||a.addEventListener("change",o=>{this.centeredView=o.target.checked,this.update()}),(i=this.root.querySelector("[data-action='pca-direction']"))==null||i.addEventListener("click",()=>this.usePcaDirection()),(n=this.root.querySelector("[data-action='reset-view']"))==null||n.addEventListener("click",()=>this.resetView()),this.root.querySelectorAll("[data-answer]").forEach(o=>{o.addEventListener("click",()=>{var c,p;const r=o.dataset.answer==="right";(c=this.root)==null||c.querySelectorAll("[data-answer]").forEach(h=>h.classList.remove("is-correct","is-wrong")),o.classList.add(r?"is-correct":"is-wrong");const l=(p=this.root)==null?void 0:p.querySelector("[data-quiz-feedback]");l&&(l.textContent=r?"Helyes. A mértékegység a kovarianciát, így a főirányt is megváltoztathatja. A modult teljesítetted.":"Gondold végig, mi történik a szórással, ha egy koordináta minden értékét tízzel szorzod."),r&&this.context.onComplete()})}),this.bindCloudDrag())}bindCloudDrag(){if(!this.cloudCanvas)return;this.cloudCanvas.addEventListener("pointerdown",e=>{var s,a;e.pointerType==="mouse"&&e.button!==0||(this.drag={pointerId:e.pointerId,x:e.clientX,y:e.clientY},(s=this.cloudCanvas)==null||s.setPointerCapture(e.pointerId),(a=this.cloudCanvas)==null||a.classList.add("is-rotating"))}),this.cloudCanvas.addEventListener("pointermove",e=>{if(!this.drag||e.pointerId!==this.drag.pointerId)return;const s=e.clientX-this.drag.x,a=e.clientY-this.drag.y;this.drag.x=e.clientX,this.drag.y=e.clientY,this.viewYaw+=s*.009,this.viewPitch=ct(this.viewPitch+a*.009,-1.25,1.25),this.drawCloud()});const t=e=>{var s,a;!this.drag||e.pointerId!==this.drag.pointerId||((s=this.cloudCanvas)==null||s.releasePointerCapture(e.pointerId),(a=this.cloudCanvas)==null||a.classList.remove("is-rotating"),this.drag=void 0)};this.cloudCanvas.addEventListener("pointerup",t),this.cloudCanvas.addEventListener("pointercancel",t)}loadPreset(t){var a,i,n;this.points=O[t].make(),this.standardized=!1,this.centeredView=!0,this.azimuth=O[t].start.azimuth,this.elevation=O[t].start.elevation;const e=(a=this.root)==null?void 0:a.querySelector("[data-standardize]"),s=(i=this.root)==null?void 0:i.querySelector("[data-centered-view]");e&&(e.checked=!1),s&&(s.checked=!0),(n=this.root)==null||n.querySelectorAll("[data-pca-preset]").forEach(o=>{const r=o.dataset.pcaPreset===t;o.classList.toggle("is-active",r),o.setAttribute("aria-pressed",String(r))}),this.update()}usePcaDirection(){const t=vs(this.model.components[0]);this.azimuth=t.azimuth,this.elevation=t.elevation,this.update()}resetView(){this.viewYaw=-.62,this.viewPitch=.42,this.drawCloud()}currentDirection(t){return gs(this.azimuth,this.elevation,t.dimensions)}update(){var p,h,u;if(!this.root)return;const t=this.model,e=this.currentDirection(t),s=ee(this.points,t,e),a=t.explainedVarianceRatios[0]??0,i=t.eigenvalues[0]>0?s.variance/t.eigenvalues[0]:0,n=(t.explainedVarianceRatios[0]??0)+(t.explainedVarianceRatios[1]??0),o=(g,v)=>{var k;const b=(k=this.root)==null?void 0:k.querySelector(g);b&&(b.textContent=v)};o("[data-azimuth-output]",`${Y(this.azimuth,Math.abs(this.azimuth%1)>.01?1:0)}°`),o("[data-elevation-output]",`${Y(this.elevation,Math.abs(this.elevation%1)>.01?1:0)}°`),o("[data-project-variance]",Y(s.variance,3)),o("[data-explained-ratio]",it(s.explainedVarianceRatio)),o("[data-pca-maximum]",it(a)),o("[data-two-components]",t.dimensions>1?it(n):"—"),o("[data-projection-width]",`σ = ${Y(Math.sqrt(s.variance),2)}`),o("[data-dimension-badge]",`${t.dimensions}D adat`),o("[data-direction-vector]",`u = (${e.map(g=>Y(g,2)).join("; ")})`),o("[data-summary]",`${this.points.length} szintetikus pont · ${this.standardized?"központosítva és standardizálva":"központosítva"} · az aktuális irány a PCA-maximum ${it(i)}-át éri el.`);const r=this.root.querySelector("[data-observation]");if(r){const g=i>=.9995?{title:"Ez az első főkomponens iránya.",body:"A vetületi variancia eléri a kovarianciamátrix legnagyobb sajátértékét."}:i>=.92?{title:"Közel jársz a maximumhoz.",body:"Finomítsd a szögeket, vagy ellenőrizd az eredményt a PCA iránya gombbal."}:{title:"Van szélesebb vetület.",body:"Fordítsd a tengelyt a felhő nagyobb kiterjedésének irányába."};r.innerHTML=`<p class="control-label">AKTUÁLIS EREDMÉNY</p><strong>${g.title}</strong><p>${g.body}</p>`}const l=this.root.querySelector("#pca-azimuth"),c=this.root.querySelector("#pca-elevation");l&&(l.value=String(this.azimuth)),c&&(c.value=String(this.elevation)),(p=this.root.querySelector(".pca-elevation-control"))==null||p.toggleAttribute("hidden",t.dimensions===2),(h=this.cloudCanvas)==null||h.setAttribute("aria-label",`${t.dimensions} dimenziós, ${this.points.length} pontos felhő. A választott vetület az összvariancia ${it(s.explainedVarianceRatio)}-át őrzi meg.`),(u=this.projectionCanvas)==null||u.setAttribute("aria-label",`${this.points.length} pont egydimenziós vetülete. Variancia: ${Y(s.variance,3)}.`),this.draw(t,s.values,e)}draw(t=this.model,e,s){const a=s??this.currentDirection(t),i=e??ee(this.points,t,a).values;this.drawCloud(t,a),this.drawProjection(i)}displayPoints(t){return this.centeredView?t.transformed:this.points.map(e=>e.map((s,a)=>s/t.scales[a]))}cameraProject(t,e,s,a){const i=(t[0]??0)/a,n=(t[1]??0)/a,o=(t[2]??0)/a,r=Math.cos(this.viewYaw),l=Math.sin(this.viewYaw),c=r*i+l*o,p=-l*i+r*o,h=Math.cos(this.viewPitch),u=Math.sin(this.viewPitch),g=h*n-u*p,v=u*n+h*p,b=3.2,k=b/(b+v),y=Math.min(e,s)*.36;return{x:e/2+c*y*k,y:s/2-g*y*k,depth:v,scale:k}}drawCloud(t=this.model,e=this.currentDirection(t)){if(!this.cloudCanvas)return;const s=this.cloudCanvas.getContext("2d");if(!s)return;const{width:a,height:i}=P(this.cloudCanvas);s.clearRect(0,0,a,i),s.fillStyle="#f4f1e8",s.fillRect(0,0,a,i),B(s,a,i,24);const n=this.displayPoints(t).map(b=>t.dimensions===2?[b[0],b[1],0]:b),o=this.centeredView?[0,0,0]:[...t.mean.map((b,k)=>b/t.scales[k]),0,0].slice(0,3),r=Math.max(.5,...n.flatMap(b=>b.map(Math.abs)),...o.map(Math.abs)),l=this.cameraProject([0,0,0],a,i,r),c=[{vector:[r*.92,0,0],label:"x₁"},{vector:[0,r*.92,0],label:"x₂"},...t.dimensions===3?[{vector:[0,0,r*.92],label:"x₃"}]:[]];s.save(),s.strokeStyle="rgba(18, 32, 63, .34)",s.fillStyle="rgba(18, 32, 63, .7)",s.lineWidth=1,s.font="11px IBM Plex Mono, monospace",c.forEach(b=>{const k=this.cameraProject(b.vector,a,i,r);s.beginPath(),s.moveTo(l.x,l.y),s.lineTo(k.x,k.y),s.stroke(),s.fillText(b.label,k.x+4,k.y-4)}),s.restore();const p=t.dimensions===2?[e[0],e[1],0]:e,h=this.cameraProject(p.map((b,k)=>(o[k]??0)-b*r),a,i,r),u=this.cameraProject(p.map((b,k)=>(o[k]??0)+b*r),a,i,r);s.save(),s.strokeStyle="#d84429",s.lineWidth=2.6,s.beginPath(),s.moveTo(h.x,h.y),s.lineTo(u.x,u.y),s.stroke();const g=Math.atan2(u.y-h.y,u.x-h.x);s.fillStyle="#d84429",s.beginPath(),s.moveTo(u.x,u.y),s.lineTo(u.x-11*Math.cos(g-.42),u.y-11*Math.sin(g-.42)),s.lineTo(u.x-11*Math.cos(g+.42),u.y-11*Math.sin(g+.42)),s.closePath(),s.fill(),s.restore(),n.map((b,k)=>({...this.cameraProject(b,a,i,r),index:k})).sort((b,k)=>k.depth-b.depth).forEach(b=>{const k=ct(3.6*b.scale,2.6,5.6);s.beginPath(),s.arc(b.x,b.y,k,0,Math.PI*2),s.fillStyle=b.index%4===0?"rgba(216, 68, 41, .82)":"rgba(30, 103, 184, .78)",s.fill(),s.strokeStyle="rgba(244, 241, 232, .92)",s.lineWidth=1,s.stroke()});const v=this.cameraProject(o,a,i,r);s.save(),s.strokeStyle="#12203f",s.lineWidth=1.5,s.beginPath(),s.moveTo(v.x-7,v.y),s.lineTo(v.x+7,v.y),s.moveTo(v.x,v.y-7),s.lineTo(v.x,v.y+7),s.stroke(),s.restore()}drawProjection(t){if(!this.projectionCanvas)return;const e=this.projectionCanvas.getContext("2d");if(!e)return;const{width:s,height:a}=P(this.projectionCanvas);e.clearRect(0,0,s,a),e.fillStyle="#f4f1e8",e.fillRect(0,0,s,a);const i=30,n=a/2,o=Math.max(.2,...t.map(Math.abs)),r=u=>i+(u/o+1)/2*(s-i*2);e.save(),e.strokeStyle="rgba(18, 32, 63, .36)",e.lineWidth=1,e.beginPath(),e.moveTo(i,n),e.lineTo(s-i,n),e.stroke();const l=r(0);e.strokeStyle="rgba(18, 32, 63, .2)",e.setLineDash([3,4]),e.beginPath(),e.moveTo(l,18),e.lineTo(l,a-18),e.stroke(),e.restore();const c=Math.sqrt(t.length>1?t.reduce((u,g)=>u+g**2,0)/(t.length-1):0);e.save(),e.strokeStyle="#d84429",e.fillStyle="rgba(216, 68, 41, .1)";const p=r(-c),h=r(c);e.fillRect(p,n-22,h-p,44),e.beginPath(),e.moveTo(p,n-27),e.lineTo(p,n+27),e.moveTo(h,n-27),e.lineTo(h,n+27),e.stroke(),e.restore(),t.forEach((u,g)=>{const v=(g*17%9-4)*4.4;e.beginPath(),e.arc(r(u),n+v,3.7,0,Math.PI*2),e.fillStyle=g%4===0?"rgba(216, 68, 41, .8)":"rgba(30, 103, 184, .72)",e.fill(),e.strokeStyle="rgba(244, 241, 232, .9)",e.lineWidth=.9,e.stroke()})}}function Dt(d){return Math.max(0,Math.min(1,d))}function ht(d,t){return t===0?null:d/t}function zs(d,t,e,s){return t<=1?.5:(d*e+s)%t/(t-1)}function Z(d,t,e,s,a,i,n){return Array.from({length:e},(o,r)=>({id:`${d}-${String(r+1).padStart(4,"0")}`,truth:t,score:s+(a-s)*zs(r,e,i,n)}))}function ws(){return[...Z("rare-positive",1,10,.42,.74,7,3),...Z("rare-negative",0,990,.02,.62,487,113)]}function xs(){return[...Z("overlap-positive",1,72,.3,.88,37,9),...Z("overlap-negative",0,168,.08,.72,101,21)]}function As(){return[...Z("separated-positive",1,80,.66,.96,43,7),...Z("separated-negative",0,120,.04,.42,73,19)]}const pt=[{id:"rare",title:"Ritka pozitív · 1%",summary:"1000 esetből 10 pozitív. A magas küszöb mindet negatívnak jelöli.",question:"Mit ér a 99%-os pontosság, ha egyetlen pozitív esetet sem talál meg?",defaultThreshold:.8,observations:ws()},{id:"overlap",title:"Átfedő csoportok · 30%",summary:"240 eset, egymásba érő pontszámokkal.",question:"Hol cserélődik fel a precision és a recall előnye?",defaultThreshold:.55,observations:xs()},{id:"separated",title:"Jól elkülönülő · 40%",summary:"200 eset, a két osztály között tiszta réssel.",question:"Miért marad több küszöbnél is hibátlan a tévesztési mátrix?",defaultThreshold:.5,observations:As()}];function Ss(d,t){const e=Number.isFinite(t)?Dt(t):.5;return Dt(d.score)>=e}function Ae(d,t){const e=Ss(d,t);return d.truth===1?e?"tp":"fn":e?"fp":"tn"}function Ms(d,t){return d.reduce((e,s)=>(e[Ae(s,t)]+=1,e),{tp:0,tn:0,fp:0,fn:0})}function js(d){const t=d.tp+d.tn+d.fp+d.fn;return{accuracy:ht(d.tp+d.tn,t),precision:ht(d.tp,d.tp+d.fp),recall:ht(d.tp,d.tp+d.fn),f1:ht(2*d.tp,2*d.tp+d.fp+d.fn)}}function $s(d){const t=d.filter(r=>r.truth===1).length,e=d.length-t;if(t===0||e===0)return{points:[{threshold:Number.POSITIVE_INFINITY,falsePositiveRate:0,truePositiveRate:0},{threshold:Number.NEGATIVE_INFINITY,falsePositiveRate:1,truePositiveRate:1}],auc:null};const s=d.map(r=>({truth:r.truth,score:Dt(r.score)})).sort((r,l)=>l.score-r.score),a=[{threshold:Number.POSITIVE_INFINITY,falsePositiveRate:0,truePositiveRate:0}];let i=0,n=0;for(let r=0;r<s.length;){const l=s[r].score;let c=r;for(;c<s.length&&s[c].score===l;)s[c].truth===1?i+=1:n+=1,c+=1;a.push({threshold:l,falsePositiveRate:n/e,truePositiveRate:i/t}),r=c}let o=0;for(let r=1;r<a.length;r+=1){const l=a[r-1],c=a[r];o+=(c.falsePositiveRate-l.falsePositiveRate)*(l.truePositiveRate+c.truePositiveRate)/2}return{points:a,auc:o}}function G(d){return d===null?"—":`${(d*100).toFixed(1).replace(".0","")}%`}function Ps(d){return d.id==="rare"?"1%":d.id==="overlap"?"↔":"✓"}function Ts(d,t){let e=Math.imul(d+1+t,73244475);return e=Math.imul(e^e>>>16,73244475),e^=e>>>16,(e>>>0)/4294967295}class Es{constructor(t){m(this,"context");m(this,"root");m(this,"canvas");m(this,"preset",pt[0]);m(this,"threshold",pt[0].defaultThreshold);m(this,"resizeObserver");this.context=t}mount(t){this.root=t,t.innerHTML=`
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
                <span class="preset-mark preset-custom evaluation-preset-mark" aria-hidden="true">${Ps(e)}</span>
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
      </article>`,this.canvas=t.querySelector("[data-outcome-canvas]")??void 0,this.bindControls(),this.canvas&&(this.resizeObserver=new ResizeObserver(()=>this.draw()),this.resizeObserver.observe(this.canvas)),this.update()}destroy(){var t;(t=this.resizeObserver)==null||t.disconnect(),this.root=void 0,this.canvas=void 0}bindControls(){var t,e,s;this.root&&((t=this.root.querySelector("#evaluation-threshold"))==null||t.addEventListener("input",a=>{this.threshold=Number(a.target.value)/100,this.update()}),this.root.querySelectorAll("[data-evaluation-preset]").forEach(a=>{a.addEventListener("click",()=>{var o,r;const i=pt.find(l=>l.id===a.dataset.evaluationPreset);if(!i)return;this.preset=i,this.threshold=i.defaultThreshold;const n=(o=this.root)==null?void 0:o.querySelector("#evaluation-threshold");n&&(n.value=String(Math.round(this.threshold*100))),(r=this.root)==null||r.querySelectorAll("[data-evaluation-preset]").forEach(l=>{const c=l===a;l.classList.toggle("is-active",c),l.setAttribute("aria-pressed",String(c))}),this.update()})}),(e=this.root.querySelector("[data-action='all-negative']"))==null||e.addEventListener("click",()=>{var i;this.threshold=1;const a=(i=this.root)==null?void 0:i.querySelector("#evaluation-threshold");a&&(a.value="100"),this.update()}),(s=this.root.querySelector("[data-action='reset-threshold']"))==null||s.addEventListener("click",()=>{var i;this.threshold=this.preset.defaultThreshold;const a=(i=this.root)==null?void 0:i.querySelector("#evaluation-threshold");a&&(a.value=String(Math.round(this.threshold*100))),this.update()}),this.root.querySelectorAll("[data-answer]").forEach(a=>{a.addEventListener("click",()=>{var o,r;const i=a.dataset.answer==="right";(o=this.root)==null||o.querySelectorAll("[data-answer]").forEach(l=>l.classList.remove("is-correct","is-wrong")),a.classList.add(i?"is-correct":"is-wrong");const n=(r=this.root)==null?void 0:r.querySelector("[data-quiz-feedback]");n&&(n.textContent=i?"Helyes. A sok valódi negatív elfedi, hogy a modell mind a 10 pozitív esetet kihagyta. A modult teljesítetted.":"Nézd meg külön az FN mezőt és a recall nevezőjét."),i&&this.context.onComplete()})}))}update(){var o;const t=Ms(this.preset.observations,this.threshold),e=js(t),s=t.tp+t.fp,a=t.tp+t.fn,i=(r,l)=>{var p;const c=(p=this.root)==null?void 0:p.querySelector(r);c&&(c.textContent=String(l))};i("[data-threshold-output]",`${Math.round(this.threshold*100)}%`),i("[data-tp]",t.tp),i("[data-tn]",t.tn),i("[data-fp]",t.fp),i("[data-fn]",t.fn),i("[data-accuracy]",G(e.accuracy)),i("[data-precision]",G(e.precision)),i("[data-recall]",G(e.recall)),i("[data-f1]",G(e.f1)),i("[data-summary]",`${this.preset.observations.length} szintetikus eset · ${a} valós pozitív · ${s} pozitív jelzés a mostani küszöbnél.`);const n=(o=this.root)==null?void 0:o.querySelector("[data-observation]");n&&(s===0&&this.preset.id==="rare"?n.innerHTML='<p class="control-label">A pontosság csapdája</p><strong>99% accuracy, 0% recall.</strong><p>A modell a 990 negatív esetet eltalálja, de mind a 10 pozitív esetet kihagyja. Precision nincs, mert nem adott pozitív jelzést.</p>':s===0?n.innerHTML='<p class="control-label">Aktuális eredmény</p><strong>Nincs pozitív jelzés.</strong><p>A precision nem értelmezhető, mert a modell egy esetet sem jelölt pozitívnak.</p>':(e.recall??0)<.5?n.innerHTML='<p class="control-label">Aktuális eredmény</p><strong>A pozitív esetek többsége kimarad.</strong><p>A küszöb lejjebb húzása növelheti a recallt, de az FP-k száma is változhat.</p>':(e.precision??0)<.5?n.innerHTML='<p class="control-label">Aktuális eredmény</p><strong>A pozitív jelzések többsége téves.</strong><p>A küszöb feljebb húzása csökkentheti az FP-k számát, de pozitív esetek maradhatnak ki.</p>':n.innerHTML=`<p class="control-label">Aktuális eredmény</p><strong>${t.tp} megtalált, ${t.fn} kihagyott pozitív.</strong><p>A küszöb megítéléséhez az FP és FN hibák következményét is ismerni kell.</p>`),this.updateRoc(t),this.draw()}updateRoc(t){var h,u,g,v,b;const e=$s(this.preset.observations),s=k=>44+k*312,a=k=>226-k*208,i=e.points.map((k,y)=>`${y===0?"M":"L"}${s(k.falsePositiveRate).toFixed(2)} ${a(k.truePositiveRate).toFixed(2)}`).join(" ");(u=(h=this.root)==null?void 0:h.querySelector("[data-roc-path]"))==null||u.setAttribute("d",i);const n=t.fp+t.tn===0?0:t.fp/(t.fp+t.tn),o=t.tp+t.fn===0?0:t.tp/(t.tp+t.fn),r=(g=this.root)==null?void 0:g.querySelector("[data-roc-marker]");r==null||r.setAttribute("cx",String(s(n))),r==null||r.setAttribute("cy",String(a(o)));const l=e.auc===null?"—":e.auc.toFixed(3),c=(v=this.root)==null?void 0:v.querySelector("[data-auc]");c&&(c.textContent=l);const p=(b=this.root)==null?void 0:b.querySelector("[data-roc-description]");p&&(p.textContent=`AUC: ${l}. Az aktuális küszöbnél a téves pozitív arány ${G(n)}, a valódi pozitív arány ${G(o)}.`)}draw(){if(!this.canvas)return;const t=this.canvas.getContext("2d");if(!t)return;const{width:e,height:s}=P(this.canvas),a=44,i=e-18,n=26,o=s-40,r=n+(o-n)*.34,l=a+this.threshold*(i-a);t.clearRect(0,0,e,s),t.fillStyle="#f4f1e8",t.fillRect(0,0,e,s),B(t,e,s,20),t.save(),t.fillStyle="rgba(224, 69, 42, 0.055)",t.fillRect(a,n,Math.max(0,l-a),r-n),t.fillStyle="rgba(42, 157, 143, 0.075)",t.fillRect(l,n,Math.max(0,i-l),r-n),t.fillStyle="rgba(30, 79, 181, 0.045)",t.fillRect(a,r,Math.max(0,l-a),o-r),t.fillStyle="rgba(242, 193, 78, 0.11)",t.fillRect(l,r,Math.max(0,i-l),o-r),t.strokeStyle="rgba(18, 32, 63, 0.24)",t.lineWidth=1,t.beginPath(),t.moveTo(a,r),t.lineTo(i,r),t.stroke(),t.fillStyle="rgba(18, 32, 63, 0.62)",t.font='600 10px "IBM Plex Mono", monospace',t.fillText("VALÓS +",a+7,n+14),t.fillText("VALÓS −",a+7,r+16),l-a>72&&(t.fillText("FN",l-24,n+14),t.fillText("TN",l-24,r+16)),i-l>72&&(t.fillText("TP",l+8,n+14),t.fillText("FP",l+8,r+16)),t.restore();let c=0,p=0;const h=this.preset.observations.filter(b=>b.truth===1).length,u=this.preset.observations.length-h,g=this.preset.observations.length>500?2.1:3.2;this.preset.observations.forEach(b=>{const k=b.truth===1,y=k?c++:p++,j=k?h:u,f=k?n+22:r+22,z=k?r-8:o-8,S=j<=1?.5:Ts(y,k?17:193),w=a+b.score*(i-a),$=f+S*Math.max(1,z-f);this.drawOutcomePoint(t,w,$,Ae(b,this.threshold),g)}),t.save(),t.strokeStyle="#d84429",t.lineWidth=2,t.beginPath(),t.moveTo(l,n-2),t.lineTo(l,o+5),t.stroke();const v=Math.max(a+3,Math.min(i-64,l-30));t.fillStyle="#d84429",t.font='650 10px "IBM Plex Mono", monospace',t.fillText(`KÜSZÖB ${Math.round(this.threshold*100)}%`,v,o+20),t.fillStyle="rgba(18, 32, 63, 0.56)",t.font='500 9px "IBM Plex Mono", monospace',[0,.25,.5,.75,1].forEach(b=>{const k=a+b*(i-a);t.fillText(String(b),k-(b===1?5:7),s-8)}),t.restore()}drawOutcomePoint(t,e,s,a,i){t.save(),t.lineWidth=Math.max(1.2,i*.52),a==="tp"?(t.beginPath(),t.arc(e,s,i,0,Math.PI*2),t.fillStyle="rgba(23, 119, 108, 0.82)",t.fill()):a==="tn"?(t.fillStyle="rgba(30, 79, 181, 0.52)",t.fillRect(e-i,s-i,i*2,i*2)):a==="fp"?(t.beginPath(),t.moveTo(e,s-i*1.25),t.lineTo(e+i*1.15,s+i),t.lineTo(e-i*1.15,s+i),t.closePath(),t.strokeStyle="rgba(144, 112, 21, 0.88)",t.stroke()):(t.strokeStyle="rgba(216, 68, 41, 0.9)",t.beginPath(),t.moveTo(e-i,s-i),t.lineTo(e+i,s+i),t.moveTo(e+i,s-i),t.lineTo(e-i,s+i),t.stroke()),t.restore()}}const se={moons:{title:"Két hold",question:"Mekkora k mellett marad meg a keskeny rés?",make:()=>Yt()},xor:{title:"Kockás",question:"Miért nem lenne elég egyetlen egyenes?",make:()=>ve()},overlap:{title:"Átfedő",question:"Hol válik bizonytalanná a szavazás?",make:()=>be()}};class Cs{constructor(t){m(this,"context");m(this,"root");m(this,"canvas");m(this,"points",Yt());m(this,"history",[]);m(this,"currentLabel",0);m(this,"k",5);m(this,"pointer");m(this,"drawing",!1);m(this,"lastDrawn");m(this,"touchDrawingEnabled",!1);m(this,"tapCandidate");m(this,"resizeObserver");m(this,"onKeyDown",t=>{var e;!((e=this.root)!=null&&e.isConnected)||t.target.closest("button, a, input, select, textarea, summary, [contenteditable='true']")||((t.key==="1"||t.key==="2")&&(this.currentLabel=Number(t.key)-1,this.syncClassControls()),(t.ctrlKey||t.metaKey)&&t.key.toLowerCase()==="z"&&(t.preventDefault(),this.undo()))});this.context=t}mount(t){this.root=t,t.innerHTML=`
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
      </article>`,this.canvas=t.querySelector("canvas.data-canvas")??void 0,this.bindControls(),this.canvas&&(this.resizeObserver=new ResizeObserver(()=>this.draw()),this.resizeObserver.observe(this.canvas)),this.update()}destroy(){var t;(t=this.resizeObserver)==null||t.disconnect(),window.removeEventListener("keydown",this.onKeyDown),this.root=void 0,this.canvas=void 0}bindControls(){var s,a,i,n;if(!this.root||!this.canvas)return;this.root.querySelectorAll("[data-preset]").forEach(o=>{o.addEventListener("click",()=>{var l;const r=o.dataset.preset??"moons";this.points=r==="custom"?[]:se[r].make(),this.history=[],(l=this.root)==null||l.querySelectorAll("[data-preset]").forEach(c=>{const p=c===o;c.classList.toggle("is-active",p),c.setAttribute("aria-pressed",String(p))}),this.update()})}),this.root.querySelectorAll("[data-class]").forEach(o=>{o.addEventListener("click",()=>{this.currentLabel=Number(o.dataset.class??0),this.syncClassControls()})});const t=this.root.querySelector("#knn-k");t==null||t.addEventListener("input",()=>{this.k=Number(t.value),this.update()}),(s=this.root.querySelector("[data-action='undo']"))==null||s.addEventListener("click",()=>this.undo()),(a=this.root.querySelector("[data-action='clear']"))==null||a.addEventListener("click",()=>{this.pushHistory(),this.points=[],this.update()}),(i=this.root.querySelector("[data-action='toggle-draw']"))==null||i.addEventListener("click",o=>{var c;this.touchDrawingEnabled=!this.touchDrawingEnabled;const r=o.currentTarget;r.setAttribute("aria-pressed",String(this.touchDrawingEnabled)),r.classList.toggle("is-active",this.touchDrawingEnabled);const l=r.querySelector("[data-draw-state]");l&&(l.textContent=this.touchDrawingEnabled?"be":"ki"),(c=this.canvas)==null||c.classList.toggle("is-touch-drawing",this.touchDrawingEnabled)}),(n=this.root.querySelector("[data-action='add-keyboard']"))==null||n.addEventListener("click",()=>{var c,p,h,u,g,v;const o=Number(((p=(c=this.root)==null?void 0:c.querySelector("[data-entry-x]"))==null?void 0:p.value)??.5),r=Number(((u=(h=this.root)==null?void 0:h.querySelector("[data-entry-y]"))==null?void 0:u.value)??.5),l=Number(((v=(g=this.root)==null?void 0:g.querySelector("[data-entry-label]"))==null?void 0:v.value)??0);this.pushHistory(),this.points.push({x:Math.max(0,Math.min(1,o)),y:Math.max(0,Math.min(1,r)),label:l}),this.update()}),this.canvas.addEventListener("pointerdown",o=>{var l;const r=I(this.canvas,o);if(o.pointerType!=="mouse"&&!this.touchDrawingEnabled){this.tapCandidate={point:r,clientX:o.clientX,clientY:o.clientY,moved:!1};return}this.drawing=!0,(l=this.canvas)==null||l.setPointerCapture(o.pointerId),this.pushHistory(),this.addPoint(r)}),this.canvas.addEventListener("pointermove",o=>{if(this.tapCandidate){Math.hypot(o.clientX-this.tapCandidate.clientX,o.clientY-this.tapCandidate.clientY)>9&&(this.tapCandidate.moved=!0);return}this.pointer=I(this.canvas,o),this.drawing?this.addPoint(this.pointer):this.draw()});const e=()=>{this.drawing=!1,this.lastDrawn=void 0};this.canvas.addEventListener("pointerup",()=>{this.tapCandidate&&(this.tapCandidate.moved||(this.pushHistory(),this.addPoint(this.tapCandidate.point)),this.tapCandidate=void 0),e()}),this.canvas.addEventListener("pointercancel",()=>{this.tapCandidate=void 0,e()}),this.canvas.addEventListener("pointerleave",()=>{this.pointer=void 0,this.tapCandidate=void 0,e(),this.draw()}),window.addEventListener("keydown",this.onKeyDown),this.root.querySelectorAll("[data-answer]").forEach(o=>{o.addEventListener("click",()=>{var c,p;const r=o.dataset.answer==="right";(c=this.root)==null||c.querySelectorAll("[data-answer]").forEach(h=>h.classList.remove("is-correct","is-wrong")),o.classList.add(r?"is-correct":"is-wrong");const l=(p=this.root)==null?void 0:p.querySelector("[data-quiz-feedback]");l&&(l.textContent=r?"Helyes. A nagyobb k több szomszéd címkéjét veszi figyelembe, ezért kisebb az egyetlen hibás címke hatása. A modult teljesítetted.":"A k értéke határozza meg, hány tanítópont vesz részt a besorolásban."),r&&this.context.onComplete()})})}syncClassControls(){var t;(t=this.root)==null||t.querySelectorAll("[data-class]").forEach(e=>{const s=Number(e.dataset.class)===this.currentLabel;e.classList.toggle("is-active",s),e.setAttribute("aria-pressed",String(s))})}pushHistory(){this.history.push(this.points.map(t=>({...t}))),this.history.length>30&&this.history.shift()}undo(){const t=this.history.pop();t&&(this.points=t,this.update())}addPoint(t){this.lastDrawn&&(this.lastDrawn.x-t.x)**2+(this.lastDrawn.y-t.y)**2<.0012||this.points.length>=320||(this.points.push({...t,label:this.currentLabel}),this.lastDrawn=t,this.update())}update(){const t=this.points.filter(i=>i.label===0).length,e=this.points.filter(i=>i.label===1).length,s=(i,n)=>{var r;const o=(r=this.root)==null?void 0:r.querySelector(i);o&&(o.textContent=n)};s("[data-count-a]",String(t)),s("[data-count-b]",String(e)),s("[data-k-output]",String(this.k)),s("[data-k-metric]",this.points.length<this.k?`${this.k} (${this.points.length} elérhető)`:String(this.k));const a=t>0&&e>0?"A háttér minden helyen a helyi többség döntését mutatja.":"A döntési háttér két osztály pontjai után jelenik meg.";s("[data-summary]",`${this.points.length} tanítópont · ${t} kör · ${e} négyzet. ${a}`),this.draw()}draw(){var n;if(!this.canvas)return;const t=this.canvas.getContext("2d");if(!t)return;const{width:e,height:s}=P(this.canvas);if(t.clearRect(0,0,e,s),t.fillStyle="#f4f1e8",t.fillRect(0,0,e,s),this.points.some(o=>o.label===0)&&this.points.some(o=>o.label===1)){const r=Math.max(1,e-40),l=Math.max(1,s-40),c=Math.max(20,Math.min(42,Math.round(r/16))),p=Math.max(20,Math.round(c*l/r)),h=r/c,u=l/p;for(let g=0;g<p;g+=1)for(let v=0;v<c;v+=1){const b={x:(v+.5)/c,y:(g+.5)/p},k=Xt(this.points,b,this.k);t.fillStyle=k.label===0?"rgba(224, 69, 42, 0.095)":"rgba(30, 79, 181, 0.1)",t.fillRect(20+v*h,20+g*u,h+.6,u+.6)}}B(t,e,s);let a;if(this.pointer&&this.points.length>0){a=Xt(this.points,this.pointer,this.k);const[o,r]=M(this.pointer,e,s);t.save(),t.strokeStyle="rgba(18, 32, 63, 0.22)",t.setLineDash([3,4]),a.neighbors.forEach(c=>{const[p,h]=M(c,e,s);t.beginPath(),t.moveTo(o,r),t.lineTo(p,h),t.stroke()});const l=a.neighbors.reduce((c,p)=>Math.max(c,Math.sqrt((p.x-this.pointer.x)**2+(p.y-this.pointer.y)**2)),0);t.beginPath(),t.strokeStyle=a.label===0?"rgba(184, 50, 30, .68)":"rgba(30, 79, 181, .68)",t.setLineDash([]),t.ellipse(o,r,l*(e-40),l*(s-40),0,0,Math.PI*2),t.stroke(),t.restore()}if(this.points.forEach(o=>{const[r,l]=M(o,e,s);wt(t,r,l,o.label??0,4.7)}),this.pointer){const[o,r]=M(this.pointer,e,s);t.save(),t.beginPath(),t.arc(o,r,7,0,Math.PI*2),t.strokeStyle="#12203f",t.lineWidth=1.5,t.stroke(),t.restore()}const i=(n=this.root)==null?void 0:n.querySelector("[data-observation]");if(i)if(!a)i.innerHTML='<p class="control-label">Aktuális pont</p><strong>Vidd a mutatót az ábrára.</strong><p>A modul megjelöli a k legközelebbi tanítópontot.</p>';else{const o=a.neighbors.filter(l=>l.label===0).length,r=a.neighbors.length-o;i.innerHTML=`<p class="control-label">Aktuális pont</p><strong>Becsült osztály: ${a.label===0?"A":"B"}.</strong><p>A legközelebbi szomszédok között ${o} A és ${r} B címke van. A ${Math.round(a.confidence*100)}% többségi arány, nem kalibrált valószínűség.</p>`}}}const _=1e-12;function ae(d){return Math.max(.025,Math.min(.975,d))}function At(d){const t=d.x*2-1,e=d.y*2-1;return{x1:t,x2:e,z:t*t+e*e}}function Se(d,t,e){return At(d).z<=t?e:e===0?1:0}function Kt(d,t,e){const s=d.map(c=>At(c).z),a=s.filter(c=>c<=t),i=s.filter(c=>c>t),n=a.length>0&&i.length>0,o=n?Math.min(...s.map(c=>Math.abs(c-t))):0,r=o<=_||!n?[]:s.flatMap((c,p)=>Math.abs(Math.abs(c-t)-o)<=1e-9?[p]:[]),l=d.reduce((c,p)=>c+(Se(p,t,e)===p.label?0:1),0);return{threshold:t,innerLabel:e,outerLabel:e===0?1:0,errorCount:l,accuracy:d.length===0?0:1-l/d.length,hasBothSides:n,margin:o,lowerMargin:Math.max(0,t-o),upperMargin:Math.min(2,t+o),supportIndices:r}}function ie(d){if(d.length<2||!d.some(s=>s.label===0)||!d.some(s=>s.label===1))return;const t=[...new Set(d.map(s=>At(s).z))].sort((s,a)=>s-a);if(t.length<2)return;let e;for(let s=0;s<t.length-1;s+=1){const a=t[s]+(t[s+1]-t[s])/2;[0,1].forEach(i=>{const n=Kt(d,a,i);if(!n.hasBothSides)return;(!e||n.errorCount<e.errorCount||n.errorCount===e.errorCount&&n.margin>e.margin+_||n.errorCount===e.errorCount&&Math.abs(n.margin-e.margin)<=_&&n.threshold<e.threshold-_||n.errorCount===e.errorCount&&Math.abs(n.margin-e.margin)<=_&&Math.abs(n.threshold-e.threshold)<=_&&n.innerLabel<e.innerLabel)&&(e=n)})}return e?{...e,separable:e.errorCount===0}:void 0}function yt(d,t,e,s,a){return Array.from({length:e},()=>{const i=d()*Math.PI*2,n=s*s+d()*(a*a-s*s),o=Math.sqrt(n);return{x:ae(.5+Math.cos(i)*o/2),y:ae(.5+Math.sin(i)*o/2),label:t}})}function Me(d=404,t=96){const e=A(d),s=Math.max(0,Math.floor(t)),a=Math.floor(s/2);return[...yt(e,0,a,.08,.43),...yt(e,1,s-a,.67,.96)]}function Ls(d=405,t=96){const e=A(d),s=Math.max(0,Math.floor(t)),a=Math.floor(s/2),i=[...yt(e,0,a,.08,.66),...yt(e,1,s-a,.5,.98)],n=Math.min(7,a-1),o=s-a,r=a+Math.min(9,o-1);return n>=0&&(i[n]={...i[n],label:1}),o>0&&(i[r]={...i[r],label:0}),i}function qs(d=406,t=96){const e=A(d);return Array.from({length:Math.max(0,Math.floor(t))},()=>{const s=.07+e()*.86,a=.07+e()*.86,i=s<=.5&&a<=.5||s>.5&&a>.5;return{x:s,y:a,label:i?0:1}})}function ne(d,t){return d==="rings"?Me(t):d==="noisy-rings"?Ls(t):qs(t)}const Is=[{key:"rings",title:"Kör a körben",question:"Lesz-e hibátlan sík?",icon:'<svg viewBox="0 0 54 42" width="54" height="42" aria-hidden="true"><circle cx="27" cy="21" r="15" fill="none" stroke="#1e67b8" stroke-width="2"/><circle cx="27" cy="21" r="5" fill="#d84429"/><circle cx="13" cy="21" r="2" fill="#1e67b8"/><circle cx="39" cy="14" r="2" fill="#1e67b8"/></svg>'},{key:"noisy-rings",title:"Zajos gyűrű",question:"Mit tart a margó?",icon:'<svg viewBox="0 0 54 42" width="54" height="42" aria-hidden="true"><circle cx="27" cy="21" r="14" fill="none" stroke="#1e67b8" stroke-width="2" stroke-dasharray="3 3"/><circle cx="27" cy="21" r="5" fill="#d84429"/><circle cx="19" cy="9" r="2.4" fill="#d84429"/><rect x="30" y="18" width="4.8" height="4.8" fill="#1e67b8"/></svg>'},{key:"xor",title:"Kockás (XOR)",question:"Elég a sugár?",icon:'<svg viewBox="0 0 54 42" width="54" height="42" aria-hidden="true"><circle cx="15" cy="11" r="3" fill="#d84429"/><rect x="36" y="8" width="6" height="6" fill="#1e67b8"/><rect x="12" y="28" width="6" height="6" fill="#1e67b8"/><circle cx="39" cy="31" r="3" fill="#d84429"/><path d="M27 3V39M6 21H48" stroke="#12203f" stroke-opacity=".2"/></svg>'},{key:"custom",title:"Saját rajz",question:"Építs mintát üres vásznon.",icon:'<span class="preset-mark preset-custom" aria-hidden="true">＋</span>'}];function F(d,t=2){return d.toFixed(t).replace(".",",")}function nt(d){return d===0?"A":"B"}class Rs{constructor(t){m(this,"context");m(this,"root");m(this,"canvas");m(this,"resizeObserver");m(this,"points",Me());m(this,"history",[]);m(this,"activePreset","rings");m(this,"currentLabel",0);m(this,"lift",0);m(this,"threshold",.36);m(this,"innerLabel",0);m(this,"automaticThreshold",!0);m(this,"drawing",!1);m(this,"lastDrawn");m(this,"touchDrawingEnabled",!1);m(this,"tapCandidate");m(this,"onKeyDown",t=>{if(!this.root)return;const e=t.target;e!=null&&e.matches("input, select, textarea")||((t.key==="1"||t.key==="2")&&(this.currentLabel=t.key==="1"?0:1,this.lift=0,this.syncClassControls(),this.update()),this.context.presentMode&&t.code==="Space"&&(t.preventDefault(),this.lift=this.lift<.5?1:0,this.update()),this.context.presentMode&&t.key.toLowerCase()==="r"&&(this.points=this.activePreset==="custom"?[]:ne(this.activePreset),this.history=[],this.lift=0,this.threshold=.36,this.innerLabel=0,this.automaticThreshold=!0,this.applyBestThreshold(),this.update()))});this.context=t,this.applyBestThreshold()}mount(t){this.root=t,t.innerHTML=`
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
            ${Is.map((e,s)=>`
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
      </article>`,this.canvas=t.querySelector("canvas.data-canvas")??void 0,this.bindControls(),this.canvas&&(this.resizeObserver=new ResizeObserver(()=>this.draw()),this.resizeObserver.observe(this.canvas)),this.update()}destroy(){var t;(t=this.resizeObserver)==null||t.disconnect(),window.removeEventListener("keydown",this.onKeyDown),this.root=void 0,this.canvas=void 0}bindControls(){var e,s,a,i,n,o,r,l;if(!this.root||!this.canvas)return;this.root.querySelectorAll("[data-kernel-preset]").forEach(c=>{c.addEventListener("click",()=>{const p=c.dataset.kernelPreset??"rings";this.activePreset=p,this.points=p==="custom"?[]:ne(p),this.history=[],this.lift=0,this.automaticThreshold=!0,this.threshold=.36,this.innerLabel=0,this.applyBestThreshold(),this.update()})}),this.root.querySelectorAll("[data-class]").forEach(c=>{c.addEventListener("click",()=>{this.currentLabel=Number(c.dataset.class??0)===1?1:0,this.lift=0,this.syncClassControls(),this.update()})}),(e=this.root.querySelector("[data-action='toggle-draw']"))==null||e.addEventListener("click",c=>{var u;this.touchDrawingEnabled=!this.touchDrawingEnabled;const p=c.currentTarget;p.setAttribute("aria-pressed",String(this.touchDrawingEnabled)),p.classList.toggle("is-active",this.touchDrawingEnabled);const h=p.querySelector("[data-draw-state]");h&&(h.textContent=this.touchDrawingEnabled?"be":"ki"),(u=this.canvas)==null||u.classList.toggle("is-touch-drawing",this.touchDrawingEnabled)}),(s=this.root.querySelector("#kernel-lift"))==null||s.addEventListener("input",c=>{this.lift=Number(c.target.value)/100,this.update()}),(a=this.root.querySelector("#kernel-threshold"))==null||a.addEventListener("input",c=>{this.threshold=Number(c.target.value),this.automaticThreshold=!1,this.update()}),(i=this.root.querySelector("[data-action='fit']"))==null||i.addEventListener("click",()=>{this.automaticThreshold=!0,this.applyBestThreshold(),this.update()}),(n=this.root.querySelector("[data-action='flip']"))==null||n.addEventListener("click",()=>{this.innerLabel=this.innerLabel===0?1:0,this.automaticThreshold=!1,this.update()}),(o=this.root.querySelector("[data-action='undo']"))==null||o.addEventListener("click",()=>{const c=this.history.pop();c&&(this.points=c,this.activePreset="custom",this.automaticThreshold&&this.applyBestThreshold(),this.update())}),(r=this.root.querySelector("[data-action='clear']"))==null||r.addEventListener("click",()=>{this.points.length>0&&this.pushHistory(),this.points=[],this.activePreset="custom",this.threshold=.36,this.innerLabel=0,this.automaticThreshold=!0,this.update()}),(l=this.root.querySelector("[data-action='add-keyboard']"))==null||l.addEventListener("click",()=>{var u,g,v,b,k,y;const c=Number(((g=(u=this.root)==null?void 0:u.querySelector("[data-entry-x]"))==null?void 0:g.value)??0),p=Number(((b=(v=this.root)==null?void 0:v.querySelector("[data-entry-y]"))==null?void 0:b.value)??0),h=Number(((y=(k=this.root)==null?void 0:k.querySelector("[data-entry-label]"))==null?void 0:y.value)??0)===1?1:0;this.pushHistory(),this.points.push({x:Math.max(0,Math.min(1,(c+1)/2)),y:Math.max(0,Math.min(1,(p+1)/2)),label:h}),this.activePreset="custom",this.automaticThreshold&&this.applyBestThreshold(),this.update()}),this.canvas.addEventListener("pointerdown",c=>{var h;const p=I(this.canvas,c,28);if(c.pointerType!=="mouse"&&!this.touchDrawingEnabled){this.tapCandidate={point:p,clientX:c.clientX,clientY:c.clientY,moved:!1};return}this.lift>0&&(this.lift=0,this.update()),this.drawing=!0,this.lastDrawn=void 0,(h=this.canvas)==null||h.setPointerCapture(c.pointerId),this.pushHistory(),this.addDrawnPoint(p)}),this.canvas.addEventListener("pointermove",c=>{if(this.tapCandidate){Math.hypot(c.clientX-this.tapCandidate.clientX,c.clientY-this.tapCandidate.clientY)>9&&(this.tapCandidate.moved=!0);return}this.drawing&&(c.preventDefault(),this.addDrawnPoint(I(this.canvas,c,28)))});const t=c=>{var p;c&&((p=this.canvas)!=null&&p.hasPointerCapture(c.pointerId))&&this.canvas.releasePointerCapture(c.pointerId),this.drawing=!1,this.lastDrawn=void 0};this.canvas.addEventListener("pointerup",c=>{this.tapCandidate&&(this.tapCandidate.moved||(this.lift>0&&(this.lift=0),this.pushHistory(),this.addDrawnPoint(this.tapCandidate.point)),this.tapCandidate=void 0),t(c)}),this.canvas.addEventListener("pointercancel",c=>{this.tapCandidate=void 0,t(c)}),this.canvas.addEventListener("pointerleave",()=>{this.tapCandidate=void 0,t()}),window.addEventListener("keydown",this.onKeyDown),this.root.querySelectorAll("[data-answer]").forEach(c=>{c.addEventListener("click",()=>{var u,g;const p=c.dataset.answer==="right";(u=this.root)==null||u.querySelectorAll("[data-answer]").forEach(v=>v.classList.remove("is-correct","is-wrong")),c.classList.add(p?"is-correct":"is-wrong");const h=(g=this.root)==null?void 0:g.querySelector("[data-quiz-feedback]");h&&(h.textContent=p?"Helyes. A kör egyenlete az új z koordinátában egyszerű küszöbfeltétel. A modult teljesítetted.":"A z koordináta definícióját hasonlítsd össze a kör egyenletével."),p&&this.context.onComplete()})})}pushHistory(){this.history.push(this.points.map(t=>({...t}))),this.history.length>30&&this.history.shift()}addDrawnPoint(t){if(this.points.length>=240||this.lastDrawn&&(this.lastDrawn.x-t.x)**2+(this.lastDrawn.y-t.y)**2<.0012)return;const e={...t,label:this.currentLabel};this.points.push(e),this.lastDrawn=e,this.activePreset="custom",this.automaticThreshold&&this.applyBestThreshold(),this.update()}applyBestThreshold(){const t=ie(this.points);t&&(this.threshold=t.threshold,this.innerLabel=t.innerLabel)}syncClassControls(){var t;(t=this.root)==null||t.querySelectorAll("[data-class]").forEach(e=>{const s=Number(e.dataset.class)===this.currentLabel;e.classList.toggle("is-active",s),e.setAttribute("aria-pressed",String(s))})}update(){if(!this.root)return;const t=Kt(this.points,this.threshold,this.innerLabel),e=ie(this.points),s=this.root.querySelector("#kernel-lift"),a=this.root.querySelector("#kernel-threshold");s&&(s.value=String(Math.round(this.lift*100))),a&&(a.value=String(this.threshold)),this.setText("[data-lift-output]",`${Math.round(this.lift*100)}%`),this.setText("[data-threshold-output]",F(this.threshold)),this.setText("[data-inner-label]",nt(this.innerLabel)),this.setText("[data-accuracy]",this.points.length>0?`${F(t.accuracy*100,1)}%`:"—"),this.setText("[data-error-count]",this.points.length>0?String(t.errorCount):"—"),this.setText("[data-margin]",t.hasBothSides?F(t.margin,3):"—"),this.setText("[data-threshold-mode]",this.automaticThreshold&&e?"automatikus":"kézi"),this.root.querySelectorAll("[data-kernel-preset]").forEach(n=>{const o=n.dataset.kernelPreset===this.activePreset;n.classList.toggle("is-active",o),n.setAttribute("aria-pressed",String(o))});const i=this.root.querySelector("[data-action='fit']");i&&(i.disabled=!e),this.syncClassControls(),this.updateObservation(t,e!==void 0),this.draw()}updateObservation(t,e){var n;const s=(n=this.root)==null?void 0:n.querySelector("[data-observation]");if(!s)return;const a={a:this.points.filter(o=>o.label===0).length,b:this.points.filter(o=>o.label===1).length};if(!e){s.innerHTML=`<p class="control-label">Aktuális elválasztás</p><strong>Mindkét osztályból kell pont.</strong><p>Most ${a.a} A és ${a.b} B pont van.</p>`,this.setText("[data-summary]",`${this.points.length} pont · ${a.a} A · ${a.b} B. Rajzolj mindkét osztályból.`);return}const i=t.errorCount===0?`<strong>A radiális küszöb hibátlan ezen a mintán.</strong><p>A z = ${F(this.threshold)} sík alatt ${nt(this.innerLabel)}, fölötte ${nt(t.outerLabel)} a becslés.</p>`:`<strong>${t.errorCount} pont a küszöb rossz oldalán van.</strong><p>A z = ${F(this.threshold)} sík alatt ${nt(this.innerLabel)}, fölötte ${nt(t.outerLabel)} a becslés. Ettől ez a feature map még nem lesz általános szeparátor.</p>`;s.innerHTML=`<p class="control-label">Aktuális elválasztás</p>${i}`,this.setText("[data-summary]",`${this.points.length} pont · ${a.a} A · ${a.b} B · ${F(t.accuracy*100,1)}% tanítópontosság. ${Math.round(this.lift*100)}% emelés.`)}setText(t,e){var a;const s=(a=this.root)==null?void 0:a.querySelector(t);s&&(s.textContent=e)}project(t,e,s,a){const{width:i,height:n,padding:o}=a,r=(i-o*2)/2,l=(n-o*2)/2*(1-this.lift*.5),c=n/2+this.lift*n*.22;return{x:i/2+t*r+e*r*.16*this.lift,y:c+e*l-s*n*.22*this.lift}}draw(){if(!this.canvas)return;const t=this.canvas.getContext("2d");if(!t)return;const{width:e,height:s}=P(this.canvas),a={width:e,height:s,padding:28},i=Kt(this.points,this.threshold,this.innerLabel),n=new Set(i.supportIndices);t.clearRect(0,0,e,s),t.fillStyle="#f4f1e8",t.fillRect(0,0,e,s),this.drawFloor(t,a),this.drawDecisionCircle(t,a,i.lowerMargin,"rgba(18, 32, 63, 0.35)",!0),this.drawDecisionCircle(t,a,i.upperMargin,"rgba(18, 32, 63, 0.35)",!0),this.drawDecisionCircle(t,a,this.threshold,"#17776c",!1),this.lift>.025&&(this.drawPlane(t,a,i.lowerMargin,"rgba(18, 32, 63, 0.30)",!0,!1),this.drawPlane(t,a,i.upperMargin,"rgba(18, 32, 63, 0.30)",!0,!1),this.drawPlane(t,a,this.threshold,"#17776c",!1,!0));const o=this.points.map((r,l)=>{const c=At(r),p=this.project(c.x1,c.x2,0,a),h=this.project(c.x1,c.x2,c.z,a);return{point:r,feature:c,base:p,lifted:h,index:l}}).sort((r,l)=>r.lifted.y-l.lifted.y);if(this.lift>.04&&(t.save(),t.strokeStyle=`rgba(18, 32, 63, ${.06+this.lift*.09})`,t.lineWidth=.8,o.forEach(({base:r,lifted:l})=>{t.beginPath(),t.moveTo(r.x,r.y),t.lineTo(l.x,l.y),t.stroke()}),t.restore()),o.forEach(({point:r,lifted:l,index:c})=>{const p=n.has(c)?6:4.7;n.has(c)&&(t.save(),t.beginPath(),t.arc(l.x,l.y,9,0,Math.PI*2),t.strokeStyle="#9a7413",t.lineWidth=2.2,t.stroke(),t.restore()),wt(t,l.x,l.y,r.label,p),Se(r,this.threshold,this.innerLabel)!==r.label&&(t.save(),t.strokeStyle="#12203f",t.lineWidth=1.7,t.beginPath(),t.moveTo(l.x-7,l.y-7),t.lineTo(l.x+7,l.y+7),t.moveTo(l.x+7,l.y-7),t.lineTo(l.x-7,l.y+7),t.stroke(),t.restore())}),this.lift>.12){const r=this.project(-.96,-.96,this.threshold,a),l=`z = ${F(this.threshold)}`;t.save(),t.font="600 10px IBM Plex Mono, monospace";const c=t.measureText(l).width;t.fillStyle="rgba(255, 253, 246, 0.94)",t.fillRect(r.x-4,r.y-13,c+8,17),t.fillStyle="#17776c",t.fillText(l,r.x,r.y),t.restore()}}drawFloor(t,e){t.save(),t.strokeStyle="rgba(18, 32, 63, 0.13)",t.lineWidth=1,t.setLineDash([2,5]);for(let n=0;n<=4;n+=1){const o=-1+n*.5,r=this.project(-1,o,0,e),l=this.project(1,o,0,e),c=this.project(o,-1,0,e),p=this.project(o,1,0,e);t.beginPath(),t.moveTo(r.x,r.y),t.lineTo(l.x,l.y),t.stroke(),t.beginPath(),t.moveTo(c.x,c.y),t.lineTo(p.x,p.y),t.stroke()}t.setLineDash([]);const s=[this.project(-1,-1,0,e),this.project(1,-1,0,e),this.project(1,1,0,e),this.project(-1,1,0,e)];t.beginPath(),s.forEach((n,o)=>o===0?t.moveTo(n.x,n.y):t.lineTo(n.x,n.y)),t.closePath(),t.strokeStyle="rgba(18, 32, 63, 0.30)",t.stroke(),t.fillStyle="rgba(18, 32, 63, 0.48)",t.font="italic 10px Newsreader, Georgia, serif";const a=this.project(1,1,0,e),i=this.project(-1,1,0,e);t.fillText("x₁",a.x-13,a.y-7),t.fillText("x₂",i.x+5,i.y-7),t.restore()}drawDecisionCircle(t,e,s,a,i){if(s<=0||s>2)return;const n=Math.sqrt(s);t.save(),t.strokeStyle=a,t.lineWidth=i?1.1:2.2,t.setLineDash(i?[5,5]:[]),t.globalAlpha=i?.72:.95,t.beginPath();for(let o=0;o<=96;o+=1){const r=o/96*Math.PI*2,l=this.project(Math.cos(r)*n,Math.sin(r)*n,0,e);o===0?t.moveTo(l.x,l.y):t.lineTo(l.x,l.y)}t.closePath(),t.stroke(),t.restore()}drawPlane(t,e,s,a,i,n){const o=[this.project(-1,-1,s,e),this.project(1,-1,s,e),this.project(1,1,s,e),this.project(-1,1,s,e)];t.save(),t.beginPath(),o.forEach((r,l)=>l===0?t.moveTo(r.x,r.y):t.lineTo(r.x,r.y)),t.closePath(),n&&(t.fillStyle="rgba(23, 119, 108, 0.12)",t.fill()),t.strokeStyle=a,t.lineWidth=i?1.1:2.1,t.setLineDash(i?[6,5]:[]),t.stroke(),t.restore()}}const oe=1e-9,Hs=1e-8,Tt=.9,Et=.999;function K(d){return Math.max(0,Math.min(1,d))}function Bs(d){if(d>=0)return 1/(1+Math.exp(-d));const t=Math.exp(d);return t/(1+t)}function Ns(d){return[(K(d.x)-.5)*2,(K(d.y)-.5)*2]}function je(d){return{firstHiddenWeights:Array.from({length:d},()=>[0,0]),secondHiddenWeights:Array.from({length:d},()=>[0,0]),firstHiddenBiases:Array(d).fill(0),secondHiddenBiases:Array(d).fill(0),firstOutputWeights:Array(d).fill(0),secondOutputWeights:Array(d).fill(0),firstOutputBias:0,secondOutputBias:0}}function Ds(d){return{firstHiddenWeights:d.firstHiddenWeights.map(t=>[...t]),secondHiddenWeights:d.secondHiddenWeights.map(t=>[...t]),firstHiddenBiases:[...d.firstHiddenBiases],secondHiddenBiases:[...d.secondHiddenBiases],firstOutputWeights:[...d.firstOutputWeights],secondOutputWeights:[...d.secondOutputWeights],firstOutputBias:d.firstOutputBias,secondOutputBias:d.secondOutputBias}}function ut(d,t,e,s,a,i){const n=Tt*e+(1-Tt)*t,o=Et*s+(1-Et)*t*t,r=n/(1-Tt**a),l=o/(1-Et**a);return{value:d-i*r/(Math.sqrt(l)+Hs),firstMoment:n,secondMoment:o}}function re(d=8,t=73){const e=Math.max(1,Math.min(32,Math.floor(d))),s=A(t),a=Math.sqrt(6/(2+e)),i=Math.sqrt(6/(e+1)),n=o=>(s()*2-1)*o;return{hiddenSize:e,hiddenWeights:Array.from({length:e},()=>[n(a),n(a)]),hiddenBiases:Array.from({length:e},()=>n(a)*.45),outputWeights:Array.from({length:e},()=>n(i)),outputBias:0,steps:0,optimizer:je(e)}}function Ks(d){return{hiddenSize:d.hiddenSize,hiddenWeights:d.hiddenWeights.map(t=>[...t]),hiddenBiases:[...d.hiddenBiases],outputWeights:[...d.outputWeights],outputBias:d.outputBias,steps:d.steps,optimizer:d.optimizer?Ds(d.optimizer):void 0}}function ft(d,t){const e=Ns(t),s=d.hiddenWeights.map((i,n)=>Math.tanh(i[0]*e[0]+i[1]*e[1]+d.hiddenBiases[n])),a=s.reduce((i,n,o)=>i+n*d.outputWeights[o],d.outputBias);return{input:e,hidden:s,logit:a,probability:Bs(a)}}function mt(d,t){if(t.length===0)return{loss:0,accuracy:0};let e=0,s=0;return t.forEach(a=>{const i=Math.max(oe,Math.min(1-oe,ft(d,a).probability));e-=a.label*Math.log(i)+(1-a.label)*Math.log(1-i),(i>=.5?1:0)===a.label&&(s+=1)}),{loss:e/t.length,accuracy:s/t.length}}function Os(d,t,e){const s=Math.max(0,Math.min(1e4,Math.floor(e.epochs??1))),a=Math.max(0,Math.min(1,e.learningRate)),i=Math.max(0,e.l2??0),n=Ks(d);if(t.length===0||s===0||a===0)return n;n.optimizer??(n.optimizer=je(n.hiddenSize));for(let o=0;o<s;o+=1){const r=Math.min(32,t.length),l=n.steps*r,c=Array.from({length:n.hiddenSize},()=>[0,0]),p=Array(n.hiddenSize).fill(0),h=Array(n.hiddenSize).fill(0);let u=0;for(let y=0;y<r;y+=1){const j=(l+y)*9973%t.length,f=t[j],z=ft(n,f),S=z.probability-f.label;u+=S;for(let w=0;w<n.hiddenSize;w+=1){h[w]+=S*z.hidden[w];const $=S*n.outputWeights[w]*(1-z.hidden[w]**2);p[w]+=$,c[w][0]+=$*z.input[0],c[w][1]+=$*z.input[1]}}const g=1/r,v=n.optimizer,b=n.steps+1;for(let y=0;y<n.hiddenSize;y+=1){for(let w=0;w<2;w+=1){const $=n.hiddenWeights[y][w],Ce=c[y][w]*g+i*$,St=ut($,Ce,v.firstHiddenWeights[y][w],v.secondHiddenWeights[y][w],b,a);n.hiddenWeights[y][w]=St.value,v.firstHiddenWeights[y][w]=St.firstMoment,v.secondHiddenWeights[y][w]=St.secondMoment}const j=ut(n.hiddenBiases[y],p[y]*g,v.firstHiddenBiases[y],v.secondHiddenBiases[y],b,a);n.hiddenBiases[y]=j.value,v.firstHiddenBiases[y]=j.firstMoment,v.secondHiddenBiases[y]=j.secondMoment;const f=n.outputWeights[y],z=h[y]*g+i*f,S=ut(f,z,v.firstOutputWeights[y],v.secondOutputWeights[y],b,a);n.outputWeights[y]=S.value,v.firstOutputWeights[y]=S.firstMoment,v.secondOutputWeights[y]=S.secondMoment}const k=ut(n.outputBias,u*g,v.firstOutputBias,v.secondOutputBias,b,a);n.outputBias=k.value,v.firstOutputBias=k.firstMoment,v.secondOutputBias=k.secondMoment,n.steps+=1}return n}function Fs(d=51,t=54){const e=A(d),s=Math.max(8,Math.min(140,Math.floor(t))),a=[];for(let i=0;i<=1;i=i+1)for(let n=0;n<s;n+=1){const o=n/Math.max(1,s-1),r=.55+o*Math.PI*2.25+i*Math.PI,l=.035+o*.43;a.push({x:K(.5+l*Math.cos(r)+x(e)*.0075),y:K(.5+l*Math.sin(r)+x(e)*.0075),label:i})}return a}function Vs(d=29,t=24){const e=A(d),s=Math.max(5,Math.min(70,Math.floor(t)));return[{x:.24,y:.24,label:0},{x:.76,y:.76,label:0},{x:.24,y:.76,label:1},{x:.76,y:.24,label:1}].flatMap(i=>Array.from({length:s},()=>({x:K(i.x+x(e)*.055),y:K(i.y+x(e)*.055),label:i.label})))}function Ys(d=91,t=58){const e=A(d),s=Math.max(8,Math.min(120,Math.floor(t))),a=[];for(let i=0;i<=1;i=i+1)for(let n=0;n<s;n+=1){const o=n/s*Math.PI*2+e()*.08,l=(i===0?.17:.39)+x(e)*.018;a.push({x:K(.5+Math.cos(o)*l),y:K(.5+Math.sin(o)*l),label:i})}return a}const Ct={spiral:{title:"Kétkarú spirál",question:"Hány neuron kell a kanyargó határhoz?",make:()=>Fs()},xor:{title:"Kockás",question:"Mit ad hozzá a rejtett réteg?",make:()=>Vs()},rings:{title:"Körök",question:"Hogyan záródik össze a határ?",make:()=>Ys()},custom:{title:"Saját rajz",question:"Indulj üres vászonról.",make:()=>[]}};function X(d,t=3){return d.toFixed(t).replace(".",",")}function Lt(d){return`${Math.round(d*100)}%`}function le(d){return{a:d.filter(t=>t.label===0).length,b:d.filter(t=>t.label===1).length}}class Ws{constructor(t){m(this,"context");m(this,"root");m(this,"canvas");m(this,"resizeObserver");m(this,"points",Ct.spiral.make());m(this,"pointHistory",[]);m(this,"model",re(8,73));m(this,"hiddenSize",8);m(this,"learningRate",.03);m(this,"currentLabel",0);m(this,"lossHistory",[mt(this.model,this.points).loss]);m(this,"drawing",!1);m(this,"lastDrawn");m(this,"pointer");m(this,"touchDrawingEnabled",!1);m(this,"tapCandidate");m(this,"initializationSeed",73);m(this,"maxPoints",260);m(this,"onKeyDown",t=>{var e;!((e=this.root)!=null&&e.isConnected)||t.target.closest("button, a, input, select, textarea, summary, [contenteditable='true']")||((t.key==="1"||t.key==="2")&&(this.currentLabel=Number(t.key)-1,this.syncClassControls()),(t.ctrlKey||t.metaKey)&&t.key.toLowerCase()==="z"&&(t.preventDefault(),this.undo()))});this.context=t}mount(t){this.root=t,t.innerHTML=`
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
      </article>`,this.canvas=t.querySelector("canvas.data-canvas")??void 0,this.bindControls(),this.canvas&&(this.resizeObserver=new ResizeObserver(()=>this.draw()),this.resizeObserver.observe(this.canvas)),this.update()}destroy(){var t;(t=this.resizeObserver)==null||t.disconnect(),window.removeEventListener("keydown",this.onKeyDown),this.root=void 0,this.canvas=void 0}bindControls(){var e,s,a,i,n,o,r,l,c;if(!this.root||!this.canvas)return;this.root.querySelectorAll("[data-neural-preset]").forEach(p=>{p.addEventListener("click",()=>{const h=p.dataset.neuralPreset??"spiral";this.points=Ct[h].make(),this.pointHistory=[],this.markPreset(h),this.resetModel()})}),this.root.querySelectorAll("[data-class]").forEach(p=>{p.addEventListener("click",()=>{this.currentLabel=Number(p.dataset.class??0)===1?1:0,this.syncClassControls()})}),(e=this.root.querySelector("#neural-hidden"))==null||e.addEventListener("input",p=>{this.hiddenSize=Number(p.target.value),this.resetModel()}),(s=this.root.querySelector("#neural-rate"))==null||s.addEventListener("input",p=>{this.learningRate=Number(p.target.value)/100,this.update()}),(a=this.root.querySelector("[data-action='toggle-draw']"))==null||a.addEventListener("click",p=>{var g;this.touchDrawingEnabled=!this.touchDrawingEnabled;const h=p.currentTarget;h.setAttribute("aria-pressed",String(this.touchDrawingEnabled)),h.classList.toggle("is-active",this.touchDrawingEnabled);const u=h.querySelector("[data-draw-state]");u&&(u.textContent=this.touchDrawingEnabled?"be":"ki"),(g=this.canvas)==null||g.classList.toggle("is-touch-drawing",this.touchDrawingEnabled)}),(i=this.root.querySelector("[data-action='train-step']"))==null||i.addEventListener("click",()=>this.train(1)),(n=this.root.querySelector("[data-action='train-batch']"))==null||n.addEventListener("click",()=>this.train(50)),(o=this.root.querySelector("[data-action='reset-model']"))==null||o.addEventListener("click",()=>this.resetModel()),(r=this.root.querySelector("[data-action='undo']"))==null||r.addEventListener("click",()=>this.undo()),(l=this.root.querySelector("[data-action='clear']"))==null||l.addEventListener("click",()=>{this.points.length>0&&this.pushHistory(),this.points=[],this.markPreset("custom"),this.resetModel()}),(c=this.root.querySelector("[data-action='add-keyboard']"))==null||c.addEventListener("click",()=>{var g,v,b,k,y,j;const p=Number(((v=(g=this.root)==null?void 0:g.querySelector("[data-entry-x]"))==null?void 0:v.value)??.5),h=Number(((k=(b=this.root)==null?void 0:b.querySelector("[data-entry-y]"))==null?void 0:k.value)??.5),u=Number(((j=(y=this.root)==null?void 0:y.querySelector("[data-entry-label]"))==null?void 0:j.value)??0)===1?1:0;this.pushHistory(),this.addPoint({x:Math.max(0,Math.min(1,p)),y:Math.max(0,Math.min(1,h)),label:u},!0)}),this.canvas.addEventListener("pointerdown",p=>{var u;const h=I(this.canvas,p);if(this.pointer=h,p.pointerType!=="mouse"&&!this.touchDrawingEnabled){this.tapCandidate={point:h,clientX:p.clientX,clientY:p.clientY,moved:!1};return}this.drawing=!0,this.lastDrawn=void 0,(u=this.canvas)==null||u.setPointerCapture(p.pointerId),this.pushHistory(),this.addPoint({...h,label:this.currentLabel})}),this.canvas.addEventListener("pointermove",p=>{if(this.tapCandidate){Math.hypot(p.clientX-this.tapCandidate.clientX,p.clientY-this.tapCandidate.clientY)>9&&(this.tapCandidate.moved=!0);return}const h=I(this.canvas,p);this.pointer=h,this.drawing?(p.preventDefault(),this.addPoint({...h,label:this.currentLabel})):this.draw()});const t=p=>{var h;(h=this.canvas)!=null&&h.hasPointerCapture(p.pointerId)&&this.canvas.releasePointerCapture(p.pointerId),this.drawing=!1,this.lastDrawn=void 0};this.canvas.addEventListener("pointerup",p=>{this.tapCandidate&&(this.tapCandidate.moved||(this.pushHistory(),this.addPoint({...this.tapCandidate.point,label:this.currentLabel})),this.tapCandidate=void 0),t(p)}),this.canvas.addEventListener("pointercancel",p=>{this.tapCandidate=void 0,t(p)}),this.canvas.addEventListener("pointerleave",()=>{this.drawing||(this.pointer=void 0,this.tapCandidate=void 0,this.draw())}),window.addEventListener("keydown",this.onKeyDown),this.root.querySelectorAll("[data-answer]").forEach(p=>{p.addEventListener("click",()=>{var g,v;const h=p.dataset.answer==="right";(g=this.root)==null||g.querySelectorAll("[data-answer]").forEach(b=>b.classList.remove("is-correct","is-wrong")),p.classList.add(h?"is-correct":"is-wrong");const u=(v=this.root)==null?void 0:v.querySelector("[data-quiz-feedback]");u&&(u.textContent=h?"Helyes. A túl nagy lépés átugorhat a kisebb veszteségű tartományon. A modult teljesítetted.":"A tanulási ráta a gradienssel kijelölt lépés hosszát szabályozza."),h&&this.context.onComplete()})})}pushHistory(){this.pointHistory.push(this.points.map(t=>({...t}))),this.pointHistory.length>30&&this.pointHistory.shift()}undo(){const t=this.pointHistory.pop();t&&(this.points=t,this.markPreset("custom"),this.refreshLossHistory(),this.update())}addPoint(t,e=!1){this.points.length>=this.maxPoints||!e&&this.lastDrawn&&(this.lastDrawn.x-t.x)**2+(this.lastDrawn.y-t.y)**2<.001||(this.points.push(t),this.lastDrawn=t,this.markPreset("custom"),this.refreshLossHistory(),this.update())}train(t){if(!this.canTrain())return;const e=t===1?1:10,s=t===1?1:Math.floor(t/e);for(let a=0;a<e;a+=1)this.model=Os(this.model,this.points,{learningRate:this.learningRate,epochs:s}),this.lossHistory.push(mt(this.model,this.points).loss);this.lossHistory.length>80&&this.lossHistory.splice(0,this.lossHistory.length-80),this.update()}resetModel(){this.model=re(this.hiddenSize,this.initializationSeed),this.refreshLossHistory(),this.update()}refreshLossHistory(){this.lossHistory=this.points.length>0?[mt(this.model,this.points).loss]:[]}canTrain(){const t=le(this.points);return t.a>0&&t.b>0}markPreset(t){var e;(e=this.root)==null||e.querySelectorAll("[data-neural-preset]").forEach(s=>{const a=s.dataset.neuralPreset===t;s.classList.toggle("is-active",a),s.setAttribute("aria-pressed",String(a))})}syncClassControls(){var t;(t=this.root)==null||t.querySelectorAll("[data-class]").forEach(e=>{const s=Number(e.dataset.class)===this.currentLabel;e.classList.toggle("is-active",s),e.setAttribute("aria-pressed",String(s))})}setText(t,e){var a;const s=(a=this.root)==null?void 0:a.querySelector(t);s&&(s.textContent=e)}update(){var r,l,c;const t=le(this.points),e=mt(this.model,this.points);this.setText("[data-hidden-output]",String(this.hiddenSize)),this.setText("[data-rate-output]",X(this.learningRate,2)),this.setText("[data-step-count]",String(this.model.steps)),this.setText("[data-loss]",this.points.length>0?X(e.loss):"—"),this.setText("[data-accuracy]",this.points.length>0?Lt(e.accuracy):"—"),this.setText("[data-network-caption]",`2 → ${this.hiddenSize} → 1`),this.setText("[data-summary]",`${this.points.length} tanítópont · ${t.a} A · ${t.b} B · ${this.model.steps} gradienslépés.`);const s=this.canTrain();(r=this.root)==null||r.querySelectorAll("[data-action='train-step'], [data-action='train-batch']").forEach(p=>{p.disabled=!s});const a=(l=this.root)==null?void 0:l.querySelector("[data-action='undo']");a&&(a.disabled=this.pointHistory.length===0);const i=(c=this.root)==null?void 0:c.querySelector("[data-observation]");i&&(this.points.length===0?i.innerHTML='<p class="control-label">Állapot</p><strong>Üres tanítóminta.</strong><p>Rajzolj mindkét osztályhoz pontokat.</p>':s?this.model.steps===0?i.innerHTML='<p class="control-label">Állapot</p><strong>A súlyok inicializálva vannak.</strong><p>Indíts egy lépést vagy egy rövid tanítási köteget.</p>':i.innerHTML=`<p class="control-label">Aktuális tanítás</p><strong>Loss: ${X(e.loss)}.</strong><p>A 0,5 feletti kimenetet B osztálynak számítjuk; a tanítási pontosság ${Lt(e.accuracy)}.</p>`:i.innerHTML='<p class="control-label">Állapot</p><strong>Hiányzik az egyik osztály.</strong><p>A bináris határ tanításához A és B pont is kell.</p>');const n=this.lossHistory[0],o=this.lossHistory[this.lossHistory.length-1];n===void 0||o===void 0?this.setText("[data-loss-caption]","A görbéhez előbb adj tanítópontokat."):this.model.steps===0?this.setText("[data-loss-caption]",`Inicializált érték: ${X(o)}.`):this.setText("[data-loss-caption]",`${X(n)} → ${X(o)} · ${this.model.steps} lépés.`),this.updateNetworkMap(),this.updateLossChart(),this.syncClassControls(),this.draw()}updateNetworkMap(){var c;const t=(c=this.root)==null?void 0:c.querySelector("[data-network-map]");if(!t)return;t.setAttribute("aria-label",`Két bemenet, ${this.hiddenSize} rejtett neuron és egy kimenet`);const e=[{x:20,y:48},{x:20,y:102}],s=Array.from({length:this.hiddenSize},(p,h)=>({x:103,y:13+h*124/Math.max(1,this.hiddenSize-1)})),a={x:190,y:75},i=(p,h,u,g,v)=>{const b=v>=0?"#1e67b8":"#d84429",k=Math.min(.82,.2+Math.abs(v)*.25),y=Math.min(3.2,.65+Math.abs(v)*.85);return`<line x1="${p}" y1="${h}" x2="${u}" y2="${g}" stroke="${b}" stroke-opacity="${k}" stroke-width="${y}" />`},n=s.flatMap((p,h)=>e.map((u,g)=>i(u.x,u.y,p.x,p.y,this.model.hiddenWeights[h][g]))).join(""),o=s.map((p,h)=>i(p.x,p.y,a.x,a.y,this.model.outputWeights[h])).join(""),r=e.map((p,h)=>`
      <circle cx="${p.x}" cy="${p.y}" r="8" fill="#fffdf6" stroke="#12203f" stroke-width="1.4" />
      <text x="${p.x}" y="${p.y+3}" text-anchor="middle" fill="#12203f" font-size="8" font-family="IBM Plex Mono">x${h+1}</text>`).join(""),l=s.map(p=>`<circle cx="${p.x}" cy="${p.y}" r="5" fill="#fffdf6" stroke="#17776c" stroke-width="1.4" />`).join("");t.innerHTML=`
      <title>Kétbemenetű, egy rejtett réteges háló</title>
      ${n}${o}${r}${l}
      <circle cx="${a.x}" cy="${a.y}" r="9" fill="#fffdf6" stroke="#12203f" stroke-width="1.6" />
      <text x="${a.x}" y="${a.y+3}" text-anchor="middle" fill="#12203f" font-size="8" font-family="IBM Plex Mono">ŷ</text>`}updateLossChart(){var l;const t=(l=this.root)==null?void 0:l.querySelector("[data-loss-path]");if(!t||this.lossHistory.length===0){t==null||t.setAttribute("d","");return}const e=24,s=12,a=484,i=88,n=Math.max(.75,...this.lossHistory)*1.08,o=Math.max(1,this.lossHistory.length-1),r=this.lossHistory.map((c,p)=>{const h=e+p/o*a,u=s+(1-Math.min(1,c/n))*i;return`${p===0?"M":"L"}${h.toFixed(1)} ${u.toFixed(1)}`}).join(" ");t.setAttribute("d",r)}draw(){if(!this.canvas)return;const t=this.canvas.getContext("2d");if(!t)return;const{width:e,height:s}=P(this.canvas),a=20,i=Math.max(1,e-a*2),n=Math.max(1,s-a*2);if(t.clearRect(0,0,e,s),t.fillStyle="#f4f1e8",t.fillRect(0,0,e,s),this.canTrain()){const o=e<560?32:48,r=Math.max(24,Math.round(o*n/i)),l=i/o,c=n/r,p=Array.from({length:r},()=>Array(o).fill(0));for(let h=0;h<r;h+=1)for(let u=0;u<o;u+=1){const g=ft(this.model,{x:(u+.5)/o,y:(h+.5)/r}).probability,v=Math.round(216*(1-g)+30*g),b=Math.round(68*(1-g)+103*g),k=Math.round(41*(1-g)+184*g);t.fillStyle=`rgba(${v}, ${b}, ${k}, 0.16)`,t.fillRect(a+u*l,a+h*c,l+.5,c+.5),p[h][u]=g>=.5?1:0}t.save(),t.strokeStyle="rgba(18, 32, 63, 0.54)",t.lineWidth=1.15,t.beginPath();for(let h=0;h<r;h+=1)for(let u=0;u<o;u+=1){if(u>0&&p[h][u]!==p[h][u-1]){const g=a+u*l,v=a+h*c;t.moveTo(g,v),t.lineTo(g,v+c)}if(h>0&&p[h][u]!==p[h-1][u]){const g=a+u*l,v=a+h*c;t.moveTo(g,v),t.lineTo(g+l,v)}}t.stroke(),t.restore()}if(B(t,e,s,a),this.points.forEach(o=>{const[r,l]=M(o,e,s,a);wt(t,r,l,o.label,4.8)}),this.pointer){const[o,r]=M(this.pointer,e,s,a);t.save(),t.beginPath(),t.arc(o,r,7,0,Math.PI*2),t.strokeStyle=this.currentLabel===0?"#d84429":"#1e67b8",t.lineWidth=1.5,t.stroke(),t.restore();const l=ft(this.model,this.pointer).probability;this.setText("[data-pointer-probability]",Lt(l))}else this.setText("[data-pointer-probability]","—")}}class Us{constructor(t){m(this,"context");m(this,"root");m(this,"canvas");m(this,"cohort",_e());m(this,"ownPoint");m(this,"resizeObserver");this.context=t}mount(t){this.root=t,t.innerHTML=`
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
      </article>`,this.canvas=t.querySelector("canvas.data-canvas")??void 0,this.bindControls(),this.canvas&&(this.resizeObserver=new ResizeObserver(()=>this.draw()),this.resizeObserver.observe(this.canvas)),this.update()}destroy(){var t;(t=this.resizeObserver)==null||t.disconnect(),this.root=void 0,this.canvas=void 0}bindControls(){var s;if(!this.root)return;const t=this.root.querySelector("#opening-python"),e=this.root.querySelector("#opening-coffee");t==null||t.addEventListener("input",()=>this.update()),e==null||e.addEventListener("input",()=>this.update()),(s=this.root.querySelector(".self-form"))==null||s.addEventListener("submit",a=>{var n,o;a.preventDefault();const i=Number(((o=(n=this.root)==null?void 0:n.querySelector("#opening-mode"))==null?void 0:o.value)??0);this.ownPoint={x:.08+(Number((t==null?void 0:t.value)??3)-1)/4*.84,y:.9-Number((e==null?void 0:e.value)??2)/6*.8,label:i},this.context.onComplete(),this.update(),window.setTimeout(()=>{var r,l;return(l=(r=this.root)==null?void 0:r.querySelector(".cohort-map"))==null?void 0:l.scrollIntoView({behavior:window.matchMedia("(prefers-reduced-motion: reduce)").matches?"auto":"smooth",block:"center"})},80)})}update(){var n,o,r,l,c,p,h;const t=Number(((o=(n=this.root)==null?void 0:n.querySelector("#opening-python"))==null?void 0:o.value)??3),e=Number(((l=(r=this.root)==null?void 0:r.querySelector("#opening-coffee"))==null?void 0:l.value)??2),s=(c=this.root)==null?void 0:c.querySelector("[data-python-output]"),a=(p=this.root)==null?void 0:p.querySelector("[data-coffee-output]");s&&(s.textContent=`${t} / 5`),a&&(a.textContent=e===6?"6+":String(e));const i=(h=this.root)==null?void 0:h.querySelector("[data-summary]");i&&(i.textContent=this.ownPoint?"A sáfrányszínű gyűrű jelöli a te pontodat. A belső alak a választott munkamódot mutatja. Az oldal nem küldte el a válaszokat.":"86 generált mintapont. Állítsd be a válaszaidat, majd mutasd meg a saját pontodat."),this.draw()}draw(){if(!this.canvas)return;const t=this.canvas.getContext("2d");if(!t)return;const{width:e,height:s}=P(this.canvas);t.clearRect(0,0,e,s),t.fillStyle="#06080d",t.fillRect(0,0,e,s),t.save(),t.strokeStyle="rgba(111, 180, 255, .12)",t.setLineDash([2,7]);for(let i=1;i<5;i+=1){const n=24+i/5*(e-48),o=24+i/5*(s-48);t.beginPath(),t.moveTo(n,24),t.lineTo(n,s-24),t.stroke(),t.beginPath(),t.moveTo(24,o),t.lineTo(e-24,o),t.stroke()}t.restore();const a=["rgba(111,180,255,.56)","rgba(42,157,143,.56)","rgba(224,69,42,.58)"];if(this.cohort.forEach(i=>{const[n,o]=M(i,e,s,24);t.save(),t.translate(n,o);const r=i.label??0;t.strokeStyle=a[r],t.fillStyle=a[r],t.lineWidth=1.2,t.beginPath(),r===0?t.arc(0,0,3.2,0,Math.PI*2):r===1?t.rect(-2.8,-2.8,5.6,5.6):(t.moveTo(0,-3.7),t.lineTo(3.5,3),t.lineTo(-3.5,3),t.closePath()),t.fill(),t.restore()}),this.ownPoint){const[i,n]=M(this.ownPoint,e,s,24);t.save(),t.translate(i,n),t.strokeStyle="#f2c14e",t.fillStyle="#f2c14e",t.lineWidth=2.2,t.beginPath();const o=this.ownPoint.label??0;o===0?t.arc(0,0,4.5,0,Math.PI*2):o===1?t.rect(-4,-4,8,8):(t.moveTo(0,-5),t.lineTo(4.8,4),t.lineTo(-4.8,4),t.closePath()),t.fill(),t.beginPath(),t.arc(0,0,13,0,Math.PI*2),t.stroke(),t.restore()}}}function Ot(d,t=.045,e=.955){return Math.max(t,Math.min(e,d))}function Ft(d,t,e,s,a,i,n){const o=A(d);return Array.from({length:e},(r,l)=>({id:`${t}-${String(l+1).padStart(2,"0")}`,x:Ot(s+x(o)*i),y:Ot(a+x(o)*n),isAnomaly:!1}))}function Wt(d,t){return t.map(([e,s],a)=>({id:`${d}-X${a+1}`,x:e,y:s,isAnomaly:!0}))}function Gs(){return[...Ft(111,"TP",44,.27,.31,.075,.085),...Ft(112,"TPB",44,.7,.66,.08,.09),...Wt("TP",[[.08,.89],[.91,.12],[.92,.9],[.51,.94],[.08,.58]])]}function Xs(){return[...Ft(213,"SC",88,.5,.5,.12,.105),...Wt("SC",[[.08,.12],[.9,.18],[.1,.84],[.91,.88],[.51,.94]])]}function _s(){const d=A(317);return[...Array.from({length:88},(e,s)=>{const a=.08+d()*.84,i=Ot(.15+a*.68+x(d)*.038);return{id:`DG-${String(s+1).padStart(2,"0")}`,x:a,y:i,isAnomaly:!1}}),...Wt("DG",[[.14,.78],[.28,.9],[.57,.16],[.78,.25],[.92,.46]])]}function de(d,t=5){if(d.length===0)return[];if(d.length===1)return[{...d[0],score:0,rank:1}];const e=Math.min(d.length-1,Math.max(1,Math.floor(Number.isFinite(t)?t:1))),s=d.map((a,i)=>{const o=d.map((r,l)=>l===i?null:Math.hypot(a.x-r.x,a.y-r.y)).filter(r=>r!==null).sort((r,l)=>r-l).slice(0,e).reduce((r,l)=>r+l,0)/e;return{...a,score:o,rank:0}});return s.sort((a,i)=>i.score-a.score||(a.id<i.id?-1:a.id>i.id?1:0)),s.map((a,i)=>({...a,rank:i+1}))}const qt=[{id:"two-peaks",title:"Két csúcsidő",summary:"Két sűrű tranzakciócsoport",points:Gs()},{id:"single-cloud",title:"Egy sűrű mag",summary:"Kompakt, közel kör alakú felhő",points:Xs()},{id:"diagonal",title:"Összeg–idő sáv",summary:"Erős kapcsolat a két tengely között",points:_s()}],Vt=[{id:"bread",label:"kenyér"},{id:"milk",label:"tej"},{id:"diaper",label:"pelenka"},{id:"beer",label:"sör"},{id:"coffee",label:"kávé"},{id:"apple",label:"alma"}],ce=[{id:"K01",items:["diaper","beer","milk"]},{id:"K02",items:["diaper","beer","bread"]},{id:"K03",items:["diaper","beer"]},{id:"K04",items:["diaper","beer","apple"]},{id:"K05",items:["diaper","milk"]},{id:"K06",items:["diaper","bread"]},{id:"K07",items:["beer","bread"]},{id:"K08",items:["bread","milk","apple"]},{id:"K09",items:["bread","milk"]},{id:"K10",items:["bread","coffee"]},{id:"K11",items:["milk","coffee"]},{id:"K12",items:["bread","apple"]},{id:"K13",items:["milk","apple"]},{id:"K14",items:["coffee","apple"]},{id:"K15",items:["bread","milk","coffee"]},{id:"K16",items:["bread","milk","apple"]},{id:"K17",items:["bread","coffee","apple"]},{id:"K18",items:["milk","coffee","apple"]},{id:"K19",items:["bread","milk"]},{id:"K20",items:["bread","apple"]},{id:"K21",items:["milk","coffee"]},{id:"K22",items:["bread","coffee"]},{id:"K23",items:["milk","apple"]},{id:"K24",items:["bread","milk","coffee","apple"]}];function Js(d,t,e){const s=d.length;let a=0,i=0,n=0;if(d.forEach(u=>{const g=u.items.includes(t),v=u.items.includes(e);g&&(a+=1),v&&(i+=1),g&&v&&(n+=1)}),s===0)return{total:s,countA:a,countB:i,countBoth:n,supportA:null,supportB:null,jointSupport:null,confidenceAToB:null,confidenceBToA:null,lift:null};const o=a/s,r=i/s,l=n/s,c=a===0?null:n/a,p=i===0?null:n/i,h=c===null||r===0?null:c/r;return{total:s,countA:a,countB:i,countBoth:n,supportA:o,supportB:r,jointSupport:l,confidenceAToB:c,confidenceBToA:p,lift:h}}function It(d){return d===null?"—":`${(d*100).toFixed(1).replace(".0","").replace(".",",")}%`}function Rt(d){var t;return((t=Vt.find(e=>e.id===d))==null?void 0:t.label)??d}function Zs(d){return d.id==="diagonal"?"↗":d.id==="single-cloud"?"●":"••"}function he(d){const t=d.x.toFixed(2).replace(".",","),e=d.y.toFixed(2).replace(".",",");return`${d.id} · idő ${t} · összeg ${e}`}class Qs{constructor(t){m(this,"context");m(this,"root");m(this,"canvas");m(this,"resizeObserver");m(this,"activeMode","anomaly");m(this,"preset",qt[0]);m(this,"guesses",new Set);m(this,"revealed",!1);m(this,"neighbours",5);m(this,"itemA","bread");m(this,"itemB","milk");m(this,"tapCandidate");this.context=t}mount(t){this.root=t,t.innerHTML=`
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
              ${qt.map((e,s)=>`
                <button class="preset ${s===0?"is-active":""}" type="button" data-anomaly-preset="${e.id}" aria-pressed="${s===0}">
                  <span class="preset-mark preset-custom anomaly-preset-mark" aria-hidden="true">${Zs(e)}</span>
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
      </article>`,this.canvas=t.querySelector("[data-anomaly-canvas]")??void 0,this.bindControls(),this.canvas&&(this.resizeObserver=new ResizeObserver(()=>this.drawAnomalies()),this.resizeObserver.observe(this.canvas)),this.updateAnomalies(),this.updateBaskets()}destroy(){var t;(t=this.resizeObserver)==null||t.disconnect(),this.root=void 0,this.canvas=void 0,this.tapCandidate=void 0}itemOptions(t){return Vt.map(e=>`<option value="${e.id}" ${e.id===t?"selected":""}>${e.label}</option>`).join("")}bindControls(){var t,e,s,a,i,n,o,r;this.root&&(this.root.querySelectorAll("[data-pattern-mode]").forEach(l=>{l.addEventListener("click",()=>this.setMode(l.dataset.patternMode??"anomaly")),l.addEventListener("keydown",c=>{var h,u;if(!["ArrowLeft","ArrowRight","Home","End"].includes(c.key))return;c.preventDefault();const p=c.key==="ArrowLeft"||c.key==="Home"?"anomaly":"basket";this.setMode(p),(u=(h=this.root)==null?void 0:h.querySelector(`[data-pattern-mode='${p}']`))==null||u.focus()})}),this.root.querySelectorAll("[data-anomaly-preset]").forEach(l=>{l.addEventListener("click",()=>{var p;const c=qt.find(h=>h.id===l.dataset.anomalyPreset);c&&(this.preset=c,this.guesses.clear(),this.revealed=!1,(p=this.root)==null||p.querySelectorAll("[data-anomaly-preset]").forEach(h=>{const u=h===l;h.classList.toggle("is-active",u),h.setAttribute("aria-pressed",String(u))}),this.refreshSuspectOptions(),this.updateAnomalies())})}),(t=this.root.querySelector("#anomaly-neighbours"))==null||t.addEventListener("input",l=>{this.neighbours=Number(l.target.value),this.updateAnomalies()}),(e=this.root.querySelector("[data-action='reveal-anomalies']"))==null||e.addEventListener("click",()=>{this.revealed=!0,this.updateAnomalies()}),(s=this.root.querySelector("[data-action='clear-guesses']"))==null||s.addEventListener("click",()=>{this.guesses.clear(),this.revealed=!1,this.updateAnomalies()}),(a=this.root.querySelector("[data-action='toggle-suspect']"))==null||a.addEventListener("click",()=>{var c,p;const l=(p=(c=this.root)==null?void 0:c.querySelector("[data-suspect-select]"))==null?void 0:p.value;l&&this.toggleGuess(l)}),(i=this.canvas)==null||i.addEventListener("pointerdown",l=>{if(l.pointerType==="mouse"){this.guessAt(l.clientX,l.clientY);return}this.tapCandidate={clientX:l.clientX,clientY:l.clientY,moved:!1}}),(n=this.canvas)==null||n.addEventListener("pointermove",l=>{this.tapCandidate&&Math.hypot(l.clientX-this.tapCandidate.clientX,l.clientY-this.tapCandidate.clientY)>9&&(this.tapCandidate.moved=!0)}),(o=this.canvas)==null||o.addEventListener("pointerup",l=>{this.tapCandidate&&!this.tapCandidate.moved&&this.guessAt(l.clientX,l.clientY),this.tapCandidate=void 0}),(r=this.canvas)==null||r.addEventListener("pointercancel",()=>{this.tapCandidate=void 0}),this.root.querySelectorAll("[data-basket-item]").forEach(l=>{l.addEventListener("change",()=>{var p,h;const c=l.dataset.basketItem;if(c==="a"&&(this.itemA=l.value),c==="b"&&(this.itemB=l.value),this.itemA===this.itemB){const u=((p=Vt.find(v=>v.id!==l.value))==null?void 0:p.id)??"bread";c==="a"?this.itemB=u:this.itemA=u;const g=(h=this.root)==null?void 0:h.querySelector(`[data-basket-item='${c==="a"?"b":"a"}']`);g&&(g.value=u)}this.updateBaskets()})}),this.root.querySelectorAll("[data-answer]").forEach(l=>{l.addEventListener("click",()=>{var h,u;const c=l.dataset.answer==="right";(h=this.root)==null||h.querySelectorAll("[data-answer]").forEach(g=>g.classList.remove("is-correct","is-wrong")),l.classList.add(c?"is-correct":"is-wrong");const p=(u=this.root)==null?void 0:u.querySelector("[data-quiz-feedback]");p&&(p.textContent=c?"Helyes. A lift a feltételes és az alapszintű gyakoriság hányadosa. A modult teljesítetted.":"A lift arányt mér; sem 100%-os bizalmat, sem okságot nem állít."),c&&this.context.onComplete()})}))}setMode(t){var e,s;this.activeMode=t,(e=this.root)==null||e.querySelectorAll("[data-pattern-panel]").forEach(a=>{a.hidden=a.dataset.patternPanel!==t}),(s=this.root)==null||s.querySelectorAll("[data-pattern-mode]").forEach(a=>{const i=a.dataset.patternMode===t;a.classList.toggle("is-active",i),a.setAttribute("aria-selected",String(i)),a.tabIndex=i?0:-1}),t==="anomaly"&&requestAnimationFrame(()=>this.drawAnomalies())}refreshSuspectOptions(){var e;const t=(e=this.root)==null?void 0:e.querySelector("[data-suspect-select]");t&&(t.innerHTML=this.preset.points.map(s=>`<option value="${s.id}">${he(s)}</option>`).join(""))}toggleGuess(t){this.revealed||(this.guesses.has(t)?this.guesses.delete(t):this.guesses.size<this.preset.points.filter(e=>e.isAnomaly).length&&this.guesses.add(t),this.updateAnomalies())}guessAt(t,e){if(!this.canvas||this.revealed||this.activeMode!=="anomaly")return;const s=this.canvas.getBoundingClientRect(),a=s.width,i=s.height,n=t-s.left,o=e-s.top;let r;this.preset.points.forEach(l=>{const[c,p]=M({x:l.x,y:1-l.y},a,i,30),h=Math.hypot(n-c,o-p);(!r||h<r.distance)&&(r={point:l,distance:h})}),r&&r.distance<=19&&this.toggleGuess(r.point.id)}updateAnomalies(){var c,p,h;const t=de(this.preset.points,this.neighbours),e=this.preset.points.filter(u=>u.isAnomaly).length,s=t.slice(0,e),a=this.preset.points.filter(u=>u.isAnomaly&&this.guesses.has(u.id)).length,i=s.filter(u=>u.isAnomaly).length,n=(u,g)=>{var b;const v=(b=this.root)==null?void 0:b.querySelector(u);v&&(v.textContent=String(g))};n("[data-neighbour-output]",this.neighbours),n("[data-algorithm-hit-label]",`${this.neighbours}-NN találat`),n("[data-anomaly-summary]",`${this.preset.points.length} szintetikus tranzakció · ${this.guesses.size}/${e} tipp kijelölve.`),n("[data-human-hits]",this.revealed?`${a}/${e}`:"—"),n("[data-algorithm-hits]",this.revealed?`${i}/${e}`:"—");const o=(c=this.root)==null?void 0:c.querySelector("[data-reveal-legend]");o&&(o.hidden=!this.revealed);const r=(p=this.root)==null?void 0:p.querySelector("[data-anomaly-observation]");r&&(this.revealed?r.innerHTML=`<p class="control-label">Eredmény</p><strong>Te: ${a}/${e} · ${this.neighbours}-NN: ${i}/${e}</strong><p>A kék sorszámok a távolságpontszám szerinti első öt helyet mutatják. A sáfrányszín a beépített anomáliákat jelöli.</p>`:this.guesses.size===e?r.innerHTML='<p class="control-label">Tipp kész</p><strong>Öt pont kijelölve.</strong><p>Most fedd fel a pontszámokat, vagy kattints egy jelölt pontra a visszavonáshoz.</p>':r.innerHTML=`<p class="control-label">Saját becslés</p><strong>Még ${e-this.guesses.size} pontot jelölhetsz.</strong><p>A sűrű csoportoktól való távolság csak egy lehetséges jel.</p>`);const l=(h=this.root)==null?void 0:h.querySelector("[data-anomaly-ranking]");l&&(this.revealed?l.innerHTML=`<div class="anomaly-ranking-heading"><div><p class="control-label">${this.neighbours}-NN átlagtávolság</p><h3>Az első öt hely</h3></div><p>Nagyobb pontszám: távolabbi szomszédok.</p></div>
          <ol class="anomaly-rank-list">${s.map(u=>`
            <li data-anomaly-rank="${u.rank}" class="${u.isAnomaly?"is-true-anomaly":"is-ordinary"}">
              <span>${String(u.rank).padStart(2,"0")}</span><strong>${u.id}</strong><small>${u.score.toFixed(3).replace(".",",")}</small>
              <em>${u.isAnomaly?"beépített anomália":"szokásos pont"}${this.guesses.has(u.id)?" · saját tipp":""}</em>
            </li>`).join("")}</ol>`:l.innerHTML=`<div class="anomaly-ranking-placeholder"><strong>A rangsor még rejtve van.</strong><p>A módszer minden pontnál a ${this.neighbours} legközelebbi szomszéd átlagtávolságát számítja.</p></div>`),this.drawAnomalies(t)}drawAnomalies(t=de(this.preset.points,this.neighbours)){if(!this.canvas||this.activeMode!=="anomaly")return;const e=this.canvas.getContext("2d");if(!e)return;const{width:s,height:a}=P(this.canvas);e.clearRect(0,0,s,a),e.fillStyle="#f4f1e8",e.fillRect(0,0,s,a),B(e,s,a,30);const i=this.preset.points.filter(o=>o.isAnomaly).length,n=new Map(t.map(o=>[o.id,o.rank]));this.preset.points.forEach(o=>{const[r,l]=M({x:o.x,y:1-o.y},s,a,30),c=n.get(o.id)??t.length;e.save(),e.beginPath(),e.arc(r,l,this.revealed&&o.isAnomaly?6:3.8,0,Math.PI*2),e.fillStyle=this.revealed&&o.isAnomaly?"#f2c14e":"rgba(18, 32, 63, 0.72)",e.fill(),e.strokeStyle=this.revealed&&o.isAnomaly?"#12203f":"rgba(18, 32, 63, 0.25)",e.lineWidth=this.revealed&&o.isAnomaly?1.5:1,e.stroke(),this.guesses.has(o.id)&&(e.beginPath(),e.arc(r,l,8.5,0,Math.PI*2),e.strokeStyle="#d84429",e.lineWidth=2.2,e.stroke()),this.revealed&&c<=i&&(e.beginPath(),e.rect(r-10,l-10,20,20),e.strokeStyle="#1e67b8",e.lineWidth=1.7,e.stroke(),e.fillStyle="#1e4fb5",e.font='700 10px "IBM Plex Mono", monospace',e.fillText(String(c),r+11,l-7)),e.restore()})}updateBaskets(){var o,r;const t=Js(ce,this.itemA,this.itemB),e=Rt(this.itemA),s=Rt(this.itemB),a=(l,c)=>{var h;const p=(h=this.root)==null?void 0:h.querySelector(l);p&&(p.textContent=String(c))};a("[data-rule-title]",`${e} → ${s}`),a("[data-pair-support]",It(t.jointSupport)),a("[data-confidence-ab]",It(t.confidenceAToB)),a("[data-confidence-ba]",It(t.confidenceBToA)),a("[data-pair-lift]",t.lift===null?"—":t.lift.toFixed(2).replace(".",",")),a("[data-basket-count-summary]",`${t.countBoth} közös · ${t.total} összesen`);const i=(o=this.root)==null?void 0:o.querySelector("[data-basket-grid]");i&&(i.innerHTML=ce.map(l=>{const c=l.items.includes(this.itemA),p=l.items.includes(this.itemB);return`<li class="basket-card ${c&&p?"is-joint":c?"contains-a":p?"contains-b":""}" data-basket-id="${l.id}"><span>${l.id}</span><ul>${l.items.map(u=>`<li class="${u===this.itemA||u===this.itemB?"is-selected-item":""}">${Rt(u)}</li>`).join("")}</ul></li>`}).join(""));const n=(r=this.root)==null?void 0:r.querySelector("[data-basket-observation]");if(n){const l=t.lift===null?"A lift nem számítható.":t.lift>1.05?`${s} gyakoribb a ${e} terméket tartalmazó kosarakban, mint a teljes mintában.`:t.lift<.95?`${s} ritkább a ${e} terméket tartalmazó kosarakban, mint a teljes mintában.`:"A két termék együttjárása ezen a mintán közel van a függetlenséghez.";n.innerHTML=`<p class="control-label">Leolvasás</p><strong>${t.countBoth} kosár tartalmazza mindkettőt.</strong><p>${l}</p>`}}}function ta(d,t,e){return d<=2?{title:"Alultanulásra utal.",body:"Az alacsony fokszám a látható jel alakját is csak durván követi."}:e<=t*1.9?{title:"A tanító- és validációs hiba hasonló.",body:"A két hiba között ezen a mintán nincs nagy eltérés."}:{title:"Túltanulásra utal.",body:"A tanítóhiba tovább csökken, miközben a validációs pontokon nő a hiba."}}const gt={wave:{title:"Hullámzó jel",question:"Mekkora fokszám követi a görbületet?",make:d=>ke(d)},parabola:{title:"Parabola",question:"Mikor elég a másodfok?",make:d=>Ye(d)},outlier:{title:"Kiugró pont",question:"Mennyire húzza el az illesztést?",make:d=>We(d)},custom:{title:"Saját rajz",question:"Építs adatsort üres vásznon.",make:()=>[]}};class ea{constructor(t){m(this,"context");m(this,"root");m(this,"canvas");m(this,"points",ke());m(this,"history",[]);m(this,"activePreset","wave");m(this,"degree",3);m(this,"ridge",0);m(this,"showTest",!1);m(this,"resizeObserver");this.context=t}mount(t){this.root=t,t.innerHTML=`
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
      </article>`,this.canvas=t.querySelector("canvas.data-canvas")??void 0,this.bindControls(),this.canvas&&(this.resizeObserver=new ResizeObserver(()=>this.draw()),this.resizeObserver.observe(this.canvas)),this.update()}destroy(){var t;(t=this.resizeObserver)==null||t.disconnect(),this.root=void 0,this.canvas=void 0}get trainingPoints(){return this.points.filter(t=>t.split!=="test")}get testPoints(){return this.points.filter(t=>t.split==="test")}coefficients(t=this.degree){return _t(this.trainingPoints,t,this.ridge/1e3)}bindControls(){var t,e,s,a,i,n,o;!this.root||!this.canvas||((t=this.root.querySelector("#reg-degree"))==null||t.addEventListener("input",r=>{this.degree=Number(r.target.value),this.update()}),(e=this.root.querySelector("#reg-ridge"))==null||e.addEventListener("input",r=>{this.ridge=Number(r.target.value),this.update()}),(s=this.root.querySelector("[data-show-test]"))==null||s.addEventListener("change",r=>{this.showTest=r.target.checked,this.update()}),this.root.querySelectorAll("[data-regression-preset]").forEach(r=>{r.addEventListener("click",()=>{this.activePreset=r.dataset.regressionPreset??"wave",this.loadPreset()})}),(a=this.root.querySelector("[data-action='new-sample']"))==null||a.addEventListener("click",()=>{const r=Math.floor(Math.random()*1e4);this.points=gt[this.activePreset].make(r),this.history=[],this.update()}),(i=this.root.querySelector("[data-action='reset']"))==null||i.addEventListener("click",()=>{var p,h,u;this.points=gt[this.activePreset].make(),this.history=[],this.degree=3,this.ridge=0,this.showTest=!1;const r=(p=this.root)==null?void 0:p.querySelector("#reg-degree"),l=(h=this.root)==null?void 0:h.querySelector("#reg-ridge"),c=(u=this.root)==null?void 0:u.querySelector("[data-show-test]");r&&(r.value="3"),l&&(l.value="0"),c&&(c.checked=!1),this.update()}),(n=this.root.querySelector("[data-action='undo']"))==null||n.addEventListener("click",()=>{const r=this.history.pop();r&&(this.points=r,this.update())}),(o=this.root.querySelector("[data-action='add-keyboard']"))==null||o.addEventListener("click",()=>{var c,p,h,u;const r=Number(((p=(c=this.root)==null?void 0:c.querySelector("[data-entry-x]"))==null?void 0:p.value)??0),l=Number(((u=(h=this.root)==null?void 0:h.querySelector("[data-entry-y]"))==null?void 0:u.value)??0);this.addPoint({x:Math.max(-1,Math.min(1,r)),y:Math.max(-1,Math.min(1,l)),split:"train"})}),this.canvas.addEventListener("click",r=>{var p;const l=(p=this.canvas)==null?void 0:p.getBoundingClientRect();if(!l)return;const c=24;this.addPoint({x:Math.max(-1,Math.min(1,(r.clientX-l.left-c)/Math.max(1,l.width-c*2)*2-1)),y:Math.max(-.9,Math.min(.9,.9-(r.clientY-l.top-c)/Math.max(1,l.height-c*2)*1.8)),split:"train"})}),this.root.querySelectorAll("[data-answer]").forEach(r=>{r.addEventListener("click",()=>{var p,h;const l=r.dataset.answer==="right";(p=this.root)==null||p.querySelectorAll("[data-answer]").forEach(u=>u.classList.remove("is-correct","is-wrong")),r.classList.add(l?"is-correct":"is-wrong");const c=(h=this.root)==null?void 0:h.querySelector("[data-quiz-feedback]");c&&(c.textContent=l?"Helyes. A csökkenő tanítóhiba és a növekvő validációs hiba túltanulásra utal. A modult teljesítetted.":"Hasonlítsd össze a két hibagörbe irányát."),l&&this.context.onComplete()})}))}loadPreset(){var e;this.points=gt[this.activePreset].make(),this.history=[],this.showTest=!1;const t=(e=this.root)==null?void 0:e.querySelector("[data-show-test]");t&&(t.checked=!1),this.update()}addPoint(t){this.points.length>=80||(this.history.push(this.points.map(e=>({...e}))),this.points.push(t),this.update())}update(){var r,l,c,p,h;const t=this.coefficients(),e=rt(this.trainingPoints,t),s=rt(this.testPoints,t),a=this.trainingPoints.length<2?{title:"Rajzolj legalább két tanítópontot.",body:"A polinom illesztéséhez több, eltérő x koordinátájú megfigyelés szükséges."}:this.showTest&&this.testPoints.length===0?{title:"Ehhez az adatsorhoz nincs félretett pont.",body:"A Saját rajz minden új pontját tanítópontként kezeli."}:this.showTest?ta(this.degree,e,s):{title:"A validációs pontok rejtve vannak.",body:"A tanítóhiba önmagában nem mutatja meg, hogyan viselkedik a modell a félretett pontokon."},i=(u,g)=>{var b;const v=(b=this.root)==null?void 0:b.querySelector(u);v&&(v.textContent=g)};i("[data-degree-output]",String(this.degree)),i("[data-ridge-output]",this.ridge===0?"0":(this.ridge/1e3).toFixed(3)),i("[data-train-error]",this.trainingPoints.length>0?e.toFixed(3):"—"),i("[data-test-error]",this.showTest?this.testPoints.length>0?s.toFixed(3):"—":"rejtve"),i("[data-summary]",`${this.trainingPoints.length} tanítópont${this.showTest?` · ${this.testPoints.length} validációs pont`:" · a validációs pontok rejtve"}. A függőleges szárak a reziduumokat mutatják.`);const n=(r=this.root)==null?void 0:r.querySelector("[data-observation]");n&&(n.innerHTML=`<p class="control-label">Aktuális eredmény</p><strong>${a.title}</strong><p>${a.body}</p>`),(c=(l=this.root)==null?void 0:l.querySelector(".test-metric"))==null||c.classList.toggle("is-revealed",this.showTest),(p=this.root)==null||p.querySelectorAll("[data-regression-preset]").forEach(u=>{const g=u.dataset.regressionPreset===this.activePreset;u.classList.toggle("is-active",g),u.setAttribute("aria-pressed",String(g))});const o=(h=this.root)==null?void 0:h.querySelector("[data-action='new-sample']");o&&(o.disabled=this.activePreset==="custom"),this.updateChart(),this.draw()}updateChart(){var o,r;if(!this.root)return;const t=Array.from({length:12},(l,c)=>{const p=_t(this.trainingPoints,c+1,this.ridge/1e3);return{train:rt(this.trainingPoints,p),test:rt(this.testPoints,p)}}),e=this.showTest?t.flatMap(l=>[l.train,l.test]):t.map(l=>l.train),s=Math.max(.03,...e.filter(Number.isFinite)),a=l=>t.map((c,p)=>{const h=24+p/11*484,g=98-Math.min(1,c[l]/s)*78;return`${p===0?"M":"L"}${h.toFixed(1)} ${g.toFixed(1)}`}).join(" ");(o=this.root.querySelector("[data-train-path]"))==null||o.setAttribute("d",a("train"));const i=this.root.querySelector("[data-test-path]");i==null||i.setAttribute("d",a("test")),i==null||i.toggleAttribute("hidden",!this.showTest),(r=this.root.querySelector("[data-test-key]"))==null||r.toggleAttribute("hidden",!this.showTest);const n=this.root.querySelector("[data-chart-marker]");if(n){const l=24+(this.degree-1)/11*484;n.setAttribute("x1",String(l)),n.setAttribute("x2",String(l))}}draw(){if(!this.canvas)return;const t=this.canvas.getContext("2d");if(!t)return;const{width:e,height:s}=P(this.canvas);t.clearRect(0,0,e,s),t.fillStyle="#f4f1e8",t.fillRect(0,0,e,s),B(t,e,s,24);const a=o=>24+(o+1)/2*(e-48),i=o=>24+(.9-o)/1.8*(s-48),n=this.coefficients();t.save(),t.strokeStyle="rgba(224, 69, 42, .34)",t.lineWidth=1,this.trainingPoints.forEach(o=>{const r=Bt(n,o.x);t.beginPath(),t.moveTo(a(o.x),i(o.y)),t.lineTo(a(o.x),i(r)),t.stroke()}),t.restore(),t.save(),t.beginPath();for(let o=0;o<=260;o+=1){const r=-1+o/260*2,l=Bt(n,r);!Number.isFinite(l)||Math.abs(l)>3||(o===0?t.moveTo(a(r),i(l)):t.lineTo(a(r),i(l)))}t.strokeStyle="#1e4fb5",t.lineWidth=3,t.stroke(),t.restore(),this.trainingPoints.forEach(o=>{t.beginPath(),t.arc(a(o.x),i(o.y),4.6,0,Math.PI*2),t.fillStyle="#d84429",t.fill(),t.strokeStyle="#f4f1e8",t.lineWidth=1.5,t.stroke()}),this.showTest&&this.testPoints.forEach(o=>{const r=a(o.x),l=i(o.y);t.save(),t.translate(r,l),t.rotate(Math.PI/4),t.fillStyle="#f4f1e8",t.strokeStyle="#1e4fb5",t.lineWidth=2,t.fillRect(-4.5,-4.5,9,9),t.strokeRect(-4.5,-4.5,9,9),t.restore()})}}const Ut=3.25,H=[{id:"csendes-palya",code:"F1",title:"Csendes pálya",description:"lassú sci-fi",factors:[-.86,.68],bias:.1},{id:"varosi-zaj",code:"F2",title:"Városi zaj",description:"pörgős dráma",factors:[.78,.72],bias:-.1},{id:"papirhid",code:"F3",title:"Papírhíd",description:"csendes dráma",factors:[-.62,-.58],bias:.18},{id:"nulladik-kijarat",code:"F4",title:"Nulladik kijárat",description:"abszurd thriller",factors:[.9,-.28],bias:.04},{id:"kisbolygo-kert",code:"F5",title:"Kisbolygó-kert",description:"derűs animáció",factors:[-.22,.94],bias:.24},{id:"ejjeli-muszak",code:"F6",title:"Éjjeli műszak",description:"sötét krimi",factors:[.56,-.82],bias:-.08},{id:"masodik-part",code:"F7",title:"A második part",description:"elmélkedő kaland",factors:[-.94,-.1],bias:.02},{id:"tizenket-perc",code:"F8",title:"Tizenkét perc",description:"feszes vígjáték",factors:[.36,.34],bias:.14}],pe=[{id:"profile-a",label:"A",factors:[-.78,.56],bias:.12,observedItemIds:["csendes-palya","varosi-zaj","papirhid","kisbolygo-kert","masodik-part"]},{id:"profile-b",label:"B",factors:[.72,.66],bias:-.06,observedItemIds:["varosi-zaj","nulladik-kijarat","kisbolygo-kert","ejjeli-muszak","tizenket-perc"]},{id:"profile-c",label:"C",factors:[-.18,-.88],bias:.18,observedItemIds:["csendes-palya","papirhid","nulladik-kijarat","ejjeli-muszak","masodik-part"]},{id:"profile-d",label:"D",factors:[.86,-.46],bias:-.12,observedItemIds:["varosi-zaj","papirhid","kisbolygo-kert","masodik-part","tizenket-perc"]}];function Gt(d){return Math.max(1,Math.min(5,d))}function $e(d,t){const e=d[t];return typeof e=="number"&&Number.isFinite(e)?Gt(e):void 0}function sa(d,t){const e=d.map((s,a)=>[...s,t[a]]);for(let s=0;s<3;s+=1){let a=s;for(let n=s+1;n<3;n+=1)Math.abs(e[n][s])>Math.abs(e[a][s])&&(a=n);[e[s],e[a]]=[e[a],e[s]];const i=e[s][s];if(!Number.isFinite(i)||Math.abs(i)<1e-12)return[0,0,0];for(let n=s;n<4;n+=1)e[s][n]/=i;for(let n=0;n<3;n+=1){if(n===s)continue;const o=e[n][s];for(let r=s;r<4;r+=1)e[n][r]-=o*e[s][r]}}return[e[0][3],e[1][3],e[2][3]]}function aa(d,t=H,e=.8){const s=t.flatMap(h=>{const u=$e(d,h.id);return u===void 0?[]:[{item:h,rating:u}]});if(s.length===0)return{bias:0,factors:[0,0],observedCount:0,trainingRmse:null,state:"cold"};const a=Number.isFinite(e)?Math.max(0,e):.8,i=Array.from({length:3},()=>Array(3).fill(0)),n=Array(3).fill(0);s.forEach(({item:h,rating:u})=>{const g=[1,h.factors[0],h.factors[1]],v=u-Ut-h.bias;for(let b=0;b<3;b+=1){n[b]+=g[b]*v;for(let k=0;k<3;k+=1)i[b][k]+=g[b]*g[k]}}),i[0][0]+=a*.25,i[1][1]+=a,i[2][2]+=a;const[o,r,l]=sa(i,n),c={bias:o,factors:[r,l],observedCount:s.length,trainingRmse:null,state:s.length<3?"provisional":"personalized"},p=s.reduce((h,{item:u,rating:g})=>{const v=g-Pe(c,u);return h+v*v},0);return c.trainingRmse=Math.sqrt(p/s.length),c}function Pe(d,t){return Ut+t.bias+d.bias+d.factors[0]*t.factors[0]+d.factors[1]*t.factors[1]}function zt(d,t){return Gt(Pe(d,t))}function ia(d,t,e=H){return e.filter(s=>$e(t,s.id)===void 0).map(s=>{const a=Gt(Ut+s.bias),i=zt(d,s);return{item:s,score:i,baseline:a,personalizedShift:i-a}}).sort((s,a)=>a.score-s.score||s.item.title.localeCompare(a.item.title,"hu"))}function na(d,t){return d.observedItemIds.includes(t.id)?Math.round(zt(d,t)):null}const oa=[1,2,3,4,5];function q(d){return d.replace(/[&<>'"]/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;","'":"&#39;",'"':"&quot;"})[t]??t)}function V(d,t=2){return new Intl.NumberFormat("hu-HU",{minimumFractionDigits:t,maximumFractionDigits:t}).format(d)}function ue(d){return d.state==="cold"?{label:"Hidegindítás",text:"Még nincs értékelés. A lista csak a filmek szintetikus alapszintjét használja; nem személyre szabott."}:d.state==="provisional"?{label:"Kevés adat",text:`${d.observedCount} értékelésből már becsülhető vektor, de az eredmény erősen regularizált. Három értékeléstől váltunk személyre szabott állapotra.`}:{label:"Személyre szabott",text:`${d.observedCount} értékelésből illesztettük a kétdimenziós ízlésvektort. A sorrend továbbra is modellbecslés.`}}class ra{constructor(t){m(this,"context");m(this,"root");m(this,"canvas");m(this,"resizeObserver");m(this,"ratings",{});m(this,"onClick",t=>{var i;const e=t.target.closest("button");if(!e||!((i=this.root)!=null&&i.contains(e)))return;const s=e.dataset.itemId,a=Number(e.dataset.rating);if(s&&Number.isInteger(a)&&a>=1&&a<=5){this.ratings[s]=a;const n=H.find(o=>o.id===s);this.announce(`${(n==null?void 0:n.title)??"A film"}: ${a} csillag.`),this.update();return}if(e.dataset.action==="clear-rating"&&s){delete this.ratings[s];const n=H.find(o=>o.id===s);this.announce(`${(n==null?void 0:n.title)??"A film"} értékelését törölted.`),this.update();return}if(e.dataset.action==="reset"){this.ratings={},this.announce("Az összes értékelést törölted. A modell hidegindítási állapotban van."),this.update();return}if(e.dataset.action==="load-example"){this.ratings={"csendes-palya":5,"varosi-zaj":2,papirhid:4,"ejjeli-muszak":1},this.announce("Négy fiktív mintaértékelést betöltöttél."),this.update();return}e.dataset.answer&&this.answerQuiz(e)});this.context=t}mount(t){this.root=t,t.innerHTML=`
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
                ${H.map(e=>`
                  <article class="rating-card" data-rating-item="${e.id}">
                    <header><span class="item-code">${e.code}</span><div><h4>${q(e.title)}</h4><p>${q(e.description)}</p></div></header>
                    <div class="star-picker" role="group" aria-label="${q(e.title)} értékelése">
                      ${oa.map(s=>`<button type="button" data-item-id="${e.id}" data-rating="${s}" aria-label="${s} csillag" aria-pressed="false"><span aria-hidden="true">★</span></button>`).join("")}
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
      </article>`,this.canvas=t.querySelector("canvas.recommender-canvas")??void 0,t.addEventListener("click",this.onClick),this.canvas&&(this.resizeObserver=new ResizeObserver(()=>this.update()),this.resizeObserver.observe(this.canvas)),this.update()}destroy(){var t,e;(t=this.root)==null||t.removeEventListener("click",this.onClick),(e=this.resizeObserver)==null||e.disconnect(),this.root=void 0,this.canvas=void 0}update(){var o;if(!this.root)return;const t=aa(this.ratings),e=ia(t,this.ratings),s=ue(t),a=(r,l)=>{var p;const c=(p=this.root)==null?void 0:p.querySelector(r);c&&(c.textContent=l)};a("[data-rating-progress]",`${t.observedCount} / 8`),a("[data-rating-count]",`${t.observedCount} / 8`),a("[data-training-rmse]",t.trainingRmse===null?"—":V(t.trainingRmse)),a("[data-state-label]",s.label),a("[data-state-copy]",s.text),a("[data-latent-vector]",`p = (${V(t.factors[0])}; ${V(t.factors[1])})`);const i=this.root.querySelector("[data-profile-status]");i&&(i.dataset.state=t.state);const n=(o=e[0])==null?void 0:o.item.id;this.root.querySelectorAll("[data-rating-item]").forEach(r=>{const l=r.dataset.ratingItem??"",c=this.ratings[l];r.classList.toggle("is-rated",c!==void 0),r.classList.toggle("is-top-recommendation",c===void 0&&l===n),r.querySelectorAll("[data-rating]").forEach(h=>{const u=Number(h.dataset.rating);h.classList.toggle("is-filled",c!==void 0&&u<=c),h.classList.toggle("is-selected",u===c),h.setAttribute("aria-pressed",String(u===c))});const p=r.querySelector("[data-action='clear-rating']");p&&(p.disabled=c===void 0)}),this.renderRecommendations(t,e),this.renderMatrix(t),this.draw(t,e)}renderRecommendations(t,e){var i;const s=(i=this.root)==null?void 0:i.querySelector("[data-recommendations]");if(!s)return;if(e.length===0){s.innerHTML='<p class="recommendation-empty">Mind a nyolc filmet értékelted. Törölj egy értékelést, hogy ismét legyen becsülendő cella.</p>';return}const a=t.state==="cold"?"Nem személyre szabott alaplista":t.state==="provisional"?"Ideiglenes sorrend":"Személyre szabott sorrend";s.innerHTML=`
      <p class="recommendation-mode">${a}</p>
      <ol class="recommendation-list">
        ${e.map((n,o)=>{const r=n.personalizedShift,l=t.state==="cold"?"csak elemalapszint":Math.abs(r)<.01?"az alapszint közelében":`${r>0?"+":""}${V(r)} az alapszinthez képest`;return`<li class="${o===0?"is-first":""}">
            <span class="recommendation-rank">${String(o+1).padStart(2,"0")}</span>
            <div><strong>${q(n.item.title)}</strong><small>${l}</small><span class="score-bar" aria-hidden="true"><i style="width:${n.score/5*100}%"></i></span></div>
            <output aria-label="${q(n.item.title)} becsült értékelése">${V(n.score,1)}</output>
          </li>`}).join("")}
      </ol>`}renderMatrix(t){var i;const e=(i=this.root)==null?void 0:i.querySelector("[data-rating-matrix]");if(!e)return;const s=pe.map(n=>`
      <tr>
        <th scope="row"><span class="matrix-profile-mark">${n.label}</span><span>Fiktív ${n.label}</span></th>
        ${H.map(o=>{const r=na(n,o);return r===null?`<td class="is-missing" aria-label="${q(o.title)}: hiányzó">·</td>`:`<td class="is-observed" aria-label="${q(o.title)}: ${r} csillag"><strong>${r}</strong><small>★</small></td>`}).join("")}
      </tr>`).join(""),a=H.map(n=>{const o=this.ratings[n.id];return o===void 0?`<td class="is-predicted" aria-label="${q(n.title)}: ${V(zt(t,n),1)} becsült"><strong>≈${V(zt(t,n),1)}</strong></td>`:`<td class="is-observed is-yours" aria-label="${q(n.title)}: ${o} csillag, megfigyelt"><strong>${o}</strong><small>★</small></td>`}).join("");e.innerHTML=`
      <table class="rating-matrix-table">
        <caption class="visually-hidden">Négy szintetikus profil részleges értékelései, valamint a saját megfigyelt és becsült értékeléseid.</caption>
        <thead><tr><th scope="col">Profil</th>${H.map(n=>`<th scope="col"><abbr title="${q(n.title)}">${n.code}</abbr></th>`).join("")}</tr></thead>
        <tbody>${s}<tr class="personal-matrix-row"><th scope="row"><span class="matrix-profile-mark is-you">T</span><span>Te</span></th>${a}</tr></tbody>
      </table>`}draw(t,e){if(!this.canvas)return;const s=this.canvas.getContext("2d");if(!s)return;const{width:a,height:i}=P(this.canvas);s.clearRect(0,0,a,i),s.fillStyle="#f4f1e8",s.fillRect(0,0,a,i);const n=Math.min(42,Math.max(28,a*.07));B(s,a,i,n);const o=1.25,r=h=>n+(Math.max(-o,Math.min(o,h))+o)/(o*2)*(a-n*2),l=h=>i-n-(Math.max(-o,Math.min(o,h))+o)/(o*2)*(i-n*2);s.save(),s.strokeStyle="rgba(18, 32, 63, .28)",s.lineWidth=1,s.beginPath(),s.moveTo(r(0),n),s.lineTo(r(0),i-n),s.moveTo(n,l(0)),s.lineTo(a-n,l(0)),s.stroke(),s.fillStyle="rgba(18, 32, 63, .68)",s.font="11px 'IBM Plex Mono', monospace",s.fillText("L2",r(0)+6,n+12),s.textAlign="right",s.fillText("L1",a-n-4,l(0)-7),s.restore(),pe.forEach(h=>{const u=r(h.factors[0]),g=l(h.factors[1]);s.save(),s.strokeStyle="rgba(18, 32, 63, .46)",s.lineWidth=1.6,s.beginPath(),s.moveTo(u-4,g-4),s.lineTo(u+4,g+4),s.moveTo(u+4,g-4),s.lineTo(u-4,g+4),s.stroke(),s.fillStyle="rgba(18, 32, 63, .62)",s.font="10px 'IBM Plex Mono', monospace",s.fillText(h.label,u+7,g-6),s.restore()});const c=new Map(e.map((h,u)=>[h.item.id,u]));if(H.forEach(h=>this.drawItem(s,h,a,r,l,c)),t.state!=="cold"){const h=r(t.factors[0]),u=l(t.factors[1]);s.save(),s.shadowColor="rgba(216, 68, 41, .32)",s.shadowBlur=12,s.beginPath(),s.arc(h,u,9,0,Math.PI*2),s.fillStyle="#f4f1e8",s.fill(),s.shadowBlur=0,s.strokeStyle="#d84429",s.lineWidth=2.5,s.stroke(),s.beginPath(),s.arc(h,u,2.7,0,Math.PI*2),s.fillStyle="#d84429",s.fill(),s.fillStyle="#12203f",s.font="600 11px 'IBM Plex Sans', sans-serif",s.fillText("Te",h+13,u+4),s.restore()}else{const h=r(0),u=l(0);s.save(),s.setLineDash([3,4]),s.strokeStyle="rgba(216, 68, 41, .62)",s.lineWidth=1.5,s.beginPath(),s.arc(h,u,8,0,Math.PI*2),s.stroke(),s.setLineDash([]),s.fillStyle="rgba(18, 32, 63, .72)",s.font="11px 'IBM Plex Sans', sans-serif",s.fillText("Te · még nincs becslés",h+13,u+4),s.restore()}const p=ue(t).label;this.canvas.setAttribute("aria-label",`Kétdimenziós látens tér nyolc fiktív filmmel és négy szintetikus háttérprofillal. Saját profil: ${p}.`)}drawItem(t,e,s,a,i,n){const o=a(e.factors[0]),r=i(e.factors[1]),l=this.ratings[e.id]!==void 0,p=n.get(e.id)===0,h=p?8:6;t.save(),p&&(t.shadowColor="rgba(216, 68, 41, .38)",t.shadowBlur=14),t.beginPath(),t.arc(o,r,h,0,Math.PI*2),t.fillStyle=l?"#12203f":p?"#d84429":"#1e67b8",t.fill(),t.shadowBlur=0,t.strokeStyle="#f4f1e8",t.lineWidth=2,t.stroke(),t.fillStyle="#12203f",t.font=`${p?"600 ":""}10px 'IBM Plex Mono', monospace`;const u=o>s*.62;t.textAlign=u?"right":"left",t.fillText(e.code,o+(u?-11:11),r+3),t.restore()}answerQuiz(t){var a,i;const e=t.dataset.answer==="right";(a=this.root)==null||a.querySelectorAll("[data-answer]").forEach(n=>n.classList.remove("is-correct","is-wrong")),t.classList.add(e?"is-correct":"is-wrong");const s=(i=this.root)==null?void 0:i.querySelector("[data-quiz-feedback]");s&&(s.textContent=e?"Helyes. A becslés a modell feltételei mellett várható érték, nem biztos felhasználói reakció. A modult teljesítetted.":"A becslés a megfigyelt mintából és a faktormodellből származik; nem garantált eredmény."),e&&this.context.onComplete()}announce(t){var s;const e=(s=this.root)==null?void 0:s.querySelector("[data-recommender-announcement]");e&&(e.textContent=t)}}const Ht=[10,8,13,9,11,14,6,4,12,7,5];function vt(d,t){return d.map((e,s)=>({x:e,y:t[s]}))}const bt=[{id:"I",title:"Közel lineáris",prompt:"A regressziós egyenes itt hihető összegzés.",points:vt(Ht,[8.04,6.95,7.58,8.81,8.33,9.96,7.24,4.26,10.84,4.82,5.68])},{id:"II",title:"Görbült",prompt:"A korreláció nem mutatja meg a görbületet.",points:vt(Ht,[9.14,8.14,8.74,8.77,9.26,8.1,6.13,3.1,9.13,7.26,4.74])},{id:"III",title:"Egy kiugró érték",prompt:"Egyetlen pont húzza a meredekséget.",points:vt(Ht,[7.46,6.77,12.74,7.11,7.81,8.84,6.08,5.39,8.15,6.42,5.73])},{id:"IV",title:"Függőleges sor",prompt:"A legtöbb x azonos; egy pont tartja a korrelációt.",points:vt([8,8,8,8,8,8,8,19,8,8,8],[6.58,5.76,7.71,8.84,8.47,7.04,5.25,12.5,5.56,7.91,6.89])}];function me(d){return d.length===0?Number.NaN:d.reduce((t,e)=>t+e,0)/d.length}function ge(d){const t=d.length;if(t===0)return{count:t,meanX:Number.NaN,meanY:Number.NaN,sampleStandardDeviationX:Number.NaN,sampleStandardDeviationY:Number.NaN,correlation:null,slope:null,intercept:null};const e=me(d.map(g=>g.x)),s=me(d.map(g=>g.y)),a=d.reduce((g,v)=>g+(v.x-e)**2,0),i=d.reduce((g,v)=>g+(v.y-s)**2,0),n=d.reduce((g,v)=>g+(v.x-e)*(v.y-s),0),o=Math.max(1,t-1),r=Math.sqrt(a/o),l=Math.sqrt(i/o),c=Math.sqrt(a*i),p=c===0?null:n/c,h=a===0?null:n/a,u=h===null?null:s-h*e;return{count:t,meanX:e,meanY:s,sampleStandardDeviationX:r,sampleStandardDeviationY:l,correlation:p,slope:h,intercept:u}}function R(d,t=2){return d===null||!Number.isFinite(d)?"—":d.toFixed(t).replace(".",",")}class la{constructor(t){m(this,"context");m(this,"root");m(this,"canvas");m(this,"resizeObserver");m(this,"dataset",bt[0]);m(this,"chartMode","scatter");m(this,"compareAll",!1);m(this,"hoveredIndex",-1);this.context=t}mount(t){this.root=t,t.innerHTML=`
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
      </article>`,this.canvas=t.querySelector("[data-viz-canvas]")??void 0,this.bindControls(),this.canvas&&(this.resizeObserver=new ResizeObserver(()=>this.draw()),this.resizeObserver.observe(this.canvas)),this.update()}destroy(){var t;(t=this.resizeObserver)==null||t.disconnect(),this.root=void 0,this.canvas=void 0}bindControls(){var t,e,s;this.root&&(this.root.querySelectorAll("[data-viz-dataset]").forEach(a=>{a.addEventListener("click",()=>{var n;const i=bt.find(o=>o.id===a.dataset.vizDataset);i&&(this.dataset=i,this.compareAll=!1,this.hoveredIndex=-1,(n=this.root)==null||n.querySelectorAll("[data-viz-dataset]").forEach(o=>{const r=o===a;o.classList.toggle("is-active",r),o.setAttribute("aria-pressed",String(r))}),this.update())})}),this.root.querySelectorAll("[data-viz-mode]").forEach(a=>{a.addEventListener("click",()=>{var i;this.chartMode=a.dataset.vizMode==="connected"?"connected":"scatter",this.compareAll=!1,(i=this.root)==null||i.querySelectorAll("[data-viz-mode]").forEach(n=>{const o=n===a;n.classList.toggle("is-active",o),n.setAttribute("aria-pressed",String(o))}),this.update()})}),(t=this.root.querySelector("[data-action='compare']"))==null||t.addEventListener("click",()=>{this.compareAll=!this.compareAll,this.hoveredIndex=-1,this.update()}),(e=this.canvas)==null||e.addEventListener("pointermove",a=>this.onPointerMove(a)),(s=this.canvas)==null||s.addEventListener("pointerleave",()=>{this.hoveredIndex=-1,this.updateHoverText(),this.draw()}),this.root.querySelectorAll("[data-answer]").forEach(a=>{a.addEventListener("click",()=>{var o,r;const i=a.dataset.answer==="right";(o=this.root)==null||o.querySelectorAll("[data-answer]").forEach(l=>l.classList.remove("is-correct","is-wrong")),a.classList.add(i?"is-correct":"is-wrong");const n=(r=this.root)==null?void 0:r.querySelector("[data-quiz-feedback]");n&&(n.textContent=i?"Helyes. Az összegző számok mellé az eloszlás alakja is kell. A modult teljesítetted.":"Nézd meg egyszerre a négy pontábrát: a számok hasonlók, az alakok nem."),i&&this.context.onComplete()})}))}update(){var i,n,o;const t=ge(this.dataset.points),e=(r,l)=>{var p;const c=(p=this.root)==null?void 0:p.querySelector(r);c&&(c.textContent=l)};e("[data-mean-x]",R(t.meanX)),e("[data-mean-y]",R(t.meanY)),e("[data-sd-x]",R(t.sampleStandardDeviationX)),e("[data-sd-y]",R(t.sampleStandardDeviationY)),e("[data-correlation]",R(t.correlation,3)),e("[data-regression]",t.slope===null||t.intercept===null?"—":`ŷ = ${R(t.intercept,1)} + ${R(t.slope,2)}x`),e("[data-summary]",this.compareAll?"Négy különböző alak · közel azonos átlag, szórás, korreláció és regressziós egyenes.":`${this.dataset.id}. adathalmaz · ${this.dataset.points.length} pont · ${this.chartMode==="scatter"?"pontábra":"tárolási sorrendben összekötve"}.`);const s=(i=this.root)==null?void 0:i.querySelector("[data-observation]");s&&(s.innerHTML=this.compareAll?'<p class="control-label">Együttes nézet</p><strong>A számok nem azonosítják az alakot.</strong><p>A négy pontfelhő más ellenőrzést vagy modellt indokol.</p>':`<p class="control-label">${this.dataset.id}. adathalmaz</p><strong>${this.dataset.title}</strong><p>${this.dataset.prompt}</p>`);const a=(n=this.root)==null?void 0:n.querySelector("[data-action='compare']");a&&(a.textContent=this.compareAll?"Kiválasztott nézet":"Mind a négy",a.setAttribute("aria-pressed",String(this.compareAll))),(o=this.canvas)==null||o.setAttribute("aria-label",this.compareAll?"Az Anscombe-kvartett négy pontábrája egymás mellett":`Az Anscombe-kvartett ${this.dataset.id}. adathalmazának ${this.chartMode==="scatter"?"pontábrája":"összekötött ábrája"}`),this.updateHoverText(),this.draw()}updateHoverText(){var s;const t=(s=this.root)==null?void 0:s.querySelector("[data-hover]");if(!t)return;const e=this.dataset.points[this.hoveredIndex];t.textContent=e&&!this.compareAll?`Kijelölt pont: x = ${R(e.x,0)}, y = ${R(e.y,2)}.`:"Mutass egy pontra a koordinátáihoz."}onPointerMove(t){if(!this.canvas||this.compareAll)return;const e=this.canvas.getBoundingClientRect(),s=e.width,a=e.height,i=this.dataset.points.map(r=>this.mapPoint(r,{x:40,y:22,width:s-60,height:a-58}));let n=-1,o=12;i.forEach(([r,l],c)=>{const p=Math.hypot(t.clientX-e.left-r,t.clientY-e.top-l);p<o&&(n=c,o=p)}),n!==this.hoveredIndex&&(this.hoveredIndex=n,this.updateHoverText(),this.draw())}draw(){if(!this.canvas)return;const t=this.canvas.getContext("2d");if(!t)return;const{width:e,height:s}=P(this.canvas);if(t.clearRect(0,0,e,s),t.fillStyle="#f4f1e8",t.fillRect(0,0,e,s),this.compareAll){const i=(e-42)/2,n=(s-42)/2;bt.forEach((o,r)=>{const l=r%2,c=Math.floor(r/2);this.drawPlot(t,o,{x:14+l*(i+14),y:14+c*(n+14),width:i,height:n},!1,o.id)})}else this.drawPlot(t,this.dataset,{x:18,y:12,width:e-36,height:s-24},!0)}drawPlot(t,e,s,a,i){const n={x:s.x+(a?34:22),y:s.y+(a?12:20),width:s.width-(a?48:32),height:s.height-(a?42:30)};t.save(),t.strokeStyle="rgba(18, 32, 63, 0.12)",t.lineWidth=1,t.setLineDash([2,5]);for(let l=0;l<=4;l+=1){const c=n.x+l/4*n.width,p=n.y+l/4*n.height;t.beginPath(),t.moveTo(c,n.y),t.lineTo(c,n.y+n.height),t.moveTo(n.x,p),t.lineTo(n.x+n.width,p),t.stroke()}t.setLineDash([]),t.strokeStyle="rgba(18, 32, 63, 0.3)",t.strokeRect(n.x+.5,n.y+.5,n.width-1,n.height-1);const o=ge(e.points);if(o.slope!==null&&o.intercept!==null){const l=this.mapPoint({x:2,y:o.intercept+o.slope*2},n),c=this.mapPoint({x:20,y:o.intercept+o.slope*20},n);t.strokeStyle="rgba(30, 79, 181, 0.56)",t.lineWidth=a?2:1.5,t.setLineDash([6,4]),t.beginPath(),t.moveTo(l[0],l[1]),t.lineTo(c[0],c[1]),t.stroke(),t.setLineDash([])}const r=e.points.map(l=>this.mapPoint(l,n));a&&this.chartMode==="connected"&&(t.strokeStyle="rgba(216, 68, 41, 0.55)",t.lineWidth=1.5,t.beginPath(),r.forEach(([l,c],p)=>p===0?t.moveTo(l,c):t.lineTo(l,c)),t.stroke()),r.forEach(([l,c],p)=>{const h=a&&p===this.hoveredIndex;t.beginPath(),t.arc(l,c,h?7:a?5:3.4,0,Math.PI*2),t.fillStyle=h?"#d84429":"#1e4fb5",t.fill(),t.strokeStyle="#f4f1e8",t.lineWidth=h?2.2:1.2,t.stroke()}),t.fillStyle="rgba(18, 32, 63, 0.62)",t.font=`${a?10:9}px "IBM Plex Mono", monospace`,a&&(t.fillText("x",n.x+n.width-4,n.y+n.height+18),t.fillText("y",n.x-18,n.y+8)),i&&(t.fillStyle="#12203f",t.font='650 11px "IBM Plex Mono", monospace',t.fillText(i,s.x+5,s.y+12)),t.restore()}mapPoint(t,e){const s=e.x+(t.x-2)/18*e.width,a=e.y+e.height-(t.y-2)/12*e.height;return[s,a]}}const Te="adatspiral-progress-v1";function da(){try{const d=JSON.parse(localStorage.getItem(Te)??"[]");return new Set(Array.isArray(d)?d.filter(t=>typeof t=="string"):[])}catch{return new Set}}class ca{constructor(t){m(this,"host");m(this,"completed",da());m(this,"home");m(this,"playground");m(this,"route","");m(this,"activeStationIndex",0);m(this,"lastModuleTrigger");m(this,"closeQuickMenu");m(this,"onHashChange",()=>{if(this.isPresentMode()){this.renderPresent();return}this.handleRoute()});this.host=t}mount(){var t;window.addEventListener("hashchange",this.onHashChange),(t=document.querySelector(".skip-link"))==null||t.addEventListener("click",e=>{const s=this.host.querySelector("[data-module-dialog]");if(s!=null&&s.open)return;e.preventDefault();const a=this.host.querySelector("#main-content");a&&(a.tabIndex=-1,a.focus())}),this.isPresentMode()?this.renderPresent():this.renderShell()}renderShell(){this.destroyViews(),document.body.classList.remove("present-mode","module-overlay-open","menu-open"),document.body.dataset.route="home",this.route=this.readRoute();const t=Q(this.route),e=t&&t.index>0?t.index-1:0;this.activeStationIndex=e,this.host.innerHTML=`${this.header()}<div id="page-root"></div>${this.quickStart()}${this.moduleDialog()}${this.toast()}`,this.bindShell();const s=this.host.querySelector("#page-root");s&&(this.home=new Ke,this.home.mount(s,this.completed,{initialIndex:e,onActiveChange:a=>{this.activeStationIndex=a}}),this.syncProgress(),window.requestAnimationFrame(()=>this.handleRoute(!0)))}renderPresent(){this.destroyViews(),document.body.classList.remove("module-overlay-open","menu-open"),document.body.classList.add("present-mode"),this.route=this.readRoute();const t=Q(this.route);document.body.dataset.route=this.route||"home",document.title=t?`${t.shortTitle} · Adatspirál`:"Adatspirál · Vetítés",this.host.innerHTML=`${this.presentHeader()}<div id="page-root"></div>${this.toast()}`;const e=this.host.querySelector("#page-root");if(!e)return;const s=this.createPlayground(this.route,!0);s?(e.innerHTML='<main id="main-content"></main>',s.mount(e.querySelector("main")),this.playground=s):this.renderUnavailable(e),this.syncProgress(),window.scrollTo({top:0,left:0,behavior:"auto"})}handleRoute(t=!1){var a;const e=this.readRoute();this.route=e;const s=Q(e);if(!e){this.closeModule(),document.title="Adatspirál · Bevezetés az adattudományba 1.",document.body.dataset.route="home";return}if(!s){this.closeModule(),this.replaceWithHomeRoute(),this.route="",document.title="Adatspirál · Bevezetés az adattudományba 1.";return}if(s.index>0&&(this.activeStationIndex=s.index-1,(a=this.home)==null||a.scrollToStation(this.activeStationIndex,"auto")),s.status!=="live"){this.closeModule(),this.replaceWithHomeRoute(),this.route="",document.title="Adatspirál · Bevezetés az adattudományba 1.";return}this.openModule(e)}openModule(t){var l,c,p;const e=this.host.querySelector("[data-module-dialog]"),s=this.host.querySelector("[data-module-host]"),a=Q(t);if(!e||!s||!a||e.open&&e.dataset.openSlug===t)return;if(!((l=this.lastModuleTrigger)!=null&&l.isConnected)){const h=document.activeElement instanceof HTMLElement?document.activeElement:void 0;this.lastModuleTrigger=h!=null&&h.matches("[data-open-station], [data-quick-open], .quick-prologue")?h:void 0}(c=this.closeQuickMenu)==null||c.call(this,!1),(p=this.playground)==null||p.destroy(),this.playground=void 0,s.innerHTML="";const i=this.createPlayground(t,!1);if(!i)return;const n=this.host.querySelector("[data-dialog-number]"),o=this.host.querySelector("[data-dialog-title]"),r=this.host.querySelector("[data-dialog-present]");n&&(n.textContent=a.index===0?"Bevezető modul":`${String(a.index).padStart(2,"0")} / 12`),o&&(o.textContent=a.shortTitle),r&&(r.href=`?mode=present#/${t}`,r.setAttribute("aria-label",`${a.shortTitle} megnyitása vetítési módban`)),i.mount(s),this.playground=i,e.dataset.openSlug=t,document.body.classList.add("module-overlay-open"),document.body.dataset.route=t,document.title=`${a.shortTitle} · Adatspirál`,e.open||e.showModal(),s.scrollTop=0,window.requestAnimationFrame(()=>o==null?void 0:o.focus({preventScroll:!0})),this.syncProgress()}closeModule(){var a,i;const t=this.host.querySelector("[data-module-dialog]"),e=this.host.querySelector("[data-module-host]"),s=!!(t!=null&&t.open);if(t!=null&&t.open&&t.close(),t&&delete t.dataset.openSlug,(a=this.playground)==null||a.destroy(),this.playground=void 0,e&&(e.innerHTML=""),document.body.classList.remove("module-overlay-open"),document.body.dataset.route="home",s){const n=this.host.querySelector(`[data-helix-preview="${this.activeStationIndex}"]:not([inert]), [data-helix-card="${this.activeStationIndex}"] [data-open-station]`),r=((i=this.lastModuleTrigger)==null?void 0:i.isConnected)&&!this.lastModuleTrigger.closest("[inert]")?this.lastModuleTrigger:n;window.requestAnimationFrame(()=>r==null?void 0:r.focus({preventScroll:!0}))}this.lastModuleTrigger=void 0}requestModuleClose(){this.replaceWithHomeRoute(),this.route="",this.closeModule(),document.title="Adatspirál · Bevezetés az adattudományba 1."}header(){return`<header class="site-header">
      <a class="wordmark" href="#/" aria-label="Bevezetés az adattudományba 1. kezdőlap">${this.logo()}<span>Bevezetés az adattudományba 1.</span></a>
      <button class="station-menu-button" type="button" aria-expanded="false" aria-controls="station-menu"><span>Gyorsindítás</span><i aria-hidden="true"></i></button>
    </header>`}presentHeader(){const t=Q(this.route);return`<header class="present-header"><a class="wordmark" href="${window.location.pathname}#/${this.route}" aria-label="Kilépés a vetítési módból">${this.logo()}<span>Bevezetés az adattudományba 1.</span></a><div><span>VETÍTÉS</span><strong>${(t==null?void 0:t.title)??"Modul"}</strong></div><a class="exit-present" href="${window.location.pathname}#/${this.route}">Kilépés</a></header>`}quickStart(){return`<div class="station-menu-backdrop" data-menu-backdrop hidden></div><aside class="station-menu quick-start" id="station-menu" role="dialog" aria-modal="true" aria-label="Gyorsindítás" aria-hidden="true" inert>
      <div class="station-menu-head"><div><small>12 téma · ${Ie.length} modul</small><strong>Gyorsindítás</strong></div><button type="button" data-close-menu aria-label="Gyorsindítás bezárása">×</button></div>
      <a class="quick-prologue" href="#/${ot.slug}"><span>00</span><span><small>Bevezető modul</small><strong>${ot.shortTitle}</strong></span><em>Megnyitás</em></a>
      <ol>${D.map((t,e)=>`<li class="quick-row ${t.status==="live"?"is-live":""}">
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
    </dialog>`}toast(){return'<div class="completion-toast" role="status" aria-live="polite" aria-hidden="true" data-completion-toast><span aria-hidden="true">✓</span><div><strong>Modul teljesítve</strong><small>A böngésző elmentette a haladást.</small></div></div>'}bindShell(){var r,l;const t=this.host.querySelector(".station-menu-button"),e=this.host.querySelector(".station-menu"),s=this.host.querySelector("[data-menu-backdrop]"),a=this.host.querySelector("#page-root"),i=this.host.querySelector(".site-header .wordmark");this.host.addEventListener("click",c=>{const p=c.target instanceof Element?c.target.closest("[data-open-station], [data-quick-open], .quick-prologue"):null;p&&(this.lastModuleTrigger=p.closest(".station-menu")?t??void 0:p)});const n=(c,p=!0)=>{var h;t==null||t.setAttribute("aria-expanded",String(c)),e==null||e.setAttribute("aria-hidden",String(!c)),e==null||e.toggleAttribute("inert",!c),e==null||e.classList.toggle("is-open",c),s&&(s.hidden=!c),document.body.classList.toggle("menu-open",c),a==null||a.toggleAttribute("inert",c),i==null||i.toggleAttribute("inert",c),c?(h=e==null?void 0:e.querySelector("[data-close-menu]"))==null||h.focus():p&&(t==null||t.focus())};this.closeQuickMenu=(c=!0)=>n(!1,c),t==null||t.addEventListener("click",()=>n(t.getAttribute("aria-expanded")!=="true")),(r=this.host.querySelector("[data-close-menu]"))==null||r.addEventListener("click",()=>n(!1)),s==null||s.addEventListener("click",()=>n(!1)),e==null||e.querySelectorAll("[data-jump-station]").forEach(c=>{c.addEventListener("click",()=>{var h;const p=Number(c.dataset.jumpStation??0);n(!1,!1),(h=this.home)==null||h.scrollToStation(p),window.setTimeout(()=>{var u;return(u=this.host.querySelector(`[data-helix-card="${p}"]`))==null?void 0:u.focus({preventScroll:!0})},520)})}),e==null||e.querySelectorAll("a[href]").forEach(c=>{c.addEventListener("click",()=>n(!1,!1))}),e==null||e.addEventListener("keydown",c=>this.trapFocus(c,e,()=>n(!1)));const o=this.host.querySelector("[data-module-dialog]");(l=this.host.querySelector("[data-close-module]"))==null||l.addEventListener("click",()=>this.requestModuleClose()),o==null||o.addEventListener("cancel",c=>{c.preventDefault(),this.requestModuleClose()}),o==null||o.addEventListener("click",c=>{c.target===o&&this.requestModuleClose()})}trapFocus(t,e,s){if(t.key==="Escape"){t.preventDefault(),s();return}if(t.key!=="Tab")return;const a=[...e.querySelectorAll("a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex='-1'])")].filter(o=>!o.hasAttribute("hidden")),i=a[0],n=a.at(-1);!i||!n||(t.shiftKey&&document.activeElement===i?(t.preventDefault(),n.focus()):!t.shiftKey&&document.activeElement===n&&(t.preventDefault(),i.focus()))}createPlayground(t,e){const s={presentMode:e,onComplete:()=>this.complete(t)};if(t===ot.slug)return new Us(s);if(t==="adat")return new ns(s);if(t==="knn")return new Cs(s);if(t==="dontesi-fa")return new ds(s);if(t==="svm")return new Rs(s);if(t==="neuralis-halok")return new Ws(s);if(t==="regresszio")return new ea(s);if(t==="kiertekeles")return new Es(s);if(t==="klaszterezes")return new Je(s);if(t==="ajanlorendszerek")return new ra(s);if(t==="dimenzio")return new fs(s);if(t==="mintazatok")return new Qs(s);if(t==="vizualizacio")return new la(s)}complete(t){if(this.completed.has(t))return;this.completed.add(t);try{localStorage.setItem(Te,JSON.stringify([...this.completed]))}catch{}this.syncProgress();const e=this.host.querySelector("[data-completion-toast]");e&&(e.setAttribute("aria-hidden","false"),e.classList.add("is-visible"),window.setTimeout(()=>{e.classList.remove("is-visible"),e.setAttribute("aria-hidden","true")},3600))}syncProgress(){this.completed.forEach(t=>{this.host.querySelectorAll(`[data-progress-slug="${t}"]`).forEach(e=>{e.textContent=e.classList.contains("helix-complete")?"Teljesítve":"Kész",e.classList.add("is-complete")})})}renderUnavailable(t){t.innerHTML=`<main id="main-content" class="unavailable-page"><p class="eyebrow">Ismeretlen modul</p><h1>Ez a modul nem érhető el.</h1><a class="button button-hand" href="${window.location.pathname}#/">Vissza a spirálhoz</a></main>`}destroyViews(){var t,e;(t=this.home)==null||t.destroy(),this.home=void 0,(e=this.playground)==null||e.destroy(),this.playground=void 0,this.closeQuickMenu=void 0}readRoute(){return window.location.hash.replace(/^#\/?/,"").split("?")[0]}isPresentMode(){return new URLSearchParams(window.location.search).get("mode")==="present"}replaceWithHomeRoute(){window.history.replaceState(null,"",`${window.location.pathname}${window.location.search}#/`)}logo(){return'<svg viewBox="0 0 32 32" aria-hidden="true"><path d="M7 8c5-5 15-4 18 1 4 7-4 15-12 14-6-1-8-7-4-10 4-4 11-1 10 4-1 3-6 4-9 1"/><circle cx="7" cy="8" r="2.2"/><circle cx="19" cy="17" r="2.2"/></svg>'}}const Ee=document.querySelector("#app");if(!Ee)throw new Error("Az alkalmazás gyökéreleme hiányzik.");new ca(Ee).mount();
