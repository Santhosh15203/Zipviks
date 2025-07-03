import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import "./Home.css";
import { useSearchParams } from "react-router-dom";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const [searchparams] = useSearchParams();

  useEffect(() => {
    setLoading(true);
    fetch(`${import.meta.env.VITE_REACT_APP_PRODUCT_URL}/product?${searchparams.toString()}`)
      .then((res) => res.json())
      .then((res) => setProducts(res.userproducts))
        setTimeout(() => {
          setLoading(false);
        }, 500); 
  }, [searchparams]);

  return (
    <div className="container">
      <div className="mt-4 row">
        {loading ? (
          <div className="" style={{ width: "100%", height: "347px" }}>
            <div className="d-flex justify-content-center gap-1" style={{ marginTop: "10%" }}>
              <i className="bi bi-arrow-clockwise spin"></i>
              <span className="">Loading ...</span>
            </div>
          </div>
        ) : products.length > 0 ? (
          <>
            <h5 className="text-center mt-3">Latest Products</h5>
            {products.map((product) => (
              <div className="col-lg-3 col-md-4 col-sm-6 mt-3" key={product._id}>
                <ProductCard product={product} />
              </div>
            ))}
          </>
        ) : (
          <>
            <div className="" style={{ width: "100%", height: "347px" }}>
                 <p className="text-center text-dark mt-5">Sorry! No products found.</p>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
