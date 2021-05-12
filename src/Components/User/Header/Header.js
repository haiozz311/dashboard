import React, { useState } from "react";
import ToolbarComponent from "../Toolbar/Toolbar";
import DrawerComponent from "../Drawer/Drawer.jsx";

export default function Header() {
  const [left, setLeft] = useState(false)

  const toggleDrawer = () => {
    setLeft(false);
  };

  const openDrawer = () => {
    setLeft(true);
  };
  return (
    <div className="App">
      <ToolbarComponent openDrawerHandler={openDrawer} />
      <DrawerComponent
        left={left}
        toggleDrawerHandler={toggleDrawer}
      />
    </div>
  );
}


