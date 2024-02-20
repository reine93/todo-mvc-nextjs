export interface TodoItem {
  id: string;
  title: string;
  body: string;
  completed: boolean;
}

export interface TodoProps {
  todo: TodoItem;
}

export interface TodoEditPageProps {
  params: {
    id:string
  }
}
