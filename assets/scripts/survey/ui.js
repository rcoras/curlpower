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
  // data is going to be checked for survey._owner
  // against store.user._id
  // if true, move to one array, if false move to another
  // pass in true array to showSurveysHtml
  // pass in false array to showTakeablesHtml
  const showSurveysHtml = loadSurveysTemplate({
    surveys: data.surveys
  })
  $('.my-surv').append(showSurveysHtml)
  const showTakeablesHtml = loadTakeablesTemplate({
    surveys: data.surveys
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
