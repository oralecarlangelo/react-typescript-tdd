import React, { useState } from "react";

interface EditTodoFormProps {
  initialName: string;
  onUpdateTodo: (updatedName: string) => void;
  onCancel: () => void;
}

const EditTodoForm: React.FC<EditTodoFormProps> = ({
  initialName,
  onUpdateTodo,
  onCancel
}) => {
  const [updatedName, setUpdatedName] = useState(initialName);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUpdatedName(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (updatedName.trim() !== "") {
      onUpdateTodo(updatedName);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter updated todo"
        value={updatedName}
        onChange={handleInputChange}
      />
      <button type="submit">Update</button>
      <button type="button" onClick={onCancel}>
        Cancel
      </button>
    </form>
  );
};

export default EditTodoForm;
