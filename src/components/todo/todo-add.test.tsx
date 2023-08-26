import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import AddTodoForm from "./todo-add";

test("calls onAddTodo with correct todo name when form is submitted", () => {
  const mockOnAddTodo = jest.fn();
  render(<AddTodoForm onAddTodo={mockOnAddTodo} />);

  const todoName = "New Todo";
  const inputElement = screen.getByPlaceholderText("Enter todo");
  const addButton = screen.getByText("Add Todo");

  fireEvent.change(inputElement, { target: { value: todoName } });
  fireEvent.click(addButton);

  expect(mockOnAddTodo).toHaveBeenCalledWith(todoName);
});

test("clears input field after form submission", () => {
  render(<AddTodoForm onAddTodo={() => {}} />);

  const todoName = "New Todo";
  const inputElement = screen.getByPlaceholderText("Enter todo");
  const addButton = screen.getByText("Add Todo");

  fireEvent.change(inputElement, { target: { value: todoName } });
  fireEvent.click(addButton);

  expect(inputElement).toHaveValue("");
});
