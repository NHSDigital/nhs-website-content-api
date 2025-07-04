'use strict'

const log = require('loglevel')
// const errorMissingSubscriptionKeyResponse = require('./responses/error-missing-subscription-key.json')
const errorResourceNotFoundResponse = require('./responses/error-resource-not-found.json')
const errorSandboxResponseNotFound = require('./responses/error-sandbox-response-not-found.json')

// Manifest pages - Responses
const manifestPagesRootNoParamsResponse = require('./responses/manifest-pages-root-no-params.json')
const manifestPagesRootPage1Response = require('./responses/manifest-pages-root-page-1.json')
const manifestPagesRootPage2Response = require('./responses/manifest-pages-root-page-2.json')

// Conditions - Responses
const conditionsRootNoParamsResponse = require('./responses/conditions-root-no-params.json')
const conditionsAcanthosisNigricansResponse = require('./responses/conditions-acanthosis-nigricans-no-params.json')
const conditionsAchalasiaResponse = require('./responses/conditions-achalasia-no-params.json')
const conditionsAcneNoParamsResponse = require('./responses/conditions-acne-no-params.json')
const conditionsAcneModulesTrueResponse = require('./responses/conditions-acne-modules-true.json')
const conditionsAngiographyResponse = require('./responses/conditions-angiography-no-params.json')
const conditionsCancerResponse = require('./responses/conditions-cancer-no-params.json')
const conditionsRootCategoryAGenreConditionResponse = require('./responses/conditions-root-category-a-genre-condition.json')
const conditionsRootCategoryAGenreHubResponse = require('./responses/conditions-root-category-a-genre-hub.json')
const conditionsRootCategoryAResponse = require('./responses/conditions-root-category-a.json')
const conditionsRootCategoryBResponse = require('./responses/conditions-root-category-b.json')
const conditionsRootCategoryZResponse = require('./responses/conditions-root-category-z.json')
const conditionsRootPage1Response = require('./responses/conditions-root-page-1.json')
const conditionsRootPage2Response = require('./responses/conditions-root-page-2.json')
const conditionsRootPage29Response = require('./responses/conditions-root-page-29.json')
const conditionsWildcardResponseNoParams = require('./responses/conditions-acne-no-params.json')
const conditionsWildcardModulesTrueResponse = require('./responses/conditions-acne-modules-true.json')
const conditionsZikaResponse = require('./responses/conditions-zika-no-params.json')

// Live Well - Responses
const liveWellRootResponse = require('./responses/live-well-root-no-params.json')
const liveWellAlcoholAdviceAlcoholSupportResponse = require('./responses/live-well-alcohol-advice-alcohol-support-no-params.json')
const liveWellExerciseResponse = require('./responses/live-well-exercise-no-params.json')
const liveWellHealthyWeightResponse = require('./responses/live-well-healthy-weight-no-params.json')

// Medicines - Responses
const medicinesRootNoParamsResponse = require('./responses/medicines-root-no-params.json')
const medicinesAciclovirResponse = require('./responses/medicines-aciclovir-no-params.json')
const medicinesAcrivastineNoParamsResponse = require('./responses/medicines-acrivastine-no-params.json')
const medicinesAcrivastineModulesTrueResponse = require('./responses/medicines-acrivastine-modules-true.json')
const medicinesRootCategoryAResponse = require('./responses/medicines-root-category-a.json')
const medicinesRootCategoryBResponse = require('./responses/medicines-root-category-b.json')
const medicinesRootCategoryZResponse = require('./responses/medicines-root-category-z.json')
const medicinesRootPage1Response = require('./responses/medicines-root-page-1.json')
const medicinesRootPage11Response = require('./responses/medicines-root-page-11.json')
const medicinesWildcardNoParamsResponse = require('./responses/medicines-acrivastine-no-params.json')
const medicinesWildcardModulesTrueResponse = require('./responses/medicines-acrivastine-modules-true.json')
const medicinesZopicloneResponse = require('./responses/medicines-zopiclone-no-params.json')

// Mental health - Responses
const mentalHealthRootResponse = require('./responses/mental-health-root-no-params.json')
const mentalHealthAdviceForLifeSituationsAndEventsSupportForWorkplaceBullyingResponse = require('./responses/mental-health-advice-for-life-situations-and-events-support-for-workplace-bullying-no-params.json')
const mentalHealthConditionsResponse = require('./responses/mental-health-conditions-no-params.json')
const mentalHealthFeelingsSymptomsBehavioursResponse = require('./responses/mental-health-feelings-symptoms-behaviours-no-params.json')

// NHS services - Responses
const nhsServicesRootResponse = require('./responses/nhs-services-root-no-params.json')
const nhsServicesGpsHowToRegisterWithAGpSurgeryResponse = require('./responses/nhs-services-gps-how-to-register-with-a-gp-surgery-no-params.json')
const nhsServicesGpsResponse = require('./responses/nhs-services-gps-no-params.json')
const nhsServicesPrescriptionsAndPharmaciesResponse = require('./responses/nhs-services-prescriptions-and-pharmacies-no-params.json')

// Pregnancy - Responses
const pregnancyRootResponse = require('./responses/pregnancy-root-no-params.json')
const pregnancyFindingOutFindingOutYouArePregnantResponse = require('./responses/pregnancy-finding-out-finding-out-you-are-pregnant-no-params.json')
const pregnancyHavingABabyIfYouAreLgbtPlusResponse = require('./responses/pregnancy-having-a-baby-if-you-are-lgbt-plus-no-params.json')
const pregnancyTryingForABabyResponse = require('./responses/pregnancy-trying-for-a-baby-no-params.json')

// Contraception - Responses
const contraceptionRootResponse = require('./responses/contraception-root-no-params.json')
const contraceptionMethodsOfContraceptionResponse = require('./responses/contraception-methods-of-contraception-no-params.json')
const contraceptionWhatIsTheCombinedPillResponse = require('./responses/contraception-what-is-the-combined-pill-no-params.json')
const contraceptionCondomsResponse = require('./responses/contraception-condoms-no-params.json')

// Vaccinations - Responses
const vaccinationsRootResponse = require('./responses/vaccinations-root-no-params.json')
const vaccinationsNhsVaccinationsAndWhenToHaveThemResponse = require('./responses/vaccinations-nhs-vaccinations-and-when-to-have-them-no-params.json')
const vaccinations6in1VaccineResponse = require('./responses/vaccinations-6-in-1-vaccine-no-params.json')
const vaccinationsAvailableTravelVaccinesResponse = require('./responses/vaccinations-available-travel-vaccines-no-params.json')

// Women's health - Responses
const womensHealthRootResponse = require('./responses/womens-health-root-no-params.json')
const womensHealthPeriodsResponse = require('./responses/womens-health-periods-no-params.json')
const womensHealthAnaemiaResponse = require('./responses/womens-health-anaemia-no-params.json')

// Symptoms - Responses
const symptomsRootNoParamsResponse = require('./responses/symptoms-root-no-params.json')
const symptomsRootCategoryAResponse = require('./responses/symptoms-root-category-a.json')
const symptomsRootCategoryBResponse = require('./responses/symptoms-root-category-b.json')
const symptomsRootPage1Response = require('./responses/symptoms-root-page-1.json')
const symptomsRootPage6Response = require('./responses/symptoms-root-page-6.json')

// Tests and treatments - Responses
const testsAndTreatmentsRootNoParamsResponse = require('./responses/tests-and-treatments-root-no-params.json')
const testsAndTreatmentsRootCategoryAResponse = require('./responses/tests-and-treatments-root-category-a.json')
const testsAndTreatmentsRootCategoryBResponse = require('./responses/tests-and-treatments-root-category-b.json')
const testsAndTreatmentsRootPage1Response = require('./responses/tests-and-treatments-root-page-1.json')
const testsAndTreatmentsRootPage7Response = require('./responses/tests-and-treatments-root-page-7.json')

// Health A to Z - Responses
const healthAToZRootNoParamsResponse = require('./responses/health-a-to-z-root-no-params.json')
const healthAToZConditionsNoParamsResponse = require('./responses/health-a-to-z-conditions-no-params.json')

// Baby - Responses
const babyRootNoParamsResponse = require('./responses/baby-root-no-params.json')
const babyFirstAidAndSafetyNoParamsResponse = require('./responses/baby-first-aid-and-safety-no-params.json')
const babySupportAndServicesNoParamsResponse = require('./responses/baby-support-and-services-no-params.json')
const babyCaringForANewbornNoParamsResponse = require('./responses/baby-caring-for-a-newborn-no-params.json')

