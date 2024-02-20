import { useState, useRef } from "react";
import { Menubar } from "primereact/menubar";
import homelogo from "../../assets/gismap3.png"; // Import the image
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
        style={{ width: "50vw" }}
        onHide={() => setSymVisible(false)}
        ref={symDialogRef} // Attach ref to the Dialog component
      >
        <p className="m-0">Hello Warin</p>
        <h1>Hii</h1>
        <h2>Hii Warin</h2>
        <h3>Hii Toey</h3>
      </Dialog>

      <Dialog
        header= {<h2>Help</h2>}
        visible={helpVisible}
        style={{ width: "50vw" }}
        onHide={() => setHelpVisible(false)}
        ref={helpDialogRef} // Attach ref to the Dialog component
      >
        <p className="m-0">Hello Toey</p>
        <h1>Hii</h1>
        <h2>Hii Warin</h2>
        <h3>Hii Toey</h3>
      </Dialog>
    </div>
  );
}
