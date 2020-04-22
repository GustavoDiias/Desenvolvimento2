import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

/* types & actions creators */
const { Types, Creators } = createActions({
  cadastrarImovelRequest: ['imovel'],
  cadastrarImovelSuccess: ['imovel'],
  cadastrarImovelFailure: null,
  editarImovelRequest: ['imovel'],
  editarImovelSuccess: ['imovel'],
  editarImovelFailure: null,
  excluirImovelRequest: ['idImovel'],
  excluirImovelSuccess: ['idImovel'],
  excluirImovelFailure: null,
});

export const ImmTypes = Types;
export default Creators;

export const INITIAL_STATE = Immutable({
  navegar: false,
  imovel: null,
});

export const cadastrarImovelRequestReducer = state =>
  state.merge({
    navegar: true,
    imovel: null,
  });

export const cadastrarImovelSuccessReducer = (state, { imovel }) =>
  state.merge({
    navegar: true,
    imovel: imovel,
  });

export const cadastrarImovelFailureReducer = state =>
  state.merge({
    navegar: false,
    imovel: null,
  });

export const editarImovelRequestReducer = state =>
  state.merge({
    navegar: false,
    imovel: null,
  });

export const editarImovelSuccessReducer = (state, { imovel }) =>
  state.merge({
    navegar: true,
    imovel: imovel,
  });

export const editarImovelFailureReducer = state =>
  state.merge({
    navegar: false,
    imovel: null,
  });

export const excluirImovelRequestReducer = state =>
  state.merge({
    navegar: false,
    imovel: null,
  });

export const excluirImovelSuccessReducer = state =>
  state.merge({
    navegar: true,
    imovel: null,
  });

export const excluirImovelFailureReducer = state =>
  state.merge({
    navegar: true,
    imovel: null,
  });



export const reducer = createReducer(INITIAL_STATE, {
  [Types.CADASTRAR_IMOVEL_REQUEST]: cadastrarImovelRequestReducer,
  [Types.CADASTRAR_IMOVEL_SUCCESS]: cadastrarImovelSuccessReducer,
  [Types.CADASTRAR_IMOVEL_FAILURE]: cadastrarImovelFailureReducer,
  [Types.EDITAR_IMOVEL_REQUEST]: editarImovelRequestReducer,
  [Types.EDITAR_IMOVEL_SUCCESS]: editarImovelSuccessReducer,
  [Types.EDITAR_IMOVEL_FAILURE]: editarImovelFailureReducer,
  [Types.EXCLUIR_IMOVEL_REQUEST]: excluirImovelRequestReducer,
  [Types.EXCLUIR_IMOVEL_SUCCESS]: excluirImovelSuccessReducer,
  [Types.EXCLUIR_IMOVEL_FAILURE]: excluirImovelFailureReducer,
});
