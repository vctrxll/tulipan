// Colores para los tulipanes
const tulipColors = [
    "#FF5E85", // Rosa
    "#FF4E50", // Rojo
    "#FFA500", // Naranja
    "#FFDD22", // Amarillo
    "#A359FF", // Púrpura
    "#5D8AA8", // Azul
    "#FF87D7", // Rosa claro
    "#FF5722", // Naranja rojizo
    "#7986CB", // Azul lavanda
    "#4CAF50"  // Verde
];

// Color para los tallos y hojas
const stemColor = "#4CAF50";

// Fecha de inicio (28 de marzo de 2025)
const startDate = new Date(2025, 2, 28); // Meses en JS son 0-indexed

// Función para crear un tulipán SVG
function createTulip(x, y, scale, colorIndex) {
    const color = tulipColors[colorIndex % tulipColors.length];

    // Grupo para el tulipán completo
    const tulipGroup = document.createElementNS("http://www.w3.org/2000/svg", "g");

    // Tallo
    const stem = document.createElementNS("http://www.w3.org/2000/svg", "path");
    stem.setAttribute("d", `M${x},${y+120 * scale} C${x},${y+80 * scale} ${x+5 * scale},${y+40 * scale} ${x},${y+10 * scale}`);
    stem.setAttribute("stroke", stemColor);
    stem.setAttribute("stroke-width", 2 * scale);
    stem.setAttribute("fill", "none");
    tulipGroup.appendChild(stem);

    // Hojas (2 hojas por tulipán)
    const leaf1 = document.createElementNS("http://www.w3.org/2000/svg", "path");
    const leafY = y + 80 * scale + Math.random() * 30 * scale;
    leaf1.setAttribute("d", `M${x},${leafY} C${x-15 * scale},${leafY-20 * scale} ${x-30 * scale},${leafY-10 * scale} ${x-20 * scale},${leafY+30 * scale}`);
    leaf1.setAttribute("stroke", stemColor);
    leaf1.setAttribute("stroke-width", 1.5 * scale);
    leaf1.setAttribute("fill", "none");
    tulipGroup.appendChild(leaf1);

    const leaf2 = document.createElementNS("http://www.w3.org/2000/svg", "path");
    const leaf2Y = y + 50 * scale + Math.random() * 30 * scale;
    leaf2.setAttribute("d", `M${x},${leaf2Y} C${x+20 * scale},${leaf2Y-20 * scale} ${x+30 * scale},${leaf2Y-5 * scale} ${x+25 * scale},${leaf2Y+35 * scale}`);
    leaf2.setAttribute("stroke", stemColor);
    leaf2.setAttribute("stroke-width", 1.5 * scale);
    leaf2.setAttribute("fill", "none");
    tulipGroup.appendChild(leaf2);

    // Flor del tulipán - versión mejorada más realista
    // Base de la flor
    const flowerBase = document.createElementNS("http://www.w3.org/2000/svg", "path");
    flowerBase.setAttribute("d", `
            M${x},${y}
            C${x-8 * scale},${y-5 * scale} ${x-12 * scale},${y-15 * scale} ${x-10 * scale},${y-25 * scale}
            C${x-8 * scale},${y-35 * scale} ${x-3 * scale},${y-40 * scale} ${x},${y-42 * scale}
            C${x+3 * scale},${y-40 * scale} ${x+8 * scale},${y-35 * scale} ${x+10 * scale},${y-25 * scale}
            C${x+12 * scale},${y-15 * scale} ${x+8 * scale},${y-5 * scale} ${x},${y}
        `);
    flowerBase.setAttribute("fill", color);
    flowerBase.setAttribute("stroke", color);
    flowerBase.setAttribute("stroke-width", 0.5 * scale);
    tulipGroup.appendChild(flowerBase);

    // Pétalos del tulipán
    // Pétalo izquierdo
    const petalLeft = document.createElementNS("http://www.w3.org/2000/svg", "path");
    petalLeft.setAttribute("d", `
            M${x-2 * scale},${y-15 * scale}
            C${x-12 * scale},${y-25 * scale} ${x-15 * scale},${y-35 * scale} ${x-10 * scale},${y-45 * scale}
            C${x-5 * scale},${y-48 * scale} ${x},${y-45 * scale} ${x},${y-42 * scale}
            C${x-5 * scale},${y-32 * scale} ${x-3 * scale},${y-20 * scale} ${x-2 * scale},${y-15 * scale}
        `);
    petalLeft.setAttribute("fill", color);
    petalLeft.setAttribute("stroke", color);
    petalLeft.setAttribute("stroke-width", 0.5 * scale);
    tulipGroup.appendChild(petalLeft);

    // Pétalo central
    const petalCenter = document.createElementNS("http://www.w3.org/2000/svg", "path");
    petalCenter.setAttribute("d", `
            M${x-2 * scale},${y-15 * scale}
            C${x-1 * scale},${y-25 * scale} ${x},${y-35 * scale} ${x},${y-47 * scale}
            C${x},${y-50 * scale} ${x},${y-50 * scale} ${x},${y-47 * scale}
            C${x},${y-35 * scale} ${x+1 * scale},${y-25 * scale} ${x+2 * scale},${y-15 * scale}
        `);
    petalCenter.setAttribute("fill", color);
    petalCenter.setAttribute("stroke", color);
    petalCenter.setAttribute("stroke-width", 0.5 * scale);
    tulipGroup.appendChild(petalCenter);

    // Pétalo derecho
    const petalRight = document.createElementNS("http://www.w3.org/2000/svg", "path");
    petalRight.setAttribute("d", `
            M${x+2 * scale},${y-15 * scale}
            C${x+12 * scale},${y-25 * scale} ${x+15 * scale},${y-35 * scale} ${x+10 * scale},${y-45 * scale}
            C${x+5 * scale},${y-48 * scale} ${x},${y-45 * scale} ${x},${y-42 * scale}
            C${x+5 * scale},${y-32 * scale} ${x+3 * scale},${y-20 * scale} ${x+2 * scale},${y-15 * scale}
        `);
    petalRight.setAttribute("fill", color);
    petalRight.setAttribute("stroke", color);
    petalRight.setAttribute("stroke-width", 0.5 * scale);
    tulipGroup.appendChild(petalRight);

    // Detalles de los pétalos - líneas sutiles
    const petalDetails = document.createElementNS("http://www.w3.org/2000/svg", "path");
    petalDetails.setAttribute("d", `
            M${x-5 * scale},${y-30 * scale} C${x-2 * scale},${y-35 * scale} ${x+2 * scale},${y-35 * scale} ${x+5 * scale},${y-30 * scale}
            M${x-3 * scale},${y-35 * scale} C${x-1 * scale},${y-40 * scale} ${x+1 * scale},${y-40 * scale} ${x+3 * scale},${y-35 * scale}
        `);
    petalDetails.setAttribute("stroke", color);
    petalDetails.setAttribute("stroke-width", 0.5 * scale);
    petalDetails.setAttribute("stroke-opacity", "0.7");
    petalDetails.setAttribute("fill", "none");
    tulipGroup.appendChild(petalDetails);

    // Añadir animación de entrada
    const enterAnimation = document.createElementNS("http://www.w3.org/2000/svg", "animate");
    enterAnimation.setAttribute("attributeName", "opacity");
    enterAnimation.setAttribute("from", "0");
    enterAnimation.setAttribute("to", "1");
    enterAnimation.setAttribute("dur", "2s");
    enterAnimation.setAttribute("fill", "freeze");
    tulipGroup.appendChild(enterAnimation);

    tulipGroup.setAttribute("opacity", "0"); // Inicialmente invisible

    return tulipGroup;
}

