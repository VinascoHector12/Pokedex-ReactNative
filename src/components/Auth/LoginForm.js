import { View, Text, StyleSheet, TextInput, Button, Keyboard } from 'react-native'
import { useState } from 'react'
import { useFormik } from 'formik' //Manejo de formularios
import * as Yup from 'yup' //Manejo de validaciones
import { user, userDetails } from '../../utils/userDB'
import useAuth from '../../hooks/useAuth'

export default function LoginForm() {

    const [error, setError] = useState('');
    const { logIn } = useAuth();

    //console.log(useAuth()); //Un hook no se puede utilizar dentro de otro hook

    const formik = useFormik({
        initialValues: initialValues(),
        validationSchema: Yup.object(validationSchema()),
        validateOnChange: false,
        onSubmit: (formValue) => {
            setError(''); //Se limpia el error
            const {username, password} = formValue;

            if(username !== user.username || password !== user.password) {
                setError('El usuario o la contraseña no son correctos');
            }else{
                logIn(userDetails);
                console.log('LogIn correcto');
                console.log(userDetails);
            }
        }
    });

    return (
        <View>
            <Text style={styles.title}>Iniciar Sesión</Text>
            <TextInput 
                placeholder='Nombre de usuario'
                style={styles.input}
                autoCapitalize='none'
                value = {formik.values.username}
                onChangeText={(text) => formik.setFieldValue('username', text)}
            />
            <TextInput 
                placeholder='Contraseña'
                style={styles.input}
                autoCapitalize='none'
                secureTextEntry={true}
                value = {formik.values.password}
                onChangeText={(text) => formik.setFieldValue('password', text)}
            />
            <View style={styles.buttonContainer}>
                <Button 
                    style={styles.button}
                    title='Entrar'
                    onPress={formik.handleSubmit}
                />
            </View>
            

            <Text style={styles.error}>{formik.errors.username}</Text>
            <Text style={styles.error}>{formik.errors.password}</Text>
            <Text style={styles.error}>{error}</Text>
        </View>
    )
}

function initialValues(){
    return{
        username: "",
        password: ""
    }
}

function validationSchema(){
    return{
        username: Yup.string().required('El usuario es obligatorio'),
        password: Yup.string().required('La contraseña es obligatoria')
    }
}

const styles = StyleSheet.create({
    title: {
        textAlign: 'center',
        fontSize: 28,
        fontWeight: 'bold',
        marginTop: 50,
        marginBottom: 15
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        borderRadius: 10
    },
    button: {
        margin: 12
    },
    buttonContainer: {
        height: 40,
        margin: 12,
        borderRadius: 50
    },
    error: {
        textAlign: 'center',
        color: '#f00',
        marginTop: 20
    }
});