const config = require('../config')
const store = require('../store')

const suitCreate = function (formData) {
  console.log(store)
  return $.ajax({
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    url: config.apiUrl + '/ironManSuit',
    method: 'POST',
    data: formData
  })
}

const suitIndex = function () {
  return $.ajax({
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    url: config.apiUrl + '/ironManSuit'
  })
}

// const suitShow = function (id) {
//   return $.ajax({
//     url: config.apiUrl + '/ironManSuit/' + id
//   })
// }

const suitDelete = function (id) {
  return $.ajax({
    // Use the ID value from the form in the URL
    // to delete a specific suit
    url: config.apiUrl + '/ironManSuit/' + id,
    method: 'DELETE',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

const suitUpdate = function (formData) {
  return $.ajax({
    url: config.apiUrl + '/ironManSuit/' + formData.ironManSuit.id,
    method: 'PATCH',
    data: {
      ironManSuit: {
        model: formData.ironManSuit.model,
        description: formData.ironManSuit.description
      }
    },
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

module.exports = {
  suitUpdate,
  suitDelete,
  suitCreate,
  suitIndex
  // suitShow
}
