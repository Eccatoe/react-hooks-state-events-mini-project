import React, {useState} from "react";

function NewTaskForm({categories, onTaskFormSubmit}) {

  const [text, setText]=useState('')
  const [category, setCategory]=useState('Code')

  const categoryOptions=categories.map((category)=><option key={category}>{category}</option>)

  function handleAddText(e){
    setText(e.target.value)
  }

  function handleSubmit(e){
    e.preventDefault()
    onTaskFormSubmit({text, category})
    setText('')
    setCategory('Code')  
  }

  return (
    <form className="new-task-form" onSubmit={handleSubmit} >
      <label>
        Details
        <input 
        type="text" 
        value={text} 
        onChange={(e)=>setText(e.target.value)}
          />
      </label>
      <label>
        Category
        <select 
        value={category}
        onChange={(e)=>setCategory(e.target.value)}
        >
          {categoryOptions}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
