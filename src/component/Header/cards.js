import React, { useState, useEffect } from "react";
import axios from 'axios';
import Car2 from "../asset/Car2.jpg";
import Loader from "react-loader-spinner"
import { withRouter } from "react-router"
import { Card, Button } from "react-bootstrap";

function Cards(props) {

    const [data, setData] = useState({ users: [] });
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(false)
        const fetchData = async () => {
            const { data } = await axios(
                'https://jsonplaceholder.typicode.com/users',
            );
            setData({ users: data })
            setLoading(true)
        };
        fetchData();
    }, [setData]);


    const Detail = () => {
        props.history.push("/Detail")
    }


    return (

        <div className='container'>
            {!loading && <div style={{ width:"100%", height:"100", display:"flex", justifyContent:"center", alignItems:"center", marginTop: "15%" }}>
                <Loader type="Grid" color="green" height="50" width="100" />
            </div>
                ||
                <div className="row">


                    {
                        data.users.map((Item, index) => (
                            <div className="col-lg-4 col-md-4 col-sm-6 mt-3" onClick={() => props.history.push("/Detail", data.users[index])}>
                                <Card className="card">
                                    <Card.Img variant="top" src={Car2} alt="..." />
                                    <Card.Body className="card-body ght">
                                        <Card.Title className="house">{Item.name}</Card.Title>
                                        <Card.Text>{Item.email}</Card.Text>
                                    </Card.Body>
                                </Card>
                            </div>
                        ))
                    }


                </div>
            }
        </div>


    )


}

export default withRouter(Cards)





//     < Card style = {{ width: '18rem' }}>
//   <Card.Img variant="top" src="holder.js/100px180" />
//   <Card.Body>
//     <Card.Title>Card Title</Card.Title>
//     <Card.Text>
//                 Some quick example text to build on the card title and make up the bulk of
//                 the card's content.
//     </Card.Text>
//     <Button variant="primary">Go somewhere</Button>
//   </Card.Body>
// </Card >
