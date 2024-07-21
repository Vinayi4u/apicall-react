function ProductCard({ title, price, image, rating }) {
  return (
    <div className="card">
      <img src={image} alt="Not Found" />
      <p>{title}</p>
      <p>Price: {price}</p>
      <p>Rating: {rating.rate}</p>
    </div>
  );
}

export default ProductCard;
