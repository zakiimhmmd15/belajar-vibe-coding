import { Elysia } from "elysia";
import { db } from "../db";
import { users } from "../db/schema";

export const userRoutes = new Elysia({ prefix: "/users" })
  .get("/", async () => {
    try {
      const allUsers = await db.select().from(users);
      return allUsers;
    } catch (error) {
      console.error("Gagal mengambil data user:", error);
      return { success: false, error: "Gagal menghubungkan ke database MySQL" };
    }
  });
