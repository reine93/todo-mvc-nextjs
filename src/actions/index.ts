'use server' 

import { revalidatePath } from "next/cache";
import { TodoItem } from "../../definitions"
import { redirect } from "next/navigation";
const dbURL = 'http://localhost:4000'

export const getAllTodos = async () : Promise<TodoItem[]> => {
  const res = await fetch(`${dbURL}/todos`);
  const todos = await res.json();
  return todos;
}

export const getTodo = async( id : string ) : Promise<TodoItem | null> => {
    const res = await fetch(`${dbURL}/todos/${id}`)

    if (!res.ok && res.status === 404) {
      return null;
    };


    const todo = await res.json();
    return todo;
  
}

export const addTodo = async (formData: FormData) => {

  const newTodo = {
    title: formData.get('title') as string,
    body: formData.get('body') as string,
    completed: false
  }

  const response = await fetch(`${dbURL}/todos`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(newTodo) // Convert the JavaScript object into a JSON string
  });

  if (!response.ok) {
    throw new Error(`Failed to add todo. Status: ${response.status}`);
  }

  revalidatePath('/');
  redirect('/');
}

export const updateTaskContent = async (id: string, title: string, body: string) => {
  const response = await fetch(`${dbURL}/todos/${id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({title, body})
  });

  if (!response.ok) {
    throw new Error(`Failed to update task content. Status: ${response.status}`);
  }

  revalidatePath('/') ;
  revalidatePath(`/todos/${id}/edit`);
  redirect('/');

}

export const updateTodoCompletion = async (id: string, completed: boolean) => {
  const response = await fetch(`${dbURL}/todos/${id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ completed })
  });

  if (!response.ok) {
    throw new Error(`Failed to update todo completion. Status: ${response.status}`);
  }

  revalidatePath('/')
};

export const deleteTodoTask = async(id : string) => {

    const res = await fetch(`${dbURL}/todos/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },
    });

    if (!res.ok) {
      throw new Error(`Failed to delete todo with status: ${res.status}`);
    }


revalidatePath('/');
}

export const deleteCompletedTodos = async (ids : string[]) => {
  await Promise.all(ids.map(id => deleteTodoTask(id)));
  revalidatePath('/')
};