// Social care and support - Responses
const socialCareAndSupportRootNoParamsResponse = require('./responses/social-care-and-support-root-no-params.json')
const socialCareAndSupportIntroductionToCareAndSupportNoParamsResponse = require('./responses/social-care-and-support-introduction-to-care-and-support-no-params.json')
const socialCareAndSupportMoneyWorkAndBenefitsNoParamsResponse = require('./responses/social-care-and-support-money-work-and-benefits-no-params.json')
const socialCareAndSupportCareAfterAHospitalStayNoParamsResponse = require('./responses/social-care-and-support-care-after-a-hospital-stay-no-params.json')

// ******************************************************************
// ** Root page
// ******************************************************************

// Live website URL
// https://www.nhs.uk/
// This sandbox on localhost
// http://localhost:9000/
// API on Azure API Management
// https://api.nhs.uk/
// Wagtail (Python) Application (no auth key required)
// https://www.nhs.uk/content-api/
// Apigee Sandbox environment (no auth key required)
// https://sandbox.api.service.nhs.uk/nhs-website-content/
// Apigee Integration environment ('apikey' required in Header)
// https://int.api.service.nhs.uk/nhs-website-content/
// Apigee Production environment ('apikey' required in Header)
// https://api.service.nhs.uk/nhs-website-content/
async function root(req, res, next) {
  res.status(404).json(errorResourceNotFoundResponse)
  res.end()
  next()
}

// ******************************************************************
// ** Manifest pages
// ******************************************************************

// Live website URL
// https://www.nhs.uk/manifest/pages/
// This sandbox on localhost
// http://localhost:9000/manifest/pages/
// API on Azure API Management
// https://api.nhs.uk/manifest/pages/
// Wagtail (Python) Application (no auth key required)
// https://www.nhs.uk/content-api/manifest/pages/
// Apigee Sandbox environment (no auth key required)
// https://sandbox.api.service.nhs.uk/nhs-website-content/manifest/pages/
// Apigee Integration environment ('apikey' required in Header)
// https://int.api.service.nhs.uk/nhs-website-content/manifest/pages/
// Apigee Production environment ('apikey' required in Header)
// https://api.service.nhs.uk/nhs-website-content/manifest/pages/
async function manifestPagesRoot(req, res, next) {
  let responseJson
  if (req.query.page) {
    if (req.query.page === '1') {
      // http://localhost:9000/manifest/pages/?page=1
      responseJson = manifestPagesRootPage1Response
    } else if (req.query.page === '2') {
      // http://localhost:9000/manifest/pages/?page=2
      responseJson = manifestPagesRootPage2Response
    } else {
      responseJson = errorSandboxResponseNotFound
    }
  } else {
    responseJson = manifestPagesRootNoParamsResponse
  }
  res.status(200).json(responseJson)

  res.end()
  next()
}

// ******************************************************************
// ** Conditions pages
// ******************************************************************

// Live website URL
// https://www.nhs.uk/conditions/
// This sandbox on localhost
// http://localhost:9000/conditions/
// API on Azure API Management
// https://api.nhs.uk/conditions/
// Wagtail (Python) Application (no auth key required)
// https://www.nhs.uk/content-api/conditions/
// Apigee Sandbox environment (no auth key required)
// https://sandbox.api.service.nhs.uk/nhs-website-content/conditions/
// Apigee Integration environment ('apikey' required in Header)
// https://int.api.service.nhs.uk/nhs-website-content/conditions/
// Apigee Production environment ('apikey' required in Header)
// https://api.service.nhs.uk/nhs-website-content/conditions/
async function conditionsRoot(req, res, next) {
  let responseJson
  if (req.query.category && req.query.genre) {
    if (req.query.category.toLowerCase() === 'a' && req.query.genre.toLowerCase() === 'condition') {
      // http://localhost:9000/conditions/?category=a&genre=condition
      responseJson = conditionsRootCategoryAGenreConditionResponse
    } else if (req.query.category.toLowerCase() === 'a' && req.query.genre.toLowerCase() === 'hub') {
      // http://localhost:9000/conditions/?category=a&genre=hub
      responseJson = conditionsRootCategoryAGenreHubResponse
    } else {
      responseJson = errorSandboxResponseNotFound
    }
  } else if (req.query.category) {
    if (req.query.category.toLowerCase() === 'a') {
      // http://localhost:9000/conditions/?category=a
      responseJson = conditionsRootCategoryAResponse
    } else if (req.query.category.toLowerCase() === 'b') {
      // http://localhost:9000/conditions/?category=b
      responseJson = conditionsRootCategoryBResponse
    } else if (req.query.category.toLowerCase() === 'z') {
      // http://localhost:9000/conditions/?category=z
      responseJson = conditionsRootCategoryZResponse
    } else {
      responseJson = errorSandboxResponseNotFound
    }
  } else if (req.query.page) {
    if (req.query.page === '1') {
      // http://localhost:9000/conditions/?page=1
      responseJson = conditionsRootPage1Response
    } else if (req.query.page === '2') {
      // http://localhost:9000/conditions/?page=2
      responseJson = conditionsRootPage2Response
    } else if (req.query.page === '29') {
      // http://localhost:9000/conditions/?page=29
      responseJson = conditionsRootPage29Response
    } else {
      responseJson = errorSandboxResponseNotFound
    }
  } else {
    responseJson = conditionsRootNoParamsResponse
  }
  res.status(200).json(responseJson)

  res.end()
  next()
}

// Live website URL
// https://www.nhs.uk/conditions/acanthosis-nigricans/
// This sandbox on localhost
// http://localhost:9000/conditions/acanthosis-nigricans/
// API on Azure API Management
// https://api.nhs.uk/conditions/acanthosis-nigricans/
// Wagtail (Python) Application (no auth key required)
// https://www.nhs.uk/content-api/conditions/acanthosis-nigricans/
// Apigee Sandbox environment (no auth key required)
// https://sandbox.api.service.nhs.uk/nhs-website-content/conditions/acanthosis-nigricans/
// Apigee Integration environment ('apikey' required in Header)
// https://int.api.service.nhs.uk/nhs-website-content/conditions/acanthosis-nigricans/
// Apigee Production environment ('apikey' required in Header)
// https://api.service.nhs.uk/nhs-website-content/conditions/acanthosis-nigricans/
async function conditionsAcanthosisNigricans(req, res, next) {
  res.status(200).json(conditionsAcanthosisNigricansResponse)
  res.end()
  next()
}

// Live website URL
// https://www.nhs.uk/conditions/achalasia/
// This sandbox on localhost
// http://localhost:9000/conditions/achalasia/
// API on Azure API Management
// https://api.nhs.uk/conditions/achalasia/
// Wagtail (Python) Application (no auth key required)
// https://www.nhs.uk/content-api/conditions/acanthosis-nigricans/
// Apigee Sandbox environment (no auth key required)
// https://sandbox.api.service.nhs.uk/nhs-website-content/conditions/acanthosis-nigricans/
// Apigee Integration environment ('apikey' required in Header)
// https://int.api.service.nhs.uk/nhs-website-content/conditions/acanthosis-nigricans/
// Apigee Production environment ('apikey' required in Header)
// https://api.service.nhs.uk/nhs-website-content/conditions/acanthosis-nigricans/
async function conditionsAchalasia(req, res, next) {
  res.status(200).json(conditionsAchalasiaResponse)
  res.end()
  next()
}

// Live website URL
// https://www.nhs.uk/conditions/acne/

// Modules: false
// This sandbox on localhost
// http://localhost:9000/conditions/acne/
// API on Azure API Management
// https://api.nhs.uk/conditions/acne/
// Wagtail (Python) Application (no auth key required)
// https://www.nhs.uk/content-api/conditions/acne/
// Apigee Sandbox environment (no auth key required)
// https://sandbox.api.service.nhs.uk/nhs-website-content/conditions/acne/
// Apigee Integration environment ('apikey' required in Header)
// https://int.api.service.nhs.uk/nhs-website-content/conditions/acne/
// Apigee Production environment ('apikey' required in Header)
// https://api.service.nhs.uk/nhs-website-content/conditions/acne/

// Modules: true
// This sandbox on localhost
// http://localhost:9000/conditions/acne/?modules=true
// API on Azure API Management
// https://api.nhs.uk/conditions/acne/?modules=true
// Wagtail (Python) Application (no auth key required)
// https://www.nhs.uk/content-api/conditions/acne/?modules=true
// Apigee Sandbox environment (no auth key required)
// https://sandbox.api.service.nhs.uk/nhs-website-content/conditions/acne/?modules=true
// Apigee Integration environment ('apikey' required in Header)
// https://int.api.service.nhs.uk/nhs-website-content/conditions/acne/?modules=true
// Apigee Production environment ('apikey' required in Header)
// https://api.service.nhs.uk/nhs-website-content/conditions/acne/?modules=true
async function conditionsAcne(req, res, next) {
  if (req.query.modules === undefined) {
    res.status(200).json(conditionsAcneNoParamsResponse)
  } else if (req.query.modules.toLowerCase() === 'false') {
    res.status(200).json(conditionsAcneNoParamsResponse)
  } else if (req.query.modules.toLowerCase() === 'true') {
    res.status(200).json(conditionsAcneModulesTrueResponse)
  }
  res.end()
  next()
}

