import { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'

//Todos los hooks comienzan con use
//Arrow function para que se deba ejecutar la funcion y no traiga los valores directamente
//Este hook accede al contexto, extrae el value y lo retorna
export default () => useContext(AuthContext);