# IMPULSA LOCAL — PROTOTIPO WEB UNIVERSITARIO

**Objetivo:** ayudar a pequeños emprendedores de calles poco concurridas a aprender marketing digital práctico con planes y herramientas simples. Aporta también recomendaciones complementarias de seguridad y salud en el trabajo.

## 1. Cómo abrir la página en menos de un minuto

1. Descomprime `ImpulsaLocal.zip`.
2. Entra a la carpeta `ImpulsaLocal`.
3. Haz doble clic en **index.html**. Se abre en el navegador.
4. La web funciona sin instalar bibliotecas. Para las fuentes personalizadas necesitas internet; si no lo tienes, utiliza fuentes del sistema.
5. Navega por «Emprendimientos», cambia las cuatro pestañas, crea un plan, usa la calculadora y marca el checklist.

**Archivos principales:**

| Archivo | Función |
| --- | --- |
| `index.html` | Estructura, títulos, formularios y secciones de la web. |
| `styles.css` | Diseño, colores, responsive y animaciones CSS. |
| `script.js` | Interactividad, recomendaciones, calculadora, checklist y video. |
| `GUION_ENTREVISTA_MARKETING.md` | Guion completo para grabar al profesional. |
| `LEEME_PRIMERO.md` | Este manual de instalación y aprendizaje. |

## 2. Con qué herramientas gratuitas editarla

