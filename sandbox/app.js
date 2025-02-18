'use strict'

const express = require('express')
const app = express()
const log = require('loglevel')
const uuid = require('uuid')
const handlers = require('./handlers')
const errorResourceNotFoundResponse = require('./responses/error-resource-not-found.json')

function setup(options) {
  options = options || {}
  app.locals.app_name = options.APP_NAME || 'nhs-website-content-api'
  app.locals.version_info = JSON.parse(options.VERSION_INFO || '{}')
  log.setLevel(options.LOG_LEVEL || 'info')

  log.info(
    JSON.stringify({
      timestamp: Date.now(),
      level: 'info',
      app: app.locals.app_name,
      msg: 'setup',
      version: app.locals.version_info,
    })
  )
}

function start(options) {
  options = options || {}
  let server = app.listen(options.PORT || 9000, () => {
    log.info(
      JSON.stringify({
        timestamp: Date.now(),
        level: 'info',
        app: app.locals.app_name,
        msg: 'startup',
        server_port: server.address().port,
        version: app.locals.version_info,
      })
    )
  })
  return server
}

function beforeRequest(req, res, next) {
  res.locals.started_at = Date.now()
  res.locals.correlation_id =
    req.header('X-Correlation-ID') || req.header('Correlation-ID') || req.header('CorrelationID') || uuid.v4()
  next()
}

const _health_endpoints = ['/_ping']

function afterRequest(req, res, next) {
  if (_health_endpoints.includes(req.path) && !('log' in Object.assign({}, req.query))) {
    // don't log _ping by default
    return next()
  }
  let finished_at = Date.now()
  let log_entry = {
    timestamp: finished_at,
    level: 'info',
    app: app.locals.app_name,
    msg: 'request',
    correlation_id: res.locals.correlation_id,
    started: res.locals.started_at,
    finished: finished_at,
    duration: finished_at - res.locals.started_at,
    req: {
      url: req.url,
      method: req.method,
      query: req.query,
      path: req.path,
    },
    res: {
      status: res.statusCode,
      message: res.message,
    },
    version: app.locals.version_info,
  }

  if (log.getLevel() < 2) {
    // debug
    log_entry.req.headers = req.rawHeaders
    log_entry.res.headers = res.rawHeaders
  }
  log.info(JSON.stringify(log_entry))

  next()
}

function onError(err, req, res, next) {
  let log_err = err
  if (log_err instanceof Error) {
    log_err = {
      name: err.name,
      message: err.message,
      stack: err.stack,
    }
  }
  let finished_at = Date.now()
  log.error(
    JSON.stringify({
      timestamp: finished_at,
      level: 'error',
      app: app.locals.app_name,
      msg: 'error',
      correlation_id: res.locals.correlation_id,
      started: res.locals.started_at,
      finished: finished_at,
      duration: finished_at - res.locals.started_at,
      err: log_err,
      version: app.locals.version_info,
    })
  )
  if (res.headersSent) {
    next()
    return
  }
  res.status(500)
  res.json({ error: 'Internal Server Error' })
  next()
}

app.use(beforeRequest)

app.get('/_ping', handlers.status)
app.get('/_status', handlers.status)

// ******************************************************************
// ** Root page
// ******************************************************************
app.all('/', handlers.root)

// ******************************************************************
// ** Manifest pages
// ******************************************************************
app.all('/manifest/pages/', handlers.manifestPagesRoot)

// ******************************************************************
// ** Conditions pages
// ******************************************************************
app.all('/conditions/', handlers.conditionsRoot)
app.all('/conditions/*', handlers.conditionsWildcard)
app.all('/conditions/acanthosis-nigricans/', handlers.conditionsAcanthosisNigricans)
app.all('/conditions/achalasia/', handlers.conditionsAchalasia)
app.all('/conditions/acne/', handlers.conditionsAcne)
app.all('/conditions/angiography/', handlers.conditionsAngiography)
app.all('/conditions/cancer/', handlers.conditionsCancer)
app.all('/conditions/zika/', handlers.conditionsZika)

