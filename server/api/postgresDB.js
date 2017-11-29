import { Pool } from "pg";

export default function(app) {
  const pool = new Pool({
    host: app.get("PG_HOST"),
    user: app.get("PG_USER"),
    password: app.get("PG_PASSWORD"),
    database: app.get("PG_DATABASE"),
    max: 20,
    idleTimeoutMillis: 30000,
    connectionTimeoutMillis: 2000
  });
  return {
    getItems() {
      return pool
        .query(
          `
      SELECT * FROM items
      ORDER BY id;
      `
        )
        .then(response => response.rows);
    },
    getItem(id) {
      return pool
        .query(
          `
      SELECT * FROM items WHERE id = ${id}
      ORDER BY id;      
      `
        )
        .then(response => response.rows);
    },
    getTags() {
      return pool.query(`SELECT * FROM tags;`).then(response => response.rows);
    },
    getTag(itemID) {
      return pool
        .query(
          `select tags.id, tags.title from tags join itemtags on tags.id = itemtags.tagid where itemtags.itemid = ${itemID}`
        )
        .then(resp => resp.rows);
    },
    getUserOwnedItems(id) {
      return pool
        .query(
          `
      SELECT * FROM items WHERE itemowner = '${id}'
      `
        )
        .then(response => response.rows);
    },
    getUserBorrowedItems(id) {
      return pool
        .query(
          `
      SELECT * FROM items WHERE borrowerid = '${id}'
      ORDER BY id;
      `
        )
        .then(response => response.rows);
    }
  };
}
