# To-Do 

To-Do is a full-stack task management application built using Next.js, Supabase, and Drizzle ORM. It allows users to create, manage, and organize their daily tasks through a simple and responsive interface. The project was built to understand how a modern web application connects a frontend with a real database while keeping the user experience clean and intuitive.

## Features

- Create new tasks
- Add optional due dates
- Mark tasks as completed or undo completed tasks
- Delete tasks
- Store task data in a PostgreSQL database
- Responsive user interface built with Tailwind CSS

## Tech Stack

**Frontend**
- Next.js 16
- React
- TypeScript
- Tailwind CSS

**Backend**
- Next.js Server Actions
- Drizzle ORM

**Database**
- Supabase PostgreSQL

**Deployment**
- Vercel

## Project Structure

```
app/
├── actions.ts
├── layout.tsx
├── page.tsx
├── globals.css

db/
├── index.ts
├── schema.ts
```

## How It Works

The application uses Next.js Server Actions to handle all database operations. Whenever a user creates, updates, or deletes a task, the request is processed on the server using Drizzle ORM. The database is hosted on Supabase, and the page automatically refreshes after each action so the latest data is displayed without requiring any manual refresh.

## Getting Started

Clone the repository:

```bash
git clone https://github.com/your-username/to-do-master.git
```

Move into the project folder:

```bash
cd to-do-master
```

Install the required dependencies:

```bash
npm install
```

Create a `.env` file and add your database connection string:

```env
DATABASE_URL=your_database_url
```

Start the development server:

```bash
npm run dev
```

The application will be available at:

```
http://localhost:3000
```
