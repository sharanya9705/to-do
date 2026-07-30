"use server";

import { db } from "@/db";
import { todos } from "@/db/schema";
import { revalidatePath } from "next/cache";
import { eq } from "drizzle-orm";

export async function addTodo(formData: FormData) {
  const task = formData.get("task") as string;
  const dueDate = formData.get("dueDate") as string;

  if (!task.trim()) return;

  await db.insert(todos).values({
    task,
    dueDate: dueDate || null,
  });

  revalidatePath("/");
}

export async function toggleTodo(id: number, completed: boolean) {
  await db
    .update(todos)
    .set({
      completed: !completed,
    })
    .where(eq(todos.id, id));

  revalidatePath("/");
}

export async function deleteTodo(id: number) {
  await db.delete(todos).where(eq(todos.id, id));

  revalidatePath("/");
}