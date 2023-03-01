import React, {useState} from "react";

function NewTaskForm({categories, onTaskFormSubmit}) {

  const [formData, setFormData] = useState({
    text:'',
    category:'Misc'
  })

  // const [text, setText] = useState("")

  // const handleForm = event => {setText(event.target.value)}
  // console.log(text)

  function handleForm(e){
    setFormData({
      text: formData.text,
      category: e.target.value
    })
  }

  function handleInput(e) {
    setFormData({
      text: e.target.value,
      category: formData.category
    });
  }

  // const selectNewCategory = event => {setCategory(event.target.value)}
  // console.log(category)

  // const handleSubmit = event => {
  //   event.preventDefault();
  //   onTaskFormSubmit({text,category})

  console.log(categories)

  return (
    <form className="new-task-form" onSubmit={e => onTaskFormSubmit(formData, e)}>
      <label>
        Details
        <input 
        type="text" 
        name="text" 
        value={formData.text} 
        onInput={handleInput}/>
      </label>
      <label>
        Category
        <select 
        name="category" 
        value={formData.category} 
        onChange={handleForm}
        >
          {categories.map((category) => {
            if (category !== 'All') {
              return <option key={category} value={category}>{category}</option>
            } else {
              return <option key={category}></option>
            }})}
        </select>
      </label>
      <input type="submit" value="Add task"/>
    </form>
  );
}

export default NewTaskForm;
