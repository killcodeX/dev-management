import React, { useState } from "react";

let week = [
  {
    id: 1,
    day: "Mo",
    date: 1,
  },
  {
    id: 2,
    day: "Tu",
    date: 2,
  },
  {
    id: 3,
    day: "We",
    date: 3,
  },
  {
    id: 4,
    day: "Th",
    date: 4,
  },
  {
    id: 5,
    day: "Fr",
    date: 5,
  },
  {
    id: 6,
    day: "Sa",
    date: 6,
  },
  {
    id: 7,
    day: "Su",
    date: 7,
  },
];

let meeting = [
  {
    id: 1,
    time: "10:20 - 11:00",
    agenda: "9 Degree Project Estimation Meeting",
    with: "Peter Marcus",
    color:'#7239ea'
  },
  {
    id: 2,
    time: "16:30 - 17:00",
    agenda: "Dashboard UI/UX Design Review",
    with: "Jhon Doe",
    color:'#ffc700'
  },
  {
    id: 3,
    time: "12:00 - 13:40",
    agenda: "Marketing Campaign Discussion",
    with: "Mark Morris",
    color:'#50cd89'
  },
];

export default function TodayTask() {
  const [day, setDay] = useState(1);

  const handleDayChange = (id: number) => {
    setDay(id);
  };
  return (
    <div className="col-sm-6 mb-3">
      <div className="card dashboard-card p-4">
        <div className="card-header">
          <h4 className="card-title fw-bold">This Week</h4>
        </div>
        <div className="card-body">
          <div className="week-calender">
            <ul className="week-calender-list flex-ds-row">
              {week.map((item) => {
                return (
                  <li
                    key={item.id}
                    className={`week-calender-list-item btn rounded-pill ${
                      item.id === day ? "active" : null
                    }`}
                    onClick={() => handleDayChange(item.id)}
                  >
                    <div
                      className={`day-name fs-7 fw-semibold ${
                        item.id === day ? "active" : null
                      }`}
                    >
                      {item.day}
                    </div>
                    <div
                      className={`day-date fs-6 fw-bold ${
                        item.id === day ? "active" : null
                      }`}
                    >
                      {item.date}
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="dashboard-meetings-pane" role="tabpanel">
            {
              meeting.map(item =>{
                return(
                  <div key={item.id} className="dashboard-meetings-list" style={{borderLeft:`5px solid ${item.color}`}}>
                    <div className="text-gray-800 fw-semibold fs-4">{item.time}
                    <span className="text-gray-400 fw-semibold fs-7">AM</span>
                    </div>
                    <div className="text-gray-700 fw-semibold fs-6">{item.agenda}</div>
                    <div className="text-gray-400 fw-semibold fs-7">Lead By{" "}
                    <a href='#' className="text-primary opacity-75-hover fw-semibold">{item.with}</a>
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>
    </div>
  );
}
