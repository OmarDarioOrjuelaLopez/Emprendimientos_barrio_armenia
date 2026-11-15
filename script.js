/*
 IMPULSA LOCAL · JavaScript de iniciación.
 1) Cambia los enlaces personales en CONFIG.
 2) Personaliza las estrategias en NEGOCIOS.
 3) No hay servidor ni base de datos: los formularios se procesan en este dispositivo.
*/
"use strict";

const CONFIG = {
  LINKEDIN_URL: "https://www.linkedin.com/in/omar-dario-orjuela-lopez-131b28148/", // Ejemplo válido: https://www.linkedin.com/in/TU-PERFIL/ (sustituir)
  VIDEO_YOUTUBE_URL: "" // Pega aquí la URL real del video después de grabarlo.
};

const NEGOCIOS = {
  tienda: {
    label: "Comidas del barrio", category: "TIENDA DE COMIDAS Y PASABOCAS", icon: "🥟", css: "business-tienda",
    title: "Comidas deliciosas, más cerca de nuevos clientes.",
    problem: "El tránsito frente al local es limitado. La prioridad es que los vecinos conozcan el menú, los precios, el horario y cómo hacer pedidos.",
    value: "Destaca tus combos de empanadas, hamburguesas, pastel de yuca o tortas con fotos propias y pedidos sencillos.",
    audience: "Vecinos, estudiantes y trabajadores cercanos.",
    ideas: ["Video corto del producto más pedido, con precio y horario", "Fotografía de un combo rentable y cómo pedirlo", "Publicación con referencia de ubicación y productos disponibles"],
    message: "¡Hola, barrio! 🥟 Hoy tenemos nuestras opciones de siempre. Pregúntanos por el menú, los precios y cómo pedir. ¡Te esperamos!",
    metric: "Pedidos atribuidos a WhatsApp y compras repetidas",
    weeks: ["Presenta el local y enseña cómo llegar", "Video de una preparación y su precio", "Muestra un combo rentable y el horario", "Pide una reseña honesta y publica dudas frecuentes"],
    quick: "Haz una foto clara de tus 3 productos más vendidos y comparte un menú fácil de consultar.",
    channels: "WhatsApp Business, contenido local y perfil de empresa en Google si corresponde"
  },
  ambulante: {
    label: "Comida ambulante", category: "HAMBURGUESAS Y PERROS CALIENTES", icon: "🌭", css: "business-ambulante",
    title: "Que el antojo te encuentre, estés donde estés.",
    problem: "Si el punto cambia, tus clientes necesitan saber cuándo estás atendiendo y cómo confirmar dónde encontrarte de manera segura.",
    value: "Comunica el menú, las franjas horarias y una referencia de ubicación actualizada; evita prometer un lugar fijo si no lo tienes.",
    audience: "Personas que salen de trabajar y buscan comida rápida en la zona.",
    ideas: ["Historia de la franja horaria y ubicación confirmada del día", "Reel de preparación de una hamburguesa o perro caliente", "Menú con precios y opción para consultar disponibilidad"],
    message: "🌭 ¡Hoy hay perros calientes y hamburguesas! Escríbenos para confirmar horario, menú y dónde encontrarnos hoy.",
    metric: "Consultas por ubicación que terminan en ventas",
    weeks: ["Presenta el menú y cómo consultar tu ubicación", "Video del armado del producto estrella", "Publica horarios y novedades de la semana", "Recopila preguntas frecuentes y preferencias de clientes"],
    quick: "Crea una plantilla de historia con menú, horario y ubicación actualizable antes de cada jornada.",
    channels: "Estados de WhatsApp, Instagram y referencias de ubicación actualizadas; verifica elegibilidad antes de crear un perfil en Google"
  },
  barberia: {
    label: "Fred Authentic", category: "BARBERÍA LOCAL · CASO DE ESTUDIO", icon: "✂️", css: "business-barberia",
    title: "Fred Authentic: conviértete en la primera opción de tu zona.",
    problem: "La calidad del corte debe verse también en internet. Los clientes necesitan confianza, precios claros y una manera fácil de reservar.",
    value: "Demuestra tu técnica con trabajos reales, testimonios autorizados y disponibilidad de citas.",
    audience: "Personas de la zona que valoran técnica, puntualidad y buena atención.",
    ideas: ["Antes y después de un corte (con autorización)", "Video del proceso de un degradado o diseño", "Publicación de servicios, horarios y reservas"],
    message: "✂️ En Fred Authentic queremos que tu próximo corte sea fácil de reservar. Escríbenos para consultar servicios, precios y horarios disponibles.",
    metric: "Citas nuevas, asistencia y clientes que regresan",
    weeks: ["Presenta al equipo, el local y servicios", "Publica un antes y después autorizado", "Comparte un consejo útil de cuidado capilar", "Muestra horarios y solicita reseñas honestas"],
    quick: "Graba un corte real en vertical y añade al final una invitación clara para consultar citas.",
    channels: "Perfil de empresa en Google si es elegible, Instagram y WhatsApp Business"
  },
  cafeteria: {
    label: "Evocation Coffee", category: "CAFETERÍA · BOGOTÁ", icon: "☕", css: "business-cafeteria",
    title: "Evocation Coffee: haz que cada taza cuente una historia.",
    problem: "Cuando hay muchas alternativas para tomar café, la experiencia, el ambiente y la facilidad para ubicar el lugar ayudan a diferenciarse.",
    value: "Muestra el café, el ambiente y las experiencias auténticas que hacen especial una visita.",
    audience: "Personas que disfrutan del café y buscan un lugar agradable para conversar o descansar.",
    ideas: ["Reel del proceso de preparación de una bebida", "Fotografía del ambiente con horarios y ubicación", "Publicación de una recomendación de producto o maridaje"],
    message: "☕ ¿Buscas una pausa con buen café? Conoce Evocation Coffee. Escríbenos para consultar menú, ubicación y horarios de atención.",
    metric: "Visitas originadas en canales digitales y ticket promedio",
    weeks: ["Cuenta la historia de la cafetería y su ubicación", "Muestra la preparación de una bebida", "Presenta un producto acompañante con precio", "Comparte testimonios autorizados y nuevas propuestas"],
    quick: "Graba una preparación breve con buena luz natural y añade dónde encontrar la cafetería.",
    channels: "Google Maps (según elegibilidad), contenido audiovisual y WhatsApp o canal de contacto"
  }
};

