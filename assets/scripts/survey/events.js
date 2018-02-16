'use strict'

const getFormFields = require(`../../../lib/get-form-fields`)
const api = require(`./api`)
const ui = require('./ui')

const onCreateSurvey = function (event) {
  const data = getFormFields(this)
  event.preventDefault()
  api.createSurvey(data)
    .then(ui.createSurveySuccess)
    .catch(ui.createSurveyFailure)
}

const onGetAllSurveys = function (event) {
  event.preventDefault()
  api.getAllSurveys()
    .then(ui.getAllSurveysSuccess)
    .catch(ui.getAllSurveysFailure)
}

const onGetASurvey = function (event) {
  const data = getFormFields(this)
  event.preventDefault()
  api.getASurvey(data)
    .then(ui.getASurveySuccess)
    .catch(ui.getASurveyFailure)
}

const onUpdateSurvey = function (event) {
  const data = getFormFields(this)
  event.preventDefault()
  api.updateSurvey(data)
    .then(ui.updateSurveySuccess)
    .catch(ui.updateSurveyFailure)
  console.log(data)
}

const onDeleteSurvey = function (event) {
  event.preventDefault()
  const surveyDiv = $(this).parent('.my-surveys')
  api.deleteSurvey(surveyDiv)
    .then(() => ui.deleteSurveySuccess(surveyDiv))
    .catch(ui.deleteSurveyFailure)
}

const onEditSurvey = function (event) {
  event.preventDefault()
  const surveyDiv = $(this).parent('.my-surveys')
  api.getASurvey(surveyDiv)
    .then(ui.getASurveySuccess)
    .catch(ui.getASurveyFailure)
  console.log(surveyDiv)
}

const addHandlers = function () {
  $('.test-survey-crud').on('submit', '#create-survey-form', onCreateSurvey)
  $('.test-survey-crud').on('click', '#survey-get-all', onGetAllSurveys)
  $('.test-survey-crud').on('submit', '#get-survey-form', onGetASurvey)
  $('.main').on('submit', '#update-survey-form', onUpdateSurvey)
  $('.main').on('click', '.delete-survey', onDeleteSurvey)
  $('.main').on('click', '.edit-survey', onEditSurvey)
  $('.main').on('submit', '#create-survey-form', onCreateSurvey)
}

module.exports = {
  addHandlers
}
