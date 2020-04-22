import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Icon from 'react-native-vector-icons/FontAwesome';

import Imovel from '../../model/imovel';

import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StatusBar,
  ActivityIndicator,
} from 'react-native';

import styles from './styles';

function CadastroImovel({ navigation }) {
  const [descricaoImovel, setDescricaoImovel] = useState('');
  const [email, setEmail] = useState('');
  const [logradouroImovel, setLogradouroImovel] = useState('');
  const [numero, setNumero] = useState('');
  const [complemento, setComplemento] = useState('');
  const [bairro, setBairro] = useState('');
  const [cep, setCEP] = useState('');
  const [cidade, setCidade] = useState('');
  const [uf, setUF] = useState('');

  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  const immState = useSelector((state) => state.imm);


  useEffect(() => {
    navigation.navigate('Main');
  }, [immState.navegar]);

  function cadastrar() {
    var imovel = new Imovel();
    var idUsuario = auth.usuario.idUsuario;

    imovel.descricaoImovel = descricaoImovel;
    imovel.email = email;
    imovel.logradouroImovel = logradouroImovel;
    imovel.numero = numero;
    imovel.complemento = complemento;
    imovel.bairro = bairro;
    imovel.cep = cep;
    imovel.cidade = cidade;
    imovel.uf = uf;
    imovel.idUsuario = idUsuario;

    console.log('cadastroImoveis/index.js func cadastrar');

    dispatch({ type: 'CADASTRAR_IMOVEL_REQUEST', imovel });

    console.log('cadastroImoveis/index.js func cadastrar/dispatch');
  }

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <View style={styles.form}>
        <View style={styles.form}>
          <Icon name="newspaper-o" size={18} style={styles.inlineImg} />
          <TextInput
            style={styles.input}
            placeholder="Digite o a Descrição do Ímovel"
            autoCapitalize="none"
            autoCorrect={false}
            value={descricaoImovel}
            onChangeText={(text) => setDescricaoImovel(text)}
          />
        </View>
        <View style={styles.form}>
          <Icon name="at" size={18} style={styles.inlineImg} />
          <TextInput
            style={styles.input}
            placeholder="Digite o Email"
            autoCapitalize="none"
            autoCorrect={false}
            value={email}
            onChangeText={(text) => setEmail(text)}
          />
        </View>
        <View style={styles.form}>
          <Icon name="institution" size={18} style={styles.inlineImg} />
          <TextInput
            style={styles.input}
            placeholder="Digite o Logradouro do Ímovel"
            autoCapitalize="none"
            autoCorrect={false}
            value={logradouroImovel}
            onChangeText={(text) => setLogradouroImovel(text)}
          />
        </View>

        <View style={styles.form}>
          <Icon name="sort-numeric-asc" size={18} style={styles.inlineImg} />
          <TextInput
            style={styles.input}
            placeholder="Digite o Número do Ímovel"
            autoCapitalize="none"
            autoCorrect={false}
            value={numero}
            onChangeText={(text) => setNumero(text)}
          />
        </View>

        <View style={styles.form}>
          <Icon name="stack-exchange" size={18} style={styles.inlineImg} />
          <TextInput
            style={styles.input}
            placeholder="Digite o Complemento do Ímovel"
            autoCapitalize="none"
            autoCorrect={false}
            value={complemento}
            onChangeText={(text) => setComplemento(text)}
          />
        </View>

        <View style={styles.form}>
          <Icon name="location-arrow" size={18} style={styles.inlineImg} />
          <TextInput
            style={styles.input}
            placeholder="Digite o Bairro do Ímovel"
            autoCapitalize="none"
            autoCorrect={false}
            value={bairro}
            onChangeText={(text) => setBairro(text)}
          />
        </View>

        <View style={styles.form}>
          <Icon name="tag" size={18} style={styles.inlineImg} />
          <TextInput
            style={styles.input}
            placeholder="Digite o CEP do Ímovel"
            autoCapitalize="none"
            autoCorrect={false}
            value={cep}
            onChangeText={(text) => setCEP(text)}
          />
        </View>

        <View style={styles.form}>
          <Icon name="arrows-alt" size={18} style={styles.inlineImg} />
          <TextInput
            style={styles.input}
            placeholder="Digite o Cidade do Ímovel"
            autoCapitalize="none"
            autoCorrect={false}
            value={cidade}
            onChangeText={(text) => setCidade(text)}
          />
        </View>

        <View style={styles.form}>
          <Icon name="map" size={18} style={styles.inlineImg} />
          <TextInput
            style={styles.input}
            placeholder="Digite o UF do Ímovel"
            autoCapitalize="none"
            autoCorrect={false}
            value={uf}
            onChangeText={(text) => setUF(text)}
          />
        </View>

        <View style={styles.containerButton}>
          <TouchableOpacity style={styles.button} onPress={() => cadastrar()}>
            <Text style={styles.buttonText}>Cadastrar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

export default CadastroImovel;
