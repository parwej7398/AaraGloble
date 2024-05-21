import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { routes } from "./Routes";
import Layout from "./Layout";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          {routes.map((route) => {
            return (
              <Route
                path={route.path}
                element={<Layout children={route.element} />}
              />
            );
          })}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
