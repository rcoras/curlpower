'use strict'

const store = require('../store')
const loadSurveysTemplate = require('../templates/load-surveys.handlebars')
const loadEditTemplate = require('../templates/edit-survey.handlebars')
const loadTakeablesTemplate = require('../templates/takeable-surveys.handlebars')
const loadRefreshTemplate = require('../templates/refresh-survey-button.handlebars')
const loadCreateSurveyFormTemplate = require('../templates/create-survey-form.handlebars')
const loadCreateButtonTemplate = require('../templates/create-survey-button.handlebars')

const addMessage = function (message) {
  $('.feedback-message').html('')
  $('.feedback-message').show()
  $('.feedback-message').html(message)
  $('.feedback-message').fadeOut(2500)
}

const createSurveySuccess = function (data) {
  addMessage('Survey Created!!')
}

const createSurveyFailure = function (error) {
  console.error(error)
  addMessage('Error. Please try again.')
}

const loadSurveyForm = function () {
  const showSurveyFormHtml = loadCreateSurveyFormTemplate()
  $('.main').html('')
  $('.main').append(showSurveyFormHtml)
}

const rButton = function () {
  const showRButtonHtml = loadRefreshTemplate()
  if ($('.refresh-survey').html('')) {
    $('.refresh-survey').append(showRButtonHtml)
  }
}

const crButton = function () {
  const showCrButtonHtml = loadCreateButtonTemplate()
  if ($('.create-survey').html('')) {
    $('.create-survey').append(showCrButtonHtml)
  }
}

const getAllSurveysSuccess = function (data) {
  $('.my-surv').html('')
  $('.take-surv').html('')
  const mySurveys = []
  const takeableSurveys = []
  data.surveys.forEach(function (survey) {
    if (survey._owner === store.user._id) {
      mySurveys.push(survey)
    } else {
      takeableSurveys.push(survey)
    }
  })
  const showSurveysHtml = loadSurveysTemplate({
    surveys: mySurveys
  })
  $('.my-surv').append(showSurveysHtml)
  const showTakeablesHtml = loadTakeablesTemplate({
    surveys: takeableSurveys
  })
  $('.take-surv').append(showTakeablesHtml)
  console.log('these are surveys', data)
  rButton()
  crButton()
}

const getAllSurveysFailure = function (error) {
  console.log('not', error)
}

const getASurveySuccess = function (data) {
  $('.main').html('')
  const showEditHtml = loadEditTemplate({
    survey: data.survey
  })
  $('.main').append(showEditHtml)
  console.log('editable survey ', data)
}

const getASurveyFailure = function (error) {
  console.error(error)
}

const updateSurveySuccess = function (data) {
  addMessage('Your survey has been updated')
}

const updateSurveyFailure = function (error) {
  console.error(error)
  addMessage('Error. Please try again')
}

const deleteSurveySuccess = function (data) {
  const surveyDiv = $(data).parents('div')[0]
  $(surveyDiv).html('')
  addMessage('The survey has been deleted')
}

const deleteSurveyFailure = function (error) {
  console.error(error)
  addMessage('Error. Please try again')
}

module.exports = {
  createSurveySuccess,
  createSurveyFailure,
  getAllSurveysSuccess,
  getAllSurveysFailure,
  getASurveySuccess,
  getASurveyFailure,
  updateSurveySuccess,
  updateSurveyFailure,
  deleteSurveySuccess,
  deleteSurveyFailure,
  loadSurveyForm
}
