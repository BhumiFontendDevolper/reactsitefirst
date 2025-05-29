import React from "react";
// import style from "footer.css"

const img_data = [
  {
    id: 1,
    img_src: "https://preview.colorlib.com/theme/estore/assets/img/gallery/gallery1.jpg",
  },
  {
    id: 2,
    img_src: "https://preview.colorlib.com/theme/estore/assets/img/gallery/gallery2.jpg",
  },
  {
    id: 3,
    img_src: "https://preview.colorlib.com/theme/estore/assets/img/gallery/gallery3.jpg",
  },
  {
    id: 4,
    img_src: "https://preview.colorlib.com/theme/estore/assets/img/gallery/gallery4.jpg",
  },
  {
    id: 5,
    img_src: "https://preview.colorlib.com/theme/estore/assets/img/gallery/gallery5.jpg",
  },
];

const Footer = () => {
  return (
    <div className="footer">
     
  <div className="footer-container">
    <div className="footer-column">
      <h2 className="footer-logo">.Estore.</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore.</p>
    </div>
    <div className="footer-column">
      <h3>Quick Links</h3>
      <ul>
        <li><a href="#">About</a></li>
        <li><a href="#">Offers & Discounts</a></li>
        <li><a href="#">Get Coupon</a></li>
        <li><a href="#">Contact Us</a></li>
      </ul>
    </div>
    <div className="footer-column">
      <h3>New Products</h3>
      <ul>
        <li><a href="#">Woman Cloth</a></li>
        <li><a href="#">Fashion Accessories</a></li>
        <li><a href="#">Man Accessories</a></li>
        <li><a href="#">Rubber made Toys</a></li>
      </ul>
    </div>
    <div className="footer-column">
      <h3>Support</h3>
      <ul>
        <li><a href="#">Frequently Asked Questions</a></li>
        <li><a href="#">Terms & Conditions</a></li>
        <li><a href="#">Privacy Policy</a></li>
        <li><a href="#">Privacy Policy</a></li>
        <li><a href="#">Report a Payment Issue</a></li>
      </ul>
    </div>
  </div>
  <div className="fotter_icon">
  <p>Copyright ©2025 All rights reserved | This template is made with  by <a href="mailto:bhumikasethi006@gmail.com">Bhumika@Sethi</a></p>
 <div>
 <i className="ri-facebook-fill"></i>
  <i className="ri-twitter-fill"></i>
  <i className="ri-behance-fill"></i>
  <i className="ri-github-fill"></i>
  <i className="ri-global-line"></i>
 </div>
  </div>
</div>

    
  );
};

export default Footer;