// Modules: false
// This sandbox on localhost
// http://localhost:9000/conditions/*
// Apigee Sandbox environment (no auth key required)
// https://sandbox.api.service.nhs.uk/nhs-website-content/conditions/*

// Modules: true
// This sandbox on localhost
// http://localhost:9000/conditions/*?modules=true
// Apigee Sandbox environment (no auth key required)
// https://sandbox.api.service.nhs.uk/nhs-website-content/conditions/*?modules=true
async function conditionsWildcard(req, res, next) {
  if (req.query.modules === undefined) {
    res.status(200).json(conditionsWildcardResponseNoParams)
  } else if (req.query.modules.toLowerCase() === 'false') {
    res.status(200).json(conditionsWildcardResponseNoParams)
  } else if (req.query.modules.toLowerCase() === 'true') {
    res.status(200).json(conditionsWildcardModulesTrueResponse)
  }
  res.end()
  next()
}

// Live website URL
// https://www.nhs.uk/conditions/angiography/
// This sandbox on localhost
// http://localhost:9000/conditions/angiography/
// API on Azure API Management
// https://api.nhs.uk/conditions/angiography/
// Wagtail (Python) Application (no auth key required)
// https://www.nhs.uk/content-api/conditions/angiography/
// Apigee Sandbox environment (no auth key required)
// https://sandbox.api.service.nhs.uk/nhs-website-content/conditions/angiography/
// Apigee Integration environment ('apikey' required in Header)
// https://int.api.service.nhs.uk/nhs-website-content/conditions/angiography/
// Apigee Production environment ('apikey' required in Header)
// https://api.service.nhs.uk/nhs-website-content/conditions/angiography/
async function conditionsAngiography(req, res, next) {
  res.status(200).json(conditionsAngiographyResponse)
  res.end()
  next()
}

// Live website URL
// https://www.nhs.uk/conditions/cancer/
// This sandbox on localhost
// http://localhost:9000/conditions/cancer/
// API on Azure API Management
// https://api.nhs.uk/conditions/cancer/
// Wagtail (Python) Application (no auth key required)
// https://www.nhs.uk/content-api/conditions/cancer/
// Apigee Sandbox environment (no auth key required)
// https://sandbox.api.service.nhs.uk/nhs-website-content/conditions/cancer/
// Apigee Integration environment ('apikey' required in Header)
// https://int.api.service.nhs.uk/nhs-website-content/conditions/cancer/
// Apigee Production environment ('apikey' required in Header)
// https://api.service.nhs.uk/nhs-website-content/conditions/cancer/
async function conditionsCancer(req, res, next) {
  res.status(200).json(conditionsCancerResponse)
  res.end()
  next()
}

// Live website URL
// https://www.nhs.uk/conditions/zika/
// This sandbox on localhost
// http://localhost:9000/conditions/zika/
// API on Azure API Management
// https://api.nhs.uk/conditions/zika/
// Wagtail (Python) Application (no auth key required)
// https://www.nhs.uk/content-api/conditions/zika/
// Apigee Sandbox environment (no auth key required)
// https://sandbox.api.service.nhs.uk/nhs-website-content/conditions/zika/
// Apigee Integration environment ('apikey' required in Header)
// https://int.api.service.nhs.uk/nhs-website-content/conditions/zika/
// Apigee Production environment ('apikey' required in Header)
// https://api.service.nhs.uk/nhs-website-content/conditions/zika/
async function conditionsZika(req, res, next) {
  res.status(200).json(conditionsZikaResponse)
  res.end()
  next()
}

// ******************************************************************
// ** Live Well pages
// ******************************************************************

// Live website URL
// https://www.nhs.uk/live-well/
// This sandbox on localhost
// http://localhost:9000/live-well/
// API on Azure API Management
// https://api.nhs.uk/live-well/
// Wagtail (Python) Application (no auth key required)
// https://www.nhs.uk/content-api/live-well/
// Apigee Sandbox environment (no auth key required)
// https://sandbox.api.service.nhs.uk/nhs-website-content/content-api/live-well/
// Apigee Integration environment ('apikey' required in Header)
// https://int.api.service.nhs.uk/nhs-website-content/content-api/live-well/
// Apigee Production environment ('apikey' required in Header)
// https://api.service.nhs.uk/nhs-website-content/content-api/live-well/
async function liveWellRoot(req, res, next) {
  res.status(200).json(liveWellRootResponse)
  res.end()
  next()
}

// Live website URL
// https://www.nhs.uk/live-well/alcohol-advice/alcohol-support/
// This sandbox on localhost
// http://localhost:9000/live-well/alcohol-advice/alcohol-support/
// API on Azure API Management
// https://api.nhs.uk/live-well/alcohol-advice/alcohol-support/
// Wagtail (Python) Application (no auth key required)
// https://www.nhs.uk/content-api/live-well/alcohol-advice/alcohol-support/
// Apigee Sandbox environment (no auth key required)
// https://sandbox.api.service.nhs.uk/nhs-website-content/live-well/alcohol-advice/alcohol-support/
// Apigee Integration environment ('apikey' required in Header)
// https://int.api.service.nhs.uk/nhs-website-content/live-well/alcohol-advice/alcohol-support/
// Apigee Production environment ('apikey' required in Header)
// https://api.service.nhs.uk/nhs-website-content/live-well/alcohol-advice/alcohol-support/
async function liveWellAlcoholAdviceAlcoholSupport(req, res, next) {
  res.status(200).json(liveWellAlcoholAdviceAlcoholSupportResponse)
  res.end()
  next()
}

// Live website URL
// https://www.nhs.uk/live-well/exercise/
// This sandbox on localhost
// http://localhost:9000/live-well/exercise/
// API on Azure API Management
// https://api.nhs.uk/live-well/exercise/
// Wagtail (Python) Application (no auth key required)
// https://www.nhs.uk/content-api/live-well/exercise/
// Apigee Sandbox environment (no auth key required)
// https://sandbox.api.service.nhs.uk/nhs-website-content/live-well/exercise/
// Apigee Integration environment ('apikey' required in Header)
// https://int.api.service.nhs.uk/nhs-website-content/live-well/exercise/
// Apigee Production environment ('apikey' required in Header)
// https://api.service.nhs.uk/nhs-website-content/live-well/exercise/
async function liveWellExercise(req, res, next) {
  res.status(200).json(liveWellExerciseResponse)
  res.end()
  next()
}

// Live website URL
// https://www.nhs.uk/live-well/healthy-weight/
// This sandbox on localhost
// http://localhost:9000/live-well/healthy-weight/
// API on Azure API Management
// https://api.nhs.uk/live-well/healthy-weight/
// Wagtail (Python) Application (no auth key required)
// https://www.nhs.uk/content-api/live-well/healthy-weight/
// Apigee Sandbox environment (no auth key required)
// https://sandbox.api.service.nhs.uk/nhs-website-content/live-well/healthy-weight/
// Apigee Integration environment ('apikey' required in Header)
// https://int.api.service.nhs.uk/nhs-website-content/live-well/healthy-weight/
// Apigee Production environment ('apikey' required in Header)
// https://api.service.nhs.uk/nhs-website-content/live-well/healthy-weight/
async function liveWellHealthyWeight(req, res, next) {
  res.status(200).json(liveWellHealthyWeightResponse)
  res.end()
  next()
}

// ******************************************************************
// ** Medicines pages
// ******************************************************************

// Live website URL
// https://www.nhs.uk/medicines/
// This sandbox on localhost
// http://localhost:9000/medicines/
// API on Azure API Management
// https://api.nhs.uk/medicines/
// Wagtail (Python) Application (no auth key required)
// https://www.nhs.uk/content-api/medicines/
// Apigee Sandbox environment (no auth key required)
// https://sandbox.api.service.nhs.uk/nhs-website-content/medicines/
// Apigee Integration environment ('apikey' required in Header)
// https://int.api.service.nhs.uk/nhs-website-content/medicines/
// Apigee Production environment ('apikey' required in Header)
// https://api.service.nhs.uk/nhs-website-content/medicines/
async function medicinesRoot(req, res, next) {
  let responseJson
  if (req.query.category) {
    if (req.query.category.toLowerCase() === 'a') {
      // http://localhost:9000/medicines/?category=a
      responseJson = medicinesRootCategoryAResponse
    } else if (req.query.category.toLowerCase() === 'b') {
      // http://localhost:9000/medicines/?category=b
      responseJson = medicinesRootCategoryBResponse
    } else if (req.query.category.toLowerCase() === 'z') {
      // http://localhost:9000/medicines/?category=z
      responseJson = medicinesRootCategoryZResponse
    } else {
      responseJson = errorSandboxResponseNotFound
    }
  } else if (req.query.page) {
    if (req.query.page === '1') {
      // http://localhost:9000/medicines/?page=1
      responseJson = medicinesRootPage1Response
    } else if (req.query.page === '11') {
      // http://localhost:9000/medicines/?page=11
      responseJson = medicinesRootPage11Response
    } else {
      responseJson = errorSandboxResponseNotFound
    }
  } else {
    // http://localhost:9000/medicines/
    responseJson = medicinesRootNoParamsResponse
  }
  res.status(200).json(responseJson)

  res.end()
  next()
}

