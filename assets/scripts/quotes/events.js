'use strict'

const getFormFields = require(`../../../lib/get-form-fields`)

const api = require('./api')
const ui = require('./ui')

const onCreateQuote = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.createQuote(data)
    .then(ui.onCreateSuccess)
    .catch(ui.onCreateFailure)
}

const onShowQuotes = function (event) {
  event.preventDefault()
  api.showMyQuotes()
    .then(ui.onIndexSuccess)
    .catch(ui.onIndexFailure)
}

const onDeleteQuote = function (event) {
  event.preventDefault()
  const deletedQuote = $(event.target).data('id')
  api.destroyQuote(deletedQuote)
    .then(ui.onDestroySuccess)
    .catch(ui.onDestroyFailure)
}

const onUpdateQuote = function (event) {
  event.preventDefault()
  const updatedQuote = getFormFields(event.target)
  api.updateQuote(updatedQuote, event.target.id)
    .then(ui.onUpdateSuccess)
    .catch(ui.onUpdateFailure)
}

const addHandlers = () => {
  $('#quote-create').on('submit', onCreateQuote)
  $('#quote-index').on('click', onShowQuotes)
  $('.content').on('click', '.delete-quote', onDeleteQuote)
  $('#edit-quote').on('submit', onUpdateQuote)
  $('.content').on('submit', '.edit-quote', onUpdateQuote)
}

module.exports = {
  addHandlers
}
