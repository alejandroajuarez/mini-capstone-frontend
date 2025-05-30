import { LogoutLink } from "./LogoutLink";
import { ThemeToggleButton } from "bootstrap-theme-toggle";

export function Header() {
  let authenticationLinks;

  if (localStorage.jwt) {
    authenticationLinks = (
      <div>
        <li><LogoutLink className="dropdown-item"/></li>
      </div>
    )
  } else {
    authenticationLinks = (
      <div>
        <li className="dropdown-item">
          <a className="nav-link" href="/login">Login</a>
        </li>
        <li className="dropdown-item">
          <a className="nav-link" href="/signup">Sign Up</a>
        </li>
      </div>
    )
  }
  return (
<div className="sticky-top">
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
        <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Authentication
              </a>
            <ul className="dropdown-menu">
          {authenticationLinks}
          </ul>
        <li className="nav-item">
          <ThemeToggleButton />
        </li>
      </ul>
    </div>
  </div>
</nav>
</div>
  );
}

