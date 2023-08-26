import { act, renderHook } from "@testing-library/react";
import { useTodo } from "./useTodo"; // Make sure to import the correct path

describe("useTodo custom hook", () => {
  test("should add a new todo", () => {
    const { result } = renderHook(() => useTodo({}));
    const { addTodo } = result.current;

    expect(result.current.todos).toHaveLength(0);

    act(() => addTodo("New Todo"));
    expect(result.current.todos).toHaveLength(1);
    expect(result.current.todos[0].name).toBe("New Todo");
  });

  test("should update a todo", () => {
    const { result } = renderHook(() =>
      useTodo({
        initialTodo: [{ id: 1, name: "Initial Todo" }],
      })
    );
    const { updateTodo } = result.current;

    act(() => updateTodo(1, "Updated Todo"));
    expect(result.current.todos[0].name).toBe("Updated Todo");
  });

  test("should delete a todo", () => {
    const { result } = renderHook(() =>
      useTodo({
        initialTodo: [{ id: 1, name: "Todo to Delete" }],
      })
    );
    const { deleteTodo } = result.current;

    act(() => deleteTodo(1));
    expect(result.current.todos).toHaveLength(0);
  });
});
