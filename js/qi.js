// 4D CAD CAM - Funciones del aula virtual
// Se conserva el protocolo de comunicación del proyecto original.
const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbzQ6JnohHFGT8aXOuMW2J-bgwf6KoElKHvv0RNkxGWMRA2XfYP39vEeyb_Kmh-5Ec0Gug/exec";
const TOKEN = "MI_4DTOKEN4D_SECRETA_1896";

const dataTemarios = {
    'mod-basico': { title: 'Exocad Básico', lessons: [
        {t: 'MÓDULO 1: FUNDAMENTOS Y RESTAURACIONES INDIVIDUALES', color: '#34495E', isHeader: true},
        {t: 'SEMANA 1', color: '#8B5CF6', isHeader: true},
        {t: 'MP-01 Inducción al aula virtual', active: false, week:1},
        {t: 'MP-02 Cofia simple (Modelo sin troquelar)', active: false, week:1},
        {t: 'MP-03 Cofia anatómica (Modelo sin troquelar)', active: false,  week:1},
        {t: 'MP-04 Corona anatómica (Modelo sin troquelar)', active: false, week:1},
        {t: 'MP-05 Corona veneer (Modelo sin troquelar)', active: false, week:1},
        {t: 'MP-06 Multiples restauraciones (aplicamos lo aprendido)', active: false, week:1},
        {t: 'SEMANA 2', color: '#8B5CF6', isHeader: true},
        {t: 'MP-07 Coronas ferulizadas(Modelo sin troquelar)', active: false, week:2},
        {t: 'MP-08 Puente reducido (Modelo sin troquelar)', active: false, week:2},
        {t: 'MP-09 Carilla (Modelo sin troquelar)', active: false, week:2},
        {t: 'MP-10 Incrustaciones onlay & inlay', active: false, week:2},
    ] },
    'mod-intermedio': { title: 'Exocad Intermedio', lessons: [
        {t: 'MÓDULO 2: ESTRUCTURAS FIJAS Y DISEÑO AVANZADO', color: '#34495E', isHeader: true},
        {t: 'SEMANA 3', color: '#8B5CF6', isHeader: true},
        {t: 'MP-11 Puente anatómico (Modelo troquelado)', active: false, week:3},
        {t: 'MP-12 Puente venner (Modelo troquelado)', active: false, week:3},
        {t: 'MP-13 Puente con falsa encía', active: false, week:3},
        {t: 'MP-14 Puente con falsa encía (aplicamos lo aprendido)', active: false, week:3},
        {t: 'SEMANA 4', color: '#8B5CF6', isHeader: true},
        {t: 'MP-15 Modelo de referencia (copia forma, tamaño, morfología)', active: false, week:4},
        {t: 'MP-16 Articulador virtual (3 funciones principales)', active: false, week:4},
        {t: 'MP-17 Corona + articulador virtual', active: false, week:4},
        {t: 'MP-18 Férula + articulador virtual', active: false, week:4},
    ] },
    'mod-avanzado': { title: 'Exocad Avanzado', lessons: [
        {t: 'MÓDULO 3: ESTÉTICA, IMPLANTES Y PLANIFICACIÓN DIGITAL', color: '#34495E', isHeader: true},
        {t: 'SEMANA 5', color: '#8B5CF6', isHeader: true},
        {t: 'MP-19 Mockup carillas', active: false, week:5},
        {t: 'MP-20 Mockup coronas (Aplicando lo aprendido)', active: false, week:5},
        {t: 'MP-21 Creador de modelos (Preparación de modelos para impresión 3D', active: false, week:5},
        {t: 'MP-22 Encerado anatómico (Aplicando lo aprendido)', active: false, week:5},
        {t: 'SEMANA 6', color: '#8B5CF6', isHeader: true},
        {t: 'MP-23 Coronas atornillada sobre pilar escaneado (Fase 01)', active: false, week:6},
        {t: 'MP-24 Coronas cementada sobre pilar escaneado (Fase 02)', active: false, week:6},
        {t: 'MP-25 Cofia atornillada sobre pilar escaneado (Fase 03)', active: false, week:6},
        {t: 'MP-26 Puente atornilladao sobre pilar escaneado (Aplicamos lo aprendido)', week:6},
        {t: 'MP-27 Pilares personalizados con scanbody (Fase 01)', active: false, week:6},
        {t: 'MP-28 Superestructura corona y puente (Fase 02)', active: false, week:6},
        {t: 'MP-29 Coronas y puente sobre implantes con scan bodie', active: false, week:6},
        {t: 'SEMANA 7', color: '#8B5CF6', isHeader: true},
        {t: 'MP-30  Barra sobre implante', active: false, week:7},
        {t: 'MP-31 Total cementada sobre implantes (Aplicamos lo aprendido)', active: false, week:7},
        {t: 'MP-32 Total anatómica sobre implantes', active: false, week:7},
        {t: 'MP-33 Barra tipo toronto (Aplicamos lo aprendido)', active: false, week:7},
        {t: 'SEMANA 8', color: '#8B5CF6', isHeader: true},
        {t: 'MP-34 Coronas y puente provisionales', active: false, week:8},
        {t: 'MP-35 Dentadura completa', active: false, week:8},
        {t: 'MP-36 Jaw motion de exocad', active: false, week:8},
        {t: 'MP-37 Guía de corte gingival exocad + meshmixer', active: false, week:8},
        {t: 'MP-38 Perno muñón exocad + meshmixer', active: false, week:8},
        {t: 'SEMANA 9', color: '#8B5CF6', isHeader: true},
        {t: 'MP-39 Diseño de sonrrisa (Fase 01)', active: false, week:9},
        {t: 'MP-40 Mockup 02 + Creador de modelos (Fase 02)', active: false, week:9},
        {t: 'MP-41 Diseño de PPRS (Uso de PartialCAD)', active: false, week:9},
        {t: 'MP-42 Dicon viewer (Visualización de datos TC)', active: false, week:9},
        {t: 'SEMANA 10', color: '#8B5CF6', isHeader: true},
        {t: 'MP-43 Planificación de implante Pza unitaria 01 (Uso de Exoplan)', active: false, week:10},
        {t: 'MP-44 Creación de guía qirúrgica Pza unitaria 01 (Uso de Exoplan)', active: false, week:10},
        {t: 'MP-45 Planificación de implante Desdentado total 02 (Uso de Exoplan)', active: false, week:10},
        {t: 'MP-46 Creación de guía qirúrgica Desdentado total 02 (Uso de Exoplan)', active: false, week:10},
    ] },
    'mod-friki': { title: 'Exocad Modo Friki', lessons: [
        {t: 'MÓDULO 4: EXPERT MODE (MODO FRIKI)', color: '#D4AF37', isHeader: true},
        {t: '1. Filosofía expert mode y control del sistema', color: '#D4AF37', isHeader: true},
        {t: '2. Ingeniería de mallas (mesh control avanzado)', color: '#D4AF37', isHeader: true},
        {t: '3. Diseño libre y anatomía no restringida', color: '#D4AF37', isHeader: true},
        {t: '4. Flujos no convencionales y hibridación digital', color: '#D4AF37', isHeader: true},
        {t: '5. Manipulación avanzada y control estructural ', color: '#D4AF37', isHeader: true},
        {t: '6. Hacking controlado y resolución de errores', color: '#D4AF37', isHeader: true},
        {t: '7. Casos complejos – ejecución en modo friki', color: '#D4AF37', isHeader: true},
        {t: '8. Filosofía modo friki – dominio total', color: '#D4AF37', isHeader: true},
    ] },
    'mod-3d': { title: 'Impresión 3D Dental', lessons: [
        {t: 'MÓDULO 5: METROLOGÍA DENTAL Y PRECISIÓN CERO EN IMPRESIÓN 3D (3D MASTER)', color: '#1ABC9C', isHeader: true},
        {t: 'SEMANA 11', color: '#8B5CF6', isHeader: true},
        {t: 'MP-47 El Factor de Transferencia – Digital vs. Físico', active: false, week:11},
        {t: 'MP-48 Protocolo Experimental y Medición del Error Dimensional', active: false, week:11},
        {t: 'MP-49 Análisis Avanzado y Mapeo del Error Tridimensional', active: false, week:11},
        {t: 'MP-50 Compensación Dimensional y Parametrización Avanzada', active: false, week:11},
        {t: 'MP-51 Control de Mallas y Preparación del Archivo (Mesh Integrity)', active: false, week:11},
        {t: 'MP-52 Aplicación Profesional y Validación Final (Dental & Industrial)', active: false, week:11},
    ] },
    'mod-cnc': { title: 'Fresado Dental CNC', lessons: [
        {t: 'MÓDULO 6: TECNOLOGÍAS DEL FRESADO DENTAL CNC Y OPTIMIZACIÓN', color: '#1ABC9C', isHeader: true},
        {t: 'SEMANA 12', color: '#8B5CF6', isHeader: true},
        {t: 'MP-53 Introducción al sistema CAD CAM ', active: false, week:12},
        {t: 'MP-54 Capacidad y tipos de materiales', active: false, week:12},
        {t: 'MP-55 Visualización y gestión de archivos', active: false, week:12},
        {t: 'MP-56 Agrupación (NESTING) y optimización de discos', active: false, week:12},
        {t: 'MP-57 Herramientas avanzadas del sistema ', active: false, week:12},
        {t: 'MP-58 Precisión y calidad de fresado', active: false, week:12},
    ] }
};


