import TaskForm from "../components/tasks/TaskForm";
import { useNavigate } from "react-router-dom";
function AddNewTask() {
  const navigate = useNavigate();
  function AddDataHandler(taskData) {
    fetch(
      "https://task-schedule-app-16357-default-rtdb.asia-southeast1.firebasedatabase.app/tasks.json",
      {
        method: "POST",
        body: JSON.stringify(taskData),
        headers: { "Content-type": "application/jason" },
      }
    ).then(() => {
      navigate("/");
    });
  }
  return (
    <section>
      <h1>Add New Task</h1>
      <TaskForm AddData={AddDataHandler}></TaskForm>
    </section>
  );
}
export default AddNewTask;
