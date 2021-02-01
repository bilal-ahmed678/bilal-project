import React, { Component } from 'react'
import Car2 from "../component/asset/Car2.jpg";
import { Card, ListGroup } from "react-bootstrap"

class Detail extends Component {
    render() {
        return (
            <div>
                <div style={{ display: "flex", justifyContent: "center", alignItems: "center", marginTop: "20px" }}>
                    <Card className="card">
                        <Card.Img variant="top" src={Car2} alt="..." />
                        <Card.Body className="card-body ght" style={{ flex: 1 }}>
                            <ListGroup variant="flush">
                                <Card.Title className="house">Name</Card.Title>
                                <ListGroup.Item>{this.props.location.state.name}</ListGroup.Item>
                                <Card.Title className="house">Email </Card.Title>
                                <ListGroup.Item>{this.props.location.state.email}</ListGroup.Item>
                                <Card.Title className="house">Phone </Card.Title>
                                <ListGroup.Item>{this.props.location.state.phone}</ListGroup.Item>
                                <Card.Title className="house">UserName </Card.Title>
                                <ListGroup.Item>{this.props.location.state.username}</ListGroup.Item>
                                <Card.Title className="house">Website </Card.Title>
                                <ListGroup.Item>{this.props.location.state.website}</ListGroup.Item>
                                <Card.Title className="house">CompanyName </Card.Title>
                                <ListGroup.Item>{this.props.location.state.company.name}</ListGroup.Item>
                                <Card.Title className="house">Catch Phrase </Card.Title>
                                <ListGroup.Item>{this.props.location.state.company.catchPhrase}</ListGroup.Item>
                                <Card.Title className="house">Bs </Card.Title>
                                <ListGroup.Item>{this.props.location.state.company.bs}</ListGroup.Item>
                                <Card.Title className="house">Address</Card.Title>
                                <ListGroup.Item>{this.props.location.state.address.street},{this.props.location.state.address.suite},{this.props.location.state.address.city},{this.props.location.state.address.zipcode}</ListGroup.Item>
                            </ListGroup>
                            <Card.Text>not for sale</Card.Text>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        )
    }
}

export default Detail;
