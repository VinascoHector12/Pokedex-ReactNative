import { View, Text, StyleSheet, Button } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

export default function NoLogged() {

    const navigation = useNavigation(); //Para navegar de una screen a otra

    return (
        <View style={styles.content}>            
            <Text style={styles.text}>Para ver los pokemons favoritos debes iniciar sesión.</Text>
            <View style={styles.buttonContainer}>
                <Button title='Ir al LogIn' onPress={() => navigation.navigate('Account')}/>
            </View>            
        </View>
    )
}

const styles = StyleSheet.create({
    content: {
        marginVertical: 50,
        paddingHorizontal: 30
    },
    text: {
        textAlign: 'center',
        marginBottom: 10
    },
    buttonContainer: {
        marginTop: 20
    }
});