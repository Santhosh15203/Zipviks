export default function Header() {
  return (
    <>
      <nav className="navbar navbar-expand-lg border-shadow border mb-0" style={{ fontFamily: "'Nunito Rounded', sans-serif" }}>
        <div className="container-fluid d-flex justify-content-around align-items-center">
          <div className="text-center">
            <a href="#" className="text-decoration-none">
              <h3 className="text-primary mb-0">
                <strong style={{ fontFamily: "'Arial', 'Helvetica', sans-serif" }}>ZipViks</strong>
              </h3>
              <p className="text-dark mb-0">
                <strong>✈️ Xplore</strong> with us
              </p>
            </a>
          </div>

     
          <div className="d-flex align-items-center" style={{ marginLeft: "-100px" }}>
            <input
              type="text"
              className="form-control border border-secondary"
              placeholder="🔎 Search for Products, Brands and More"
              style={{ width: "650px" }}
            />
            <a href="#" className="btn btn-primary ms-2">Go</a>
          </div>

         
          <div className="mt-2" style={{ marginLeft: "-100px" }}>
            <ul className="list-unstyled d-flex gap-3 mb-0">
              <li><a href="#" className="text-decoration-none text-dark">Become a Supplier</a></li>
              <li>|</li>
              <li><a href="#" className="text-decoration-none text-dark">Investor Relations</a></li>
            </ul>
          </div>

          
          <div className="d-flex gap-4 text-center mt-2" style={{ marginLeft: "-120px" }}>
            <a href="#" className="text-dark text-decoration-none lh-sm d-flex flex-column align-items-center gap-0">
              <i className="bi bi-person fs-5" style={{ color: "#000" }}></i>
              <p className="mb-0">Profile</p>
            </a>
            <a href="#" className="text-dark text-decoration-none lh-sm d-flex flex-column align-items-center gap-0">
              <i className="bi bi-cart-dash fs-5" style={{ color: "#000" }}>
                <sup className="text-danger">4</sup>
              </i>
              <p className="mb-0">Cart</p>
            </a>
          </div>

        </div>
      </nav>
    </>
  );
}
