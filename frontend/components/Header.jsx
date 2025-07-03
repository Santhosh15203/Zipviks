import { Link } from "react-router-dom";
import SearchBar from "./SerachBar";

export default function Header({cardItems,setCardItems}) {
  return (
    <>
      <nav className="navbar navbar-expand-lg border-shadow border mb-0 bg-dark " style={{ fontFamily: "'Nunito Rounded', sans-serif" }}>
        <div className="container-fluid d-flex justify-content-around align-items-center">
          <div className="text-center">
            <Link to={"/"} className="text-decoration-none">
              <h3 className="text-white mb-0">
                <strong style={{ fontFamily: "'Arial', 'Helvetica', sans-serif" }}>ZipViks</strong>
              </h3>
              <p className="text-white small mb-0">
                <strong className="text-danger">🛩️Xplore</strong> with us
              </p>
            </Link>
          </div>

          <SearchBar/>

          <div className="mt-2" style={{ marginLeft: "-100px" }}>
            <ul className="list-unstyled d-flex gap-3 mb-0">
              <li><a href="#" className="text-decoration-none text-white small">Become a Supplier</a></li>
              <li className="text-white">|</li>
              <li><a href="#" className="text-decoration-none text-white small">Investor Relations</a></li>
            </ul>
          </div>

          <div className="d-flex gap-4 text-center mt-2 " style={{ marginLeft: "-120px" }}>
            <a href="#" className="text-white text-decoration-none lh-sm d-flex flex-column align-items-center gap-0">
              <i className="bi bi-person " style={{ color: "white" }}></i>
              <p className="mb-0 small">Profile</p>
            </a>
            <Link to={"/cart"} className="text-white text-decoration-none lh-sm d-flex flex-column align-items-center gap-0 ">
              <i className="bi bi-cart-dash " style={{ color: "white" }}>
                <sup className="text-warning fs-6">{cardItems?cardItems.length:0}</sup>
              </i>
              <p className="mb-0 small">Cart</p>
            </Link>
          </div>

        </div>
      </nav>
    </>
  );
}
