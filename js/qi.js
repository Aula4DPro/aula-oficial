// ============================================
// TODO EL JAVASCRIPT ORIGINAL - FUNCIONANDO
// ============================================

const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbzQ6JnohHFGT8aXOuMW2J-bgwf6KoElKHvv0RNkxGWMRA2XfYP39vEeyb_Kmh-5Ec0Gug/exec"; 
const TOKEN = "MI_4DTOKEN4D_SECRETA_1896";

let googleToken = "";

function handleGoogleSignIn(response) {
    const payload = JSON.parse(atob(response.credential.split('.')[1]));
    const email = payload.email;
    const given_name = payload.given_name;
    const family_name = payload.family_name;
    
    googleToken = response.credential;
    console.log("Google Sign-In exitoso:", email);
    
    const form = document.getElementById('form-inscripcion');
    if (form) {
        const nombreInput = form.querySelector('input[name="nombre"]');
        const apellidosInput = form.querySelector('input[name="apellidos"]');
        const correoInput = form.querySelector('input[name="correo"]');
        
        if (nombreInput && given_name) nombreInput.value = given_name;
        if (apellidosInput && family_name) apellidosInput.value = family_name;
        if (correoInput) {
            correoInput.value = email;
            correoInput.readOnly = true;
            correoInput.classList.add('bg-gray-100');
        }
        
        let tokenField = document.getElementById('google_token');
        if (!tokenField) {
            tokenField = document.createElement('input');
            tokenField.type = 'hidden';
            tokenField.name = 'google_token';
            tokenField.id = 'google_token';
            form.appendChild(tokenField);
        }
        tokenField.value = response.credential;
        
        const submitBtn = document.getElementById('submitBtn');
        if (submitBtn) submitBtn.disabled = false;
    }
}

function toggleAccordion(id, arrowId) {
    const content = document.getElementById(id);
    const arrow = document.getElementById(arrowId);
    if (content && arrow) {
        content.classList.toggle('open');
        arrow.classList.toggle('rotate-180');
    }
}

const targetDate = new Date(2026, 9, 12, 0, 0, 0).getTime();

function updateCountdown() {
    const now = new Date().getTime();
    const distance = targetDate - now;
    if (distance < 0) {
        document.getElementById("days") && (document.getElementById("days").innerText = "00");
        document.getElementById("hours") && (document.getElementById("hours").innerText = "00");
        document.getElementById("minutes") && (document.getElementById("minutes").innerText = "00");
        document.getElementById("seconds") && (document.getElementById("seconds").innerText = "00");
        return;
    }
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    document.getElementById("days") && (document.getElementById("days").innerText = days.toString().padStart(2, '0'));
    document.getElementById("hours") && (document.getElementById("hours").innerText = hours.toString().padStart(2, '0'));
    document.getElementById("minutes") && (document.getElementById("minutes").innerText = minutes.toString().padStart(2, '0'));
    document.getElementById("seconds") && (document.getElementById("seconds").innerText = seconds.toString().padStart(2, '0'));
}
setInterval(updateCountdown, 1000);
updateCountdown();

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

