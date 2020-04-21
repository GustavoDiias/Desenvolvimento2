import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

/* types & actions creators */
const { Types, Creators } = createActions({
  cadastrarImovelRequest: ['imovel'],
  cadastrarImovelSuccess: ['imovel'],
  cadastrarImovelFailure: null,
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

export const reducer = createReducer(INITIAL_STATE, {
  [Types.CADASTRAR_IMOVEL_REQUEST]: cadastrarImovelRequestReducer,
  [Types.CADASTRAR_IMOVEL_SUCCESS]: cadastrarImovelSuccessReducer,
  [Types.CADASTRAR_IMOVEL_FAILURE]: cadastrarImovelFailureReducer,
});