// Live website URL
// https://www.nhs.uk/medicines/aciclovir/
// This sandbox on localhost
// http://localhost:9000/medicines/aciclovir/
// API on Azure API Management
// https://api.nhs.uk/medicines/aciclovir/
// Wagtail (Python) Application (no auth key required)
// https://www.nhs.uk/content-api/medicines/aciclovir/
// Apigee Sandbox environment (no auth key required)
// https://sandbox.api.service.nhs.uk/nhs-website-content/medicines/aciclovir/
// Apigee Integration environment ('apikey' required in Header)
// https://int.api.service.nhs.uk/nhs-website-content/medicines/aciclovir/
// Apigee Production environment ('apikey' required in Header)
// https://api.service.nhs.uk/nhs-website-content/medicines/aciclovir/
async function medicinesAciclovir(req, res, next) {
  res.status(200).json(medicinesAciclovirResponse)
  res.end()
  next()
}

// Live website URL
// https://www.nhs.uk/medicines/acrivastine/

// Modules: false
// This sandbox on localhost
// http://localhost:9000/medicines/acrivastine/
// API on Azure API Management
// https://api.nhs.uk/medicines/acrivastine/
// Wagtail (Python) Application (no auth key required)
// https://www.nhs.uk/content-api/medicines/acrivastine/
// Apigee Sandbox environment (no auth key required)
// https://sandbox.api.service.nhs.uk/nhs-website-content/medicines/acrivastine/
// Apigee Integration environment ('apikey' required in Header)
// https://int.api.service.nhs.uk/nhs-website-content/medicines/acrivastine/
// Apigee Production environment ('apikey' required in Header)
// https://api.service.nhs.uk/nhs-website-content/medicines/acrivastine/

// Modules: true
// This sandbox on localhost
// http://localhost:9000/medicines/acrivastine/?modules=true
// API on Azure API Management
// https://api.nhs.uk/medicines/acrivastine/?modules=true
// Wagtail (Python) Application (no auth key required)
// https://www.nhs.uk/content-api/medicines/acrivastine/?modules=true
// Apigee Sandbox environment (no auth key required)
// https://sandbox.api.service.nhs.uk/nhs-website-content/medicines/acrivastine/?modules=true
// Apigee Integration environment ('apikey' required in Header)
// https://int.api.service.nhs.uk/nhs-website-content/medicines/acrivastine/?modules=true
// Apigee Production environment ('apikey' required in Header)
// https://api.service.nhs.uk/nhs-website-content/medicines/acrivastine/?modules=true
async function medicinesAcrivastine(req, res, next) {
  if (req.query.modules === undefined) {
    res.status(200).json(medicinesAcrivastineNoParamsResponse)
  } else if (req.query.modules.toLowerCase() === 'false') {
    res.status(200).json(medicinesAcrivastineNoParamsResponse)
  } else if (req.query.modules.toLowerCase() === 'true') {
    res.status(200).json(medicinesAcrivastineModulesTrueResponse)
  }
  res.end()
  next()
}

// Modules: false
// This sandbox on localhost
// http://localhost:9000/medicines/*
// Apigee Sandbox environment (no auth key required)
// https://sandbox.api.service.nhs.uk/nhs-website-content/medicines/*

// Modules: true
// This sandbox on localhost
// http://localhost:9000/medicines/*?modules=true
// Apigee Sandbox environment (no auth key required)
// https://sandbox.api.service.nhs.uk/nhs-website-content/medicines/*?modules=true
async function medicinesWildcard(req, res, next) {
  if (req.query.modules === undefined) {
    res.status(200).json(medicinesWildcardNoParamsResponse)
  } else if (req.query.modules.toLowerCase() === 'false') {
    res.status(200).json(medicinesWildcardNoParamsResponse)
  } else if (req.query.modules.toLowerCase() === 'true') {
    res.status(200).json(medicinesWildcardModulesTrueResponse)
  }
  res.end()
  next()
}

// Live website URL
// https://www.nhs.uk/medicines/zopiclone/
// This sandbox on localhost
// http://localhost:9000/medicines/zopiclone/
// API on Azure API Management
// https://api.nhs.uk/medicines/zopiclone/
// Wagtail (Python) Application (no auth key required)
// https://www.nhs.uk/content-api/medicines/zopiclone/
// Apigee Sandbox environment (no auth key required)
// https://sandbox.api.service.nhs.uk/nhs-website-content/medicines/zopiclone/
// Apigee Integration environment ('apikey' required in Header)
// https://int.api.service.nhs.uk/nhs-website-content/medicines/zopiclone/
// Apigee Production environment ('apikey' required in Header)
// https://api.service.nhs.uk/nhs-website-content/medicines/zopiclone/
async function medicinesZopiclone(req, res, next) {
  res.status(200).json(medicinesZopicloneResponse)
  res.end()
  next()
}

// ******************************************************************
// ** Mental Health pages
// ******************************************************************

// Live website URL
// https://www.nhs.uk/mental-health/
// This sandbox on localhost
// http://localhost:9000/mental-health/
// API on Azure API Management
// https://api.nhs.uk/mental-health/
// Wagtail (Python) Application (no auth key required)
// https://www.nhs.uk/content-api/mental-health/
// Apigee Sandbox environment (no auth key required)
// https://sandbox.api.service.nhs.uk/nhs-website-content/mental-health/
// Apigee Integration environment ('apikey' required in Header)
// https://int.api.service.nhs.uk/nhs-website-content/mental-health/
// Apigee Production environment ('apikey' required in Header)
// https://api.service.nhs.uk/nhs-website-content/mental-health/
async function mentalHealthRoot(req, res, next) {
  res.status(200).json(mentalHealthRootResponse)
  res.end()
  next()
}

// Live website URL
// https://www.nhs.uk/mental-health/advice-for-life-situations-and-events/support-for-workplace-bullying/
// This sandbox on localhost
// http://localhost:9000/mental-health/advice-for-life-situations-and-events/support-for-workplace-bullying/
// API on Azure API Management
// https://api.nhs.uk/mental-health/advice-for-life-situations-and-events/support-for-workplace-bullying/
// Wagtail (Python) Application (no auth key required)
// https://www.nhs.uk/content-api/mental-health/advice-for-life-situations-and-events/support-for-workplace-bullying/
// Apigee Sandbox environment (no auth key required)
// https://sandbox.api.service.nhs.uk/nhs-website-content/mental-health/advice-for-life-situations-and-events/support-for-workplace-bullying/
// Apigee Integration environment ('apikey' required in Header)
// https://int.api.service.nhs.uk/nhs-website-content/mental-health/advice-for-life-situations-and-events/support-for-workplace-bullying/
// Apigee Production environment ('apikey' required in Header)
// https://api.service.nhs.uk/nhs-website-content/mental-health/advice-for-life-situations-and-events/support-for-workplace-bullying/
async function mentalHealthAdviceForLifeSituationsAndEventsSupportForWorkplaceBullying(req, res, next) {
  res.status(200).json(mentalHealthAdviceForLifeSituationsAndEventsSupportForWorkplaceBullyingResponse)
  res.end()
  next()
}

// Live website URL
// https://www.nhs.uk/mental-health/conditions/
// This sandbox on localhost
// http://localhost:9000/mental-health/conditions/
// API on Azure API Management
// https://api.nhs.uk/mental-health/conditions/
// Wagtail (Python) Application (no auth key required)
// https://www.nhs.uk/content-api/mental-health/conditions/
// Apigee Sandbox environment (no auth key required)
// https://sandbox.api.service.nhs.uk/nhs-website-content/mental-health/conditions/
// Apigee Integration environment ('apikey' required in Header)
// https://int.api.service.nhs.uk/nhs-website-content/mental-health/conditions/
// Apigee Production environment ('apikey' required in Header)
// https://api.service.nhs.uk/nhs-website-content/mental-health/conditions/
async function mentalHealthConditions(req, res, next) {
  res.status(200).json(mentalHealthConditionsResponse)
  res.end()
  next()
}

