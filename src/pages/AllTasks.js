import TaskList from "../components/tasks/TaskList";
import { useState, useEffect } from "react";

function AllTasks() {
  const [taskData, setTaskData] = useState([]);

  useEffect(() => {
    fetch(
      "https://task-schedule-app-16357-default-rtdb.asia-southeast1.firebasedatabase.app/tasks.json"
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const tasks = [];
        for (const key in data) {
          const task = {
            id: key,
            ...data[key],
          };
          tasks.push(task);
        }
        setTaskData(tasks);
      });
  },[]);

  return (
    <section>
      <h1>All Tasks</h1>
      <TaskList tasks={taskData}></TaskList>
    </section>
  );
}
export default AllTasks;
