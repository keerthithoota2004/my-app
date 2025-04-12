import React from 'react';
import PropTypes from 'prop-types';

export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
      <div className="container-fluid">
        <button className="navbar-brand" onClick={(e) => e.preventDefault()}>{props.title}</button>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <button className="nav-link active" onClick={(e) => e.preventDefault()} aria-current="page">Home</button>
            </li>
            <li className="nav-item dropdown">
              <button className="nav-link dropdown-toggle" onClick={(e) => e.preventDefault()} role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Dropdown
              </button>
              <ul className="dropdown-menu">
                <li><button className="dropdown-item" onClick={(e) => e.preventDefault()}>Action</button></li>
                <li><button className="dropdown-item" onClick={(e) => e.preventDefault()}>Another action</button></li>
                <li><hr className="dropdown-divider" /></li>
                <li><button className="dropdown-item" onClick={(e) => e.preventDefault()}>Something else here</button></li>
              </ul>
            </li>
          </ul>

          <form className="d-flex me-3" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form>

          <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'}`}>
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              id="switchCheckDefault"
              onClick={props.toggleMode}
            />
            <label className="form-check-label" htmlFor="switchCheckDefault">Enable Dark Mode</label>
          </div>
        </div>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  title: PropTypes.string,
  aboutText: PropTypes.string
};

Navbar.defaultProps = {
  title: 'Set title here',
  aboutText: 'About text here'
};
