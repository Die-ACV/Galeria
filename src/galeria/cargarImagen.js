import data from "./../datos/fotos";

const galeria = document.getElementById("galeria");

const cargarImagen = (id, nombre, ruta, descripcion) => {
  galeria.querySelector(".galeria__imagen").src = ruta;
  galeria.querySelector(".galeria__imagen").dataset.idImagen = id;
  galeria.querySelector(".galeria__titulo").innerText = nombre;
  galeria.querySelector(".galeria__descripcion-imagen-activa").innerText =
    descripcion;

  const categoriaActual = galeria.dataset.categoria;
  const fotos = data.fotos[categoriaActual];

  const indexImagenActual = fotos.findIndex((foto) => foto.id === id);

  // Marcamos la imagen del carrusel activa
  if (galeria.querySelectorAll(".galeria__carousel-slide").length > 0) {
    galeria
      .querySelector(".galeria__carousel-slide--active")
      .classList.remove("galeria__carousel-slide--active");

    galeria
      .querySelectorAll(".galeria__carousel-slide")
      [indexImagenActual].classList.add("galeria__carousel-slide--active");
  }
};

const cargarAnteriorSiguiente = (direccion) => {
  const categoriaActual = galeria.dataset.categoria;
  const fotos = data.fotos[categoriaActual];
  const idImagenActual = parseInt(
    galeria.querySelector(".galeria__imagen").dataset.idImagen,
    10
  );

  const indexImagenActual = fotos.findIndex(
    (foto) => foto.id === idImagenActual
  );

  if (direccion === "siguiente") {
    if (fotos[indexImagenActual + 1]) {
      const { id, nombre, ruta, descripcion } = fotos[indexImagenActual + 1];
      cargarImagen(id, nombre, ruta, descripcion);
    }
  } else if (direccion === "anterior") {
    if (indexImagenActual > 0) {
      const { id, nombre, ruta, descripcion } = fotos[indexImagenActual - 1];
      cargarImagen(id, nombre, ruta, descripcion);
    }
  }
};

export { cargarImagen, cargarAnteriorSiguiente };