const FASES = [
  {days: "DÍAS 01–30", title: "Haz fácil que te encuentren", info: "Organiza precios, canales, imágenes, horarios e indicadores iniciales.", actions: ["Define tu cliente ideal y propuesta de valor.", "Actualiza ubicación, horarios y forma de contacto.", "Pregunta a los clientes cómo conocieron el negocio."]},
  {days: "DÍAS 31–60", title: "Prueba cómo atraer nuevos clientes", info: "Publica contenido de forma constante, crea alianzas cercanas y prueba promociones viables.", actions: ["Publica contenido real de productos y procesos.", "Evalúa una alianza con un negocio cercano.", "Si cuentas con presupuesto, prueba un anuncio pequeño y medible."]},
  {days: "DÍAS 61–90", title: "Quédate con lo que sí funciona", info: "Revisa los resultados de tu negocio, identifica cuántos clientes vuelven a comprar y mejora tus estrategias para aumentar las ventas sin gastar más de lo necesario.", actions: ["Identifica si tus clientes llegan por redes sociales, WhatsApp o recomendaciones.", "Motiva a tus clientes a regresar ofreciendo beneficios especiales que sean rentables para tu negocio.", "Invierte en lo que funciona: dedica más recursos a las estrategias que atraen clientes y generan buenos resultados."]}
];

const $ = (id) => document.getElementById(id);
const formatCOP = (number) => new Intl.NumberFormat("es-CO", {style:"currency", currency:"COP", maximumFractionDigits:0}).format(Number.isFinite(number) ? number : 0);
let negocioActual = "tienda";
let ultimoPlan = "";
let toastTimer;

function aviso(texto) {
  const el = $("toast"); el.textContent = texto; el.classList.add("show");
  clearTimeout(toastTimer); toastTimer = setTimeout(() => el.classList.remove("show"), 3200);
}

