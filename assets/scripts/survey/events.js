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
  api.viewSurvey()
    .then(ui.viewSurveySuccess)
    .catch(ui.failure)
}

const onUpdateSurvey = (event) => {
  event.preventDefault()
  const id = $(event.currentTarget).data('id')
  const owner = $(event.currentTarget).data('owner')
  const question = $('.question-update-' + event.target.attributes['data-id'].value).val()
  api.updateSurvey(id, question, owner)
    .then(() => onViewSurvey(event))
    .then(ui.updateSurveySuccess)
    .catch(ui.failure)
}

const onDeleteSurvey = (event) => {
  event.preventDefault()
  const id = $(event.currentTarget).data('id')
  api.deleteSurvey(id)
    .then(() => onViewSurvey(event))
    .catch(ui.failure)
}

const addSurveyHandlers = () => {
  $('#survey-form').on('submit', onCreateSurvey)
  $('#get-survey-btn').on('click', onGetSurveys)
  $('#my-survey-btn').on('click', onViewSurvey)
  $('#get-survey-btn').click(() => {
    $('.create-survey').hide()
    $('.get-my-surveys').hide()
    $('.get-all-surveys').show()
    $('#message-box').hide()
    $('#message').html('')
    $('#change-password-form').hide()
  })
  $('#create-survey-btn').click(() => {
    // $('#message').hide()
    $('.create-survey').show()
    // $('.create-survey').removeClass('hidden')
    $('.get-my-surveys').hide()
    $('.get-all-surveys').hide()
    $('#change-password-form').hide()
    $('#survey-form').show()
    $('#message').show()
    $('#message-box').hide()
    // $('#message').html('')
    $('#survey-count').html('Create a survey to begin!')
    setTimeout(function () {
      $('#message').fadeOut()
    }, 1000)
  })
  $('#my-survey-btn').click(() => {
    $('.create-survey').hide()
    $('#change-password-form').hide()
    $('.get-all-surveys').hide()
    $('.get-my-surveys').show()
    $('#message').show()
    $('#message-box').hide()
    $('#message').html('')
  })
  $('#submit-button').click(() => {
    $('#survey-form').hide()
    $('#message').show()
  })
  $('.survey-box').on('submit', '.update-survey-form', onUpdateSurvey)
  $('.survey-box').on('click', '.delete-survey', onDeleteSurvey)
}

module.exports = {
  addSurveyHandlers,
  onGetSurveys,
  onViewSurvey,
  onUpdateSurvey,
  onDeleteSurvey
}