// Live website URL
// https://www.nhs.uk/mental-health/feelings-symptoms-behaviours/
// This sandbox on localhost
// http://localhost:9000/mental-health/feelings-symptoms-behaviours/
// API on Azure API Management
// https://api.nhs.uk/mental-health/feelings-symptoms-behaviours/
// Wagtail (Python) Application (no auth key required)
// https://www.nhs.uk/content-api/mental-health/feelings-symptoms-behaviours/
// Apigee Sandbox environment (no auth key required)
// https://sandbox.api.service.nhs.uk/nhs-website-content/mental-health/feelings-symptoms-behaviours/
// Apigee Integration environment ('apikey' required in Header)
// https://int.api.service.nhs.uk/nhs-website-content/mental-health/feelings-symptoms-behaviours/
// Apigee Production environment ('apikey' required in Header)
// https://api.service.nhs.uk/nhs-website-content/mental-health/feelings-symptoms-behaviours/
async function mentalHealthFeelingsSymptomsBehaviours(req, res, next) {
  res.status(200).json(mentalHealthFeelingsSymptomsBehavioursResponse)
  res.end()
  next()
}

// ******************************************************************
// ** NHS Services pages
// ******************************************************************

// Live website URL
// https://www.nhs.uk/nhs-services/
// This sandbox on localhost
// http://localhost:9000/nhs-services/
// API on Azure API Management
// https://api.nhs.uk/nhs-services/
// Wagtail (Python) Application (no auth key required)
// https://www.nhs.uk/content-api/nhs-services/
// Apigee Sandbox environment (no auth key required)
// https://sandbox.api.service.nhs.uk/nhs-website-content/nhs-services/
// Apigee Integration environment ('apikey' required in Header)
// https://int.api.service.nhs.uk/nhs-website-content/nhs-services/
// Apigee Production environment ('apikey' required in Header)
// https://api.service.nhs.uk/nhs-website-content/nhs-services/
async function nhsServicesRoot(req, res, next) {
  res.status(200).json(nhsServicesRootResponse)
  res.end()
  next()
}

// Live website URL
// https://www.nhs.uk/nhs-services/gps/how-to-register-with-a-gp-surgery/
// This sandbox on localhost
// http://localhost:9000/nhs-services/gps/how-to-register-with-a-gp-surgery/
// API on Azure API Management
// https://api.nhs.uk/nhs-services/gps/how-to-register-with-a-gp-surgery/
// Wagtail (Python) Application (no auth key required)
// https://www.nhs.uk/content-api/nhs-services/gps/how-to-register-with-a-gp-surgery/
// Apigee Sandbox environment (no auth key required)
// https://sandbox.api.service.nhs.uk/nhs-website-content/nhs-services/gps/how-to-register-with-a-gp-surgery/
// Apigee Integration environment ('apikey' required in Header)
// https://int.api.service.nhs.uk/nhs-website-content/nhs-services/gps/how-to-register-with-a-gp-surgery/
// Apigee Production environment ('apikey' required in Header)
// https://api.service.nhs.uk/nhs-website-content/nhs-services/gps/how-to-register-with-a-gp-surgery/
async function nhsServicesGpsHowToRegisterWithAGpSurgery(req, res, next) {
  res.status(200).json(nhsServicesGpsHowToRegisterWithAGpSurgeryResponse)
  res.end()
  next()
}

// Live website URL
// https://www.nhs.uk/nhs-services/gps/
// This sandbox on localhost
// http://localhost:9000/nhs-services/gps/
// API on Azure API Management
// https://api.nhs.uk/nhs-services/gps/
// Wagtail (Python) Application (no auth key required)
// https://www.nhs.uk/content-api/nhs-services/gps/
// Apigee Sandbox environment (no auth key required)
// https://sandbox.api.service.nhs.uk/nhs-website-content/nhs-services/gps/
// Apigee Integration environment ('apikey' required in Header)
// https://int.api.service.nhs.uk/nhs-website-content/nhs-services/gps/
// Apigee Production environment ('apikey' required in Header)
// https://api.service.nhs.uk/nhs-website-content/nhs-services/gps/
async function nhsServicesGps(req, res, next) {
  res.status(200).json(nhsServicesGpsResponse)
  res.end()
  next()
}

// Live website URL
// https://www.nhs.uk/nhs-services/prescriptions-and-pharmacies/
// This sandbox on localhost
// http://localhost:9000/nhs-services/prescriptions-and-pharmacies/
// API on Azure API Management
// https://api.nhs.uk/nhs-services/prescriptions-and-pharmacies/
// Wagtail (Python) Application (no auth key required)
// https://www.nhs.uk/content-api/nhs-services/prescriptions-and-pharmacies/
// Apigee Sandbox environment (no auth key required)
// https://sandbox.api.service.nhs.uk/nhs-website-content/nhs-services/prescriptions-and-pharmacies/
// Apigee Integration environment ('apikey' required in Header)
// https://int.api.service.nhs.uk/nhs-website-content/nhs-services/prescriptions-and-pharmacies/
// Apigee Production environment ('apikey' required in Header)
// https://api.service.nhs.uk/nhs-website-content/nhs-services/prescriptions-and-pharmacies/
async function nhsServicesPrescriptionsAndPharmacies(req, res, next) {
  res.status(200).json(nhsServicesPrescriptionsAndPharmaciesResponse)
  res.end()
  next()
}

// ******************************************************************
// ** Pregnancy pages
// ******************************************************************

// Live website URL
// https://www.nhs.uk/pregnancy/
// This sandbox on localhost
// http://localhost:9000/pregnancy/
// API on Azure API Management
// https://api.nhs.uk/pregnancy/
// Wagtail (Python) Application (no auth key required)
// https://www.nhs.uk/content-api/pregnancy/
// Apigee Sandbox environment (no auth key required)
// https://sandbox.api.service.nhs.uk/nhs-website-content/pregnancy/
// Apigee Integration environment ('apikey' required in Header)
// https://int.api.service.nhs.uk/nhs-website-content/pregnancy/
// Apigee Production environment ('apikey' required in Header)
// https://api.service.nhs.uk/nhs-website-content/pregnancy/
async function pregnancyRoot(req, res, next) {
  res.status(200).json(pregnancyRootResponse)
  res.end()
  next()
}

// Live website URL
// https://www.nhs.uk/pregnancy/finding-out/finding-out-you-are-pregnant/
// This sandbox on localhost
// http://localhost:9000/pregnancy/finding-out/finding-out-you-are-pregnant/
// API on Azure API Management
// https://api.nhs.uk/pregnancy/finding-out/finding-out-you-are-pregnant/
// Wagtail (Python) Application (no auth key required)
// https://www.nhs.uk/content-api/pregnancy/finding-out/finding-out-you-are-pregnant/
// Apigee Sandbox environment (no auth key required)
// https://sandbox.api.service.nhs.uk/nhs-website-content/pregnancy/finding-out/finding-out-you-are-pregnant/
// Apigee Integration environment ('apikey' required in Header)
// https://int.api.service.nhs.uk/nhs-website-content/pregnancy/finding-out/finding-out-you-are-pregnant/
// Apigee Production environment ('apikey' required in Header)
// https://api.service.nhs.uk/nhs-website-content/pregnancy/finding-out/finding-out-you-are-pregnant/
async function pregnancyFindingOutFindingOutYouArePregnant(req, res, next) {
  res.status(200).json(pregnancyFindingOutFindingOutYouArePregnantResponse)
  res.end()
  next()
}

// Live website URL
// https://www.nhs.uk/pregnancy/having-a-baby-if-you-are-lgbt-plus/
// This sandbox on localhost
// http://localhost:9000/pregnancy/having-a-baby-if-you-are-lgbt-plus/
// API on Azure API Management
// https://api.nhs.uk/pregnancy/having-a-baby-if-you-are-lgbt-plus/
// Wagtail (Python) Application (no auth key required)
// https://www.nhs.uk/content-api/pregnancy/having-a-baby-if-you-are-lgbt-plus/
// Apigee Sandbox environment (no auth key required)
// https://sandbox.api.service.nhs.uk/nhs-website-content/pregnancy/having-a-baby-if-you-are-lgbt-plus/
// Apigee Integration environment ('apikey' required in Header)
// https://int.api.service.nhs.uk/nhs-website-content/pregnancy/having-a-baby-if-you-are-lgbt-plus/
// Apigee Production environment ('apikey' required in Header)
// https://api.service.nhs.uk/nhs-website-content/pregnancy/having-a-baby-if-you-are-lgbt-plus/
async function pregnancyHavingABabyIfYouAreLgbtPlus(req, res, next) {
  res.status(200).json(pregnancyHavingABabyIfYouAreLgbtPlusResponse)
  res.end()
  next()
}

