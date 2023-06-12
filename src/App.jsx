import { ProSidebarProvider } from "react-pro-sidebar";
import React from "react";
import Router from "./Routes";

function App() {
  return (
    <ProSidebarProvider>
      <Router />
    </ProSidebarProvider>
  );
}

export default App;
