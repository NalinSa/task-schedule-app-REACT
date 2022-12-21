import { Link } from "react-router-dom";
import style from "./NavigationBar.module.css";
function NavigationBar() {
  return (
    <header className={style.header}>
      <div className={style.logo}>My Todo Tasks</div>
      <nav>
        <ul>
          <li>
            <Link to="/">All Tasks</Link>
          </li>
          <span>3</span>
          <li>
            <Link to="/add-new-task">Add New Task</Link>
          </li>
          <li>
            <Link to="/favorite-task">My Favorite Tasks</Link>
          </li>
          <span>3</span>
        </ul>
      </nav>
    </header>
  );
}
export default NavigationBar;