// Función para crear una nube SVG
function createCloud(x, y, scale) {
    const cloudGroup = document.createElementNS("http://www.w3.org/2000/svg", "g");

    // Forma de la nube
    const cloud = document.createElementNS("http://www.w3.org/2000/svg", "path");
    cloud.setAttribute("d", `
        M${x},${y}
        c${-15 * scale},${0} ${-15 * scale},${-10 * scale} ${-5 * scale},${-15 * scale}
        c${-10 * scale},${-15 * scale} ${20 * scale},${-25 * scale} ${35 * scale},${-10 * scale}
        c${15 * scale},${-15 * scale} ${40 * scale},${-5 * scale} ${40 * scale},${15 * scale}
        c${10 * scale},${10 * scale} ${0},${20 * scale} ${-10 * scale},${20 * scale}
        c${0},${10 * scale} ${-15 * scale},${15 * scale} ${-25 * scale},${5 * scale}
        c${-10 * scale},${10 * scale} ${-35 * scale},${5 * scale} ${-35 * scale},${-15 * scale}
    `);
    cloud.setAttribute("fill", "#ffffff"); // Nubes blancas puras
    cloud.setAttribute("stroke", "#ffffff");
    cloud.setAttribute("stroke-width", 1 * scale);
    cloudGroup.appendChild(cloud);

    // Añadir animación flotante
    const floatAnimation = document.createElementNS("http://www.w3.org/2000/svg", "animateTransform");
    floatAnimation.setAttribute("attributeName", "transform");
    floatAnimation.setAttribute("type", "translate");
    floatAnimation.setAttribute("values", `0,0; ${5 * scale},${-3 * scale}; 0,0`);
    floatAnimation.setAttribute("dur", "10s");
    floatAnimation.setAttribute("repeatCount", "indefinite");
    cloudGroup.appendChild(floatAnimation);

    // Añadir animación de entrada
    const enterAnimation = document.createElementNS("http://www.w3.org/2000/svg", "animate");
    enterAnimation.setAttribute("attributeName", "opacity");
    enterAnimation.setAttribute("from", "0");
    enterAnimation.setAttribute("to", "0.9");
    enterAnimation.setAttribute("dur", "3s");
    enterAnimation.setAttribute("fill", "freeze");
    cloudGroup.appendChild(enterAnimation);

    cloudGroup.setAttribute("opacity", "0"); // Inicialmente invisible

    return cloudGroup;
}

