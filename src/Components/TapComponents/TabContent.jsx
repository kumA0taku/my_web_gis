/*
  NOTE the Tab Functionality in this part is taken from this article 
  by Chinedu Imoh https://blog.logrocket.com/how-to-build-tab-component-react/
*/
import React from "react";
const  TabContent = ({id, activeTab, children}) => {
    return(
        activeTab === id ? <div className="TabContent">
            {children}
        </div>
        : null
    );
};
export default TabContent;
