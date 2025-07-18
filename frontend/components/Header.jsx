import { Link } from "react-router-dom";
import SearchBar from "./SerachBar";
import "../pages/Home.css";
import RegisterForm from "./RegisterForm";
import LoginForm from "./LoginForm";
import EmailForm from "./EmailForm";
import { toast } from "react-toastify";
export default function Header({cardItems,setCardItems,loggedInUser,setLoggedInUser}) {


  return (
    <>
    <div className="d-flex flex-column">
       <nav className="navbar navbar-expand-lg d-flex flex-column border-shadow border mb-0 bg-dark " style={{ fontFamily: "'Nunito Rounded', sans-serif" }}>
        <div className="container d-flex justify-content-around align-items-center p-0">

          <div className="text-center">              {/*Logo link */}
            <Link to={"/"} className="text-decoration-none">
              <h3 className="text-white mb-0">
                <strong style={{ fontFamily: "'Arial', 'Helvetica', sans-serif" }}>ZipViks</strong>
              </h3>
              <p className="text-white small mb-0">
                <strong className="text-danger">🛩️Xplore</strong> with us
              </p>
            </Link>
          </div>

          <SearchBar/>   {/*search bar */}

          <div className="mt-2" >
            <ul className="list-unstyled d-flex gap-3 mb-0">
              <li><a href="#" className="text-decoration-none text-white small">Become a Supplier</a></li>
              <li className="text-white">|</li>
              <li><a href="#" className="text-decoration-none text-white small">Investor Relations</a></li>
               <li className="text-white">|</li>
            </ul>
          </div>

          <div className="d-flex gap-4 text-center mt-2 " >  {/*cart and user */}
             <Link to={"/cart"} className="text-white text-decoration-none lh-sm d-flex flex-column align-items-center gap-1 mt-1">
              <i className="bi bi-cart-dash " style={{ color: "white" }}>
                <sup className="text-warning fs-6">{cardItems?cardItems.length:0}</sup>
              </i>
              <p className=" small">Cart</p>
            </Link>

            {loggedInUser ? 
            <>
             <div className="text-white text-decoration-none lh-sm d-flex align-items-center gap-0">
              <div className="gap-3 d-flex dropdown text-decoration-none" style={{cursor:"pointer"}}>
                 <div className="small" data-bs-toggle="dropdown">
                  <img src={`${import.meta.env.VITE_REACT_APP_PRODUCT_URL}/uploads/${loggedInUser.profile}`} className="rounded-circle" style={{ width: "25px", height: "25px", objectFit: "cover" }} alt="Personal_Image" />
                  <p className="text-white mt-1">Hi, {loggedInUser.firstname}</p>
                </div>
                <ul className="dropdown-menu p-0 rounded mt-2">
                  <li className="dropdown-item p-0 mb-0 user"><p className="small">Edits</p></li>
                  <li className="dropdown-item p-0 mt-0 user" style={{cursor:"pointer"}} onClick={()=>{setLoggedInUser("");toast.success("Logged Out !")}}>  
                        <p className="text-danger small" >Log Out</p>
                  </li>
                </ul>
               
              </div>
               
            </div>
            </> :
            
            <>  <div className="text-white text-decoration-none lh-sm d-flex flex-column align-items-center gap-0 mt-2">
                  <i className="bi bi-person " style={{ color: "white" }}></i>
                  <div className="dropdown text-decoration-none" style={{ cursor: "pointer" }}>
                    <p className="text-white mb-0 small dropdown-toggle " data-bs-toggle="dropdown">User </p>
                    <ul className="dropdown-menu p-0 rounded mt-2" style={{minWidth:"80px"}} >
                      <li className="dropdown-item user small" data-bs-toggle="modal" data-bs-target="#loginModal" >Login</li>
                      <li className="dropdown-item  user small" data-bs-toggle="modal" data-bs-target="#registerModal" >Sign Up</li>
                    </ul>
                  </div>
                </div> 
            
            </> }
             
    

            <LoginForm  setLoggedInUser={setLoggedInUser}/>
            <EmailForm  setLoggedInUser={setLoggedInUser}/>
            <RegisterForm/>
          </div>
          
        </div>
      </nav>
      <div className="display-container  mb-0" >
        <ul className="d-flex gap-4  text-dark list-unstyled display pb-0 pt-1 fw-bold bg-warning">
          <li className="ms-5">🚚Free Shipping on All Products!</li>
          <li>🛒 Unstoppable Deals. Unbeatable Prices.</li>
          <li>💥 Start Shopping Now — Before It’s Gone!</li>
          <li>🔥 Trending Products Selling Out Fast!</li>
          <li>🧾 No Hidden Charges – What You See Is What You Pay!</li>
        </ul>
      </div>
    </div>
     
    </>
  );
}
