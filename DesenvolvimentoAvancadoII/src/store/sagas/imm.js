import { call, put, select } from 'redux-saga/effects';
import NetInfo from '@react-native-community/netinfo';
//import AsyncStorage from '@react-native-community/async-storage';
import { ToastActionsCreators } from 'react-native-redux-toast';

import { incluirImovel, editar, excluir } from '../../services/imovelService';

import ImmActions from '../ducks/imm';

/* função para apresentar o erro */

function* apresentarMensagem(tipo, imovel, mensagem) {
  if (tipo === 1) {
    yield put(ImmActions.cadastrarImovelFailure(imovel));
    yield put(ToastActionsCreators.displayError(mensagem));
  } else {
    yield put(ImmActions.cadastrarImovelSuccess(imovel));
    yield put(ToastActionsCreators.displayInfo(mensagem));
  }
}

/* Função para incluir um imovel */
function* incluir(imovel) {
  console.log('Funcao incluir')
  const retorno = yield incluirImovel(imovel)
    .then((resp) => {
      var ret = {
        tipo: 1,
        mensagem: '',
        imovel: resp,
      };

      return ret;
    })
    .catch((erro) => {
      var ret = {
        tipo: 2,
        mensagem: erro,
        imovel: null,
      };
      return ret;
    });
  return retorno;
}

/* Função para cadastrar um imovel */
export function* salvarImovel(action) {
  try {
    const { isConnected } = yield NetInfo.fetch();
    if (isConnected) {
      var mensagemErro = yield consistirDadosImovel(2, action.imovel);
      if (mensagemErro !== '') {
        yield apresentarMensagem(1, action.imovel, mensagemErro);
        return;
      }

      // Atualizar imovel
      if (action.imovel.idImovel === 0) {
        ToastActionsCreators.displayInfo('Incluindo Imovel');
        var retorno = yield incluir(action.imovel);
        if (retorno.tipo === 1) {
          yield apresentarMensagem(
            2,
            retorno.imovel,
            'Inclusão efetuada com sucesso',
          );
          return;
        } else {
          yield apresentarMensagem(1, action.imovel, retorno.mensagem);
          return;
        }
      }
    } else {
      yield apresentarMensagem(1, action.imovel, 'Sem conexão com internet');
    }
  } catch (err) {
    yield apresentarMensagem(1, action.imovel, err.message);
    return;
  }
}

export function* edicaoImovel(action) {
  try {
    var retorno = yield editarImovel(action.imovel);

    if (retorno.tipo === 1) {
      yield apresentarMensagem(
        2,
        retorno.imovel,
        'Imóvel Cadastrado com Sucesso!',
      );
      return;
    } else {
      yield apresentarMensagem(1, null, 'Não foi possivel editar o imovel');
      return;
    }
  } catch (err) {
    yield apresentarMensagem(1, null, err.message);
    return;
  }
}

function* editarImovel(imovel) {
  const retorno = yield editar(imovel)
    .then(res => {
      var ret = {
        tipo: 1,
        mensagem: '',
        imovel: res,
      };
      return ret;
    })
    .catch(erro => {
      var ret = {
        tipo: 0,
        mensagem: erro,
        imovel: null,
      };
      return ret;
    });
  return retorno;
}

export function* deletarImovel(action) {
  try {
    var retorno = yield excluir(action.idImovel);

    if (retorno.tipo === 1) {
      yield apresentarMensagemExclusao(
        2,
        'Imovel excluido com sucesso'
      );
      return;
    } else {
      yield apresentarMensagemExclusao(
        1,
        'Não foi possivel cadastrar o imovel',
      );
      return;
    }
  } catch (err) {
    yield apresentarMensagemExclusao(1, err.message);
    return;
  }
}

function* excluirImovel(idImovel) {
  const retorno = yield excluirImovel(idImovel)
    .then(res => {
      var ret = {
        tipo: 1,
        mensagem: '',
      };
      return ret;
    })
    .catch(erro => {
      var ret = {
        tipo: 1,
        mensagem: erro,
      };
      return ret;
    });
  return retorno;
}


function consistirDadosImovel(origem, imovel) {
  if (origem === 2) {
    if (imovel.descricaoImovel === '') {
      return 'Favor informar a Descrição.';
    }
    if (imovel.email === '') {
      return 'Favor informar o Email.';
    }
    if (imovel.logradouroImovel === '') {
      return 'Favor informar o logradouro.';
    }
    if (imovel.numero === '') {
      return 'Favor informar o Numero.';
    }
    if (imovel.complemento === '') {
      return 'Favor informar o Complemento.';
    }
    if (imovel.bairro === '') {
      return 'Favor informar o Bairro.';
    }
    if (imovel.cep === '') {
      return 'Favor informar o cep.';
    }
    if (imovel.cidade === '') {
      return 'Favor informar a Cidade.';
    }
    if (imovel.uf === '') {
      return 'Favor informar o uf.';
    }

  }
  return '';
}