// Live website URL
// https://www.nhs.uk/pregnancy/trying-for-a-baby/
// This sandbox on localhost
// http://localhost:9000/pregnancy/trying-for-a-baby/
// API on Azure API Management
// https://api.nhs.uk/pregnancy/trying-for-a-baby/
// Wagtail (Python) Application (no auth key required)
// https://www.nhs.uk/content-api/pregnancy/trying-for-a-baby/
// Apigee Sandbox environment (no auth key required)
// https://sandbox.api.service.nhs.uk/nhs-website-content/pregnancy/trying-for-a-baby/
// Apigee Integration environment ('apikey' required in Header)
// https://int.api.service.nhs.uk/nhs-website-content/pregnancy/trying-for-a-baby/
// Apigee Production environment ('apikey' required in Header)
// https://api.service.nhs.uk/nhs-website-content/pregnancy/trying-for-a-baby/
async function pregnancyTryingForABaby(req, res, next) {
  res.status(200).json(pregnancyTryingForABabyResponse)
  res.end()
  next()
}

// ******************************************************************
// ** Contraception pages
// ******************************************************************

// Live website URL
// https://www.nhs.uk/contraception/
// This sandbox on localhost
// http://localhost:9000/contraception/
// API on Azure API Management
// https://api.nhs.uk/contraception/
// Wagtail (Python) Application (no auth key required)
// https://www.nhs.uk/content-api/contraception/
// Apigee Sandbox environment (no auth key required)
// https://sandbox.api.service.nhs.uk/nhs-website-content/contraception/
// Apigee Integration environment ('apikey' required in Header)
// https://int.api.service.nhs.uk/nhs-website-content/contraception/
// Apigee Production environment ('apikey' required in Header)
// https://api.service.nhs.uk/nhs-website-content/contraception/
async function contraceptionRoot(req, res, next) {
  res.status(200).json(contraceptionRootResponse)
  res.end()
  next()
}

// Live website URL
// https://www.nhs.uk/contraception/methods-of-contraception/
// This sandbox on localhost
// http://localhost:9000/contraception/methods-of-contraception/
// API on Azure API Management
// https://api.nhs.uk/contraception/methods-of-contraception/
// Wagtail (Python) Application (no auth key required)
// https://www.nhs.uk/content-api/contraception/methods-of-contraception/
// Apigee Sandbox environment (no auth key required)
// https://sandbox.api.service.nhs.uk/nhs-website-content/contraception/methods-of-contraception/
// Apigee Integration environment ('apikey' required in Header)
// https://int.api.service.nhs.uk/nhs-website-content/contraception/methods-of-contraception/
// Apigee Production environment ('apikey' required in Header)
// https://api.service.nhs.uk/nhs-website-content/contraception/methods-of-contraception/
async function contraceptionMethodsOfContraception(req, res, next) {
  res.status(200).json(contraceptionMethodsOfContraceptionResponse)
  res.end()
  next()
}

// Live website URL
// https://www.nhs.uk/contraception/methods-of-contraception/combined-pill/what-is-it/
// This sandbox on localhost
// http://localhost:9000/contraception/methods-of-contraception/combined-pill/what-is-it/
// API on Azure API Management
// https://api.nhs.uk/contraception/methods-of-contraception/combined-pill/what-is-it/
// Wagtail (Python) Application (no auth key required)
// https://www.nhs.uk/content-api/contraception/methods-of-contraception/combined-pill/what-is-it/
// Apigee Sandbox environment (no auth key required)
// https://sandbox.api.service.nhs.uk/nhs-website-content/contraception/methods-of-contraception/combined-pill/what-is-it/
// Apigee Integration environment ('apikey' required in Header)
// https://int.api.service.nhs.uk/nhs-website-content/contraception/methods-of-contraception/combined-pill/what-is-it/
// Apigee Production environment ('apikey' required in Header)
// https://api.service.nhs.uk/nhs-website-content/contraception/methods-of-contraception/combined-pill/what-is-it/
async function contraceptionWhatIsTheCombinedPill(req, res, next) {
  res.status(200).json(contraceptionWhatIsTheCombinedPillResponse)
  res.end()
  next()
}

// Live website URL
// https://www.nhs.uk/contraception/methods-of-contraception/condoms/
// This sandbox on localhost
// http://localhost:9000/contraception/methods-of-contraception/condoms/
// API on Azure API Management
// https://api.nhs.uk/contraception/methods-of-contraception/condoms/
// Wagtail (Python) Application (no auth key required)
// https://www.nhs.uk/content-api/contraception/methods-of-contraception/condoms/
// Apigee Sandbox environment (no auth key required)
// https://sandbox.api.service.nhs.uk/nhs-website-content/contraception/methods-of-contraception/condoms/
// Apigee Integration environment ('apikey' required in Header)
// https://int.api.service.nhs.uk/nhs-website-content/contraception/methods-of-contraception/condoms/
// Apigee Production environment ('apikey' required in Header)
// https://api.service.nhs.uk/nhs-website-content/contraception/methods-of-contraception/condoms/
async function contraceptionCondoms(req, res, next) {
  res.status(200).json(contraceptionCondomsResponse)
  res.end()
  next()
}

// ******************************************************************
// ** Vaccinations pages
// ******************************************************************

// Live website URL
// https://www.nhs.uk/vaccinations/
// This sandbox on localhost
// http://localhost:9000/vaccinations/
// API on Azure API Management
// https://api.nhs.uk/vaccinations/
// Wagtail (Python) Application (no auth key required)
// https://www.nhs.uk/content-api/vaccinations/
// Apigee Sandbox environment (no auth key required)
// https://sandbox.api.service.nhs.uk/nhs-website-content/vaccinations/
// Apigee Integration environment ('apikey' required in Header)
// https://int.api.service.nhs.uk/nhs-website-content/vaccinations/
// Apigee Production environment ('apikey' required in Header)
// https://api.service.nhs.uk/nhs-website-content/vaccinations/
async function vaccinationsRoot(req, res, next) {
  res.status(200).json(vaccinationsRootResponse)
  res.end()
  next()
}

// Live website URL
// https://www.nhs.uk/vaccinations/nhs-vaccinations-and-when-to-have-them/
// This sandbox on localhost
// http://localhost:9000/vaccinations/nhs-vaccinations-and-when-to-have-them/
// API on Azure API Management
// https://api.nhs.uk/vaccinations/nhs-vaccinations-and-when-to-have-them/
// Wagtail (Python) Application (no auth key required)
// https://www.nhs.uk/content-api/vaccinations/nhs-vaccinations-and-when-to-have-them/
// Apigee Sandbox environment (no auth key required)
// https://sandbox.api.service.nhs.uk/nhs-website-content/vaccinations/nhs-vaccinations-and-when-to-have-them/
// Apigee Integration environment ('apikey' required in Header)
// https://int.api.service.nhs.uk/nhs-website-content/vaccinations/nhs-vaccinations-and-when-to-have-them/
// Apigee Production environment ('apikey' required in Header)
// https://api.service.nhs.uk/nhs-website-content/vaccinations/nhs-vaccinations-and-when-to-have-them/
async function vaccinationsNhsVaccinationsAndWhenToHaveThem(req, res, next) {
  res.status(200).json(vaccinationsNhsVaccinationsAndWhenToHaveThemResponse)
  res.end()
  next()
}

// Live website URL
// https://www.nhs.uk/vaccinations/6-in-1-vaccine/
// This sandbox on localhost
// http://localhost:9000/vaccinations/6-in-1-vaccine/
// API on Azure API Management
// https://api.nhs.uk/vaccinations/6-in-1-vaccine/
// Wagtail (Python) Application (no auth key required)
// https://www.nhs.uk/content-api/vaccinations/6-in-1-vaccine/
// Apigee Sandbox environment (no auth key required)
// https://sandbox.api.service.nhs.uk/nhs-website-content/vaccinations/6-in-1-vaccine/
// Apigee Integration environment ('apikey' required in Header)
// https://int.api.service.nhs.uk/nhs-website-content/vaccinations/6-in-1-vaccine/
// Apigee Production environment ('apikey' required in Header)
// https://api.service.nhs.uk/nhs-website-content/vaccinations/6-in-1-vaccine/
async function vaccinations6in1Vaccine(req, res, next) {
  res.status(200).json(vaccinations6in1VaccineResponse)
  res.end()
  next()
}

