import fetch from 'node-fetch';
const resolveFunctions = {
   Query: {
    items() {
      return fetch(`http://localhost:3001/items`)
        .then(response => response.json())
        .catch(errors => console.log(errors));
    },
    item(root, { id }) {
      return fetch(`http://localhost:3001/items/${id}`)
        .then(response => response.json())
        .catch(errors => console.log(errors));
    },
    users() {
      return fetch(`http://localhost:3001/users`)
        .then(response => response.json())
        .catch(errors => console.log(errors));
    },
    user(root, { id }) {
      return fetch(`http://localhost:3001/users/${id}`)
        .then(response => response.json())
        .catch(errors => console.log(errors));
    }
  },
  Item: {
    borrower(item) {
      if(!item.borrower) return null
      return fetch(`http://localhost:3001/users/${item.borrower}`)
        .then(response => response.json())
        .catch(errors => console.log(errors));
    },
    itemowner(item) {
      return fetch(`http://localhost:3001/users/${item.itemowner}`)
        .then(response => response.json())
        .catch(errors => console.log(errors));
    }
  },
  User: {
    async owneditems(user) {
      const response = await fetch(`http://localhost:3001/items/?itemowner=${user.id}`)
      const items = await response.json()
      return items
    },
    async borroweditems(user) {
      const response = await fetch(`http://localhost:3001/items/?borrower=${user.id}`)
      const items = await response.json()
      return items
    },
  }
};
export default resolveFunctions;