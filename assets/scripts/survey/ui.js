const store = require('../store.js')
const showAllSurveys = require('../templates/allsurvey.handlebars')
const showMySurveys = require('../templates/mysurvey.handlebars')

const createSurveySuccess = (createSurveyResponse) => {
  $('#survey-form').trigger('reset')
  $('#message').html('Survey successfully created.')
}

const getSurveysSuccess = (survey) => {
  store.survey = survey
  const allSurveys = showAllSurveys({ surveys: survey.surveys })
  $('.get-all-surveys').html(allSurveys)
  $('.get-all-surveys').removeClass('hidden')
}

const viewSurveySuccess = (survey) => {
  store.survey = survey
  const mySurveyArray = store.survey.surveys.filter(survey => survey.owner === store.user._id)
  const mySurveys = showMySurveys({ surveys: mySurveyArray })
  $('.get-my-surveys').html(mySurveys)
  $('.get-my-surveys').removeClass('hidden')
  $('.update-survey').click(() => {
    $('.update-' + event.target.attributes['data-id'].value).fadeToggle()
    $('.title-update-' + event.target.attributes['data-id'].value).val('')
    $('.question-update-' + event.target.attributes['data-id'].value).val('')
  })
}

const updateSurveySuccess = () => {
  $('#message').html('Survey successfully updated.')
}

const failure = (failureResponse) => {
  console.log('something went wrong')
}

module.exports = {
  createSurveySuccess,
  getSurveysSuccess,
  updateSurveySuccess,
  viewSurveySuccess,
  failure
}
