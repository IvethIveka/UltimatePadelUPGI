document.getElementById('form-reserva').addEventListener('submit', function(e) {
  e.preventDefault();

  const sede = document.getElementById('sede').value;
  const cancha = document.getElementById('cancha').value;
  const fecha = document.getElementById('fecha').value;
  const hora = document.getElementById('hora').value;
  const jugadores = document.getElementById('jugadores').value;

  const resumen = `
    <li>Sede: ${sede || 'No seleccionada'}</li>
    <li>Cancha: ${cancha || 'No seleccionada'}</li>
    <li>Fecha: ${fecha || 'No definida'}</li>
    <li>Hora: ${hora || 'No definida'}</li>
    <li>Jugadores: ${jugadores || 'No definidos'}</li>
  `;

  document.getElementById('resumen-reserva').innerHTML = resumen;
});
