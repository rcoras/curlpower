'use strict'

const store = require('../store')
const showMainTemplate = require('../templates/main-view.handlebars')
const showSignedInNavTemplate = require('../templates/signed-in-nav.handlebars')
const loadNavHeadTemplate = require('../templates/nav-header.handlebars')
const showNavTemplate = require('../templates/load-nav.handlebars')
const showSurveyCrudTemplate = require('../templates/survey-crud.handlebars')

const clearFields = function () {
  $('input:text, input:password').val('')
}

// displays message to user on successful account creation and pushes the email used to the sign-in form
const signUpSuccess = function (data) {
  const email = $('#sign-up-email').val()
  clearFields()
  $('#sign-in-email').val(email)
  $('.status-message-sign-up').text('Account created. Please Sign In')
}

const signedInNav = function () {
  const showSignedInNavHtml = showSignedInNavTemplate()
  $('.account-nav').append(showSignedInNavHtml)
}

const navHeader = function () {
  const showNavHeaderHtml = loadNavHeadTemplate()
  $('.navbar-header').prepend(showNavHeaderHtml)
}

const surveyCrud = function () {
  const showSurveyCrudHtml = showSurveyCrudTemplate()
  $('.test-survey-crud').append(showSurveyCrudHtml)
}

const signInSuccess = function (data) {
  store.user = data.user
  clearFields()
  signedInNav()
  navHeader()
  surveyCrud()
  console.log('store is, ', store)
}

const signInFailure = function (error) {
  const errorStatus = error.status.toString()
  if (errorStatus.startsWith('4') === true) {
    $('.status-message-sign-in').text('Incorrect Email or Password.')
  } else if (errorStatus.startsWith('5') === true || errorStatus.startsWith('0') === true) {
    $('.status-message-sign-in').text('Unable to contact server.')
  }
  clearFields()
}

const signUpFailure = function (error) {
  const errorStatus = error.status.toString()
  if (errorStatus.startsWith('4') === true) {
    $('.status-message-sign-up').text('Invalid Email or Password.')
  } else if (errorStatus.startsWith('5') === true || errorStatus.startsWith('0') === true) {
    $('.status-message-sign-up').text('Unable to contact server.')
  }
  clearFields()
}

const changePasswordSuccess = function (data) {
  $('.status-message-change-password').text('Successfully changed password.')
  clearFields()
}

const changePasswordFailure = function (error) {
  const errorStatus = error.status.toString()
  console.log('cp store is', store)
  if (errorStatus.startsWith('4') === true) {
    $('.status-message-change-password').text('Incorrect Old Password.')
  } else if (errorStatus.startsWith('5') === true || errorStatus.startsWith('0') === true) {
    $('.status-message-change-password').text('Unable to contact server.')
  }
  clearFields()
}

const signOutSuccess = function () {
  $('.account-nav').html('')
  $('.user-buttons').html('')
  mainView()
  loadNav()
  $('.status-message-change-password').text('')
  store.user = undefined
}

const loadNav = function () {
  $('.signed-in-nav').html('')
  const showNavHtml = showNavTemplate()
  $('.signed-in-nav').append(showNavHtml)
}

const mainView = function () {
  $('.main').html('')
  const showMainHtml = showMainTemplate()
  $('.main').append(showMainHtml)
}

module.exports = {
  signUpSuccess,
  signInSuccess,
  signUpFailure,
  signInFailure,
  changePasswordSuccess,
  changePasswordFailure,
  signOutSuccess,
  loadNav,
  mainView
}
