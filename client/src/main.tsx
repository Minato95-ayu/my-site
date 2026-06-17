import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

// Mount the React application into the root HTML element.
createRoot(document.getElementById("root")!).render(<App />);
