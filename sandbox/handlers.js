'use strict'

const log = require('loglevel')
const errorMissingSubscriptionKeyResponse = require('./responses/error-missing-subscription-key.json')
const errorResourceNotFoundResponse = require('./responses/error-resource-not-found.json')
const commonHealthQuestionsRootResponse = require('./responses/conditions-root-no-params.json')
const commonHealthQuestionsAccidentsFirstAidAndTreatmentsResponse = require('./responses/common-health-questions-accidents-first-aid-and-treatments-no-params.json')
const commonHealthQuestionsCaringCarersAndLongTermConditionsResponse = require('./responses/common-health-questions-caring-carers-and-long-term-conditions-no-params.json')
const commonHealthQuestionsChildrensHealthCanMyBabyGoSwimmingBeforeOrAfterVaccinationsResponse = require('./responses/common-health-questions-childrens-health-can-my-baby-go-swimming-before-or-after-vaccinations-no-params.json')

const conditionsRootNoParamsResponse = require('./responses/conditions-root-no-params.json')
const conditionsAcanthosisNigricansNoParamsResponse = require('./responses/conditions-acanthosis-nigricans-no-params.json')
const conditionsAchalasiaNoParamsResponse = require('./responses/conditions-achalasia-no-params.json')
const conditionsAcneResponse = require('./responses/conditions-acne-no-params.json')

const conditionsZikaNoParamsResponse = require('./responses/conditions-zika-no-params.json')
const liveWellRootResponse = require('./responses/live-well-root-no-params.json')
const medicinesRootResponse = require('./responses/medicines-root-no-params.json')
const mentalHealthRootResponse = require('./responses/mental-health-root-no-params.json')
const nhsServicesRootResponse = require('./responses/nhs-services-root-no-params.json')
const pregnancyRootResponse = require('./responses/pregnancy-root-no-params.json')

// ******************************************************************
// ** Root page
// ******************************************************************

// http://localhost:9000/
// https://api.nhs.uk/
// https://api.nhs.uk/content-api/
async function root(req, res, next) {
  res.status(404).json(errorResourceNotFoundResponse)
  res.end()
  next()
}

// ******************************************************************
// ** Common Health Questions pages
// ******************************************************************

// http://localhost:9000/common-health-questions/
// https://api.nhs.uk/common-health-questions/
// https://api.nhs.uk/content-api/common-health-questions/
async function commonHealthQuestionsRoot(req, res, next) {
  if (isSubscriptionKeyMissing(req)) {
    res.status(401).json(errorMissingSubscriptionKeyResponse)
  } else {
    res.status(200).json(commonHealthQuestionsRootResponse)
  }
  res.end()
  next()
}

// http://localhost:9000/common-health-questions/accidents-first-aid-and-treatments/
// https://api.nhs.uk/common-health-questions/accidents-first-aid-and-treatments/
// https://api.nhs.uk/content-api/common-health-questions/accidents-first-aid-and-treatments/
async function commonHealthQuestionsAccidentsFirstAidAndTreatments(req, res, next) {
  if (isSubscriptionKeyMissing(req)) {
    res.status(401).json(errorMissingSubscriptionKeyResponse)
  } else {
    res.status(200).json(commonHealthQuestionsAccidentsFirstAidAndTreatmentsResponse)
  }
  res.end()
  next()
}

// http://localhost:9000/common-health-questions/caring-carers-and-long-term-conditions/
// https://api.nhs.uk/common-health-questions/caring-carers-and-long-term-conditions/
// https://api.nhs.uk/content-api/common-health-questions/caring-carers-and-long-term-conditions/
async function commonHealthQuestionsCaringCarersAndLongTermConditions(req, res, next) {
  if (isSubscriptionKeyMissing(req)) {
    res.status(401).json(errorMissingSubscriptionKeyResponse)
  } else {
    res.status(200).json(commonHealthQuestionsCaringCarersAndLongTermConditionsResponse)
  }
  res.end()
  next()
}

// http://localhost:9000/common-health-questions/childrens-health/can-my-baby-go-swimming-before-or-after-vaccinations/
// https://api.nhs.uk/common-health-questions/childrens-health/can-my-baby-go-swimming-before-or-after-vaccinations/
// https://api.nhs.uk/content-api/common-health-questions/childrens-health/can-my-baby-go-swimming-before-or-after-vaccinations/
async function commonHealthQuestionsChildrensHealthCanMyBabyGoSwimmingBeforeOrAfterVaccinations(req, res, next) {
  if (isSubscriptionKeyMissing(req)) {
    res.status(401).json(errorMissingSubscriptionKeyResponse)
  } else {
    res.status(200).json(commonHealthQuestionsChildrensHealthCanMyBabyGoSwimmingBeforeOrAfterVaccinationsResponse)
  }
  res.end()
  next()
}

// ******************************************************************
// ** Conditions pages
// ******************************************************************

// http://localhost:9000/conditions/
// https://api.nhs.uk/conditions/
// https://api.nhs.uk/content-api/conditions/
async function conditionsRoot(req, res, next) {
  if (isSubscriptionKeyMissing(req)) {
    res.status(401).json(errorMissingSubscriptionKeyResponse)
  } else {
    res.status(200).json(conditionsRootNoParamsResponse)
  }
  res.end()
  next()
}

