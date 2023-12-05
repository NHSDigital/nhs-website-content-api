var searchAndReplaceStrings = [
  {
    searchFor: "www.nhs.uk/conditions/",
    replaceWith: "api.nhs.uk/conditions/",
  },
  {
    searchFor: "www.nhs.uk/live-well/",
    replaceWith: "api.nhs.uk/live-well/",
  },
  {
    searchFor: "www.nhs.uk/medicines/",
    replaceWith: "api.nhs.uk/medicines/",
  },
  {
    searchFor: "www.nhs.uk/nhs-services/",
    replaceWith: "api.nhs.uk/nhs-services/",
  },
  {
    searchFor: "www.nhs.uk/pregnancy/",
    replaceWith: "api.nhs.uk/pregnancy/",
  },
  {
    searchFor: "www.nhs.uk/common-health-questions/",
    replaceWith: "api.nhs.uk/common-health-questions/",
  },
  {
    searchFor: "www.nhs.uk/mental-health/",
    replaceWith: "api.nhs.uk/mental-health/",
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