// ---------------------------------------
// 1. Navegación y animaciones al hacer scroll
// ---------------------------------------
const navButton = $("mobile-menu-toggle");
navButton.addEventListener("click", () => {
  const willOpen = navButton.getAttribute("aria-expanded") !== "true";
  navButton.setAttribute("aria-expanded", String(willOpen));
  navButton.setAttribute("aria-label", willOpen ? "Cerrar menú" : "Abrir menú");
  $("mobile-nav").hidden = !willOpen;
});
document.querySelectorAll("#mobile-nav a").forEach((link) => link.addEventListener("click", () => {
  $("mobile-nav").hidden = true;
  navButton.setAttribute("aria-expanded", "false");
  navButton.setAttribute("aria-label", "Abrir menú");
}));
function updateProgress() {
  const scrollable = document.documentElement.scrollHeight - window.innerHeight;
  $("reading-progress").style.width = (scrollable > 0 ? (window.scrollY / scrollable) * 100 : 0) + "%";
}
window.addEventListener("scroll", updateProgress, { passive: true }); updateProgress();
if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver((entries) => entries.forEach((entry) => {
    if (entry.isIntersecting) { entry.target.classList.add("visible"); observer.unobserve(entry.target); }
  }), { threshold: .09, rootMargin:"0px 0px -20px 0px" });
  document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));
} else { document.querySelectorAll(".reveal").forEach(el => el.classList.add("visible")); }

// ---------------------------------------
// 2. Ejemplos cambiantes según el negocio
// ---------------------------------------
function addIdea(parent, text, index) {
  const row = document.createElement("div"); row.className = "idea-row";
  const number = document.createElement("span"); number.textContent = String(index + 1).padStart(2, "0");
  const content = document.createElement("div"); content.textContent = text;
  row.append(number, content); parent.append(row);
}
function renderCalendar() {
  const grid = $("calendar-grid"); grid.replaceChildren();
  NEGOCIOS[negocioActual].weeks.forEach((topic, index) => {
    const card = document.createElement("div"); card.className="calendar-card";
    const week = document.createElement("small"); week.textContent=`SEMANA 0${index+1}`;
    const idea = document.createElement("strong"); idea.textContent=topic;
    card.append(week, idea); grid.append(card);
  });
}
function showBusiness(id) {
  if (!Object.hasOwn(NEGOCIOS, id)) return;
  negocioActual=id;
  const data=NEGOCIOS[id];
  $("business-cover").className="business-cover " + data.css;
  $("business-category").textContent=data.category;
  $("business-emoji").textContent=data.icon;
  $("business-title").textContent=data.title;
  $("business-problem").textContent=data.problem;
  $("business-value").textContent=data.value;
  $("business-audience").textContent=data.audience;
  $("business-message").textContent=data.message;
  $("business-metric").textContent=data.metric;
  $("business-ideas").replaceChildren(); data.ideas.forEach((idea,i)=>addIdea($("business-ideas"),idea,i));
  document.querySelectorAll("#business-tabs [role='tab']").forEach((button) => {
    const selected=button.dataset.business===id;
    button.classList.toggle("active", selected); button.setAttribute("aria-selected", String(selected));
    button.tabIndex=selected?0:-1;
  });
  $("plan-type").value=id;
  renderCalendar();
}
document.querySelectorAll("#business-tabs button").forEach(button => {
  button.addEventListener("click",()=>showBusiness(button.dataset.business));
  button.addEventListener("keydown",(event)=>{
    const tabs=Array.from(document.querySelectorAll("#business-tabs button"));
    const pos=tabs.indexOf(button);
    if (!["ArrowLeft","ArrowRight","Home","End"].includes(event.key)) return;
    event.preventDefault();
    const next=event.key==="Home"?0:event.key==="End"?tabs.length-1:event.key==="ArrowRight"?(pos+1)%tabs.length:(pos+tabs.length-1)%tabs.length;
    tabs[next].focus(); showBusiness(tabs[next].dataset.business);
  });
});
$("plan-type").addEventListener("change",(event)=>showBusiness(event.target.value));
showBusiness("tienda");

