import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Icon from 'react-native-vector-icons/FontAwesome5'
import { Image } from 'react-native'

import FavoriteScreen from '../screens/Favorite'
import PokedexScreen from '../screens/Pokedex'
import AccountScreen from '../screens/Account'

const Tab = createBottomTabNavigator();

export default function Navigation() {
  return (
    <Tab.Navigator>
        <Tab.Screen 
            name='Favoritos' 
            component={ FavoriteScreen } 
            options={{
                tabBarLabel: "Favoritos",
                tabBarIcon: ({ color, size }) => ( 
                    <Icon name='heart' color={color} size={size} /> 
                ),
            }}
        />
        <Tab.Screen 
            name='Pokedex' 
            component={ PokedexScreen } 
            options={{
                tabBarLabel: "",
                tabBarIcon: () => renderPokeball()
            }}
        />
        <Tab.Screen 
            name='Mi cuenta' 
            component={ AccountScreen } 
            options={{
                tabBarLabel: "Mi cuenta",
                tabBarIcon: ({ color, size }) => ( 
                    <Icon name='user' color={color} size={size} /> 
                )
            }}
        />
    </Tab.Navigator>
  );
}

function renderPokeball(){
    return(
        <Image 
            source={require('../assets/pokeball.png')}
            style={{ width: 75, height: 75, top: -15 }}
        />
    );
}

/*
Bottom Tab Navigator: 'tabBarOptions' is deprecated. Migrate the options to 'screenOptions' instead.

Place the following in 'screenOptions' in your code to keep current behavior:

{
  "tabBarShowLabel": false,
  "tabBarStyle": [
    {
      "display": "flex"
    },
    null
  ]
}
*/