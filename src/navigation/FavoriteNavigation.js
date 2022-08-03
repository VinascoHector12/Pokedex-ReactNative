import { createNativeStackNavigator } from '@react-navigation/native-stack'
import FavoriteScreen from '../screens/Favorite'
import PokemonScreen from '../screens/Pokemon'

const Stack = createNativeStackNavigator();

export default function FavoriteNavigation() {
  return (
    <Stack.Navigator>
        <Stack.Screen 
            name='Favorite' 
            component={FavoriteScreen} 
            options={{ 
                headerTitleAlign: 'center',
                title: 'Favoritos'
            }}
        />
        <Stack.Screen 
            name='Pokemon' 
            component={PokemonScreen} 
            options={{ 
                headerTitleAlign: 'center',
                title: '',
                headerTransparent: true
            }}
        />
    </Stack.Navigator>
  );
}