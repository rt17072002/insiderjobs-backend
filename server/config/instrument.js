// Import with `import * as Sentry from "@sentry/node"` if you are using ESM
// const Sentry = require("@sentry/node");
import * as Sentry from "@sentry/node"

Sentry.init({
  dsn: "https://db9129853d1e8fad526552dc9bf5f331@o4510805486206976.ingest.us.sentry.io/4510828008833024",
  integrations:[
    Sentry.mongooseIntegration(),
  ],
  // Setting this option to true will send default PII data to Sentry.
  // For example, automatic IP address collection on events
  sendDefaultPii: true,
});