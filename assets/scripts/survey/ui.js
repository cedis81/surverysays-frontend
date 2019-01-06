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
    const allSurveys = showAllSurveys({ surveys: survey.surveys })
    $('.get-all-surveys').html(allSurveys)
    $('.get-all-surveys').removeClass('hidden')
  }
}
const viewSurveySuccess = (survey) => {
  store.survey = survey
  const mySurveys = showMySurveys({ surveys: survey.surveys })
  $('.get-my-surveys').html(mySurveys)
  $('.get-my-surveys').removeClass('hidden')
  $('.update-survey').click(() => {
    $('.update-' + event.target.attributes['data-id'].value).removeClass('hidden')
  })
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
  viewSurveySuccess,
  failure
}
