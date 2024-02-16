import React from "react";
import OpenLayerComponent from "../MapComponents/OpenLayerComponent";
import Menu from "./Menu";

const Tabs = () => {

  return (
    <div className="Tabs">
      <div className="outlet">
      <OpenLayerComponent></OpenLayerComponent>
      </div>
    </div>
  );
};

export default Tabs;