// Función para calcular días transcurridos desde la fecha de inicio
function getDaysSinceStart() {
    const today = new Date();
    const timeDiff = today - startDate;
    return Math.floor(timeDiff / (1000 * 60 * 60 * 24)) + 1; // +1 para incluir el primer día
}

// Función para actualizar la información de la fecha y tulipanes
function updateDateInfo(daysPassed) {
    const dateInfo = document.getElementById("dateInfo");
    const tulipInfo = document.getElementById("tulipInfo");

    dateInfo.innerHTML = `
        Han pasado ${daysPassed} ${daysPassed === 1 ? 'día' : 'días'} desde te extraño con todo mi corazón
    `;

    tulipInfo.innerHTML = `
        Hay ${daysPassed} ${daysPassed === 1 ? 'tulipán' : 'tulipanes'} en el jardín
    `;
}

// Función para mostrar el indicador día/noche
function updateDayNightIndicator() {
    const indicator = document.getElementById("dayNightIndicator");
    const currentHour = new Date().getHours();

    // Determinar si es día o noche (día: 6am-6pm, noche: resto)
    const isDaytime = currentHour >= 6 && currentHour < 18;

    const imgSrc = isDaytime ? "img/momento/sol.png" : "img/momento/luna.png";
    indicator.innerHTML = `<img src="${imgSrc}" alt="${isDaytime ? 'Sol' : 'Luna'}" width="60" height="60">`;
}

// Cargar galería de fotos dinámicamente
function loadPhotoGallery() {
    const photoGallery = document.getElementById("photoGallery");

    // Total de fotos a mostrar (aumentado a 36)
    const totalPhotos = 36;

    // Limpiar galería existente
    photoGallery.innerHTML = '';

    // Crear marcos de fotos dinámicamente
    for (let i = 1; i <= totalPhotos; i++) {
        const photoFrame = document.createElement("div");
        photoFrame.className = "photo-frame";
        photoFrame.innerHTML = `
            <img class="photo" src="img/juntos/foto${i}.jpeg" alt="Recuerdo ${i}">
            <img class="frame" src="img/marco.png" alt="Marco dorado">
        `;

        // Agregar evento de clic para mostrar la imagen en grande
        photoFrame.addEventListener("click", function() {
            openModal(`img/juntos/foto${i}.jpeg`, `Recuerdo ${i}`);
        });

        photoGallery.appendChild(photoFrame);
    }

    // Configurar el evento para la foto destacada
    document.getElementById("featuredPhoto").addEventListener("click", function() {
        openModal("img/gigante.jpg", "Nuestro momento especial");
    });
}

// Función para abrir el modal
function openModal(imgSrc, imgAlt) {
    const modal = document.getElementById("imageModal");
    const modalImg = document.getElementById("modalImage");

    modalImg.src = imgSrc;
    modalImg.alt = imgAlt;
    modal.style.display = "flex";

    // Deshabilitar el scroll del body cuando el modal está abierto
    document.body.style.overflow = "hidden";
}

// Función para cerrar el modal
function closeModal() {
    const modal = document.getElementById("imageModal");
    modal.style.display = "none";

    // Rehabilitar el scroll del body
    document.body.style.overflow = "auto";
}

