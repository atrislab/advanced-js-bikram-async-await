//DESARROLLA AQUI TUS SOLUCIONES
/*
https://pokeapi.co/
Ejercicio 1.- Declara una función getRandomPokemon que retorne un pokemon aleatorio.
*/

/*
async function getRandomPokemon() {
  let response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=1118");
  let data = await response.json();

  let randomIndex = Math.floor(Math.random() * data.results.length);
  let randomPokemonUrl = data.results[randomIndex].url;

  let pokemonResponse = await fetch(randomPokemonUrl);
  let pokemonData = await pokemonResponse.json();

  return pokemonData;
}

*/

/*
Ejercicio 2.- Declara una funcion getImageAndName 
que retorne el nombre y la URL de la imagen de un pokemon => (return {img, name})
*/

/*
//decaramos la función asíncrona
async function getImageAndName() {
  //utiliza fetch para obtener los datos del pokemon
  const response = await fetch(
    //`https://pokeapi.co/api/v2/pokemon/${pokemonName}`//la dire genérica sería esta
    "https://pokeapi.co/api/v2/pokemon/pikachu"//para validar con un pokemon concreto
  );
  //utiliza await para esperar a que se resuelva la promesa (obtener los datos)
  const data = await response.json();
  //extraemos la URL de la imagen y la guardamos en la variable img
  const img = data.sprites.front_default;
  //extraemos el nombre y lo guardamos en name
  const name = data.name;
  //devolvemos los datos extraidos como objeto
  return {img, name };
}

getImageAndName();
*/

/*
3.- Declara una funcion llamada printImageAndName 
que retorne el string necesario para pintar 
la imagen y el nombre del pokemon en el DOM 
de la siguiente forma:

<section>
    <img src="url de imagen" alt="nombre del pokemon">
    <h1>Nombre del pokemon</h1>
</section>
*/
/*
async function printImageAndName() {
  //const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
  const response = await fetch("https://pokeapi.co/api/v2/pokemon/pikachu");
  const data = await response.json();
  const img = data.sprites.front_default;
  const name = data.name;
  const main = document.createElement('main');
  const section = document.createElement('section');
  const imgElement = document.createElement('img');
  imgElement.src = img;
  imgElement.alt = name;
  const h1Element = document.createElement('h1');
  h1Element.textContent = name;
  section.appendChild(imgElement);
  section.appendChild(h1Element);
  main.appendChild(section);
  document.body.appendChild(main);
  //hay que depurar un poco, que se crean dos mains
  
  
  return section.outerHTML;
}

printImageAndName();
*/

/*4
usando la API https://dog.ceo/dog-api/
usando async/await:

Declara una función llamada getRandomDogImage() 
que retorne la url de la imagen de un perro aleatorio
*/
/*
async function getRandomDogImage() {
  const response = await fetch("https://dog.ceo/api/breeds/image/random");
  const data = await response.json();
  const img = data.message;
  
  return img;
}

getRandomDogImage();
*/

/*5
usando la API https://pokeapi.co/
usando async/await:

Declara una función getRandomPokemonImage() 
que retorne la url de la imagen de un pokemon aleatorio.
*/
/*
async function getRandomPokemonImage() {
  const id = Math.floor(Math.random() * 898) + 1;
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
  const data = await response.json();
  const img = data.sprites.front_default;
  
  return img;
}

getRandomPokemonImage();

*/

/*
Ejercicio 6.- 
Declara una función printPugVsPikachu 
que pinte la batalla entre "Pug" y "Pikachu" (no se testea)
Usé charmander porque el otro pokemon no lo encontraba
*/

/*

async function printCharmanderVsPikachu() {
  const charmanderResponse = await fetch("https://pokeapi.co/api/v2/pokemon/charmander");
  const charmanderData = await charmanderResponse.json();
  const charmanderImg = charmanderData.sprites.front_default;
  
  const pikachuResponse = await fetch("https://pokeapi.co/api/v2/pokemon/pikachu");
  const pikachuData = await pikachuResponse.json();
  const pikachuImg = pikachuData.sprites.front_default;
  
  console.log(`Charmander vs Pikachu`);
  console.log(`---------------`);
  console.log(`|             |`);
  console.log(`| Charmander  |`);
  console.log(`|             |`);
  console.log(`| ${charmanderImg}   |`);
  console.log(`|             |`);
  console.log(`---------------`);
  console.log(`|             |`);
  console.log(`|   Pikachu   |`);
  console.log(`|             |`);
  console.log(`|   ${pikachuImg}   |`);
  console.log(`|             |`);
  console.log(`---------------`);
}

printCharmanderVsPikachu();

*/