// http://localhost:9000/conditions/acanthosis-nigricans/
// https://api.nhs.uk/conditions/acanthosis-nigricans/
// https://api.nhs.uk/content-api/conditions/acanthosis-nigricans/
async function conditionsAcanthosisNigricans(req, res, next) {
  if (isSubscriptionKeyMissing(req)) {
    res.status(401).json(errorMissingSubscriptionKeyResponse)
  } else {
    res.status(200).json(conditionsAcanthosisNigricansNoParamsResponse)
  }

  res.end()
  next()
}

// http://localhost:9000/conditions/achalasia/
// https://api.nhs.uk/conditions/achalasia/
// https://api.nhs.uk/content-api/conditions/achalasia/
async function conditionsAchalasia(req, res, next) {
  if (isSubscriptionKeyMissing(req)) {
    res.status(401).json(errorMissingSubscriptionKeyResponse)
  } else {
    res.status(200).json(conditionsAchalasiaNoParamsResponse)
  }

  res.end()
  next()
}

// http://localhost:9000/conditions/acne/
// https://api.nhs.uk/conditions/acne/
// https://api.nhs.uk/content-api/conditions/acne/
async function conditionsAcne(req, res, next) {
  if (isSubscriptionKeyMissing(req)) {
    res.status(401).json(errorMissingSubscriptionKeyResponse)
  } else {
    res.status(200).json(conditionsAcneResponse)
  }

  res.end()
  next()
}

// http://localhost:9000/conditions/zika/
// https://api.nhs.uk/conditions/zika/
// https://api.nhs.uk/content-api/conditions/zika/
async function conditionsZika(req, res, next) {
  if (isSubscriptionKeyMissing(req)) {
    res.status(401).json(errorMissingSubscriptionKeyResponse)
  } else {
    res.status(200).json(conditionsZikaNoParamsResponse)
  }

  res.end()
  next()
}

// ******************************************************************
// ** Live Well pages
// ******************************************************************

// http://localhost:9000/live-well/
// https://api.nhs.uk/live-well/
// https://api.nhs.uk/content-api/live-well/
async function liveWellRoot(req, res, next) {
  if (isSubscriptionKeyMissing(req)) {
    res.status(401).json(errorMissingSubscriptionKeyResponse)
  } else {
    res.status(200).json(liveWellRootResponse)
  }

  res.end()
  next()
}

// ******************************************************************
// ** Medicines pages
// ******************************************************************

// http://localhost:9000/medicines/
// https://api.nhs.uk/medicines/
// https://api.nhs.uk/content-api/medicines/
async function medicinesRoot(req, res, next) {
  if (isSubscriptionKeyMissing(req)) {
    res.status(401).json(errorMissingSubscriptionKeyResponse)
  } else {
    res.status(200).json(medicinesRootResponse)
  }

  res.end()
  next()
}

// ******************************************************************
// ** Mental Health pages
// ******************************************************************

// http://localhost:9000/mental-health/
// https://api.nhs.uk/mental-health/
// https://api.nhs.uk/content-api/mental-health/
async function mentalHealthRoot(req, res, next) {
  if (isSubscriptionKeyMissing(req)) {
    res.status(401).json(errorMissingSubscriptionKeyResponse)
  } else {
    res.status(200).json(mentalHealthRootResponse)
  }

  res.end()
  next()
}

// ******************************************************************
// ** NHS Services pages
// ******************************************************************

// http://localhost:9000/nhs-services/
// https://api.nhs.uk/nhs-services/
// https://api.nhs.uk/content-api/nhs-services/
async function nhsServicesRoot(req, res, next) {
  if (isSubscriptionKeyMissing(req)) {
    res.status(401).json(errorMissingSubscriptionKeyResponse)
  } else {
    res.status(200).json(nhsServicesRootResponse)
  }

  res.end()
  next()
}

// ******************************************************************
// ** Pregnancy pages
// ******************************************************************

// http://localhost:9000/pregnancy/
// https://api.nhs.uk/pregnancy/
// https://api.nhs.uk/content-api/pregnancy/
async function pregnancyRoot(req, res, next) {
  if (isSubscriptionKeyMissing(req)) {
    res.status(401).json(errorMissingSubscriptionKeyResponse)
  } else {
    res.status(200).json(pregnancyRootResponse)
  }

  res.end()
  next()
}

// async function searchPostcodeOrPlace(req, res, next) {
//   const queryStringParameters = req?.query;
//   const search = (queryStringParameters?.["search"] || "").toLowerCase();
//   res.status(200).json(searchPostcodeOrPlaceResponse);
//   res.end();
//   next();
// }

async function status(req, res, next) {
  res.json({
    status: 'pass',
    ping: 'pong',
    service: req.app.locals.app_name,
    version: req.app.locals.version_info,
  })
  res.end()
  next()
}

// async function hello(req, res, next) {
//   res.json({ message: 'hello world' })
//   res.end()
//   next()
// }

function isSubscriptionKeyMissing(req) {
  return (req.method === 'GET' && !req.query['subscription-key']) || (req.method === 'POST' && !req.get('subscription-key'))
}

module.exports = {
  status,
  // hello,
  root,
  commonHealthQuestionsRoot,
  commonHealthQuestionsAccidentsFirstAidAndTreatments,
  commonHealthQuestionsCaringCarersAndLongTermConditions,
  commonHealthQuestionsChildrensHealthCanMyBabyGoSwimmingBeforeOrAfterVaccinations,
  conditionsRoot,
  conditionsAcanthosisNigricans,
  conditionsAchalasia,
  conditionsAcne,
  conditionsZika,
  liveWellRoot,
  medicinesRoot,
  mentalHealthRoot,
  nhsServicesRoot,
  pregnancyRoot,
}
