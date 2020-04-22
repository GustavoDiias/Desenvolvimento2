import React, { useState, useEffect } from 'react';
import AccordionObject from '../accordionObject';
import { View, Text } from 'react-native';
import Styles from './styles';
import { ScrollView } from 'react-native-gesture-handler';
import styles from '../accordionObject/styles';

function ImovelList({ imovel }) {
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
                            </View>
                        </ScrollView>
                    </View>
                </AccordionObject>
            </ScrollView>
        </View>
    );
}

export default ImovelList;