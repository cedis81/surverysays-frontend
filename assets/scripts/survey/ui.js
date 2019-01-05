const store = require('../store.js')
const showAllSurveys = require('../templates/allsurvey.handlebars')
const showMySurveys = require('../templates/mysurvey.handlebars')

const createSurveySuccess = (createSurveyResponse) => {
  $('#survey-form').trigger('reset')
  console.log('create survey success')
}

const getSurveysSuccess = (survey) => {
  store.survey = survey
  // if (survey.surveys.length === 0) {
  //   zeroSurveys()
  // } else {
  const showAllMySurveys = showMySurveys({ surveys: survey.surveys })
  $('.survey-box').html(showAllMySurveys)
  console.log('HI', survey)
  $('.survey-box').removeClass('hidden')
  // }
}

const zeroSurveys = () => {
  console.log('zero surveys')
}

const updateSurveySuccess = () => {
  console.log('survey update success')
}

const failure = (failureResponse) => {
  console.log('something went wrong')
}

module.exports = {
  createSurveySuccess,
  getSurveysSuccess,
  failure
}
