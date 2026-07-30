import { db } from "@/db";
import { todos } from "@/db/schema";
import { addTodo, toggleTodo, deleteTodo } from "./actions";

export default async function Home() {
  const allTodos = await db.select().from(todos);

  return (
    <main className="min-h-screen bg-slate-100 flex items-center justify-center p-6">
      <div className="w-full max-w-2xl rounded-3xl bg-white p-8 shadow-2xl border border-slate-200">

        <div className="text-center mb-8">
          <h1 className="text-5xl font-extrabold tracking-tight text-gray-800">
            To-Do 
          </h1>
        </div>

        <form action={addTodo} className="space-y-4 mb-8">
          <input
            type="text"
            name="task"
            placeholder="Enter a task..."
            className="w-full rounded-xl border border-slate-300 p-3 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
            required
          />

          <input
            type="date"
            name="dueDate"
            className="w-full rounded-lg border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <button
            type="submit"
            className="w-full rounded-lg bg-blue-600 py-3 text-white font-semibold hover:bg-blue-700 transition"
          >
            Add Task
          </button>
        </form>

        {allTodos.length === 0 ? (
          <div className="text-center py-10 text-gray-500">
            <p className="text-5xl mb-3">📝</p>
            <p className="text-lg font-medium">No tasks yet</p>
            <p>Add your first task above.</p>
          </div>
        ) : (
          <ul className="space-y-4">
            {allTodos.map((todo) => (
              <li
                key={todo.id}
                className="flex items-center justify-between rounded-xl border border-gray-200 p-4 shadow-sm"
              >
                <div>
                  <p
                    className={
                      todo.completed
                        ? "line-through text-gray-400 font-semibold"
                        : "font-semibold text-gray-800"
                    }
                  >
                    {todo.task}
                  </p>

                  {todo.dueDate && (
                    <p className="mt-1 text-sm text-gray-500">
                      📅 {new Date(todo.dueDate).toLocaleDateString()}
                    </p>
                  )}
                </div>

                <div className="flex gap-2">
                  <form action={toggleTodo.bind(null, todo.id, todo.completed)}>
                    <button
                      type="submit"
                      className="rounded-lg bg-emerald-600 px-4 py-2 text-white hover:bg-emerald-700 transition"
                    >
                      {todo.completed ? "Undo" : "Complete"}
                    </button>
                  </form>

                  <form action={deleteTodo.bind(null, todo.id)}>
                    <button
                      type="submit"
                      className="rounded-lg bg-red-600 px-4 py-2 text-white hover:bg-red-700 transition"
                    >
                      Delete
                    </button>
                  </form>
                </div>
              </li>
            ))}
          </ul>
        )}

      </div>
    </main>
  );
}