function getCurrentWeekForGroup(startDateString) {
    const start = new Date(startDateString);
    const today = new Date();
    if (today < start) return 0;
    const diffTime = Math.abs(today - start);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return Math.ceil(diffDays / 7);
}

// LÓGICA DEL AULA VIRTUAL
function renderizarVistaFinal(temario, datosUsuario) {
    const semanaUsuario = calcularSemanaActual(datosUsuario.fechaInicio);
    const lista = document.getElementById('lista-modulos-aula');
    if (!lista) return;
    let html = '';
    const nombreUsuario = datosUsuario?.nombre || "Estudiante";
    const grupoUsuario = datosUsuario?.grupo || "Sin Grupo";
    html += `<div class="w-full min-h-screen bg-gray-100 px-3 py-6"><div class="text-center mb-6"><h1 class="text-xl font-black uppercase text-gray-800">Acceso Aula Virtual</h1><p class="text-purple-700 font-bold mt-1">¡Bienvenid@, ${nombreUsuario}!</p><span class="text-[12px] text-gray-500 font-semibold">${grupoUsuario} - Semana ${semanaUsuario}</span></div>`;
    let index = 0;
    for (let id in temario) {
        const mod = temario[id];
        const esFriki = mod.title.toLowerCase().includes("friki");
        const semanasMod = mod.lessons.map(l => l.week);
        const semanaInicioModulo = Math.min(...semanasMod);
        const moduloDesbloqueado = semanaUsuario >= semanaInicioModulo;
        const contentId = `mod-content-${index}`;
        const iconId = `mod-icon-${index}`;
        let claseColor = 'bg-white text-gray-800 border border-gray-200';
        let iconoColor = 'text-gray-500';
        let iconoClase = 'fa-graduation-cap';
        const tituloMod = mod.title.toUpperCase();
        if (esFriki) { claseColor = 'bg-black text-white shadow-lg'; iconoColor = 'text-yellow-400'; iconoClase = 'fa-biohazard'; }
        else if (tituloMod.includes("EXOCAD BÁSICO")) { iconoColor = 'text-blue-500'; iconoClase = 'fa-layer-group'; }
        else if (tituloMod.includes("EXOCAD INTERMEDIO")) { iconoColor = 'text-purple-500'; iconoClase = 'fa-wand-magic-sparkles'; }
        else if (tituloMod.includes("EXOCAD AVANZADO")) { iconoColor = 'text-orange-500'; iconoClase = 'fa-crown'; }
        else if (tituloMod.includes("IMPRESIÓN 3D")) { iconoColor = 'text-green-500'; iconoClase = 'fa-print'; }
        else if (tituloMod.includes("FRESADO DENTAL") || tituloMod.includes("CNC")) { iconoColor = 'text-red-500'; iconoClase = 'fa-tools'; }
        const estiloFinalModulo = moduloDesbloqueado ? claseColor : 'bg-gray-400 opacity-50 cursor-not-allowed';
        const funcionClick = moduloDesbloqueado ? `onclick="toggleModulo('${contentId}','${iconId}')"` : `onclick="alert('Este módulo se desbloqueará en la Semana ${semanaInicioModulo}')"`;
        html += `<div class="mb-4 rounded-2xl overflow-hidden ${esFriki ? 'bg-black text-white shadow-xl border border-yellow-500/50' : 'bg-white shadow-sm border border-gray-200'}"><div ${funcionClick} class="flex items-center justify-between px-4 py-4 font-bold text-sm ${moduloDesbloqueado ? '' : 'opacity-50'} transition-all"><div class="flex items-center gap-3"><i class="fas ${moduloDesbloqueado ? iconoClase : 'fa-lock'} ${moduloDesbloqueado ? iconoColor : 'text-gray-400'} text-lg"></i><div class="flex flex-col"><span class="${esFriki ? 'text-white' : 'text-gray-900'}">${mod.title}</span><div class="flex text-[8px] text-yellow-400 mt-0.5"><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>${esFriki ? '<i class="fas fa-star"></i><i class="fas fa-star"></i>' : ''}</div></div></div>${moduloDesbloqueado ? `<i id="${iconId}" class="fas fa-chevron-down ${esFriki ? 'text-white' : 'text-gray-400'}"></i>` : ''}</div><div id="${contentId}" class="hidden">`;
        const semanas = [...new Set(semanasMod)].sort((a, b) => a - b);
        semanas.forEach(sem => {
            const numSemanaSeguro = sem || '1';
            const activa = semanaUsuario >= numSemanaSeguro;
            html += `<div class="px-4 py-2 ${esFriki ? 'bg-gray-900' : 'bg-gray-100'} flex justify-between items-center"><span class="text-[11px] font-black uppercase ${activa ? (esFriki ? 'text-yellow-400' : 'text-purple-700') : 'text-gray-400'}"><i class="fas fa-calendar"></i> Semana ${numSemanaSeguro}</span>${!activa ? '<span class="text-[10px] bg-gray-300 text-gray-600 px-2 py-0.5 rounded-full">Próximamente</span>' : ''}</div>`;
            const lecciones = mod.lessons.filter(l => l.week === sem);
            lecciones.forEach(lesson => {
                const activo = semanaUsuario >= lesson.week;
                html += activo ? `<a href="${lesson.link}" target="_blank" class="flex items-center justify-between px-4 py-3 ${esFriki ? 'hover:bg-gray-800' : 'hover:bg-purple-50'} transition border-t"><div class="flex items-center gap-2 text-[12px] ${esFriki ? 'text-white' : 'text-gray-800'}"><i class="fas fa-play-circle text-purple-500"></i>${lesson.title}</div><i class="fas fa-chevron-right text-gray-400 text-[11px]"></i></a>` : `<div class="flex items-center justify-between px-4 py-3 ${esFriki ? 'bg-gray-800' : 'bg-gray-50'} opacity-60 border-t"><div class="flex items-center gap-2 text-[12px] text-gray-400"><i class="fas fa-lock text-gray-400"></i>${lesson.title}</div><i class="fas fa-chevron-right text-gray-400 text-[11px]"></i></div>`;
            });
        });
        html += `</div></div>`;
        index++;
    }
    html += `<div class="mt-40 mb-20 px-3 w-full flex justify-center"><button onclick="location.reload()" class="w-full py-4 bg-white/10 backdrop-blur-md text-gray-400 text-[11px] font-bold uppercase tracking-[2px] rounded-2xl border border-gray-200/30 shadow-sm active:scale-95 transition-all">Cerrar Aula Virtual</button></div></div>`;
    lista.innerHTML = html;
}

