const env_regex = /^([a-zA-Z0-9-]+\.)?api\.service\.nhs\.uk/gm;
var hostname_env = request.headers.host;
hostname_env = hostname_env.match(env_regex, request.headers.host)[0];
context.setVariable("request_hostname_env", hostname_env);
