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
  const data = getFormFields(this)
  event.preventDefault()
  api.deleteSurvey(data)
    .then(ui.deleteSurveySuccess)
    .catch(ui.deleteSurveyFailure)
  console.log(data)
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
  $('.test-survey-crud').on('submit', '#update-survey-form', onUpdateSurvey)
  $('.test-survey-crud').on('submit', '#delete-survey-form', onDeleteSurvey)
  $('#survey-content').on('click', '.editSurvey', onEditSurvey)
}

module.exports = {
  addHandlers
}
