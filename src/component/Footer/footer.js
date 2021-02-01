import React, { Component } from 'react'
import { Button } from 'react-bootstrap';


class Footer extends Component {
    render() {
        return (
            <div>
                <footer className="tys-footer">
                    <div className="container coln">
                        <div className="row xc">
                            <div className="col-md-2 col-sm-2">
                                <span className="dre">SITE LINkS</span>
                                <ul className="nav flex-column">
                                    <li className="nav-item item">
                                        <a className="nav-links active " href="#">Auctions</a>
                                    </li>
                                    <li className="nav-item item">
                                        <a className="nav-links active" href="#">DealDash Reviews</a>
                                    </li>
                                    <li className="nav-item item">
                                        <a className="nav-links active" href="#">DealDash is Legit</a>
                                    </li>
                                    <li className="nav-item item">
                                        <a className="nav-links active" href="#">Log In</a>
                                    </li>
                                    <li className="nav-item item">
                                        <a className="nav-links active" href="#">Create account</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-md-3 col-sm-3">
                                <span className="dre">HELP</span>
                                <ul className="nav flex-column">
                                    <li className="nav-item">
                                        <a className="nav-links active" href="#">How its works</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-links active" href="#">How to bind in an auction</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-links active" href="#">Tips & Tricks</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-links active" href="#">What is a bid Pack?</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-links active" href="#">What is "Time as highest bidder"?</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-links active" href="#">Promotions</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-links active" href="#">Orders & Shippings</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-links active" href="#">Payment</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-links active" href="#">House Rules</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-md-2 col-sm-2">
                                <span className="dre">ABOUT</span>
                                <ul className="nav flex-column">
                                    <li className="nav-item">
                                        <a className="nav-links active" href="#">Our team</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-links active" href="#">Career</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-links active" href="#">Our values</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-links active" href="#">Terms of use</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-links active" href="#">Privacy policy</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-links active" href="#">Accessibility</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-md-3 col-sm-2">
                                <span className="dre">LATEST BLOGS</span>
                                <ul className="nav flex-column">
                                    <li className="nav-item">
                                        <a className="nav-links">03/12/2020</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-links active" href="#">Free Dealdash Bids?Join the 11 Birthday Celebration!</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-links">03/04/2020</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-links active" href="#">The Artsy Auctions Shirley Loves TO Bid On!</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link">02/13/2020</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-links active" href="#">Online Auction Promotions Explained More Post</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-md-2 col-sm-2">
                                <h5>Free Shipping on all item!</h5>
                                <h5>Amazing Deal 24/7</h5>
                                <Button variant="primary">Get Started</Button>
                                <ul class="list-inline social-list">
                                    <li class="list-inline-item"><a href="#"><i class="icon-Sfb"></i></a></li>
                                    <li class="list-inline-item"><a href="#"><i class="icon-Stwitter"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        )
    }
}
export default Footer;
