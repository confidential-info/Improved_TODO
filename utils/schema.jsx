import { date, pgTable, serial, varchar } from "drizzle-orm/pg-core";

export const Lists = pgTable('todos', {
    id: serial('id').primaryKey(),
    title: varchar('title').notNull(),
    date: date('date').notNull()
})