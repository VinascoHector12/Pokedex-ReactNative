import { SafeAreaView, StyleSheet, StatusBar, Platform  } from 'react-native'
import { useState, useEffect } from 'react'
import { getPokemonsApi, getPokemonDetailsByUrlApi } from '../api/pokemon'
import PokemonList from '../components/PokemonList';

export default function Pokedex() {
  const [pokemons, setPokemons] = useState([]);
  //console.log('pokemons---->', pokemons)

  useEffect(() => {
    (async ()=>{//Funcion anonima autoejecutable
      await loadPokemons();
    })();
  }, []);

  const loadPokemons = async () => {
    try {
      const response = await getPokemonsApi();
      //console.log(response);

      const pokemonsArray = [];
      for await (const pokemon of response.results) {
        const pokemonDetails = await getPokemonDetailsByUrlApi(pokemon.url);
        pokemonsArray.push({
          id: pokemonDetails.id,
          name: pokemonDetails.name,
          type: pokemonDetails.types[0].type.name,
          order: pokemonDetails.order,
          imagen: pokemonDetails.sprites.other['official-artwork'].front_default
        });
      }
      setPokemons([...pokemons, ...pokemonsArray]);

    } catch (error) {
      console.error(error);
    }
  }

  return (
    <SafeAreaView >
      <PokemonList pokemons={pokemons}/>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  AndroidSafeArea: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});