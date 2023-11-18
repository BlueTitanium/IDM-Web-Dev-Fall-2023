const customOptions = {
    cache: true,
    cacheImages: true 
    //to make sure the servers dont get requested too much and so i dont get banned
}
const P = new Pokedex.Pokedex(customOptions);

let PokemonImage = document.querySelector(".Image");
let PokemonTitle = document.querySelector(".PokemonName");
let PokemonDescription = document.querySelector(".Description");
let PokemonStats = document.querySelector(".Stats");

let PokemonButton = document.querySelector(".RandomizerButton");
PokemonButton.addEventListener("click", GetNewPokemon);
PokemonImage.addEventListener("click", SwitchVariant);
let isShiny = false;

let r;

GetNewPokemon();


function GetNewPokemon(){
    
    let id = Math.floor(getRandomInt(1,897));
    P.resource([
    "/api/v2/pokemon/"+id,
    
  ]).then( response => {
    r = response;
    console.log(r[0]);
    PokemonImage.src = (r[0].sprites.other['official-artwork'].front_default);
    PokemonTitle.innerHTML = capitalizeFirstLetter(r[0].species.name);
    let r2;
    P.resource([r[0].species.url,  
      ]).then( response2 => {
        r2 = response2;
        let desc = filteredFlavorText(r2[0]);
        PokemonDescription.innerHTML = desc;
    })
    let individualStats = PokemonStats.children;
    individualStats[0].innerHTML = "HP: " + r[0].stats[0].base_stat;
    individualStats[1].innerHTML = "ATK: " + r[0].stats[1].base_stat;
    individualStats[2].innerHTML = "DEF: " + r[0].stats[2].base_stat;
    individualStats[3].innerHTML = "SP. ATK: " + r[0].stats[3].base_stat;
    individualStats[4].innerHTML = "SP. DEF: " + r[0].stats[4].base_stat;
    individualStats[5].innerHTML = "SPD: " + r[0].stats[5].base_stat;
  })
}

function SwitchVariant(){
    if(!isShiny){
        PokemonImage.src = (r[0].sprites.other['official-artwork'].front_shiny);
        isShiny = true;
        PokemonTitle.innerHTML = capitalizeFirstLetter(r[0].species.name) + " - SHINY";
    } else {
        PokemonImage.src = (r[0].sprites.other['official-artwork'].front_default);
        PokemonTitle.innerHTML = capitalizeFirstLetter(r[0].species.name);
        isShiny = false;
    }
}

//https://stackoverflow.com/questions/1527803/generating-random-whole-numbers-in-javascript-in-a-specific-range
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
//https://stackoverflow.com/questions/1026069/how-do-i-make-the-first-letter-of-a-string-uppercase-in-javascript
function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

//https://gist.github.com/gcorreaq/593381b026aeb093dd3a866d15299875
function filteredFlavorText(data){
    const filteredFlavorTextEntries = data.flavor_text_entries.filter(
        (element) => element.language.name === "en"
      );
      // If there's any entries, let's get the first one
      const flavorTextEntry = filteredFlavorTextEntries.length > 0 ? filteredFlavorTextEntries[0] : {};
  
      // Or if we just want the flavor text itself
      const flavorText = flavorTextEntry.flavor_text.replace("\f"," ");
      return flavorText;
}