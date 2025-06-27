export default function Header() {
  return (
    <>
      <nav className="navbar navbar-expand-lg border-shadow border mb-0 bg-dark " style={{ fontFamily: "'Nunito Rounded', sans-serif" }}>
        <div className="container-fluid d-flex justify-content-around align-items-center">
          <div className="text-center">
            <a href="#" className="text-decoration-none">
              <h3 className="text-white mb-0">
                <strong style={{ fontFamily: "'Arial', 'Helvetica', sans-serif" }}>ZipViks</strong>
              </h3>
              <p className="text-white small mb-0">
                <strong>🛩️Xplore</strong> with us
              </p>
            </a>
          </div>

     
          <div className="d-flex align-items-center " style={{ marginLeft: "-100px" }}>
            <input
              type="text"
              className="form-control border border-secondary  search "
              placeholder="Search for Products, Brands and More"
              style={{ width: "650px" }}
            />
            <span className=""><a href="#" className="btn btn-danger ms-2  " style={{fontFamily: "'Nunito Rounded', sans-serif",fontSize:"13.5px"}}> <strong>Go</strong> </a></span>
          </div>

         
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
            <a href="#" className="text-white text-decoration-none lh-sm d-flex flex-column align-items-center gap-0 ">
              <i className="bi bi-cart-dash " style={{ color: "white" }}>
                <text className="text-warning fs-6">5</text>
              </i>
              <p className="mb-0 small">Cart</p>
            </a>
          </div>

        </div>
      </nav>
    </>
  );
}
