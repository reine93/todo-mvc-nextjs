import { Button } from "@nextui-org/react";
import TodoList from "./components/TodoList";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <title>Todo MVC</title>
      <div className="text-center">
        <h1>Todo MVC in NextJS</h1>
        <TodoList />
      </div>
      <Button
        href="/todos/new"
        as={Link}
        color="default" 
        variant="faded"
      >
        Add new todo
      </Button>
    </div>
  );
}
