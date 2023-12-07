var searchAndReplaceStrings = [
  {
    searchFor: "www.nhs.uk/conditions/",
    replaceWith: "api.service.nhs.uk/nhs-website-content/conditions/",
  },
  {
    searchFor: "www.nhs.uk/live-well/",
    replaceWith: "api.service.nhs.uk/nhs-website-content/live-well/",
  },
  {
    searchFor: "www.nhs.uk/medicines/",
    replaceWith: "api.service.nhs.uk/nhs-website-content/medicines/",
  },
  {
    searchFor: "www.nhs.uk/nhs-services/",
    replaceWith: "api.service.nhs.uk/nhs-website-content/nhs-services/",
  },
  {
    searchFor: "www.nhs.uk/pregnancy/",
    replaceWith: "api.service.nhs.uk/nhs-website-content/pregnancy/",
  },
  {
    searchFor: "www.nhs.uk/common-health-questions/",
    replaceWith:
      "api.service.nhs.uk/nhs-website-content/common-health-questions/",
  },
  {
    searchFor: "www.nhs.uk/mental-health/",
    replaceWith: "api.service.nhs.uk/nhs-website-content/mental-health/",
  },
];

var responseContent = context.getVariable("response.content");
var regex;
for (var i = 0; i < searchAndReplaceStrings.length; i++) {
  var item = searchAndReplaceStrings[i];
  regex = new RegExp(item.searchFor, "g");
  responseContent = responseContent.replace(regex, item.replaceWith);
}
// var context =
// var basePath = context.proxyRequest.basePath;
// var subdomain = basePath.split("/")[1];
responseContent = JSON.parse(responseContent);
// responseContent.proxyRequest = context.getVariable("proxyRequest");
// responseContent.request = context.getVariable("request");
responseContent.response = context.getVariable("response");
// responseContent.contextProxyRequest = context.proxyRequest;
// responseContent.contextProxyRequestUrl = context.proxyRequest.url;
// responseContent.contextTargetRequest = context.targetRequest;
// responseContent.contextTargetRequestUrl = context.targetRequest.url;
// responseContent.basePath = basePath;
// responseContent.subdomain = subdomain;
// responseContent.proxy = context.getVariable("proxy");
responseContent.timestamp = "2023-12-07@11:14am";
responseContent = JSON.stringify(responseContent);
context.setVariable("response.content", responseContent);
