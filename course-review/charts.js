'use strict';
// All plotted values come from the saved class CSVs in ATLAS. No live data or invented observations.
window.ATLAS_CHARTS=(()=>{
 const supported=['C03','C15','C20','C22','C24','C33'];
 const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
 const colors=['#00549d','#ab4a13','#207345','#7354a4','#8c3c67'];
 const fmt=(v,n=1)=>Number(v).toLocaleString('en-US',{minimumFractionDigits:n,maximumFractionDigits:n});
 function mount(host,c,place){
  const isLine=['C03','C15','C33'].includes(c.id),isAge=c.id==='C24',isYouth=c.id==='C22';
  let rows=c.data[0].rows,selected=place.replace(' (national)',''),period=0,index=rows.length-1;
  let enabled=new Set(c.id==='C33'?[...new Set(rows.map(r=>r.country))]:[]);
  host.innerHTML=`<section class="data-explorer" aria-labelledby="chart-title"><h3 id="chart-title">Explore the class data</h3><div id="chart-controls"></div><div class="chart-scroll" tabindex="0" aria-label="Scrollable chart"><div id="chart-drawing"></div></div><output id="chart-value" class="chart-value" aria-live="polite"></output><p id="chart-note" class="data-notice"></p><p><a href="${esc(c.data[0].url)}" id="chart-download" download>Download these data (CSV)</a> · <a href="#source-title">See sources below</a></p></section>`;
  const q=s=>host.querySelector(s),controls=q('#chart-controls');
  const option=(name)=>`<option ${name===selected?'selected':''}>${esc(name)}</option>`;
  if(isAge){selected=rows.some(r=>r.country===selected)?selected:rows[0].country;controls.innerHTML=`<label>Country<select id="chart-choice">${rows.map(r=>option(r.country)).join('')}</select></label><div class="chart-period"><button data-period="0" aria-pressed="true">Projections to 2060</button><button data-period="1" aria-pressed="false">History: 1980–2020</button></div>`;}
  else if(!isLine){const names=[...new Set(rows.map(r=>r[isYouth?'place':'country']))];selected=names.includes(selected)?selected:names[0];controls.innerHTML=`<label>${isYouth?'State or country':'Country'}<select id="chart-choice">${names.map(option).join('')}</select></label>`;}
  else{
   const dates=[...new Set(rows.map(r=>r.year||r.month))];index=dates.length-1;
   controls.innerHTML=(c.id==='C33'?`<div class="series-controls" aria-label="Countries shown">${[...enabled].map((name,i)=>`<label><input type="checkbox" value="${esc(name)}" checked><span style="color:${colors[i]}">●</span> ${esc(name)}</label>`).join('')}</div>`:'')+`<label>Choose ${c.id==='C15'?'a month':'a year'}<input id="chart-date" type="range" min="0" max="${dates.length-1}" value="${index}" step="1"></label>`;
  }
  function svg(inner,title){return `<svg viewBox="0 0 600 350" role="img" aria-label="${esc(title)}"><title>${esc(title)}</title>${inner}</svg>`;}
  function text(x,y,s,anchor='start',extra=''){return `<text x="${x}" y="${y}" text-anchor="${anchor}" ${extra}>${esc(s)}</text>`;}
  function draw(){
   if(isLine){
    const dates=[...new Set(rows.map(r=>r.year||r.month))],groups=c.id==='C33'?[...new Set(rows.map(r=>r.country))]:[c.title];
    const log=c.id==='C33',value=r=>Number(r.real_gdp_per_person||r.gdp_per_person||r.ipca_monthly_percent),tx=i=>70+510*i/(dates.length-1),ymax=c.id==='C15'?100:log?50000:Math.ceil(Math.max(...rows.map(value))/10000)*10000,ymin=log?1000:0;
    const ty=v=>290-240*(log?(Math.log(v)-Math.log(ymin))/(Math.log(ymax)-Math.log(ymin)):(v-ymin)/(ymax-ymin));
    const ticks=log?[1000,2000,5000,10000,20000,50000]:[0,ymax/4,ymax/2,3*ymax/4,ymax];
    let inner=text(70,23,c.id==='C15'?'Monthly inflation (%)':'Real GDP per person · constant 2015 US$');
    inner+=ticks.map(v=>`<line x1="70" x2="580" y1="${ty(v)}" y2="${ty(v)}" class="chart-grid"/>`+text(62,ty(v)+5,fmt(v,0),'end')).join('');
    const tickIndex=[0,Math.round((dates.length-1)/3),Math.round(2*(dates.length-1)/3),dates.length-1];
    inner+=tickIndex.map(i=>text(tx(i),316,String(dates[i]).slice(0,4),'middle')).join('')+text(320,342,'Year','middle');
    const current=[];
    groups.forEach((name,i)=>{if(c.id==='C33'&&!enabled.has(name))return;const subset=c.id==='C33'?rows.filter(r=>r.country===name):rows;const coords=subset.map(r=>[tx(dates.indexOf(r.year||r.month)),ty(value(r))]);inner+=`<polyline points="${coords.map(v=>v.join(',')).join(' ')}" fill="none" stroke="${colors[i]}" stroke-width="3"/>`;const row=subset.find(r=>(r.year||r.month)===dates[index]);if(row){inner+=`<circle cx="${tx(index)}" cy="${ty(value(row))}" r="6" fill="${colors[i]}" stroke="white" stroke-width="2"/>`;current.push(`${name}: ${c.id==='C15'?'':'$'}${fmt(value(row),c.id==='C15'?2:0)}${c.id==='C15'?'%':''}`);}});
    inner+=`<line x1="${tx(index)}" x2="${tx(index)}" y1="50" y2="290" class="chart-probe"/><rect x="70" y="50" width="510" height="240" fill="transparent" data-probe="true" style="cursor:crosshair"/>`;
    q('#chart-drawing').innerHTML=svg(inner,`${c.title}. Select a date using the slider or graph.`);
    const date=c.id==='C15'?new Date(dates[index]+'T12:00:00').toLocaleDateString('en-US',{month:'long',year:'numeric'}):dates[index];
    q('#chart-value').textContent=`${date} — ${current.length?current.join(' · '):'Choose a country to show its line.'}`;
    q('#chart-note').textContent=c.id==='C33'?'1960–2024. Log scale: equal vertical distances mean equal proportional changes. These are constant U.S. dollars, not purchasing-power comparisons. Select countries and a year; values appear above.':c.id==='C15'?'1985–1996. Monthly percentage change in Brazil’s IPCA. Select a month on the graph or use the slider. A lower positive rate still means rising prices.':'1960–2024. World Bank real GDP per person. Select a year on the graph or use the slider. The original class figure is below.';
   }else if(isAge){
    const r=c.data[period].rows.find(r=>r.country===selected),pop=Number(r.working_age_change_percent),growth=Number(r[period?'annualized_gdp_per_person_growth_percent':'projected_gdp_per_person_growth_percent']);
    // Same axis limits across countries and between past and future; measures remain in separate panels.
    function panel(x,value,min,max,label,sub,color){const y=v=>285-220*(v-min)/(max-min);let s=text(x+100,25,label,'middle')+text(x+100,46,sub,'middle');for(const t of [min,0,max])s+=`<line x1="${x+38}" x2="${x+205}" y1="${y(t)}" y2="${y(t)}" class="${t===0?'chart-zero':'chart-grid'}"/>`+text(x+30,y(t)+5,t+'%','end');s+=`<rect x="${x+88}" y="${Math.min(y(0),y(value))}" width="54" height="${Math.abs(y(value)-y(0))}" fill="${color}"/>`+text(x+115,value<0?y(value)+21:y(value)-10,fmt(value,1)+'%','middle');return s;}
    q('#chart-drawing').innerHTML=svg(panel(5,pop,-60,100,'Working-age population',period?'1980–2020 · total change':'2023–2060 · total change',colors[0])+panel(310,growth,0,6,'GDP per person',period?'1980–2020 · annual growth':'2024–2060 · annual growth',colors[1]),`${selected}: population ${fmt(pop)} percent; GDP per person ${fmt(growth,2)} percent per year.`);
    q('#chart-value').textContent=`${selected} — working-age population: ${fmt(pop)}% over ${r.population_period}; GDP per person: ${fmt(growth,2)}% per year over ${r.growth_period}.`;
    q('#chart-note').textContent=period?'History: people aged 20–64, UN population data; GDP per person, Maddison 2023 release. The population change covers the whole period. Growth is annualized.':`OECD scenario: ages 20–64; UN medium population projection. Employment entry/exit rates stay fixed. Productivity follows its ${r.productivity_reference_period} trend (${fmt(r.historical_gdp_per_worker_growth_percent,2)}% per year). A shrinking workforce does not by itself mean falling income per person.`;
    controls.querySelectorAll('[data-period]').forEach(b=>b.setAttribute('aria-pressed',String(Number(b.dataset.period)===period)));
    q('#chart-download').href=c.data[period].url;
   }else{
    const rs=rows.filter(r=>r[isYouth?'place':'country']===selected),r=rs[0];
    const values=isYouth?rs.map(r=>({label:'Ages '+r.age,v:Number(r.rate),lo:r.lower,hi:r.upper})):['month2','month24'].map((key,i)=>({label:i?'Month 24':'Month 2',v:Number(r[key])}));
    const max=isYouth?30:100,x=v=>150+420*v/max;
    let inner=text(15,27,isYouth?'Unemployment · % of each age group’s labor force':'Income while unemployed · % of income while working');
    for(const v of [0,max/2,max])inner+=`<line x1="${x(v)}" x2="${x(v)}" y1="65" y2="265" class="chart-grid"/>`+text(x(v),299,v+'%','middle');
    values.forEach((v,i)=>{const y=90+i*105;inner+=text(138,y+24,v.label,'end')+`<rect x="150" y="${y}" width="${420*v.v/max}" height="38" fill="${colors[i]}"/>`+text(x(v.v)+8,y+24,fmt(v.v)+'%');if(v.lo!==' '&&v.lo&&v.hi)inner+=`<path d="M${x(Number(v.lo))},${y+19}H${x(Number(v.hi))} M${x(Number(v.lo))},${y+11}v16 M${x(Number(v.hi))},${y+11}v16" stroke="#172e40" stroke-width="2"/>`;});
    q('#chart-drawing').innerHTML=svg(inner,selected+' — '+values.map(v=>v.label+': '+fmt(v.v)+'%').join('; '));
    q('#chart-value').textContent=selected+' — '+values.map(v=>v.label+': '+fmt(v.v)+'%').join(' · ');
    q('#chart-note').textContent=isYouth?`2024. Rates use each age group’s labor force as the denominator. ${r.geography==='Country'?'Eurostat country estimates.':'BLS state estimates; whiskers show 90% confidence intervals.'} Compare a country or state using the menu.`:`Policy year ${r.policy_year}. OECD example: single, age 40, no children, previously earning the average wage; housing benefits included. Months follow any waiting period.`;
   }
  }
  controls.addEventListener('change',e=>{if(e.target.id==='chart-choice')selected=e.target.value;if(e.target.type==='checkbox'){e.target.checked?enabled.add(e.target.value):enabled.delete(e.target.value);}draw();});
  controls.addEventListener('input',e=>{if(e.target.id==='chart-date'){index=Number(e.target.value);draw();}});
  controls.addEventListener('click',e=>{const b=e.target.closest('[data-period]');if(b){period=Number(b.dataset.period);draw();}});
  q('#chart-drawing').addEventListener('click',e=>{if(!e.target.hasAttribute('data-probe'))return;const svg=e.target.closest('svg'),point=svg.createSVGPoint();point.x=e.clientX;point.y=e.clientY;const x=point.matrixTransform(svg.getScreenCTM().inverse()).x;const slider=q('#chart-date');index=Math.max(0,Math.min(Number(slider.max),Math.round((x-70)/510*Number(slider.max))));slider.value=index;draw();});
  draw();
 }
 return {supports:id=>supported.includes(id),mount};
})();
