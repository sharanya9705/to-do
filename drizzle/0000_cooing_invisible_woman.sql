CREATE TABLE "todos" (
	"id" serial PRIMARY KEY NOT NULL,
	"task" text NOT NULL,
	"due_date" date,
	"completed" boolean DEFAULT false NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL
);
