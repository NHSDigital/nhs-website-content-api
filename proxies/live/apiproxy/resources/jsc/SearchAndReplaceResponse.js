var requestHostnameEnv = context.getVariable("request_hostname_env");

var searchAndReplaceStrings = [
  {
    comment1: "=============================================================",
    comment2: "Conditions                                                   ",
    comment3: "=============================================================",
  },
  {
    searchForRegex: /:\s?"https:\/\/api.nhs.uk\/conditions\//gm,
    replaceWithStr:
      ': "https://' + requestHostnameEnv + "/nhs-website-content/conditions/",
  },
  {
    searchForRegex: /:\s?"https:\/\/www.nhs.uk\/conditions\//gm,
    replaceWithStr:
      ': "https://' + requestHostnameEnv + "/nhs-website-content/conditions/",
  },
  {
    searchForRegex: /:\s?"\/conditions\//gm,
    replaceWithStr:
      ': "https://' + requestHostnameEnv + "/nhs-website-content/conditions/",
  },
  {
    searchForRegex: /href=\\"https:\/\/api.nhs.uk\/conditions\//gm,
    replaceWithStr: 'href=\\"https://www.nhs.uk/conditions/',
  },
  {
    searchForRegex: /href=\\"\/conditions\//gm,
    replaceWithStr: 'href=\\"https://www.nhs.uk/conditions/',
  },
  {
    comment1: "=============================================================",
    comment2: "Live Well                                                    ",
    comment3: "=============================================================",
  },
  {
    searchForRegex: /:\s?"https:\/\/api.nhs.uk\/live-well\//gm,
    replaceWithStr:
      ': "https://' + requestHostnameEnv + "/nhs-website-content/live-well/",
  },
  {
    searchForRegex: /:\s?"https:\/\/www.nhs.uk\/live-well\//gm,
    replaceWithStr:
      ': "https://' + requestHostnameEnv + "/nhs-website-content/live-well/",
  },
  {
    searchForRegex: /:\s?"\/live-well\//gm,
    replaceWithStr:
      ': "https://' + requestHostnameEnv + "/nhs-website-content/live-well/",
  },
  {
    searchForRegex: /href=\\"https:\/\/api.nhs.uk\/live-well\//gm,
    replaceWithStr: 'href=\\"https://www.nhs.uk/live-well/',
  },
  {
    searchForRegex: /href=\\"\/live-well\//gm,
    replaceWithStr: 'href=\\"https://www.nhs.uk/live-well/',
  },
  {
    comment1: "=============================================================",
    comment2: "Mental health                                                ",
    comment3: "=============================================================",
  },
  {
    searchForRegex: /:\s?"https:\/\/api.nhs.uk\/mental-health\//gm,
    replaceWithStr:
      ': "https://' +
      requestHostnameEnv +
      "/nhs-website-content/mental-health/",
  },
  {
    searchForRegex: /:\s?"https:\/\/www.nhs.uk\/mental-health\//gm,
    replaceWithStr:
      ': "https://' +
      requestHostnameEnv +
      "/nhs-website-content/mental-health/",
  },
  {
    searchForRegex: /:\s?"\/mental-health\//gm,
    replaceWithStr:
      ': "https://' +
      requestHostnameEnv +
      "/nhs-website-content/mental-health/",
  },
  {
    searchForRegex: /href=\\"https:\/\/api.nhs.uk\/mental-health\//gm,
    replaceWithStr: 'href=\\"https://www.nhs.uk/mental-health/',
  },
  {
    searchForRegex: /href=\\"\/mental-health\//gm,
    replaceWithStr: 'href=\\"https://www.nhs.uk/mental-health/',
  },
  {
    comment1: "=============================================================",
    comment2: "Medicines                                                    ",
    comment3: "=============================================================",
  },
  {
    searchForRegex: /:\s?"https:\/\/api.nhs.uk\/medicines\//gm,
    replaceWithStr:
      ': "https://' + requestHostnameEnv + "/nhs-website-content/medicines/",
  },
  {
    searchForRegex: /:\s?"https:\/\/www.nhs.uk\/medicines\//gm,
    replaceWithStr:
      ': "https://' + requestHostnameEnv + "/nhs-website-content/medicines/",
  },
  {
    searchForRegex: /:\s?"\/medicines\//gm,
    replaceWithStr:
      ': "https://' + requestHostnameEnv + "/nhs-website-content/medicines/",
  },
  {
    searchForRegex: /href=\\"https:\/\/api.nhs.uk\/medicines\//gm,
    replaceWithStr: 'href=\\"https://www.nhs.uk/medicines/',
  },
  {
    searchForRegex: /href=\\"\/medicines\//gm,
    replaceWithStr: 'href=\\"https://www.nhs.uk/medicines/',
  },
  {
    comment1: "=============================================================",
    comment2: "NHS services                                                 ",
    comment3: "=============================================================",
  },
  {
    searchForRegex: /:\s?"https:\/\/api.nhs.uk\/nhs-services\//gm,
    replaceWithStr:
      ': "https://' + requestHostnameEnv + "/nhs-website-content/nhs-services/",
  },
  {
    searchForRegex: /:\s?"https:\/\/www.nhs.uk\/nhs-services\//gm,
    replaceWithStr:
      ': "https://' + requestHostnameEnv + "/nhs-website-content/nhs-services/",
  },
  {
    searchForRegex: /:\s?"\/nhs-services\//gm,
    replaceWithStr:
      ': "https://' + requestHostnameEnv + "/nhs-website-content/nhs-services/",
  },
  {
    searchForRegex: /href=\\"https:\/\/api.nhs.uk\/nhs-services\//gm,
    replaceWithStr: 'href=\\"https://www.nhs.uk/nhs-services/',
  },
  {
    searchForRegex: /href=\\"\/nhs-services\//gm,
    replaceWithStr: 'href=\\"https://www.nhs.uk/nhs-services/',
  },
  {
    comment1: "=============================================================",
    comment2: "Pregnancy                                                    ",
    comment3: "=============================================================",
  },
  {
    searchForRegex: /:\s?"https:\/\/api.nhs.uk\/pregnancy\//gm,
    replaceWithStr:
      ': "https://' + requestHostnameEnv + "/nhs-website-content/pregnancy/",
  },
  {
    searchForRegex: /:\s?"https:\/\/www.nhs.uk\/pregnancy\//gm,
    replaceWithStr:
      ': "https://' + requestHostnameEnv + "/nhs-website-content/pregnancy/",
  },
  {
    searchForRegex: /:\s?"\/pregnancy\//gm,
    replaceWithStr:
      ': "https://' + requestHostnameEnv + "/nhs-website-content/pregnancy/",
  },
  {
    searchForRegex: /href=\\"https:\/\/api.nhs.uk\/pregnancy\//gm,
    replaceWithStr: 'href=\\"https://www.nhs.uk/pregnancy/',
  },
  {
    searchForRegex: /href=\\"\/pregnancy\//gm,
    replaceWithStr: 'href=\\"https://www.nhs.uk/pregnancy/',
  },
  {
    comment1: "=============================================================",
    comment2: "Common health questions                                      ",
    comment3: "=============================================================",
  },
  {
    searchForRegex: /:\s?"https:\/\/api.nhs.uk\/common-health-questions\//gm,
    replaceWithStr:
      ': "https://' +
      requestHostnameEnv +
      "/nhs-website-content/common-health-questions/",
  },
  {
    searchForRegex: /:\s?"https:\/\/www.nhs.uk\/common-health-questions\//gm,
    replaceWithStr:
      ': "https://' +
      requestHostnameEnv +
      "/nhs-website-content/common-health-questions/",
  },
  {
    searchForRegex: /:\s?"\/common-health-questions\//gm,
    replaceWithStr:
      ': "https://' +
      requestHostnameEnv +
      "/nhs-website-content/common-health-questions/",
  },
  {
    searchForRegex: /href=\\"https:\/\/api.nhs.uk\/common-health-questions\//gm,
    replaceWithStr: 'href=\\"https://www.nhs.uk/common-health-questions/',
  },
  {
    searchForRegex: /href=\\"\/common-health-questions\//gm,
    replaceWithStr: 'href=\\"https://www.nhs.uk/common-health-questions/',
  },
];

var responseContent = context.getVariable("response.content");
var regex, item;
for (var i = 0; i < searchAndReplaceStrings.length; i++) {
  item = searchAndReplaceStrings[i];
  if (item.searchForRegex && item.replaceWithStr) {
    responseContent = responseContent.replace(
      item.searchForRegex,
      item.replaceWithStr
    );
  }
}

var responseJsonObj = JSON.parse(responseContent);
if (responseJsonObj.url) {
  responseJsonObj.webpage = responseJsonObj.url.replace(
    "https://" + requestHostnameEnv + "/nhs-website-content/",
    "https://www.nhs.uk/"
  );
} else if (responseJsonObj.about.url) {
  responseJsonObj.about.webpage = responseJsonObj.about.url.replace(
    "https://" + requestHostnameEnv + "/nhs-website-content/",
    "https://www.nhs.uk/"
  );
}
responseContent = JSON.stringify(responseJsonObj);

context.setVariable("response.content", responseContent);
