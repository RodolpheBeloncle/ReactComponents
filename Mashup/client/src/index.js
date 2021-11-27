import React from "react"
import ReactDOM from "react-dom"
import App from "./App"
import TrackContextProvider from "./context/TrackContext"
import "./app.css"; 

ReactDOM.render(
  <React.StrictMode>
  <TrackContextProvider>
    <App />
  </TrackContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
)
