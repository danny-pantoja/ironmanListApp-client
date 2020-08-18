const getFormFields = require('../../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')

const onAllyCreate = function (event) {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  api.allyCreate(formData)
    .then(ui.createAllySuccess)
    .catch(ui.createAllyFailure)
}

const onAllyIndex = function (event) {
  event.preventDefault()
  api.allyIndex()
    .then(ui.indexAllySuccess)
    .catch(ui.indexAllyFailure)
}

const onAllyDelete = function (event) {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  api.allyDelete(formData.ironManAlly.id)
    .then(ui.allyDeleteSuccess)
    .catch(ui.allyDeleteFailure)
}

const onAllyUpdate = function (event) {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  api.allyUpdate(formData)
    .then(ui.allyUpdateSuccess)
    .catch(ui.allyUpdateFailure)
}

module.exports = {
  onAllyUpdate,
  onAllyCreate,
  onAllyIndex,
  onAllyDelete
}
