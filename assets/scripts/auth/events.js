'use strict'

const getFormFields = require(`../../../lib/get-form-fields`)
const store = require('./../store')

const api = require('./api')
const ui = require('./ui')

const onSignUp = event => {
  event.preventDefault()
  const data = getFormFields(event.target)
  store.save = data
  api.signUp(data)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFailure)
}

const onSignIn = event => {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.signIn(data)
    .then(ui.signInSuccess)
    .catch(ui.signInFailure)
}

const onChangePassword = event => {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.changePassword(data)
    .then(ui.changePasswordSuccess)
    .catch(ui.changePasswordFailure)
}

const onQuickSignIn = event => {
  event.preventDefault()
  const guest = {
    'credentials': {
      'email': 'matt@matt',
      'password': 'matt'
    }
  }
  api.signIn(guest)
    .then(ui.signInSuccessful)
    .catch(ui.SignInFailure)
}

const onSignOut = event => {
  event.preventDefault()
  api.signOut(event)
    .then(ui.signOutSuccess)
    .catch(ui.signOutFailure)
}

const addHandlers = () => {
  $(document).on('submit', '#sign-up', onSignUp)
  $(document).on('submit', '#sign-in', onSignIn)
  $(document).on('submit', '#sign-in', onQuickSignIn)
  $(document).on('submit', '#change-password', onChangePassword)
  $(document).on('click', '#sign-out', onSignOut)
  $(document).on('click', '.sign-up-link', ui.showSignUp)
  $(document).on('click', '.sign-in-link', ui.showSignIn)
  $(document).ready(function () {
    $('#change-password-modal').on('hidden.bs.modal', function () {
      $('form').trigger('reset')
    })
  })
}

module.exports = {
  addHandlers
}
