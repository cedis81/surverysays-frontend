const createSurveySuccess = (createSurveyResponse) => {
  $('#survey-form').trigger('reset')
  console.log('create survey success')
}

const getSurveysSuccess = (data) => {
  if (data.surveys.length === 0) {
    zeroSurveys()
  } else {
    console.log(data)
  }
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
