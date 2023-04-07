const pokemon_container = document.getElementById('pokemon_container');
const pokemons_number = 151;

const fetchPokemons = async () => {
  for (let i = 1; i <= pokemons_number; i++) {
    await getPokemon(i);
  }
}

const getPokemon = async id => {
	const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
	const res = await fetch(url);
	const pokemon = await res.json();
	createPokemonCard(pokemon);
}

fetchPokemons(); //this called when js is running



// setting the size = placeholder length for the search box
var input = document.querySelectorAll('input');
for(i=0; i<input.length; i++){
    input[i].setAttribute('size',input[i].getAttribute('placeholder').length);
}

    function search_pokemon() { 
    let input = document.getElementById('searchbar').value 
    input=input.toLowerCase(); 
    let x = document.getElementsByClassName('card'); 
      
    for (i = 0; i < x.length; i++) {  
        if (!x[i].innerHTML.toLowerCase().includes(input)) { 
            x[i].style.display="none"; 
        } 
        else { 
            x[i].style.display="show-items";                  
        } 
    } 
} 

function createPokemonCard(pokemon) {
	const pokemon_Element = document.createElement('div');
	pokemon_Element.classList.add('pokemon');
  const pokemon_types = pokemon.types[0].type.name; 


  //Captialize the fisrt letter to only be upper case
  const name = pokemon.name[0].toUpperCase()+ pokemon.name.slice(1); 
  //const type = pokemon.types[0].toUpperCase()+ pokemon.types.slice(1); 

  //Included pad number with leading zeros: https://www.tutorialspoint.com/How-to-pad-a-number-with-leading-zeros-in-JavaScript
  const pokemonInnerHTML = `
  <div class="card">
  <div class="img-container">
      <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png"</img>
      </div
    <div class="information">
    <span class="number">#${pokemon.id.toString().padStart(3, '0')}</span>
    <h3 class="name">${name}</h3>
    <div class="type">Type: <span>${pokemon_types}</span></div>
    </div
  `;

  pokemon_Element.innerHTML = pokemonInnerHTML;
  
  pokemon_container.appendChild(pokemon_Element);
}

