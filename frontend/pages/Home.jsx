import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";

export default function Home(){
    const [products,setProducts]=useState([])
    useEffect(()=>{
        fetch(`${import.meta.env.VITE_REACT_APP_PRODUCT_URL}/product`)
        .then(res=>res.json())
        .then(res=>setProducts(res.userproducts))


    },[])
    return(
        <>
        <h5 className="text-center mt-3">Latest Products ⬇️</h5>
        
        {products.length === 0 ? (<p className="text-center">No products found.</p>) : (
                    products.map((product) => (<ProductCard key={product._id} product={product} />)))
        }


        </>
    )
}