function calcularSemanaActual(fechaInicio) {
    if(!fechaInicio) return 1;
    let fechaLimpia = fechaInicio.toString();
    if (fechaLimpia.includes('/')) {
        const partes = fechaLimpia.split('/');
        fechaLimpia = `${partes[2]}-${partes[1]}-${partes[0]}`;
    }
    const inicio = new Date(fechaLimpia);
    const hoy = new Date();
    inicio.setHours(0,0,0,0);
    hoy.setHours(0,0,0,0);
    if (hoy < inicio) return 0;
    const diff = Math.floor((hoy - inicio) / (1000 * 60 * 60 * 24));
    return Math.floor(diff / 7) + 1;
}

function cargarContenidoInterno(datosUsuario) {
    const lista = document.getElementById('lista-modulos-aula');
    if (!lista) return;
    lista.innerHTML = "<p style='text-align:center; font-size:10px; padding:20px;'>CARGANDO SESIONES...</p>";
    fetch(SCRIPT_URL, { method: 'POST', body: new URLSearchParams({ action: 'contenidos', token: TOKEN, id: window.alumnoId }) })
        .then(res => res.json())
        .then(temario => { renderizarVistaFinal(temario, datosUsuario); })
        .catch(err => { console.error("Error al cargar contenido:", err); lista.innerHTML = "<p style='color: #6366f1; text-align:center; font-size: 13px; font-weight: bold; padding: 20px; text-transform: uppercase;'><i class='fas fa-clock'></i> TU FORMACIÓN AÚN NO HA INICIADO. <br><span style='font-size: 10px; color: #94a3b8; display: block; mt-1;'>PRONTO SE HABILITARÁN TUS SESIONES AQUÍ.</span></p>"; });
}

