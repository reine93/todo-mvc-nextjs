'use client'
import { Button, Input } from "@nextui-org/react"
import { TodoProps } from "../../../definitions"
import { useState, ChangeEvent } from "react"
import { updateTaskContent } from "@/actions"

export default function TodoEditForm({todo} : TodoProps) {

  const [title, setTitle] = useState(todo.title)
  const [body, setBody] = useState(todo.body)

  const handleInputChange = (e : ChangeEvent<HTMLInputElement>) => {
    const {name, value} = e.target;
    if (name === 'title') {
      setTitle(value)
    }
    if (name === 'body') {
      setBody(value)
    }
  }

  const updateTaskAction = updateTaskContent.bind(null, todo.id, title, body)

  return (
    <div className="flex justify-center items-center h-screen"> 
      <form action={updateTaskAction} className="w-full max-w-md p-4 bg-white shadow-md rounded-lg"> 
        <div className="flex flex-col gap-4">
        <h3 className="flex justify-center">Editing a task</h3>
          <div className="flex gap-4">
            <Input
              type="text"
              label="Short description"
              value={title}
              onChange={handleInputChange}
              name="title"
              isRequired
            />
          </div>
          <div className="flex gap-4">
            <Input
              type="text"
              label="Long description"
              value={body}
              onChange={handleInputChange}
              name="body"
            />
          </div>
          <Button type='submit' className="mt-4">Submit</Button> 
        </div>
      </form>
    </div>
  );
  }