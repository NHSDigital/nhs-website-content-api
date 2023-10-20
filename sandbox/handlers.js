"use strict";

const log = require("loglevel");
// const searchPostcodeOrPlaceResponse = require("./responses/search-postcode_v2.json");
const resourceNotFoundResponse = require("./responses/resource-not-found.json");

async function root(req, res, next) {
  res.status(404).json(resourceNotFoundResponse);
  res.end();
  next();
}

async function conditions(req, res, next) {
  res.status(404).json({ message: "/conditions" });
  res.end();
  next();
}

async function liveWell(req, res, next) {
  res.status(404).json({ message: "/live-well" });
  res.end();
  next();
}

async function medicines(req, res, next) {
  res.status(404).json({ message: "/medicines" });
  res.end();
  next();
}

async function nhsServices(req, res, next) {
  res.status(404).json({ message: "/nhs-services" });
  res.end();
  next();
}

async function pregnancy(req, res, next) {
  res.status(404).json({ message: "/pregnancy" });
  res.end();
  next();
}

async function commonHealthQuestions(req, res, next) {
  res.status(404).json({ message: "/common-health-questions" });
  res.end();
  next();
}

async function mentalHealth(req, res, next) {
  res.status(404).json({ message: "/mental-health" });
  res.end();
  next();
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
    status: "pass",
    ping: "pong",
    service: req.app.locals.app_name,
    version: req.app.locals.version_info,
  });
  res.end();
  next();
}

async function hello(req, res, next) {
  res.json({ message: "hello world" });
  res.end();
  next();
}

module.exports = {
  status,
  hello,
  root,
  // searchPostcodeOrPlace,
  conditions,
  liveWell,
  medicines,
  nhsServices,
  pregnancy,
  commonHealthQuestions,
  mentalHealth,
};
