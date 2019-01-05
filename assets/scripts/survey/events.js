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

}

const onDeleteSurvey = (event) => {

}

const addSurveyHandlers = () => {
  $('#survey-form').on('submit', onCreateSurvey)
  $('#new-survey-btn').on('click', onGetSurveys)
}

module.exports = {
  addSurveyHandlers,
  onGetSurveys,
  onViewSurvey
}
