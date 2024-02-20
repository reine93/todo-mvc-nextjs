import TodoTask from "./TodoTask";
import { getAllTodos } from "@/actions";
import DeleteAllBtn from "./DeleteAllBtn";


export default async function TodoList() {
 
  const todos = await getAllTodos();

  const completedTodos = todos.some(todo => todo.completed);
  
  return (
    <div className="flex flex-col items-center justify-center p-4">
      {todos.map((todo) => (
        <TodoTask key={todo.id} todo={todo} />
      ))}
      {completedTodos && <DeleteAllBtn todos={todos}>Delete All Completed</DeleteAllBtn>}
    </div>
  );
}
