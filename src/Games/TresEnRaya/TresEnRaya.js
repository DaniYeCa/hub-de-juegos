import './TresEnRaya.css';

const TresEnRaya = () => {
  const jugadores = ['X', 'O'];
  const arrayTablero = [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
  ];

  let jugadorActual = '';
  let pcPlayer = '';
  const combinacionesGanadoras = [
    ['00', '01', '02'],
    ['10', '11', '12'],
    ['20', '21', '22'],

    ['00', '10', '20'],
    ['01', '11', '21'],
    ['02', '12', '22'],

    ['00', '11', '22'],
    ['02', '11', '20']
  ];

  let gameOver = false;
  let victoriasJugador = 0;
  let victoriasPc = 0;

  const bloquearTablero = () => {
    const casillas = document.querySelectorAll('.celda');
    casillas.forEach((casilla) => {
      casilla.removeEventListener('click', cajaCliqueada);
      casilla.style.pointerEvents = 'none';
    });
  };

  const clickeadoJugador = (e) => {
    if (jugadorActual || gameOver) {
      return;
    }
    const jugadorElegido = e.target;
    const jugada = jugadorElegido.innerText;
    if (jugada !== 'X' && jugada !== 'O') {
      return;
    }
    const players = document.querySelectorAll('.jugador');
    players.forEach((player) => {
      player.classList.remove('focus');
    });
    jugadorElegido.classList.add('focus');
    jugadorActual = jugada;
  };

  const obtenerCajasVacias = () => {
    return document.querySelectorAll('.celda:not(.clicked)');
  };

  const aCuadros = () => {
    const cajasVacias = obtenerCajasVacias();
    if (cajasVacias.length === 0) {
      const mensaje = document.createElement('h3');
      mensaje.innerText = '¡EMPATE!';
      mensaje.className = 'resultado';
      const botonContenedor = document.querySelector('.boton-contenedor');
      botonContenedor.append(mensaje);
      gameOver = true;
      bloquearTablero();
      return true;
    }
    return false;
  };

  const movimientoPc = () => {
    if (gameOver) return;
    const cajasVacias = obtenerCajasVacias();
    if (cajasVacias.length === 0) return;
    const randomStart = Math.floor(Math.random() * cajasVacias.length);
    const boxRandom = cajasVacias[randomStart];
    const pc = document.createElement('span');
    pc.innerText = jugadorActual === 'X' ? 'O' : 'X';
    boxRandom.append(pc);
    boxRandom.classList.add('clicked');
    const fila = boxRandom.getAttribute('data-fila');
    const column = boxRandom.getAttribute('data-column');
    arrayTablero[fila][column] = jugadorActual === 'X' ? 'O' : 'X';
    if (checkGanador() || aCuadros() || checkPerdedor()) {
      gameOver = true;
      bloquearTablero();
      return;
    }
    aCuadros();
  };

  const checkGanador = () => {
    if (!jugadorActual) return false;
    for (const combinacion of combinacionesGanadoras) {
      const [box1, box2, box3] = combinacion;
      const elem1 = document.querySelector(`[data-fila="${box1.charAt(0)}"][data-column="${box1.charAt(1)}"]`);
      const elem2 = document.querySelector(`[data-fila="${box2.charAt(0)}"][data-column="${box2.charAt(1)}"]`);
      const elem3 = document.querySelector(`[data-fila="${box3.charAt(0)}"][data-column="${box3.charAt(1)}"]`);
      if (elem1.innerText === jugadorActual && elem2.innerText === jugadorActual && elem3.innerText === jugadorActual) {
        const mensajeGanador = document.createElement('h3');
        mensajeGanador.innerText = '¡Ganaste!';
        mensajeGanador.className = 'resultado';
        const botonContenedor = document.querySelector('.boton-contenedor');
        botonContenedor.append(mensajeGanador);
        gameOver = true;
        bloquearTablero();
        return true;
      }
    }
    return false;
  };

  const checkPerdedor = () => {
    if (!pcPlayer) return false;
    setTimeout(() => {
      for (const combinacion of combinacionesGanadoras) {
        const [box1, box2, box3] = combinacion;
        const elem1 = document.querySelector(`[data-fila="${box1.charAt(0)}"][data-column="${box1.charAt(1)}"]`);
        const elem2 = document.querySelector(`[data-fila="${box2.charAt(0)}"][data-column="${box2.charAt(1)}"]`);
        const elem3 = document.querySelector(`[data-fila="${box3.charAt(0)}"][data-column="${box3.charAt(1)}"]`);
        if (elem1.innerText === pcPlayer && elem2.innerText === pcPlayer && elem3.innerText === pcPlayer) {
          const mensajePerdedor = document.createElement('h3');
          mensajePerdedor.innerText = '¡Has Perdido!';
          mensajePerdedor.className = 'resultado';
          const botonContenedor = document.querySelector('.boton-contenedor');
          botonContenedor.append(mensajePerdedor);
          gameOver = true;
          bloquearTablero();
          return true;
        }
      }
      return false;
    }, 500);
  };

  const cajaCliqueada = (e) => {
    if (!jugadorActual || gameOver) return;
    const cliqueadaCaja = e.target;
    if (cliqueadaCaja.classList.contains('clicked')) {
      return;
    }
    const fila = cliqueadaCaja.getAttribute('data-fila');
    const column = cliqueadaCaja.getAttribute('data-column');
    if (arrayTablero[fila][column] !== '') {
      return
    }
    const movimientos = () => {
      const movimiento = document.createElement('span');
      movimiento.innerHTML = jugadorActual;
      cliqueadaCaja.appendChild(movimiento);
      cliqueadaCaja.classList.add('clicked');
      pcPlayer = jugadorActual === 'X' ? 'O' : 'X';
      setTimeout(() => {
        movimientoPc(pcPlayer);
      }, 500);
    };
    movimientos();
    checkGanador();
    aCuadros();
  };

  const pintarJuego = (array) => {
    const divContenedorJuego = document.createElement('div');
    divContenedorJuego.className = 'contenedor-juego';
    const tablero = document.createElement('div');
    tablero.className = 'tablero';
    const botonContenedor = document.createElement('div');
    botonContenedor.className = 'boton-contenedor';
    const resetButton = document.createElement('button');
    resetButton.className = 'reset';
    resetButton.innerText = 'Reiniciar Juego';
    resetButton.addEventListener('click', () => {
      const main = document.querySelector('main');
      main.innerHTML = '';
      TresEnRaya();
    });

    const divJugador = document.createElement('div');
    divJugador.className = 'div-jugador';
    botonContenedor.append(divJugador);
    jugadores.forEach((jugador) => {
      const buttonJugador = document.createElement('button');
      buttonJugador.className = 'jugador';
      buttonJugador.innerText = jugador;
      divJugador.append(buttonJugador);
      buttonJugador.addEventListener('click', clickeadoJugador);
    });
    botonContenedor.append(resetButton);
    divContenedorJuego.append(botonContenedor, tablero);
    const main = document.querySelector('main');
    main.append(divContenedorJuego);
    for (let i = 0; i < array.length; i++) {
      const fila = array[i];
      const filaTablero = document.createElement('div');
      filaTablero.className = 'fila';
      tablero.append(filaTablero);
      for (let j = 0; j < fila.length; j++) {
        const celda = fila[j];
        const cajaTablero = document.createElement('div');
        cajaTablero.className = 'celda';
        cajaTablero.setAttribute('data-fila', i);
        cajaTablero.setAttribute('data-column', j);
        filaTablero.append(cajaTablero);
        cajaTablero.addEventListener('click', cajaCliqueada);
      }
    }
  };
  pintarJuego(arrayTablero);
};

export default TresEnRaya;
