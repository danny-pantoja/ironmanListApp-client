const config = require('../config')
const store = require('../store')

const allyCreate = function (formData) {
  console.log(store)
  return $.ajax({
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    url: config.apiUrl + '/ironManAlly',
    method: 'POST',
    data: formData
  })
}

const allyIndex = function () {
  return $.ajax({
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    url: config.apiUrl + '/ironManAlly'
  })
}

const allyDelete = function (id) {
  return $.ajax({
    // Use the ID value from the form in the URL
    // to delete a specific ally
    url: config.apiUrl + '/ironManAlly/' + id,
    method: 'DELETE',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

const allyUpdate = function (formData) {
  return $.ajax({
    url: config.apiUrl + '/ironManAlly/' + formData.ironManAlly.id,
    method: 'PATCH',
    data: {
      ironManAlly: {
        ally: formData.ironManAlly.ally,
        description: formData.ironManAlly.description
      }
    },
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

module.exports = {
  allyUpdate,
  allyDelete,
  allyCreate,
  allyIndex
}
