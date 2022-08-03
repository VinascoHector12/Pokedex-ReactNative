import AsyncStorage from '@react-native-async-storage/async-storage'
import { FAVORITE_STORAGE } from '../utils/constants'

//Obtener objetos a favoritos
export async function getPokemonsFavoriteApi(){
    try {
        const response = await AsyncStorage.getItem(FAVORITE_STORAGE);
        return JSON.parse(response || '[]'); //Si la respuesta es null retorna un array vacio
    } catch (error) {
        throw error;
    }
}

//Añadir objetos a favoritos
export async function addPokemonFavoriteApi(id){
    try {
        const favorites = await getPokemonsFavoriteApi();
        favorites.push(id);
        await AsyncStorage.setItem(FAVORITE_STORAGE, JSON.stringify(favorites));
    } catch (error) {
        throw error;
    }
}

//Validar si el id del pokemon ya se encuentra almacenado
export async function isPokemonFavoriteApi(id){
    try {
        const response = await getPokemonsFavoriteApi();
        return response.includes(id);
    } catch (error) {
        throw error;
    }
}

export async function removePokemonFavoriteApi(id){
    try {
        const favorites = await getPokemonsFavoriteApi();
        const newFavorites = favorites.filter( fav => fav != id ); //Crea un array donde no se repitan los elementos
        await AsyncStorage.setItem(FAVORITE_STORAGE, JSON.stringify(newFavorites));
    } catch (error) {
        throw error;
    }
}
