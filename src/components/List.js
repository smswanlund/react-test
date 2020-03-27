import React from "react";
import {connect} from "react-redux";

const mapStateToProps = state => {
    return {products: state.products};
};

const ConnectedList = ({products}) => (
    <ul>
        {products.map(el => (
            <li>
                <img src={el.img} alt={el.name} class="prodImg"></img>
                <div className="prodName">{el.name}</div>
                <div className="prodNum">{el.number}</div>
                <div className="prodPrice">{el.pricing}</div>
            </li>
        ))}
    </ul>
);



const List = connect(mapStateToProps)(ConnectedList);

export default List;