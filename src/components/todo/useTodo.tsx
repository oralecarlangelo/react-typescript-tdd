import { useState } from "react";
import { Todo } from "./todo.types";

interface UseTodoProps {
  initialTodo?: Todo[];
}

export const useTodo = ({ initialTodo = [] }: UseTodoProps) => {
  const [todos, setTodos] = useState<Todo[]>(initialTodo);

  const addTodo = (name: string) => {
    const newTodo: Todo = { id: todos.length + 1, name };
    setTodos([...todos, newTodo]);
  };

  const updateTodo = (id: number, updatedName: string) => {
    const updatedTodos = todos.map(todo =>
      todo.id === id ? { ...todo, name: updatedName } : todo
    );
    setTodos(updatedTodos);
  };

  const deleteTodo = (id: number) => {
    const updatedTodos = todos.filter(todo => todo.id !== id);
    setTodos(updatedTodos);
  };

  return { todos, addTodo, updateTodo, deleteTodo };
};
