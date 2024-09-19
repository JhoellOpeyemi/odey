import { Outlet } from "react-router-dom";
import SmoothScroll from "./components/SmoothScroll";
import Trailer from "./components/Trailer";

function App() {
  return (
    <SmoothScroll>
      <div className="container">
        <Trailer />
        <Outlet />
      </div>
    </SmoothScroll>
  );
}

export default App;
