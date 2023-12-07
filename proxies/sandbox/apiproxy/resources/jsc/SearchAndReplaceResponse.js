var targetName = context.getVariable("target.name");
var apiVersion2Host;
if (targetName === "prod") {
  apiVersion2Host = "api.service.nhs.uk";
} else {
  apiVersion2Host = targetName + ".api.service.nhs.uk";
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

context.setVariable("response.content", responseContent);
