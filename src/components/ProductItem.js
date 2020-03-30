import React from "react";

function ProductItem ({img, name, number, pricing}) {

    function logObject(num, price) {
        console.log(num);
        console.log(price);
    }

    return (
        
        <div className="product">
            <img src={img} alt={name}></img>
            <h1>{name}</h1>
            <h3>partNo: {number}</h3>
            <h4>${pricing}</h4>
            <button className="btn" onClick={() =>logObject({number}, {pricing})}>Add to Cart</button>
        </div>
        
    )
}

export default ProductItem;