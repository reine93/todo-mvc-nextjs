import { getAllTodos, getTodo } from "@/actions"
import { TodoEditPageProps, TodoItem } from "../../../../../definitions"
import { notFound } from "next/navigation";
import TodoEditForm from "@/app/components/TodoEditForm";

export default async function EditTodo(props : TodoEditPageProps) {

  const todo = await getTodo(props.params.id)

  if(!todo) {
    return notFound();
  }

  return (
    <>
      <TodoEditForm todo = {todo}/>
    </>

  )
}


export async function generateStaticParams() { //get ids from database and render as static site
  const todos = await getAllTodos();

  return todos.map((todo: TodoItem) => {
    return {
      id: todo.id
    }
  })

}