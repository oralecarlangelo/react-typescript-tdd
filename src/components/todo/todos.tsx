import { TodoList } from "./todo-list";
import { useTodo } from "./useTodo";
import AddTodoForm from "./todo-add";

const todosJson = [{ id: 1, name: "TODO-1" }];

const Todos = () => {
  const { todos, addTodo, deleteTodo, updateTodo } = useTodo({ initialTodo: todosJson });
  return (
    <div>
      <AddTodoForm onAddTodo={addTodo} />
      <TodoList todos={todos} onDelete={deleteTodo} onUpdate={updateTodo} />
    </div>
  );
};

export default Todos;
