import { Route, Routes } from "react-router-dom";
import AddNewTask from "./pages/AddNewTask";
import AllTasks from "./pages/AllTasks";
import FavariteTasks from "./pages/FavoriteTasks";
import Layout from "./components/layout/Layout";

function App() {
  return (
    <div>
      <Layout>
      <Routes>
        <Route path="/" element={<AllTasks />} />
        <Route path="/add-new-task" element={<AddNewTask />} />
        <Route path="/favorite-task" element={<FavariteTasks />} />
      </Routes>
      </Layout>
    </div>
  );
}

export default App;
