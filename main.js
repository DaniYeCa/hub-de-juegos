import './style.css'

// constantes
import { Home } from './src/Components/Home/Home';
import { Footer } from './src/Components/Footer/Footer';


import { Game1 } from './src/Games/Game1/Game1';
import { Game2 } from './src/Games/Game2/Game2';
import { Game3 } from './src/Games/Game3/Game3';


import { linkpages } from './src/utils/linkpages';


document.querySelector('footer').innerHTML = Footer()
Home()


// ejecucion
linkpages();
linkpages();
linkpages();




