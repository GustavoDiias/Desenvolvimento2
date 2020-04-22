import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { View, TouchableOpacity } from 'react-native';
import { buscarTodos } from '../../services/imovelService'
import ImovelList from '../../components/imovelList'
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './styles';

function listarImovel({ navigation }) {
    const [imoveis, setImoveis] = useState([]);
    const [idUsuario, setIdUsuario] = useState(0);

    const dispatch = useDispatch();
    const auth = useSelector(state => state.auth);

    const imovelState = useSelector(state => state.imovel);

    useEffect(() => {
        obterImoveis();
    }, []);

    // useEffect(() => {
    //
    // }, [imovelState.navegar]);

    useEffect(() => {
        setIdUsuario(auth.usuario.idUsuario);
    }, []);

    async function obterImoveis() {
        const imoveisObtidos = await buscarTodos();
        setImoveis(imoveisObtidos);
    }

    function excluirImovel(idImovel) {
        dispatch({ type: 'EXCLUIR_IMOVEL_REQUEST', idImovel })
        console.log(idImovel);
    }

    function editarImovel(imovel) {
        navigation.navigate('CadastrarImovel', { edicao: true });
        console.log(imovel);
    }

    return (
        <View>
            {imoveis.map(imovel => {
                return (
                    <View>
                        <ImovelList imovel={imovel} />

                        {imovel.idUsuario === idUsuario ? (
                            <View>
                                <TouchableOpacity onPress={() => editarImovel(imovel)}>
                                    <Icon style={styles.icone} name="pencil-square" size={30} />
                                </TouchableOpacity>

                                <TouchableOpacity onPress={() => excluirImovel(imovel.idImovel)}>
                                    <Icon style={styles.icone} name="remove" size={30} />
                                </TouchableOpacity>
                            </View>
                        ) : (
                                <></>
                            )}
                    </View>
                );
            })}
        </View>
    );
}

export default listarImovel;