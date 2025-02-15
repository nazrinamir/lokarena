import { Hono } from "hono";
import { cors } from "hono/cors";

const app = new Hono();

// Enable CORS for React
app.use(cors());

// Sample API endpoint
app.get("/api/message", (c) => {
  return c.json({ message: "Hello from Hono API!" });
});

export default app;
