function fixUrl(url) {
  if (url !== null && url.length > 0) {
    var parts = url.split("?");
    if (parts[0].charAt(parts[0].length - 1) !== "/") {
      parts[0] = parts[0] + "/";
    }
    return parts.join("?");
  } else {
    return url;
  }
}

var originalTargetUrl = context.getVariable("target.url");
var modifiedTargetUrl = fixUrl(originalTargetUrl);
context.setVariable("target.url", modifiedTargetUrl);
