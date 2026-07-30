import {
  pgTable,
  serial,
  text,
  boolean,
  timestamp,
  date,
} from "drizzle-orm/pg-core";

export const todos = pgTable("todos", {
  id: serial("id").primaryKey(),

  task: text("task").notNull(),

  dueDate: date("due_date"),

  completed: boolean("completed").default(false).notNull(),

  createdAt: timestamp("created_at").defaultNow().notNull(),

  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});