import { getDBConnection } from './index';

export const createTables = () => {
  const db = getDBConnection();
  
  db.transaction(tx => {
    tx.executeSql(
      `CREATE TABLE IF NOT EXISTS itens (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        nome TEXT,
        detalhes TEXT,
        imagemUrl TEXT,
        categoria TEXT
      );`
    );
  });
};
