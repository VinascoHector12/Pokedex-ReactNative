import { View, Text, Button } from 'react-native'
import { useState, useEffect } from 'react'
import { getPokemonsFavoriteApi } from '../api/favorite'

export default function Favorite() { 

  const checkFavorites = async () => {
    const response = await getPokemonsFavoriteApi();
      console.log(response);
  }

  return (
    <View>
      <Text>Favorite</Text>
      <Button title='Obtener favoritos' onPress={checkFavorites} />
    </View>
  )
}