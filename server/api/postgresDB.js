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
    getTags() {
      return pool.query(`SELECT * FROM tags;`).then(response => response.rows);
    },
    getTag(itemID) {
      return pool
        .query(
          `select tags.id, tags.title from tags join itemtags on tags.id = itemtags.tagid where itemtags.itemid = ${itemID}`
        )
        .then(resp => resp.rows);
    }
  };
}

// export const getItem = function(id) {
//   return fetch(`${jsonServer}/items/${id}`)
//         .then(response => response.json())
//         .catch(errors => console.log(errors));
// }

// export const getUsers = function() {
//   return fetch(`${jsonServer}/users`)
//         .then(response => response.json())
//         .catch(errors => console.log(errors));
// }

// export const getUser = function(id) {
//   return fetch(`${jsonServer}/users/${id}`)
//         .then(response => response.json())
//         .catch(errors => console.log(errors));
// }

// export const getUserOwnedItems = async function(id) {
//       const response = await fetch(`${jsonServer}/items/?itemowner=${id}`)
//       const items = await response.json()
//       return items
// }

// export const getUserBorrowedItems = async function(id) {
//   const response = await fetch(`${jsonServer}/items/?borrower=${id}`)
//       const items = await response.json()
//       return items
// }

// export const createNewItem = function(title, imageurl, description, itemowner, tags) {
//   const tzOffset = (new Date()).getTimezoneOffset() * 60000; // offset in milliseconds
//       const localTime = `${(new Date(Date.now() - tzOffset)).toISOString().slice(0, -1).replace('T', ' ')}-07`;

//       const newItem = {
//         created: localTime,
//         borrower: null,
//         available: true,
//         title,
//         itemowner,
//         imageurl,
//         tags,
//         description

//       }
//       return fetch(`${jsonServer}/items`, {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json"
//         },
//         body: JSON.stringify(newItem)
//       }).then(response => {
//         return response.json()
//       }).catch(error => {
//         console.log(error)
//       })
// }
