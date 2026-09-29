const $=id=>document.getElementById(id);
// Menú móvil
$('menu').addEventListener('click',()=>$('nav').classList.toggle('open'));
// Modo oscuro con almacenamiento del navegador
if(localStorage.getItem('pop-theme')==='dark')document.body.classList.add('dark');
$('theme').addEventListener('click',()=>{document.body.classList.toggle('dark');localStorage.setItem('pop-theme',document.body.classList.contains('dark')?'dark':'light')});
// Traducción del texto de introducción
const it=`Questa pagina web parla di l'era del pop. Si concentra nella storia del genere, i cantanti più famosi, i premi più importanti e i momenti più iconici. Il nostro obiettivo è informare alla gente l'importanza del genere pop e lograre catturare la sua attenzione.`;
const es=`Esta página web habla sobre la era del pop. Se centra en la historia del género, los cantantes más famosos, los premios más importantes y los momentos más icónicos. Nuestro objetivo es informar a la gente sobre la importancia del género pop y lograr captar su atención.`;let translated=false;
$('translate').addEventListener('click',()=>{translated=!translated;$('intro').textContent=translated?es:it;$('translate').textContent=translated?'Ver en italiano':'Traducir al español'});
// Animaciones al hacer scroll
const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');observer.unobserve(e.target)}}),{threshold:.12});document.querySelectorAll('.reveal').forEach(e=>observer.observe(e));
// Quiz
const qs=[
['¿En qué año fue la primera ceremonia de los GRAMMY?',['1959','1969','1979','1989'],0],
['¿Qué artista es conocido por popularizar el moonwalk?',['Madonna','Michael Jackson','Prince','Elton John'],1],
['¿Qué canal impulsó la era de los videoclips?',['MTV','CNN','ESPN','BBC News'],0],
['¿En qué década comenzaron los BRIT Awards?',['1950s','1960s','1970s','1990s'],2],
['¿Qué transformó especialmente la música pop en el siglo XXI?',['Internet y plataformas digitales','Solo la radio','Solo los vinilos','Las máquinas de escribir'],0],
['¿Qué artista es reconocida por reinventar su imagen y sonido?',['Madonna','Mozart','Beethoven','Chopin'],0]
];let q=0,score=0;
function showQ(){let x=qs[q];$('counter').textContent=`Pregunta ${q+1} de ${qs.length}`;$('bar').style.width=`${(q+1)/qs.length*100}%`;$('question').textContent=x[0];$('answers').innerHTML='';x[1].forEach((a,i)=>{let b=document.createElement('button');b.className='answer';b.textContent=a;b.onclick=()=>{if(i===x[2])score++;q++;q<qs.length?showQ():showResult()};$('answers').appendChild(b)})}
function showResult(){$('question').classList.add('hidden');$('answers').classList.add('hidden');$('counter').classList.add('hidden');$('result').classList.remove('hidden');$('resultTitle').textContent=score<=2?'Explorador/a del pop ✦':score<=4?'Fan del pop ✦✦':'Enciclopedia pop ✦✦✦';$('resultText').textContent=`Sacaste ${score}/${qs.length}. ${score<=2?'Todavía hay mucho pop para descubrir.':score<=4?'Conocés varios momentos y figuras importantes.':'Tenés un gran conocimiento de la historia del pop.'}`}
$('restart').onclick=()=>{q=0;score=0;$('question').classList.remove('hidden');$('answers').classList.remove('hidden');$('counter').classList.remove('hidden');$('result').classList.add('hidden');showQ()};showQ();
// Generador
const decades=['los 80s','los 90s','los 2000s','los 2010s','la actualidad'],energies=['glam','dance','nostálgica','electro','dramática','romántica'],styles=['videoclip icónico','escenario gigante','playlist nocturna','look brillante','festival'];const random=a=>a[Math.floor(Math.random()*a.length)];$('generate').onclick=()=>$('vibe').textContent=`${random(decades)} + energía ${random(energies)} + ${random(styles)}.`;
