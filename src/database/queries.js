import { getDBConnection } from './index';

export const insertItem = (nome, detalhes, imagemUrl, categoria) => {
  const db = getDBConnection();

  db.transaction(tx => {
    tx.executeSql(
      `INSERT INTO itens (nome, detalhes, imagemUrl, categoria) VALUES (?, ?, ?, ?);`,
      [nome, detalhes, imagemUrl, categoria]
    );
  });
};

export const getItems = (callback) => {
  const db = getDBConnection();

  db.transaction(tx => {
    tx.executeSql(
      `SELECT * FROM itens;`,
      [],
      (_, { rows: { _array } }) => {
        callback(_array);
      }
    );
  });
};
