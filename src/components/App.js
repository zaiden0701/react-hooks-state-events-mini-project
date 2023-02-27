import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {

  const [task, setTasks] = useState(TASKS)
  const [selectedCategory, setSelectedCategory] = useState(task)

  const handleDelete = (deleteTaskText) => {
    setTasks(TASKS.filter(task => task.text!== deleteTaskText))
  }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter />
      <NewTaskForm />
      <TaskList TASKS={TASKS} handleDelete={handleDelete}/>
    </div>
  );
}

export default App;
