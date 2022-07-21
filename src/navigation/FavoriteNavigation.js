import { createNativeStackNavigator } from '@react-navigation/native-stack'
import FavoriteScreen from '../screens/Favorite'

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
    </Stack.Navigator>
  );
}