
import helpLogo1 from "../assets/help/p1.png"; // Import the image of bd
import helpLogo2 from "../assets/help/p2.png"; // Import the image of point
import helpLogo3 from "../assets/help/p3.png"; // Import the image of water line

export const ProductService = {
  getProductsData() {
    return [
      {
        id: "1000",
        code: "ov104",
        topic: "Overviews",
        description: "ภาพรวมของระบบ",
        imagePath: helpLogo1,
      },
      {
        id: "1001",
        code: "tl02",
        topic: "Tools",
        description: "เครื่องมือในการแสดง layer ต่างๆ บนแผนที่",
        imagePath:  helpLogo2,
      },
      {
        id: "1002",
        code: "pp01",
        topic: "Popup",
        description: "Popup จะถูกแสดงขึ้นเมื่อมีการ click บนแผนที่ โดยจะแสดงพิกัด Latitude และ Longitude ของตำแหน่งนั้นๆ ที่เรา click บนแผนที่",
        imagePath:  helpLogo3,
      },
    ];
  },

  getProductsMini() {
    return Promise.resolve(this.getProductsData().slice(0, 5));
  },

  getProductsSmall() {
    return Promise.resolve(this.getProductsData().slice(0, 3));
  },

  getProducts() {
    return Promise.resolve(this.getProductsData());
  },

  getProductsWithOrdersSmall() {
    return Promise.resolve(this.getProductsWithOrdersData().slice(0, 10));
  },

  getProductsWithOrders() {
    return Promise.resolve(this.getProductsWithOrdersData());
  },
};
