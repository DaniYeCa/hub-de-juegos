import './Home.css';



export const Home = () => {
  const Home = document.querySelector('main')
  Home.innerHTML = `  
<div class="home">
  <div class="Games">
    <a href="#" id="ElAhorcado"><img src="public/assets/el-ahorcado.png" alt="Game1"></img></a>
    <a href="#" id="Trivial"><img src="public/assets/trivial.png" alt="Game2" ></img></a>
    <a href="#" id="TresEnRaya"><img src="public/assets/tres-en-raya.png" alt="Game3""></img></a>
  </div>
</div>
`;

};