- **Visual Studio Code:** https://code.visualstudio.com/download — editor de código gratuito.
- **Extensión Live Server** (opcional) en VS Code, para ver modificaciones al guardar. También puedes usar la opción «Open with Live Server» si la tienes instalada.
- **GitHub Pages** (https://docs.github.com/es/pages): para publicar gratis este sitio académico desde un repositorio público.
- **Netlify** (https://www.netlify.com/): alternativa con un plan gratuito y límites de recursos.

### En Visual Studio Code

1. Abre VS Code → `Archivo` → `Abrir carpeta` → selecciona `ImpulsaLocal`.
2. Haz clic en `index.html` para ver el contenido.
3. Haz clic en `styles.css` para modificar diseños.
4. Haz clic en `script.js` para cambiar la lógica.
5. Guarda con **Ctrl + S** y actualiza el navegador. Con Live Server, normalmente se actualiza solo.

## 3. Tres cambios fáciles para personalizar

### A. Cambiar colores

Al principio de `styles.css` encontrarás:

```css
:root {
  --dark: #101d27;
  --lime: #dafa79;
  --teal: #42bdab;
}
```

Modifica estos valores para cambiar la personalidad del sitio. Por ejemplo, `--lime` controla la mayoría de los botones destacados.

### B. Insertar tu LinkedIn

Al principio de `script.js`:

```javascript
const CONFIG = {
  LINKEDIN_URL: "https://www.linkedin.com/in/TU-PERFIL/",
  VIDEO_YOUTUBE_URL: ""
};
```

Sustituye `TU-PERFIL` por tu identificador real. Si está vacío, la web mostrará «Enlace pendiente», sin llevar a un perfil inventado. Usa un enlace público de formato `/in/`.

### C. Añadir el video entrevistando al profesional

1. Graba y edita el video (consulta `GUION_ENTREVISTA_MARKETING.md`).
2. Publícalo en tu canal con los permisos necesarios (por ejemplo, YouTube con visibilidad pública o no listada).
3. Copia la URL, por ejemplo `https://youtu.be/VIDEO_ID`.
4. Cambia en `script.js`: `VIDEO_YOUTUBE_URL: "https://youtu.be/VIDEO_ID"`.
5. Guarda y actualiza. La web insertará un iframe con el reproductor de YouTube de dominio de privacidad mejorada.

## 4. Aprender las animaciones que sí usa este prototipo

**Animación A: elemento flotante** — `styles.css`:

```css
@keyframes float-emoji {
  50% { transform: translateY(-12px) rotate(-5deg); }
}
.cover-emoji {
  animation: float-emoji 4.5s ease-in-out infinite;
}
```

`@keyframes` define fotogramas; `animation` ejecuta el movimiento. Aquí el ícono sube y rota en la mitad de cada ciclo.

**Animación B: aparecer al hacer scroll** — `script.js`:

```javascript
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) entry.target.classList.add("visible");
  });
});
document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
```

Esta API detecta cuándo un elemento entra en pantalla. La clase `.visible` cambia opacidad y posición usando CSS. El proyecto incluye una versión que deja de observar los elementos una vez mostrados.

**Animación C: barra de progreso** — el evento `scroll` actualiza el porcentaje del documento recorrido. En vez de animar por animar, aporta orientación.

**Accesibilidad:** el código respeta la configuración `prefers-reduced-motion`: si una persona pide menos movimiento, se desactivan las animaciones.

## 5. Entender el JavaScript por partes

- `NEGOCIOS`: objeto con los cuatro casos, mensajes e ideas. Cambia su texto en `script.js` para personalizarlo a entrevistas reales.
- `showBusiness(id)`: actualiza las tarjetas cuando el usuario selecciona otro negocio.
- `plan-form` y `submit`: leen un formulario y construyen un plan inicial, descargable en `.txt`.
- `recalc()`: calcula ingresos atribuibles, costo de adquisición y contribución estimada.
- `FASES` y `showPhase()`: cambian la fase del plan de 90 días.
- `localStorage`: guarda los puntos marcados del checklist de riesgos en el mismo dispositivo. No envía esos datos a un servidor.

**Fórmulas de la calculadora:**

```
ingresos = clientes_nuevos_atribuibles * venta_promedio
costo_por_cliente = inversion / clientes_nuevos_atribuibles
contribucion_estimada = ingresos - (clientes_nuevos_atribuibles * costo_variable) - inversion
```

Esta contribución **no es utilidad neta**: faltan gastos fijos e impuestos.

## 6. Publicación gratuita con GitHub Pages

1. Abre una cuenta en https://github.com/ si aún no tienes.
2. Crea un repositorio **público** llamado, por ejemplo, `impulsa-local`.
3. Sube los archivos directamente a la raíz del repositorio: `index.html`, `styles.css`, `script.js` (y opcionalmente los documentos).
4. En el repositorio entra a **Settings → Pages**.
5. En **Build and deployment**, elige **Deploy from a branch**; selecciona `main` y la carpeta `/ (root)`. Guarda.
6. GitHub te mostrará una dirección de publicación con un formato como `https://USUARIO.github.io/impulsa-local/`.
7. Verifica en teléfono y computador que todos los botones y apartados funcionen.

**Importante:** la página es un proyecto académico/educativo estático. GitHub Pages no está pensado para funcionar como hosting comercial de comercio electrónico ni para recoger información sensible de usuarios. Si más adelante necesitas registros, pagos o ventas reales, evalúa otra infraestructura apropiada.

## 7. Cómo presentarla a tu docente

**Introducción:** «Es una plataforma de aprendizaje para negocios de bajo flujo peatonal. Adapté una metodología de marketing para barberías a cuatro tipos de emprendimiento».

**Demostración sugerida de 5 minutos:**

1. **0:00–0:45:** muestra la portada, el diseño adaptable y el objetivo del proyecto.
2. **0:45–1:45:** cambia entre las cuatro pestañas y enseña cómo varían las recomendaciones.
3. **1:45–2:40:** llena el planificador y descarga el plan generado.
4. **2:40–3:25:** mueve un número en la calculadora y explica la diferencia entre ingresos y contribución.
5. **3:25–4:15:** enseña la academia y el espacio del video del experto.
6. **4:15–5:00:** muestra el checklist de riesgos, la línea 123 y tu enlace de LinkedIn si lo configuraste.

Explica que el sitio trabaja solo con HTML, CSS y JavaScript; por el momento no almacena ventas reales ni reúne datos de clientes en una base de datos. Los casos representan estrategias hipotéticas que deberás validar con los propietarios.

## 8. Qué debes reemplazar antes de entregarlo

- Perfil real de LinkedIn y nombre del autor si quieres mostrarlos.
- Video grabado y editado con el experto; hoy solo existe el espacio para insertarlo.
- Productos, precios, horarios, fotos y ubicaciones confirmados por cada propietario.
- Métricas reales solo si los negocios las comparten y autorizan su publicación.
- Considera fotografías con licencia adecuada y consentimiento cuando aparezcan personas.

## 9. Fuentes y alcance

**Manual base:** *Manual práctico de marketing para una barbería* (archivo suministrado, 2026). Se adaptaron diagnóstico, cliente ideal, valor, marketing local, contenido, WhatsApp Business, promociones, presupuesto, indicadores y plan de 90 días.

**Fuentes oficiales de apoyo:**

- Google Business Profile: https://business.google.com/ — ficha gratuita según requisitos de elegibilidad; especial precaución con negocios móviles.
- Policía Nacional: https://www.policia.gov.co/ — línea 123 de emergencias en Colombia.
- Bomberos Bogotá: https://www.bomberosbogota.gov.co/ — atención a emergencias (123) en Bogotá.
- IDIGER: https://www.idiger.gov.co/ — recomendaciones y alertas por riesgos ambientales.
- Fondo de Riesgos Laborales: https://www.fondoriesgoslaborales.gov.co/ — materiales de prevención y seguridad y salud en el trabajo.

La lista de riesgos es una **orientación educativa**, no una auditoría de SG-SST. Para cualquier operación concreta debe revisarse normativa, condiciones y evaluación por personal competente.
