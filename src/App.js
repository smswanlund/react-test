import React from "react";
import List from "./components/ProductList";
import ProductItem from "./components/ProductItem";
import {useSelector} from "react-redux";

export default function App() {

  const products = useSelector(state=>state.productReducer)

  return (
    <div>
      <h1>Products</h1>
      <List>
        {products.map(state=>(
          <ProductItem
            key={state.index}
            img={state.img}
            name={state.name}
            number={state.number}
            pricing={state.pricing}>
            
          </ProductItem>
        ))}
      </List>
      <script></script>
    </div>
  );
}
