import { useState,useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function PaymentMethod({cardItems,setCardItems,loggedInUser}){
     function switchModal(fromId, toId) {
            const fromEle = document.getElementById(fromId);
            const toEle = document.getElementById(toId);
    
            if (fromEle && toEle) {
            const hideModal = bootstrap.Modal.getInstance(fromEle) || new bootstrap.Modal(fromEle);
            const showModal = bootstrap.Modal.getInstance(toEle) || new bootstrap.Modal(toEle);
            hideModal.hide();
            setTimeout(() => {
              showModal.show()
            }, 300);
            }
          }    
    
      
         const [firstname, setFirstname] = useState("");
        const [mobile, setMobile] = useState("");
        const [email, setEmail] = useState("");
        const [password, setPassword] = useState("");
        const [profile, setProfile] = useState(null);
        const [gender, setGender] = useState("");
        const [address, setAddress] = useState("");
        const [city, setCity] = useState("");
        const [state, setState] = useState("Tamil Nadu");
        const [zipcode, setZipcode] = useState("");
        const [country, setCountry] = useState("India");
        const [showPassword, setShowPassword] = useState(false);
      
      useEffect(() => {
        if (loggedInUser) {
          setFirstname(loggedInUser.firstname || "");
          setMobile(loggedInUser.mobile || "");
          setEmail(loggedInUser.email || "");
          setPassword(loggedInUser.password || "");
          setGender(loggedInUser.gender || "");
          setAddress(loggedInUser.address || "");
          setCity(loggedInUser.city || "");
          setState(loggedInUser.state || "");
          setZipcode(loggedInUser.zipcode || "");
          setCountry(loggedInUser.country || "");
          setProfile(loggedInUser.profile );
        }
      }, [loggedInUser]);

      const[showUPI,setShowUPI]=useState(false)
      const[paymentOption,setPaymentOption]=useState("Google Pay")
    
    
       
        const handleUpdate=async(e)=>{
          e.preventDefault()
           const formData = new FormData();
                formData.append("firstname", firstname);
                formData.append("mobile", mobile);
                formData.append("email", email);
                formData.append("password", password);
                formData.append("profile", profile); 
                formData.append("gender", gender);
                formData.append("address", address);
                formData.append("city", city);
                formData.append("state", state);
                formData.append("zipcode", zipcode);
                formData.append("country", country);
          try{
               
                const response= await fetch(`${import.meta.env.VITE_REACT_APP_PRODUCT_URL}/registerform/${loggedInUser._id}`, {
                    method:"PUT",
                    body:formData
                   
                })
                const recentUserData=await response.json()
                  if(response.ok){
                  setLoggedInUser(recentUserData.updateUser)
                    toast.success("Update Successful");
                    const modal = bootstrap.Modal.getInstance(document.getElementById('updateRegisterModal'));
                    modal?.hide();}
                  else{
                    toast.error("Update error")
                  }
                    
                
          }
          catch(error){
            console.log("error in update",error)
          }
               
            }
    return(
        <>
          <div className=" d-flex justify-content-around mb-3 mt-3 gap-5 container">
           

            <div className="d-flex flex-column  p-3 w-75">
               <div>
                    <h5 className=" text-dark fw-bold text-center mt-2 text-decoration-underline " >BILLING DETAILS</h5>
               </div>
              <div className="rounded shadow p-3 mt-3 " >
                
                <div  >
                    
                
                      <div className="d-flex justify-content-between mt-3 mb-2 gap-4 text-start">
                        <div className="w-50" >
                            <label className="fw-bold small" > Name :</label>
                          <input type="text"   className="form-control " style={{cursor:"none"}}  value={firstname} name="firstname" readOnly/>
                        </div>
                         <div className="w-50">
                            <label className="fw-bold small" > Mobile :</label>
                          <input type="tel"  className="form-control " name="mobile" style={{cursor:"none"}} value={mobile}  readOnly/>
                        </div>
                       
                      </div>
                      <div className="text-start">
                        <label className="fw-bold small" >Address : </label>
                        <input   name="address" className="form-control p-4" style={{cursor:"none"}} value={address} readOnly></input>
                      </div>

                       <div className="d-flex mt-2 mb-2 justify-content-between gap-3 ">
                        <div className="">
                            <label className="fw-bold small" >City : </label>
                          <input type="text"  className="form-control " style={{cursor:"none"}} name="city" value={city} readOnly/>
                        </div>
                        <div className="">
                          <label className="fw-bold small" >State : </label>
                          <input type="text"  className="form-control " style={{cursor:"none"}} name="state" value={state} readOnly/>
                        </div>
                         <div className="">
                          <label className="fw-bold small" >ZipCode : </label>
                          <input type="text" className="form-control " style={{cursor:"none"}} value={zipcode} name="zipcode"  readOnly/>
                        </div>
                      </div>
                      
                     
            
            </div>
              </div>
               <div className="text-end mt-4 gap-0 small">
                  <p className="mb-0">If you want to edit this <span className="fw-bold">Billing Details</span>, click the link below.</p>
                  <p className="text-danger small  text-decoration-underline" style={{cursor:"pointer"}} data-bs-toggle="modal" data-bs-target="#updateRegisterModal" >Edit profile</p>

                </div>

            </div>
            
            <div className="shadow p-4 w-50">
              <div className="p-1 ">
                <h6 className=" text-center fw-bold text-decoration-underline ">PRICE DETAILS <span className="text-success " >({cardItems.reduce((acc,card)=>(acc+card.custumQuantity),0)} items)</span></h6>
              </div>
              <hr />
              <div className="d-flex justify-content-between gap-5">
                <p>Total MRP (Inc.all Taxes)</p>
                <p>₹{cardItems.reduce((acc,card)=>{
                  const fixedprice=Number(String(card.product.fixedprice).replace(/,/g,""))
                  return (acc+fixedprice*card.custumQuantity)
                },0)}.00</p>
              </div>
              <div className="d-flex justify-content-between gap-5">
                <p>Total Discount Amt</p>
                <p className="text-danger">- ₹{cardItems.reduce((acc,card)=>{
                  const fixedprice=Number(String(card.product.fixedprice).replace(/,/g,""))
                  const discount=Number(card.product.discount/100)
                  const totalDiscount=Number(fixedprice*discount).toFixed(0)
                  return (acc+totalDiscount*card.custumQuantity)
                },0)}.00</p>
              </div>
              <div className="d-flex justify-content-between gap-5">
                <p>Delivery</p>
                <p className="text-success">🛵Free</p>
              </div>
              <div className="d-flex justify-content-between gap-5  border-bottom">
                <h6>Total Payment</h6>
                <h6>₹{cardItems.reduce((acc,card)=>{
                                                    const discount=Number(card.product.discount)
                                                    const fixedprice=Number(String(card.product.fixedprice).replace(/,/g,""))
                                                    const sellingprice=Number(fixedprice-(fixedprice*discount/100)).toFixed(0)
                                                    return (acc+(card.custumQuantity*Number(sellingprice)))
                                                    },0)}.00</h6>
              </div>


              <div className="mt-3 ">
                <h6 className="fw-bold text-center text-decoration-underline ">PAYMENT METHOD</h6>
  
              <div className="mt-4">
                <input type="checkbox" onChange={()=>{setShowUPI(!showUPI)}} /> <span >Pay via UPI</span>
                {showUPI && (
                  <>
                        <div className="d-flex justify-content-around mt-3 gap-0">
                          <div className="" onClick={()=>{setPaymentOption("Google Pay")}} style={{cursor:"pointer"}}>
                            <img src="./form/gpay.jpeg" alt="gpay" className="shadow rounded"  style={{width:"50px"}} />
                            <p className="text-center small mt-1 ">Gpay</p>
                          </div>
                          <div className="" onClick={()=>{setPaymentOption("PhonePe")}} style={{cursor:"pointer"}}>
                            <img src="./form/phonepe.png" alt="phonepe"  className="shadow rounded"  style={{width:"50px"}} />
                            <p className="text-center small mt-1">PhonePe</p>
                          </div>
                          <div className="" onClick={()=>{setPaymentOption("Paytm")}} style={{cursor:"pointer"}}>
                            <img src="./form/paytm.png" alt="paytm"  className="shadow rounded" style={{width:"50px"}} />
                            <p className="text-center small mt-1">Paytm</p>
                          </div>
                          <div className="" onClick={()=>{setPaymentOption("Bhim")}} style={{cursor:"pointer"}}>
                            <img src="./form/bhim.png" alt="bhim" className="shadow rounded" style={{width:"50px"}} />
                            <p className="text-center small mt-1">Bhim</p>
                          </div>
                        </div>

                   <div className="bg-warning rounded mt-1">
                      <p className="fw-bold p-2 text-center">Pay ₹{cardItems.reduce((acc,card)=>{
                                                        const discount=Number(card.product.discount)
                                                        const fixedprice=Number(String(card.product.fixedprice).replace(/,/g,""))
                                                        const sellingprice=Number(fixedprice-(fixedprice*discount/100)).toFixed(0)
                                                        return (acc+(card.custumQuantity*Number(sellingprice)))
                                                        },0)}.00  <span className="small ms-1">via {paymentOption}</span></p>
                    </div>
                  
                  </>
                  
                 
                    
                )}
                
                

              </div>


                  
    
              </div>

            </div>
            
          </div>
        </>
    )
}