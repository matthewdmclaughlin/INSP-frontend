'use strict'

const config = require('../config')
const store = require('../store')

const createQuote = formData => {
  return $.ajax({
    url: config.apiUrl + '/quotes',
    data: {quote: formData},
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    method: 'POST'
  })
}

const updateQuote = (formData) => {
  return $.ajax({
    url: config.apiUrl + '/quotes/' + store.quote_id,
    method: 'PATCH',
    data: {
      quote: formData
    }
  })
}

const getMyQuotes = function () {
  return $.ajax({
    url: config.apiUrl + '/quotes' + store.user_id,
    method: 'GET'
  })
}

const deleteQuote = quoteId => {
  return $.ajax({
    url: config.apiUrl + '/quotes/' + quoteId,
    method: 'DELETE',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

module.exports = {
  createQuote,
  getMyQuotes,
  deleteQuote,
  updateQuote
}
