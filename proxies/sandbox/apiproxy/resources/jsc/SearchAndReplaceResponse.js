var requestUrl = context.getVariable("request.url");
// An example requestUrl would be https://internal-dev-sandbox.apis.ptl.api.platform.nhs.uk/nwca-48/conditions/
var environmentSubdomain = requestUrl.split("/");
environmentSubdomain = environmentSubdomain[2];
environmentSubdomain = environmentSubdomain.split(".");
environmentSubdomain = environmentSubdomain[0];

var apiVersion2Host;
if (environmentSubdomain === "apis" || environmentSubdomain === "prod") {
  apiVersion2Host = "api.service.nhs.uk";
} else {
  apiVersion2Host = environmentSubdomain + ".api.service.nhs.uk";
}

var searchAndReplaceStrings = [
  {
    searchFor: "www.nhs.uk/conditions/",
    replaceWith: apiVersion2Host + "/nhs-website-content/conditions/",
  },
  {
    searchFor: "www.nhs.uk/live-well/",
    replaceWith: apiVersion2Host + "/nhs-website-content/live-well/",
  },
  {
    searchFor: "www.nhs.uk/medicines/",
    replaceWith: apiVersion2Host + "/nhs-website-content/medicines/",
  },
  {
    searchFor: "www.nhs.uk/nhs-services/",
    replaceWith: apiVersion2Host + "/nhs-website-content/nhs-services/",
  },
  {
    searchFor: "www.nhs.uk/pregnancy/",
    replaceWith: apiVersion2Host + "/nhs-website-content/pregnancy/",
  },
  {
    searchFor: "www.nhs.uk/common-health-questions/",
    replaceWith:
      apiVersion2Host + "/nhs-website-content/common-health-questions/",
  },
  {
    searchFor: "www.nhs.uk/mental-health/",
    replaceWith:
      apiVersion2Host + "api.service.nhs.uk/nhs-website-content/mental-health/",
  },
];

var responseContent = context.getVariable("response.content");
var regex;
for (var i = 0; i < searchAndReplaceStrings.length; i++) {
  var item = searchAndReplaceStrings[i];
  regex = new RegExp(item.searchFor, "g");
  responseContent = responseContent.replace(regex, item.replaceWith);
}

responseContent = JSON.parse(responseContent);
responseContent.targetName = targetName;
responseContent = JSON.stringify(responseContent);

context.setVariable("response.content", responseContent);
