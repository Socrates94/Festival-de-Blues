document.addEventListener("DOMContentLoaded", () => {
    navegacionFija();
    crearGaleria();
    resaltarEnlace();
    scrollNav();
});

function navegacionFija() {
    const header = document.querySelector(".header");
    const sobreFestival = document.querySelector(".sobre-festival");

    document.addEventListener("scroll", () => {
        if (sobreFestival.getBoundingClientRect().bottom < 1) {
            header.classList.add("fixed");
        } else {
            header.classList.remove("fixed");
        }
    });
}

function crearGaleria() {
    const galeria = document.querySelector(".galeria-imagenes");
    if (!galeria) return;

    for (let i = 1; i <= 16; i++) {
        const imagen = document.createElement("PICTURE");
        imagen.innerHTML = `
            <source srcset="build/img/thumb/${i}.avif" type="image/avif">
            <source srcset="build/img/thumb/${i}.webp" type="image/webp">
            <img loading="lazy" width="200" height="300" src="build/img/thumb/${i}.jpg" alt="imagen galeria">
        `;
        
        imagen.onclick = () => {
            mostrarImagen(i);
        };

        galeria.appendChild(imagen);
    }
}

function mostrarImagen(id) {
    const imagen = document.createElement("PICTURE");
    imagen.innerHTML = `
        <source srcset="build/img/${id}.avif" type="image/avif">
        <source srcset="build/img/${id}.webp" type="image/webp">
        <img loading="lazy" width="200" height="300" src="build/img/${id}.jpg" alt="imagen galeria">
    `;

    // Visor de pantalla completa (lightbox modal personalizado)
    const modal = document.createElement("DIV");
    modal.classList.add("custom-lightbox");
    modal.onclick = cerrarModal;

    // Botón de cerrar
    const btnCerrar = document.createElement("BUTTON");
    btnCerrar.textContent = "X";
    btnCerrar.classList.add("btn-cerrar");
    btnCerrar.onclick = cerrarModal;

    modal.appendChild(imagen);
    modal.appendChild(btnCerrar);

    // Añadir al DOM
    const body = document.querySelector("body");
    body.classList.add("overflow-hidden");
    body.appendChild(modal);
}

function cerrarModal() {
    const modal = document.querySelector(".custom-lightbox");
    if (modal) {
        modal.classList.add("fade-out");
        setTimeout(() => {
            modal.remove();
            const body = document.querySelector("body");
            body.classList.remove("overflow-hidden");
        }, 500);
    }
}

function scrollNav() {
    const enlaces = document.querySelectorAll(".navegacion-principal a");
    
    enlaces.forEach(enlace => {
        enlace.addEventListener("click", (e) => {
            e.preventDefault();
            const seccionId = e.target.getAttribute("href");
            const seccion = document.querySelector(seccionId);
            
            if (seccion) {
                seccion.scrollIntoView({ behavior: "smooth" });
            }
        });
    });
}

function resaltarEnlace() {
    document.addEventListener("scroll", () => {
        const secciones = document.querySelectorAll("section");
        const enlaces = document.querySelectorAll(".navegacion-principal a");
        let actual = "";

        secciones.forEach(seccion => {
            const seccionTop = seccion.offsetTop;
            const seccionHeight = seccion.clientHeight;
            
            if (window.scrollY >= (seccionTop - seccionHeight / 3)) {
                actual = seccion.getAttribute("id");
            }
        });

        enlaces.forEach(enlace => {
            enlace.classList.remove("active");
            if (enlace.getAttribute("href") === `#${actual}`) {
                enlace.classList.add("active");
            }
        });
    });
}
