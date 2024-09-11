import React from 'react';
import {View, Text} from 'react-native';
import Estilo from '../styles/Style';

class Tela1 extends React.Component {
    render() {
        return (
            <View style={Estilo.container}>
                <Text>Tela 1 - Exemplo!</Text>
            </View>
        )
    }
}

export default Tela1;
