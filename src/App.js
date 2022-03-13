import "./App.css";
import Router from "./Router";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import "@fontsource/ubuntu";

function App() {
  return (
    <div className="font-ubuntu">
      <Router />
      <ToastContainer />
    </div>
  );
}

export default App;
