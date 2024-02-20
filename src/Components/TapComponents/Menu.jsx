import { useRef, useState } from "react";
import { Menubar } from "primereact/menubar";
import { Toast } from "primereact/toast";
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
    {
      label: "Help",
      icon: "pi pi-question-circle",
      command: () => {
        visible.current.show();
      },
    },
  ];


  
  const toast = useRef(null);
  const [visible, setVisible] = useState(false);

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
        <Toast ref={toast} />

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
      </div>
    </div>
  );
}
