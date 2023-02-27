import React from "react";
import Task from "./Task";

function TaskList({TASKS, handleDelete}) {
  return (
    <div className="tasks">
      {TASKS.map((task) => (
        <Task key={task.text} text={task.test} category={task.category} handleDelete={handleDelete}/>
      ))}
    </div>
  );
}

export default TaskList;
