const config = require('../config')
const store = require('../store')

const suitCreate = function (formData) {
  console.log(store)
  return $.ajax({
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    url: config.apiUrl + '/suits',
    method: 'POST',
    data: formData
  })
}

const suitIndex = function () {
  return $.ajax({
    url: config.apiUrl + '/suits'
  })
}

const suitShow = function (id) {
  return $.ajax({
    url: config.apiUrl + '/suits/' + id
  })
}

const suitDelete = function (id) {
  return $.ajax({
    // Use the ID value from the form in the URL
    // to delete a specific suit
    url: config.apiUrl + '/suits/' + id,
    method: 'DELETE',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

const suitUpdate = function (formData) {
  return $.ajax({
    url: config.apiUrl + '/suits/' + formData.suit.id,
    method: 'PATCH',
    data: {
      suit: {
        title: formData.suit.title,
        director: formData.suit.director
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
  suitIndex,
  suitShow
}