// Configurar evento para cerrar el modal
document.querySelector(".close-btn").addEventListener("click", closeModal);

// Cerrar el modal también al hacer clic fuera de la imagen
document.getElementById("imageModal").addEventListener("click", function(event) {
    if (event.target === this) {
        closeModal();
    }
});

// Función principal para generar el jardín
function generateGarden() {
    const garden = document.getElementById("garden");

    // Limpiar el jardín existente
    while (garden.firstChild) {
        garden.removeChild(garden.firstChild);
    }

    // Calcular cuántos días han pasado
    const daysPassed = getDaysSinceStart();

    // Actualizar información de la fecha y tulipanes
    updateDateInfo(daysPassed);

    // Actualizar indicador día/noche
    updateDayNightIndicator();

    // Si no han pasado días todavía, mostrar un mensaje
    if (daysPassed <= 0) {
        const text = document.createElementNS("http://www.w3.org/2000/svg", "text");
        text.setAttribute("x", "50%");
        text.setAttribute("y", "50%");
        text.setAttribute("text-anchor", "middle");
        text.setAttribute("fill", "#fff");
        text.setAttribute("font-size", "20");
        text.textContent = "El jardín comenzará a florecer el 28 de marzo de 2025";
        garden.appendChild(text);
        return;
    }

    // Mostrar todos los tulipanes, adaptando el tamaño si son muchos
    const tulipsToShow = daysPassed;

    // Calcular el factor de escala basado en la cantidad de tulipanes
    // Si hay más de 50, reducir progresivamente el tamaño
    let scaleFactor = 1;
    if (tulipsToShow > 100) {
        scaleFactor = 0.5; // 50% del tamaño original
    } else if (tulipsToShow > 80) {
        scaleFactor = 0.6; // 60% del tamaño original
    } else if (tulipsToShow > 50) {
        scaleFactor = 0.8; // 80% del tamaño original
    }

    // Crear nubes (4 nubes)
    const cloud1 = createCloud(150, 100, 1.2);
    const cloud2 = createCloud(600, 70, 0.9);
    const cloud3 = createCloud(350, 50, 1.0); // Nueva nube
    const cloud4 = createCloud(450, 120, 0.8); // Nueva nube
    garden.appendChild(cloud1);
    garden.appendChild(cloud2);
    garden.appendChild(cloud3);
    garden.appendChild(cloud4);

    // Después de un pequeño retraso, mostrar las nubes
    setTimeout(() => {
        cloud1.setAttribute("opacity", "0.9");
        cloud2.setAttribute("opacity", "0.9");
        cloud3.setAttribute("opacity", "0.9");
        cloud4.setAttribute("opacity", "0.9");
    }, 500);

    // Generar posiciones para los tulipanes - adaptando el espaciado según la cantidad
    for (let i = 0; i < tulipsToShow; i++) {
        // Distribuir los tulipanes por todo el ancho - ajustando según cantidad
        const xSection = 800 / tulipsToShow;
        const baseX = i * xSection + xSection / 2;

        // Añadir algo de variación para que no estén en línea recta
        // Reducimos la variación si hay muchos tulipanes
        const variationFactor = Math.min(1, 30 / tulipsToShow);
        const x = baseX + (Math.random() * 30 - 15) * variationFactor;

        // Si hay muchos tulipanes, distribuirlos en múltiples filas
        // Calculamos cuántas filas necesitamos
        const maxTulipsPerRow = 50;
        const rows = Math.ceil(tulipsToShow / maxTulipsPerRow);
        const rowIndex = Math.floor(i / maxTulipsPerRow);

        // Ajustar la altura base según la fila
        const baseY = 350 - (rows > 1 ? (rowIndex * 50) : 0);

        // Variar la altura para crear un efecto más natural
        const y = baseY + (Math.random() * 30 - 15);

        // Variar el tamaño, considerando el factor de escala global
        const scale = (0.8 + (Math.random() * 0.4)) * scaleFactor;

        // Crear el tulipán
        const tulip = createTulip(x, y, scale, i);
        garden.appendChild(tulip);

        // Añadir un pequeño retraso a cada tulipán para que aparezcan secuencialmente
        // Si hay muchos, reducimos el retraso para que la animación no sea muy larga
        const delay = Math.min(100, 3000 / tulipsToShow);
        setTimeout(() => {
            tulip.setAttribute("opacity", "1");
        }, i * delay);
    }
}

// Inicialización cuando la página carga
window.onload = function() {
    generateGarden();
    loadPhotoGallery();
};