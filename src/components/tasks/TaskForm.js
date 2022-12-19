import Card from "../ui/Card";
import style from "./TaskForm.module.css";
import { useRef } from "react";

function TaskForm(props) {
  const nameInput = useRef();
  const timeInput = useRef();
  const deadlineInput = useRef();
  const descriptionInput = useRef();

  function submitHandler(event) {
    event.preventDefault();
    const enteredName = nameInput.current.value;
    const enteredTime = timeInput.current.value;
    const enteredDeadline = deadlineInput.current.value;
    const enteredDescription = descriptionInput.current.value;

    const taskData = {
      name: enteredName,
      time: enteredTime,
      deadline: enteredDeadline,
      description: enteredDescription,
    };
    console.log(taskData);
    props.AddData(taskData);
  }
  return (
    <Card>
      <form className={style.form} onSubmit={submitHandler}>
        <div className={style.control}>
          <label htmlFor="name">Task Name</label>
          <input type="text" required id="name" ref={nameInput}></input>
        </div>
        <div className={style.date}>
          <label htmlFor="time">Deadline Time</label>
          <input type="time" id="time" ref={timeInput}></input>
          <label htmlFor="deadline">Deadline Date</label>
          <input type="date" id="deadline" ref={deadlineInput}></input>
        </div>
        <div className={style.control}>
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            required
            rows="6"
            ref={descriptionInput}
          ></textarea>
        </div>
        <div className={style.actions}>
          <button>Add Task</button>
        </div>
      </form>
    </Card>
  );
}
export default TaskForm;
