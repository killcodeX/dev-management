import React, { useState } from "react";
import { BsSliders, BsTrash3 } from "react-icons/bs";

let data = [
  {
    id: 1,
    completed: false,
    todo: "Make Coffee",
  },
  {
    id: 2,
    completed: false,
    todo: "Have Standup",
  },
  {
    id: 3,
    completed: false,
    todo: "Complete UI Design",
  },
  {
    id: 4,
    completed: true,
    todo: "Meet with Team Lead",
  },
  {
    id: 5,
    completed: true,
    todo: "Get Budget",
  },
];

export default function Todo() {
  const [todo, setTodo] = useState([...data]);
  const [inputTodo, setInputTodo] = useState("");

  const handleCheckbox = (id: number) => {
    let newTodo = [...todo];
    newTodo.forEach((item) => {
      if (item.id === id) {
        item.completed = !item.completed;
      }
    });
    setTodo(newTodo);
  };

  const handleDelete = (id: number) => {
    setTodo((item) => {
      return item.filter((todo) => todo.id !== id);
    });
  };

  const handleSubmit = () => {
    let newData = {
      id: todo.length + 1,
      completed: false,
      todo: inputTodo,
    };

    setTodo([...todo, newData]);
  };

  return (
    <div className="col-sm-6">
      <div className="card dashboard-card p-4">
        <div className="card-header">
          <h4 className="card-title fw-bold">Todo List</h4>
          <div className="card-tootlbar fs-5">
            <BsSliders />
          </div>
        </div>
        <div className="card-body">
          {todo.map((item) => {
            return (
              <div key={item.id} className="todo-list flex-ds-row">
                <div className="todo-body-left-side">
                  <label className="form-check form-check-custom form-check-inline form-check-solid me-5 is-invalid">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      checked={item.completed}
                      onChange={() => handleCheckbox(item.id)}
                    />
                    <span
                      className={`fw-semibold ps-2 fs-6 ${
                        item.completed ? "strike-through" : null
                      }`}
                    >
                      {item.todo}
                    </span>
                  </label>
                </div>
                <div className="todo-body-right-side">
                  <div
                    className="delete-todo text-danger"
                    role="button"
                    onClick={() => handleDelete(item.id)}
                  >
                    <BsTrash3 />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="card-footer flex-ds-row">
          <input
            className="form-control form-control-lg form-control-solid mb-3 mb-lg-0"
            placeholder="Enter Task to complete"
            type="text"
            value={inputTodo}
            onChange={(e) => setInputTodo(e.target.value)}
          />
          <button className="btn btn-primary" onClick={handleSubmit}>
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}
