var requestHostnameEnv = context.getVariable("request_hostname_env");

var searchAndReplaceStrings = [
  {
    comment1: "=============================================================",
    comment2: "Secure protocol and www subdomain                            ",
    comment3: "=============================================================",
  },
  {
    searchForRegex: /http:\/\/www.nhs.uk/gm,
    replaceWithStr: "https://www.nhs.uk",
  },
  {
    searchForRegex: /http:\/\/nhs.uk/gm,
    replaceWithStr: "https://www.nhs.uk",
  },
  {
    searchForRegex: /https:\/\/nhs.uk/gm,
    replaceWithStr: "https://www.nhs.uk",
  },
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
    searchForRegex: /:\s?"https:\/\/nhswebsite-dev.nhs.uk\/conditions\//gm,
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
    searchForRegex: /href=\\"https:\/\/nhswebsite-dev.nhs.uk\/conditions\//gm,
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
    searchForRegex: /:\s?"https:\/\/nhswebsite-dev.nhs.uk\/live-well\//gm,
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
    searchForRegex: /href=\\"https:\/\/nhswebsite-dev.nhs.uk\/live-well\//gm,
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
    searchForRegex: /:\s?"https:\/\/nhswebsite-dev.nhs.uk\/mental-health\//gm,
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
    searchForRegex:
      /href=\\"https:\/\/nhswebsite-dev.nhs.uk\/mental-health\//gm,
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
    searchForRegex: /:\s?"https:\/\/nhswebsite-dev.nhs.uk\/medicines\//gm,
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
    searchForRegex: /href=\\"https:\/\/nhswebsite-dev.nhs.uk\/medicines\//gm,
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
    searchForRegex: /:\s?"https:\/\/nhswebsite-dev.nhs.uk\/nhs-services\//gm,
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
    searchForRegex: /href=\\"https:\/\/nhswebsite-dev.nhs.uk\/nhs-services\//gm,
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
    searchForRegex: /:\s?"https:\/\/nhswebsite-dev.nhs.uk\/pregnancy\//gm,
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
    searchForRegex: /href=\\"https:\/\/nhswebsite-dev.nhs.uk\/pregnancy\//gm,
    replaceWithStr: 'href=\\"https://www.nhs.uk/pregnancy/',
  },
  {
    searchForRegex: /href=\\"\/pregnancy\//gm,
    replaceWithStr: 'href=\\"https://www.nhs.uk/pregnancy/',
  },
  {
    comment1: "=============================================================",
    comment2: "Contraception                                                ",
    comment3: "=============================================================",
  },
  {
    searchForRegex: /:\s?"https:\/\/api.nhs.uk\/contraception\//gm,
    replaceWithStr:
      ': "https://' +
      requestHostnameEnv +
      "/nhs-website-content/contraception/",
  },
  {
    searchForRegex: /:\s?"https:\/\/nhswebsite-dev.nhs.uk\/contraception\//gm,
    replaceWithStr:
      ': "https://' +
      requestHostnameEnv +
      "/nhs-website-content/contraception/",
  },
  {
    searchForRegex: /:\s?"https:\/\/www.nhs.uk\/contraception\//gm,
    replaceWithStr:
      ': "https://' +
      requestHostnameEnv +
      "/nhs-website-content/contraception/",
  },
  {
    searchForRegex: /:\s?"\/contraception\//gm,
    replaceWithStr:
      ': "https://' +
      requestHostnameEnv +
      "/nhs-website-content/contraception/",
  },
  {
    searchForRegex: /href=\\"https:\/\/api.nhs.uk\/contraception\//gm,
    replaceWithStr: 'href=\\"https://www.nhs.uk/contraception/',
  },
  {
    searchForRegex:
      /href=\\"https:\/\/nhswebsite-dev.nhs.uk\/contraception\//gm,
    replaceWithStr: 'href=\\"https://www.nhs.uk/contraception/',
  },
  {
    searchForRegex: /href=\\"\/contraception\//gm,
    replaceWithStr: 'href=\\"https://www.nhs.uk/contraception/',
  },
  {
    comment1: "=============================================================",
    comment2: "Vaccinations                                                 ",
    comment3: "=============================================================",
  },
  {
    searchForRegex: /:\s?"https:\/\/api.nhs.uk\/vaccinations\//gm,
    replaceWithStr:
      ': "https://' + requestHostnameEnv + "/nhs-website-content/vaccinations/",
  },
  {
    searchForRegex: /:\s?"https:\/\/nhswebsite-dev.nhs.uk\/vaccinations\//gm,
    replaceWithStr:
      ': "https://' + requestHostnameEnv + "/nhs-website-content/vaccinations/",
  },
  {
    searchForRegex: /:\s?"https:\/\/www.nhs.uk\/vaccinations\//gm,
    replaceWithStr:
      ': "https://' + requestHostnameEnv + "/nhs-website-content/vaccinations/",
  },
  {
    searchForRegex: /:\s?"\/vaccinations\//gm,
    replaceWithStr:
      ': "https://' + requestHostnameEnv + "/nhs-website-content/vaccinations/",
  },
  {
    searchForRegex: /href=\\"https:\/\/api.nhs.uk\/vaccinations\//gm,
    replaceWithStr: 'href=\\"https://www.nhs.uk/vaccinations/',
  },
  {
    searchForRegex: /href=\\"https:\/\/nhswebsite-dev.nhs.uk\/vaccinations\//gm,
    replaceWithStr: 'href=\\"https://www.nhs.uk/vaccinations/',
  },
  {
    searchForRegex: /href=\\"\/vaccinations\//gm,
    replaceWithStr: 'href=\\"https://www.nhs.uk/vaccinations/',
  },
  {
    comment1: "=============================================================",
    comment2: "Women's health                                               ",
    comment3: "=============================================================",
  },
  {
    searchForRegex: /:\s?"https:\/\/api.nhs.uk\/womens-health\//gm,
    replaceWithStr:
      ': "https://' +
      requestHostnameEnv +
      "/nhs-website-content/womens-health/",
  },
  {
    searchForRegex: /:\s?"https:\/\/nhswebsite-dev.nhs.uk\/womens-health\//gm,
    replaceWithStr:
      ': "https://' +
      requestHostnameEnv +
      "/nhs-website-content/womens-health/",
  },
  {
    searchForRegex: /:\s?"https:\/\/www.nhs.uk\/womens-health\//gm,
    replaceWithStr:
      ': "https://' +
      requestHostnameEnv +
      "/nhs-website-content/womens-health/",
  },
  {
    searchForRegex: /:\s?"\/womens-health\//gm,
    replaceWithStr:
      ': "https://' +
      requestHostnameEnv +
      "/nhs-website-content/womens-health/",
  },
  {
    searchForRegex: /href=\\"https:\/\/api.nhs.uk\/womens-health\//gm,
    replaceWithStr: 'href=\\"https://www.nhs.uk/womens-health/',
  },
  {
    searchForRegex:
      /href=\\"https:\/\/nhswebsite-dev.nhs.uk\/womens-health\//gm,
    replaceWithStr: 'href=\\"https://www.nhs.uk/womens-health/',
  },
  {
    searchForRegex: /href=\\"\/womens-health\//gm,
    replaceWithStr: 'href=\\"https://www.nhs.uk/womens-health/',
  },
  {
    comment1: "=============================================================",
    comment2: "Manifest pages                                               ",
    comment3: "=============================================================",
  },
  {
    searchForRegex: /:\s?"https:\/\/www.nhs.uk\/content-api\/manifest\//gm,
    replaceWithStr:
      ': "https://' + requestHostnameEnv + "/nhs-website-content/manifest/",
  },
  {
    searchForRegex:
      /:\s?"https:\/\/nhswebsite-dev.nhs.uk\/content-api\/manifest\//gm,
    replaceWithStr:
      ': "https://' + requestHostnameEnv + "/nhs-website-content/manifest/",
  },
  {
    comment1: "=============================================================",
    comment2: "Webpage hostname                                             ",
    comment3: "=============================================================",
  },
  {
    searchForRegex:
      /"webpage":\s?"https:\/\/internal-dev.api.service.nhs.uk\/nhs-website-content\//gm,
    replaceWithStr: '"webpage": "https://www.nhs.uk/',
  },
  {
    searchForRegex:
      /"webpage":\s?"https:\/\/internal-qa.api.service.nhs.uk\/nhs-website-content\//gm,
    replaceWithStr: '"webpage": "https://www.nhs.uk/',
  },
  {
    searchForRegex:
      /"webpage":\s?"https:\/\/int.api.service.nhs.uk\/nhs-website-content\//gm,
    replaceWithStr: '"webpage": "https://www.nhs.uk/',
  },
  {
    searchForRegex:
      /"webpage":\s?"https:\/\/api.service.nhs.uk\/nhs-website-content\//gm,
    replaceWithStr: '"webpage": "https://www.nhs.uk/',
  },
  {
    comment1: "=============================================================",
    comment2: "Remove data-block-key Attributes from CMS                    ",
    comment3: "=============================================================",
  },
  {
    searchForRegex: /\s+data-block-key=\\"[^"]*\\"/gm,
    replaceWithStr: "",
  },
  {
    comment1: "=============================================================",
    comment2: "Convert any remaining relative HREFs to absolute HREFs       ",
    comment3: "=============================================================",
  },
  {
    searchForRegex: /href=\\"\//gm,
    replaceWithStr: 'href=\\"https://www.nhs.uk/',
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
} else if (responseJsonObj.about && responseJsonObj.about.url) {
  responseJsonObj.about.webpage = responseJsonObj.about.url.replace(
    "https://" + requestHostnameEnv + "/nhs-website-content/",
    "https://www.nhs.uk/"
  );
}
responseContent = JSON.stringify(responseJsonObj);

context.setVariable("response.content", responseContent);
