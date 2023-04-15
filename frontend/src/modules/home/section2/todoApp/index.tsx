import React from "react";
import { BsSliders } from "react-icons/bs";

export default function Todo() {
  return (
    <div className="col-sm-6">
      <div className="card dashboard-card p-4">
        <div className="card-header">
          <h4 className="card-title fw-bold">Todo List</h4>
          <div className="card-tootlbar">
            <BsSliders />
          </div>
        </div>
      </div>
    </div>
  );
}
