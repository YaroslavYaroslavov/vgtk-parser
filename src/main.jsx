// import { StrictMode } from 'react'
import { createRoot } from "react-dom/client";
import App from "./components/App/index.jsx";
import "./index.css";
// import { auth } from "./firebaseConfig/firebase.js";

// console.log(auth);

createRoot(document.getElementById("root")).render(
  // <StrictMode>
  <App />
  // </StrictMode>
);
