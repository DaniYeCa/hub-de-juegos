import './Trivial.css'

const Trivial = (request) => {
  let aciertos = 0;
  let fallos = 0;
  let preguntasResueltas = [];
  let preguntasPendientes = [];

  const contenedorJuego = document.createElement('div');
  contenedorJuego.className = 'contenedor-trivial';
  const main = document.querySelector("main");
  main.append(contenedorJuego);

  const iniciarTrivial = () => {
    mostrarBotonesTematicos();
  };

  const mostrarBotonesTematicos = () => {
    contenedorJuego.innerHTML = '';

    const botonContenedor = document.createElement('div');
    botonContenedor.className = 'iconos-contenedor';

    for (const item of request) {
      const botonTema = crearBotonTema(item);
      botonContenedor.appendChild(botonTema);
    }

    contenedorJuego.appendChild(botonContenedor);
  };

  const crearBotonTema = (item) => {
    const btTema = document.createElement('button');
    btTema.className = 'btn-tema';
    btTema.setAttribute('data-tema', item.tematica);
    const botonImagen = document.createElement('img');
    botonImagen.className = 'icono-imagen';
    botonImagen.src = item.imagen;
    btTema.append(botonImagen);
    contenedorJuego.appendChild(btTema);
    btTema.addEventListener('click', () => {
      mostrarPreguntas(item.preguntas);
    });

    return btTema;
  };

  const mostrarPreguntas = (preguntas) => {
    contenedorJuego.innerHTML = '';
    preguntasPendientes = [...preguntas];
    mostrarSiguientePregunta();
  };

  const mostrarSiguientePregunta = () => {
    if (preguntasPendientes.length > 0) {
      const pregunta = preguntasPendientes.shift();
      mostrarPregunta(pregunta);
    } else {
      mostrarResultados();
    }
  };

  const mostrarPregunta = (pregunta) => {
    const contenedorJuego = document.querySelector('.contenedor-trivial')
    contenedorJuego.innerHTML = '';
    const contenedorPreguntas = document.createElement('div');
    contenedorPreguntas.className = 'contenedor-preguntas';
    const question = document.createElement('h3');
    question.className = 'pregunta';
    question.textContent = pregunta.pregunta;
    contenedorPreguntas.appendChild(question);

    const contenedorRespuesta = document.createElement('div');
    contenedorRespuesta.className = 'contenedor-respuesta';

    pregunta.respuestas.forEach((respuesta) => {
      const botonRespuesta = document.createElement('button');
      botonRespuesta.className = 'boton-respuesta';
      botonRespuesta.textContent = respuesta.texto;
      botonRespuesta.addEventListener('click', () => {
        if (respuesta.correcta) {
          aciertos++;
        } else {
          fallos++;
        }
        mostrarSiguientePregunta();
      });
      contenedorRespuesta.appendChild(botonRespuesta);
    });
    contenedorJuego.appendChild(contenedorPreguntas);
    contenedorJuego.appendChild(contenedorRespuesta);
  };

  const mostrarResultados = () => {
    contenedorJuego.innerHTML = '';
    const contenedorResultado = document.createElement('div');
    contenedorResultado.className = 'contenedor-resultado';
    const elementosAcertados = document.createElement('p');
    elementosAcertados.textContent = `Aciertos: ${aciertos}`;
    const elementosFallados = document.createElement('p');
    elementosFallados.textContent = `Fallos: ${fallos}`;
    contenedorResultado.appendChild(elementosAcertados);
    contenedorResultado.appendChild(elementosFallados);
    contenedorJuego.appendChild(contenedorResultado);
  };

  iniciarTrivial();
};

export default Trivial;
