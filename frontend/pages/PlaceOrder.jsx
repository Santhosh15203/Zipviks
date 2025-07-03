
import { useState } from "react";
import { Link } from "react-router-dom";

export default function PlaceOrder({cardItems,setCardItems}){

    const handleIncrementQuantity=(id) => {
       const updatedItems= cardItems.map((storedcard)=>{
            if(storedcard.product._id===id){
                if(storedcard.custumQuantity<storedcard.product.quantity){
                    return {...storedcard,custumQuantity:storedcard.custumQuantity+1}
                }

            }
            else return storedcard
        })
        setCardItems(updatedItems)
    }

    const handleDecrementQuantity=(id)=>{
       const updatedItems= cardItems.map((storedcard)=>{
            if(storedcard.product._id===id){
                if(storedcard.custumQuantity>1){
                    return {...storedcard,custumQuantity:storedcard.custumQuantity-1}
                }

            }
            else return storedcard
        })
        setCardItems(updatedItems)
    }
   
    
    return(
        <>
        {cardItems.length<=0? <>
                                 <div className="" style={{ width: "100%", height: "347px" }}>
                                    <div className="d-flex justify-content-center gap-1" style={{ marginTop: "10%" }}>
                                        <span className="text-danger fs-5">Your cart item is Empty!</span>
                                    </div>
                                  </div>
                              
                               </>:
                               <>
                                 <div className="container  mt-3 " >
                                        <div className="text-center mt-3">
                                            <h5>Your Cart : <span className="text-danger">{cardItems.length}</span> items</h5>
                                        </div>
                                   
                                        <div>
                                            {cardItems.map((card)=>{
                                                if (!card || !card.product) return null;
                                                const discount=Number(card.product.discount)
                                                const fixedprice=Number(String(card.product.fixedprice).replace(/,/g,""))
                                                const sellingprice=Number(fixedprice-(fixedprice*discount/100)).toFixed(0)
                                                 
                                                return(
                                                    <div className="d-flex gap-4 mb-3" key={card.product._id}>
                                                    <div>
                                                        <img src={card.product.image} alt="img" style={{width:"250px",height:"200px",objectFit:"cover"}} />
                                                    </div>
                                                    <div className="d-flex flex-column flex-column justify-content-center align-items-center" style={{width:"250px"}}>
                                                       <p className="mb-1 text-muted">(Product Name)</p>
                                                        <Link to={`/product/${card.product._id}`} className="text-decoration-none"><strong className="text-dark fs-6">{card.product.name}</strong></Link>
                                                    </div>
                                                    <div className=" d-flex flex-column justify-content-center align-items-center pt-2" style={{width:"80px"}}>
                                                        <p className="mb-1 text-muted">(1pc. Amt)</p>
                                                        <p><strong> ₹{sellingprice}.00</strong></p>
                                                    </div>
                                                    <div className="d-flex flex-column align-items-center justify-content-center pt-3 " >
                                                        <div className="mb-0 text-muted">
                                                            <p>(Add count)</p>
                                                        </div>
                                                        <div >
                                                            <ul className="list-unstyled d-flex gap-3">
                                                                <li><button className="btn btn-danger" onClick={()=>handleDecrementQuantity(card.product._id)} disabled={card.custumQuantity<=1}>-</button></li>
                                                                <li><p className="mt-1"><strong>{card.custumQuantity}</strong></p></li>
                                                                <li><button className="btn btn-primary" onClick={()=>handleIncrementQuantity(card.product._id)} disabled={card.custumQuantity>=card.product.quantity}>+</button></li>
                                                            </ul>
                                                        </div>
                                                        
                                                    </div>
                                                    <div className=" d-flex flex-column align-items-center justify-content-center pt-2">
                                                        <p className="mb-1 text-muted">(Total. Amt)</p>
                                                        <p className="text-success fw-bold">₹{card.custumQuantity*sellingprice}.00</p>
                                                    </div>
                                                    <div className="d-flex flex-column align-items-center justify-content-center ms-5 pt-2">
                                                        <p className="mb-1 text-muted">(Delete)</p>
                                                        <p><Link> <i class="bi bi-trash3-fill text-danger"></i> </Link></p>
                                                    </div>
                                                </div>
                                                )
                                            })}
                                                
                                               
                                           
                                        </div>
                                </div>

                            
                               </>}
       
        </>
    )
}