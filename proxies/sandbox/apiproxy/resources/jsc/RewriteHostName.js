var response = context.getVariable("response.content");
var json = JSON.parse(response);

if (json.place) {
  // Loop over each item in the search result array, re-writing the hostname to that of the initial request
  json.place.forEach(value => {
    var request_hostname = context.getVariable("request_hostname_env");
    // Annoyingly, Apigee's version of JS doesn't support regex look-behinds,
    // so we grab the env string including https:// prefix
    var hostname_regex = /(^https:\/\/([a-zA-Z\-]+\.)+)nhs\.uk/gm;
    var rewritten_url = value.url.replace(hostname_regex, "https://" + request_hostname);
    value.url = rewritten_url;
    // value.url = value.url.replace("api-version=1", "api-version=2");
    // value.url = value.url.replace("service-search", "service-search-api");
  });

  // Update the response payload with the corrected urls
  context.setVariable("message.content", JSON.stringify(json));
}
