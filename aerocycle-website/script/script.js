document.addEventListener('DOMContentLoaded', () => {
  const abrir = document.getElementById('abrirPlano');
  const cerrar = document.getElementById('cerrarPlano');
  const visor = document.getElementById('visorPDF');

  if (abrir && cerrar && visor) {
    abrir.addEventListener('click', () => {
      visor.classList.remove('oculto');
    });

    cerrar.addEventListener('click', () => {
      visor.classList.add('oculto');
    });
  } else {
    console.error("Elementos del visor no encontrados.");
  }
});
