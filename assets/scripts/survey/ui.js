'use strict'

const store = require('../store')

const createSurveySuccess = function (data) {
  console.log('successfully created survey', data)
}

const createSurveyFailure = function (error) {
  console.error(error)
}

const getAllSurveysSuccess = function (data) {
  console.log('this is the data', data)
}

const getAllSurveysFailure = function (error) {
  console.log('not', error)
}

const getASurveySuccess = function (data) {
  console.log('this is working ', data)
}

const getASurveyFailure = function (error) {
  console.error(error)
}

module.exports = {
  createSurveySuccess,
  createSurveyFailure,
  getAllSurveysSuccess,
  getAllSurveysFailure,
  getASurveySuccess,
  getASurveyFailure
}
