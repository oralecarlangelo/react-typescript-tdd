import { render, screen, fireEvent } from '@testing-library/react';
import { TodoList } from './todo-list'; 
import { Todo } from './todo.types';

describe('TodoList Component', () => {
  it('renders todos correctly', () => {
    const todos = [{ id: 1, name: "TODO-1" }];
    const mockOnDelete = jest.fn();
    const mockOnUpdate = jest.fn();
    render(<TodoList todos={todos} onDelete={mockOnDelete} onUpdate={mockOnUpdate}/>);
    
    const todoItem = screen.getByText('TODO-1');
    expect(todoItem).toBeInTheDocument();
  });

  it('calls onDelete when delete button is clicked', () => {
    const todos = [{ id: 1, name: "TODO-1" }];
    const mockOnDelete = jest.fn();
    const mockOnUpdate = jest.fn();
    render(<TodoList todos={todos} onDelete={mockOnDelete} onUpdate={mockOnUpdate}/>);

    const deleteButton = screen.getByText('Delete');
    fireEvent.click(deleteButton);

    expect(mockOnDelete).toHaveBeenCalledWith(1);
  });

  it('displays multiple todos correctly', () => {
    const todos = [
      { id: 1, name: "TODO-1" },
      { id: 2, name: "TODO-2" },
    ];
    const mockOnDelete = jest.fn();
    const mockOnUpdate = jest.fn();
    render(<TodoList todos={todos} onDelete={mockOnDelete} onUpdate={mockOnUpdate}/>);

    const todoItem1 = screen.getByText('TODO-1');
    const todoItem2 = screen.getByText('TODO-2');
    expect(todoItem1).toBeInTheDocument();
    expect(todoItem2).toBeInTheDocument();
  });

  it('displays no todos message when todos are empty', () => {
    const todos: Todo[] = [];
    const mockOnDelete = jest.fn();
    const mockOnUpdate = jest.fn();
    render(<TodoList todos={todos} onDelete={mockOnDelete} onUpdate={mockOnUpdate}/>);

    const noTodosMessage = screen.getByText('No todos');
    expect(noTodosMessage).toBeInTheDocument();
  });
});
