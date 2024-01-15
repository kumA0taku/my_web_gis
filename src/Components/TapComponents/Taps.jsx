import React, { useState } from "react";
import TabNavItem from "./TabNavItem";
import TabContent from "./TabContent";
// Import our Map Components
import OpenLayerComponent from "../MapComponents/OpenLayerComponent";


const Tabs = () => {
  const [activeTab, setActiveTab] = useState("openlayers");

  return (
    <div className="Tabs">
      <ul className="nav">
        <TabNavItem title="Web map GIS" id="openlayers" activeTab={activeTab} setActiveTab={setActiveTab} />
      </ul>

      <div className="outlet">
        <TabContent id="openlayers" activeTab={activeTab}>
            <OpenLayerComponent></OpenLayerComponent>
        </TabContent>
      </div>
    </div>
  );
};

export default Tabs;