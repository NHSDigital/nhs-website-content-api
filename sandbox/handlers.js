"use strict";

const log = require("loglevel");
const searchPostcodeOrPlaceResponse = require("./responses/search-postcode_v2.json");
const resourceNotFound = require("./responses/bad-api-version-resource-not-found.json");

async function root(req, res, next) {
  write_log(res, "warn", {
    message: "root",
    req: {
      path: req.path,
      query: req.query,
      headers: req.rawHeaders,
    },
  });

  res.json({ message: "root" });
  res.end();
  next();
}

async function searchPostcodeOrPlace(req, res, next) {
  console.log("/searchPostcodeOrPlace ================================");
  console.log("req:", req);
  const queryStringParameters = req?.query;
  const search = (queryStringParameters?.["search"] || "").toLowerCase();
  res.status(200).json(searchPostcodeOrPlaceResponse);
  // if (queryStringParameters?.["api-version"] !== "2") {
  //   res.status(404).json(resourceNotFound);
  // } else if (search === "manchester") {
  //   res.status(200).json(searchPostcodeOrPlaceResponse);
  // } else {
  //   res.status(500).json(populateSearchPostcodeOrPlaceInvalidResponse(search));
  // }

  res.end();
  next();
}

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
  write_log(res, "warn", {
    message: "hello world",
    req: {
      path: req.path,
      query: req.query,
      headers: req.rawHeaders,
    },
  });

  res.json({ message: "hello world" });
  res.end();
  next();
}

module.exports = {
  status,
  hello,
  searchPostcodeOrPlace,
};
