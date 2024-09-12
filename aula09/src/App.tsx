import { Outlet } from "react-router-dom";
import Headerr from "./components/Header/Header";
import Footerr from "./components/Footer/Footer";

export default function App() {
  return (
    <div>
      <Headerr />
      <Outlet />
      <Footerr />
    </div>
  );
}
