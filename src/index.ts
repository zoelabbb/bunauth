import { Hono } from "hono";
import { bearerAuth } from "hono/bearer-auth";

const app = new Hono();

const port = parseInt(process.env.PORT || "3000", 10);

const home = app.get("/", (c) => {
    return c.json({ message: "Basic auth using Bun and Hono" });
});

const token = "iloveprogramming";

// It will validate token
app.use("/auth/*", bearerAuth({ token }));

app.get("/auth/page", (c) => {
    return c.text("Auth page : Your token is valid");
});

console.log(`Listening on http://localhost:${port}`);

export default app;