import { Link } from "react-router-dom";
import SearchBar from "./SerachBar";
import "../pages/Home.css";
import RegisterForm from "./RegisterForm";
import LoginForm from "./LoginForm";
import EmailForm from "./EmailForm";

export default function Header({cardItems,setCardItems}) {
  function switchModal(fromId,toId){
    const hideModal=bootstrap.Modal.getInstance(document.getElementById(fromId)) || new bootstrap.Modal(fromId)
    const showModal=bootstrap.Modal.getInstance(document.getElementById(toId)) || new bootstrap.Modal(toId)
    hideModal.hide()
    showModal.show()
  }


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
            </ul>
          </div>

          <div className="d-flex gap-4 text-center mt-2 " >  {/*cart and user */}
             <Link to={"/cart"} className="text-white text-decoration-none lh-sm d-flex flex-column align-items-center gap-0 ">
              <i className="bi bi-cart-dash " style={{ color: "white" }}>
                <sup className="text-warning fs-6">{cardItems?cardItems.length:0}</sup>
              </i>
              <p className="mb-0 small">Cart</p>
            </Link>

            <div className="text-white text-decoration-none lh-sm d-flex flex-column align-items-center gap-0">
              <i className="bi bi-person " style={{ color: "white" }}></i>
              <div className="dropdown text-decoration-none " style={{ cursor: "pointer" }}>
                <p className="text-white mb-0 small dropdown-toggle " data-bs-toggle="dropdown">User </p>
                <ul className="dropdown-menu " >
                  <li className="dropdown-item user small" data-bs-toggle="modal" data-bs-target="#loginModal" >Login</li>
                  <li className="dropdown-item  user small" data-bs-toggle="modal" data-bs-target="#registerModal" >Sign Up</li>
                </ul>
              </div>
            </div>

            <LoginForm/>
            <EmailForm/>
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