function iniciarPollingMeet() {
    if (window.meetPollingInterval) clearInterval(window.meetPollingInterval);

    const ejecutarConsultaMeet = () => {
        if (!window.alumnoId) return;
        const params = new URLSearchParams();
        params.append('action', 'meet');
        params.append('token', TOKEN);
        params.append('id', window.alumnoId);
        
        fetch(SCRIPT_URL, { method: 'POST', body: params })
            .then(res => res.json())
            .then(data => {
                const btnMeet = document.getElementById('btn-meet-en-vivo');
                const btnAsis = document.getElementById('btn-confirmar-asistencia');
                if (!btnMeet || !btnAsis) return;

                if (data.showButton) {
                    btnMeet.style.display = 'flex';
                    btnAsis.style.display = 'flex';
                    if (data.minutesLeft <= 10 || data.active) {
                        btnAsis.disabled = false;
                        btnAsis.style.opacity = "1";
                        btnAsis.innerHTML = '<i class="fas fa-check-circle"></i> Confirmar Asistencia';
                    } else {
                        btnAsis.disabled = true;
                        btnAsis.style.opacity = "0.6";
                        btnAsis.innerHTML = `<i class="fas fa-lock"></i> Asistencia en ${data.minutesLeft - 10} min`;
                    }
                    if (data.active) {
                        btnMeet.disabled = false;
                        btnMeet.innerHTML = '<i class="fas fa-video"></i> ENTRAR A CLASE EN VIVO';
                        btnMeet.onclick = () => window.open(data.meetLink, '_blank');
                        btnMeet.classList.add('animate-pulse');
                    } else {
                        btnMeet.disabled = true;
                        btnMeet.innerHTML = `<i class="fas fa-clock"></i> INICIO EN ${data.minutesLeft} MIN`;
                        btnMeet.classList.remove('animate-pulse');
                    }
                } else {
                    btnMeet.style.display = 'none';
                    btnAsis.style.display = 'none';
                }
            })
            .catch(err => console.error("Error Polling:", err));
    };

    // 1. Ejecutar de inmediato al ingresar
    ejecutarConsultaMeet();

    // 2. Repetir cada 60 segundos
    window.meetPollingInterval = setInterval(ejecutarConsultaMeet, 60000);
}

