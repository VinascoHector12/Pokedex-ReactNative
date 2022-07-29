import { ScrollView } from 'react-native'
import { useState, useEffect } from 'react'
import { getPokemonDetailsApi } from '../api/pokemon'
import Header from '../components/pokemon/Header'
import Type from '../components/pokemon/Type'
import Stats from '../components/pokemon/Stats'
import Icon from 'react-native-vector-icons/FontAwesome5'

export default function Pokemon(props) {

  const { navigation, route: { params } } = props;
  const [pokemon, setPokemon] = useState(null);
  //console.log(params.id);

  useEffect(()=>{
    navigation.setOptions({
      headerRight: () => (
        <Icon 
          name='heart' 
          color='#fff' 
          size={20} 
          style={{ marginRight: 15}} 
          onPress={() => console.log('Marcar como favorito')}
        />
      ),
      headerLeft: () => (
        <Icon 
          name='arrow-left' 
          color='#fff' 
          size={20} 
          style={{ marginRight: 15}} 
          onPress={navigation.goBack}
        />
      ),
    });
  }, [navigation, params]); //Cambia cada vez que cambie la navegacion o los parametros

  useEffect(()=>{
    (async ()=>{
      try {
        const response = await getPokemonDetailsApi(params.id);
        setPokemon(response); //Se actualiza el estado del pokemon con toda la informacion obtenida
      } catch (error) {
        navigation.goBack(); //Va un paso atras
      }
    })();
  }, [params]); //Cada vez que params sea modificado se dispara el Effect

  if(!pokemon) return null;

  return (
    <ScrollView>
      <Header 
        name={pokemon.name} 
        order={pokemon.order} 
        image={pokemon.sprites.other['official-artwork'].front_default}
        type={pokemon.types[0].type.name}
      />
      <Type types={pokemon.types}/>
      <Stats stats={pokemon.stats}/>
    </ScrollView>
  )
}