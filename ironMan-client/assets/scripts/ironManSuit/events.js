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
  api.suiteIndex()
    .then(ui.indexSuitSuccess)
    .catch(ui.indexSuitFailure)
}

const onSuitShow = function (event) {
  event.preventDefault()

  const form = event.target
  const formData = getFormFields(form)
  api.suitShow(formData.suite.id)
    .then(ui.showSuiteSuccess)
    .catch(ui.showSuiteFailure)
}

const onSuitDelete = function (event) {
  event.preventDefault()

  // Storing the form in a variable
  const form = event.target
  // Passing the form to getFormFields
  const formData = getFormFields(form)
  // formData: { movie: { id: '' } }

  api.suitDelete(formData.suite.id)
    .then(ui.suitDeleteSuccess)
    .catch(ui.suitDeleteFailure)
}

const onSuitUpdate = function (event) {
  event.preventDefault()

  const form = event.target
  const formData = getFormFields(form)
  // formData: { movie: { id: '', title: '', director: '' } }
  api.suitUpdate(formData)
    .then(ui.suitUpdateSuccess)
    .catch(ui.suitUpdateFailure)
}

module.exports = {
  onSuitUpdate,
  onSuitCreate,
  onSuitShow,
  onSuitIndex,
  onSuitDelete
}
