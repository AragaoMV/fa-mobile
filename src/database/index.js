import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase("MockDatabase.db");

export const getDBConnection = () => {
  return db;
};
