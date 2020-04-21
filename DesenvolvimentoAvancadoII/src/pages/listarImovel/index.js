import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import { buscarTodos } from '../../services/imovelService'
import ImovelList from '../../components/imovelList'

import styles from './styles';

function listarImovel({ navigation }) {

    const [imoveis, setImoveis] = useState([]);

    useEffect(() => {
        obterImoveis();
    }, []);

    async function obterImoveis() {
        const imoveisObtidos = await buscarTodos();
        setImoveis(imoveisObtidos);
    }

    return (
        <View>
            {imoveis.map(imovel => {
                return <ImovelList imovel={imovel} />;
            })}
        </View>
    );
}

export default listarImovel;