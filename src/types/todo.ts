export type TodoStatus = "todo" | "doing" | "done";

export type Todo = {
  id: string;
  title: string;
  description: string;
  status: TodoStatus;
  createdAt: string;
};
