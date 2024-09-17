import { Outlet } from "react-router-dom";
import SmoothScroll from "./components/SmoothScroll";

function App() {
  return (
    <SmoothScroll>
      <div className="container">
        <Outlet />
      </div>
    </SmoothScroll>
  );
}

export default App;
