import React from "react";

const Categories = () => {
    const data = [
        {
            src: "https://preview.colorlib.com/theme/estore/assets/img/categori/cat1.jpg",
            id: "cate-1",
            alt: "Category 1",
            "cloth_type":"Woman's cloth",
            
        },
        {
            src: "https://preview.colorlib.com/theme/estore/assets/img/categori/cat2.jpg",
            id: "cate-2",
            alt: "Category 2",
            "cloth_type":"Winter's  cloth",
            
        },
        {
            src: "https://preview.colorlib.com/theme/estore/assets/img/categori/cat3.jpg",
            id: "cate-3",
            alt: "Category 3",
            "cloth_type":"Man's cloth",
            
        }
    ];

    return (
        <div className="categories">
            <h1>Shop by Category</h1>
            <div className="cate">
                {data.map((elm) => (
                    <div key={elm.id} className="cate-sub" style={{backgroundImage:`url(${elm.src})`}}>
                        <div key={elm.id} className="cate_sub_para">
                                <h3>{elm.cloth_type}</h3>
                                <button>Best new Deals</button>
                                <span>New collection</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Categories;
