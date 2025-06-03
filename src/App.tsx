// App.tsx
import React from "react";
import "./styles/theme.css";
import Sidebar from "./components/Sidebar";
import Workspace from "./components/Workspace";
import AdditiveSidebar from "./components/AdditiveSidebar";

export default function App() {
  return (
    <div className="app-root">
      <Sidebar />
      <Workspace />
      <AdditiveSidebar />
      <div style={{position: "fixed", bottom: 10, right: 10, color: "#b6e94e", background: "#181f33", padding: "0.5rem 1rem", borderRadius: "8px", zIndex: 1000}}>
        UI Scaffold Loaded
      </div>
    </div>
  );
}
