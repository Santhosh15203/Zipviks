export default function ProductCard({product}){
    return(
        <>

     <div className="container">

         <div className="" style={{width:"280px"}}>
            <div className="card ">
                <img src={product.image} className="card-top-img " alt={product.name} style={{width:"250px",height:"250px"}} />
                <div className="card-body">
                    <h6>{product.name}</h6>
                    <p className="small mb-0">{product.description}</p>
                    <p className="mb-0">{product.ratings}⭐️⭐️⭐️⭐️⭐️</p>
                    <div className="d-flex gap-2  ">
                        <p>₹{product.sellingprice} </p>
                        <p className="small text-decoration-line-through">₹{product.fixedprice}</p>
                        <p className="text-danger"><span>{product.discount}</span>% off</p>
                    </div>
                    <button className="btn btn-danger">View Details</button>
                </div>
                
            </div>
            

         </div>
        
     </div>
        </>
    )
}