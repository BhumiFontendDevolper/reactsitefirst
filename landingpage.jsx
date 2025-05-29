const Landingpage = () => {
    return (
      <div className="parant">
        <div>
          <img src="/image-1.webp" alt="img" width="90%" height="70%" />  {/* ✅ Fixed image path */}
        </div>
        <div className="landing_del">
          <h2>
            <img src="https://png.pngtree.com/png-clipart/20190924/original/pngtree-special-discount-banner-with-star-and-geometric-shapes-png-image_4814846.jpg" alt="" />
            60% discount
          </h2>
          <h1>Winter <br /> collection</h1>
          <span className="bestclothheading">Best cloth for 2025</span>
          <button className="btn button">
            <span>Shop now</span>
          </button>
        </div>
      </div>
    );
  };
  
  export default Landingpage;
  