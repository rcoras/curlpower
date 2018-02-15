'use strict'

const config = require('../config')
const store = require('../store')

const createSurvey = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/surveys',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const getAllSurveys = function () {
  return $.ajax({
    url: config.apiOrigin + '/surveys',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const getASurvey = function (data) {
  const id = $(data).data('mySurveyId')
  return $.ajax({
    url: config.apiOrigin + '/surveys/' + id,
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const updateSurvey = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/surveys/' + data.survey._id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const deleteSurvey = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/surveys/' + data.survey._id,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  createSurvey,
  getAllSurveys,
  getASurvey,
  updateSurvey,
  deleteSurvey
}
