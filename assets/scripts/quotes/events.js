'use strict'

const getFormFields = require(`../../../lib/get-form-fields`)
// const store = require('../store')
const api = require('./api')
const ui = require('./ui')
// const config = require('./../config')

const onCreateQuote = event => {
  event.preventDefault()
  const formData = getFormFields(event.target)
  api.createquote(formData)
    .then(ui.createQuoteSuccess)
    .catch(ui.createQuoteFailure)
}

const onDeleteQuote = (event) => {
  event.preventDefault()
  const quoteId = event.target.dataset.id
  api.deleteQuote(quoteId)
    .then(ui.deleteQuoteSuccess)
    .catch(ui.failure)
}

const onGetMyQuotes = function (event) {
  api.getMyQuotes()
    .then(ui.getMyQuotesSuccess)
    .catch(ui.getMyQuotesSuccessFailure)
}

const onUpdateQuote = event => {
  event.preventDefault()
  const formData = getFormFields(event.target)
  api.updateEvent(formData)
    .then(event => {
      ui.openEventSuccess(event)
      return event
    })
    .then(ui.updateEventsSuccess)
    .catch(ui.updateEventsSuccessFailure)
}

const addHandlers = () => {
  $(document).on('click', '#see-all-my-quotes', onGetMyQuotes)
  $(document).on('submit', '#create-quote', onCreateQuote)
  $(document).on('submit', '#update-quote', onUpdateQuote)
  $(document).on('click', '#delete-event', onDeleteQuote)
}

module.exports = {
  onCreateQuote,
  onGetMyQuotes,
  onDeleteQuote,
  onUpdateQuote,
  addHandlers
}
