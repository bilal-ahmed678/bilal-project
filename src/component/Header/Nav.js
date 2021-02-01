import React, { Component } from 'react'
import { Button } from 'react-bootstrap'
import {Link} from 'react-router-dom'

class Nav extends Component {
    render() {
        return (
            <div className="container">
                <Button><Link to="/Help">Help</Link></Button>
                <Button><Link to="/How_its_work">How its work</Link></Button>
            </div>
        )
    }
}
export default Nav;