// Botón copiar: API moderna y alternativa para navegadores más antiguos.
async function copiar(texto) {
  try {
    if (navigator.clipboard && window.isSecureContext) await navigator.clipboard.writeText(texto);
    else {
      const textarea=document.createElement("textarea"); textarea.value=texto; textarea.style.position="fixed"; textarea.style.left="-9999px";
      document.body.appendChild(textarea); textarea.select();
      const copied=document.execCommand("copy"); textarea.remove();
      if (!copied) throw new Error("No se pudo copiar");
    }
    aviso("Texto copiado al portapapeles");
  } catch { aviso("Selecciona el texto y utiliza Ctrl + C para copiarlo"); }
}
$("copy-message").addEventListener("click",()=>copiar($("business-message").textContent));

// ---------------------------------------
// 3. Planificador de acciones (funciona sin internet)
// ---------------------------------------
const OBJECTIVES = {
  clientes: {title:"Atraer nuevos clientes", task:"Prueba una oferta de primera compra que respete tu margen y mide de dónde llega cada cliente nuevo."},
  visibilidad: {title:"Aumentar tu visibilidad", task:"Publica información clara sobre menú o servicios, ubicación y horario; comparte contenido geolocalizado cuando corresponda."},
  recompra: {title:"Conseguir que regresen", task:"Diseña un beneficio de fidelidad rentable y recuerda a tus clientes volver, solo si autorizaron recibir mensajes."},
  ventas: {title:"Elevar el valor de cada venta", task:"Evalúa productos complementarios o paquetes con costo y beneficio calculados antes de anunciarlos."}
};
function normalizeMoney(value){ const n=Number(value); return Number.isFinite(n)?Math.max(0,Math.min(n,100000000)):0; }
$("plan-form").addEventListener("submit", (event)=>{
  event.preventDefault();
  const sector=$("plan-type").value, company=($("plan-name").value.trim()||NEGOCIOS[sector].label).slice(0,65);
  const budget=normalizeMoney($("plan-budget").value), time=Number($("plan-time").value), goal=$("plan-goal").value;
  const d=NEGOCIOS[sector], objective=OBJECTIVES[goal];
  const actions=[
    "Semana 1 · Diagnóstico: pregunta a 3 clientes cómo te conocieron y anota tus servicios o productos más rentables.",
    "Semana 1 · Visibilidad: "+d.quick,
    "Semana 2 · Canales: prioriza "+d.channels+".",
    "Semana 3 · Conversión: "+objective.task,
    time <= 1 ? "Semana 4 · En 1 hora semanal: prepara una publicación y revisa mensajes y consultas." : time === 2 ? "Semana 4 · Con 2 horas semanales: prepara dos contenidos, responde consultas y revisa resultados." : "Semana 4 · Con 4 horas o más: graba contenidos en lote, publica, conversa con clientes y documenta resultados.",
    "Fin de mes · Mide: "+d.metric.toLowerCase()+"; calcula margen antes de ampliar cualquier campaña."
  ];
  const investmentText= budget===0
    ? "Presupuesto sugerido: $0 en anuncios. Prioriza fotografías propias, contenido orgánico, canales gratuitos y alianzas locales."
    : budget<80000
    ? `Presupuesto máximo declarado: ${formatCOP(budget)} al mes. Prioriza canales gratuitos; reserva una parte para material o pruebas pequeñas solo si el margen lo permite.`
    : `Presupuesto mensual declarado: ${formatCOP(budget)}. Ejemplo de distribución orientativa: 50 % (${formatCOP(Math.round(budget*.5))}) prueba de publicidad, 30 % (${formatCOP(Math.round(budget*.3))}) contenido y 20 % (${formatCOP(budget-Math.round(budget*.5)-Math.round(budget*.3))}) experimentos/promociones rentables. No es obligatorio gastar el total.`;
  $("result-title").textContent=`Plan de ${company}`;
  $("result-summary").textContent=`Objetivo: ${objective.title}. Negocio: ${d.label}. Dedica unas ${time===1?"1 hora":time+" horas"} por semana. Confirma estas ideas con tus clientes reales.`;
  $("result-actions").replaceChildren();
  actions.forEach((action)=>{const li=document.createElement("li");li.textContent=action;$("result-actions").appendChild(li);});
  $("result-budget").textContent=investmentText;
  ultimoPlan=`IMPULSA LOCAL · PLAN INICIAL DE MARKETING\n\nNegocio: ${company}\nTipo: ${d.label}\nObjetivo: ${objective.title}\nTiempo semanal: ${time} hora(s)\nPresupuesto: ${formatCOP(budget)}\n\nACCIONES:\n${actions.map((action,i)=>`${i+1}. ${action}`).join("\n")}\n\n${investmentText}\n\nNOTA: guía educativa; valida con clientes y costos reales.`;
  $("plan-result").hidden=false;
  $("plan-result").focus(); aviso("¡Tu plan inicial está listo!");
});
$("result-close").addEventListener("click",()=>{$("plan-result").hidden=true;});
$("download-plan").addEventListener("click",()=>{
  if (!ultimoPlan) return;
  const url=URL.createObjectURL(new Blob([ultimoPlan],{type:"text/plain;charset=utf-8"}));
  const a=document.createElement("a"); a.href=url;a.download="mi-plan-impulsa-local.txt";document.body.appendChild(a);a.click();a.remove();
  setTimeout(()=>URL.revokeObjectURL(url),1500);
});
$("print-plan").addEventListener("click",()=>window.print());

