export default class Imovel {
  idImovel: int;
  descricaoImovel: String;
  email: String;
  logradouroImovel: String;
  numero: int;
  complemento: String;
  bairro: String;
  cep: String;
  cidade: String;
  uf: String;
  idUsuario: int;
  situacaoImovel: String;
  constructor() {
    this.idImovel = 0;
    this.descricaoImovel = '';
    this.email = '';
    this.logradouroImovel = '';
    this.numero = '';
    this.complemento = '';
    this.bairro = '';
    this.cep = '';
    this.cidade = '';
    this.uf = '';
    this.idUsuario = 0;
  }
}
