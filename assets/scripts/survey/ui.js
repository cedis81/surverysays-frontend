const store = require('../store.js')
const showAllSurveys = require('../templates/allsurvey.handlebars')
const showMySurveys = require('../templates/mysurvey.handlebars')

const createSurveySuccess = (createSurveyResponse) => {
  $('#survey-form').trigger('reset')
  $('#message').html('Survey successfully created.')
  setTimeout(function () {
    $('#message').fadeOut()
  }, 1000)
}

const getSurveysSuccess = (survey) => {
  store.survey = survey
  const allSurveys = showAllSurveys({ surveys: survey.surveys })
  $('.get-all-surveys').html(allSurveys)
  $('.get-all-surveys').removeClass('hidden')
  $('#survey-form').trigger('reset')
  $('#message').show()
  $('#survey-count').html(`Total Surveys: ${store.survey.surveys.length}`)
}

const viewSurveySuccess = (survey) => {
  store.survey = survey
  const mySurveyArray = store.survey.surveys.filter(survey => survey.owner === store.user._id)
  const mySurveys = showMySurveys({ surveys: mySurveyArray })
  $('.get-my-surveys').html(mySurveys)
  $('.get-my-surveys').removeClass('hidden')
  $('.update-survey').click(() => {
    $('.update-' + event.target.attributes['data-id'].value).fadeToggle()
    $('.question-update-' + event.target.attributes['data-id'].value).val('')
  })
  $('#survey-form').trigger('reset')
  $('#survey-count').html(`You have ${mySurveyArray.length} surveys`)
}

const updateSurveySuccess = () => {
  $('#message').show()
  $('#message').html('Survey successfully updated.')
  setTimeout(function () {
    $('#message').fadeOut()
  }, 1000)
}

const failure = (failureResponse) => {
  // console.log('something went wrong')
}

module.exports = {
  createSurveySuccess,
  getSurveysSuccess,
  updateSurveySuccess,
  viewSurveySuccess,
  failure
}
