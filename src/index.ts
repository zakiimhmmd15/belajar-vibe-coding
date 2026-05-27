import { Elysia } from "elysia";
import { userRoutes } from "./routes/user";

const app = new Elysia()
  .get("/", () => "Hello World")
  .use(userRoutes)
  .listen(process.env.PORT || 3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