// ******************************************************************
// ** Live Well pages
// ******************************************************************
app.all('/live-well/', handlers.liveWellRoot)
app.all('/live-well/alcohol-advice/alcohol-support/', handlers.liveWellAlcoholAdviceAlcoholSupport)
app.all('/live-well/exercise/', handlers.liveWellExercise)
app.all('/live-well/healthy-weight/', handlers.liveWellHealthyWeight)

// ******************************************************************
// ** Medicines pages
// ******************************************************************
app.all('/medicines/', handlers.medicinesRoot)
app.all('/medicines/*', handlers.medicinesWildcard)
app.all('/medicines/aciclovir/', handlers.medicinesAciclovir)
app.all('/medicines/acrivastine/', handlers.medicinesAcrivastine)
app.all('/medicines/zopiclone/', handlers.medicinesZopiclone)

// ******************************************************************
// ** Mental Health pages
// ******************************************************************
app.all('/mental-health/', handlers.mentalHealthRoot)
app.all(
  '/mental-health/advice-for-life-situations-and-events/support-for-workplace-bullying/',
  handlers.mentalHealthAdviceForLifeSituationsAndEventsSupportForWorkplaceBullying
)
app.all('/mental-health/conditions/', handlers.mentalHealthConditions)
app.all('/mental-health/feelings-symptoms-behaviours/', handlers.mentalHealthFeelingsSymptomsBehaviours)

// ******************************************************************
// ** NHS Services pages
// ******************************************************************
app.all('/nhs-services/', handlers.nhsServicesRoot)
app.all('/nhs-services/gps/', handlers.nhsServicesGps)
app.all('/nhs-services/gps/how-to-register-with-a-gp-surgery/', handlers.nhsServicesGpsHowToRegisterWithAGpSurgery)
app.all('/nhs-services/prescriptions-and-pharmacies/', handlers.nhsServicesPrescriptionsAndPharmacies)

// ******************************************************************
// ** Pregnancy pages
// ******************************************************************
app.all('/pregnancy/', handlers.pregnancyRoot)
app.all('/pregnancy/finding-out/finding-out-you-are-pregnant/', handlers.pregnancyFindingOutFindingOutYouArePregnant)
app.all('/pregnancy/having-a-baby-if-you-are-lgbt-plus/', handlers.pregnancyHavingABabyIfYouAreLgbtPlus)
app.all('/pregnancy/trying-for-a-baby/', handlers.pregnancyTryingForABaby)

// ******************************************************************
// ** Contraception pages
// ******************************************************************
app.all('/contraception/', handlers.contraceptionRoot)
app.all('/contraception/methods-of-contraception/', handlers.contraceptionMethodsOfContraception)
app.all('/contraception/methods-of-contraception/combined-pill/what-is-it/', handlers.contraceptionWhatIsTheCombinedPill)
app.all('/contraception/methods-of-contraception/condoms/', handlers.contraceptionCondoms)

// ******************************************************************
// ** Vaccinations pages
// ******************************************************************
app.all('/vaccinations/', handlers.vaccinationsRoot)
app.all('/vaccinations/nhs-vaccinations-and-when-to-have-them/', handlers.vaccinationsNhsVaccinationsAndWhenToHaveThem)
app.all('/vaccinations/6-in-1-vaccine/', handlers.vaccinations6in1Vaccine)
app.all('/vaccinations/travel-vaccinations/available-travel-vaccines/', handlers.vaccinationsAvailableTravelVaccines)

// ******************************************************************
// ** Women's health pages
// ******************************************************************
app.all('/womens-health/', handlers.womensHealthRoot)
app.all('/womens-health/periods/', handlers.womensHealthPeriods)
app.all('/womens-health/anaemia/', handlers.womensHealthAnaemia)

app.use((req, res, next) => {
  res.status(404).json(errorResourceNotFoundResponse)
})
app.use(onError)
app.use(afterRequest)

module.exports = { start: start, setup: setup }