// Live website URL
// https://www.nhs.uk/vaccinations/travel-vaccinations/available-travel-vaccines/
// This sandbox on localhost
// http://localhost:9000/vaccinations/travel-vaccinations/available-travel-vaccines/
// API on Azure API Management
// https://api.nhs.uk/vaccinations/travel-vaccinations/available-travel-vaccines/
// Wagtail (Python) Application (no auth key required)
// https://www.nhs.uk/content-api/vaccinations/travel-vaccinations/available-travel-vaccines/
// Apigee Sandbox environment (no auth key required)
// https://sandbox.api.service.nhs.uk/nhs-website-content/vaccinations/travel-vaccinations/available-travel-vaccines/
// Apigee Integration environment ('apikey' required in Header)
// https://int.api.service.nhs.uk/nhs-website-content/vaccinations/travel-vaccinations/available-travel-vaccines/
// Apigee Production environment ('apikey' required in Header)
// https://api.service.nhs.uk/nhs-website-content/vaccinations/travel-vaccinations/available-travel-vaccines/
async function vaccinationsAvailableTravelVaccines(req, res, next) {
  res.status(200).json(vaccinationsAvailableTravelVaccinesResponse)
  res.end()
  next()
}

// ******************************************************************
// ** Women's health pages
// ******************************************************************

// Live website URL
// https://www.nhs.uk/womens-health/
// This sandbox on localhost
// http://localhost:9000/womens-health/
// API on Azure API Management
// https://api.nhs.uk/womens-health/
// Wagtail (Python) Application (no auth key required)
// https://www.nhs.uk/content-api/womens-health/
// Apigee Sandbox environment (no auth key required)
// https://sandbox.api.service.nhs.uk/nhs-website-content/womens-health/
// Apigee Integration environment ('apikey' required in Header)
// https://int.api.service.nhs.uk/nhs-website-content/womens-health/
// Apigee Production environment ('apikey' required in Header)
// https://api.service.nhs.uk/nhs-website-content/womens-health/
async function womensHealthRoot(req, res, next) {
  res.status(200).json(womensHealthRootResponse)
  res.end()
  next()
}

// Live website URL
// https://www.nhs.uk/womens-health/periods/
// This sandbox on localhost
// http://localhost:9000/womens-health/periods/
// API on Azure API Management
// https://api.nhs.uk/womens-health/periods/
// Wagtail (Python) Application (no auth key required)
// https://www.nhs.uk/content-api/womens-health/periods/
// Apigee Sandbox environment (no auth key required)
// https://sandbox.api.service.nhs.uk/nhs-website-content/womens-health/periods/
// Apigee Integration environment ('apikey' required in Header)
// https://int.api.service.nhs.uk/nhs-website-content/womens-health/periods/
// Apigee Production environment ('apikey' required in Header)
// https://api.service.nhs.uk/nhs-website-content/womens-health/periods/
async function womensHealthPeriods(req, res, next) {
  res.status(200).json(womensHealthPeriodsResponse)
  res.end()
  next()
}

// Live website URL
// https://www.nhs.uk/womens-health/anaemia/
// This sandbox on localhost
// http://localhost:9000/womens-health/anaemia/
// API on Azure API Management
// https://api.nhs.uk/womens-health/anaemia/
// Wagtail (Python) Application (no auth key required)
// https://www.nhs.uk/content-api/womens-health/anaemia/
// Apigee Sandbox environment (no auth key required)
// https://sandbox.api.service.nhs.uk/nhs-website-content/womens-health/anaemia/
// Apigee Integration environment ('apikey' required in Header)
// https://int.api.service.nhs.uk/nhs-website-content/womens-health/anaemia/
// Apigee Production environment ('apikey' required in Header)
// https://api.service.nhs.uk/nhs-website-content/womens-health/anaemia/
async function womensHealthAnaemia(req, res, next) {
  res.status(200).json(womensHealthAnaemiaResponse)
  res.end()
  next()
}

// ******************************************************************
// ** Symptoms pages
// ******************************************************************

// Live website URL
// https://www.nhs.uk/symptoms/
// This sandbox on localhost
// http://localhost:9000/symptoms/
// API on Azure API Management
// https://api.nhs.uk/symptoms/
// Wagtail (Python) Application (no auth key required)
// https://www.nhs.uk/content-api/symptoms/
// Apigee Sandbox environment (no auth key required)
// https://sandbox.api.service.nhs.uk/nhs-website-content/symptoms/
// Apigee Integration environment ('apikey' required in Header)
// https://int.api.service.nhs.uk/nhs-website-content/symptoms/
// Apigee Production environment ('apikey' required in Header)
// https://api.service.nhs.uk/nhs-website-content/symptoms/
async function symptomsRoot(req, res, next) {
  let responseJson
  if (req.query.category) {
    if (req.query.category.toLowerCase() === 'a') {
      // http://localhost:9000/symptoms/?category=a
      responseJson = symptomsRootCategoryAResponse
    } else if (req.query.category.toLowerCase() === 'b') {
      // http://localhost:9000/symptoms/?category=b
      responseJson = symptomsRootCategoryBResponse
    } else {
      responseJson = errorSandboxResponseNotFound
    }
  } else if (req.query.page) {
    if (req.query.page === '1') {
      // http://localhost:9000/symptoms/?page=1
      responseJson = symptomsRootPage1Response
    } else if (req.query.page === '6') {
      // http://localhost:9000/symptoms/?page=6
      responseJson = symptomsRootPage6Response
    } else {
      responseJson = errorSandboxResponseNotFound
    }
  } else {
    // http://localhost:9000/symptoms/
    responseJson = symptomsRootNoParamsResponse
  }
  res.status(200).json(responseJson)

  res.end()
  next()
}

// ******************************************************************
// ** Tests and treatment pages
// ******************************************************************

// Live website URL
// https://www.nhs.uk/tests-and-treatments/
// This sandbox on localhost
// http://localhost:9000/tests-and-treatments/
// API on Azure API Management
// https://api.nhs.uk/tests-and-treatments/
// Wagtail (Python) Application (no auth key required)
// https://www.nhs.uk/content-api/tests-and-treatments/
// Apigee Sandbox environment (no auth key required)
// https://sandbox.api.service.nhs.uk/nhs-website-content/tests-and-treatments/
// Apigee Integration environment ('apikey' required in Header)
// https://int.api.service.nhs.uk/nhs-website-content/tests-and-treatments/
// Apigee Production environment ('apikey' required in Header)
// https://api.service.nhs.uk/nhs-website-content/tests-and-treatments/
async function testsAndTreatmentsRoot(req, res, next) {
  let responseJson
  if (req.query.category) {
    if (req.query.category.toLowerCase() === 'a') {
      // http://localhost:9000/tests-and-treatments/?category=a
      responseJson = testsAndTreatmentsRootCategoryAResponse
    } else if (req.query.category.toLowerCase() === 'b') {
      // http://localhost:9000/tests-and-treatments/?category=b
      responseJson = testsAndTreatmentsRootCategoryBResponse
    } else {
      responseJson = errorSandboxResponseNotFound
    }
  } else if (req.query.page) {
    if (req.query.page === '1') {
      // http://localhost:9000/tests-and-treatments/?page=1
      responseJson = testsAndTreatmentsRootPage1Response
    } else if (req.query.page === '7') {
      // http://localhost:9000/tests-and-treatments/?page=7
      responseJson = testsAndTreatmentsRootPage7Response
    } else {
      responseJson = errorSandboxResponseNotFound
    }
  } else {
    // http://localhost:9000/tests-and-treatments/
    responseJson = testsAndTreatmentsRootNoParamsResponse
  }
  res.status(200).json(responseJson)

  res.end()
  next()
}


// ******************************************************************
// ** Health A to Z
// ******************************************************************

// Live website URL
// https://www.nhs.uk/health-a-to-z/
// This sandbox on localhost
// http://localhost:9000/health-a-to-z/
// API on Azure API Management
// https://api.nhs.uk/health-a-to-z/
// Wagtail (Python) Application (no auth key required)
// https://www.nhs.uk/content-api/health-a-to-z/
// Apigee Sandbox environment (no auth key required)
// https://sandbox.api.service.nhs.uk/nhs-website-content/health-a-to-z/
// Apigee Integration environment ('apikey' required in Header)
// https://int.api.service.nhs.uk/nhs-website-content/health-a-to-z/
// Apigee Production environment ('apikey' required in Header)
// https://api.service.nhs.uk/nhs-website-content/health-a-to-z/
async function healthAToZRoot(req, res, next) {
  res.status(200).json(healthAToZRootNoParamsResponse)
  res.end()
  next()
}

// ******************************************************************
// ** Health A to Z - Conditions
// ******************************************************************

