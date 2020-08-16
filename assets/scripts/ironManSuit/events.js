const getFormFields = require('../../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')

const onSuitCreate = function (event) {
  event.preventDefault()

  const form = event.target
  const formData = getFormFields(form)

  api.suitCreate(formData)
    .then(ui.createSuitSuccess)
    .catch(ui.createSuitFailure)
}

const onSuitIndex = function (event) {
  api.suitIndex()
    .then(ui.indexSuitSuccess)
    .catch(ui.indexSuitFailure)
}

const onSuitDelete = function (event) {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  api.suitDelete(formData.ironManSuit.id)
    .then(ui.suitDeleteSuccess)
    .catch(ui.suitDeleteFailure)
}

const onSuitUpdate = function (event) {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  api.suitUpdate(formData)
    .then(ui.suitUpdateSuccess)
    .catch(ui.suitUpdateFailure)
}

module.exports = {
  onSuitUpdate,
  onSuitCreate,
  onSuitIndex,
  onSuitDelete
}
