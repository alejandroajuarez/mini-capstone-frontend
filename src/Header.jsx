import { Link } from "react-router-dom";

export function Header() {
  return (
<nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="/">Home</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav">
        {/* <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Home</a>
        </li> */}
        {/* <li className="nav-item">
          <a className="nav-link" href="/">All Products</a>
        </li> */}
        <li className="nav-item">
          <a className="nav-link" href="/products/new">New Products</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/orders/new">Orders</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Account
          </a>
          <ul className="dropdown-menu">
            <li><Link className="dropdown-item" to="/login">Login</Link></li>
            <li><Link className="dropdown-item" to="/signup">Sign Up</Link></li>
            <li><Link className="dropdown-item" href="#">Logout</Link></li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>
  );
}

