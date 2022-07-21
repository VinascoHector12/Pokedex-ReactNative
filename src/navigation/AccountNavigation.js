import { createNativeStackNavigator } from '@react-navigation/native-stack'
import AccountScreen from '../screens/Account'

const Stack = createNativeStackNavigator();

export default function FavoriteNavigation() {
  return (
    <Stack.Navigator>
        <Stack.Screen 
            name='Account' 
            component={AccountScreen} 
            options={{ 
                headerTitleAlign: 'center',
                title: 'Mi cuenta'
            }}
        />
    </Stack.Navigator>
  );
}