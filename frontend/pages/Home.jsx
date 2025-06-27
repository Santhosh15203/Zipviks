import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import "./Home.css"

export default function Home(){
    const [loading,setLoading]=useState(true)
    const [products,setProducts]=useState([])
    useEffect(()=>{
        fetch(`${import.meta.env.VITE_REACT_APP_PRODUCT_URL}/product`)
        .then(res=>res.json())
        .then(res=>setProducts(res.userproducts))
        setTimeout(()=>{
            setLoading(false)
        },2000)


    },[])
    return(
        <>
        <div className="container">
            <div className="mt-4 row">
             {loading? (  <div className="" style={{width:"100%",height:"347px"}}>
                                                <div className=" d-flex justify-content-center gap-1" style={{marginTop:"10%"}}>
                                                    <i className="bi bi-arrow-clockwise spin" ></i>
                                                    <span className=""> Loading ...</span>
                                                </div>
                                         </div>  
                                       ) :
                                        (
                                            <>
                                                <h5 className="text-center mt-3">Latest Products</h5>
                                                {products.map((product) => (
                                                    <div className="col-lg-3 col-md-4 col-sm-6 mt-3 " key={product._id}>
                                                            <ProductCard  product={product} />
                                                    </div>
                                                ))}
                                            </>          
                                        )
                                        
              }
            </div>
        </div>
        
        
       


        </>
    )
}

