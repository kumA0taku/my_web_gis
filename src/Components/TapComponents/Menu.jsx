import {useState } from "react";
import { Menubar } from "primereact/menubar";
import homelogo from "../../assets/gismap3.png"; // Import the image
import { Dialog } from "primereact/dialog";

// Import styling
import "../../App";

export default function Menu() {
  const items1 = [
    {
      label: "Symbol",
      icon: "pi pi-image",
      command: () => {
        visible.current.show();
      },
    },
    
  ];

  const items2 = [
    
    {
      label: "Help",
      icon: "pi pi-question-circle",
      command: () => {
        visible.current.show();
      },
    },
  ];

  const [visible, setVisible] = useState(false);
  const [visible1, setVisible1] = useState(false);

  const start = (
    <img
      alt="logo"
      src={homelogo}
      width="140"
      height="auto"
      className="mr-2"
    ></img>
  );
  const end = [];

  return (
    <div className="card-bg">
      <div
        className="card-img"
        style={{ display: "flex", justifyContent: "space-between" }}
      >
        {start}
        <Menubar model={items1} end={end} onClick={() => setVisible(true)} />

        <Dialog
          header="Header"
          visible={visible}
          style={{ width: "50vw" }}
          onHide={() => setVisible(false)}
        >
          <p className="m-0">
            Hello Baitoey
          </p>
          <h1>Hii</h1>
          <h2>Hii Warin</h2>
          <h3>Hii Toey</h3>

        </Dialog>

        <Menubar model={items2} end={end} onClick={() => setVisible1(true)} />

        <Dialog
          header="Header"
          visible={visible1}
          style={{ width: "50vw" }}
          onHide={() => setVisible1(false)}
        >
          <p className="m-0">
            Hello Baitoey1234
          </p>
          <h1>Hii</h1>
          <h2>Hii Warin</h2>
          <h3>Hii Toey</h3>

        </Dialog>
      </div>
    </div>
    
  );
}
