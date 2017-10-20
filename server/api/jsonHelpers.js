import fetch from 'node-fetch';

const jsonServer = "http://localhost:3001";

export const getItems = function() {
  return fetch(`${jsonServer}/items`)
        .then(response => response.json())
        .catch(errors => console.log(errors));
}

export const getItem = function(id) {
  return fetch(`${jsonServer}/items/${id}`)
        .then(response => response.json())
        .catch(errors => console.log(errors));
}

export const getUsers = function() {
  return fetch(`${jsonServer}/users`)
        .then(response => response.json())
        .catch(errors => console.log(errors));
}

export const getUser = function(id) {
  return fetch(`${jsonServer}/users/${id}`)
        .then(response => response.json())
        .catch(errors => console.log(errors));
}

export const getUserOwnedItems = async function(id) {
      const response = await fetch(`${jsonServer}/items/?itemowner=${id}`)
      const items = await response.json()
      return items
}

export const getUserBorrowedItems = async function(id) {
  const response = await fetch(`${jsonServer}/items/?borrower=${id}`)
      const items = await response.json()
      return items
}

export const createNewItem = function(title, imageurl, description, itemowner, tags) {
  const tzOffset = (new Date()).getTimezoneOffset() * 60000; // offset in milliseconds
      const localTime = `${(new Date(Date.now() - tzOffset)).toISOString().slice(0, -1).replace('T', ' ')}-07`;
      
      const newItem = {
        created: localTime,
        borrower: null,
        available: true,
        title,
        itemowner,
        imageurl,
        tags,
        description

      }
      return fetch(`${jsonServer}/items`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(newItem)
      }).then(response => {
        return response.json()
      }).catch(error => {
        console.log(error)
      })
}

// export const getItemBorrower = function() {
//   if (!item.borrower) return null;
//       return fetch(`${jsonServer}/users/${item.borrower}`)
//         .then(response => response.json())
//         .catch(errors => console.log(errors));
// }

// export const getItemOwner = function() {
//   if (!item.itemowner) return null;
//       return fetch(`${jsonServer}/users/${item.itemowner}`)
//         .then(response => response.json())
//         .catch(errors => console.log(errors));
// }