function openModal(id) {
    const modal = document.getElementById('modal-container');
    const list = document.getElementById('modal-list');
    const titleElement = document.getElementById('modal-title');
    const data = dataTemarios[id] || { title: 'Próximamente', lessons: [] };
    const isFriki = id === 'mod-friki';
    titleElement.innerHTML = isFriki ? `<span class="text-purple-600">☢</span> ${data.title} <span class="text-[10px] bg-black text-white px-2 py-0.5 rounded ml-2 italic">MASTER</span>` : data.title;
    list.innerHTML = data.lessons.map(l => {
        if (isFriki) {
            return `<div class="flex items-center justify-between p-4 rounded-xl bg-slate-900 border border-purple-500/30 shadow-[0_0_15px_rgba(168,85,247,0.15)] mb-2"><div class="flex items-center gap-3"><div class="w-8 h-8 rounded-lg bg-purple-500/10 flex items-center justify-center border border-purple-500/40"><i class="fas fa-microchip text-purple-400 text-[10px]"></i></div><div class="flex flex-col"><span class="text-[11px] font-black uppercase italic text-white tracking-tight">${l.t}</span><span class="text-[8px] font-bold uppercase text-purple-400 tracking-widest">⚡ Configuración Experta</span></div></div><i class="fas fa-terminal text-purple-500/40 text-[10px]"></i></div>`;
        }
        const tieneAcceso = l.active;
        const tag = tieneAcceso ? 'a' : 'div';
        const href = tieneAcceso ? `href="${l.link}" target="_blank"` : '';
        const bgClass = tieneAcceso ? 'bg-purple-50 border border-purple-200' : 'bg-gray-50 border border-gray-100';
        const textClass = tieneAcceso ? 'text-purple-700' : 'text-gray-700';
        const customStyle = l.color ? `style="color: ${l.color} !important;"` : '';
        return `<${tag} ${href} class="flex items-center justify-between p-4 rounded-xl mb-2 ${bgClass}"><div class="flex flex-col"><span class="text-[11px] font-black ${textClass}" ${customStyle}>${l.t}</span>${tieneAcceso ? '<span class="text-[8px] text-purple-400 font-bold uppercase">Aula disponible</span>' : ''}</div><i class="fas ${tieneAcceso ? 'fa-external-link-alt text-purple-500' : 'fa-lock text-gray-300'} text-[10px]"></i></${tag}>`;
    }).join('');
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal() { 
    document.getElementById('modal-container').classList.remove('active'); 
    document.body.style.overflow = 'auto';
}

function openModalInscripcion() { document.getElementById('modal-inscripcion').classList.add('active'); }
function closeModalInscripcion() { document.getElementById('modal-inscripcion').classList.remove('active'); }
function openModalAula() { document.getElementById('modal-aula').classList.add('active'); }
function closeModalAula() { document.getElementById('modal-aula').classList.remove('active'); }

window.onclick = function(event) {
    const modals = ['modal-container', 'modal-inscripcion', 'modal-aula'];
    modals.forEach(id => {
        const m = document.getElementById(id);
        if (event.target == m) {
            m.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
    });
}

// LÓGICA DE ENVÍO DE INSCRIPCIÓN (CORREGIDA)
document.addEventListener("DOMContentLoaded", function() {
    const formInscripcion = document.getElementById("form-inscripcion");
    if (formInscripcion) {
        formInscripcion.addEventListener('submit', async function(e) {
            e.preventDefault();
            if (formInscripcion.dataset.enviando === "true") return;
            formInscripcion.dataset.enviando = "true";
            
            const submitBtn = document.getElementById('submitBtn');
            const originalText = submitBtn.innerText;
            submitBtn.innerText = "Generando ID...";
            submitBtn.disabled = true;
            
            const formData = new FormData(formInscripcion);
            const datos = {};
            for (let [key, value] of formData.entries()) { datos[key] = value; }
            
            const horarioCompleto = datos.horario_completo;
            if (horarioCompleto) {
                const partes = horarioCompleto.split('|');
                datos.dias = partes[0];
                datos.turno = partes[1];
                datos.horario = partes[2];
            }
            
            const googleTokenField = document.getElementById('google_token');
            if (googleTokenField && googleTokenField.value) {
                datos.google_token = googleTokenField.value;
            }
            
            const timezoneSelect = document.getElementById('timezone-select');
            if (timezoneSelect && timezoneSelect.value) {
                datos.zona_horaria = timezoneSelect.value;
            }
            
            const formDataToSend = new FormData();
            formDataToSend.append('action', 'inscripcion');
            formDataToSend.append('token', TOKEN);
            for (const key in datos) {
                formDataToSend.append(key, datos[key]);
            }
            
            try {
                const response = await fetch(SCRIPT_URL, { method: 'POST', body: formDataToSend });
                const data = await response.json();
                
                if (data.success) {
                    const modalContent = document.getElementById('modal-inscripcion').querySelector('.modal-content');
                    modalContent.innerHTML = `<div class="w-12 h-1.5 bg-gray-200 rounded-full mx-auto mb-6"></div><div class="text-center animate-fade-in"><div class="w-16 h-16 bg-green-100 text-green-500 rounded-full flex items-center justify-center mx-auto mb-4"><i class="fas fa-check text-2xl"></i></div><h4 class="text-xl font-black text-gray-900 uppercase">¡Registro Recibido!</h4><p class="text-[12px] text-gray-500 mt-2">Hola <strong class="text-gray-900">${datos.nombre || ''}</strong>, tus datos han sido registrados.</p><div class="my-6"><p class="text-[10px] font-bold text-gray-400 uppercase mb-2">Tu código único de alumno es:</p><div class="p-3 border-2 border-dashed border-purple-300 rounded-xl bg-purple-50"><span class="text-2xl font-black text-purple-700 tracking-widest">${data.id}</span></div></div><div class="bg-blue-50 p-4 rounded-2xl text-left mb-6 border border-blue-100"><p class="text-[10px] font-black text-blue-600 uppercase mb-2"><i class="fas fa-calendar-alt mr-1"></i> Tu horario seleccionado:</p><p class="text-sm font-bold text-blue-800">${datos.dias || ''} - ${datos.turno || ''} (${datos.horario || ''})</p></div><div class="bg-blue-50 p-4 rounded-2xl text-left mb-6 border border-blue-100"><p class="text-[10px] font-black text-blue-600 uppercase mb-2"><i class="fas fa-info-circle mr-1"></i> Próximos pasos:</p><ul class="text-[11px] text-blue-800 space-y-1 font-medium"><li>1. Realiza el pago de tu matrícula.</li><li>2. Envía el comprobante por WhatsApp.</li><li>3. Recibirás tu contraseña de acceso.</li></ul></div><div class="space-y-3"><button onclick="togglePaymentOptions()" class="block w-full py-4 bg-[#2ECC71] hover:bg-[#27AE60] text-white rounded-2xl font-black text-sm shadow-lg flex items-center justify-center gap-2 transition-all"><i class="fas fa-wallet text-lg"></i><span>REALIZAR TU PAGO AHORA</span><i id="payment-chevron" class="fas fa-chevron-down text-xs transition-transform duration-300"></i></button><div id="payment-options-container" class="hidden space-y-4 pt-4 border-t border-gray-100 animate-fade-in"><div class="bg-blue-50/50 p-4 rounded-2xl border border-blue-100 text-left"><p class="text-[10px] font-black text-blue-700 uppercase mb-3"><i class="fas fa-university mr-1"></i> Medios de Pago Nacionales</p><div class="space-y-2"><a href="https://wa.me/51993232545?text=ID:${data.id}%20*BCP*%20A%20nombre%20de%20Linder%20Efrain%20Briones%20Paredes%20•%20Cta.%20soles:%201929%206552073044..." target="_blank" class="flex items-center justify-between p-3 bg-white border border-gray-200 rounded-xl hover:border-blue-300 transition"><span class="text-[11px] font-bold text-gray-700">BCP (Soles y Dólares)</span><i class="fas fa-credit-card text-blue-400 text-[12px]"></i></a><a href="https://wa.me/51993232545?text=ID:${data.id}%20*BBVA*%20A%20nombre%20de%20Linder%20Efrain%20Briones%20Paredes%20•%20Cta.%20soles:%200011-0360-0200681531..." target="_blank" class="flex items-center justify-between p-3 bg-white border border-gray-200 rounded-xl hover:border-blue-300 transition"><span class="text-[11px] font-bold text-gray-700">BBVA (Soles y Dólares)</span><i class="fas fa-credit-card text-blue-400 text-[12px]"></i></a><a href="https://wa.me/51993232545?text=ID:${data.id}%20*INTERBANK*%20A%20nombre%20de%20Linder%20Efrain%20Briones%20Paredes%20•%20Cta.%20soles:%20898-3%20411686100..." target="_blank" class="flex items-center justify-between p-3 bg-white border border-gray-200 rounded-xl hover:border-blue-300 transition"><span class="text-[11px] font-bold text-gray-700">Interbank (Soles y Dólares)</span><i class="fas fa-credit-card text-blue-400 text-[12px]"></i></a></div></div><div class="bg-purple-50/50 p-4 rounded-2xl border border-purple-100 text-left"><p class="text-[10px] font-black text-purple-700 uppercase mb-3"><i class="fas fa-globe mr-1"></i> Medios de Pago Internacionales</p><div class="space-y-2"><a href="https://wa.me/51993232545?text=ID:${data.id}%20*PAYPAL*%20link:%20paypal.me/4dcadcam7" target="_blank" class="flex items-center justify-between p-3 bg-white border border-gray-200 rounded-xl hover:border-purple-300 transition"><span class="text-[11px] font-bold text-gray-700">PayPal (Crédito/Débito)</span><i class="fab fa-paypal text-purple-400"></i></a><a href="https://wa.me/51993232545?text=ID:${data.id}%20*WESTERN%20UNION*%20Beneficiario:%20Linder%20Efrain%20Briones%20Paredes" target="_blank" class="flex items-center justify-between p-3 bg-white border border-gray-200 rounded-xl hover:border-purple-300 transition"><span class="text-[11px] font-bold text-gray-700">Western Union / Argenper</span><i class="fas fa-globe text-gray-300 text-[10px]"></i></a></div></div></div></div><button onclick="closeModalInscripcion()" class="w-full mt-4 py-3 text-gray-400 font-bold text-[10px] uppercase">Cerrar Ventana</button></div>`;
                } else {
                    alert("Error en el registro: " + (data.error || "intenta de nuevo"));
                    submitBtn.innerText = originalText;
                    submitBtn.disabled = false;
                }
            } catch (error) {
                console.error(error);
                alert("Error de conexión");
                submitBtn.innerText = originalText;
                submitBtn.disabled = false;
            }
            delete formInscripcion.dataset.enviando;
        });
    }
});

function togglePaymentOptions() {
    const container = document.getElementById('payment-options-container');
    const chevron = document.getElementById('payment-chevron');
    if(container && chevron) {
        container.classList.toggle('hidden');
        chevron.classList.toggle('rotate-180');
    }
}

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

// LOGIN DEL AULA
document.getElementById('form-aula')?.addEventListener('submit', function(e) {
    e.preventDefault();
    const form = this; // 👈 SE GUARDA LA REFERENCIA AQUÍ
    const inputs = form.querySelectorAll('input');
    const idUsuario = inputs[0].value.trim();
    const password = inputs[1].value.trim();
    const btn = form.querySelector('button[type="submit"]');
    const originalText = btn.innerText;
    
    btn.innerText = "Validando...";
    btn.disabled = true;

    const params = new URLSearchParams();
    params.append('action', 'login');
    params.append('token', TOKEN);
    params.append('id', idUsuario);
    params.append('pass', password);

    fetch(SCRIPT_URL, { method: 'POST', body: params })
        .then(res => res.json())
        .then(data => {
            if (data.success && data.access === true) {
                window.alumnoId = idUsuario;
                window.datosAlumno = data;
                window.totalAsistencias = data.totalAsistencias || 0;
                
                actualizarBarraVisual(window.totalAsistencias);

                if (data.yaMarcoHoy) {
                    const btnAsis = document.getElementById('btn-confirmar-asistencia');
                    if (btnAsis) {
                        btnAsis.disabled = true;
                        btnAsis.innerHTML = "<i class='fas fa-check'></i> ASISTENCIA DEL DÍA OK";
                        btnAsis.classList.remove('bg-green-600');
                        btnAsis.classList.add('bg-gray-400');
                    }
                }

                // 1. Mostrar pantalla de inmediato usando la variable guardada 'form'
                form.classList.add('hidden');
                document.getElementById('cursos-container').classList.remove('hidden');

                // 2. Restaurar el botón
                btn.innerText = originalText;
                btn.disabled = false;

                // 3. Cargar el temario y el Meet en segundo plano de forma segura
                setTimeout(() => {
                    cargarContenidoInterno(data);
                    iniciarPollingMeet();
                }, 50);

            } else {
                alert("ID o Contraseña incorrectos. Por favor, intenta de nuevo.");
                btn.innerText = originalText;
                btn.disabled = false;
            }
        })
        .catch(err => {
            console.error("Error Login:", err);
            btn.innerText = originalText;
            btn.disabled = false;
        });
});

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

            // CONVERSOR DE MONEDA
            function convertirMoneda() {
                const select = document.getElementById('currency-select');
                const customDiv = document.getElementById('custom-rate-container');
                const customInput = document.getElementById('custom-rate');
                const displayPrecio = document.getElementById('converted-price');
                const displayTax = document.getElementById('converted-tax');
                if (!select || !displayPrecio) return;
                const val = select.value;
                let tasa = 0;
                let simbolo = "";
                if (val === "custom|0") {
                    if (customDiv) customDiv.classList.remove('hidden');
                    tasa = parseFloat(customInput?.value) || 0;
                    simbolo = "";
                    if (customInput) customInput.oninput = convertirMoneda;
                } else {
                    if (customDiv) customDiv.classList.add('hidden');
                    if (val) {
                        tasa = parseFloat(val.split('|')[1]);
                        const texto = select.options[select.selectedIndex]?.text || "";
                        if (texto.includes("Perú")) simbolo = "S/";
                        else if (texto.includes("México")) simbolo = "$";
                        else if (texto.includes("Colombia")) simbolo = "$";
                        else if (texto.includes("Chile")) simbolo = "$";
                        else if (texto.includes("Argentina")) simbolo = "$";
                        else if (texto.includes("Bolivia")) simbolo = "Bs";
                        else if (texto.includes("Uruguay")) simbolo = "$";
                        else if (texto.includes("Paraguay")) simbolo = "₲";
                        else if (texto.includes("Euro")) simbolo = "€";
                        else if (texto.includes("EEUU") || texto.includes("Ecuador") || texto.includes("USD")) simbolo = "$";
                        else if (texto.includes("Costa Rica")) simbolo = "₡";
                        else if (texto.includes("Nicaragua")) simbolo = "C$";
                        else if (texto.includes("Honduras")) simbolo = "L";
                        else if (texto.includes("Guatemala")) simbolo = "Q";
                        else if (texto.includes("Dominicana")) simbolo = "RD$";
                        else simbolo = "$";
                    }
                }
                if (tasa > 0) {
                    const precioBase = 499;
                    const tasaImpuesto = 0.0553;
                    const montoConvertido = (precioBase * tasa).toFixed(2);
                    const impuestoConvertido = (precioBase * tasa * tasaImpuesto).toFixed(2);
                    displayPrecio.innerHTML = `${simbolo} ${montoConvertido}`;
                    if (displayTax) displayTax.innerHTML = `${simbolo} ${impuestoConvertido}`;
                } else {
                    displayPrecio.innerHTML = "--";
                    if (displayTax) displayTax.innerHTML = "--";
                }
            }

            document.addEventListener('DOMContentLoaded', function() {
                const currencySelect = document.getElementById('currency-select');
                if (currencySelect) {
                    currencySelect.addEventListener('change', convertirMoneda);
                    const customRate = document.getElementById('custom-rate');
                    if (customRate) customRate.addEventListener('input', convertirMoneda);
                    convertirMoneda();
                }
            });

            // ZONA HORARIA
            function convertirHora(horaPeru, offsetLocal) {
                let [h, m] = horaPeru.split(':').map(Number);
                let fecha = new Date();
                fecha.setUTCHours(h, m, 0, 0);
                fecha.setUTCHours(fecha.getUTCHours() + 5);
                fecha.setUTCHours(fecha.getUTCHours() + offsetLocal);
                let horaLocal = fecha.getUTCHours().toString().padStart(2, '0');
                let minLocal = fecha.getUTCMinutes().toString().padStart(2, '0');
                return `${horaLocal}:${minLocal}`;
            }

            function actualizarHorariosLocales(utcSeleccionado) {
                const selectorHorario = document.getElementById('horario-select');
                if (!selectorHorario) return;
                
                const opciones = selectorHorario.querySelectorAll('option');
                const offsetLocal = parseInt(utcSeleccionado); // ej: -6 para Costa Rica
                
                // Guardar valores originales la primera vez
                if (!selectorHorario.dataset.originalValues) {
                    const originales = [];
                    opciones.forEach((opt, idx) => {
                        if (idx > 0 && opt.value) {
                            const partes = opt.value.split('|');
                            if (partes.length >= 3) {
                                originales.push({ 
                                    dias: partes[0], 
                                    turno: partes[1], 
                                    horaPeru: partes[2] 
                                });
                            }
                        }
                    });
                    selectorHorario.dataset.originalValues = JSON.stringify(originales);
                }
                
                const originales = JSON.parse(selectorHorario.dataset.originalValues);
                
                opciones.forEach((opt, idx) => {
                    if (idx === 0 || !opt.value) return;
                    
                    if (idx - 1 < originales.length) {
                        const orig = originales[idx - 1];
                        const [inicioPeru, finPeru] = orig.horaPeru.split(' - ');
                        
                        if (inicioPeru && finPeru) {
                            // Calcular diferencia: hora local = hora Perú + (offsetLocal + 5)
                            const [hInicio, mInicio] = inicioPeru.split(':').map(Number);
                            const [hFin, mFin] = finPeru.split(':').map(Number);
                            
                            let horaInicioLocal = hInicio + (offsetLocal + 5);
                            let horaFinLocal = hFin + (offsetLocal + 5);
                            
                            // Ajustar si pasa de 24 horas
                            if (horaInicioLocal >= 24) horaInicioLocal -= 24;
                            if (horaFinLocal >= 24) horaFinLocal -= 24;
                            if (horaInicioLocal < 0) horaInicioLocal += 24;
                            if (horaFinLocal < 0) horaFinLocal += 24;
                            
                            const inicioLocal = `${horaInicioLocal.toString().padStart(2, '0')}:${mInicio.toString().padStart(2, '0')}`;
                            const finLocal = `${horaFinLocal.toString().padStart(2, '0')}:${mFin.toString().padStart(2, '0')}`;
                            
                            if (offsetLocal === -5) {
                                opt.textContent = `${orig.dias} - ${orig.turno} (${orig.horaPeru} Perú)`;
                            } else {
                                opt.textContent = `${orig.dias} - ${orig.turno} (${orig.horaPeru} Perú) → (${inicioLocal}-${finLocal} tu zona)`;
                            }
                            opt.value = `${orig.dias}|${orig.turno}|${orig.horaPeru}`;
                        }
                    }
                });
            }

        document.addEventListener('DOMContentLoaded', function() {
            const tzSelect = document.getElementById('timezone-select');
            if (tzSelect) {
                tzSelect.addEventListener('change', function() { actualizarHorariosLocales(this.value); });
                actualizarHorariosLocales("-5");
            }
        });

// ============================================
// SIMULACIÓN CON DATOS FIJOS Y SIN REPETICIÓN DE COMBINACIONES
// ============================================
document.addEventListener('DOMContentLoaded', function() {
    // Cargar dinámicamente la librería de confeti si no existe
    if (typeof confetti !== 'function') {
        const scriptConfetti = document.createElement('script');
        scriptConfetti.src = 'https://cdn.jsdelivr.net/npm/canvas-confetti@1.9.2/dist/confetti.browser.min.js';
        document.head.appendChild(scriptConfetti);
    }

    const listaNombres = [
        "Téc. Carlos R.", "Dra. María F.", "Dr. Alejandro M.", 
        "Dra. Xiomara G.", "Ing. Roberto K.", "Téc. Noris D.", 
        "Dra. Sofía L.", "Dr. Gabriel T.", "Téc. Valentina T.", 
        "Téc. Fernando P.", "Dr. Diego H.", "Dra. Camila V."
    ];

    const listaPaises = [
        "Perú 🇵🇪", "México 🇲🇽", "Colombia 🇨🇴", "Chile 🇨🇱", 
        "Ecuador 🇪🇨", "Argentina 🇦🇷", "EEUU 🇺🇸", "Costa Rica 🇨🇷", 
        "Nicaragua 🇳🇮", "Paraguay 🇵🇾", "Uruguay 🇺🇾", "Bolivia 🇧🇴", "España 🇪🇸"
    ];

    const listaTurnos = ["Turno Mañana 🌅", "Turno Tarde ☀️", "Turno Noche 🌙"];
    const cursoUnico = "Especialización CAD CAM";

    // 🔒 PASO 1: ASIGNACIÓN FIJA E INMUTABLE
    // Se ejecuta 1 sola vez al cargar la página. Sofía siempre tendrá el mismo país y turno asignado.
    const alumnosConDatosFijos = listaNombres.map((nombre, index) => {
        return {
            nombre: nombre,
            pais: listaPaises[index % listaPaises.length], // Asigna un país único distribuido
            turno: listaTurnos[index % listaTurnos.length]  // Asigna un turno único distribuido
        };
    });

    // Cola de control para evitar repeticiones consecutivas
    let colaCiclo = [...alumnosConDatosFijos];

    // Crear el contenedor de la notificación si no existe
    let notificationContainer = document.getElementById('notification-toast');
    if (!notificationContainer) {
        notificationContainer = document.createElement('div');
        notificationContainer.id = 'notification-toast';
        notificationContainer.className = 'fixed bottom-28 left-4 z-[80] max-w-sm bg-white/95 backdrop-blur-md border border-purple-100 p-4 rounded-2xl shadow-xl transform -translate-x-full opacity-0 scale-120 origin-bottom-left transition-all duration-500 flex items-center gap-4 pointer-events-none';
        document.body.appendChild(notificationContainer);
    }

    // Función global para ocultar la notificación
    function ocultarNotificacion() {
        if (notificationContainer) {
            notificationContainer.classList.remove('translate-x-0', 'opacity-100');
            notificationContainer.classList.add('-translate-x-full', 'opacity-0');
        }
    }

    // Ocultar si el usuario abre alguna modal de la web
    document.querySelectorAll('[onclick*="openModal"]').forEach(btn => {
        btn.addEventListener('click', ocultarNotificacion);
    });

    // Función para disparar el Pica Pica
    function dispararPicaPica() {
        if (typeof confetti === 'function') {
            confetti({
                particleCount: 30,
                spread: 55,
                origin: { x: 0.1, y: 0.8 },
                colors: ['#a855f7', '#6366f1', '#ec4899', '#eab308']
            });
        }
    }

    function mostrarNuevaMatricula() {
        // No mostrar si hay modales abiertas o el aula virtual está desplegada
        if (document.querySelector('.modal.active') || !document.getElementById('cursos-container')?.classList.contains('hidden')) {
            return;
        }

        // 🔄 PASO 2: REINICIAR CICLO SOLO CUANDO TODOS HAYA SALIDO UNA VEZ
        if (colaCiclo.length === 0) {
            colaCiclo = [...alumnosConDatosFijos];
        }

        // Extraer un alumno aleatorio de la cola (y eliminarlo temporalmente)
        const indexAleatorio = Math.floor(Math.random() * colaCiclo.length);
        const alumnoActivo = colaCiclo.splice(indexAleatorio, 1)[0];

        notificationContainer.innerHTML = `
            <div class="w-11 h-11 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 font-black text-base shrink-0">
                <i class="fas fa-user-check"></i>
            </div>
            <div class="text-left">
                <p class="text-[13px] font-black text-gray-900 leading-tight">${alumnoActivo.nombre} <span class="text-[11px] font-normal text-gray-500">(${alumnoActivo.pais})</span></p>
                <p class="text-[10px] font-bold text-purple-500 leading-tight mt-0.5">${alumnoActivo.turno}</p>
                <p class="text-[12px] font-bold text-purple-700 leading-tight mt-0.5">Se inscribió en ${cursoUnico}</p>
                <span class="text-[10px] text-gray-400 font-medium">Hace unos segundos</span>
            </div>
        `;

        notificationContainer.classList.remove('-translate-x-full', 'opacity-0');
        notificationContainer.classList.add('translate-x-0', 'opacity-100');

        dispararPicaPica();

        // Mantiene la tarjeta 7 segundos visible
        setTimeout(ocultarNotificacion, 7000);
    }

    // Primera ejecución a los 3 segundos
    setTimeout(mostrarNuevaMatricula, 3000);

    // Repetir entre 10 y 18 segundos
    setInterval(() => {
        mostrarNuevaMatricula();
    }, Math.floor(Math.random() * 8000) + 10000);
});