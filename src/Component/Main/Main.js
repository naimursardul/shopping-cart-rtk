import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";

function Main() {
  return (
    <div>
    <Navbar />
    <Outlet />
    </div>
  )
}

export default Main;