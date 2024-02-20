'use client'

import { useTransition } from "react";
import { TodoProps } from "../../../definitions";
import { Button, Checkbox, Link } from "@nextui-org/react";
import { updateTodoCompletion, deleteTodoTask } from "@/actions";

const TodoTask = ({ todo } : TodoProps) => {
  let [isPending, startTransition] = useTransition();
  
  const titleStyle = todo.completed ? "font-bold text-lg mb-2 line-through" : "font-bold text-lg mb-2";
  const bodyStyle = todo.completed ? "text-gray-700 text-sm line-through" : "text-gray-700 text-sm";

  return (
  <div key={todo.id} className="mb-4 p-4 rounded shadow bg-white w-64 overflow-hidden">
      <span><Checkbox isSelected={todo.completed} onValueChange={() => {startTransition(() => updateTodoCompletion(todo.id, !todo.completed))}}/></span>
      <span className={`px-2 ${titleStyle} break-words`}>{todo.title}</span>
      <div className={`px-2 ${bodyStyle} break-words`}>{todo.body}</div>
      <div className="flex justify-between mt-2">
        <Button onClick={() => {startTransition(() => deleteTodoTask(todo.id))}} disabled = {isPending} >Delete</Button>
        <Button href={`/todos/${todo.id}/edit`} as={Link}>Edit task</Button>
      </div>
  </div>

  );
};

export default TodoTask;