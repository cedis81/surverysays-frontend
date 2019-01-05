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
  console.log(survey)
  // }
}

const zeroSurveys = () => {
  console.log('zero surveys')
}

const failure = (failureResponse) => {
  console.log('something went wrong')
}

module.exports = {
  createSurveySuccess,
  getSurveysSuccess,
  failure
}
