import { Outlet } from "react-router-dom";
import Nav from "./nav/sideBar";
import { useState } from "react";

export default function DashboardLayout() {
  const [open, setOpen] = useState(false);

  return (
    <div style={{display: 'flex', height:window.innerHeight,overflow: 'hidden',}}>
      <Nav  />
      <div style={{
        flexGrow: 1,
        overflow: 'auto',
        minHeight: '100%'
        }}>
        <Outlet />
      </div>
    </div>
  );
}