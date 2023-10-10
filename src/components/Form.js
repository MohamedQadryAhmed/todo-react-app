import { useRef, useState } from "react";

import { TodoList } from "./TodoList";


export const Form = () => {
  // const [todos, setTodos] = useState(tasksList);
  const [list ,setList] = useState([]);
  const [notes, setNotes] = useState("");
  
  const inputRef = useRef(null);
  const addNote = (e) => {
    e.preventDefault();
    const date = new Date();
    const taskTime = `${date.getHours()}:${date.getMinutes()}`;
    //console.log(taskTime);
    
    inputRef.current.value = "";
    if(notes){
      setList([...list, { title: notes, time: taskTime , completed: false}]);
    }
   
    setNotes("");
  };
  const completeTask = (title) =>{
      console.log(title)
      setList(list.map(item => item.title === title? {...item, completed:!item.completed} : item));
  }

  const deleteTask = (title) =>{
    console.log(title)
    setList(list.filter(item => item.title!== title));

  }

  return (
    <div className="container border bg-light border-warning rounded mt-5">
      {/* <Form /> */}
      <div className="bg-primary rounded m-5">
        <h1 className="text-light d-flex justify-content-end me-5 pe-5 pt-5">
          TO-DO APP!
        </h1>
        <h5 className="text-light d-flex justify-content-end me-5 pe-5 ">
          Add New To-Do
        </h5>
        <input
          className="form-control w-75 m-5 p-2"
          placeholder="Enter New Note"
          name="note"
          ref={inputRef}
          onChange={(e) => setNotes(e.target.value)}
          value={notes}
        />
        <div
          className="text-light fs-5 btn btn-primary border-light  mb-5"
          onClick={addNote}
        >
          Add
        </div>
      </div>
      <hr className="text-danger" />
      <TodoList notes={list} clickHandler={(title) => completeTask(title)} delClickHandler={(title)=> deleteTask(title)} />
    </div>
  );
};
