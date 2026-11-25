var WA="923240068995"; /* EDIT: country code + number, no + or spaces */
var T=[["Complete Blood Count (CBC)","Blood",600,"Anaemia, infection"],["Blood Sugar Fasting","Blood",200,"Fast 8 hours"],["Blood Sugar Random","Blood",150,""],["HbA1c","Blood",1400,"3-month sugar average"],["Lipid Profile","Blood",1500,"Fast 8 to 10 hours"],["Liver Function Tests","Blood",1200,""],["Creatinine","Blood",500,"Kidney check"],["Uric Acid","Blood",450,""],["Urine Routine (R/E)","Blood",300,""],["Vitamin D","Blood",3500,""],["Vitamin B12","Blood",2200,""],["Ferritin","Blood",1800,"Iron stores"],
["TSH","Hormones",1000,"Thyroid"],["Thyroid Profile (T3, T4, TSH)","Hormones",2500,""],
["Hepatitis B (HBsAg)","Infection",700,""],["Hepatitis C (Anti-HCV)","Infection",1500,""],["Dengue NS1","Infection",2000,""],["Typhidot","Infection",1200,"Typhoid"],["CRP","Infection",1200,""],
["Chest X-ray","Imaging",1000,""],["X-ray Limb or Joint","Imaging",1200,""],["Ultrasound Abdomen","Imaging",2500,""],["Ultrasound Pregnancy","Imaging",2500,""]];
var C=["All","Blood","Hormones","Infection","Imaging"],cat="All",sel={},$=function(i){return document.getElementById(i)},fm=function(n){return "Rs "+n.toLocaleString("en-PK")};
function render(){var q=$("q").value.toLowerCase(),h="",k=0;T.forEach(function(t,i){if((cat=="All"||t[1]==cat)&&t[0].toLowerCase().indexOf(q)>-1){h+='<div class="row" style="animation-delay:'+(k++*30)+'ms"><div>'+t[0]+(t[3]?'<small>'+t[3]+'</small>':'')+'</div><span class="pr">'+fm(t[2])+'</span><button type="button" class="add'+(sel[i]?' on':'')+'" data-i="'+i+'">'+(sel[i]?'Added':'Add')+'</button></div>'}});
$("list").innerHTML=h||'<div class="row">No test found. Message us on WhatsApp.</div>'}
function sum(){var k=Object.keys(sel),s=0;$("chips").innerHTML=k.length?k.map(function(i){s+=T[i][2];return "<span>"+T[i][0]+"</span>"}).join(""):"<small>No tests selected yet.</small>";$("tot").textContent=fm(s);var c=$("cnt");c.textContent=k.length;c.style.display=k.length?"grid":"none"}
$("tabs").innerHTML=C.map(function(c){return '<button type="button" class="tab" aria-pressed="'+(c==cat)+'">'+c+'</button>'}).join("");
$("tabs").onclick=function(e){if(e.target.className!="tab")return;cat=e.target.textContent;[].forEach.call($("tabs").children,function(b){b.setAttribute("aria-pressed",b.textContent==cat)});render()};
$("q").oninput=render;
$("list").onclick=function(e){var i=e.target.getAttribute("data-i");if(i===null)return;sel[i]?delete sel[i]:sel[i]=1;e.target.className="add"+(sel[i]?" on":"");e.target.textContent=sel[i]?"Added":"Add";sum()};
$("d").min=new Date().toISOString().slice(0,10);
$("f").onsubmit=function(e){e.preventDefault();var k=Object.keys(sel),s=0,n=k.map(function(i){s+=T[i][2];return "• "+T[i][0]+" ("+fm(T[i][2])+")"});
var m="Assalam o Alaikum, I would like to book at Punjab Lab.\n\nName: "+$("n").value+"\nPhone: "+$("p").value+"\nDate: "+$("d").value+"\nTime: "+$("t").value+"\nVisit: "+$("s").value+"\n\nTests:\n"+(n.join("\n")||"(see notes)")+(k.length?"\nEstimated total: "+fm(s):"")+($("m").value?"\n\nNotes: "+$("m").value:"");
window.open("https://wa.me/"+WA+"?text="+encodeURIComponent(m),"_blank")};
$("fab").href="https://wa.me/"+WA;$("tel").href="tel:+"+WA;
/* marquee */
var mh=T.map(function(t){return "<span>"+t[0]+"</span>"}).join("");$("mq").innerHTML=mh+mh;
/* hero cells */
var ce=$("cells");for(var i=0;i<14;i++){var d=document.createElement("i"),z=30+Math.random()*110;d.className="cell";d.style.cssText="width:"+z+"px;height:"+z+"px;left:"+Math.random()*96+"%;top:"+Math.random()*92+"%;animation-duration:"+(14+Math.random()*16)+"s;animation-delay:-"+Math.random()*20+"s;opacity:"+(.35+Math.random()*.6)+(z<60?";filter:blur(1.5px)":"");ce.appendChild(d)}
/* count-up + bars */
setTimeout(function(){$("rc").classList.add("go");[].forEach.call(document.querySelectorAll("[data-v]"),function(el){var v=+el.dataset.v,dc=+el.dataset.d,t0=performance.now();(function f(t){var p=Math.min((t-t0)/1500,1);el.textContent=(v*(1-Math.pow(1-p,3))).toFixed(dc);if(p<1)requestAnimationFrame(f)})(t0)})},900);
/* pointer effects */
var hero=$("hero"),rc=$("rc");hero.onpointermove=function(e){var r=hero.getBoundingClientRect();hero.style.setProperty("--mx",e.clientX-r.left+"px");hero.style.setProperty("--my",e.clientY-r.top+"px");var b=rc.getBoundingClientRect(),x=(e.clientX-b.left)/b.width-.5,y=(e.clientY-b.top)/b.height-.5;rc.style.transform="perspective(900px) rotateY("+x*9+"deg) rotateX("+-y*9+"deg)"};
hero.onpointerleave=function(){rc.style.transform=""};
/* reveal */
var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add("in");io.unobserve(e.target)}})},{threshold:.15});
[].forEach.call(document.querySelectorAll(".rv"),function(el,i){el.style.transitionDelay=(i%3)*90+"ms";io.observe(el)});
render();sum();