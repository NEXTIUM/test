const matrixContainer = document.getElementById('matrix-container');

// Función para generar caracteres aleatorios
function generateRandomCharacter() {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  return characters.charAt(Math.floor(Math.random() * characters.length));
}

// Función para crear y animar las letras cayendo
function createMatrix() {
  const columnCount = Math.floor(window.innerWidth / 20); // Ajustar según el tamaño de la pantalla
  const rowCount = Math.floor(window.innerHeight / 20); // Ajustar según el tamaño de la pantalla

  for (let i = 0; i < columnCount; i++) {
    const column = document.createElement('div');
    column.classList.add('column');

    for (let j = 0; j < rowCount; j++) {
      const char = document.createElement('span');
      char.textContent = generateRandomCharacter();
      char.style.animationDelay = `${Math.random() * 5}s`; // Retraso aleatorio para la animación
      column.appendChild(char);
    }

    matrixContainer.appendChild(column);
  }
}

createMatrix();