function actualizarBarraVisual(total) {
    const porcentaje = Math.min(Math.round((total / 24) * 100), 100);
    const barra = document.getElementById('barra-progreso');
    const texto = document.getElementById('porcentaje-texto');
    const cont = document.getElementById('clases-contadas');
    if(barra) barra.style.width = porcentaje + "%";
    if(texto) texto.innerText = porcentaje + "%";
    if(cont) cont.innerText = total;
}

async function marcarAsistenciaManual() {
    const btn = document.getElementById('btn-confirmar-asistencia');
    const originalHTML = btn.innerHTML;
    btn.disabled = true;
    btn.innerHTML = "<i class='fas fa-spinner fa-spin'></i> Registrando...";
    try {
        const params = new URLSearchParams();
        params.append('action', 'marcar_asistencia');
        params.append('token', TOKEN);
        params.append('id', window.alumnoId);
        const res = await fetch(SCRIPT_URL, { method: 'POST', body: params });
        const data = await res.json();
        if (data.success) {
            btn.innerHTML = "<i class='fas fa-check'></i> ¡ASISTENCIA MARCADA!";
            btn.classList.replace('bg-green-600', 'bg-gray-400');
            if(data.nuevoTotal) actualizarBarraVisual(data.nuevoTotal);
        } else {
            if (data.error && data.error.indexOf("Ya marcaste") !== -1) {
                btn.innerHTML = "<i class='fas fa-check'></i> YA REGISTRADA";
                btn.classList.replace('bg-green-600', 'bg-gray-400');
                alert("Aviso: " + data.error);
            } else {
                alert("Error: " + (data.error || "No se pudo registrar"));
                btn.disabled = false;
                btn.innerHTML = originalHTML;
            }
        }
    } catch (e) {
        console.error("Error en asistencia manual:", e);
        alert("Hubo un problema de conexión.");
        btn.disabled = false;
        btn.innerHTML = originalHTML;
    }
}



