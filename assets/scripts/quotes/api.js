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

const showMyQuotes = formData => {
  return $.ajax({
    url: config.apiUrl + '/quotes/',
    data: formData,
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

const updateQuote = function (data, id) {
  return $.ajax({
    url: config.apiUrl + '/quotes/' + id,
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
  updateQuote
}
