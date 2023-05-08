import react from "react";
import {StyleSheet, Text} from 'react-native';

export default function Texto({children}){
    return <Text style = {estilos.texto}>{children}</Text>

}

const estilos = StyleSheet.create({
    texto: {
        fontFamily: "MonteserratRegular"
    }
})