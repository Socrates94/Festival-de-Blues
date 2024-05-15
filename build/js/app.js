document.addEventListener('DOMContentLoaded', function(){
    navegacionFija();
    crearGaleria();
    resaltarEnlace();
    scrollNav();
})

function resaltarEnlace(){
    document.addEventListener('scroll', function(){
        const sections = document.querySelectorAll('section');
        const enlaces = document.querySelectorAll('.navegacion-principal a');

        let actual = '';
        sections.forEach( section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if(window.scrollY >= (sectionTop - sectionHeight/3)){
                actual = section.getAttribute('id');
            }
            
        })

        enlaces.forEach( enlace => {
            enlace.classList.remove('active');
            if(enlace.getAttribute('href') === `#${actual}`){
                enlace.classList.add('active');
            }
        })
    })
}

function navegacionFija(){
    const header = document.querySelector('.header');
    const sobreFestival = document.querySelector('.sobre-festival');

    document.addEventListener('scroll', function(){
        if(sobreFestival.getBoundingClientRect().bottom < 1){
            header.classList.add('fixed');
        }else{
            header.classList.remove('fixed');
        }
    })
}

function crearGaleria(){
    const cantidadImagenes = 16;
    const galeria = document.querySelector('.galeria-imagenes');
    

    for(let i = 1; i <= cantidadImagenes; i++){
        const imagen = document.createElement('IMG');    
        imagen.src = `src/img/${i}.jpg`;
        imagen.alt = 'imagen galeria';

        //Event handler para mostrar imagen grande
        imagen.onclick = function(){
            mostrarImagen(i);
        }

        galeria.appendChild(imagen);
    }
}

function mostrarImagen(i){
    const imagen = document.createElement('IMG');    
    imagen.src = `src/img/${i}.jpg`;
    imagen.alt = 'imagen galeria';

    //Generar la imagen grande
    const modal = document.createElement('DIV');
    modal.classList.add('modal');
    modal.onclick = cerrarModal;

    //Generar boton cerrar imagen
    const btnCerrar = document.createElement('BUTTON');
    btnCerrar.textContent = 'X';
    btnCerrar.classList.add('btn-cerrar');
    btnCerrar.onclick = cerrarModal;

    //agregando imagen al modal
    modal.appendChild(imagen);
    modal.appendChild(btnCerrar);

    //Agregar al html
    const body = document.querySelector('body');
    body.classList.add('overflow-hidden');
    body.appendChild(modal);
}

function cerrarModal(){
    const modal = document.querySelector('.modal');
    modal.classList.add('fade-out');

    setTimeout(() => {
        modal?.remove();    
        const body = document.querySelector('body');
        body.classList.remove('overflow-hidden');
    }, 500);

    
}
    
function scrollNav(){

    const navLinks = document.querySelectorAll('.navegacion-principal a');

    navLinks.forEach( link => {
        link.addEventListener('click', function(e){
            e.preventDefault();
            const seccionScroll = e.target.attributes.href.value;
            const seccion = document.querySelector(seccionScroll);
            
            seccion.scrollIntoView({behavior: 'smooth'});
        })
    })

}