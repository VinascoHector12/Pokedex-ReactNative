import { StyleSheet, View, Text } from 'react-native'
import getColorByPokemonType from '../../utils/getColorByPokemonType'

export default function Type(props) {

    const {types} = props;

    return (
        <View style={styles.content}>
            {types.map(function(item, index){
                return( 
                    <View style={{...styles.pill, backgroundColor: getColorByPokemonType(item.type.name)}} key={index}>
                        <Text style={styles.name}>{item.type.name}</Text>
                    </View>
                )
            })}
        </View>
    );
}

const styles = StyleSheet.create({
    content: {
        //paddingHorizontal: 20,
        marginTop: 30,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    pill: {
        paddingHorizontal: 30,
        paddingVertical: 5,
        borderRadius: 50,
        marginHorizontal: 10
    },
    name: {
        textTransform: 'capitalize'
    }
});