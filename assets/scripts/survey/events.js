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

// const onViewSurvey = (event) => {
//   event.preventDefault()
//   const id = $(event.currentTarget).data('id')
//   api.viewSurvey(id)
//     .then(ui.viewSurveySuccess)
//     .catch(ui.failure)
// }

const onUpdateSurvey = (event) => {
  event.preventDefault()
  const id = $(event.currentTarget).data('id')
  const owner = $(event.currentTarget).data('owner')
  const title = $('.title-update-' + event.target.attributes['data-id'].value).val()
  const question = $('.question-update-' + event.target.attributes['data-id'].value).val()
  api.updateSurvey(id, title, question, owner)
    .then(() => onGetSurveys(event))
    .then(ui.updateSurveySuccess)
    .catch(ui.failure)
}

const onDeleteSurvey = (event) => {
  event.preventDefault()
  const id = $(event.currentTarget).data('id')
  api.deleteSurvey(id)
    .then(() => onGetSurveys(event))
    .catch(ui.failure)
}

const addSurveyHandlers = () => {
  $('#survey-form').on('submit', onCreateSurvey)
  $('#get-survey-btn').on('click', onGetSurveys)
  $('#create-survey-btn').click(() => {
    $('.get-all-surveys').hide()
    $('#survey-form').show()
  })
  $('#get-survey-btn').click(() => {
    $('#survey-form').hide()
    $('.get-all-surveys').show()
  })
  $('#create-survey-btn').click(() => {
    $('#survey-form').show()
  })
  $('#submit-button').click(() => {
    $('#survey-form').hide()
  })
  $('.survey-box').on('submit', '.update-survey-form', onUpdateSurvey)
  $('.survey-box').on('click', '.delete-survey', onDeleteSurvey)
}

module.exports = {
  addSurveyHandlers,
  onGetSurveys,
  // onViewSurvey,
  onUpdateSurvey,
  onDeleteSurvey
}
