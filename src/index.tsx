import ReactDOM from "react-dom/client";
import routes from "./router";
import "./index.css";
import 'normalize.css/normalize.css'
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter,useRoutes } from "react-router-dom";
// debugger
function App() {
  return useRoutes(routes)
  
}

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
reportWebVitals();
