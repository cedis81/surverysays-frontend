const getFormFields = require('../../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')

const onCreateSurvey = (event) => {
  event.preventDefault()
  const userData = getFormFields(event.target)
  api.createSurvey(userData)
    .then(ui.createSurveySuccess)
    .catch(ui.failure)
}

const onGetSurveys = (event) => {
  event.preventDefault()
  api.getSurveys()
    .then(ui.getSurveysSuccess)
    .catch(ui.failure)
}

const onViewSurvey = (event) => {
  event.preventDefault()
  const id = $(event.target).closest('section').data('id')
  api.viewSurvey(id)
    .then(ui.viewSurveySuccess)
    .catch(ui.failure)
}

const onUpdateSurvey = (event) => {
  event.preventDefault()
  const id = $(event.target).parents('div').data('id')
  console.log('id', id)
  console.log('event', event.target)
  const surveyData = getFormFields(event.target)
  console.log('survey', surveyData)
  api.updateSurvey(id, surveyData)
    .then(ui.updateSurveySuccess)
    .catch(ui.failure)
}

const onDeleteSurvey = (event) => {
  event.preventDefault()
  const id = $(event.target).closest('section').data('id')
  api.deleteSurvey(id)
    .then(() => onGetSurveys(event))
    .catch(ui.failure)
}

const addSurveyHandlers = () => {
  $('#survey-form').on('submit', onCreateSurvey)
  $('#new-survey-btn').on('click', onGetSurveys)
  $('.survey-box').on('submit', '.update-survey-form', onUpdateSurvey)
}

module.exports = {
  addSurveyHandlers,
  onGetSurveys,
  onViewSurvey,
  onUpdateSurvey,
  onDeleteSurvey
}
