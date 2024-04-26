function fixUrl(url) {
  if (url !== null && url.length > 0) {
    let parts = url.split("?");
    if (parts[0].charAt(parts[0].length - 1) !== "/") {
      parts[0] = parts[0] + "/";
    }
    return parts.join("?");
  } else {
    return url;
  }
}

var originalUri = context.getVariable("request.uri");
var modifiedUri = fixUrl(originalUri);
context.setVariable("request.uri", modifiedUri);
