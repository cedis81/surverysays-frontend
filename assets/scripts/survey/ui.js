const store = require('../store.js')
const showAllSurveys = require('../templates/allsurvey.handlebars')
const showMySurveys = require('../templates/mysurvey.handlebars')

const createSurveySuccess = (createSurveyResponse) => {
  $('#survey-form').trigger('reset')
  $('#message').html('Survey successfully created.')
}

const getSurveysSuccess = (survey) => {
  store.survey = survey
  if (survey.surveys.length === 0) {
    zeroSurveys()
  } else {
    const showAllSurveys = showMySurveys({ surveys: survey.surveys })
    $('.get-all-surveys').html(showAllSurveys)
    $('.get-all-surveys').removeClass('hidden')
  }
}

const zeroSurveys = () => {
  $('.get-all-surveys').html('There are currently no surveys created. Please create one to get started.')
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
  failure
}
