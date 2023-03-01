import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {

  const [tasks, setTasks] = useState(TASKS)
  const [selectedCategory, setSelectedCategory] = useState("All")

  // const handleDelete = (deleteTaskText) => {
  //   setTasks(TASKS.filter(task => task.text!== deleteTaskText))
  // }

  function handleDelete(text) {
    setTasks(tasks.filter(task => task.text !== text));
  }

  function handleSelectedCategory(filter){
    setSelectedCategory(filter)
  }

  const tasksToDisplay = tasks.filter(task => {
    if(selectedCategory === "All") return task
    return task.category === selectedCategory
  })

  function handleTaskFormSubmit(formData, e) {
    e.preventDefault();
    setTasks([...tasks, formData])
  }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} selectedCategory={selectedCategory} handleSelectedCategory={handleSelectedCategory}/>
      <NewTaskForm categories={CATEGORIES} onTaskFormSubmit={handleTaskFormSubmit}/>
      <TaskList tasks={tasksToDisplay} handleDelete={handleDelete}/>
    </div>
  );
}

export default App;
