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
  console.log(data)
}

const addHandlers = function () {
  $('.test-survey-crud').on('submit', '#create-survey-form', onCreateSurvey)
  $('.test-survey-crud').on('click', '#survey-get-all', onGetAllSurveys)
  $('.test-survey-crud').on('submit', '#get-survey-form', onGetASurvey)
}

module.exports = {
  addHandlers
}
