'use client'
import { deleteCompletedTodos, deleteTodoTask } from "@/actions"
import { TodoItem } from "../../../definitions";
import { Button } from "@nextui-org/react";
import { useTransition } from "react";


function DeleteAllBtn( { todos, children }: { todos: TodoItem[]; children: any } ) {
  let [isPending, startTransition] = useTransition();
  
  const deleteCompletedTodosAction = () => {
    const completedTodoIds = todos.filter(todo => todo.completed).map(todo => todo.id);

    startTransition(() => {
      deleteCompletedTodos(completedTodoIds);
    });
  };
  
  return (
    <Button 
    onClick={deleteCompletedTodosAction}
    disabled={isPending}
  >
    Delete completed todos
  </Button>
  )
}

export default DeleteAllBtn