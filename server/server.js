import "./config/instrument.js";
import express from "express";
import cors from "cors";
import "dotenv/config";
import connectDB from "./config/db.js";
import * as Sentry from "@sentry/node";
import { clerkWebhooks } from "./controllers/webhooks.js";

Sentry.init({
  dsn: "https://db9129853d1e8fad526552dc9bf5f331@o4510805486206976.ingest.us.sentry.io/4510828008833024",
  integrations: [Sentry.mongooseIntegration()],
  sendDefaultPii: true,
});

Sentry.captureException(new Error("Manual test error"));

//initialize express
const app = express();

//connect to db
await connectDB();

//middlewares
app.use(cors());
app.use(express.json());

//routes
app.get("/", (req, res)=>{
    res.send("Api is working");
})

app.get("/debug-sentry", function mainHandler(req, res) {
  throw new Error("My first Sentry error!");
});

app.post("/webhooks", clerkWebhooks);

Sentry.setupExpressErrorHandler(app);

// Port
const PORT = process.env.PORT || 5000;

//start server
app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT} click http://localhost:${PORT}`);
})