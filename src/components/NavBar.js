import React from 'react'
import { Link } from "react-router-dom";

const NavBar = (props)=>{

        return (
            <div>
                <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
                    <div className="container-fluid">
                        <Link className="navbar-brand" to="/">NewsMonkey</Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link" aria-current="page" to="/">Home</Link>
                            </li>
                            <div className="dropdown" style={{marginRight:"8px"}}>
                            <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Category
                            </button>
                            <ul className="dropdown-menu">
                                <li><Link className="dropdown-item" to="/business">Business</Link></li>
                                <li><Link className="dropdown-item" to="/entertainment">Entertainment</Link></li>
                                <li><Link className="dropdown-item" to="/health">Health</Link></li>
                                <li><Link className="dropdown-item" to="/science">Science</Link></li>
                                <li><Link className="dropdown-item" to="/sports">Sports</Link></li>
                                <li><Link className="dropdown-item" to="/technology">Technology</Link></li>
                            </ul>
                        </div>
                        <li className='nav-item' style={{marginTop:"5px"}}>
                        <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
                            <input className="form-check-input" onClick={props.toggleMode} type="checkbox" id="flexSwitchCheckDefault"/>
                            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable DarkMode</label>
                        </div>
                        </li>
                        
                        </ul>
                        </div>
                    </div>
                    </nav>
            </div>
    )
}
export default NavBar
