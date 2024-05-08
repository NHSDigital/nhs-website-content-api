var proxyPathSuffix = context.getVariable("proxy.pathsuffix");
if (proxyPathSuffix.charAt(proxyPathSuffix.length - 1) === "/") {
  context.setVariable("pathWithTrailingSlash", proxyPathSuffix);
} else {
  context.setVariable("pathWithTrailingSlash", proxyPathSuffix + "/");
}

context.setVariable("target.copy.pathsuffix", false);
