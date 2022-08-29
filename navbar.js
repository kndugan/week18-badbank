function NavBar(){
  return(
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark mynav">
        <div className="container-fluid">
          <li className="nav-item dropdown">
          <a className="navbar-brand" href="#">BadBank</a>
             <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <li><a className="dropdown-item mydropdown">Home</a></li>
              </ul>
          </li>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
            <ul className="navbar-nav">

            <li className="nav-item dropdown">
                <a className="nav-link" href="#/CreateAccount/">CreateAccount</a>

                <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                  <li><a className="dropdown-item">Create an Account</a></li>
                </ul>
              </li>

              <li className="nav-item dropdown">
                <a className="nav-link" href="#/deposit/">Deposit</a>

                <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                  <li><a className="dropdown-item">Make a Deposit</a></li>
                </ul>
              </li>
              
              <li className="nav-item dropdown">
                <a className="nav-link" href="#/withdraw/">Withdraw</a>

                <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                  <li><a className="dropdown-item">Withdraw Funds</a></li>
                </ul>
              </li>
              
              <li className="nav-item dropdown">
                <a className="nav-link" href="#/alldata">AllData</a>

                <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                  <li><a className="dropdown-item">View Data</a></li>
                </ul>
              </li>

            </ul>
          </div>
        </div>
      </nav>
 

    </>
  );
}