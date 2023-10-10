import { useRef, useState } from "react";
import { tasksList } from "./tasksData";

export const Form = () => {
  
    const [note, setNote] = useState("");
    const inputRef = useRef(null);
    const addNote = (e) => {
        e.preventDefault();
        const date = new Date();
        const taskTime = `${date.getHours()}:${date.getMinutes()}`;
        //console.log(taskTime);
        inputRef.current.value = "";
        tasksList.push({
          note: note,
          time: taskTime,
        });
        setNote("");
    };


  return (
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
        onChange={(e)=> setNote(e.target.value) }
        value={note}
      />
      <div
        className="text-light fs-5 btn btn-outline-light mb-5"
        onClick={addNote}
      >
        Add
      </div>
    </div>
  );
};
