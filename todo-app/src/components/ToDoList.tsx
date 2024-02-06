import { useState } from "react";

interface TodoItem {
  id: string;
  text: string;
  completed: boolean;
}

function ToDoList() {
  const [todos, setTodos] = useState<TodoItem[]>([]);
  const [newTodo, setNewTodo] = useState("");

  const addTodo = () => {
    if (newTodo !== "") {
      const newId = crypto.randomUUID();
      const newTodoItem: TodoItem = {
        id: newId,
        text: newTodo,
        completed: false,
      };
      setTodos([...todos, newTodoItem]);
      setNewTodo("");
    }
  };
  return <div>ToDoList</div>;
}

export default ToDoList;
