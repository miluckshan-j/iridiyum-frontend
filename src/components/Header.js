import React from 'react';

function Header() {
  const headerBg = {
    backgroundColor: "#4a148c"
  }

  return (
    <nav className="navbar-dark p-1" style={headerBg}>
      <div className="container-fluid align-middle">
        <div className="row">
          <div className="col-2 border-right">
            <img src="./uob_logo.jpg" className="w-25" alt="" />
          </div>
          <div className="col-8 border-right">
            <form className="form-inline">
              <a className="h4 text-white text-decoration-none" href="#">Iridiyum</a>
              <input className="form-control w-50 ml-5" type="text" placeholder="Search" aria-label="Search" />
            </form>
          </div>
          <div className="col-2">
            <div className="list-inline">
              <p className="list-inline-item text-white mb-0">Miluckshan Jalangan</p>
              <a href="#" className="float-right">⚙️</a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );

}

export default Header;
