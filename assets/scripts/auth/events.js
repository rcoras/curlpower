'use strict'

const getFormFields = require(`../../../lib/get-form-fields`)
const api = require(`./api`)
const ui = require('./ui')

const onSignUp = function (event) {
  const data = getFormFields(this)
  event.preventDefault()
  api.signUp(data)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFailure)
}

// signs in user
const onSignIn = function (event) {
  const data = getFormFields(this)
  event.preventDefault()
  api.signIn(data)
    .then(ui.signInSuccess)
    .catch(ui.signInFailure)
}

const onChangePassword = function (event) {
  const data = getFormFields(this)
  event.preventDefault()
  api.changePassword(data)
    .then(ui.changePasswordSuccess)
    .catch(ui.changePasswordFailure)
}

const onSignOut = function (event) {
  event.preventDefault()
  api.signOut()
    .then(ui.signOutSuccess)
}

const onDocReady = function () {
  ui.mainView()
  ui.loadNav()
}

const addHandlers = function () {
  $('.main').on('submit', '#sign-up-form', onSignUp)
  $('.main').on('submit', '#sign-in-form', onSignIn)
  $('.signed-in-nav').on('submit', '#change-password-form', onChangePassword)
  $('.signed-in-nav').on('click', '#sign-out', onSignOut)
  $(document).ready(onDocReady)
}

module.exports = {
  addHandlers
}
