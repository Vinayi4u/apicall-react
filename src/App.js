import { useEffect, useState } from "react";
import "./App.css";
import ProductCard from "./Product-card";

function App() {
  const [products, updateProducts] = useState([]);
  useEffect(() => {
    getProducts(updateProducts);
  }, []);
  if (products.length === 0) return <h1>Fetching data...</h1>;

  return (
    <>
      <div className="product-list">
        {products.map((p) => (
          <ProductCard {...p} key={p.id}></ProductCard>
        ))}
      </div>
    </>
    // <ProductCard key={p.id} title={p.title}></ProductCard>
  );
}

async function getProducts(updateProducts) {
  const res = await fetch("https://fakestoreapi.com/products");
  const productList = await res.json();
  updateProducts(productList);
}
export default App;