/*7
Usando la api de Rick and Morty
https://rickandmortyapi.com/ 
y sólo async/await:

Declara una función getRandomCharacter 
que retorne un personaje aleatorio.
*/
/*
async function getRandomCharacter() {
  const response = await fetch('https://rickandmortyapi.com/api/character');
  const data = await response.json();

  const randomIndex = Math.floor(Math.random() * data.results.length);
  return data.results[randomIndex];
}

getRandomCharacter()

*/

/*
Ejercicio 8.- 
Declara una función getRandomCharacterInfo () 
que retorne de un personaje:
 su imagen, 
 nombre, 
 episodios en los que aparece 
 el nombre del primer episodio en el que aparece + fecha de estreno, 
 tendrás que hacer otro fetch para llegar a los ultimos datos. 
 Formato de retorno => (return {img, name, episodes, firstEpisode, dateEpisode})
*/

/*
async function getRandomCharacterInfo() {
  const randomId = Math.floor(Math.random() * 671) + 1;
  const response = await fetch(`https://rickandmortyapi.com/api/character/${randomId}`);
  const character = await response.json();
  const episodeResponse = await fetch(character.episode[0]);
  const episode = await episodeResponse.json();
  return {
    img: character.image,
    name: character.name,
    episodes: character.episode.length,
    firstEpisode: episode.name,
    dateEpisode: episode.air_date
  };
}

getRandomCharacterInfo()
//const randomCharacterInfo = await getRandomCharacterInfo();
//console.log(randomCharacterInfo);

*/
/*
async function getAnnieCharacterInfo() {
  const response = await fetch('https://rickandmortyapi.com/api/character/17');
  const character = await response.json();
  const episodeResponse = await fetch(character.episode[0]);
  const episode = await episodeResponse.json();
  return {
    img: character.image,
    name: character.name,
    episodes: character.episode.length,
    firstEpisode: episode.name,
    dateEpisode: episode.air_date
  };
}

const annieCharacterInfo = await getAnnieCharacterInfo();
console.log(annieCharacterInfo);

*/
/*
async function getRandomCharacter() {
  const response = await fetch('https://rickandmortyapi.com/api/character');
  const data = await response.json();

  const randomIndex = Math.floor(Math.random() * data.results.length);
  return data.results[randomIndex];
}

async function getRandomCharacterInfo() {
  const character = await getRandomCharacter();
  const response = await fetch(character.episode[0]);
  const episode = await response.json();
  return {
    img: character.image,
    name: character.name,
    episodes: character.episode.length,
    firstEpisode: episode.name + ' (' + episode.air_date + ')'
  };
}

getRandomCharacterInfo()
*/

async function getRandomCharacterInfo() {
  const response = await fetch('https://rickandmortyapi.com/api/character/');
  const characters = await response.json();
  const randomCharacter = characters.results[Math.floor(Math.random() * characters.results.length)];
  const episodeResponse = await fetch(randomCharacter.episode[0]);
  const episode = await episodeResponse.json();
  return {
    img: randomCharacter.image,
    name: randomCharacter.name,
    episodes: randomCharacter.episode.length,
    firstEpisode: episode.name,
    dateEpisode: episode.air_date
  };
}

console.log(getRandomCharacterInfo())

/*9
Pintar en el DOM el ejercicio 8
*/

///*

async function getRandomCharacterInfo() {
  const response = await fetch('https://rickandmortyapi.com/api/character/');
  const characters = await response.json();
  const randomCharacter = characters.results[Math.floor(Math.random() * characters.results.length)];
  const episodeResponse = await fetch(randomCharacter.episode[0]);
  const episode = await episodeResponse.json();
  return {
    img: randomCharacter.image,
    name: randomCharacter.name,
    episodes: randomCharacter.episode.length,
    firstEpisode: episode.name,
    dateEpisode: episode.air_date
  };
}

async function displayRandomCharacterInfo() {
  const characterInfo = await getRandomCharacterInfo();
  const article = document.createElement('article');
  article.innerHTML = `
    <img src="${characterInfo.img}" alt="${characterInfo.name}">
    <h2>${characterInfo.name}</h2>
    <p>Número de episodios en los que aparece: ${characterInfo.episodes}</p>
    <p>Nombre del primer episodio en el que aparece: ${characterInfo.firstEpisode}</p>
    <p>Fecha de estreno del primer episodio en el que aparece: ${characterInfo.dateEpisode}</p>
  `;
  document.body.appendChild(article);
}

displayRandomCharacterInfo();

//*/
