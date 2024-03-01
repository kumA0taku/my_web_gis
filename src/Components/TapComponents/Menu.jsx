import { useState, useRef, useEffect } from "react";
import { Menubar } from "primereact/menubar";
import homelogo from "../../assets/gismap2.png"; // Import the image
import symLogo1 from "../../assets/symbols/bd_th.png"; // Import the image of bd
import symLogo2 from "../../assets/symbols/point_th.png"; // Import the image of point
import symLogo3 from "../../assets/symbols/wate_th.png"; // Import the image of water line
import { Dialog } from "primereact/dialog";
import { Carousel } from "primereact/carousel";
import { ProductService } from "../../service/ProductService";

// Import styling
import "../../App.css"; // Assuming you have a CSS file named App.css for styling

export default function Menu() {
  const [symVisible, setSymVisible] = useState(false);
  const [helpVisible, setHelpVisible] = useState(false);
  const [products, setProducts] = useState([]);

  // Create refs for the Dialog components
  const symDialogRef = useRef(null);
  const helpDialogRef = useRef(null);

  const responsiveOptions = [
    {
      breakpoint: "1400px",
      numVisible: 2,
      numScroll: 1,
    },
    {
      breakpoint: "1199px",
      numVisible: 3,
      numScroll: 1,
    },
    {
      breakpoint: "767px",
      numVisible: 2,
      numScroll: 1,
    },
    {
      breakpoint: "575px",
      numVisible: 1,
      numScroll: 1,
    },
  ];

  useEffect(() => {
    ProductService.getProductsSmall().then((data) =>
      setProducts(data.slice(0, 3))
    );
  }, []);

  const productTemplate = (product) => {
    return (
      <div
        className="border-1 surface-border border-round m-2 text-center py-5 px-3 "
        style={{ justifyContent: "center" }}
      >
        <div>
          <h3 className="mb-1 ">{product.topic}</h3>
          <h4 className="mt-0 mb-3">{product.description}</h4>
        </div>
        <div className="mb-3">
          <img
            src={`${product.imagePath}`}
            alt={product.topic}
            className="w-6 shadow-2 autoFitImage"
            style={{ objectFit: "auto" }} // Add this style
          />
        </div>
      </div>
    );
  };

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
    <img alt="logo" src={homelogo} width="auto" height="55" className="mr-2" />
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

      {/* //Symbols */}
      <Dialog
        header={
          <h2
            style={{
              background: "linear-gradient(to right, #FFF, rgb(86, 81, 142))", // Adjusted gradient colors
            }}
          >
            Symbols
          </h2>
        }
        visible={symVisible}
        style={{ width: "50vw" }}
        onHide={() => setSymVisible(false)}
        ref={symDialogRef} // Attach ref to the Dialog component
      >
        <div style={{ display: "flex" }}>
          <img src={symLogo1} alt="Symbol Image" width="100" height="auto" />
          <div style={{ marginLeft: "100px" }}>
            {" "}
            {/* Add margin to separate the image and text */}
            <p>ขอบเขตพื้นที่ที่สนใจ</p>
          </div>
        </div>
        <div style={{ display: "flex" }}>
          <img src={symLogo2} alt="Symbol Image" width="100" height="auto" />
          <div style={{ marginLeft: "100px" }}>
            {" "}
            {/* Add margin to separate the image and text */}
            <p>ตำแหน่งพิกัดของสถานที่</p>
          </div>
        </div>
        <div style={{ display: "flex" }}>
          <img src={symLogo3} alt="Symbol Image" width="100" height="auto" />
          <div style={{ marginLeft: "100px" }}>
            {" "}
            {/* Add margin to separate the image and text */}
            <p>เส้นทางแม่น้ำแต่ละสาย</p>
          </div>
        </div>
      </Dialog>

      {/* //Help */}
      <Dialog
        header={
          <h2
            style={{
              background: "linear-gradient(to right, #FFF, rgb(86, 81, 142))", // Adjusted gradient colors
            }}
          >
            Help
          </h2>
        }
        visible={helpVisible}
        style={{ width: "80vw" }}
        onHide={() => setHelpVisible(false)}
        ref={helpDialogRef} // Attach ref to the Dialog component
      >
        <Carousel
          value={products}
          numVisible={1}
          numScroll={1}
          responsiveOptions={responsiveOptions}
          itemTemplate={productTemplate}
        />
      </Dialog>
    </div>
  );
}