// ---------------------------------------
// 4. Calculadora: ventas ≠ utilidades.
// ---------------------------------------
function recalc() {
  const investment=normalizeMoney($("calc-investment").value),
  customers=normalizeMoney($("calc-customers").value),
  ticket=normalizeMoney($("calc-ticket").value),
  cost=normalizeMoney($("calc-cost").value);
  const revenue=customers*ticket;
  const cac=customers>0?investment/customers:0;
  const contribution=revenue-customers*cost-investment;
  $("calc-revenue").textContent=formatCOP(revenue);
  $("calc-cac").textContent=customers>0?formatCOP(cac):"No calculable";
  $("calc-contribution").textContent=formatCOP(contribution);
  $("calc-net").classList.toggle("negative",contribution<0);
}
["calc-investment","calc-customers","calc-ticket","calc-cost"].forEach(id=>$(id).addEventListener("input",recalc));
recalc();

// ---------------------------------------
// 5. Ruta de 90 días
// ---------------------------------------
function showPhase(index) {
  const data=FASES[index];
  if (!data) return;
  const panel=$("roadmap-detail"); panel.replaceChildren();
  const days=document.createElement("span");days.className="phase-kicker";days.textContent=data.days;
  const title=document.createElement("h4");title.textContent=data.title;
  const info=document.createElement("p");info.textContent=data.info;
  const ul=document.createElement("ul");data.actions.forEach(action=>{let li=document.createElement("li");li.textContent=action;ul.appendChild(li);});
  panel.append(days,title,info,ul);
  document.querySelectorAll(".roadmap-step").forEach((button,i)=>{
    button.classList.toggle("active",i===index);
    button.setAttribute("aria-pressed",String(i===index));
  });
}
document.querySelectorAll(".roadmap-step").forEach(btn=>btn.addEventListener("click",()=>showPhase(Number(btn.dataset.phase))));
showPhase(0);

