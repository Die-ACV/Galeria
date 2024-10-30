import cerrarGaleria from "./cerrarGaleria";
import slideClick from "./slideClick";
import { cargarAnteriorSiguiente} from './cargarImagen';

const galeria = document.getElementById('galeria');
galeria.addEventListener('click', (e) => {
    const boton = e.target.closest('button');

    // cerrar galeria
    if (boton?.dataset?.accion === 'cerrar-galeria') {
        console.log('Cerrar galeria');
        cerrarGaleria();
    }

    // carousel slide click
    if (e.target.dataset.id) {
        slideClick(e);
    }

    // siguiente imagen
    if (boton?.dataset?.accion === 'siguiente-imagen') {
        cargarAnteriorSiguiente('siguiente');
    }

    // anterior imagen
    if (boton?.dataset?.accion === 'anterior-imagen') {
        cargarAnteriorSiguiente('anterior');
    }
});