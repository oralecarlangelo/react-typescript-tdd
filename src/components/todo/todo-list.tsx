import { useState } from "react";
import { Todo } from "./todo.types";
import EditTodoForm from "./todo-edit";

interface TodoListProps {
  todos: Todo[];
  onDelete: (id: number) => void;
  onUpdate: (id: number, updatedName: string) => void;
}
export const TodoList: React.FC<TodoListProps> = ({
  todos,
  onDelete,
  onUpdate,
}) => {
  const [edit, setEdit] = useState<null | number>();
  const handleUpdateTodo = (id: number, updatedName: string) => {
    onUpdate(id, updatedName);
  };
  return (
    <div>
      {todos.length > 0 ? (
        <ul>
          {todos.map((todo: Todo) => {
            return (
              <li key={todo.id}>
                {todo.id === edit ? (
                  <EditTodoForm
                    onUpdateTodo={(updatedName: string) =>
                      handleUpdateTodo(todo.id, updatedName)
                    }
                    initialName={todo.name}
                    onCancel={() => setEdit(null)}
                  />
                ) : (
                  <>
                    {todo.name}{" "}
                    <button onClick={() => onDelete(todo.id)}>Delete</button>
                    <button onClick={() => setEdit(todo.id)}>Edit</button>
                  </>
                )}
              </li>
            );
          })}
        </ul>
      ) : (
        "No todos"
      )}
    </div>
  );
};
