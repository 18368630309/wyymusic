import { Outlet } from "react-router";

// import React from 'react';
// Outlet
function App() {
  return (
    <div>
      <p> 这是主页</p>
      <Outlet />
    </div>
  );
}

export default App;
