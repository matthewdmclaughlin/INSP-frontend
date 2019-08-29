'use strict'

let apiUrl
const apiUrls = {
  production: 'https://arcane-falls-60677.herokuapp.com',
  development: 'https://sei-library-api.herokuapp.com'
}

if (window.location.hostname === 'localhost') {
  apiUrl = apiUrls.development
} else {
  apiUrl = apiUrls.production
}

module.exports = {
  apiUrl
}
