import { Route, Routes } from "react-router-dom";
import AddNewTask from "./pages/AddNewTask";
import AllTasks from "./pages/AllTasks";
import FavariteTasks from "./pages/FavoriteTasks";
import NavigationBar from "./components/layout/NavigationBar";
function App() {
  return (
    <div>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<AllTasks />} />
        <Route path="/add-new-task" element={<AddNewTask />} />
        <Route path="/favorite-task" element={<FavariteTasks />} />
      </Routes>
    </div>
  );
}

export default App;
