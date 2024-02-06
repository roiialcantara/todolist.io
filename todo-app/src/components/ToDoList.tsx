import { useState } from "react";

interface TodoItem {
  id: string;
  text: string;
  completed: boolean;
}

function ToDoList() {
  const [todos, setTodos] = useState<TodoItem[]>([]);
  const [newTodo, setNewTodo] = useState("");

  // Add Items
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

  // Remove Item
  const removeTodo = (id: string) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  // Complete Toggler
  const toggleComplete = (id: string) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });
    setTodos(updatedTodos);
  };
  return <div>ToDoList</div>;
}

export default ToDoList;
