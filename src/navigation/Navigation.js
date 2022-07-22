import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Icon from 'react-native-vector-icons/FontAwesome5'
import { Image } from 'react-native'

import FavoriteNavigation from './FavoriteNavigation'
import PokedexNavigation from './PokedexNavigation'
import AccountNavigation from './AccountNavigation'

const Tab = createBottomTabNavigator();

export default function Navigation() {
  return (
    <Tab.Navigator 
        screenOptions={{
            /*headerTitleAlign: 'center', */
            headerShown: false,   
        }}
    >
        <Tab.Screen 
            name='Favoritos' 
            component={ FavoriteNavigation } 
            options={{
                tabBarLabel: "Favoritos",
                tabBarIcon: ({ color, size }) => ( 
                    <Icon name='heart' color={color} size={size} /> 
                ),
            }}
        />
        <Tab.Screen 
            name='Pokedexx' 
            component={ PokedexNavigation } 
            options={{
                tabBarLabel: "",
                tabBarIcon: () => renderPokeball()
            }}
        />
        <Tab.Screen 
            name='Mi cuenta' 
            component={ AccountNavigation } 
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