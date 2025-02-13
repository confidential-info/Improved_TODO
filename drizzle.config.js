import { defineConfig } from "drizzle-kit";
export default defineConfig({
  dialect: "postgresql",
  schema: "./utils/schema.jsx",
  out: "./drizzle",
  dbCredentials: {
    url: "postgresql://neondb_owner:npg_mc4fVowQIH8R@ep-proud-bar-a17ah5pf-pooler.ap-southeast-1.aws.neon.tech/Todo%20List?sslmode=require",
  },
});