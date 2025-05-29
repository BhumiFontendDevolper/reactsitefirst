// import React from "react";
// 
// const Product = () => {
//   const categories = ["ALL", "WOMAN", "MAN", "BABY", "DISCOUNT"];
//   const [activeCategory, setActiveCategory] = useState("ALL");
//     return(
//         <div className="product">
//             <div className="product_header_info">
//             <h1>Latest Products</h1>
//             <div className="product_menu">
//             {categories.map((categori) => (
//             <span
//               key={categori}
//               className={activeCategory === categori ? "active" : ""}
//               onClick={() => setActiveCategory(categori)}
//             >
//               {categori}

//                  </span>
//             ))}
//             </div>
//             </div>
//     <div className="product_items">
//       {product_data.map((elm, index) => (
//         <div key={index} className="product_card">
//           <img src={elm.product_img} alt={elm.product_name} />
//           <div className="product_info">
//             <span>⭐⭐⭐⭐⭐</span>
//             <p>{elm.product_name}</p>
//             <div className="price_div">
//               <span className="price">${elm.price}</span>
//               <span className="before_price">${elm.before_price}</span>
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>
//     </div>
//   );
    
// };

// export default Product;



































import React, { useState } from "react";



const product_data = [
    {
      product_img: "https://preview.colorlib.com/theme/estore/assets/img/categori/product1.png",
      product_name: "Green TShirt for Men",
      price: 300.0,
      before_price: 1300.0,
      clothe_type:"boy"
    },
    {
      product_img: "https://preview.colorlib.com/theme/estore/assets/img/categori/product2.png",
      product_name: "Green TShirt for Men",
      price: 400.0,
      before_price: 1300.0,
      clothe_type:"boy"
    },
    {
      product_img: "https://img.freepik.com/premium-photo/dress-hanging-against-white-background_1048944-1267509.jpg?ga=GA1.1.1215057235.1725244636",
      product_name: "Green TShirt for Men",
      price: 600.0,
      before_price: 2300.0,
      clothe_type:"baby"
    },
    {
      product_img: "https://img.freepik.com/premium-photo/top-hanging-white-background_1048944-10973651.jpg?ga=GA1.1.1215057235.1725244636",
      product_name: "Green TShirt for Men",
      price: 900.0,
      before_price: 1900.0,
      clothe_type:"baby"
    },
    {
      product_img:"https://img.freepik.com/premium-photo/pink-baby-dress_931309-1884.jpg?ga=GA1.1.1215057235.1725244636",
      product_name: "Green TShirt for Men",
      price: 600.0,
      before_price: 1600.0,
      clothe_type:"baby"
    },
    {
      product_img: "https://preview.colorlib.com/theme/estore/assets/img/categori/product3.png",
      product_name: "Green TShirt for Men",
      price: 300.0,
      before_price: 1700.0,
      clothe_type:"girl"
    },
    {
      product_img: "https://preview.colorlib.com/theme/estore/assets/img/categori/product4.png",
      product_name: "Green TShirt for Men",
      price: 1000.0,
      before_price: 2300.0,
      clothe_type:"boy"
    },
    {
      product_img:"https://preview.colorlib.com/theme/estore/assets/img/categori/product6.png",
      product_name: "Green TShirt for Men",
      price: 900.0,
      before_price: 1900.0,
      clothe_type:"boy"
    },
    {
      product_img:"https://img.freepik.com/premium-photo/top-hanging-against-white-wall_1048944-30769794.jpg?ga=GA1.1.1215057235.1725244636",
      product_name: "Green TShirt for Men",
      price: 300.0,
      before_price: 1300.0,
      clothe_type:"baby"
  
  },
  {
      product_img:"https://t3.ftcdn.net/jpg/10/19/72/36/240_F_1019723659_0cpfQxN4wSkpLoF688RCDlGuZ4jmwLJf.jpg",
      product_name: "Green TShirt for Men",
      price: 1300.0,
      before_price: 3300.0,
      clothe_type:"baby"
  },{
      product_img:"https://img.freepik.com/free-photo/set-with-fashionable-women-s-clothing-skirt-sweater_169016-3210.jpg?ga=GA1.1.1215057235.1725244636",
      product_name: "Green TShirt for Men",
      price: 1300.0,
      before_price: 3300.0,
      clothe_type:"baby"
  },
  {
      product_img:"https://img.freepik.com/premium-photo/close-up-clothes-hanging-white-background_1048944-22112590.jpg?ga=GA1.1.1215057235.1725244636",
      product_name: "Green TShirt for Men",
      price: 1300.0,
      before_price: 3300.0,
      clothe_type:"girl"
  },
  {
      product_img:"https://preview.colorlib.com/theme/estore/assets/img/categori/product5.png",
      product_name: "Green TShirt for Men",
      price: 1300.0,
      before_price: 3300.0,
      clothe_type:"boy"
  },
  {
      product_img:"https://t3.ftcdn.net/jpg/11/81/23/74/240_F_1181237479_8T9ZE212UA7Ici1340i4qkrlDBzoy31Y.jpg",
      product_name: "Green TShirt for Men",
      price: 3300.0,
      before_price: 5300.0,
      clothe_type:"girl"
  },
  {
      product_img:"https://img.freepik.com/free-photo/portrait-handsome-fashion-stylish-businessman-model-dressed-elegant-light-pink-suit-posing-metrosexual_158538-9146.jpg?ga=GA1.1.1215057235.1725244636&semt=ais_hybrid",
      product_name: "Green TShirt for Men",
      price: 1300.0,
      before_price: 3300.0,
      clothe_type:"boy"
  }
  ];
  
















import Footer from "./footer";
const Product = () => {
  const categories = ["ALL", "WOMAN", "MAN", "BABY", "DISCOUNT"];
  const [activeCategory, setActiveCategory] = useState("ALL");

  // Function to filter products based on selected category
  const filteredProducts = product_data.filter((product) => {
    if (activeCategory === "ALL") return true;
    if (activeCategory === "WOMAN") return product.clothe_type === "girl";
    if (activeCategory === "MAN") return product.clothe_type === "boy";
    if (activeCategory === "BABY") return product.clothe_type === "baby";
    if (activeCategory === "DISCOUNT") return product.before_price - product.price > 500; // Show discounted items
    return false;
  });

  return (
    <>
    <div className="product">
      <div className="product_header_info">
        <h1>Latest Products</h1>
        <div className="product_menu">
          {categories.map((category) => (
            <span
              key={category}
              className={activeCategory === category ? "active" : ""}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </span>
          ))}
        </div>
      </div>

      <div className="product_items">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((elm, index) => (
            <div key={index} className="product_card">
              <img src={elm.product_img} alt={elm.product_name} />
              <div className="product_info">
                <span>⭐⭐⭐⭐⭐</span>
                <p>{elm.product_name}</p>
                <div className="price_div">
                  <span className="price">${elm.price}</span>
                  <span className="before_price">${elm.before_price}</span>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>No products found for this category.</p>
        )}
      </div>
    </div>
  
    </>
  );
};

export default Product;