function toggleModulo(contentId, iconId) {
    const content = document.getElementById(contentId);
    const icon = document.getElementById(iconId);
    const isOpen = !content.classList.contains('hidden');
    document.querySelectorAll('[id^="mod-content-"]').forEach(el => el.classList.add('hidden'));
    document.querySelectorAll('[id^="mod-icon-"]').forEach(el => el.classList.remove('rotate-180'));
    if (!isOpen) {
        content.classList.remove('hidden');
        icon.classList.add('rotate-180');
    }
}


document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("loginForm");
  const status = document.getElementById("status");
  const aula = document.getElementById("cursos-container");
  const pass = document.getElementById("password");
  const toggle = document.getElementById("toggle");
  const user = document.getElementById("userId");

  // 1. AL CARGAR LA PÁGINA: Verificar si hay un usuario recordado
  const saludoPrevio = document.getElementById("saludo-previo");
  const usuarioRecordado = document.getElementById("usuario-recordado");
  const idGuardado = localStorage.getItem("4d_ultimo_id");

  if (idGuardado && saludoPrevio && usuarioRecordado) {
    usuarioRecordado.textContent = idGuardado;
    saludoPrevio.style.display = "block";
    if (user) user.value = idGuardado; // Prellena el campo ID para ahorrarle tiempo
  }

  // Botón Mostrar / Ocultar contraseña
  if (toggle && pass) {
    toggle.addEventListener("click", () => {
      const mostrar = pass.type === "password";
      pass.type = mostrar ? "text" : "password";
      toggle.textContent = mostrar ? "Ocultar" : "Mostrar";
      toggle.setAttribute("aria-pressed", String(mostrar));
    });
  }

  // Envío del formulario de acceso
  if (form) {
    form.addEventListener("submit", async (event) => {
      event.preventDefault();
      if (!user.value.trim() || !pass.value) return;
      const button = form.querySelector('button[type="submit"]');
      const textoOriginal = button.textContent;
      button.disabled = true;
      button.textContent = "Validando...";
      status.textContent = "Verificando tus datos de acceso...";
      status.style.color = "var(--link)";

      const params = new URLSearchParams();
      params.append("action", "login");
      params.append("token", TOKEN);
      params.append("id", user.value.trim());
      params.append("pass", pass.value);

      try {
        const response = await fetch(SCRIPT_URL, { method: "POST", body: params });
        if (!response.ok) throw new Error("El servidor respondió con un error HTTP " + response.status);
        const data = await response.json();

        if (data.success && data.access === true) {
          const idIngresado = user.value.trim();

          // 2. AL INICIAR SESIÓN: Guardar el ID en la memoria del navegador
          localStorage.setItem("4d_ultimo_id", idIngresado);
          if (usuarioRecordado && saludoPrevio) {
            usuarioRecordado.textContent = idIngresado;
            saludoPrevio.style.display = "block";
          }

          window.alumnoId = idIngresado;
          window.datosAlumno = data;
          window.totalAsistencias = data.totalAsistencias || 0;
          actualizarBarraVisual(window.totalAsistencias);

          if (data.yaMarcoHoy) {
            const asistencia = document.getElementById("btn-confirmar-asistencia");
            if (asistencia) {
              asistencia.disabled = true;
              asistencia.innerHTML = '<i class="fas fa-check"></i> ASISTENCIA DEL DÍA OK';
              asistencia.classList.remove("bg-green-600");
              asistencia.classList.add("bg-gray-400");
            }
          }

          const saludo = document.getElementById("saludo-usuario");
          if (saludo) saludo.textContent = "Bienvenido/a " + (data.nombre || "");
          form.style.display = "none";
          document.querySelector(".new").style.display = "none";
          document.querySelector(".foot").style.display = "none";
          aula.classList.remove("hidden");
          document.body.style.overflow = "hidden";
          status.textContent = "";
          cargarContenidoInterno(data);
          iniciarPollingMeet();
        } else {
          status.textContent = data.error || "ID de usuario o contraseña incorrectos.";
          status.style.color = "#B42318";
        }
      } catch (error) {
        console.error("Error al iniciar sesión:", error);
        status.textContent = "No se pudo conectar con el servidor. Inténtalo nuevamente.";
        status.style.color = "#B42318";
      } finally {
        button.disabled = false;
        button.textContent = textoOriginal;
      }
    });
  }

  // Botón Cerrar sesión
  const logout = document.getElementById("logoutAula");
  if (logout) {
    logout.addEventListener("click", () => {
      if (window.meetPollingInterval) clearInterval(window.meetPollingInterval);
      window.alumnoId = null;
      window.datosAlumno = null;
      aula.classList.add("hidden");
      document.body.style.overflow = "";
      form.reset();

      // Mantener el ID recordado en el input tras cerrar sesión
      const ultimoId = localStorage.getItem("4d_ultimo_id");
      if (ultimoId && user) user.value = ultimoId;

      form.style.display = "";
      document.querySelector(".new").style.display = "";
      document.querySelector(".foot").style.display = "";
      status.textContent = "";
      pass.type = "password";
      toggle.textContent = "Mostrar";
      toggle.setAttribute("aria-pressed", "false");
    });
  }
});
