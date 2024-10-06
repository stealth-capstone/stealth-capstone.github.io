import "./App.css"
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";

import CoursePage from "./components/course/CoursePage";
import Navbar from "./components/navbar/Navbar";
import LandingPage from "./components/home/LandingPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <CoursePage />
  },
  {
    path: "/landing",
    element: <LandingPage />
  }
]);

function App() {
  return (
    <>
      {/* <Navbar /> */}
      <div className="App">
        <RouterProvider router={router} />        
      </div>
    </>
  );
}

export default App;
