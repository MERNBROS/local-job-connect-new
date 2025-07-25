// Import with `import * as Sentry from "@sentry/node"` if you are using ESM
import * as Sentry from "@sentry/node"

import { nodeProfilingIntegration } from "@sentry/profiling-node";

Sentry.init({
  dsn: "https://f4dbea17ef6a36b075064bcb02dd0987@o4509673528492032.ingest.de.sentry.io/4509673537798224",
  integrations: [
    nodeProfilingIntegration(),
    Sentry.mongoIntegration()
  ],
  // Tracing
//   tracesSampleRate: 1.0, //  Capture 100% of the transactions
  // Set sampling rate for profiling - this is evaluated only once per SDK.init call
  profileSessionSampleRate: 1.0,
  // Trace lifecycle automatically enables profiling during active traces
  profileLifecycle: 'trace',

  // Setting this option to true will send default PII data to Sentry.
  // For example, automatic IP address collection on events
  sendDefaultPii: true,
});



// Profiling happens automatically after setting it up with `Sentry.init()`.
// All spans (unless those discarded by sampling) will have profiling data attached to them.
// Sentry.startSpan({
//   name: "My Span",
// }, () => {
//   // The code executed here will be profiled
// });




