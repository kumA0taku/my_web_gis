import { useState, useRef } from "react";
import { Menubar } from "primereact/menubar";
import homelogo from "../../assets/gismap3.png"; // Import the image
import symLogo1 from "../../assets/symbols/bd_th.png"; // Import the image of bd
import symLogo2 from "../../assets/symbols/point_th.png"; // Import the image of point
import symLogo3 from "../../assets/symbols/wate_th.png"; // Import the image of water line
import { Dialog } from "primereact/dialog";

// Import styling
import "../../App.css"; // Assuming you have a CSS file named App.css for styling

export default function Menu() {
  const [symVisible, setSymVisible] = useState(false);
  const [helpVisible, setHelpVisible] = useState(false);

  // Create refs for the Dialog components
  const symDialogRef = useRef(null);
  const helpDialogRef = useRef(null);

  const items = [
    {
      label: "Symbol",
      icon: "pi pi-image",
      command: () => {
        setSymVisible(true); // Update the state to show the dialog
      },
    },
    {
      label: "Help",
      icon: "pi pi-question-circle",
      command: () => {
        setHelpVisible(true); // Update the state to show the dialog
      },
    },
  ];

  const start = (
    <img
      alt="logo"
      src={homelogo}
      width="140"
      height="auto"
      className="mr-2"
    />
  );
  const end = [];

  return (
    <div className="card-bg">
      <div
        className="card-img"
        style={{ display: "flex", justifyContent: "space-between" }}
      >
        {start}
        <Menubar model={items} end={end} />
      </div>

      <Dialog
        header= {<h2>Symbols</h2>}
        visible={symVisible}
        style={{ width: "50vw"}}
        onHide={() => setSymVisible(false)}
        ref={symDialogRef} // Attach ref to the Dialog component
      >
      <div style={{ display: "flex"}}>
        <img src={symLogo1} alt="Symbol Image" width="50" height="50" />
        <div style={{ marginLeft: "100px" }}> {/* Add margin to separate the image and text */}
          <p className="m-0">ขอบเขตพื้นที่ต่างๆ</p> 
        </div>
      </div>
      <div style={{ display: "flex"}}>
        <img src={symLogo2} alt="Symbol Image" width="50" height="50" />
        <div style={{ marginLeft: "100px" }}> {/* Add margin to separate the image and text */}
          <p className="m-0">ตำแหน่งพิกัดต่างๆ</p>
        </div>
      </div>
      <div style={{ display: "flex"}}>
        <img src={symLogo3} alt="Symbol Image" width="50" height="50" />
        <div style={{ marginLeft: "100px" }}> {/* Add margin to separate the image and text */}
          <p className="m-0">เส้นทางแม่น้ำแต่ละสาย</p> 
        </div>
      </div>
      </Dialog>

      <Dialog
        header= {<h2>Help</h2>}
        visible={helpVisible}
        style={{ width: "50vw" }}
        onHide={() => setHelpVisible(false)}
        ref={helpDialogRef} // Attach ref to the Dialog component
      >
      <div style={{ display: "flex"}}>
        <img src={homelogo} alt="Symbol Image" width="50" height="50" />
        <div style={{ marginLeft: "100px" }}> {/* Add margin to separate the image and text */}
          <p className="m-0">temp...</p>
        </div>
      </div>
      </Dialog>
    </div>
  );
}
