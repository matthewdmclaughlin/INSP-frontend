const config = require('../config')
const store = require('../store')

const generateQuote = function () {
  return $.ajax({
    url: config.apiUrl + '/quotes',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const createQuote = function (data) {
  console.log('data: ', data)
  return $.ajax({
    url: config.apiUrl + '/quotes',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
    // data: data
  })
}

const showMyQuotes = function (quote) {
  return $.ajax({
    url: config.apiUrl + '/quotes/' + quote.id,
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const destroyQuote = function (id) {
  return $.ajax({
    url: config.apiUrl + '/quotes/' + id,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const updateMyQuote = function (data) {
  return $.ajax({
    url: config.apiUrl + '/quotes/' + data.quote.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
    // data: data
  })
}

module.exports = {
  generateQuote,
  createQuote,
  showMyQuotes,
  destroyQuote,
  updateMyQuote
}
