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
  const id = $(event.currentTarget).data('id')
  const owner = $(event.currentTarget).data('owner')
  const title = $('.title-update-' + event.target.attributes['data-id'].value).val()
  const question = $('.question-update-' + event.target.attributes['data-id'].value).val()
  api.updateSurvey(id, title, question, owner)
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
