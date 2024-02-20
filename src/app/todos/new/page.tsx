import { Input, Button } from "@nextui-org/react"
import { addTodo } from "@/actions"
import Link from "next/link"

export default function NewTodoPage() {
  return (
    <div className="flex justify-center items-center min-h-screen"> 
      <form action={addTodo} className="w-full max-w-md p-4 bg-white shadow-md rounded-lg"> 
        <h3 className="flex justify-center text-lg font-semibold mb-4">Add a new Todo</h3>
        <div className="flex flex-col gap-4">
          <div>
            <Input
              type="text"
              isRequired
              label="Title"
              placeholder="Enter short description of task"
              name="title"
            />
          </div>
          <div>
            <Input
              type="text"
              label="Description"
              placeholder="Describe your task"
              name="body"
            />
          </div>
          <Button type='submit' className="w-full mt-2">Submit</Button> 
          <Button as={Link} href="/">Go back</Button>
        </div>
      </form>
    </div>
  )
}
