var tt=Object.defineProperty;var et=(c,t,e)=>t in c?tt(c,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):c[t]=e;var m=(c,t,e)=>et(c,typeof t!="symbol"?t+"":t,e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))a(s);new MutationObserver(s=>{for(const n of s)if(n.type==="childList")for(const l of n.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&a(l)}).observe(document,{childList:!0,subtree:!0});function e(s){const n={};return s.integrity&&(n.integrity=s.integrity),s.referrerPolicy&&(n.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?n.credentials="include":s.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function a(s){if(s.ep)return;s.ep=!0;const n=e(s);fetch(s.href,n)}})();const y={index:0,slug:"nyitany",title:"Te is egy pont vagy",shortTitle:"Nyitány",gesture:"Helyezd el magad",description:"Három válasz, egy pont. Nézd meg, hol vagy egy szintetikus évfolyam térképén.",status:"live",accent:"saffron"},j=[{index:1,slug:"adat",title:"Adat és előkészítés",shortTitle:"Piszkos adat",gesture:"Javíts ki egy hibát",description:"Egyetlen rossz érték elmozdíthat egy egész elemzést.",status:"coming",accent:"vermilion"},{index:2,slug:"knn",title:"Osztályozás: kNN",shortTitle:"Dobj le pontokat",gesture:"Rajzolj döntési határt",description:"A közeli példák szavaznak. Állítsd a k értékét, és figyeld, mikor simul ki a döntés.",status:"live",accent:"azure"},{index:3,slug:"dontesi-fa",title:"Döntési fa és együttesek",shortTitle:"Növessz fát",gesture:"Vágd ketté a síkot",description:"Sok egyszerű döntésből összetett határ születik.",status:"coming",accent:"teal"},{index:4,slug:"svm",title:"Logisztikus regresszió és SVM",shortTitle:"Emeld fel a pontokat",gesture:"Nyiss új dimenziót",description:"Ami síkban összekeveredik, magasabb dimenzióban elválhat.",status:"coming",accent:"azure"},{index:5,slug:"neuralis-halok",title:"Neurális hálók",shortTitle:"Rajzolj spirált",gesture:"Építs hálót",description:"Rétegenként alakul ki a nemlineáris döntési felület.",status:"coming",accent:"vermilion"},{index:6,slug:"regresszio",title:"Regresszió",shortTitle:"Túl- és alultanulás",gesture:"Hajlítsd a görbét",description:"A tanítóadat tökéletes követése még nem jelenti, hogy a modell jól jósol.",status:"live",accent:"vermilion"},{index:7,slug:"kiertekeles",title:"Kiértékelés",shortTitle:"A küszöb ára",gesture:"Húzd el a küszöböt",description:"A hibák ára nem mindig egyforma.",status:"coming",accent:"saffron"},{index:8,slug:"klaszterezes",title:"Klaszterezés",shortTitle:"Léptesd az algoritmust",gesture:"Léptesd az algoritmust",description:"Ugyanazt az adatot különböző módszerek eltérően csoportosíthatják.",status:"live",accent:"teal"},{index:9,slug:"ajanlorendszerek",title:"Ajánlórendszerek",shortTitle:"Öt csillag, egy vektor",gesture:"Értékelj és hasonlíts",description:"A hiányzó értékelések mögött rejtett ízlésdimenziók vannak.",status:"coming",accent:"saffron"},{index:10,slug:"dimenzio",title:"Dimenziócsökkentés",shortTitle:"Forgasd, amíg lapos",gesture:"Keresd a legjobb vetületet",description:"Kevesebb dimenzióban is megőrizhető a lényegi szerkezet.",status:"coming",accent:"azure"},{index:11,slug:"mintazatok",title:"Mintázatok és anomáliák",shortTitle:"Keresd a kakukktojást",gesture:"Tippelj az algoritmus előtt",description:"A ritka eltérés és a gyakori együttállás ugyanannak a térképnek két széle.",status:"coming",accent:"saffron"},{index:12,slug:"vizualizacio",title:"Vizualizáció és lezárás",shortTitle:"Ugyanaz az adat, más történet",gesture:"Válts nézőpontot",description:"Az összegző számok nem helyettesítik az adatok alakját.",status:"coming",accent:"vermilion"}];[...j.filter(c=>c.status==="live")];function K(c){return[y,...j].find(t=>t.slug===c)}function S(c){return()=>{let t=c+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}}function f(c){const t=Math.max(c(),Number.EPSILON),e=Math.max(c(),Number.EPSILON);return Math.sqrt(-2*Math.log(t))*Math.cos(2*Math.PI*e)}class st{constructor(t){m(this,"canvas");m(this,"particles");m(this,"reduceMotion");m(this,"resizeObserver");m(this,"draw",()=>{const t=this.canvas.getContext("2d");if(!t)return;const e=this.canvas.getBoundingClientRect(),a=Math.min(window.devicePixelRatio||1,2),s=Math.max(1,Math.round(e.width)),n=Math.max(1,Math.round(e.height)),l=Math.round(s*a),i=Math.round(n*a);(this.canvas.width!==l||this.canvas.height!==i)&&(this.canvas.width=l,this.canvas.height=i),t.setTransform(a,0,0,a,0,0),t.clearRect(0,0,s,n);const o=this.canvas.closest(".spiral-visual"),r=o?o.getBoundingClientRect().top+window.scrollY:0,d=Math.max(1,((o==null?void 0:o.offsetHeight)??n)-window.innerHeight),h=Math.max(0,Math.min(1,(window.scrollY-r)/d)),p=s<720,u=this.reduceMotion.matches||p,g=u?-.4:h*Math.PI*3.1-.65,b=p?s*.66:s*.58,$=n*.5,q=Math.min(s*(p?.28:.25),n*.28);t.save(),t.strokeStyle="rgba(111, 180, 255, .14)",t.lineWidth=1,t.beginPath(),t.moveTo(b,0),t.lineTo(b,n),t.stroke(),t.restore(),this.particles.map(v=>{const w=v.angle+g,M=u?Math.sin(w)*.18:Math.sin(w),A=u?.5:.18+h*.64,O=(v.level-A)*n*(u?.86:1.12),E=u?1:.76+(M+1)*.18;return{x:b+Math.cos(w)*q*E+v.offset*q,y:$+O,z:M,size:v.size*(u?.85:.72+(M+1)*.42),tone:v.tone}}).sort((v,w)=>v.z-w.z).forEach(v=>{if(v.y<-20||v.y>n+20||!p&&v.x<Math.min(770,s*.55)&&v.y>n*.1&&v.y<n*.92)return;const M=u?.52:(v.z+1)/2,A=u?.26+v.tone*.28:.11+M*.64;t.beginPath(),t.arc(v.x,v.y,v.size,0,Math.PI*2),t.fillStyle=v.tone>.91?`rgba(224, 69, 42, ${A})`:`rgba(111, 180, 255, ${A})`,t.fill()});const J=[.07,.19,.51,.67],Q=["NYITÁNY","02 · kNN","06 · REGRESSZIÓ","08 · KLASZTEREZÉS"];J.forEach((v,w)=>{const M=v*Math.PI*9.2+g,A=u?0:Math.sin(M),O=u?.5:.18+h*.64,E=b+Math.cos(M)*q*(u?1:.76+(A+1)*.18),N=$+(v-O)*n*(u?.86:1.12);N<30||N>n-30||(t.save(),t.beginPath(),t.arc(E,N,5.5,0,Math.PI*2),t.fillStyle=w===0?"#f2c14e":"#f4f1e8",t.fill(),t.font="600 11px 'IBM Plex Sans Variable', system-ui, sans-serif",t.letterSpacing="1px",t.fillStyle=w===0?"#f2c14e":"rgba(244, 241, 232, .78)",t.textAlign=E>b?"left":"right",t.fillText(Q[w],E+(E>b?14:-14),N+4),t.restore())})});this.canvas=t,this.reduceMotion=window.matchMedia("(prefers-reduced-motion: reduce)");const e=S(1709);this.particles=Array.from({length:760},(a,s)=>{const n=s/759;return{angle:n*Math.PI*9.2+(e()-.5)*.28,level:n,offset:(e()-.5)*.22,size:.65+e()*1.75,tone:e()}})}mount(){this.resizeObserver=new ResizeObserver(()=>this.draw()),this.resizeObserver.observe(this.canvas),window.addEventListener("scroll",this.draw,{passive:!0}),this.reduceMotion.addEventListener("change",this.draw),this.draw()}destroy(){var t;(t=this.resizeObserver)==null||t.disconnect(),window.removeEventListener("scroll",this.draw),this.reduceMotion.removeEventListener("change",this.draw)}}class at{constructor(){m(this,"spiral")}mount(t,e){t.innerHTML=`
      <main id="main-content" class="home-page">
        <section class="hero" aria-labelledby="hero-title">
          <div class="hero-copy">
            <p class="course-label"><span>Bevezetés az adattudományba 1.</span><span>Interaktív tananyag</span></p>
            <h1 id="hero-title">Az adat akkor válik érthetővé, amikor megmozdítod.</h1>
            <p>Dobj le egy pontot. Változtasd meg a modellt. Nézd meg, melyik feltételezés mit tesz ugyanazzal az adattal.</p>
            <div class="hero-actions">
              <a class="button button-hand" href="#/${y.slug}">Helyezd el az első pontot <span aria-hidden="true">→</span></a>
              <a class="text-link" href="#/" data-scroll-target="allomasok">A 12 állomás térképe</a>
            </div>
            <div class="release-note"><span class="release-dot" aria-hidden="true"></span><strong>Első kör</strong><span>Nyitány + 3 kipróbálható állomás</span></div>
          </div>
          <div class="spiral-visual" aria-hidden="true"><canvas></canvas><div class="spiral-depth-label"><span>felszín</span><i></i><span>mélyebbre</span></div></div>
          <p class="sr-only">A háttérben pontokból álló spirál jelzi a tárgy egyre mélyülő, 12 állomásos szerkezetét.</p>
          <a class="scroll-cue" href="#/" data-scroll-target="most-nyitva"><span>Görgess</span><i aria-hidden="true"></i></a>
        </section>

        <section class="open-now paper-section" id="most-nyitva" aria-labelledby="open-title">
          <header class="section-heading">
            <p class="eyebrow">Most kipróbálható</p>
            <h2 id="open-title">Három modell. Ugyanaz a mozdulat: változtass meg valamit.</h2>
            <p>Nincs lejátszás gomb. Minden ábra arra vár, hogy belenyúlj.</p>
          </header>
          <div class="module-ledger">
            ${j.filter(s=>s.status==="live").map(s=>`
              <a class="ledger-row" href="#/${s.slug}">
                <span class="ledger-index">${String(s.index).padStart(2,"0")}</span>
                <span class="ledger-visual visual-${s.slug}" aria-hidden="true">${this.previewSvg(s.slug)}</span>
                <span class="ledger-copy"><small>${s.title}</small><strong>${s.shortTitle}</strong><span>${s.description}</span></span>
                <span class="ledger-status ${e.has(s.slug)?"is-complete":""}" data-progress-slug="${s.slug}">${e.has(s.slug)?"Kész":s.gesture}</span>
                <b aria-hidden="true">↗</b>
              </a>`).join("")}
          </div>
        </section>

        <section class="map-section" id="allomasok" aria-labelledby="map-title">
          <div class="map-intro">
            <p class="eyebrow">A félév térképe</p>
            <h2 id="map-title">Tizenkét állomás, egyre mélyebben.</h2>
            <p>A nyitott állomásokat már végigjárhatod. A halvány sorok a félév során nyílnak ki — addig is mutatják, hová kapcsolódik, amit most látsz.</p>
            <a class="prologue-link" href="#/${y.slug}">
              <span class="spiral-glyph" aria-hidden="true">◎</span><span><small>Számozatlan prológus</small><strong>${y.title}</strong></span><b aria-hidden="true">→</b>
            </a>
          </div>
          <ol class="station-map">
            ${j.map(s=>{const n=String(s.index).padStart(2,"0"),l=e.has(s.slug)?" is-complete":"";return s.status==="live"?`<li class="is-live${l}"><a href="#/${s.slug}"><span class="station-number">${n}</span><span><strong>${s.title}</strong><small>${s.shortTitle}</small></span><em data-progress-slug="${s.slug}">${e.has(s.slug)?"teljesítve":"nyitva"}</em><b aria-hidden="true">→</b></a></li>`:`<li><div><span class="station-number">${n}</span><span><strong>${s.title}</strong><small>${s.shortTitle}</small></span><em>hamarosan</em></div></li>`}).join("")}
          </ol>
        </section>

        <section class="principle-section" aria-labelledby="principle-title">
          <p class="section-number">HASZNÁLATI ELV</p>
          <blockquote id="principle-title">Előbb csináld. Utána nevezd meg, mi történt.</blockquote>
          <div class="principle-copy">
            <p>Minden állomás egyetlen kézmozdulattal indul. A pontos fogalom, a képlet és az ellenőrző kérdés csak utána következik.</p>
            <p>A haladás ezen az eszközön, a böngésződben marad. Nincs fiók, nincs követőkód, nincs háttérben elküldött válasz.</p>
          </div>
        </section>

        <footer class="site-footer">
          <div><strong>Adatspirál</strong><span>Bevezetés az adattudományba 1.</span></div>
          <p>Önálló interaktív magyarázatok a tárgy fogalmaihoz. A kurzus diasorai és forrásfájljai nem részei ennek az oldalnak.</p>
          <a href="#/nyitany">Kezdés a Nyitánnyal ↑</a>
        </footer>
      </main>`;const a=t.querySelector(".spiral-visual canvas");a&&(this.spiral=new st(a),this.spiral.mount()),t.querySelectorAll("[data-scroll-target]").forEach(s=>{s.addEventListener("click",n=>{n.preventDefault();const l=t.querySelector(`#${s.dataset.scrollTarget}`);l==null||l.scrollIntoView({behavior:window.matchMedia("(prefers-reduced-motion: reduce)").matches?"auto":"smooth"})})})}destroy(){var t;(t=this.spiral)==null||t.destroy()}previewSvg(t){return t==="knn"?'<svg viewBox="0 0 180 92"><path class="region-a" d="M0 0h84c18 18 11 33 33 49 16 12 34 11 63 18v25H0z"/><path class="region-b" d="M84 0h96v67c-29-7-47-6-63-18C95 33 102 18 84 0z"/><g class="dots-a"><circle cx="34" cy="25" r="4"/><circle cx="52" cy="38" r="4"/><circle cx="71" cy="26" r="4"/><circle cx="88" cy="43" r="4"/></g><g class="dots-b"><rect x="111" y="20" width="7" height="7"/><rect x="130" y="37" width="7" height="7"/><rect x="145" y="23" width="7" height="7"/><rect x="98" y="60" width="7" height="7"/></g></svg>':t==="regresszio"?'<svg viewBox="0 0 180 92"><g class="residuals"><path d="M25 61V72M49 46V55M72 55V42M100 28V37M128 32V22M153 15V27"/></g><path class="model-line" d="M8 76C42 69 56 37 88 41s45-19 84-28"/><g class="dots-a"><circle cx="25" cy="72" r="4"/><circle cx="49" cy="55" r="4"/><circle cx="72" cy="42" r="4"/><circle cx="100" cy="37" r="4"/><circle cx="128" cy="22" r="4"/><circle cx="153" cy="27" r="4"/></g></svg>':'<svg viewBox="0 0 180 92"><g class="cluster-one"><circle cx="35" cy="28" r="4"/><circle cx="51" cy="34" r="4"/><circle cx="28" cy="42" r="4"/><circle cx="48" cy="51" r="4"/></g><g class="cluster-two"><circle cx="126" cy="25" r="4"/><circle cx="144" cy="34" r="4"/><circle cx="132" cy="48" r="4"/><circle cx="153" cy="52" r="4"/></g><g class="cluster-three"><circle cx="79" cy="65" r="4"/><circle cx="94" cy="72" r="4"/><circle cx="105" cy="61" r="4"/></g><path class="centroids" d="M34 29h12m-6-6v12M132 32h12m-6-6v12M85 64h12m-6-6v12"/></svg>'}}function x(c,t){const e=c.x-t.x,a=c.y-t.y;return e*e+a*a}function W(c,t,e){const a=c.filter(o=>typeof o.label=="number");if(a.length===0)return{label:0,neighbors:[],confidence:0};const s=Math.max(1,Math.min(Math.floor(e),a.length)),n=a.map(o=>({point:o,distance:x(o,t)})).sort((o,r)=>o.distance-r.distance).slice(0,s).map(({point:o})=>o),l=new Map;n.forEach(o=>{const r=o.label??0,d=l.get(r)??{count:0,weight:0};d.count+=1,d.weight+=1/Math.max(1e-9,Math.sqrt(x(o,t))),l.set(r,d)});const i=[...l.entries()].sort((o,r)=>r[1].count-o[1].count||r[1].weight-o[1].weight)[0];return{label:i[0],neighbors:n,confidence:i[1].count/s}}function it(c,t){const e=t.length,a=c.map((s,n)=>[...s,t[n]]);for(let s=0;s<e;s+=1){let n=s;for(let i=s+1;i<e;i+=1)Math.abs(a[i][s])>Math.abs(a[n][s])&&(n=i);[a[s],a[n]]=[a[n],a[s]];const l=a[s][s];if(Math.abs(l)<1e-12)return Array(e).fill(0);for(let i=s;i<=e;i+=1)a[s][i]/=l;for(let i=0;i<e;i+=1){if(i===s)continue;const o=a[i][s];for(let r=s;r<=e;r+=1)a[i][r]-=o*a[s][r]}}return a.map(s=>s[e])}function Y(c,t,e=0){const s=Math.max(0,Math.min(Math.floor(t),Math.max(0,c.length-1)))+1,n=Array.from({length:s},()=>Array(s).fill(0)),l=Array(s).fill(0);c.forEach(i=>{const o=Array.from({length:s*2},(r,d)=>i.x**d);for(let r=0;r<s;r+=1){l[r]+=i.y*o[r];for(let d=0;d<s;d+=1)n[r][d]+=o[r+d]}});for(let i=1;i<s;i+=1)n[i][i]+=e;return it(n,l)}function V(c,t){return c.reduceRight((e,a)=>e*t+a,0)}function C(c,t){return c.length===0?0:c.reduce((e,a)=>{const s=a.y-V(t,a.x);return e+s*s},0)/c.length}function P(c,t,e=0){const a=Math.max(1,Math.min(Math.floor(t),c.length||1)),s=[...c].sort((i,o)=>i.x-o.x||i.y-o.y);let n=Array.from({length:a},(i,o)=>s[Math.min(s.length-1,Math.floor((o+.5)/a*s.length))]);if(e>0&&c.length>0){const i=[...c];let o=e>>>0;for(let r=i.length-1;r>0;r-=1){o=Math.imul(o,1664525)+1013904223>>>0;const d=o%(r+1);[i[r],i[d]]=[i[d],i[r]]}n=i.slice(0,a)}return{centroids:n.map(i=>i?{x:i.x,y:i.y}:{x:.5,y:.5}),assignments:Array(c.length).fill(-1),phase:"assign",iteration:0}}function nt(c,t){if(c.length===0||t.phase==="done")return t;if(t.phase==="assign"){const i=c.map(o=>{let r=0,d=Number.POSITIVE_INFINITY;return t.centroids.forEach((h,p)=>{const u=x(o,h);u<d&&(r=p,d=u)}),r});return{...t,assignments:i,phase:"update"}}const a=t.centroids.map((i,o)=>c.filter((r,d)=>t.assignments[d]===o)).map(i=>i.length===0?void 0:{x:i.reduce((o,r)=>o+r.x,0)/i.length,y:i.reduce((o,r)=>o+r.y,0)/i.length}),s=new Set;a.forEach((i,o)=>{if(i)return;const r=c.map((h,p)=>({point:h,index:p,distance:t.assignments[p]>=0?x(h,t.centroids[t.assignments[p]]):Number.POSITIVE_INFINITY})).filter(({index:h})=>!s.has(h)).sort((h,p)=>p.distance-h.distance),d=r.find(({point:h})=>!a.some(p=>p&&x(h,p)<1e-12))??r[0];d&&(s.add(d.index),a[o]={x:d.point.x,y:d.point.y})});const n=a.map((i,o)=>i??t.centroids[o]),l=n.reduce((i,o,r)=>i+x(o,t.centroids[r]),0);return{centroids:n,assignments:t.assignments,phase:l<1e-8?"done":"assign",iteration:t.iteration+1}}function L(c,t,e){const a=Array(c.length).fill(-99),s=Array(c.length).fill("noise"),n=c.map(o=>c.map((r,d)=>({index:d,distance:x(o,r)})).filter(({distance:r})=>r<=t*t).map(({index:r})=>r)),l=n.map(o=>o.length>=e);l.forEach((o,r)=>{o&&(s[r]="core")});let i=0;return c.forEach((o,r)=>{if(!l[r]||a[r]!==-99)return;const d=[r];for(a[r]=i;d.length>0;){const h=d.shift();if(h===void 0)break;n[h].forEach(p=>{a[p]===-99&&(a[p]=i,l[p]?d.push(p):s[p]="border")})}i+=1}),a.forEach((o,r)=>{o===-99&&(a[r]=-1)}),{assignments:a,types:s,clusters:i}}function rt(c,t,e){return c.reduce((a,s,n)=>{const l=e[t[n]];return l?a+x(s,l):a},0)}function H(c){const t=c.getBoundingClientRect(),e=Math.min(window.devicePixelRatio||1,2),a=Math.max(1,Math.round(t.width)),s=Math.max(1,Math.round(t.height)),n=Math.round(a*e),l=Math.round(s*e);(c.width!==n||c.height!==l)&&(c.width=n,c.height=l);const i=c.getContext("2d");return i==null||i.setTransform(e,0,0,e,0,0),{width:a,height:s,dpr:e}}function D(c,t,e=20){const a=c.getBoundingClientRect(),s=t.clientX-a.left,n=t.clientY-a.top;return{x:Math.max(0,Math.min(1,(s-e)/Math.max(1,a.width-e*2))),y:Math.max(0,Math.min(1,(n-e)/Math.max(1,a.height-e*2)))}}function k(c,t,e,a=20){return[a+c.x*(t-a*2),a+c.y*(e-a*2)]}function F(c,t,e,a=20){c.save(),c.strokeStyle="rgba(18, 32, 63, 0.12)",c.lineWidth=1,c.setLineDash([2,5]);for(let s=0;s<=4;s+=1){const n=a+s/4*(t-a*2),l=a+s/4*(e-a*2);c.beginPath(),c.moveTo(n,a),c.lineTo(n,e-a),c.stroke(),c.beginPath(),c.moveTo(a,l),c.lineTo(t-a,l),c.stroke()}c.setLineDash([]),c.strokeStyle="rgba(18, 32, 63, 0.28)",c.strokeRect(a+.5,a+.5,t-a*2-1,e-a*2-1),c.restore()}function ot(c,t,e,a,s=5,n=!1){const l=["#d84429","#1e67b8","#907015","#17776c"],i=l[Math.abs(a)%l.length];c.save(),c.beginPath(),a%2===0?c.arc(t,e,s,0,Math.PI*2):c.rect(t-s*.82,e-s*.82,s*1.64,s*1.64),c.fillStyle=n?"#f4f1e8":i,c.fill(),c.strokeStyle=i,c.lineWidth=n?2:1.25,c.stroke(),c.restore()}function z(c,t=.04,e=.96){return Math.max(t,Math.min(e,c))}function U(c=18,t=96){const e=S(c);return Array.from({length:t},(a,s)=>{const n=s%2,l=e()*Math.PI,i=f(e)*.018,o=f(e)*.018;return n===0?{x:z(.28+Math.cos(l)*.24+i),y:z(.49-Math.sin(l)*.25+o),label:n}:{x:z(.7-Math.cos(l)*.24+i),y:z(.48+Math.sin(l)*.25+o),label:n}})}function lt(c=4,t=96){const e=S(c);return Array.from({length:t},()=>{const a=.08+e()*.84,s=.08+e()*.84,n=(a>.5?1:0)+(s>.5?2:0);return{x:a,y:s,label:n===0||n===3?0:1}})}function ct(c=72,t=96){const e=S(c);return Array.from({length:t},(a,s)=>{const n=s%2,l=n===0?.42:.59,i=n===0?.47:.54;return{x:z(l+f(e)*.15),y:z(i+f(e)*.15),label:n}})}function B(c=29){const t=S(c),e=[];for(let a=0;a<34;a+=1){const s=-.93+a/33*1.86,l=.12+.52*s-.27*s*s+.2*Math.sin(s*4.5)+f(t)*.105;e.push({x:s,y:l,split:a%4===1?"test":"train"})}return e}function I(c,t,e,a,s){return Array.from({length:s},()=>({x:z(t+f(c)*a),y:z(e+f(c)*a)}))}function X(c=11){const t=S(c);return[...I(t,.25,.3,.07,38),...I(t,.72,.34,.075,38),...I(t,.5,.75,.08,38)]}function dt(c=42){const t=S(c),e=[];for(let a=0;a<62;a+=1){const s=a/62*Math.PI*2+f(t)*.025,n=.34+f(t)*.014;e.push({x:.5+Math.cos(s)*n,y:.5+Math.sin(s)*n})}return e.push(...I(t,.5,.5,.075,48)),e}function ht(c=7){const t=S(c),e=[];for(let a=0;a<3;a+=1)for(let s=0;s<36;s+=1){const n=.08+t()*.84,l=.18+a*.27+.32*(n-.5)+f(t)*.025;e.push({x:z(n),y:z(l)})}return e}function pt(c=92,t=110){const e=S(c);return Array.from({length:t},()=>({x:.06+e()*.88,y:.06+e()*.88}))}function ut(c=2026,t=86){const e=S(c),a=[],s=[{x:.28,y:.64,sx:.11,sy:.12},{x:.68,y:.66,sx:.12,sy:.1},{x:.51,y:.3,sx:.14,sy:.09}];for(let n=0;n<t;n+=1){const l=s[n%s.length];a.push({x:z(l.x+f(e)*l.sx),y:z(l.y+f(e)*l.sy),label:n%s.length})}return a}const R={blobs:{title:"Három csomó",question:"Talál-e mindkét módszer három csoportot?",make:()=>X(),epsilon:.1,minPoints:5},rings:{title:"Gyűrű és mag",question:"Mit jelent itt a „középpont”?",make:()=>dt(),epsilon:.1,minPoints:5},bands:{title:"Ferde sávok",question:"A gömbszerűség jó feltételezés?",make:()=>ht(),epsilon:.15,minPoints:5},noise:{title:"Egyenletes pontok",question:"Mikor marad a többség zaj?",make:()=>pt(),epsilon:.04,minPoints:5}},T=["#d84429","#1e67b8","#927019","#17776c","#7b4f9d","#5e697b"];class mt{constructor(t){m(this,"context");m(this,"root");m(this,"canvas");m(this,"points",X());m(this,"algorithm","kmeans");m(this,"k",3);m(this,"epsilon",.1);m(this,"minPoints",5);m(this,"initializationSeed",0);m(this,"kMeansState",P(this.points,this.k));m(this,"dbscanResult",L(this.points,this.epsilon,this.minPoints));m(this,"pointer");m(this,"resizeObserver");m(this,"runTimer");this.context=t}mount(t){this.root=t,t.innerHTML=`
      <article class="module-page" data-module="clustering">
        <header class="module-intro paper-header">
          <div class="module-index">08 <span>/ 12</span></div>
          <div>
            <p class="eyebrow">Felügyelet nélküli tanulás · klaszterezés</p>
            <h1>Léptesd végig.</h1>
            <p class="lede">Nincsenek előre megadott osztálycímkék. Válassz módszert, léptesd az algoritmust, és figyeld meg, milyen alakú csoportokat hoz létre.</p>
          </div>
          <a class="present-link" href="?mode=present#/klaszterezes" aria-label="Klaszterezés megnyitása vetítés módban">Vetítés <span aria-hidden="true">↗</span></a>
        </header>

        <section class="workbench" aria-labelledby="cluster-workbench-title">
          <div class="workbench-topline">
            <div><p class="section-number">INTERAKTÍV MUNKAPAD</p><h2 id="cluster-workbench-title">Ugyanaz az adat, kétféle felosztás</h2></div>
            <div class="segmented" role="group" aria-label="Klaszterező algoritmus">
              <button class="is-active" type="button" data-algorithm="kmeans" aria-pressed="true">k-közép</button>
              <button type="button" data-algorithm="dbscan" aria-pressed="false">DBSCAN</button>
            </div>
          </div>

          <div class="preset-strip" role="group" aria-label="Adatkészlet választása">
            ${Object.entries(R).map(([e,a],s)=>`
              <button class="preset ${s===0?"is-active":""}" type="button" data-preset="${e}" aria-pressed="${s===0}">
                <span class="preset-mark preset-${e}" aria-hidden="true"><i></i><i></i><i></i><i></i><i></i></span>
                <span><strong>${a.title}</strong><small>${a.question}</small></span>
              </button>`).join("")}
            <button class="preset" type="button" data-preset="custom" aria-pressed="false"><span class="preset-mark preset-custom" aria-hidden="true">＋</span><span><strong>Saját</strong><small>Rajzolj címkék nélkül.</small></span></button>
          </div>

          <div class="canvas-layout cluster-layout">
            <aside class="tool-column" aria-label="Futtatási vezérlők">
              <div data-kmeans-tools>
                <button class="button button-ink" type="button" data-action="step">Következő lépés <kbd>Space</kbd></button>
                <button class="button button-paper" type="button" data-action="run">Futtasd végig</button>
                <button class="text-tool" type="button" data-action="restart">Új inicializálás</button>
              </div>
              <div data-dbscan-tools hidden>
                <p class="tool-note"><strong>Az eredmény azonnali.</strong> Mozgasd a mutatót a pontok fölött; az ε csúszkával változtasd a kör sugarát.</p>
              </div>
              <div class="tool-divider"></div>
              <button class="text-tool" type="button" data-action="clear">Töröld mind</button>
            </aside>

            <div class="canvas-column">
              <div class="canvas-frame">
                <canvas class="data-canvas" aria-label="Klaszterezési pontfelhő és algoritmuseredmény" role="img"></canvas>
                <div class="canvas-corner" aria-hidden="true">x₂</div><div class="canvas-axis" aria-hidden="true">x₁</div>
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
              <label>x koordináta <input type="number" min="0" max="1" step="0.05" value="0.5" data-entry-x /></label>
              <label>y koordináta <input type="number" min="0" max="1" step="0.05" value="0.5" data-entry-y /></label>
              <button class="button button-ink" type="button" data-action="add-keyboard">Pont hozzáadása</button>
            </div>
          </details>
        </section>

        <section class="experiments depth-shell" aria-labelledby="cluster-try-title">
          <div class="depth-kicker">Próbáld ki</div><h2 id="cluster-try-title">Tedd próbára a feltételezést</h2>
          <ol class="experiment-list">
            <li><span>01</span><div><strong>Léptesd a k-közepet.</strong><p>Előbb megtörténik a pontok hozzárendelése, majd a centroidok az új klaszterátlagokba mozdulnak.</p></div></li>
            <li><span>02</span><div><strong>Válts Gyűrű és mag készletre.</strong><p>A k-közép sugarasan vág. A DBSCAN a sűrűség szerint összefüggő részeket követi.</p></div></li>
            <li><span>03</span><div><strong>Nyisd meg az Egyenletes pontok készletet.</strong><p>Az adott ε és MinPts mellett a DBSCAN akár a pontok többségét zajként hagyhatja.</p></div></li>
          </ol>
        </section>

        <section class="depth reading-layer" aria-labelledby="cluster-depth-title">
          <p class="eyebrow">Mélyebbre</p>
          <h2 id="cluster-depth-title">A klaszterezés eredménye nem adottság.</h2>
          <p>A látható felosztás a változók, a távolság, a módszer, a paraméterek és a felhasználási cél választásától függ.</p>
          <div class="concept-grid">
            <div><p class="concept-label">k-közép</p><h3>Középpontokat optimalizál</h3><p>Minden pont a legközelebbi centroidhoz kerül, majd a centroid a hozzá tartozó pontok átlagába mozdul.</p></div>
            <div><p class="concept-label">DBSCAN</p><h3>Sűrű kapcsolatokat követ</h3><p>Magpont az, amelynek ε sugarú környezetében — önmagát is beleszámítva — legalább MinPts pont van. A ritka pont lehet zaj.</p></div>
          </div>
          <aside class="edge-case"><strong>Nincs univerzális győztes.</strong> A k-közép gyors és jól értelmezhető gömbszerű csoportokon. A DBSCAN nem konvex, sűrűség szerint összefüggő alakokat is követ, de eltérő sűrűségeknél nehéz közös ε értéket találni.</aside>
          <div class="knowledge-check" data-quiz>
            <p class="concept-label">Ellenőrző kérdés</p>
            <h3>Egy sűrű magot egy ritkább, kör alakú gyűrű vesz körül. Melyik itt a természetesebb első próbálkozás?</h3>
            <div class="answer-grid">
              <button type="button" data-answer="wrong">k-közép, k = 2</button>
              <button type="button" data-answer="right">DBSCAN megfelelő ε és MinPts mellett</button>
              <button type="button" data-answer="wrong">k-közép, k = 10</button>
            </div>
            <p class="quiz-feedback" data-quiz-feedback aria-live="polite"></p>
          </div>
        </section>
      </article>`,this.canvas=t.querySelector("canvas.data-canvas")??void 0,this.bindControls(),this.canvas&&(this.resizeObserver=new ResizeObserver(()=>this.draw()),this.resizeObserver.observe(this.canvas)),this.update()}destroy(){var t;(t=this.resizeObserver)==null||t.disconnect(),this.runTimer&&window.clearTimeout(this.runTimer),this.root=void 0,this.canvas=void 0}bindControls(){var t,e,a,s,n,l,i,o;!this.root||!this.canvas||(this.root.querySelectorAll("[data-algorithm]").forEach(r=>{r.addEventListener("click",()=>{var d;this.algorithm=r.dataset.algorithm??"kmeans",(d=this.root)==null||d.querySelectorAll("[data-algorithm]").forEach(h=>{const p=h===r;h.classList.toggle("is-active",p),h.setAttribute("aria-pressed",String(p))}),this.syncAlgorithmControls(),this.update()})}),this.root.querySelectorAll("[data-preset]").forEach(r=>{r.addEventListener("click",()=>{var h,p,u;const d=r.dataset.preset??"blobs";if(this.points=d==="custom"?[]:R[d].make(),d!=="custom"){this.epsilon=R[d].epsilon,this.minPoints=R[d].minPoints;const g=(h=this.root)==null?void 0:h.querySelector("#cluster-epsilon"),b=(p=this.root)==null?void 0:p.querySelector("#cluster-minpts");g&&(g.value=String(Math.round(this.epsilon*100))),b&&(b.value=String(this.minPoints))}this.initializationSeed=0,this.resetAlgorithms(),(u=this.root)==null||u.querySelectorAll("[data-preset]").forEach(g=>{const b=g===r;g.classList.toggle("is-active",b),g.setAttribute("aria-pressed",String(b))}),this.update()})}),(t=this.root.querySelector("#cluster-k"))==null||t.addEventListener("input",r=>{this.k=Number(r.target.value),this.initializationSeed=0,this.kMeansState=P(this.points,this.k,this.initializationSeed),this.update()}),(e=this.root.querySelector("#cluster-epsilon"))==null||e.addEventListener("input",r=>{this.epsilon=Number(r.target.value)/100,this.dbscanResult=L(this.points,this.epsilon,this.minPoints),this.update()}),(a=this.root.querySelector("#cluster-minpts"))==null||a.addEventListener("input",r=>{this.minPoints=Number(r.target.value),this.dbscanResult=L(this.points,this.epsilon,this.minPoints),this.update()}),(s=this.root.querySelector("[data-action='step']"))==null||s.addEventListener("click",()=>this.step()),(n=this.root.querySelector("[data-action='run']"))==null||n.addEventListener("click",()=>this.run()),(l=this.root.querySelector("[data-action='restart']"))==null||l.addEventListener("click",()=>{this.initializationSeed+=1,this.kMeansState=P(this.points,this.k,this.initializationSeed),this.update()}),(i=this.root.querySelector("[data-action='clear']"))==null||i.addEventListener("click",()=>{this.points=[],this.resetAlgorithms(),this.update()}),(o=this.root.querySelector("[data-action='add-keyboard']"))==null||o.addEventListener("click",()=>{var h,p,u,g;const r=Number(((p=(h=this.root)==null?void 0:h.querySelector("[data-entry-x]"))==null?void 0:p.value)??.5),d=Number(((g=(u=this.root)==null?void 0:u.querySelector("[data-entry-y]"))==null?void 0:g.value)??.5);this.addPoint({x:Math.max(0,Math.min(1,r)),y:Math.max(0,Math.min(1,d))})}),this.canvas.addEventListener("click",r=>this.addPoint(D(this.canvas,r))),this.canvas.addEventListener("pointermove",r=>{this.pointer=D(this.canvas,r),this.draw()}),this.canvas.addEventListener("pointerleave",()=>{this.pointer=void 0,this.update()}),window.addEventListener("keydown",r=>{var d;!((d=this.root)!=null&&d.isConnected)||r.target.closest("button, a, input, select, textarea, summary, [contenteditable='true']")||(r.code==="Space"&&this.algorithm==="kmeans"&&(r.preventDefault(),this.step()),r.key.toLowerCase()==="r"&&(this.resetAlgorithms(),this.update()))}),this.root.querySelectorAll("[data-answer]").forEach(r=>{r.addEventListener("click",()=>{var p,u;const d=r.dataset.answer==="right";(p=this.root)==null||p.querySelectorAll("[data-answer]").forEach(g=>g.classList.remove("is-correct","is-wrong")),r.classList.add(d?"is-correct":"is-wrong");const h=(u=this.root)==null?void 0:u.querySelector("[data-quiz-feedback]");h&&(h.textContent=d?"Így van. A DBSCAN a sűrű összeköttetést követi, ezért nem kell sugarasan kettévágnia a gyűrűt. A modult teljesítetted.":"Gondold át, melyik módszer vár középpont körüli, nagyjából gömbszerű klasztereket."),d&&this.context.onComplete()})}))}syncAlgorithmControls(){var a;const t=this.algorithm==="kmeans";["[data-kmeans-tools]","[data-kmeans-parameters]"].forEach(s=>{var l;const n=(l=this.root)==null?void 0:l.querySelector(s);n&&(n.hidden=!t)}),["[data-dbscan-tools]","[data-dbscan-parameters]"].forEach(s=>{var l;const n=(l=this.root)==null?void 0:l.querySelector(s);n&&(n.hidden=t)});const e=(a=this.root)==null?void 0:a.querySelector("[data-dbscan-legend]");e&&(e.hidden=t)}resetAlgorithms(){this.runTimer&&window.clearTimeout(this.runTimer),this.kMeansState=P(this.points,this.k,this.initializationSeed),this.dbscanResult=L(this.points,this.epsilon,this.minPoints)}addPoint(t){this.points.length>=320||(this.points.push(t),this.resetAlgorithms(),this.update())}step(){this.kMeansState=nt(this.points,this.kMeansState),this.update()}run(){this.kMeansState.phase==="done"&&(this.kMeansState=P(this.points,this.k,this.initializationSeed)),this.step(),this.kMeansState.phase!=="done"&&this.kMeansState.iteration<30&&(this.runTimer=window.setTimeout(()=>this.run(),520))}update(){var a;this.dbscanResult=L(this.points,this.epsilon,this.minPoints);const t=(s,n)=>{var i;const l=(i=this.root)==null?void 0:i.querySelector(s);l&&(l.textContent=n)};t("[data-k-output]",String(this.k)),t("[data-epsilon-output]",this.epsilon.toFixed(2).replace(".",",")),t("[data-minpts-output]",String(this.minPoints));const e=(a=this.root)==null?void 0:a.querySelector("[data-observation]");if(this.algorithm==="kmeans"){const s=this.kMeansState.phase==="assign"?"Hozzárendelési lépés.":this.kMeansState.phase==="update"?"Centroidfrissítési lépés.":"A középpontok megálltak.";e&&(e.innerHTML=`<p class="control-label">Élő megfigyelés</p><strong>${s}</strong><p>${this.kMeansState.phase==="assign"?"Minden pontot a hozzá legközelebbi centroidhoz rendelünk.":this.kMeansState.phase==="update"?"Minden centroid a saját pontjainak átlagába mozdul.":"Ez egy lokális optimum; más kezdés más eredményt adhat."}</p>`),t("[data-primary-label]","Iteráció"),t("[data-primary-metric]",String(this.kMeansState.iteration)),t("[data-secondary-label]","Klaszteren belüli négyzetösszeg (SSE)");const n=this.kMeansState.assignments.every(l=>l>=0);t("[data-secondary-metric]",n&&this.points.length>0?rt(this.points,this.kMeansState.assignments,this.kMeansState.centroids).toFixed(2):"—"),t("[data-summary]",`${this.points.length} címkézetlen pont · ${this.k} kért klaszter · ${s}`)}else{const s=this.dbscanResult.assignments.filter(n=>n<0).length;e&&(e.innerHTML=`<p class="control-label">Élő megfigyelés</p><strong>${this.dbscanResult.clusters} klaszter, ${s} zajpont.</strong><p>${s>this.points.length*.45?"Az ε túl szűk lehet: kevés pont éri el a szükséges sűrűséget.":this.dbscanResult.clusters===1?"Az ε összeköthette a korábban különálló sűrű részeket.":"A magpontok sűrű összefüggő részeket építenek."}</p>`),t("[data-primary-label]","Klaszter"),t("[data-primary-metric]",String(this.dbscanResult.clusters)),t("[data-secondary-label]","Zajpont"),t("[data-secondary-metric]",String(s)),t("[data-summary]",`${this.points.length} címkézetlen pont · ${this.dbscanResult.clusters} klaszter · ${s} pontot nem sorolt be a DBSCAN.`)}this.draw()}draw(){var n;if(!this.canvas)return;const t=this.canvas.getContext("2d");if(!t)return;const{width:e,height:a}=H(this.canvas);t.clearRect(0,0,e,a),t.fillStyle="#f4f1e8",t.fillRect(0,0,e,a),F(t,e,a);const s=this.algorithm==="kmeans"?this.kMeansState.assignments:this.dbscanResult.assignments;if(this.algorithm==="kmeans"&&this.kMeansState.assignments.some(l=>l>=0)&&(t.save(),t.lineWidth=.8,this.points.forEach((l,i)=>{const o=s[i],r=this.kMeansState.centroids[o];if(!r)return;const[d,h]=k(l,e,a),[p,u]=k(r,e,a);t.beginPath(),t.moveTo(d,h),t.lineTo(p,u),t.strokeStyle=`${T[o%T.length]}35`,t.stroke()}),t.restore()),this.points.forEach((l,i)=>{const[o,r]=k(l,e,a),d=s[i];t.save(),t.beginPath();const h=d<0;if(this.algorithm==="dbscan"&&h)t.moveTo(o-3.5,r-3.5),t.lineTo(o+3.5,r+3.5),t.moveTo(o+3.5,r-3.5),t.lineTo(o-3.5,r+3.5),t.strokeStyle="#6d7480",t.lineWidth=1.6,t.stroke();else{const p=d>=0?T[d%T.length]:"#526077",u=this.algorithm==="dbscan"?this.dbscanResult.types[i]:"core",g=u==="core"?4.6:3.8;t.arc(o,r,g,0,Math.PI*2),t.fillStyle=u==="border"?"#f4f1e8":p,t.fill(),t.strokeStyle=p,t.lineWidth=u==="border"?1.8:1,t.stroke()}t.restore()}),this.algorithm==="kmeans")this.kMeansState.centroids.forEach((l,i)=>{const[o,r]=k(l,e,a);t.save(),t.strokeStyle=T[i%T.length],t.lineWidth=3,t.beginPath(),t.moveTo(o-7,r),t.lineTo(o+7,r),t.moveTo(o,r-7),t.lineTo(o,r+7),t.stroke(),t.fillStyle="#f4f1e8",t.beginPath(),t.arc(o,r,2.3,0,Math.PI*2),t.fill(),t.restore()});else if(this.pointer&&this.points.length>0){const l=this.points.reduce((p,u,g)=>x(u,this.pointer)<x(this.points[p],this.pointer)?g:p,0),i=this.points[l],o=this.points.filter(p=>x(p,i)<=this.epsilon*this.epsilon),[r,d]=k(i,e,a);o.forEach(p=>{const[u,g]=k(p,e,a);t.beginPath(),t.arc(u,g,7,0,Math.PI*2),t.strokeStyle="rgba(184, 50, 30, .5)",t.lineWidth=1,t.stroke()}),t.save(),t.beginPath(),t.ellipse(r,d,this.epsilon*(e-40),this.epsilon*(a-40),0,0,Math.PI*2),t.fillStyle="rgba(224, 69, 42, .055)",t.fill(),t.strokeStyle="rgba(184, 50, 30, .72)",t.lineWidth=1.5,t.stroke(),t.restore();const h=(n=this.root)==null?void 0:n.querySelector("[data-observation]");if(h){const p=this.dbscanResult.types[l],u=p==="core"?"magpont":p==="border"?"határpont":"zajpont";h.innerHTML=`<p class="control-label">ε-környezet</p><strong>${o.length} pont önmagával együtt → ${u}.</strong><p>A kör mindig a kurzorhoz legközelebbi adatpontra illeszkedik.</p>`}}}}const _={moons:{title:"Két hold",question:"Mekkora k mellett marad meg a keskeny rés?",make:()=>U()},xor:{title:"Kockás",question:"Miért nem lenne elég egyetlen egyenes?",make:()=>lt()},overlap:{title:"Átfedő",question:"Hol válik bizonytalanná a szavazás?",make:()=>ct()}};class gt{constructor(t){m(this,"context");m(this,"root");m(this,"canvas");m(this,"points",U());m(this,"history",[]);m(this,"currentLabel",0);m(this,"k",5);m(this,"pointer");m(this,"drawing",!1);m(this,"lastDrawn");m(this,"touchDrawingEnabled",!1);m(this,"tapCandidate");m(this,"resizeObserver");this.context=t}mount(t){this.root=t,t.innerHTML=`
      <article class="module-page" data-module="knn">
        <header class="module-intro paper-header">
          <div class="module-index">02 <span>/ 12</span></div>
          <div>
            <p class="eyebrow">Osztályozás · legközelebbi szomszédok</p>
            <h1>Dobj le pontokat.</h1>
            <p class="lede">A környezet szavaz. Rajzolj két osztályt, majd változtasd meg, hány szomszéd szava számítson.</p>
          </div>
          <a class="present-link" href="?mode=present#/knn" aria-label="kNN megnyitása vetítés módban">Vetítés <span aria-hidden="true">↗</span></a>
        </header>

        <section class="workbench" aria-labelledby="knn-workbench-title">
          <div class="workbench-topline">
            <div>
              <p class="section-number">INTERAKTÍV MUNKAPAD</p>
              <h2 id="knn-workbench-title">Hol lesz a határ?</h2>
            </div>
            <p class="workbench-instruction">Kattints vagy húzd az egeret a papíron. Mobilon koppints; folyamatos rajzoláshoz kapcsold be a rajzolás módot.</p>
          </div>

          <div class="preset-strip" role="group" aria-label="Adatkészlet választása">
            ${Object.entries(_).map(([e,a],s)=>`
              <button class="preset ${s===0?"is-active":""}" type="button" data-preset="${e}" aria-pressed="${s===0}">
                <span class="preset-mark preset-${e}" aria-hidden="true"><i></i><i></i><i></i><i></i><i></i></span>
                <span><strong>${a.title}</strong><small>${a.question}</small></span>
              </button>`).join("")}
            <button class="preset" type="button" data-preset="custom" aria-pressed="false">
              <span class="preset-mark preset-custom" aria-hidden="true">＋</span>
              <span><strong>Saját rajz</strong><small>Indulj üres vászonnal.</small></span>
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
              <button class="text-tool touch-draw-toggle" type="button" data-action="toggle-draw" aria-pressed="false"><span>Rajzolás mód</span><strong data-draw-state>ki</strong></button>
              <div class="tool-divider"></div>
              <button class="text-tool" type="button" data-action="undo">Visszavonás <kbd>⌘Z</kbd></button>
              <button class="text-tool" type="button" data-action="clear">Töröld mind</button>
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
                <span class="range-ends"><small>részletes</small><small>simább</small></span>
              </label>
              <div class="observation" data-observation>
                <p class="control-label">Élő megfigyelés</p>
                <strong>Vidd a mutatót a térképre.</strong>
                <p>Megmutatjuk, mely szomszédok szavaznának.</p>
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
          <div class="depth-kicker">Próbáld ki</div>
          <h2 id="knn-try-title">Három rövid kísérlet</h2>
          <ol class="experiment-list">
            <li><span>01</span><div><strong>Állítsd k-t 1-re.</strong><p>Hol jelennek meg apró, önálló szigetek egy zajos pont körül?</p></div></li>
            <li><span>02</span><div><strong>Válaszd az Átfedő készletet.</strong><p>A határ mentén a szavazás bizonytalanabb, mint a felhők közepén.</p></div></li>
            <li><span>03</span><div><strong>Tegyél egy B pontot az A-k közepébe.</strong><p>Növeld k-t addig, amíg eltűnik a pont saját szigete.</p></div></li>
          </ol>
        </section>

        <section class="depth reading-layer" aria-labelledby="knn-depth-title">
          <p class="eyebrow">Mélyebbre</p>
          <h2 id="knn-depth-title">A modell nem egyenletet tanul. Emlékszik.</h2>
          <p>A kNN-módszer egy új rekord címkéjét a hozzá legközelebbi tanítópontok szavazatából adja meg. Ebben a játékban euklideszi távolságot használunk, és mindkét koordinátát azonos [0,1] skálára tesszük. Valós adatoknál a skálázás és a távolság megválasztása is a modell része.</p>
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
          <aside class="edge-case"><strong>Határeset.</strong> Nagy dimenzióban a pontok közötti távolságok egyre kevésbé különböznek. A kNN-nek ezért több adat és gondos változóválasztás kell.</aside>
          <div class="knowledge-check" data-quiz>
            <p class="concept-label">Ellenőrző kérdés</p>
            <h3>Egyetlen hibásan címkézett pont apró „szigetet” kapott. Melyik változtatás csökkenti legközvetlenebbül ezt a hatást?</h3>
            <div class="answer-grid">
              <button type="button" data-answer="wrong">Még egy dimenzió hozzáadása</button>
              <button type="button" data-answer="right">A k értékének növelése</button>
              <button type="button" data-answer="wrong">Az összes távolság megszorzása kettővel</button>
            </div>
            <p class="quiz-feedback" data-quiz-feedback aria-live="polite"></p>
          </div>
        </section>
      </article>`,this.canvas=t.querySelector("canvas.data-canvas")??void 0,this.bindControls(),this.canvas&&(this.resizeObserver=new ResizeObserver(()=>this.draw()),this.resizeObserver.observe(this.canvas)),this.update()}destroy(){var t;(t=this.resizeObserver)==null||t.disconnect(),this.root=void 0,this.canvas=void 0}bindControls(){var a,s,n,l;if(!this.root||!this.canvas)return;this.root.querySelectorAll("[data-preset]").forEach(i=>{i.addEventListener("click",()=>{var r;const o=i.dataset.preset??"moons";this.points=o==="custom"?[]:_[o].make(),this.history=[],(r=this.root)==null||r.querySelectorAll("[data-preset]").forEach(d=>{const h=d===i;d.classList.toggle("is-active",h),d.setAttribute("aria-pressed",String(h))}),this.update()})}),this.root.querySelectorAll("[data-class]").forEach(i=>{i.addEventListener("click",()=>{this.currentLabel=Number(i.dataset.class??0),this.syncClassControls()})});const t=this.root.querySelector("#knn-k");t==null||t.addEventListener("input",()=>{this.k=Number(t.value),this.update()}),(a=this.root.querySelector("[data-action='undo']"))==null||a.addEventListener("click",()=>this.undo()),(s=this.root.querySelector("[data-action='clear']"))==null||s.addEventListener("click",()=>{this.pushHistory(),this.points=[],this.update()}),(n=this.root.querySelector("[data-action='toggle-draw']"))==null||n.addEventListener("click",i=>{var d;this.touchDrawingEnabled=!this.touchDrawingEnabled;const o=i.currentTarget;o.setAttribute("aria-pressed",String(this.touchDrawingEnabled)),o.classList.toggle("is-active",this.touchDrawingEnabled);const r=o.querySelector("[data-draw-state]");r&&(r.textContent=this.touchDrawingEnabled?"be":"ki"),(d=this.canvas)==null||d.classList.toggle("is-touch-drawing",this.touchDrawingEnabled)}),(l=this.root.querySelector("[data-action='add-keyboard']"))==null||l.addEventListener("click",()=>{var d,h,p,u,g,b;const i=Number(((h=(d=this.root)==null?void 0:d.querySelector("[data-entry-x]"))==null?void 0:h.value)??.5),o=Number(((u=(p=this.root)==null?void 0:p.querySelector("[data-entry-y]"))==null?void 0:u.value)??.5),r=Number(((b=(g=this.root)==null?void 0:g.querySelector("[data-entry-label]"))==null?void 0:b.value)??0);this.pushHistory(),this.points.push({x:Math.max(0,Math.min(1,i)),y:Math.max(0,Math.min(1,o)),label:r}),this.update()}),this.canvas.addEventListener("pointerdown",i=>{var r;const o=D(this.canvas,i);if(i.pointerType!=="mouse"&&!this.touchDrawingEnabled){this.tapCandidate={point:o,clientX:i.clientX,clientY:i.clientY,moved:!1};return}this.drawing=!0,(r=this.canvas)==null||r.setPointerCapture(i.pointerId),this.pushHistory(),this.addPoint(o)}),this.canvas.addEventListener("pointermove",i=>{if(this.tapCandidate){Math.hypot(i.clientX-this.tapCandidate.clientX,i.clientY-this.tapCandidate.clientY)>9&&(this.tapCandidate.moved=!0);return}this.pointer=D(this.canvas,i),this.drawing?this.addPoint(this.pointer):this.draw()});const e=()=>{this.drawing=!1,this.lastDrawn=void 0};this.canvas.addEventListener("pointerup",()=>{this.tapCandidate&&(this.tapCandidate.moved||(this.pushHistory(),this.addPoint(this.tapCandidate.point)),this.tapCandidate=void 0),e()}),this.canvas.addEventListener("pointercancel",()=>{this.tapCandidate=void 0,e()}),this.canvas.addEventListener("pointerleave",()=>{this.pointer=void 0,this.tapCandidate=void 0,e(),this.draw()}),window.addEventListener("keydown",i=>{var o;!((o=this.root)!=null&&o.isConnected)||i.target.closest("button, a, input, select, textarea, summary, [contenteditable='true']")||((i.key==="1"||i.key==="2")&&(this.currentLabel=Number(i.key)-1,this.syncClassControls()),(i.ctrlKey||i.metaKey)&&i.key.toLowerCase()==="z"&&(i.preventDefault(),this.undo()))}),this.root.querySelectorAll("[data-answer]").forEach(i=>{i.addEventListener("click",()=>{var d,h;const o=i.dataset.answer==="right";(d=this.root)==null||d.querySelectorAll("[data-answer]").forEach(p=>p.classList.remove("is-correct","is-wrong")),i.classList.add(o?"is-correct":"is-wrong");const r=(h=this.root)==null?void 0:h.querySelector("[data-quiz-feedback]");r&&(r.textContent=o?"Így van. Több szomszéd szavazata tompítja egyetlen zajos címke hatását. A modult teljesítetted.":"Próbáld újra: azt keresd, mi változtatja meg közvetlenül a szavazók körét."),o&&this.context.onComplete()})})}syncClassControls(){var t;(t=this.root)==null||t.querySelectorAll("[data-class]").forEach(e=>{const a=Number(e.dataset.class)===this.currentLabel;e.classList.toggle("is-active",a),e.setAttribute("aria-pressed",String(a))})}pushHistory(){this.history.push(this.points.map(t=>({...t}))),this.history.length>30&&this.history.shift()}undo(){const t=this.history.pop();t&&(this.points=t,this.update())}addPoint(t){this.lastDrawn&&(this.lastDrawn.x-t.x)**2+(this.lastDrawn.y-t.y)**2<.0012||this.points.length>=320||(this.points.push({...t,label:this.currentLabel}),this.lastDrawn=t,this.update())}update(){const t=this.points.filter(n=>n.label===0).length,e=this.points.filter(n=>n.label===1).length,a=(n,l)=>{var o;const i=(o=this.root)==null?void 0:o.querySelector(n);i&&(i.textContent=l)};a("[data-count-a]",String(t)),a("[data-count-b]",String(e)),a("[data-k-output]",String(this.k)),a("[data-k-metric]",this.points.length<this.k?`${this.k} (${this.points.length} elérhető)`:String(this.k));const s=t>0&&e>0?"A háttér minden helyen a helyi többség döntését mutatja.":"A döntési háttér két osztály pontjai után jelenik meg.";a("[data-summary]",`${this.points.length} tanítópont · ${t} kör · ${e} négyzet. ${s}`),this.draw()}draw(){var l;if(!this.canvas)return;const t=this.canvas.getContext("2d");if(!t)return;const{width:e,height:a}=H(this.canvas);if(t.clearRect(0,0,e,a),t.fillStyle="#f4f1e8",t.fillRect(0,0,e,a),this.points.some(i=>i.label===0)&&this.points.some(i=>i.label===1)){const o=Math.max(1,e-40),r=Math.max(1,a-40),d=Math.max(20,Math.min(42,Math.round(o/16))),h=Math.max(20,Math.round(d*r/o)),p=o/d,u=r/h;for(let g=0;g<h;g+=1)for(let b=0;b<d;b+=1){const $={x:(b+.5)/d,y:(g+.5)/h},q=W(this.points,$,this.k);t.fillStyle=q.label===0?"rgba(224, 69, 42, 0.095)":"rgba(30, 79, 181, 0.1)",t.fillRect(20+b*p,20+g*u,p+.6,u+.6)}}F(t,e,a);let s;if(this.pointer&&this.points.length>0){s=W(this.points,this.pointer,this.k);const[i,o]=k(this.pointer,e,a);t.save(),t.strokeStyle="rgba(18, 32, 63, 0.22)",t.setLineDash([3,4]),s.neighbors.forEach(d=>{const[h,p]=k(d,e,a);t.beginPath(),t.moveTo(i,o),t.lineTo(h,p),t.stroke()});const r=s.neighbors.reduce((d,h)=>Math.max(d,Math.sqrt((h.x-this.pointer.x)**2+(h.y-this.pointer.y)**2)),0);t.beginPath(),t.strokeStyle=s.label===0?"rgba(184, 50, 30, .68)":"rgba(30, 79, 181, .68)",t.setLineDash([]),t.ellipse(i,o,r*(e-40),r*(a-40),0,0,Math.PI*2),t.stroke(),t.restore()}if(this.points.forEach(i=>{const[o,r]=k(i,e,a);ot(t,o,r,i.label??0,4.7)}),this.pointer){const[i,o]=k(this.pointer,e,a);t.save(),t.beginPath(),t.arc(i,o,7,0,Math.PI*2),t.strokeStyle="#12203f",t.lineWidth=1.5,t.stroke(),t.restore()}const n=(l=this.root)==null?void 0:l.querySelector("[data-observation]");if(n)if(!s)n.innerHTML='<p class="control-label">Élő megfigyelés</p><strong>Vidd a mutatót a térképre.</strong><p>Megmutatjuk, mely szomszédok szavaznának.</p>';else{const i=s.neighbors.filter(r=>r.label===0).length,o=s.neighbors.length-i;n.innerHTML=`<p class="control-label">Élő megfigyelés</p><strong>${s.label===0?"A körök":"A négyzetek"} nyernének.</strong><p>${i} : ${o} a szavazás. A ${Math.round(s.confidence*100)}% szavazati arány, nem kalibrált valószínűség.</p>`}}}class vt{constructor(t){m(this,"context");m(this,"root");m(this,"canvas");m(this,"cohort",ut());m(this,"ownPoint");m(this,"resizeObserver");this.context=t}mount(t){this.root=t,t.innerHTML=`
      <article class="module-page opening-page" data-module="opening">
        <header class="module-intro opening-intro">
          <p class="eyebrow">Nyitány · az adat mögött ember van</p>
          <h1>Te is egy pont vagy.</h1>
          <p class="lede">Egy rekord gyakran egy megfigyelési egység — itt egy válaszadó — több attribútumértékét fogja össze. Próbáld ki egy teljesen szintetikus mintán, név és adatküldés nélkül.</p>
        </header>

        <section class="workbench opening-workbench" aria-labelledby="opening-title">
          <div class="workbench-topline">
            <div><p class="section-number">PRÓBA 00</p><h2 id="opening-title">Hol lennél ezen a térképen?</h2></div>
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
          <p class="eyebrow">Az első felismerés</p>
          <h2 id="opening-depth-title">A kiválasztott változók teszik láthatóvá a mintázatot.</h2>
          <p>Ezen a térképen csak két választ ábrázolunk koordinátaként. A harmadik választ alakjel mutatja. Ugyanazokból a válaszokból más változópárral egészen más térkép születne. A pontok és a látható csoportok is generáltak; nem állítanak semmit valódi hallgatókról.</p>
          <div class="concept-grid">
            <div><p class="concept-label">Rekord</p><h3>Egy megfigyelési egység</h3><p>Itt egy válaszadó. Más feladatban lehet tranzakció, kép, mérés vagy hálózati csúcs.</p></div>
            <div><p class="concept-label">Attribútum</p><h3>Amit róla rögzítünk</h3><p>A koordináták és az alak egy-egy tulajdonságot kódolnak. A kihagyott tulajdonság itt láthatatlan.</p></div>
          </div>
          <a class="next-module-link" href="#/knn"><span>Következő nyitott állomás</span><strong>02 · Dobj le pontokat</strong><b aria-hidden="true">→</b></a>
        </section>
      </article>`,this.canvas=t.querySelector("canvas.data-canvas")??void 0,this.bindControls(),this.canvas&&(this.resizeObserver=new ResizeObserver(()=>this.draw()),this.resizeObserver.observe(this.canvas)),this.update()}destroy(){var t;(t=this.resizeObserver)==null||t.disconnect(),this.root=void 0,this.canvas=void 0}bindControls(){var a;if(!this.root)return;const t=this.root.querySelector("#opening-python"),e=this.root.querySelector("#opening-coffee");t==null||t.addEventListener("input",()=>this.update()),e==null||e.addEventListener("input",()=>this.update()),(a=this.root.querySelector(".self-form"))==null||a.addEventListener("submit",s=>{var l,i;s.preventDefault();const n=Number(((i=(l=this.root)==null?void 0:l.querySelector("#opening-mode"))==null?void 0:i.value)??0);this.ownPoint={x:.08+(Number((t==null?void 0:t.value)??3)-1)/4*.84,y:.9-Number((e==null?void 0:e.value)??2)/6*.8,label:n},this.context.onComplete(),this.update(),window.setTimeout(()=>{var o,r;return(r=(o=this.root)==null?void 0:o.querySelector(".cohort-map"))==null?void 0:r.scrollIntoView({behavior:window.matchMedia("(prefers-reduced-motion: reduce)").matches?"auto":"smooth",block:"center"})},80)})}update(){var l,i,o,r,d,h,p;const t=Number(((i=(l=this.root)==null?void 0:l.querySelector("#opening-python"))==null?void 0:i.value)??3),e=Number(((r=(o=this.root)==null?void 0:o.querySelector("#opening-coffee"))==null?void 0:r.value)??2),a=(d=this.root)==null?void 0:d.querySelector("[data-python-output]"),s=(h=this.root)==null?void 0:h.querySelector("[data-coffee-output]");a&&(a.textContent=`${t} / 5`),s&&(s.textContent=e===6?"6+":String(e));const n=(p=this.root)==null?void 0:p.querySelector("[data-summary]");n&&(n.textContent=this.ownPoint?"A sáfrány gyűrű jelöli a helyi pontodat; a belső alak a választott munkamód. Semmi nem hagyta el a böngészőt.":"86 generált mintapont. Állítsd be a válaszaidat, majd mutasd meg a saját pontodat."),this.draw()}draw(){if(!this.canvas)return;const t=this.canvas.getContext("2d");if(!t)return;const{width:e,height:a}=H(this.canvas);t.clearRect(0,0,e,a),t.fillStyle="#06080d",t.fillRect(0,0,e,a),t.save(),t.strokeStyle="rgba(111, 180, 255, .12)",t.setLineDash([2,7]);for(let n=1;n<5;n+=1){const l=24+n/5*(e-48),i=24+n/5*(a-48);t.beginPath(),t.moveTo(l,24),t.lineTo(l,a-24),t.stroke(),t.beginPath(),t.moveTo(24,i),t.lineTo(e-24,i),t.stroke()}t.restore();const s=["rgba(111,180,255,.56)","rgba(42,157,143,.56)","rgba(224,69,42,.58)"];if(this.cohort.forEach(n=>{const[l,i]=k(n,e,a,24);t.save(),t.translate(l,i);const o=n.label??0;t.strokeStyle=s[o],t.fillStyle=s[o],t.lineWidth=1.2,t.beginPath(),o===0?t.arc(0,0,3.2,0,Math.PI*2):o===1?t.rect(-2.8,-2.8,5.6,5.6):(t.moveTo(0,-3.7),t.lineTo(3.5,3),t.lineTo(-3.5,3),t.closePath()),t.fill(),t.restore()}),this.ownPoint){const[n,l]=k(this.ownPoint,e,a,24);t.save(),t.translate(n,l),t.strokeStyle="#f2c14e",t.fillStyle="#f2c14e",t.lineWidth=2.2,t.beginPath();const i=this.ownPoint.label??0;i===0?t.arc(0,0,4.5,0,Math.PI*2):i===1?t.rect(-4,-4,8,8):(t.moveTo(0,-5),t.lineTo(4.8,4),t.lineTo(-4.8,4),t.closePath()),t.fill(),t.beginPath(),t.arc(0,0,13,0,Math.PI*2),t.stroke(),t.restore()}}}function bt(c,t,e){return c<=2?{title:"Ezen a mintán még merev.",body:"Az alacsony fokszám a látható jel alakját is csak durván követi; ez alultanulásra utal."}:e<=t*1.9?{title:"Ezen a mintán együtt mozognak.",body:"A tanító- és validációs hiba között még nem nyílt nagy rés."}:{title:"Ezen a mintán kinyílt a rés.",body:"A tanítóhiba tovább csökken, miközben a validációs pontokon nő a hiba: ez túltanulásra utal."}}class yt{constructor(t){m(this,"context");m(this,"root");m(this,"canvas");m(this,"points",B());m(this,"history",[]);m(this,"degree",3);m(this,"ridge",0);m(this,"showTest",!1);m(this,"resizeObserver");this.context=t}mount(t){this.root=t,t.innerHTML=`
      <article class="module-page" data-module="regression">
        <header class="module-intro paper-header">
          <div class="module-index">06 <span>/ 12</span></div>
          <div>
            <p class="eyebrow">Regresszió · modellkomplexitás</p>
            <h1>Hajlítsd a görbét.</h1>
            <p class="lede">A szép illeszkedés csábító. Emeld a polinom fokszámát, majd fedd fel azokat a pontokat, amelyeket a modell tanulás közben nem látott.</p>
          </div>
          <a class="present-link" href="?mode=present#/regresszio" aria-label="Regresszió megnyitása vetítés módban">Vetítés <span aria-hidden="true">↗</span></a>
        </header>

        <section class="workbench" aria-labelledby="reg-workbench-title">
          <div class="workbench-topline">
            <div><p class="section-number">INTERAKTÍV MUNKAPAD</p><h2 id="reg-workbench-title">Mikor lesz túl jó az illeszkedés?</h2></div>
            <p class="workbench-instruction">A kitöltött pontokon tanul a modell. Kattintással új tanítópontot adhatsz hozzá.</p>
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
              <p class="tool-note">Az illesztéshez nem használjuk őket; a fokszám és a regularizáció összehasonlítására szolgálnak. A végső teljesítményt ettől független teszthalmazon kellene egyszer megmérni; ilyen külön halmaz ebben a játékban nincs.</p>
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
                <span class="range-ends"><small>merev</small><small>rugalmas</small></span>
              </label>
              <label class="range-control" for="reg-ridge">
                <span><strong>L2-regularizáció (ridge), λ</strong><output for="reg-ridge" data-ridge-output>0</output></span>
                <input id="reg-ridge" type="range" min="0" max="60" step="1" value="0" />
                <span class="range-ends"><small>szabad</small><small>visszafogott</small></span>
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
          <div class="depth-kicker">Próbáld ki</div><h2 id="reg-try-title">Ne a görbét, a hibákat figyeld</h2>
          <ol class="experiment-list">
            <li><span>01</span><div><strong>Indulj 1. fokon.</strong><p>A tanító- és a validációs hiba is nagy: a modell túl egyszerű.</p></div></li>
            <li><span>02</span><div><strong>Fedd fel a validációs pontokat.</strong><p>Növeld a fokszámot. Hol válik ketté a két hibagörbe?</p></div></li>
            <li><span>03</span><div><strong>Adj L2-regularizációt.</strong><p>A ridge a konstans tag kivételével az együtthatók négyzetösszegét bünteti. A görbe stabilabb lehet, miközben az illesztési hiba nőhet.</p></div></li>
          </ol>
        </section>

        <section class="depth reading-layer" aria-labelledby="reg-depth-title">
          <p class="eyebrow">Mélyebbre</p>
          <h2 id="reg-depth-title">A legkisebb tanítóhiba nem a cél.</h2>
          <p>A regresszió folytonos célváltozót becsül. A polinom együtthatóit itt úgy választjuk, hogy a tanítópontokon mért négyzetes hibák összege kicsi legyen. A modell értékét mégis az mutatja meg, mit tesz új adatokon.</p>
          <div class="concept-grid">
            <div><p class="concept-label">Fogalom</p><h3>Átlagos négyzetes hiba</h3><p>A nagy eltéréseket négyzetesen bünteti. A függőleges szárak a vásznon az egyes reziduumok.</p></div>
            <div class="formula" aria-label="M S E egyenlő egy per n szor az y i mínusz y kalap i négyzetének összege">
              <math display="block"><mi>MSE</mi><mo>=</mo><mfrac><mn>1</mn><mi>n</mi></mfrac><munderover><mo>∑</mo><mrow><mi>i</mi><mo>=</mo><mn>1</mn></mrow><mi>n</mi></munderover><msup><mrow><mo>(</mo><msub><mi>y</mi><mi>i</mi></msub><mo>−</mo><msub><mover><mi>y</mi><mo>^</mo></mover><mi>i</mi></msub><mo>)</mo></mrow><mn>2</mn></msup></math>
            </div>
          </div>
          <aside class="edge-case"><strong>Torzítás–szórás átváltás.</strong> Az egyszerű modell stabil, de következetesen tévedhet. A túl rugalmas modell a minta zajával együtt változik.</aside>
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
      </article>`,this.canvas=t.querySelector("canvas.data-canvas")??void 0,this.bindControls(),this.canvas&&(this.resizeObserver=new ResizeObserver(()=>this.draw()),this.resizeObserver.observe(this.canvas)),this.update()}destroy(){var t;(t=this.resizeObserver)==null||t.disconnect(),this.root=void 0,this.canvas=void 0}get trainingPoints(){return this.points.filter(t=>t.split!=="test")}get testPoints(){return this.points.filter(t=>t.split==="test")}coefficients(t=this.degree){return Y(this.trainingPoints,t,this.ridge/1e3)}bindControls(){var t,e,a,s,n,l,i;!this.root||!this.canvas||((t=this.root.querySelector("#reg-degree"))==null||t.addEventListener("input",o=>{this.degree=Number(o.target.value),this.update()}),(e=this.root.querySelector("#reg-ridge"))==null||e.addEventListener("input",o=>{this.ridge=Number(o.target.value),this.update()}),(a=this.root.querySelector("[data-show-test]"))==null||a.addEventListener("change",o=>{this.showTest=o.target.checked,this.update()}),(s=this.root.querySelector("[data-action='new-sample']"))==null||s.addEventListener("click",()=>{const o=Math.floor(Math.random()*1e4);this.points=B(o),this.history=[],this.update()}),(n=this.root.querySelector("[data-action='reset']"))==null||n.addEventListener("click",()=>{var h,p,u;this.points=B(),this.history=[],this.degree=3,this.ridge=0,this.showTest=!1;const o=(h=this.root)==null?void 0:h.querySelector("#reg-degree"),r=(p=this.root)==null?void 0:p.querySelector("#reg-ridge"),d=(u=this.root)==null?void 0:u.querySelector("[data-show-test]");o&&(o.value="3"),r&&(r.value="0"),d&&(d.checked=!1),this.update()}),(l=this.root.querySelector("[data-action='undo']"))==null||l.addEventListener("click",()=>{const o=this.history.pop();o&&(this.points=o,this.update())}),(i=this.root.querySelector("[data-action='add-keyboard']"))==null||i.addEventListener("click",()=>{var d,h,p,u;const o=Number(((h=(d=this.root)==null?void 0:d.querySelector("[data-entry-x]"))==null?void 0:h.value)??0),r=Number(((u=(p=this.root)==null?void 0:p.querySelector("[data-entry-y]"))==null?void 0:u.value)??0);this.addPoint({x:Math.max(-1,Math.min(1,o)),y:Math.max(-1,Math.min(1,r)),split:"train"})}),this.canvas.addEventListener("click",o=>{var h;const r=(h=this.canvas)==null?void 0:h.getBoundingClientRect();if(!r)return;const d=24;this.addPoint({x:Math.max(-1,Math.min(1,(o.clientX-r.left-d)/Math.max(1,r.width-d*2)*2-1)),y:Math.max(-.9,Math.min(.9,.9-(o.clientY-r.top-d)/Math.max(1,r.height-d*2)*1.8)),split:"train"})}),this.root.querySelectorAll("[data-answer]").forEach(o=>{o.addEventListener("click",()=>{var h,p;const r=o.dataset.answer==="right";(h=this.root)==null||h.querySelectorAll("[data-answer]").forEach(u=>u.classList.remove("is-correct","is-wrong")),o.classList.add(r?"is-correct":"is-wrong");const d=(p=this.root)==null?void 0:p.querySelector("[data-quiz-feedback]");d&&(d.textContent=r?"Pontosan. A modell a tanítóminta zaját is megtanulta, ezért új adatokon romlik. A modult teljesítetted.":"Nézd meg újra, melyik hiba csökken, és melyik emelkedik."),r&&this.context.onComplete()})}))}addPoint(t){this.points.length>=80||(this.history.push(this.points.map(e=>({...e}))),this.points.push(t),this.update())}update(){var i,o,r;const t=this.coefficients(),e=C(this.trainingPoints,t),a=C(this.testPoints,t),s=this.showTest?bt(this.degree,e,a):{title:"A validáció még rejtve.",body:"A tanítóhiba önmagában nem mutatja meg, hogyan viselkedik a modell a félretett pontokon."},n=(d,h)=>{var u;const p=(u=this.root)==null?void 0:u.querySelector(d);p&&(p.textContent=h)};n("[data-degree-output]",String(this.degree)),n("[data-ridge-output]",this.ridge===0?"0":(this.ridge/1e3).toFixed(3)),n("[data-train-error]",e.toFixed(3)),n("[data-test-error]",this.showTest?a.toFixed(3):"rejtve"),n("[data-summary]",`${this.trainingPoints.length} tanítópont${this.showTest?` · ${this.testPoints.length} validációs pont`:" · a validációs pontok rejtve"}. A függőleges szárak a reziduumokat mutatják.`);const l=(i=this.root)==null?void 0:i.querySelector("[data-observation]");l&&(l.innerHTML=`<p class="control-label">Élő megfigyelés</p><strong>${s.title}</strong><p>${s.body}</p>`),(r=(o=this.root)==null?void 0:o.querySelector(".test-metric"))==null||r.classList.toggle("is-revealed",this.showTest),this.updateChart(),this.draw()}updateChart(){var i,o;if(!this.root)return;const t=Array.from({length:12},(r,d)=>{const h=Y(this.trainingPoints,d+1,this.ridge/1e3);return{train:C(this.trainingPoints,h),test:C(this.testPoints,h)}}),e=this.showTest?t.flatMap(r=>[r.train,r.test]):t.map(r=>r.train),a=Math.max(.03,...e.filter(Number.isFinite)),s=r=>t.map((d,h)=>{const p=24+h/11*484,g=98-Math.min(1,d[r]/a)*78;return`${h===0?"M":"L"}${p.toFixed(1)} ${g.toFixed(1)}`}).join(" ");(i=this.root.querySelector("[data-train-path]"))==null||i.setAttribute("d",s("train"));const n=this.root.querySelector("[data-test-path]");n==null||n.setAttribute("d",s("test")),n==null||n.toggleAttribute("hidden",!this.showTest),(o=this.root.querySelector("[data-test-key]"))==null||o.toggleAttribute("hidden",!this.showTest);const l=this.root.querySelector("[data-chart-marker]");if(l){const r=24+(this.degree-1)/11*484;l.setAttribute("x1",String(r)),l.setAttribute("x2",String(r))}}draw(){if(!this.canvas)return;const t=this.canvas.getContext("2d");if(!t)return;const{width:e,height:a}=H(this.canvas);t.clearRect(0,0,e,a),t.fillStyle="#f4f1e8",t.fillRect(0,0,e,a),F(t,e,a,24);const s=i=>24+(i+1)/2*(e-48),n=i=>24+(.9-i)/1.8*(a-48),l=this.coefficients();t.save(),t.strokeStyle="rgba(224, 69, 42, .34)",t.lineWidth=1,this.trainingPoints.forEach(i=>{const o=V(l,i.x);t.beginPath(),t.moveTo(s(i.x),n(i.y)),t.lineTo(s(i.x),n(o)),t.stroke()}),t.restore(),t.save(),t.beginPath();for(let i=0;i<=260;i+=1){const o=-1+i/260*2,r=V(l,o);!Number.isFinite(r)||Math.abs(r)>3||(i===0?t.moveTo(s(o),n(r)):t.lineTo(s(o),n(r)))}t.strokeStyle="#1e4fb5",t.lineWidth=3,t.stroke(),t.restore(),this.trainingPoints.forEach(i=>{t.beginPath(),t.arc(s(i.x),n(i.y),4.6,0,Math.PI*2),t.fillStyle="#d84429",t.fill(),t.strokeStyle="#f4f1e8",t.lineWidth=1.5,t.stroke()}),this.showTest&&this.testPoints.forEach(i=>{const o=s(i.x),r=n(i.y);t.save(),t.translate(o,r),t.rotate(Math.PI/4),t.fillStyle="#f4f1e8",t.strokeStyle="#1e4fb5",t.lineWidth=2,t.fillRect(-4.5,-4.5,9,9),t.strokeRect(-4.5,-4.5,9,9),t.restore()})}}const G="adatspiral-progress-v1";function kt(){try{const c=JSON.parse(localStorage.getItem(G)??"[]");return new Set(Array.isArray(c)?c.filter(t=>typeof t=="string"):[])}catch{return new Set}}class zt{constructor(t){m(this,"host");m(this,"completed",kt());m(this,"current");m(this,"route","");m(this,"hasRendered",!1);this.host=t}mount(){var t;window.addEventListener("hashchange",()=>this.render()),(t=document.querySelector(".skip-link"))==null||t.addEventListener("click",e=>{e.preventDefault();const a=document.querySelector("#main-content");a&&(a.tabIndex=-1,a.focus())}),this.render()}render(){var s;(s=this.current)==null||s.destroy(),document.body.classList.remove("menu-open"),this.route=window.location.hash.replace(/^#\/?/,"").split("?")[0];const t=K(this.route);document.title=this.route?`${(t==null?void 0:t.shortTitle)??"Állomás"} · Adatspirál`:"Adatspirál · Bevezetés az adattudományba 1.";const e=new URLSearchParams(window.location.search).get("mode")==="present";document.body.classList.toggle("present-mode",e),document.body.dataset.route=this.route||"home",this.host.innerHTML=`${this.header(e)}<div id="page-root"></div>${this.rail()}${this.menu()}${this.toast()}`,this.bindShell();const a=this.host.querySelector("#page-root");if(a){if(this.route){const n={presentMode:e,onComplete:()=>this.complete(this.route)};let l;this.route===y.slug&&(l=new vt(n)),this.route==="knn"&&(l=new gt(n)),this.route==="regresszio"&&(l=new yt(n)),this.route==="klaszterezes"&&(l=new mt(n)),l?(a.innerHTML='<main id="main-content"></main>',l.mount(a.querySelector("main")),this.current=l):this.renderUnavailable(a)}else{const n=new at;n.mount(a,this.completed),this.current=n}this.syncProgress(),window.scrollTo({top:0,left:0,behavior:"instant"}),this.hasRendered&&window.requestAnimationFrame(()=>{const n=this.host.querySelector("#main-content");n&&(n.tabIndex=-1,n.focus({preventScroll:!0}))}),this.hasRendered=!0}}header(t){const e=K(this.route);return t?`<header class="present-header"><a class="wordmark" href="${window.location.pathname}#/${this.route}" aria-label="Kilépés a vetítés módból">${this.logo()}<span>Adatspirál</span></a><div><span>VETÍTÉS</span><strong>${(e==null?void 0:e.title)??"Állomás"}</strong></div><a class="exit-present" href="${window.location.pathname}#/${this.route}">Kilépés</a></header>`:`<header class="site-header">
      <a class="wordmark" href="#/" aria-label="Adatspirál kezdőlap">${this.logo()}<span>Adatspirál</span></a>
      <nav aria-label="Fő navigáció"><a href="#/" ${this.route?"":"aria-current='page'"}>Térkép</a><a href="#/nyitany" ${this.route==="nyitany"?"aria-current='page'":""}>Nyitány</a></nav>
      <button class="station-menu-button" type="button" aria-expanded="false" aria-controls="station-menu"><span>Állomások</span><i aria-hidden="true"></i></button>
    </header>`}rail(){return this.route?`<nav class="station-rail" aria-label="Állomások">
      <a class="rail-prologue ${this.route===y.slug?"is-active":""}" href="#/${y.slug}" aria-label="Nyitány: ${y.title}"><span>◎</span><em>Nyitány</em></a>
      <ol>${j.map(t=>{const e=this.route===t.slug,a=this.completed.has(t.slug);return t.status==="live"?`<li><a class="${e?"is-active":""} ${a?"is-complete":""}" href="#/${t.slug}" aria-label="${t.index}. ${t.title}" ${e?"aria-current='page'":""}><span>${String(t.index).padStart(2,"0")}</span><em>${t.shortTitle}</em></a></li>`:`<li><span class="is-coming" aria-label="${t.index}. ${t.title}, hamarosan"><i></i><em>${t.shortTitle}</em></span></li>`}).join("")}</ol>
    </nav>`:""}menu(){return`<div class="station-menu-backdrop" data-menu-backdrop hidden></div><aside class="station-menu" id="station-menu" role="dialog" aria-modal="true" aria-label="Állomásválasztó" aria-hidden="true" inert>
      <div class="station-menu-head"><div><small>A félév térképe</small><strong>Állomások</strong></div><button type="button" data-close-menu aria-label="Állomásválasztó bezárása">×</button></div>
      <a class="menu-prologue ${this.route===y.slug?"is-active":""}" href="#/${y.slug}"><span>◎</span><span><small>Nyitány</small><strong>${y.title}</strong></span></a>
      <ol>${j.map(t=>t.status==="live"?`<li><a class="${this.route===t.slug?"is-active":""}" href="#/${t.slug}"><span>${String(t.index).padStart(2,"0")}</span><span><strong>${t.title}</strong><small>${t.shortTitle}</small></span><em data-progress-slug="${t.slug}">${this.completed.has(t.slug)?"kész":"nyitva"}</em></a></li>`:`<li><div><span>${String(t.index).padStart(2,"0")}</span><span><strong>${t.title}</strong><small>${t.shortTitle}</small></span><em>hamarosan</em></div></li>`).join("")}</ol>
    </aside>`}toast(){return'<div class="completion-toast" role="status" aria-live="polite" aria-hidden="true" data-completion-toast><span aria-hidden="true">✓</span><div><strong>Állomás teljesítve</strong><small>A haladás ezen az eszközön marad.</small></div></div>'}bindShell(){var n;const t=this.host.querySelector(".station-menu-button"),e=this.host.querySelector(".station-menu"),a=this.host.querySelector("[data-menu-backdrop]"),s=l=>{var i,o,r,d;t==null||t.setAttribute("aria-expanded",String(l)),e==null||e.setAttribute("aria-hidden",String(!l)),e==null||e.toggleAttribute("inert",!l),e==null||e.classList.toggle("is-open",l),a&&(a.hidden=!l),document.body.classList.toggle("menu-open",l),(i=this.host.querySelector("#page-root"))==null||i.toggleAttribute("inert",l),(o=this.host.querySelector(".station-rail"))==null||o.toggleAttribute("inert",l),(r=this.host.querySelector(".site-header .wordmark"))==null||r.toggleAttribute("inert",l),(d=this.host.querySelector(".site-header nav"))==null||d.toggleAttribute("inert",l),l?window.setTimeout(()=>{var h;return(h=e==null?void 0:e.querySelector("[data-close-menu]"))==null?void 0:h.focus()},20):t==null||t.focus()};t==null||t.addEventListener("click",()=>s(t.getAttribute("aria-expanded")!=="true")),(n=this.host.querySelector("[data-close-menu]"))==null||n.addEventListener("click",()=>s(!1)),a==null||a.addEventListener("click",()=>s(!1)),e==null||e.addEventListener("keydown",l=>{if(l.key==="Escape"){l.preventDefault(),s(!1);return}if(l.key!=="Tab")return;const i=[...e.querySelectorAll("a[href], button:not([disabled])")].filter(d=>!d.hasAttribute("hidden")),o=i[0],r=i.at(-1);!o||!r||(l.shiftKey&&document.activeElement===o?(l.preventDefault(),r.focus()):!l.shiftKey&&document.activeElement===r&&(l.preventDefault(),o.focus()))})}complete(t){if(this.completed.has(t))return;this.completed.add(t);try{localStorage.setItem(G,JSON.stringify([...this.completed]))}catch{}this.syncProgress();const e=this.host.querySelector("[data-completion-toast]");e&&(e.setAttribute("aria-hidden","false"),e.classList.add("is-visible"),window.setTimeout(()=>{e.classList.remove("is-visible"),e.setAttribute("aria-hidden","true")},3600))}syncProgress(){this.completed.forEach(t=>{this.host.querySelectorAll(`[data-progress-slug="${t}"]`).forEach(e=>{e.textContent=e.classList.contains("ledger-status")?"Kész":"teljesítve",e.classList.add("is-complete")})})}renderUnavailable(t){const e=K(this.route);t.innerHTML=`<main id="main-content" class="unavailable-page"><p class="eyebrow">${e?`${String(e.index).padStart(2,"0")} / 12`:"Eltévedt pont"}</p><h1>${(e==null?void 0:e.title)??"Ez az állomás nincs a térképen."}</h1><p>${e?"Ez az állomás a félév későbbi szakaszában nyílik ki.":"Válassz egy nyitott állomást a térképről."}</p><a class="button button-hand" href="#/">Vissza a térképhez</a></main>`}logo(){return'<svg viewBox="0 0 32 32" aria-hidden="true"><path d="M7 8c5-5 15-4 18 1 4 7-4 15-12 14-6-1-8-7-4-10 4-4 11-1 10 4-1 3-6 4-9 1"/><circle cx="7" cy="8" r="2.2"/><circle cx="19" cy="17" r="2.2"/></svg>'}}const Z=document.querySelector("#app");if(!Z)throw new Error("Az alkalmazás gyökéreleme hiányzik.");new zt(Z).mount();
