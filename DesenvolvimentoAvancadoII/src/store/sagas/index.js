import { all, takeLatest, take } from 'redux-saga/effects';

// Importar os métodos
import { login, manterUsuario } from './auth';
import { salvarImovel, edicaoImovel, deletarImovel } from './imm';
import { apresentarMensagem } from './mensagem';

// Importar os types
import { AuthTypes } from '../ducks/auth';
import { ImmTypes } from '../ducks/imm';
import { MensagemTypes } from '../ducks/mensagem';

export default function* rootSaga() {
  return yield all([
    takeLatest(AuthTypes.SIGN_IN_REQUEST, login),
    takeLatest(AuthTypes.CADASTRAR_USUARIO_REQUEST, manterUsuario),
    takeLatest(MensagemTypes.SET_MENSAGEM, apresentarMensagem),
    takeLatest(ImmTypes.CADASTRAR_IMOVEL_REQUEST, salvarImovel),
    takeLatest(ImmTypes.EDITAR_IMOVEL_REQUEST, edicaoImovel),
    takeLatest(ImmTypes.EXCLUIR_IMOVEL_REQUEST, deletarImovel),
  ]);
}
