/*
  NOTE the Tab Functionality in this part is taken from this article 
  by Chinedu Imoh https://blog.logrocket.com/how-to-build-tab-component-react/
*/
import React from "react";
const TabNavItem = ({ id, title, activeTab, setActiveTab }) => {
  const handleClick = () => {
    setActiveTab(id);
  };

  return (
    <li onClick={handleClick} className={activeTab === id ? "active" : ""}>
      {title}
    </li>
  );
};
export default TabNavItem;
