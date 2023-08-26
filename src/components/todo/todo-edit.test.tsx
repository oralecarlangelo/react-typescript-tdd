import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import EditTodoForm from "./todo-edit";

describe("EditTodoForm Component", () => {
  it("renders correctly", () => {
    const mockOnUpdateTodo = jest.fn();
    const mockOnCancel = jest.fn();
    const initialName = "TODO-1";

    render(
      <EditTodoForm
        initialName={initialName}
        onUpdateTodo={mockOnUpdateTodo}
        onCancel={mockOnCancel}
      />
    );

    const inputElement = screen.getByPlaceholderText("Enter updated todo");
    const updateButton = screen.getByText("Update");
    const cancelButton = screen.getByText("Cancel");

    expect(inputElement).toBeInTheDocument();
    expect(updateButton).toBeInTheDocument();
    expect(cancelButton).toBeInTheDocument();
  });

  it("calls onUpdateTodo callback with updated name when form is submitted", () => {
    const mockOnUpdateTodo = jest.fn();
    const mockOnCancel = jest.fn();
    const initialName = "TODO-1";
    const updatedName = "Updated Todo";

    render(
      <EditTodoForm
        initialName={initialName}
        onUpdateTodo={mockOnUpdateTodo}
        onCancel={mockOnCancel}
      />
    );

    const inputElement = screen.getByPlaceholderText("Enter updated todo");
    const updateButton = screen.getByText("Update");

    fireEvent.change(inputElement, { target: { value: updatedName } });
    fireEvent.click(updateButton);

    expect(mockOnUpdateTodo).toHaveBeenCalledWith(updatedName);
  });

  it("calls onCancel callback when Cancel button is clicked", () => {
    const mockOnUpdateTodo = jest.fn();
    const mockOnCancel = jest.fn();
    const initialName = "TODO-1";

    render(
      <EditTodoForm
        initialName={initialName}
        onUpdateTodo={mockOnUpdateTodo}
        onCancel={mockOnCancel}
      />
    );

    const cancelButton = screen.getByText("Cancel");

    fireEvent.click(cancelButton);

    expect(mockOnCancel).toHaveBeenCalled();
  });
});
