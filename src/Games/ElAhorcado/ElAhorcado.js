import './ElAhorcado.css';

const ElAhorcado = () => {
  const ARRAY_WORD = ['BAILAR', 'CANTAR', 'PINTAR', 'DIBUJAR', 'COMPONER', 'CIUDAD', 'LUZ', 'MAR', 'NUBES', 'VENTANA'];
  let letraElegida = '';
  let letrasIntentadas = [];
  let intentosRestantes = 6;
  let letrasAdivinadas = [];

  const randomWord = () => {
    const randomIndex = Math.floor(Math.random() * ARRAY_WORD.length);
    letraElegida = ARRAY_WORD[randomIndex];
    letrasAdivinadas = Array(letraElegida.length).fill('_');
  };
  const createWordDisplay = (parentElement) => {
    const wordDisplay = document.createElement('div');
    wordDisplay.id = 'pantalla-ahorcado';
    parentElement.appendChild(wordDisplay);
    return wordDisplay;
  };
  const displayLetrasAdivinadas = (parentElement) => {
    const instentosIzquierda = document.createElement('div');
    instentosIzquierda.id = 'letras-izquierda';
    instentosIzquierda.textContent = `Quedan: ${intentosRestantes} intentos`;
    parentElement.appendChild(instentosIzquierda);
    return instentosIzquierda
  };

  const createInput = (parentElement) => {
    const inputLetra = document.createElement('input');
    inputLetra.type = 'text';
    inputLetra.id = 'letra-input';
    inputLetra.maxLength = '1';
    parentElement.appendChild(inputLetra);
    return inputLetra;
  }

  const createAdivinarBoton = (parentElement) => {
    const adivinarBoton = document.createElement('button');
    adivinarBoton.textContent = 'Adivinar Letra';
    adivinarBoton.id = 'adivinar-boton';
    parentElement.appendChild(adivinarBoton);
    return adivinarBoton;
  }

  const createResetBoton = (parentElement) => {
    const botonReset = document.createElement('button');
    botonReset.textContent = 'Reiniciar';
    botonReset.id = 'reset-juego';
    parentElement.appendChild(botonReset);
    return botonReset;
  };

  const crearPantallaLetrasUsadas = (parentElement) => {
    const pantallaLetrasUsadas = document.createElement('div');
    pantallaLetrasUsadas.id = 'letras-usadas';
    parentElement.appendChild(pantallaLetrasUsadas);
    return pantallaLetrasUsadas;
  }

  const eventoInput = (inputLetra, adivinarBoton) => {
    adivinarBoton.addEventListener("click", () => {
      const letra = inputLetra.value.trim().toUpperCase();
      solucionar(letra)
    });

    inputLetra.addEventListener('keypress', (event) => {
      if (event.key === 'Enter') {
        const letra = inputLetra.value.trim().toUpperCase();
        solucionar(letra);
      }
    });
  };


  const reiciniarJuego = () => {
    letrasIntentadas = [];
    intentosRestantes = 6;
    randomWord();
    enseñarPalabrasAdivinadas(letrasAdivinadas);
    actualizarPantalla();
    actualizarPantallaLetrasUsadas();
    document.getElementById('letra-input').disable = false;
    document.getElementById('adivinar-boton').disable = false;
  };

  const solucionar = (letra) => {
    if (intentosRestantes > 0) {
      if (letra.length === 1 && letra.match(/[A-Z]/)) {
        letraAdivinada(letra);
        document.getElementById('letra-input').value = '';
      }
    }
  };

  const letraAdivinada = (letra) => {
    const LetraEncontrada = letraElegida.includes(letra);

    if (!letrasIntentadas.includes(letra)) {
      letrasIntentadas.push(letra);
      if (!LetraEncontrada) {
        intentosRestantes--;
      } else {
        for (let i = 0; i < letraElegida.length; i++) {
          if (letraElegida[i] === letra) {
            letrasAdivinadas[i] = letra;
          }
        }
      }
      actualizarPantalla();
      actualizarPantallaLetrasUsadas();
      enseñarPalabrasAdivinadas(letrasAdivinadas);

      if (checkWin()) {
        gameWon();
      } else if (intentosRestantes === 0) {
        gameLost()
      }
    }
  };

  const actualizarPantalla = () => {
    const instentosIzquierda = document.querySelector('#letras-izquierda');
    instentosIzquierda.textContent = `Quedan ${intentosRestantes} intentos`;
    const gameOver = intentosRestantes === 0;
    document.getElementById('letra-input').disable = gameOver;
    document.getElementById('adivinar-boton').disable = gameOver;
  };

  const actualizarPantallaLetrasUsadas = () => {
    const PantallaLetrasUsadas = document.querySelector('#letras-usadas');
    PantallaLetrasUsadas.textContent = `letras usadas: ${letrasIntentadas.join(', ')}`;
  }

  const enseñarPalabrasAdivinadas = (letrasAdivinadas) => {
    const pantallaPalabra = document.getElementById('pantalla-ahorcado');
    pantallaPalabra.innerHTML = letrasAdivinadas.join(' ');
  };

  const checkWin = () => {
    return !letrasAdivinadas.includes('_');
  };

  const gameWon = () => {
    abilitarInputYBoton();
  }
  const gameLost = () => {
    abilitarInputYBoton();
  }

  const abilitarInputYBoton = () => {
    document.getElementById('letra-input').disable = true;
    document.getElementById('adivinar-boton').disable = true;
  }

  randomWord();

  const app = document.querySelector('main');
  const ahoracadoGameContainer = document.createElement('div');
  ahoracadoGameContainer.classList.add('ahorcado-container');
  app.appendChild(ahoracadoGameContainer);
  const pantallaPalabra = createWordDisplay(ahoracadoGameContainer);
  const instentosIzquierda = displayLetrasAdivinadas(ahoracadoGameContainer);
  const PantallaLetrasUsadas = crearPantallaLetrasUsadas(ahoracadoGameContainer);
  const inputLetra = createInput(ahoracadoGameContainer);
  const botonIntentos = createAdivinarBoton(ahoracadoGameContainer);
  const resetButton = createResetBoton(ahoracadoGameContainer);

  resetButton.addEventListener('click', reiciniarJuego);
  eventoInput(inputLetra, botonIntentos);

  enseñarPalabrasAdivinadas(letrasAdivinadas);
  actualizarPantalla();

  return { letraAdivinada }

};

export default ElAhorcado;