const config = require('../config.js')
const store = require('../store.js')

const createSurvey = (inputData) => {
  return $.ajax({
    url: config.apiUrl + '/surveys',
    method: 'POST',
    headers: {
      Authorization: `Token token=${store.user.token}`
    },
    contentType: 'application/json',
    data: JSON.stringify(inputData)
  })
}

const getSurveys = () => {
  return $.ajax({
    url: config.apiUrl + '/surveys',
    method: 'GET',
    headers: {
      Authorization: `Token token=${store.user.token}`
    },
    contentType: 'application/json'
  })
}

const viewSurvey = (surveyId) => {
  return $.ajax({
    url: config.apiUrl + `/surveys/${surveyId}`,
    method: 'GET',
    headers: {
      Authorization: `Token token=${store.user.token}`
    }
  })
}

const updateSurvey = (id, surveyData) => {
  return $.ajax({
    url: config.apiUrl + `/surveys/${id}`,
    method: 'PATCH',
    headers: {
      Authorization: `Token token=${store.user.token}`
    },
    contentType: 'application/json',
    data: JSON.stringify(surveyData)
  })
}

const deleteSurvey = (surveyId) => {
  return $.ajax({
    url: config.apiUrl + `/surveys/${surveyId}`,
    method: 'DELETE',
    headers: {
      Authorization: `Token token=${store.user.token}`
    }
  })
}

module.exports = {
  createSurvey,
  getSurveys,
  viewSurvey,
  updateSurvey,
  deleteSurvey
}
