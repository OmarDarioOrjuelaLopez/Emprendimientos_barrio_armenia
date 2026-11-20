/*
 Emprendimientos del Barrio Armenia.
 Los datos de las fichas se guardan solo en este navegador.
 CONFIG.CASOS_AUTORIZADOS contiene únicamente casos reales cuya publicación se autorizó.
*/
"use strict";

const CONFIG = {
  VIDEO_YOUTUBE_URL: "",
  NOMBRE_COMUNIDAD: "Comerciantes del barrio Armenia",
  FECHA_TALLER: "", // Completar únicamente con la fecha real confirmada (AAAA-MM-DD).
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
    label: "Barbería del barrio", category: "BARBERÍA LOCAL · EJEMPLO EDUCATIVO", icon: "✂️", css: "business-barberia",
    title: "Barbería del barrio: conviértete en la primera opción de tu zona.",
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
    label: "Cafetería del barrio", category: "CAFETERÍA · BOGOTÁ", icon: "☕", css: "business-cafeteria",
    title: "Cafetería del barrio: haz que cada taza cuente una historia.",
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



const PRACTICE_CASES = [
  {
    "key": "tienda",
    "icon": "🥟",
    "category": "COMIDAS Y PASABOCAS",
    "name": "Comidas y pasabocas de Óscar",
    "voice": "Preparo comidas y pasabocas, pero muchas personas del sector aún no conocen mi oferta. Quiero mostrar lo que vendo y facilitar los pedidos sin gastar demasiado.",
    "challenge": "Dar a conocer los productos y facilitar los pedidos desde el celular.",
    "audience": "Vecinos, estudiantes y trabajadores cercanos que buscan una opción rápida y económica.",
    "idea": "Crear un menú de WhatsApp con fotografías propias, precios, horarios y una forma clara de pedir.",
    "weeks": [
      "Escuchar a los clientes y elegir los productos que más les interesan.",
      "Preparar el menú y compartirlo con quienes acepten recibirlo.",
      "Probar un combo después de calcular el margen por venta.",
      "Revisar consultas, pedidos y costos para ajustar la propuesta."
    ],
    "indicator": "Contar los pedidos que llegan por el menú de WhatsApp.",
    "followup": "Revisar cada semana las consultas recibidas y las preguntas de los clientes.",
    "channel": "Conversación semanal entre comerciantes",
    "investment": 50000,
    "customers": 12,
    "ticket": 9000,
    "cost": 5500,
    "lesson": "Este escenario deja una contribución negativa: conviene revisar el costo, el precio y la inversión antes de repetir la campaña."
  },
  {
    "key": "ambulante",
    "icon": "🍔",
    "category": "COMIDA AMBULANTE",
    "name": "Hamburguesas y perros calientes de Mary",
    "voice": "A veces mis clientes no saben si estoy atendiendo o dónde encontrarme. Quiero organizar la información y responder más rápido las preguntas que se repiten.",
    "challenge": "Comunicar de forma oportuna el horario, la disponibilidad y el punto de atención.",
    "audience": "Vecinos y personas que salen de trabajar y buscan comida preparada durante la tarde o la noche.",
    "idea": "Usar una plantilla de estado de WhatsApp con menú, horario y ubicación confirmada para cada jornada.",
    "weeks": [
      "Anotar las preguntas más frecuentes sobre el servicio.",
      "Probar la plantilla de horario, menú y ubicación.",
      "Mostrar la preparación de un producto y evaluar una oferta viable.",
      "Registrar qué consultas terminan en pedidos y mejorar las respuestas."
    ],
    "indicator": "Contar las consultas sobre horario o ubicación que se convierten en pedidos.",
    "followup": "Compartir semanalmente qué publicación resolvió más dudas y facilitó pedidos.",
    "channel": "Conversación semanal entre comerciantes",
    "investment": 60000,
    "customers": 20,
    "ticket": 16000,
    "cost": 10000,
    "lesson": "Relacionar cada pedido con su canal ayuda a decidir si la inversión y la forma de comunicar funcionan."
  },
  {
    "key": "barberia",
    "icon": "✂",
    "category": "BARBERÍA",
    "name": "Fred Authentic",
    "voice": "Quiero que las personas que todavía no me conocen puedan ver mi trabajo. También busco facilitar las reservas y organizar mejor las respuestas a las consultas.",
    "challenge": "Mostrar la calidad del servicio y convertir las consultas en citas atendidas.",
    "audience": "Personas del sector que valoran un buen corte, puntualidad y facilidad para reservar.",
    "idea": "Publicar trabajos con permiso del cliente y acompañarlos de una invitación clara para consultar horarios y reservar.",
    "weeks": [
      "Organizar servicios, precios, horarios y preguntas frecuentes.",
      "Elegir fotografías de trabajos con autorización de sus protagonistas.",
      "Probar publicaciones que expliquen cómo reservar una cita.",
      "Revisar citas nuevas, asistencia y preguntas recibidas."
    ],
    "indicator": "Registrar reservas provenientes de publicaciones y citas efectivamente atendidas.",
    "followup": "Compartir una publicación y revisar sus consultas y reservas, sin divulgar datos de clientes.",
    "channel": "Revisión semanal de publicaciones y reservas",
    "investment": 50000,
    "customers": 8,
    "ticket": 25000,
    "cost": 5000,
    "lesson": "La contribución del ejercicio debe cubrir también los costos fijos; no equivale a la utilidad neta de la barbería."
  },
  {
    "key": "cafeteria",
    "icon": "☕",
    "category": "CAFETERÍA",
    "name": "Evocation Coffee",
    "voice": "Quiero comunicar mejor la experiencia de tomar café en nuestro negocio. Antes de invertir más en publicidad, necesito revisar qué contenido interesa y cuánto deja una promoción.",
    "challenge": "Dar a conocer la experiencia del negocio y evaluar el margen de una promoción.",
    "audience": "Personas que buscan café, una pausa o un espacio para conversar.",
    "idea": "Mostrar la preparación de una bebida y evaluar una combinación de café y acompañamiento, calculando sus costos.",
    "weeks": [
      "Conversar con los clientes sobre sus productos y experiencias preferidas.",
      "Preparar fotografías y un video breve de una bebida.",
      "Probar una combinación de productos con su margen calculado.",
      "Revisar compras atribuidas, comentarios y posibles ajustes."
    ],
    "indicator": "Contar compras asociadas a la publicación y calcular su contribución.",
    "followup": "Compartir qué producto despertó más interés y qué ajuste se probaría después.",
    "channel": "Conversación de seguimiento entre comerciantes",
    "investment": 45000,
    "customers": 15,
    "ticket": 12000,
    "cost": 7000,
    "lesson": "Una oferta puede atraer compradores y aun así requerir ajustes cuando se consideran arriendo, salarios y demás costos fijos."
  }
];
PRACTICE_CASES.forEach(item => {
  const business = NEGOCIOS[item.key];
  business.label = item.name;
  business.title = item.name + ": una idea para probar durante 30 días.";
  business.problem = item.challenge; business.audience = item.audience; business.value = item.idea;
  business.weeks = item.weeks; business.metric = item.indicator;
});

NEGOCIOS.otro = {
  label: "Otro comercio o servicio", category: "COMERCIO LOCAL · EJEMPLO EDUCATIVO", icon: "🏪", css: "business-otro",
  title: "Cada negocio tiene una historia y un reto propio.",
  problem: "Este ejemplo orientativo debe adaptarse con la experiencia del comerciante.",
  value: "Comunica qué ofreces, para quién y cómo contactarte.",
  audience: "Los clientes que identifiques durante el diagnóstico.",
  ideas: ["Presenta tu producto o servicio principal", "Explica cómo comprar o reservar", "Responde una pregunta frecuente de tus clientes"],
  message: "¡Hola, barrio! Conoce lo que ofrecemos. Escríbenos para consultar productos, servicios, precios y horarios.",
  metric: "Consultas que se convierten en ventas y clientes que regresan",
  weeks: ["Define el reto y los clientes del negocio", "Presenta lo que ofreces y cómo contactarte", "Prueba una idea elegida con el grupo", "Revisa un indicador y comparte lo aprendido"],
  quick: "Prepara una publicación con tu producto o servicio, precio orientativo, horario y canal de contacto.",
  channels: "El canal que tus clientes ya utilizan y que puedas atender"
};

const FASES = [
  {days: "DÍAS 01–30", title: "Haz fácil que te encuentren", info: "Organiza precios, canales, imágenes, horarios e indicadores iniciales.", actions: ["Define tu cliente ideal y propuesta de valor.", "Actualiza ubicación, horarios y forma de contacto.", "Pregunta a los clientes cómo conocieron el negocio."]},
  {days: "DÍAS 31–60", title: "Prueba cómo atraer nuevos clientes", info: "Publica contenido de forma constante, crea alianzas cercanas y prueba promociones viables.", actions: ["Publica contenido real de productos y procesos.", "Evalúa una alianza con un negocio cercano.", "Si cuentas con presupuesto, prueba un anuncio pequeño y medible."]},
  {days: "DÍAS 61–90", title: "Quédate con lo que sí funciona", info: "Revisa los resultados de tu negocio, identifica cuántos clientes vuelven a comprar y mejora tus estrategias para aumentar las ventas sin gastar más de lo necesario.", actions: ["Identifica si tus clientes llegan por redes sociales, WhatsApp o recomendaciones.", "Motiva a tus clientes a regresar ofreciendo beneficios especiales que sean rentables para tu negocio.", "Invierte en lo que funciona: dedica más recursos a las estrategias que atraen clientes y generan buenos resultados."]}
];

const $ = (id) => document.getElementById(id);
const formatCOP = (number) => new Intl.NumberFormat("es-CO", {style:"currency", currency:"COP", maximumFractionDigits:0}).format(Number.isFinite(number) ? number : 0);
let negocioActual = "tienda";
let practiceContext = null;
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

$("plan-form").addEventListener("submit", (event) => {
  event.preventDefault();
  if (!$("plan-form").reportValidity()) return;
  const sector = $("plan-type").value;
  const company = ($("plan-name").value.trim() || "Mi negocio del barrio").slice(0, 65);
  const budget = normalizeMoney($("plan-budget").value);
  const time = Number($("plan-time").value);
  const d = NEGOCIOS[sector], objective = OBJECTIVES[$("plan-goal").value];
  const challenge = $("plan-challenge").value.trim();
  const audience = $("plan-audience").value.trim();
  const idea = $("plan-idea").value.trim();
  const indicator = $("plan-indicator").value.trim();
  const actions = [
    "Días 1–7 · Escucha y diagnóstico: " + (challenge || "identifica con tus clientes el principal reto del negocio.") + (audience ? " Clientes identificados: " + audience + "." : ""),
    "Días 8–14 · Presencia y canales: " + d.quick + " Prioriza " + d.channels + ".",
    "Días 15–21 · Prueba participativa: " + (idea || objective.task),
    "Días 22–28 · Registro: anota las consultas y ventas que puedas atribuir a la acción. " + (time <= 1 ? "Reserva una hora semanal para una acción y revisar mensajes." : "Distribuye tus " + time + " horas semanales entre contenido, atención y revisión."),
    "Días 29–30 · Revisión: " + (indicator || "revisa " + d.metric.toLowerCase()) + ". Compara los resultados con el punto de partida y acuerda qué ajustar."
  ];
  const investmentText = budget === 0
    ? "Presupuesto declarado: $0. Prioriza fotografías propias, canales gratuitos y alianzas; no se requiere pagar anuncios."
    : "Presupuesto máximo declarado: " + formatCOP(budget) + ". Decide con el comerciante qué gasto es viable después de revisar sus costos. No es obligatorio gastar el total.";
  const record = activeWorkshopId ? workshopRecords[activeWorkshopId] : null;
  const followup = practiceContext
    ? "Seguimiento propuesto: " + practiceContext.followup + " Canal de pr\u00e1ctica: " + practiceContext.channel + ". Revisi\u00f3n al cierre de cada semana."
    : record && record.agreement && record.channel && record.review
    ? "Seguimiento: " + record.agreement + ". Canal: " + record.channel + ". Fecha acordada: " + displayDate(record.review) + "."
    : "Seguimiento: acuerda con el grupo qué avance compartir, la fecha y el canal; regístralo en la ficha del encuentro.";
  $("result-title").textContent = "Plan de " + company;
  $("result-summary").textContent = "Objetivo: " + objective.title + ". Tipo: " + d.label + ". Tiempo: " + time + " hora(s) por semana. " + followup;
  $("result-actions").replaceChildren();
  actions.forEach(action => { const li = document.createElement("li"); li.textContent = action; $("result-actions").append(li); });
  $("result-budget").textContent = investmentText;
  ultimoPlan = [
    (practiceContext ? "ESCENARIO DE PRÁCTICA · " : "") + "EMPRENDIMIENTOS DEL BARRIO ARMENIA · PLAN DE 30 DÍAS", "",
    "Negocio o alias: " + company, "Tipo: " + d.label, "Objetivo: " + objective.title,
    "Reto: " + (challenge || "Identificar el principal reto del negocio"), "Clientes: " + (audience || "Describir a quienes compran en el negocio"),
    "Idea para trabajar con el grupo: " + (idea || "Elegir una acción viable"),
    "Meta e indicador: " + (indicator || "Registrar consultas y pedidos atribuibles"),
    "Tiempo semanal: " + time + " hora(s)", investmentText, "",
    ...actions.map((action, i) => (i + 1) + ". " + action), "", followup, "",
    "Guía educativa: adapta las acciones a las condiciones y los costos de tu negocio."
  ].join("\n");
  if (record) {
    record.plan = ultimoPlan;
    record.planInputs = { budget, time, goal: $("plan-goal").value, indicator };
    persistWorkshop();
    updateWorkshopSteps();
  }
  $("plan-result").hidden = false;
  $("plan-result").focus();
  aviso(record ? "Plan guardado en la ficha " + activeWorkshopId : "Tu plan de 30 días está listo");
});
$("result-close").addEventListener("click",()=>{$("plan-result").hidden=true;});
$("download-plan").addEventListener("click",()=>{
  if (!ultimoPlan) return;
  const url=URL.createObjectURL(new Blob([ultimoPlan],{type:"text/plain;charset=utf-8"}));
  const a=document.createElement("a"); a.href=url;a.download="mi-plan-barrio-armenia.txt";document.body.appendChild(a);a.click();a.remove();
  setTimeout(()=>URL.revokeObjectURL(url),1500);
});
$("print-plan").addEventListener("click",()=>window.print());

// ---------------------------------------
// 4. Calculadora: ventas ≠ utilidades.
// ---------------------------------------

function readCalculation() {
  const ids = ["calc-investment", "calc-customers", "calc-ticket", "calc-cost"];
  const inputs = ids.map(id => $(id));
  inputs.forEach(input => input.setCustomValidity(""));
  const values = inputs.map(input => input.value.trim() === "" ? NaN : Number(input.value));
  for (let i = 0; i < inputs.length; i++) {
    if (!Number.isFinite(values[i]) || values[i] < 0) {
      inputs[i].setCustomValidity("Escribe un número mayor o igual a cero.");
      return null;
    }
  }
  if (!Number.isInteger(values[1])) {
    inputs[1].setCustomValidity("El número de clientes debe ser entero.");
    return null;
  }
  const [investment, customers, ticket, cost] = values;
  const revenue = customers * ticket, contribution = revenue - customers * cost - investment;
  if (!Number.isFinite(revenue) || !Number.isFinite(contribution)) return null;
  return { investment, customers, ticket, cost, revenue, contribution, cac: customers > 0 ? investment / customers : null };
}
function recalc() {
  const data = readCalculation();
  $("calc-revenue").textContent = data ? formatCOP(data.revenue) : "Completa los datos";
  $("calc-cac").textContent = data && data.cac !== null ? formatCOP(data.cac) : "No calculable";
  $("calc-contribution").textContent = data ? formatCOP(data.contribution) : "Completa los datos";
  $("calc-net").classList.toggle("negative", !!data && data.contribution < 0);
  $("calculation-status").textContent = data ? "La estimación cambia al modificar los datos. Guarda la práctica que acuerdes con tu negocio." : "Revisa los campos: usa valores no negativos y un número entero de clientes.";
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
// 6. Entrevistas de apoyo al aprendizaje
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

// 8. Fichas del taller: trabajo local, exportación y seguimiento.
const WORKSHOP_STORAGE_KEY = "barrio-armenia-taller-v1";
const PARTICIPANT_IDS = ["P01", "P02", "P03", "P04", "P05", "P06"];
const workshopRecords = Object.fromEntries(PARTICIPANT_IDS.map(id => [id, emptyWorkshopRecord()]));
let activeWorkshopId = null;
let workshopStorageAvailable = true;

function emptyWorkshopRecord() {
  return { business: "", type: "tienda", challenge: "", audience: "", idea: "", agreement: "", channel: "", review: "", consent: false, plan: "", planInputs: null, calculation: null };
}
function displayDate(value) {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(value || "")) return "Fecha elegida por el participante";
  const [year, month, day] = value.split("-");
  return day + "/" + month + "/" + year;
}
function persistWorkshop() {
  try {
    localStorage.setItem(WORKSHOP_STORAGE_KEY, JSON.stringify(workshopRecords));
    workshopStorageAvailable = true;
    return true;
  } catch {
    workshopStorageAvailable = false;
    $("community-status").textContent = "Este navegador no permite guardar la ficha. Descárgala antes de cerrar la página.";
    return false;
  }
}
function currentWorkshopRecord() {
  return workshopRecords[$("community-participant").value];
}
function hasDiagnostic(record) {
  return !!(record.challenge && record.audience && record.idea);
}
function updateWorkshopSteps() {
  const record = currentWorkshopRecord();
  const checks = [
    ["workshop-diagnostic", "Diagnóstico", hasDiagnostic(record)],
    ["workshop-plan", "Plan de 30 días", !!record.plan],
    ["workshop-calculation", "Práctica de costos", !!record.calculation],
    ["workshop-followup", "Acuerdo de seguimiento", !!(record.agreement && record.channel && record.review)]
  ];
  checks.forEach(([id, label, complete]) => {
    const prompts = { "workshop-diagnostic": "Conoce tu negocio", "workshop-plan": "Elige tus acciones", "workshop-calculation": "Explora los números", "workshop-followup": "Comparte tus avances" };
    $(id).textContent = label + (complete ? " · Guardado en esta ficha" : " · " + prompts[id]);
    $(id).classList.toggle("done", complete);
  });
}
const WORKSHOP_FIELDS = {
  business: "community-business", type: "community-type", challenge: "community-challenge", audience: "community-audience",
  idea: "community-idea", agreement: "community-agreement", channel: "community-channel", review: "community-review"
};
function saveWorkshopDraft() {
  const record = currentWorkshopRecord();
  const oldDiagnostic = [record.business, record.type, record.challenge, record.audience, record.idea].join("|");
  Object.entries(WORKSHOP_FIELDS).forEach(([key, id]) => { record[key] = $(id).value.trim(); });
  record.consent = $("community-consent").checked;
  const newDiagnostic = [record.business, record.type, record.challenge, record.audience, record.idea].join("|");
  if (oldDiagnostic !== newDiagnostic) {
    record.plan = ""; record.planInputs = null;
    if (activeWorkshopId === $("community-participant").value) {
      activeWorkshopId = null; ultimoPlan = ""; $("plan-result").hidden = true;
      $("plan-workshop-note").textContent = "El diagnóstico cambió. Guarda la ficha y genera de nuevo tu plan.";
    }
  }
  const saved = persistWorkshop();
  updateWorkshopSteps();
  return saved;
}
function fillPlannerFromWorkshop(record, id) {
  practiceContext = null;
  $("save-calculation").textContent = "Guardar práctica en mi ficha";
  activeWorkshopId = id;
  showBusiness(Object.hasOwn(NEGOCIOS, record.type) ? record.type : "otro");
  $("plan-name").value = record.business || id;
  $("plan-challenge").value = record.challenge;
  $("plan-audience").value = record.audience;
  $("plan-idea").value = record.idea;
  $("plan-indicator").value = record.planInputs?.indicator || "";
  $("plan-budget").value = record.planInputs?.budget ?? 0;
  $("plan-time").value = String(record.planInputs?.time ?? 2);
  $("plan-goal").value = record.planInputs?.goal || "clientes";
  $("plan-workshop-note").textContent = "Ficha activa: " + id + ". El plan que generes se guardará aquí. Puedes adaptarlo con el grupo.";
}
function loadWorkshopRecord() {
  practiceContext = null;
  $("save-calculation").textContent = "Guardar práctica en mi ficha";
  const id = $("community-participant").value, record = workshopRecords[id];
  Object.entries(WORKSHOP_FIELDS).forEach(([key, field]) => { $(field).value = record[key]; });
  $("community-consent").checked = record.consent;
  activeWorkshopId = null; ultimoPlan = ""; $("plan-result").hidden = true;
  $("plan-name").value = ""; $("plan-challenge").value = ""; $("plan-audience").value = ""; $("plan-idea").value = ""; $("plan-indicator").value = "";
  $("plan-workshop-note").textContent = "Para vincular el plan a " + id + ", guarda primero su diagnóstico.";
  if (hasDiagnostic(record)) fillPlannerFromWorkshop(record, id);
  const exercise = record.calculation;
  const values = exercise ? [exercise.investment, exercise.customers, exercise.ticket, exercise.cost] : [150000, 15, 25000, 12000];
  ["calc-investment", "calc-customers", "calc-ticket", "calc-cost"].forEach((field, i) => { $(field).value = values[i]; });
  recalc();
  $("calculation-status").textContent = exercise ? "Práctica guardada de la ficha " + id + ". Puedes revisarla y volver a guardarla." : "Valores de ejemplo: reemplázalos con los datos de tu negocio antes de guardar.";
  $("community-status").textContent = workshopStorageAvailable ? "Ficha " + id + " cargada. Los cambios se guardan solo en este navegador." : "Ficha " + id + " cargada en memoria. Descárgala antes de cerrar.";
  updateWorkshopSteps();
}
function downloadText(filename, content) {
  const url = URL.createObjectURL(new Blob([content], { type: "text/plain;charset=utf-8" }));
  const link = document.createElement("a"); link.href = url; link.download = filename;
  document.body.append(link); link.click(); link.remove();
  setTimeout(() => URL.revokeObjectURL(url), 1500);
}
try {
  const saved = JSON.parse(localStorage.getItem(WORKSHOP_STORAGE_KEY) || "null");
  if (saved && typeof saved === "object") PARTICIPANT_IDS.forEach(id => {
    const source = saved[id]; if (!source || typeof source !== "object") return;
    const record = workshopRecords[id];
    Object.keys(WORKSHOP_FIELDS).forEach(key => { if (typeof source[key] === "string") record[key] = source[key].slice(0, 500); });
    record.type = Object.hasOwn(NEGOCIOS, record.type) ? record.type : "otro";
    record.consent = source.consent === true;
    record.plan = typeof source.plan === "string" ? source.plan.slice(0, 15000) : "";
    if (source.planInputs && typeof source.planInputs === "object") {
      const inputs = source.planInputs;
      record.planInputs = {
        budget: normalizeMoney(inputs.budget), time: [1, 2, 4].includes(inputs.time) ? inputs.time : 2,
        goal: Object.hasOwn(OBJECTIVES, inputs.goal) ? inputs.goal : "clientes",
        indicator: typeof inputs.indicator === "string" ? inputs.indicator.slice(0, 250) : ""
      };
    }
    const exercise = source.calculation;
    if (exercise && ["investment", "customers", "ticket", "cost"].every(key => Number.isFinite(exercise[key]) && exercise[key] >= 0) && Number.isInteger(exercise.customers)) {
      const revenue = exercise.customers * exercise.ticket;
      const contribution = revenue - exercise.customers * exercise.cost - exercise.investment;
      if (Number.isFinite(revenue) && Number.isFinite(contribution)) record.calculation = { investment: exercise.investment, customers: exercise.customers, ticket: exercise.ticket, cost: exercise.cost, revenue, contribution, cac: exercise.customers ? exercise.investment / exercise.customers : null };
    }
  });
} catch {
  workshopStorageAvailable = false;
}
$("community-form").addEventListener("input", event => {
  if (event.target.id !== "community-participant") saveWorkshopDraft();
});
$("community-participant").addEventListener("change", loadWorkshopRecord);
$("community-form").addEventListener("submit", event => {
  event.preventDefault();
  if (!$("community-form").reportValidity()) return;
  const saved = saveWorkshopDraft();
  fillPlannerFromWorkshop(currentWorkshopRecord(), $("community-participant").value);
  $("community-status").textContent = saved ? "Diagnóstico guardado. Adapta y genera tu plan; luego practica la calculadora y completa el acuerdo." : "Diagnóstico listo en memoria. Descarga la ficha antes de cerrar.";
  $("planificador").scrollIntoView({ behavior: "smooth", block: "start" });
  $("plan-name").focus({ preventScroll: true });
});
$("save-calculation").addEventListener("click", () => {
  if (practiceContext && !activeWorkshopId) {
    const exercise = readCalculation();
    if (!exercise) { aviso("Revisa los datos de la calculadora."); return; }
    downloadText("ejercicio-" + practiceContext.key + "-barrio-armenia.txt", [
      "ESCENARIO DE PRÁCTICA · CIFRAS ILUSTRATIVAS", practiceContext.name, "",
      "Inversión: " + formatCOP(exercise.investment), "Clientes atribuibles: " + exercise.customers,
      "Venta por cliente: " + formatCOP(exercise.ticket), "Costo variable por venta: " + formatCOP(exercise.cost),
      "Ingresos atribuidos: " + formatCOP(exercise.revenue),
      "Contribución después de campaña: " + formatCOP(exercise.contribution), "",
      "Faltan los demás costos fijos e impuestos para calcular la utilidad neta.",
      "Estas cifras son un ejercicio educativo, no ventas ni resultados comprobados de un negocio."
    ].join("\n"));
    $("calculation-status").textContent = "Ejercicio descargado con sus cifras ilustrativas.";
    return;
  }
  if (!activeWorkshopId || !hasDiagnostic(workshopRecords[activeWorkshopId])) {
    aviso("Guarda primero tu diagnóstico en Comunidad."); return;
  }
  const calculation = readCalculation();
  if (!calculation) {
    const invalid = ["calc-investment", "calc-customers", "calc-ticket", "calc-cost"].map(id => $(id)).find(input => !input.validity.valid);
    if (invalid) invalid.reportValidity();
    aviso("Revisa los datos de la calculadora."); return;
  }
  const record = workshopRecords[activeWorkshopId];
  record.calculation = calculation;
  const saved = persistWorkshop(); updateWorkshopSteps();
  $("calculation-status").textContent = saved ? "Práctica guardada en " + activeWorkshopId + ". Es una estimación; no certifica ventas ni beneficios obtenidos." : "Práctica guardada en memoria. Descarga tu ficha antes de cerrar.";
});
$("community-download").addEventListener("click", () => {
  saveWorkshopDraft();
  const id = $("community-participant").value, record = workshopRecords[id], exercise = record.calculation;
  const exerciseText = exercise ? [
    "Inversión de campaña: " + formatCOP(exercise.investment), "Clientes atribuibles: " + exercise.customers,
    "Venta promedio: " + formatCOP(exercise.ticket), "Costo variable por venta: " + formatCOP(exercise.cost),
    "Ingresos atribuidos estimados: " + formatCOP(exercise.revenue),
    "Costo de adquisición: " + (exercise.cac === null ? "No calculable sin clientes" : formatCOP(exercise.cac)),
    "Contribución tras costos variables y campaña: " + formatCOP(exercise.contribution),
    "Faltan costos fijos e impuestos; esta práctica no acredita resultados reales."
  ].join("\n") : "Usa la calculadora y guarda los valores de tu ejercicio.";
  const text = [
    "EMPRENDIMIENTOS DEL BARRIO ARMENIA · FICHA PARTICIPATIVA", "",
    "Comunidad: " + CONFIG.NOMBRE_COMUNIDAD, ...(CONFIG.FECHA_TALLER ? ["Fecha del taller: " + displayDate(CONFIG.FECHA_TALLER)] : []),
    "Código: " + id, "Negocio o alias: " + (record.business || id),
    "Autorización declarada para compartir esta ficha: " + (record.consent ? "Sí. Verificar y conservar el permiso y su alcance." : "Uso personal de la ficha. No habilitada para publicación de datos identificables."),
    "", "DIAGNÓSTICO", "Reto: " + (record.challenge || "Describe el reto del negocio"), "Clientes: " + (record.audience || "Identifica a sus clientes"),
    "Idea construida con el grupo: " + (record.idea || "Elige una idea para probar"), "",
    "PLAN DE 30 DÍAS", record.plan || "Crea tu ruta con el planificador.", "", "PRÁCTICA DE LA CALCULADORA", exerciseText, "",
    "ACUERDO DE SEGUIMIENTO", "Avance a compartir: " + (record.agreement || "Elige un avance para compartir"),
    "Canal acordado: " + (record.channel || "Elige el canal con tu grupo"), "Fecha de revisión: " + displayDate(record.review), "",
    "Conserva esta ficha para revisar las acciones y compartir tus avances."
  ].join("\n");
  downloadText("ficha-barrio-armenia-" + id + ".txt", text);
});
let clearConfirmationUntil = 0;
$("community-clear").addEventListener("click", () => {
  if (Date.now() > clearConfirmationUntil) {
    clearConfirmationUntil = Date.now() + 10000;
    aviso("Pulsa otra vez en 10 segundos para borrar la ficha actual. Descarga antes tu copia."); return;
  }
  clearConfirmationUntil = 0;
  workshopRecords[$("community-participant").value] = emptyWorkshopRecord();
  const saved = persistWorkshop(); loadWorkshopRecord();
  aviso(saved ? "Se borraron los datos de esta ficha." : "Se borró la ficha en memoria; el navegador no permite confirmar el borrado guardado.");
});
$("community-name").textContent = CONFIG.NOMBRE_COMUNIDAD;
loadWorkshopRecord();

function loadPracticeCase(key) {
  const item = PRACTICE_CASES.find(candidate => candidate.key === key);
  if (!item) return;
  activeWorkshopId = null;
  practiceContext = item;
  ultimoPlan = ""; $("plan-result").hidden = true;
  showBusiness(key);
  $("plan-name").value = item.name;
  $("plan-challenge").value = item.challenge;
  $("plan-audience").value = item.audience;
  $("plan-idea").value = item.idea;
  $("plan-indicator").value = item.indicator;
  $("plan-budget").value = item.investment;
  $("plan-time").value = "2";
  $("plan-goal").value = "clientes";
  $("plan-workshop-note").textContent = "Escenario de práctica: " + item.name + ". Personaliza las acciones y genera tu plan con estas cifras ilustrativas.";
  ["calc-investment", "calc-customers", "calc-ticket", "calc-cost"].forEach((id, i) => {
    $(id).value = [item.investment, item.customers, item.ticket, item.cost][i];
  });
  recalc();
  $("save-calculation").textContent = "Descargar este ejercicio";
  $("calculation-status").textContent = "Cifras ilustrativas del escenario de " + item.name + ". Puedes modificarlas para explorar otras decisiones.";
  document.querySelectorAll(".scenario-card").forEach(card => card.classList.toggle("is-selected", card.dataset.case === key));
  $("planificador").scrollIntoView({ behavior: "smooth", block: "start" });
  $("plan-name").focus({ preventScroll: true });
  aviso("Escenario cargado en el planificador y la calculadora.");
}
document.querySelectorAll("[data-scenario]").forEach(button => {
  button.addEventListener("click", () => loadPracticeCase(button.dataset.scenario));
});

