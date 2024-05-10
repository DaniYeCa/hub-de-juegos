export const request = [
  {
    tematica: 'Cultura General',
    imagen: './assets/cultura.png',
    preguntas: [
      {
        pregunta: "¿Qué metal es el principal componente del acero inoxidable?",
        respuestas: [
          { texto: "Hierro", correcta: true },
          { texto: "Níquel", correcta: false },
          { texto: "acero", correcta: false },
          { texto: "Zinc", correcta: false }
        ]
      },
      {
        pregunta: "¿Cuál es la capital de Francia?",
        respuestas: [
          { texto: "París", correcta: true },
          { texto: "tous", correcta: false },
          { texto: "Lyon", correcta: false },
          { texto: "Bordeaux", correcta: false }
        ]
      },
      {
        pregunta: "¿Quién fue el primer presidente de los Estados Unidos?",
        respuestas: [
          { texto: "George Washington", correcta: true },
          { texto: "Francisco Franco", correcta: false },
          { texto: "Adolf Hitler", correcta: false },
          { texto: "Juan Pablo II", correcta: false }
        ],
      },
      {
        pregunta: "¿En qué año se produjo la revolución rusa?",
        respuestas: [
          { texto: "1905", correcta: true },
          { texto: "1848", correcta: false },
          { texto: "1776", correcta: false },
          { texto: "1917", correcta: false }
        ]
      },
      {
        pregunta: "¿Cómo se llama al proceso por el que un objeto pasa a ser invisible en una imagen?",
        respuestas: [
          { texto: "Transparencia", correcta: true },
          { texto: "Reflexión", correcta: false },
          { texto: "Escarcha", correcta: false },
          { texto: "Escalera", correcta: false }
        ]
      },
      {
        pregunta: "¿Qué animal vive en el fondo del mar?",
        respuestas: [
          { texto: "Pez linterna", correcta: true },
          { texto: "Delfín", correcta: false },
          { texto: "Ballena", correcta: false },
          { texto: "Bob Esponja", correcta: false }
        ]
      },
      {
        pregunta: "¿Cuál es el color del sol?",
        respuestas: [
          { texto: "Amarillo", correcta: false },
          { texto: "Naranja", correcta: false },
          { texto: "Blanco", correcta: true },
          { texto: "Azul", correcta: false }
        ]
      },
      {
        pregunta: "¿Cuántas celdas tiene un tablero de ajedrez?",
        respuestas: [
          { texto: "32", correcta: true },
          { texto: "16", correcta: false },
          { texto: "8", correcta: false },
          { texto: "48", correcta: false }
        ]
      },
      {
        pregunta: "¿En que año se produjo el atentado de las torres gemelas?",
        respuestas: [
          { texto: "2001", correcta: true },
          { texto: "2005", correcta: false },
          { texto: "2011", correcta: false },
          { texto: "1993", correcta: false }
        ],
      },
    ],
  },
  {
    tematica: 'Pokemon',
    imagen: './assets/char-pikachu.png',
    preguntas: [
      {
        pregunta: "¿Qué Pokémon es de tipo fuego?:",
        respuestas: [
          { texto: "Charizard", correcta: true },
          { texto: "Squirtle", correcta: false },
          { texto: "Blastoise", correcta: false },
          { texto: "Venusaur", correcta: false }
        ]
      },
      {
        pregunta: "¿Quién es el primer Pokémon en ser elegido por los jugadores para formar una equipo?",
        respuestas: [
          { texto: "chicorita", correcta: true },
          { texto: "Jolteon", correcta: false },
          { texto: "Zapdos", correcta: false },
          { texto: "Gengar", correcta: false }
        ]
      },
      {
        pregunta: "¿Cuál es el nombre del Pokémon que es parecido a una king cobra?",
        respuestas: [
          { texto: "Arbok", correcta: true },
          { texto: "Venomoth", correcta: false },
          { texto: "Dewgong", correcta: false },
          { texto: "Flareon", correcta: false }
        ]
      },
      {
        pregunta: "¿Qué Pokémon es conocido por ser la evolución final de Charmander?",
        respuestas: [
          { texto: "Charmander", correcta: false },
          { texto: "Charmeleon", correcta: false },
          { texto: "Charizard", correcta: true },
          { texto: "Chikorita", correcta: false }
        ]
      },
      {
        pregunta: "¿Cuál es el tipo primario del Pokémon Pikachu?",
        respuestas: [
          { texto: "Fuego", correcta: false },
          { texto: "Agua", correcta: false },
          { texto: "Eléctrico", correcta: true },
          { texto: "Planta", correcta: false }
        ]
      },
      {
        pregunta: "¿Cuál es el Pokémon inicial de tipo Agua en la región de Kanto?",
        respuestas: [
          { texto: "Squirtle", correcta: true },
          { texto: "Bulbasaur", correcta: false },
          { texto: "Charmander", correcta: false },
          { texto: "Pikachu", correcta: false }
        ]
      },
      {
        pregunta: "¿Cuál es el nombre del Pokémon legendario que tiene poderes relacionados con el hielo?",
        respuestas: [
          { texto: "Zapdos", correcta: false },
          { texto: "Articuno", correcta: true },
          { texto: "Moltres", correcta: false },
          { texto: "Mewtwo", correcta: false }
        ]
      },
      {
        pregunta: "¿Cuál es el nombre del Pokémon que tiene una forma similar a la de un dragón y es de tipo volador?",
        respuestas: [
          { texto: "Rayquaza", correcta: true },
          { texto: "Gyarados", correcta: false },
          { texto: "Dragonite", correcta: false },
          { texto: "Aerodactyl", correcta: false }
        ]
      },
      {
        pregunta: "¿Qué Pokémon es conocido por su capacidad para teletransportarse?",
        respuestas: [
          { texto: "Alakazam", correcta: false },
          { texto: "Kadabra", correcta: false },
          { texto: "Abra", correcta: true },
          { texto: "Mewtwo", correcta: false }
        ]
      },
      {
        pregunta: "¿Cuál es el Pokémon que evoluciona de Eevee al ser expuesto a una piedra lunar?",
        respuestas: [
          { texto: "Vaporeon", correcta: false },
          { texto: "Jolteon", correcta: false },
          { texto: "Espeon", correcta: false },
          { texto: "Umbreon", correcta: true }
        ]
      }
    ],
  },
]

export default request;