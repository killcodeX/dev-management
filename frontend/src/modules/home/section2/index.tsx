import React from "react";
import Todo from "./todoApp";
import TodayTask from "./todayTask";

export default function Section2() {
  return (
    <section className="dashboard-home-section-2">
      <div className="row">
        <TodayTask />
        <Todo />
      </div>
    </section>
  );
}