// ---------------------------------------
// 6. Guion de video y enlaces personales
// ---------------------------------------
// La sección de guion editorial fue eliminada de index.html.
function youtubeEmbed(link) {
  if (!link) return null;
  try {
    const url=new URL(link), host=url.hostname.toLowerCase();
    let id="";
    if (host==="youtu.be") id=url.pathname.split("/").filter(Boolean)[0]||"";
    else if (["youtube.com","www.youtube.com","m.youtube.com","www.youtube-nocookie.com"].includes(host)) {
      id=url.searchParams.get("v")||"";
      if (!id) {const chunks=url.pathname.split("/").filter(Boolean); if (["embed","shorts","live"].includes(chunks[0])) id=chunks[1]||"";}
    }
    return /^[A-Za-z0-9_-]{11}$/.test(id)?`https://www.youtube-nocookie.com/embed/${id}`:null;
  } catch {return null;}
}
const embedSrc=youtubeEmbed(CONFIG.VIDEO_YOUTUBE_URL);
if (embedSrc) {
  const frame=document.createElement("iframe");
  frame.title="Entrevista de marketing digital para emprendimientos";
  frame.src=embedSrc;frame.allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
  frame.referrerPolicy="strict-origin-when-cross-origin";frame.allowFullscreen=true;
  $("expert-video-container").replaceChildren(frame);
}
const enlaceLinkedIn = $("linkedin-link");
if (enlaceLinkedIn && /^https:\/\/(www\.)?linkedin\.com\/in\/[a-zA-Z0-9_-]+\/?(?:[?#].*)?$/.test(CONFIG.LINKEDIN_URL.trim())) {
  enlaceLinkedIn.href = CONFIG.LINKEDIN_URL.trim();
  enlaceLinkedIn.hidden = false;
}

// ---------------------------------------
// 7. Checklist SST con almacenamiento local
// ---------------------------------------
const safetyInputs=Array.from(document.querySelectorAll("#safety-checks input"));
const STORAGE_KEY="impulsa-local-sst-v1";
function saveSafety(){try{localStorage.setItem(STORAGE_KEY,JSON.stringify(safetyInputs.map(el=>el.checked)));}catch{/* privado o deshabilitado */}}
function updateSafety(){
  const checked=safetyInputs.filter(el=>el.checked).length;
  const percent=Math.round((checked/safetyInputs.length)*100);
  $("safety-percent").textContent=percent+"%";
  $("safety-progress-fill").style.width=percent+"%";
  $("safety-count").textContent=`${checked} de ${safetyInputs.length} puntos verificados`;
  saveSafety();
}
try {
  const saved=JSON.parse(localStorage.getItem(STORAGE_KEY)||"null");
  if(Array.isArray(saved)) safetyInputs.forEach((element,index)=>{element.checked=saved[index]===true;});
} catch {/* primera visita o almacenamiento no disponible */}
safetyInputs.forEach(input=>input.addEventListener("change",updateSafety));
$("reset-safety").addEventListener("click",()=>{safetyInputs.forEach(input=>input.checked=false);updateSafety();aviso("Checklist reiniciado");});
updateSafety();

/* =============================================================
   CONTROLES DE VIDEO: María Alejandra y Abraham
   Cada botón registra UN único evento por video.
   Mantener esta función una sola vez al final del archivo.
   ============================================================= */
function activarControlesVideo(nombre) {
  const video = $("video-" + nombre);
  const retroceder = $("retroceder-" + nombre);
  const reproducirPausar = $("pausa-" + nombre);
  const adelantar = $("adelantar-" + nombre);

  if (!video || !retroceder || !reproducirPausar || !adelantar) {
    console.warn("Faltan controles para la entrevista de:", nombre);
    return;
  }

  // Actualizar el botón también cuando se use el reproductor nativo.
  const actualizarBoton = () => {
    const estaPausado = video.paused || video.ended;
    reproducirPausar.textContent = estaPausado ? "▶ Reproducir" : "⏸ Pausar";
    reproducirPausar.setAttribute("aria-label", estaPausado ? "Reproducir entrevista de " + nombre : "Pausar entrevista de " + nombre);
  };

  reproducirPausar.addEventListener("click", async () => {
    if (video.paused || video.ended) {
      try {
        await video.play();
      } catch (error) {
        console.error("No se pudo reproducir el video de " + nombre, error);
      }
    } else {
      video.pause();
    }
  });

  retroceder.addEventListener("click", () => {
    if (video.readyState < HTMLMediaElement.HAVE_METADATA) return;
    video.currentTime = Math.max(0, video.currentTime - 10);
  });

  adelantar.addEventListener("click", () => {
    if (!Number.isFinite(video.duration)) return;
    video.currentTime = Math.min(video.duration, video.currentTime + 10);
  });

  video.addEventListener("play", actualizarBoton);
  video.addEventListener("pause", actualizarBoton);
  video.addEventListener("ended", actualizarBoton);
  actualizarBoton();
  console.info("Controles preparados para:", nombre);
}

activarControlesVideo("maria");
activarControlesVideo("abraham");
