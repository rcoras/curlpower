'use strict'

const store = require('../store')
const loadSurveysTemplate = require('../templates/load-surveys.handlebars')
const loadEditTemplate = require('../templates/edit-survey.handlebars')
const loadTakeablesTemplate = require('../templates/takeable-surveys.handlebars')

const createSurveySuccess = function (data) {
  console.log('successfully created survey', data)
}

const createSurveyFailure = function (error) {
  console.error(error)
}

const getAllSurveysSuccess = function (data) {
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
  console.log('this is working ', data)
}

const updateSurveyFailure = function (error) {
  console.error(error)
}

const deleteSurveySuccess = function (data) {
  const stuff = $(data).parents('div')[0]
  console.log(data)
  $(stuff).html('')
  console.log('this is stuff', stuff)
}

const deleteSurveyFailure = function (error) {
  console.error(error)
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
  deleteSurveyFailure
}