// Live website URL
// https://www.nhs.uk/health-a-to-z/conditions/
// This sandbox on localhost
// http://localhost:9000/health-a-to-z/conditions/
// API on Azure API Management
// https://api.nhs.uk/health-a-to-z/conditions/
// Wagtail (Python) Application (no auth key required)
// https://www.nhs.uk/content-api/health-a-to-z/conditions/
// Apigee Sandbox environment (no auth key required)
// https://sandbox.api.service.nhs.uk/nhs-website-content/health-a-to-z/conditions/
// Apigee Integration environment ('apikey' required in Header)
// https://int.api.service.nhs.uk/nhs-website-content/health-a-to-z/conditions/
// Apigee Production environment ('apikey' required in Header)
// https://api.service.nhs.uk/nhs-website-content/health-a-to-z/conditions/
async function healthAToZConditions(req, res, next) {
  res.status(200).json(healthAToZConditionsNoParamsResponse)
  res.end()
  next()
}

// ******************************************************************
// ** Baby
// ******************************************************************

// Live website URL
// https://www.nhs.uk/baby/
// This sandbox on localhost
// http://localhost:9000/baby/
// API on Azure API Management
// https://api.nhs.uk/baby/
// Wagtail (Python) Application (no auth key required)
// https://www.nhs.uk/content-api/baby/
// Apigee Sandbox environment (no auth key required)
// https://sandbox.api.service.nhs.uk/nhs-website-content/baby/
// Apigee Integration environment ('apikey' required in Header)
// https://int.api.service.nhs.uk/nhs-website-content/baby/
// Apigee Production environment ('apikey' required in Header)
// https://api.service.nhs.uk/nhs-website-content/baby/
async function babyRoot(req, res, next) {
  res.status(200).json(babyRootNoParamsResponse)
  res.end()
  next()
}

// Live website URL
// https://www.nhs.uk/baby/first-aid-and-safety/
// This sandbox on localhost
// http://localhost:9000/baby/first-aid-and-safety/
// API on Azure API Management
// https://api.nhs.uk/baby/first-aid-and-safety/
// Wagtail (Python) Application (no auth key required)
// https://www.nhs.uk/content-api/baby/first-aid-and-safety/
// Apigee Sandbox environment (no auth key required)
// https://sandbox.api.service.nhs.uk/nhs-website-content/baby/first-aid-and-safety/
// Apigee Integration environment ('apikey' required in Header)
// https://int.api.service.nhs.uk/nhs-website-content/baby/first-aid-and-safety/
// Apigee Production environment ('apikey' required in Header)
// https://api.service.nhs.uk/nhs-website-content/baby/first-aid-and-safety/
async function babyFirstAidAndSafety(req, res, next) {
  res.status(200).json(babyFirstAidAndSafetyNoParamsResponse)
  res.end()
  next()
}

// Live website URL
// https://www.nhs.uk/baby/caring-for-a-newborn/
// This sandbox on localhost
// http://localhost:9000/baby/caring-for-a-newborn/
// API on Azure API Management
// https://api.nhs.uk/baby/caring-for-a-newborn/
// Wagtail (Python) Application (no auth key required)
// https://www.nhs.uk/content-api/baby/caring-for-a-newborn/
// Apigee Sandbox environment (no auth key required)
// https://sandbox.api.service.nhs.uk/nhs-website-content/baby/caring-for-a-newborn/
// Apigee Integration environment ('apikey' required in Header)
// https://int.api.service.nhs.uk/nhs-website-content/baby/caring-for-a-newborn/
// Apigee Production environment ('apikey' required in Header)
// https://api.service.nhs.uk/nhs-website-content/baby/caring-for-a-newborn/
async function babyCaringForANewborn(req, res, next) {
  res.status(200).json(babyCaringForANewbornNoParamsResponse)
  res.end()
  next()
}

// Live website URL
// https://www.nhs.uk/baby/support-and-service/
// This sandbox on localhost
// http://localhost:9000/baby/support-and-service/
// API on Azure API Management
// https://api.nhs.uk/baby/support-and-service/
// Wagtail (Python) Application (no auth key required)
// https://www.nhs.uk/content-api/baby/support-and-service/
// Apigee Sandbox environment (no auth key required)
// https://sandbox.api.service.nhs.uk/nhs-website-content/baby/support-and-service/
// Apigee Integration environment ('apikey' required in Header)
// https://int.api.service.nhs.uk/nhs-website-content/baby/support-and-service/
// Apigee Production environment ('apikey' required in Header)
// https://api.service.nhs.uk/nhs-website-content/baby/support-and-service/
async function babySupportAndServices(req, res, next) {
  res.status(200).json(babySupportAndServicesNoParamsResponse)
  res.end()
  next()
}

// ******************************************************************
// ** Status
// ******************************************************************

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

// ******************************************************************
// ** Social care and support pages
// ******************************************************************

// Live website URL
// https://www.nhs.uk/social-care-and-support/
// This sandbox on localhost
// http://localhost:9000/social-care-and-support/
// API on Azure API Management
// https://api.nhs.uk/social-care-and-support/
// Wagtail (Python) Application (no auth key required)
// https://www.nhs.uk/content-api/social-care-and-support/
// Apigee Sandbox environment (no auth key required)
// https://sandbox.api.service.nhs.uk/nhs-website-content/social-care-and-support/
// Apigee Integration environment ('apikey' required in Header)
// https://int.api.service.nhs.uk/nhs-website-content/social-care-and-support/
// Apigee Production environment ('apikey' required in Header)
// https://api.service.nhs.uk/nhs-website-content/social-care-and-support/
async function socialCareAndSupportRoot(req, res, next) {
  res.status(200).json(socialCareAndSupportRootNoParamsResponse)
  res.end()
  next()
}

// Live website URL
// https://www.nhs.uk/social-care-and-support/introduction-to-care-and-support/
// This sandbox on localhost
// http://localhost:9000/social-care-and-support/introduction-to-care-and-support/
async function socialCareAndSupportIntroductionToCareAndSupport(req, res, next) {
  res.status(200).json(socialCareAndSupportIntroductionToCareAndSupportNoParamsResponse)
  res.end()
  next()
}

// Live website URL
// https://www.nhs.uk/social-care-and-support/money-work-and-benefits/
// This sandbox on localhost
// http://localhost:9000/social-care-and-support/money-work-and-benefits/
async function socialCareAndSupportMoneyWorkAndBenefits(req, res, next) {
  res.status(200).json(socialCareAndSupportMoneyWorkAndBenefitsNoParamsResponse)
  res.end()
  next()
}

// Live website URL
// https://www.nhs.uk/social-care-and-support/care-after-a-hospital-stay/
// This sandbox on localhost
// http://localhost:9000/social-care-and-support/care-after-a-hospital-stay/
async function socialCareAndSupportCareAfterAHospitalStay(req, res, next) {
  res.status(200).json(socialCareAndSupportCareAfterAHospitalStayNoParamsResponse)
  res.end()
  next()
}

module.exports = {
  root,
  manifestPagesRoot,
  babyCaringForANewborn,
  babyFirstAidAndSafety,
  babyRoot,
  babySupportAndServices,
  conditionsAcanthosisNigricans,
  conditionsAchalasia,
  conditionsAcne,
  conditionsAngiography,
  conditionsCancer,
  conditionsRoot,
  conditionsWildcard,
  conditionsZika,
  contraceptionCondoms,
  contraceptionMethodsOfContraception,
  contraceptionRoot,
  contraceptionWhatIsTheCombinedPill,
  healthAToZRoot,
  healthAToZConditions,
  liveWellAlcoholAdviceAlcoholSupport,
  liveWellExercise,
  liveWellHealthyWeight,
  liveWellRoot,
  medicinesAciclovir,
  medicinesAcrivastine,
  medicinesRoot,
  medicinesWildcard,
  medicinesZopiclone,
  mentalHealthAdviceForLifeSituationsAndEventsSupportForWorkplaceBullying,
  mentalHealthConditions,
  mentalHealthFeelingsSymptomsBehaviours,
  mentalHealthRoot,
  nhsServicesGps,
  nhsServicesGpsHowToRegisterWithAGpSurgery,
  nhsServicesPrescriptionsAndPharmacies,
  nhsServicesRoot,
  pregnancyFindingOutFindingOutYouArePregnant,
  pregnancyHavingABabyIfYouAreLgbtPlus,
  pregnancyRoot,
  pregnancyTryingForABaby,
  status,
  vaccinations6in1Vaccine,
  vaccinationsAvailableTravelVaccines,
  vaccinationsNhsVaccinationsAndWhenToHaveThem,
  vaccinationsRoot,
  womensHealthAnaemia,
  womensHealthPeriods,
  womensHealthRoot,
  socialCareAndSupportRoot,
  socialCareAndSupportIntroductionToCareAndSupport,
  socialCareAndSupportMoneyWorkAndBenefits,
  socialCareAndSupportCareAfterAHospitalStay,
  symptomsRoot,
  testsAndTreatmentsRoot,
}
