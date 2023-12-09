var requestHostnameEnv = context.getVariable("request_hostname_env");

var searchAndReplaceStrings = [
  {
    searchFor: "www.nhs.uk/conditions/",
    replaceWith: requestHostnameEnv + "/nhs-website-content/conditions/",
  },
  {
    searchFor: "www.nhs.uk/live-well/",
    replaceWith: requestHostnameEnv + "/nhs-website-content/live-well/",
  },
  {
    searchFor: "www.nhs.uk/medicines/",
    replaceWith: requestHostnameEnv + "/nhs-website-content/medicines/",
  },
  {
    searchFor: "www.nhs.uk/nhs-services/",
    replaceWith: requestHostnameEnv + "/nhs-website-content/nhs-services/",
  },
  {
    searchFor: "www.nhs.uk/pregnancy/",
    replaceWith: requestHostnameEnv + "/nhs-website-content/pregnancy/",
  },
  {
    searchFor: "www.nhs.uk/common-health-questions/",
    replaceWith:
      requestHostnameEnv + "/nhs-website-content/common-health-questions/",
  },
  {
    searchFor: "www.nhs.uk/mental-health/",
    replaceWith:
      requestHostnameEnv +
      "api.service.nhs.uk/nhs-website-content/mental-health/",
  },
  {
    searchFor: "api.nhs.uk/conditions/",
    replaceWith: requestHostnameEnv + "/nhs-website-content/conditions/",
  },
  {
    searchFor: "api.nhs.uk/live-well/",
    replaceWith: requestHostnameEnv + "/nhs-website-content/live-well/",
  },
  {
    searchFor: "api.nhs.uk/medicines/",
    replaceWith: requestHostnameEnv + "/nhs-website-content/medicines/",
  },
  {
    searchFor: "api.nhs.uk/nhs-services/",
    replaceWith: requestHostnameEnv + "/nhs-website-content/nhs-services/",
  },
  {
    searchFor: "api.nhs.uk/pregnancy/",
    replaceWith: requestHostnameEnv + "/nhs-website-content/pregnancy/",
  },
  {
    searchFor: "api.nhs.uk/common-health-questions/",
    replaceWith:
      requestHostnameEnv + "/nhs-website-content/common-health-questions/",
  },
  {
    searchFor: "api.nhs.uk/mental-health/",
    replaceWith:
      requestHostnameEnv +
      "api.service.nhs.uk/nhs-website-content/mental-health/",
  },
];

var responseContent = context.getVariable("response.content");
var regex, item;
for (var i = 0; i < searchAndReplaceStrings.length; i++) {
  item = searchAndReplaceStrings[i];
  regex = new RegExp(item.searchFor, "g");
  responseContent = responseContent.replace(regex, item.replaceWith);
}

context.setVariable("response.content", responseContent);
