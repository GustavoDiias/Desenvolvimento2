import { OpenDataBase } from './database.js';

export function incluirImovel(imovel) {
  return new Promise((resolve, reject) => {
    try {
      const sql = `insert into Imovel(
          descricaoImovel, 
          email, 
          logradouroImovel, 
          numero, 
          complemento, 
          cep, 
          bairro, 
          cidade, 
          uf, 
          idUsuario, 
          situacaoImovel) 
        values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;

      const db = OpenDataBase();

      console.log('Antes da Transaction');
      console.log(imovel);
      db.transaction(tx => {
        tx.executeSql(
          sql,
          [
            imovel.descricaoImovel,
            imovel.email,
            imovel.logradouroImovel,
            imovel.numero,
            imovel.complemento,
            imovel.cep,
            imovel.bairro,
            imovel.cidade,
            imovel.uf,
            imovel.idUsuario,
            'C',
          ],
          (tx, results) => {
            imovel.idImovel = results.insertId;
            console.log(imovel);
            console.log('deu certo a inserção');
            resolve(imovel);
          },
        );
      });
    } catch (err) {
      reject(err.message);
    }
  });
}

export function buscarTodos() {
  return new Promise((resolve, reject) => {
    try {
      const sql = 'select * from Imovel';

      const db = OpenDataBase();

      db.transaction(tx => {
        tx.executeSql(sql, [], (tx, results) => {
          if (results.rows.length === 0) {
            reject('Não foram encrontrados Imoveis cadastrados.');
          }

          var imoveis = results.rows.raw();
          resolve(imoveis);
        });
      });
    } catch (err) {
      reject(err.message);
    }
  });
}

export function editar(imovel) {
  return new Promise((resolve, reject) => {
    try {
      var sql =
        'update Imovel set descricaoImovel = ?, email = ?, logradouroImovel = ?, numero = ? , complemento = ? , cep = ? , bairro = ? , cidade = ? , uf = ? , idUsuario = ? , situacaoImovel = ? ' +
        ' where idImovel = ?';

      const db = OpenDataBase();
      db.transaction((tx) => {
        tx.executeSql(
          sql,
          [
            imovel.descricaoImovel,
            imovel.email,
            imovel.logradouroImovel,
            imovel.numero,
            imovel.complemento,
            imovel.cep,
            imovel.bairro,
            imovel.cidade,
            imovel.uf,
            imovel.idUsuario,
            'E',
          ],
          (tx, results) => {
            resolve(imovel);
            console.log('editou');
          },
        );
      });
    } catch (err) {
      reject(err.message);
    }
  });
}

export function excluir(idImovel) {
  return new Promise((resolve, reject) => {
    try {
      const sql = 'delete from Imovel where idImovel = ?';

      const db = OpenDataBase();

      db.transaction(tx => {
        tx.executeSql(sql, [idImovel], (tx, results) => {
          console.log(results);

        });
      });
    } catch (err) {
      reject(err.message);
    }
  });
}

