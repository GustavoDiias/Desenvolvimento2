import React, { useState, useEffect } from 'react';
import AccordionObject from '../accordionObject';
import { View, Text } from 'react-native';

import Styles from './styles';

import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import styles from '../accordionObject/styles';
import { useSelector } from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome';

function ImovelList({ imovel }) {
    const [idUsuario, setIdUsuario] = useState(0);

    const auth = useSelector(state => state.auth);

    useEffect(() => {
        setIdUsuario(auth.usuario.idUsuario);
    }, []);

    return (
        <View key={imovel.idImovel} style={styles.containerPerfil}>
            <ScrollView>
                <AccordionObject
                    title={imovel.descricaoImovel}
                    id={imovel.idImovel}
                    icone="home">
                    <View style={styles.container}>
                        <ScrollView>
                            <View style={styles.containerImovel}>
                                <Text style={styles.texto}>
                                    - Municipio: {imovel.uf} - Cidade: {imovel.cidade} - Bairro: {imovel.bairro}
                                </Text>
                                <Text style={styles.texto}>
                                    - Rua: {imovel.logradouroImovel} - nº: {imovel.numero} - CEP: {imovel.cep} - Complemento: {imovel.complemento}
                                </Text>
                                <Text style={styles.texto}>
                                    _Email para Contato: {imovel.email}
                                </Text>
                                {imovel.idUsuario === idUsuario ? (
                                    <View>
                                        <TouchableOpacity onPress={() => editar(imovel)}>
                                            <Icon style={styles.icone} name="pencil-square" size={30} />
                                        </TouchableOpacity>

                                        <TouchableOpacity onPress={() => excluir(imovel.idImovel)}>
                                            <Icon style={styles.icone} name="remove" size={30} />
                                        </TouchableOpacity>
                                    </View>
                                ) : (
                                        <></>
                                    )}
                            </View>
                        </ScrollView>
                    </View>
                </AccordionObject>
            </ScrollView>
        </View>
    );
}

export default ImovelList;