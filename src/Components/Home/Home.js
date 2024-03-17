import './Home.css';



export const Home = () => {
  const Home = document.querySelector('main')
  Home.innerHTML = `  
<div class="home">
<div class="hero">
<h1>Game Hub</h1>
</div>
<div class="Games">
<a href="#Game1" class="anchor"><img src="public/assets/game.png" alt="Game1"></img></a>
<a href="#Game2"><img src="public/assets/game.png" alt="Game2" ></img></a>
<a href="#Game3"><img src="public/assets/game.png" alt="Game3""></img></a>
</div>
</div>
`;
};







