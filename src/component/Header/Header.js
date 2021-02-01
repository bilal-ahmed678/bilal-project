import React, { Component } from 'react';
import Logo from "../asset/logo.png";
import Blue from "../asset/blue.png";
import { Container } from 'react-bootstrap';


class Header extends Component {
    render() {
        return (
            <div>
                <div className="container">
                    <div className="row bilalRew">
                        <div className="col-5 col-sm-3 col-md-4 col-xl-4">
                            <img src={Logo} alt="HeaderLogo" className="bilalImg" />
                        </div>
                        <div className="col-2 col-sm-6 col-md-7 col-xl-7">

                        </div>
                        <div className="col-5 col-sm-3 col-md-1 col-xl-1">
                            <img src={Blue} alt="HeaderLogo" className="blueImg" />
                            <button type="button" className="btn btn-primary btn-sm log">log in</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Header;