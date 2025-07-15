import './config/instrument.js';
import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import connectDB from './config/db.js';
import * as Sentry from "@sentry/node";
import {clerkWebhooks} from './controllers/webhooks.js'

const app = express();

// Connect to DB
await connectDB();

// General middleware
app.use(cors());
app.use(express.json());


// Sentry Express integration
// Must come BEFORE routes to ensure correct instrumentation:
Sentry.setupExpressErrorHandler(app);

// Your routes
app.get("/", (req, res) => res.send("API WORKING FINE"));
app.get("/debug-sentry", (req, res) => {
  throw new Error("🔥 My first Sentry error!");
});
app.post('/webhooks',clerkWebhooks)



// You can also define other error handlers below (optional)

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`✅ SERVER IS RUNNING ON PORT ${PORT}`);
});
